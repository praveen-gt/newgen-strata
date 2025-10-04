"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProcessStep {
  step: number
  title: string
  description: string
  timeline: string
}

interface ServiceProcessProps {
  process?: ProcessStep[]
}

const defaultProcess: ProcessStep[] = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We conduct a comprehensive review of your property and current management situation to understand your specific needs.',
    timeline: 'Day 1'
  },
  {
    step: 2,
    title: 'Custom Proposal',
    description: 'We prepare a detailed proposal outlining our services, approach, and transparent pricing tailored to your property.',
    timeline: 'Within 3 days'
  },
  {
    step: 3,
    title: 'Smooth Transition',
    description: 'If you choose us, we handle all aspects of the transition including file transfers and stakeholder communication.',
    timeline: '2-4 weeks'
  },
  {
    step: 4,
    title: 'Ongoing Excellence',
    description: 'We begin delivering exceptional service with regular reporting, proactive maintenance, and dedicated support.',
    timeline: 'Ongoing'
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

export function ServiceProcess({ process = defaultProcess }: ServiceProcessProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-neutral/10 to-white">
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
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              Our Process
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
          >
            How We <span className="text-gradient-wimbledon">Get Started</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Our proven process ensures a smooth transition and immediate improvement 
            in your strata management experience.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-8 mb-16"
        >
          {process.map((step, index) => (
            <motion.div key={step.step} variants={fadeInUp}>
              <Card className="card-wimbledon hover-lift">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Step Number */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                      <div className="bg-gradient-wimbledon text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="lg:col-span-7">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-dark mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Timeline */}
                    <div className="lg:col-span-3 text-center lg:text-right">
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">
                          Timeline
                        </div>
                        <div className="text-brand-dark font-bold">
                          {step.timeline}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Line */}
                  {index < process.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary opacity-30" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6">
                Why Our Process Works
              </h3>
              <div className="space-y-4">
                {[
                  'No disruption to your current operations',
                  'Complete transparency at every step',
                  'Dedicated project manager for transitions',
                  'All stakeholders kept informed',
                  'Immediate access to emergency support',
                  'Seamless handover of all documentation'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-brand-dark mb-4">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 mb-6">
                  Book your free consultation today and discover how NewGen 
                  can transform your strata management experience.
                </p>
                <div className="space-y-3">
                  <Button asChild className="btn-wimbledon w-full">
                    <Link href="/contact">
                      Book Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="text-sm text-gray-500">
                    No obligation • Response within 2 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}