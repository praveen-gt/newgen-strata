"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const foundingPrinciples = [
  'To operate with honesty and integrity at all times',
  'To achieve a standard of excellence in everything we do',
  'To strive to "delight our customers"',
  'To establish an environment of mutual respect, transparency and cooperation with every Owners Corporation we serve',
  'To provide to our client organisations with a high standard of reliable, trustworthy and professionally competent trade service providers'
]

export function WhatIsNewGen() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-6">
              What Is NewGen
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              What is <span className="text-gradient-wimbledon">NewGen Strata Services?</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              As the name NewGen implies it is a "new generation" organisation designed to 
              provide a new level of support service and respect to members of Owners 
              Corporations using the latest technology and techniques and a business model 
              designed to provide the optimal level of management and services to Owners 
              Corporations and their members.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">The Founding Principles</h3>
            <ul className="space-y-4">
              {foundingPrinciples.map((principle, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">{principle}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
