// src/components/sections/ContactDetails.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Calendar,
  AlertCircle,
  Users
} from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us Direct',
    primary: '+61 3 9XXX XXXX',
    secondary: 'Mon-Fri: 9:00 AM - 5:00 PM',
    description: 'Speak directly with Kevin or Sam',
    action: 'Call Now',
    href: 'tel:+61399999999',
    urgent: false
  },
  {
    icon: AlertCircle,
    title: 'Emergency Line',
    primary: '+61 4XX XXX XXX',
    secondary: '24/7 Emergency Response',
    description: 'For urgent property issues only',
    action: 'Emergency Call',
    href: 'tel:+61499999999',
    urgent: true
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@newgenstrataservices.com.au',
    secondary: 'Response within 2 hours',
    description: 'Detailed inquiries and documentation',
    action: 'Send Email',
    href: 'mailto:info@newgenstrataservices.com.au',
    urgent: false
  },
  {
    icon: Calendar,
    title: 'Book Meeting',
    primary: 'Free 30-min Consultation',
    secondary: 'Available this week',
    description: 'Face-to-face or video call',
    action: 'Schedule',
    href: '/contact?consultation=true',
    urgent: false
  }
]

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM', available: true },
  { day: 'Saturday', hours: 'By Appointment', available: false },
  { day: 'Sunday', hours: 'Emergency Only', available: false },
  { day: 'Public Holidays', hours: 'Emergency Only', available: false }
]

export function ContactDetails() {
  return (
    <section className="bg-gradient-to-br from-brand-neutral/20 to-gray-50 py-16 lg:py-20">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Multiple Ways to <span className="text-gradient-wimbledon">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Choose the method that works best for you. We're committed to 
            responding quickly and providing the support you need.
          </p>
        </div>

        <div className="space-y-6">
          {/* Contact Methods */}
          {contactMethods.map((method) => {
            const IconComponent = method.icon
            return (
              <Card key={method.title} className="card-wimbledon hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg ${
                      method.urgent 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-brand-dark text-lg mb-1">
                        {method.title}
                      </h3>
                      <div className="text-primary font-medium mb-1">
                        {method.primary}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {method.secondary}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {method.description}
                      </p>
                      <Button 
                        asChild 
                        size="sm" 
                        className={method.urgent ? 'bg-red-600 hover:bg-red-700' : 'btn-wimbledon'}
                      >
                        <Link href={method.href}>
                          {method.action}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}

          {/* Office Hours */}
          <Card className="card-wimbledon">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-dark text-lg mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between items-center">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className={`font-medium ${
                          schedule.available ? 'text-primary' : 'text-gray-500'
                        }`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Area */}
          <Card className="card-wimbledon">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-accent/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-dark text-lg mb-2">
                    Service Coverage
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We provide strata management services across all Melbourne metropolitan areas:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Melbourne CBD</div>
                    <div>• Inner Suburbs</div>
                    <div>• Eastern Suburbs</div>
                    <div>• Western Suburbs</div>
                    <div>• Northern Suburbs</div>
                    <div>• Southern Suburbs</div>
                    <div>• South East</div>
                    <div>• Outer Areas</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Contact */}
          <Card className="bg-gradient-wimbledon text-white">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg mb-2">
                    Meet the Founders
                  </h3>
                  <p className="text-white/90 mb-4">
                    Kevin Fuller and Sam Disanayaka are personally involved in every 
                    client relationship. You'll work directly with the founders, not just employees.
                  </p>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/about">
                      Learn More About Our Team
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}