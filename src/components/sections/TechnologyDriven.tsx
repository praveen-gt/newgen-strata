// src/components/sections/TechnologyDriven.tsx
"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Smartphone, Cloud, BarChart3, Bell, FileText, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const techFeatures = [
  {
    icon: Smartphone,
    title: 'Mobile Access',
    description: 'View documents, approve invoices, and communicate with your manager from anywhere'
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'All property documents securely stored and accessible 24/7'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Reporting',
    description: 'Live dashboards showing financial status, maintenance schedules, and more'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay informed with automatic alerts for important updates and actions'
  },
  {
    icon: FileText,
    title: 'Digital Documentation',
    description: 'Paperless workflows for faster approvals and better record-keeping'
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'Your data protected with enterprise-grade encryption and security'
  }
]

export function TechnologyDriven() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technology That Works for You
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Modern tools that make strata management easier and more transparent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {techFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border border-slate-200 h-full text-center hover:border-slate-300 transition-all group hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-8 w-8 text-slate-700 group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}