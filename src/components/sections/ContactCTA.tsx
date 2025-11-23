"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const benefits = [
    'Free initial consultation',
    'Same-day response',
    'No obligation quotes',
    'Tailored solutions'
  ]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function ContactCTA() {
return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-dark via-primary to-secondary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to Experience the{" "}
            <span className="text-brand-accent">NewGen Difference</span>?
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 leading-relaxed mb-8"
          >
            Communication is at the heart of everything we do. We take pride in presenting 
            information clearly and openly, ensuring you&apos;re always informed and confident.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center justify-center space-x-2 text-white/90 text-sm bg-white/10 backdrop-blur-md rounded-full px-4 py-3 border border-white/20">
                <CheckCircle className="h-4 w-4 text-brand-accent flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button 
              asChild
              size="lg"
              className="bg-white text-brand-dark hover:bg-gray-100 font-bold px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-10 py-6 rounded-full transition-all duration-300"
            >
              <Link href="tel:+61399999999">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Today
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm mb-12"
          >
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+61 3 9XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@newgenstrataservices.com.au</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center pt-8 border-t border-white/20"
          >
            <p className="text-white/70 text-lg mb-4">
              Whether you own a large complex or a small property, we tailor our services to meet your unique needs.
            </p>
            <p className="text-white/60 text-base">
              We bring deep knowledge of the Owners Corporation Act, managing every aspect of Owners Corporations — 
              from financials and budgeting to compliance and maintenance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}