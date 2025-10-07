// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { ContactForm } from '@/components/forms/ContactForm'
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   MessageCircle,
//   Calendar,
//   Award,
//   Shield
// } from 'lucide-react'
// import { motion } from 'framer-motion'

// const contactInfo = [
//   {
//     icon: Phone,
//     title: 'Call Us',
//     content: '+61 3 9XXX XXXX',
//     subtext: 'Mon-Fri: 9AM-5PM, Emergency: 24/7',
//     action: 'tel:+61391234567'
//   },
//   {
//     icon: Mail,
//     title: 'Email Us',
//     content: 'info@newgenstrataservices.com.au',
//     subtext: 'We respond within 2 hours',
//     action: 'mailto:info@newgenstrataservices.com.au'
//   },
//   {
//     icon: MapPin,
//     title: 'Visit Us




// src/components/sections/ContactSection.tsx
"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";
import { Badge } from "../ui/badge";

export default function ContactSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Contact Us</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">We&apos;re ready to help with your strata management needs. Reach out for support or a personalised quote!</p>
        </div>
        <Card className="card-wimbledon max-w-lg mx-auto shadow-lg p-8">
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:info@newgenstrataservices.com.au" className="text-lg text-gray-800 hover:text-primary font-medium">
                info@newgenstrataservices.com.au
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <a href="tel:1300123456" className="text-lg text-gray-800 hover:text-primary font-medium">
                1300 123 456
              </a>
            </div>
            <Button asChild className="btn-wimbledon w-full mt-4">
              <a href="/contact">Contact Form</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
