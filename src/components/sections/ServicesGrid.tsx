// src/components/sections/ServicesGrid.tsx

"use client"

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Calendar, 
  DollarSign, 
  Wrench, 
  FileCheck, 
  Shield,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    slug: 'meeting-management',
    icon: Calendar,
    title: 'Meeting Management',
    description: 'Professional planning and coordination of committee meetings and AGMs with complete documentation.',
    features: [
      'AGM and committee meeting planning',
      'Meeting notices and agendas',
      'Professional minutes documentation',
      'Compliance with all requirements'
    ]
  },
  {
    slug: 'financial-management',
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Complete financial oversight including accounts payable, reporting, and budget management.',
    features: [
      'Accounts payable management',
      'Financial reporting and statements',
      'Budget preparation and monitoring',
      'Levy collection and banking'
    ]
  },
  {
    slug: 'maintenance-coordination',
    icon: Wrench,
    title: 'Maintenance Coordination',
    description: 'Expert coordination of all maintenance and repairs for common property with trusted contractors.',
    features: [
      'Routine maintenance scheduling',
      'Emergency repair coordination',
      'Contractor sourcing and management',
      'Quality control and inspections'
    ]
  },
  {
    slug: 'compliance-administration',
    icon: FileCheck,
    title: 'Compliance & Administration',
    description: 'Complete management of compliance requirements, registers, and documentation.',
    features: [
      'Building compliance monitoring',
      'Register maintenance',
      'Correspondence handling',
      'Stakeholder communication'
    ]
  },
  {
    slug: 'insurance-services',
    icon: Shield,
    title: 'Insurance Services',
    description: 'Comprehensive insurance management including policy coordination and claims support.',
    features: [
      'Policy review and recommendations',
      'Annual renewal coordination',
      'Claims management',
      'Risk assessment'
    ]
  },
  {
    slug: 'dispute-resolution',
    icon: Users,
    title: 'Dispute Resolution',
    description: 'Professional mediation and support for disputes and special requests.',
    features: [
      'Dispute mediation',
      'Stakeholder liaison',
      'Special request coordination',
      'VCAT support'
    ]
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

export function ServicesGrid() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div key={service.slug} variants={fadeInUp}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-fit mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                        <IconComponent className="h-10 w-10 text-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-brand-dark mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}