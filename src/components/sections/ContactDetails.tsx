// src/components/sections/ContactDetails.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
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
    icon: Mail,
    title: 'Email Us',
    primary: 'info@newgenstrataservices.com.au',
    secondary: 'Response within 2 hours',
    description: 'Detailed inquiries and documentation',
    action: 'Send Email',
    href: 'mailto:info@newgenstrataservices.com.au',
    urgent: false
  },
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
            Choose the method that works best for you. We&apos;re committed to 
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

        </div>
      </div>
    </section>
  )
}