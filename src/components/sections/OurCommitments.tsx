"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Clock, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const commitments = [
  {
    icon: Award,
    title: 'Capability',
    description: 'Deep knowledge and expertise in all aspects of owners corporation management',
    color: 'text-primary'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on every time',
    color: 'text-secondary'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honesty and transparency in everything we do',
    color: 'text-brand-accent'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function OurCommitments() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />
      
      <div className="container-custom relative z-10">
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
              Our Promise
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"
          >
            Three Fundamental <span className="text-gradient-wimbledon">Commitments</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            We make these commitments to our clients, our service providers, and our staff — 
            and we&apos;re ready to be held accountable to them at any time.
          </motion.p>
        </motion.div>

        {/* Commitments Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {commitments.map((item) => {
            const IconComponent = item.icon
            return (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="text-center p-8 h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className={`h-10 w-10 ${item.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-primary/10"
        >
          <blockquote className="text-2xl font-semibold text-brand-dark italic mb-2">
            &quot;The quality is long remembered after the price is forgotten&quot;
          </blockquote>
          <p className="text-gray-600 font-medium">— NewGen Strata Services</p>
        </motion.div>
      </div>
    </section>
  )
}
