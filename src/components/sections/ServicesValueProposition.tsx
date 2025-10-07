// src/components/sections/ServicesValueProposition.tsx

"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const values = [
  { label: 'Capability', color: 'bg-green-500' },
  { label: 'Integrity', color: 'bg-cyan-500' },
  { label: 'Our Customers', color: 'bg-white' },
  { label: 'Quality', color: 'bg-pink-500' },
  { label: 'Reliability', color: 'bg-yellow-500' }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function ServicesValueProposition() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Value Proposition Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Placeholder for value proposition circle image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-xl font-bold mb-2">NewGen's Strata Services</div>
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {values.map((value) => (
                      <div key={value.label} className={`${value.color} rounded-full p-4 flex items-center justify-center text-xs font-medium ${value.color === 'bg-white' ? 'text-gray-800' : 'text-white'}`}>
                        {value.label}
                      </div>
                    ))}
                  </div>
                  <div className="text-xl font-bold mt-2">Delivers Strata Services</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Commitments */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Our Commitments
            </Badge>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Three Fundamental{" "}
              <span className="text-gradient-wimbledon">Commitments</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We have three fundamental commitments we make to our clients, our professional 
              and trade service providers, and our own staff:
            </p>

            <div className="space-y-4">
              {['Capability', 'Reliability', 'Integrity'].map((commitment, idx) => (
                <Card key={commitment} className="border-l-4 border-primary">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-brand-dark">{commitment}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-gray-600 italic">
              and we are ready and willing to be held to these and challenged on them at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}