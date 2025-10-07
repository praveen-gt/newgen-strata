// src/components/sections/ServicesCTA.tsx

"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function ServicesCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-dark via-primary to-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Experience the{" "}
            <span className="text-yellow-300">NewGen Difference?</span>
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Let&apos;s discuss how our comprehensive services can transform your 
            owners corporation management experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              description: 'Speak with our team',
              action: 'tel:+61399999999',
              label: '+61 3 9XXX XXXX'
            },
            {
              icon: Mail,
              title: 'Email Us',
              description: 'Get a detailed response',
              action: 'mailto:info@newgenstrataservices.com.au',
              label: 'Send Email'
            },
            {
              icon: Calendar,
              title: 'Book Consultation',
              description: 'Free 30-minute meeting',
              action: '/contact',
              label: 'Schedule Now'
            }
          ].map((contact, idx) => {
            const IconComponent = contact.icon
            return (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-center h-full">
                  <CardContent className="p-6">
                    <IconComponent className="h-10 w-10 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {contact.description}
                    </p>
                    <Button 
                      asChild 
                      className="bg-white text-primary hover:bg-gray-100 w-full"
                    >
                      <Link href={contact.action}>
                        {contact.label}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}