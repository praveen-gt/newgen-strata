// src/components/sections/ServiceGuarantee.tsx

"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  FileCheck,
  Target
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const guarantees = [
  {
    icon: Shield,
    title: '100% Compliance Guarantee',
    description: 'We guarantee full compliance with all Victorian Owners Corporation Act requirements and regulations.',
    details: [
      'All legal requirements met',
      'Regular compliance audits',
      'Up-to-date with law changes',
      'Documentation fully compliant'
    ]
  },
  {
    icon: Clock,
    title: '2-Hour Response Guarantee',
    description: 'We guarantee to respond to all inquiries within 2 hours during business hours.',
    details: [
      'Business hours: Mon-Fri 9AM-5PM',
      'Emergency support 24/7',
      'Dedicated contact person',
      'Multiple communication channels'
    ]
  },
  {
    icon: FileCheck,
    title: 'Quality Service Guarantee',
    description: 'We guarantee professional, high-quality service delivery that exceeds industry standards.',
    details: [
      'Experienced, qualified staff',
      'Continuous training programs',
      'Quality assurance processes',
      'Regular service reviews'
    ]
  },
  {
    icon: Target,
    title: 'Satisfaction Guarantee',
    description: 'We guarantee your satisfaction with our services or we will work to make it right.',
    details: [
      'Regular client feedback',
      'Proactive issue resolution',
      'Continuous improvement',
      'Open communication policy'
    ]
  }
]

const commitments = [
  {
    icon: Users,
    title: 'Personal Service',
    commitment: 'Every client gets a dedicated contact person who knows your property and needs.'
  },
  {
    icon: Phone,
    title: 'Always Available',
    commitment: '24/7 emergency support for urgent issues that cannot wait until business hours.'
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    commitment: 'Industry-leading expertise backed by 70+ years of combined business experience.'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function ServiceGuarantee() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-brand-accent/10 text-brand-accent border-brand-accent/20 mb-4">
              Our Guarantees
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
          >
            Our <span className="text-gradient-wimbledon">Commitment</span> to You
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We back our services with concrete guarantees because we believe in delivering 
            exceptional value and building long-term partnerships with our clients.
          </motion.p>
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon
            return (
              <motion.div key={guarantee.title} variants={fadeInUp}>
                <Card className="card-wimbledon h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-dark mb-3">
                          {guarantee.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {guarantee.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {guarantee.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Service Commitments */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="bg-gradient-to-br from-brand-neutral/10 to-primary/5 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
              Our Service Commitments
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These commitments define how we work and what you can expect from 
              every interaction with NewGen Strata Services.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => {
              const IconComponent = commitment.icon
              return (
                <motion.div key={commitment.title} variants={fadeInUp}>
                  <div className="text-center p-6">
                    <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-brand-dark mb-3">
                      {commitment.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {commitment.commitment}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="bg-gradient-wimbledon text-white rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                Experience You Can Trust
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">70+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Years Combined Experience</div>
                    <div className="text-white/80 text-sm">Proven track record across multiple industries</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">98%</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Client Satisfaction Rate</div>
                    <div className="text-white/80 text-sm">Based on annual client surveys</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">24/7</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Emergency Support</div>
                    <div className="text-white/80 text-sm">Always available when you need us</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-xl font-semibold text-white mb-4">
                Ready to Experience Our Guarantee?
              </h4>
              <p className="text-white/90 mb-6">
                Join the growing number of Melbourne properties that trust NewGen 
                with their strata management needs.
              </p>
              <div className="space-y-3">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 w-full lg:w-auto">
                  <Link href="/contact">
                    Get Your Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="text-white/70 text-sm">
                  No obligation • Same day response
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}