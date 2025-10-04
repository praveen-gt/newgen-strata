// src/components/sections/ContactFormSection.tsx

"use client"

import React from 'react'
import { ContactForm } from '@/components/forms/ContactForm'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Clock } from 'lucide-react'

const formBenefits = [
  {
    icon: CheckCircle,
    title: 'Free Consultation',
    description: 'No obligation, no cost - just expert advice'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your information is protected and confidential'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'We respond within 2 hours during business hours'
  }
]

export function ContactFormSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Contact Form
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Tell Us About Your <span className="text-gradient-wimbledon">Property</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Complete the form below and we'll provide a customized consultation 
            based on your specific strata management needs.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {formBenefits.map((benefit) => {
              const IconComponent = benefit.icon
              return (
                <div key={benefit.title} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <IconComponent className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <Card className="card-wimbledon shadow-lg">
          <CardContent className="p-8">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}