// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import { rateLimit } from '@/lib/rate-limit'

// Rate limiting
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Allow 500 unique tokens per minute
})

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  company: z.string().max(100).optional(),
  propertyType: z.string().min(1),
  units: z.string().optional(),
  currentManager: z.string().max(100).optional(),
  serviceType: z.string().min(1),
  message: z.string().min(10).max(2000),
  newsletter: z.boolean().default(false),
  privacy: z.boolean().refine((val) => val === true),
})

// Email template
function generateEmailTemplate(data: any) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #006633, #6B1D7F); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #006633; }
          .value { margin-top: 5px; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>NewGen Strata Services</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            
            ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Property Type:</div>
              <div class="value">${data.propertyType}</div>
            </div>
            
            ${data.units ? `
            <div class="field">
              <div class="label">Number of Units:</div>
              <div class="value">${data.units}</div>
            </div>
            ` : ''}
            
            ${data.currentManager ? `
            <div class="field">
              <div class="label">Current Manager:</div>
              <div class="value">${data.currentManager}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Service Type:</div>
              <div class="value">${data.serviceType}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
            
            <div class="field">
              <div class="label">Newsletter Subscription:</div>
              <div class="value">${data.newsletter ? 'Yes' : 'No'}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This message was sent from the NewGen Strata Services contact form.</p>
            <p>Submitted on ${new Date().toLocaleString('en-AU')}</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip ?? '127.0.0.1'
    const { success } = await limiter.check(5, ip) // 5 requests per minute
    
    if (!success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Create nodemailer transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_PORT === '465',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Email to company
    const companyEmailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'info@newgenstrataservices.com.au',
      subject: `New Contact Form Submission - ${validatedData.firstName} ${validatedData.lastName}`,
      html: generateEmailTemplate(validatedData),
      replyTo: validatedData.email,
    }

    // Auto-reply email to customer
    const customerEmailOptions = {
      from: process.env.EMAIL_FROM,
      to: validatedData.email,
      subject: 'Thank you for contacting NewGen Strata Services',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Thank You - NewGen Strata Services</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #006633, #6B1D7F); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: white; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
              .highlight { color: #006633; font-weight: bold; }
              .footer { background: #f9f9f9; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You!</h1>
                <p>Your message has been received</p>
              </div>
              
              <div class="content">
                <p>Dear ${validatedData.firstName},</p>
                
                <p>Thank you for contacting NewGen Strata Services. We have received your inquiry and will respond within <span class="highlight">2 hours during business hours</span> (Monday to Friday, 9:00 AM - 5:00 PM AEST).</p>
                
                <p>Here's what happens next:</p>
                <ul>
                  <li>One of our experienced team members will review your inquiry</li>
                  <li>We'll prepare a personalized response based on your specific needs</li>
                  <li>You'll receive a detailed reply with next steps and recommendations</li>
                </ul>
                
                <p>If your inquiry is urgent, please don't hesitate to call us directly at <strong>+61 3 9XXX XXXX</strong>.</p>
                
                <p>We look forward to helping you experience the NewGen difference!</p>
                
                <p>Best regards,<br>
                <strong>The NewGen Strata Services Team</strong></p>
                
                <p><em>"The quality is long remembered after the price is forgotten"</em></p>
              </div>
              
              <div class="footer">
                <p>NewGen Strata Services Pty Ltd<br>
                Melbourne, Victoria, Australia<br>
                Email: info@newgenstrataservices.com.au<br>
                Phone: +61 3 9XXX XXXX</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send emails
    await Promise.all([
      transporter.sendMail(companyEmailOptions),
      transporter.sendMail(customerEmailOptions),
    ])

    // Log successful submission (in production, you might want to use a proper logging service)
    console.log('Contact form submission received:', {
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
      serviceType: validatedData.serviceType,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully. We will respond within 2 hours during business hours.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Invalid form data',
          details: error.errors 
        },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

// CORS headers for preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}