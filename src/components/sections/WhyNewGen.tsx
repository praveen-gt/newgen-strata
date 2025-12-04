"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function WhyNewGen() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2">
            Our Story
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6">
            Why Start <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NewGen Strata Services?</span>
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Over time we have heard so many complaints from members of Owners Corporations 
              about the level of service they receive from their Owners Corporate Management 
              organisations we decided that there was a great business opportunity to enter 
              the Strata Services business hence, NewGen Strata Services Pty Ltd was born.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
