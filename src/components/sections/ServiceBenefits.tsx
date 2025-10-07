// src/components/sections/ServiceBenefits.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, FileText, Clock, CheckCircle, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  Shield,
  FileText,
  Clock,
  CheckCircle,
  Award,
  Users
}

interface Benefit {
  title: string
  description: string
  icon: keyof typeof iconMap
}

interface ServiceBenefitsProps {
  benefits: Benefit[]
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            Benefits
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            Why Choose This{" "}
            <span className="text-gradient-wimbledon">Service</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover the advantages that set our service apart
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon]
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-fit mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
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