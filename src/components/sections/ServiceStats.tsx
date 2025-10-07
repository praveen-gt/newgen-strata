"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Users, Clock, Award, TrendingUp, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    icon: Building2,
    value: '500+',
    label: 'Properties Managed',
    description: 'Across Melbourne',
    color: 'text-primary'
  },
  {
    icon: Users,
    value: '2,000+',
    label: 'Happy Residents',
    description: 'Satisfied clients',
    color: 'text-secondary'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Emergency Support',
    description: 'Always available',
    color: 'text-brand-accent'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Annual surveys',
    color: 'text-primary'
  },
  {
    icon: TrendingUp,
    value: '70+',
    label: 'Years Experience',
    description: 'Combined expertise',
    color: 'text-secondary'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Compliance Rate',
    description: 'Full adherence',
    color: 'text-brand-accent'
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function ServiceStats() {
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <motion.div key={stat.label} variants={fadeInUp}>
                <Card className="text-center p-4 h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-0">
                    <IconComponent className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl lg:text-3xl font-bold text-brand-dark mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500 leading-tight">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}