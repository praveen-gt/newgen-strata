// src/components/sections/ServiceStats.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Building2, 
  Users, 
  Clock, 
  Award,
  TrendingUp,
  Shield
} from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    icon: Building2,
    value: '500+',
    label: 'Properties Managed',
    description: 'Across Melbourne metropolitan area',
    color: 'text-primary'
  },
  {
    icon: Users,
    value: '2,000+',
    label: 'Happy Residents',
    description: 'Satisfied owners and tenants',
    color: 'text-secondary'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Emergency Support',
    description: 'Always available when you need us',
    color: 'text-brand-accent'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Based on annual surveys',
    color: 'text-primary'
  },
  {
    icon: TrendingUp,
    value: '70+',
    label: 'Years Experience',
    description: 'Combined founder expertise',
    color: 'text-secondary'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Compliance Rate',
    description: 'Full regulatory adherence',
    color: 'text-brand-accent'
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function ServiceStats() {
  return (
    <section className="py-12 bg-gradient-to-br from-brand-neutral/10 to-white border-b">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div key={stat.label} variants={fadeInUp}>
                <Card className="text-center p-4 h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm">
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