import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Rate limiting helper (simple in-memory implementation)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now()
  const userLimit = rateLimit.get(identifier)

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (userLimit.count >= maxRequests) {
    return false
  }

  userLimit.count++
  return true
}

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
  // newsletter: z.boolean().default(false),
  // privacy: z.boolean().refine((val) => val === true),
})

type ContactFormData = z.infer<typeof contactSchema>

// Email template generator
function generateEmailTemplate(data: ContactFormData): string {
  const formatPropertyType = (type: string) => {
    const types: Record<string, string> = {
      'apartment': 'Apartment Complex',
      'townhouse': 'Townhouse Complex',
      'mixed': 'Mixed Development',
      'commercial': 'Commercial Property',
      'retirement': 'Retirement Living',
      'other': 'Other'
    }
    return types[type] || type
  }

  const formatServiceType = (type: string) => {
    const types: Record<string, string> = {
      'full-management': 'Full Strata Management',
      'consultation': 'Consultation Services',
      'transition': 'Management Transition',
      'emergency': 'Emergency Support',
      'quote': 'Get a Quote',
      'agm-planning': 'AGM Planning & Support',
      'financial-review': 'Financial Review',
      'other': 'Other Services'
    }
    return types[type] || type
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #006633, #6B1D7F); color: white; padding: 30px 20px; text-align: center; }
          .header h1 { margin: 0 0 10px 0; font-size: 24px; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
          .field:last-child { border-bottom: none; }
          .label { font-weight: 600; color: #006633; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
          .value { font-size: 16px; color: #333; }
          .priority { background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Contact Form Submission</h1>
            <p style="margin: 0; opacity: 0.9;">NewGen Strata Services</p>
          </div>
          
          <div class="content">
            ${data.serviceType === 'emergency' ? '<div class="priority">⚠️ <strong>URGENT:</strong> This is an emergency support request and requires immediate attention!</div>' : ''}
            
            <div class="field">
              <div class="label">Contact Person</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${data.email}" style="color: #006633;">${data.email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${data.phone}" style="color: #006633;">${data.phone}</a></div>
            </div>
            
            ${data.company ? `
            <div class="field">
              <div class="label">Company / Owners Corporation</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Property Type</div>
              <div class="value">${formatPropertyType(data.propertyType)}</div>
            </div>
            
            ${data.units ? `
            <div class="field">
              <div class="label">Number of Units/Lots</div>
              <div class="value">${data.units} units</div>
            </div>
            ` : ''}
            
            ${data.currentManager ? `
            <div class="field">
              <div class="label">Current Strata Manager</div>
              <div class="value">${data.currentManager}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Service Required</div>
              <div class="value"><strong>${formatServiceType(data.serviceType)}</strong></div>
            </div>
            
            <div class="field">
              <div class="label">Message</div>
              <div class="value" style="white-space: pre-wrap;">${data.message}</div>
            </div>
            
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong>Action Required:</strong> Please respond within 2 hours during business hours</p>
            <p style="margin: 0;">Submitted on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne', dateStyle: 'full', timeStyle: 'long' })}</p>
          </div>
        </div>
      </body>
    </html>
  `
}

// Customer auto-reply template
function generateCustomerEmailTemplate(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - NewGen Strata Services</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.7; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #006633, #6B1D7F); color: white; padding: 40px 20px; text-align: center; }
          .header h1 { margin: 0 0 10px 0; font-size: 28px; }
          .content { padding: 35px; }
          .content p { margin: 0 0 15px 0; }
          .highlight { color: #006633; font-weight: 600; }
          .cta-button { display: inline-block; background: #006633; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: 600; }
          .info-box { background: #F0FDF4; border-left: 4px solid #006633; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .footer { background: #f9f9f9; padding: 25px; text-align: center; font-size: 13px; color: #666; }
          ul { padding-left: 20px; }
          ul li { margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✓ Thank You!</h1>
            <p style="margin: 0; font-size: 16px; opacity: 0.95;">Your message has been received</p>
          </div>
          
          <div class="content">
            <p>Dear ${data.firstName},</p>
            
            <p>Thank you for contacting <strong>NewGen Strata Services</strong>. We have received your inquiry regarding <span class="highlight">${data.serviceType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span> and appreciate you taking the time to reach out.</p>
            
            <div class="info-box">
              <strong>⏱️ Expected Response Time:</strong> Within 2 hours during business hours<br>
              <strong>📅 Business Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM AEST<br>
              <strong>👥 Who Will Contact You:</strong> Kevin Fuller or Sam Disanayaka (Founders)
            </div>
            
            <p><strong>What happens next:</strong></p>
            <ul>
              <li>One of our founders will personally review your inquiry</li>
              <li>We'll prepare a customized response based on your specific needs</li>
              <li>You'll receive detailed information and recommendations</li>
              <li>We'll discuss next steps and answer all your questions</li>
            </ul>
            
            <p>At NewGen Strata Services, we live by our founding principle: <em>"To delight our customers"</em>. We're committed to providing you with exceptional service from our very first interaction.</p>
            
            ${data.serviceType === 'emergency' ? `
            <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <strong>⚠️ Emergency Support:</strong> We've flagged your inquiry as urgent. If you need immediate assistance, please call our emergency line at <a href="tel:+61499999999" style="color: #006633;"><strong>+61 4XX XXX XXX</strong></a>
            </div>
            ` : ''}
            
            <p><strong>Need to speak with us urgently?</strong></p>
            <p>Phone: <a href="tel:+61399999999" style="color: #006633; text-decoration: none; font-weight: 600;">+61 3 9XXX XXXX</a><br>
            Emergency: <a href="tel:+61499999999" style="color: #006633; text-decoration: none; font-weight: 600;">+61 4XX XXX XXX</a> (24/7)</p>
            
            <p style="margin-top: 30px;">We look forward to helping you experience the NewGen difference!</p>
            
            <p>Best regards,<br>
            <strong>Kevin Fuller & Sam Disanayaka</strong><br>
            <em>Founders, NewGen Strata Services</em></p>
            
            <p style="margin-top: 25px; padding-top: 25px; border-top: 1px solid #eee; font-style: italic; color: #666; text-align: center;">
              "The quality is long remembered after the price is forgotten"
            </p>
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 10px 0; font-weight: 600; color: #333;">NewGen Strata Services Pty Ltd</p>
            <p style="margin: 0 0 5px 0;">Melbourne, Victoria, Australia</p>
            <p style="margin: 0 0 5px 0;">Email: <a href="mailto:info@newgenstrataservices.com.au" style="color: #006633;">info@newgenstrataservices.com.au</a></p>
            <p style="margin: 0 0 15px 0;">Phone: <a href="tel:+61399999999" style="color: #006633;">+61 3 9XXX XXXX</a></p>
            <p style="margin: 15px 0 0 0; padding-top: 15px; border-top: 1px solid #ddd; font-size: 11px;">
              This email was sent because you submitted a contact form at newgenstrataservices.com.au
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Check rate limit
    if (!checkRateLimit(ip, 5, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_PORT === '465',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Verify transporter configuration
    await transporter.verify()

    // Email to company
    const companyEmailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
      to: process.env.EMAIL_TO || 'info@newgenstrataservices.com.au',
      subject: `${validatedData.serviceType === 'emergency' ? '🚨 URGENT - ' : ''}New Contact: ${validatedData.firstName} ${validatedData.lastName} - ${validatedData.serviceType}`,
      html: generateEmailTemplate(validatedData),
      replyTo: validatedData.email,
    }

    // Auto-reply email to customer
    const customerEmailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
      to: validatedData.email,
      subject: 'Thank you for contacting NewGen Strata Services',
      html: generateCustomerEmailTemplate(validatedData),
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyEmailOptions),
      transporter.sendMail(customerEmailOptions),
    ])

    // Log successful submission
    console.log('Contact form submission:', {
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
      serviceType: validatedData.serviceType,
      timestamp: new Date().toISOString(),
      ip,
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
          error: 'Invalid form data. Please check your inputs and try again.',
          details: error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      )
    }

    // Handle nodemailer errors
    if (error instanceof Error && error.message.includes('SMTP')) {
      console.error('Email service error:', error)
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please call us at +61 3 9XXX XXXX.' },
        { status: 503 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}

// CORS headers for preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' ? 'https://newgenstrataservices.com.au' : '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  })
}