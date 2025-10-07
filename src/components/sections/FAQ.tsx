// src/components/sections/FAQ.tsx

"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const faqs = [
  {
    question: 'What makes NewGen different from other strata management companies?',
    answer: 'NewGen offers a fresh, collaborative approach with single point of contact, modern technology, 24/7 emergency support, and a curated network of trusted service providers. Our founders bring 70+ years of combined business experience, focusing on partnership rather than just service delivery.'
  },
  {
    question: 'How quickly do you respond to inquiries and issues?',
    answer: 'We typically respond within 2 hours during business hours (Monday-Friday, 9AM-5PM). For emergencies, we provide 24/7 support with immediate response protocols. Our average response time across all communications is under 4 hours.'
  },
  {
    question: 'What is included in your strata management fee?',
    answer: 'Our comprehensive fee includes meeting management, financial oversight, correspondence handling, maintenance coordination, compliance management, insurance liaison, and access to our preferred contractor network. We provide transparent pricing with no hidden fees.'
  },
  {
    question: 'How do you handle emergency situations?',
    answer: 'We offer 24/7 emergency support for urgent issues like water leaks, electrical problems, security breaches, or safety hazards. Our emergency protocols ensure rapid response with pre-approved contractors and immediate notification to relevant stakeholders.'
  },
  {
    question: 'Can you help us switch from our current strata manager?',
    answer: 'Absolutely! We specialize in smooth transitions and handle all the paperwork, file transfers, and communication required. We ensure continuity of service while upgrading your management experience with minimal disruption to your owners corporation.'
  },
  {
    question: 'What technology do you use for reporting and communication?',
    answer: 'We use modern digital platforms for reporting, document management, and communication. Clients have access to online portals for real-time information, digital financial reports, and streamlined communication systems that replace outdated paper-based processes.'
  },
  {
    question: 'How do you ensure compliance with Victorian strata laws?',
    answer: 'Our team stays current with all regulatory changes and ensures 100% compliance through regular audits, proactive updates, and comprehensive documentation. We handle all legal requirements including AGM notices, financial statements, and regulatory filings.'
  },
  {
    question: 'What size properties do you manage?',
    answer: 'We manage properties of all sizes across Melbourne, from small townhouse complexes with 4-6 units to large apartment buildings with 100+ units. Our scalable approach ensures personalized service regardless of property size.'
  },
  {
    question: 'How do you select and manage service providers?',
    answer: 'We maintain a carefully vetted network of licensed, insured, and reliable contractors across all trades. All providers are selected based on quality, reliability, competitive pricing, and track record. We manage all contractor relationships and ensure quality outcomes.'
  },
  {
    question: 'What are your fees and how is billing structured?',
    answer: 'We offer competitive, transparent pricing based on property size and complexity. Fees are typically charged monthly or quarterly, with detailed invoicing. We provide custom quotes based on your specific needs and don\'t believe in one-size-fits-all pricing.'
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

export function FAQ() {
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
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              Frequently Asked Questions
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
          >
            Got Questions? <span className="text-gradient-wimbledon">We Have Answers</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Find answers to the most common questions about our strata management services. 
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-wimbledon px-6 py-2 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Side Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-4 space-y-6"
          >
            {/* Contact Card */}
            <div className="card-wimbledon p-6">
              <div className="text-center mb-6">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600">
                  Our team is here to help you understand how NewGen can transform your strata management experience.
                </p>
              </div>
              <div className="space-y-3">
                <Button asChild className="btn-wimbledon w-full">
                  <Link href="/contact">
                    Ask a Question
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-wimbledon-outline w-full">
                  <Link href="tel:+61399999999">
                    Call Us Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
              <h4 className="font-semibold text-brand-dark mb-4">Quick Facts</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time:</span>
                  <span className="font-medium">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergency Support:</span>
                  <span className="font-medium">24/7 Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Area:</span>
                  <span className="font-medium">All Melbourne</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-medium">70+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compliance:</span>
                  <span className="font-medium">100% Rate</span>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="card-wimbledon p-6">
              <h4 className="font-semibold text-brand-dark mb-4">Helpful Resources</h4>
              <div className="space-y-2">
                <Link href="/services" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                  → Complete Service List
                </Link>
                <Link href="/approach" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                  → Our Management Approach
                </Link>
                <Link href="/about" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                  → About Our Founders
                </Link>
                <Link href="/contact" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                  → Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}