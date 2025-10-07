// src/components/sections/ServicesPreview.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar,
  DollarSign,
  Wrench,
  FileCheck,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    icon: Calendar,
    title: 'Meeting Management',
    description: 'Professional AGM and committee meeting coordination with comprehensive documentation.',
    href: '/services/meeting-management'
  },
  {
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Complete financial oversight, budgeting, and transparent reporting.',
    href: '/services/financial-management'
  },
  {
    icon: Wrench,
    title: 'Maintenance Coordination',
    description: 'Proactive property maintenance with our trusted contractor network.',
    href: '/services/maintenance-coordination'
  },
  {
    icon: FileCheck,
    title: 'Compliance & Administration',
    description: '100% regulatory compliance and legal requirement management.',
    href: '/services/compliance-administration'
  },
  {
    icon: Shield,
    title: 'Insurance Services',
    description: 'Expert insurance coordination and claims management support.',
    href: '/services/insurance-services'
  },
  {
    icon: Zap,
    title: 'Dispute Resolution & Support',
    description: 'Professional mediation services and conflict resolution for owners and residents.',
    href: '/services/dispute-resolution-support'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function ServicesPreview() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 50px,
            var(--color-primary) 50px,
            var(--color-primary) 51px
          )`
        }} />
      </div>

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
              Our Services
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"
          >
            Comprehensive{" "}
            <span className="text-gradient-wimbledon">Strata Solutions</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            From day-to-day management to emergency support, we provide everything 
            your owners corporation needs to thrive.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <Link href={service.href}>
                  <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm group hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        {/* Icon */}
                        <div className="flex items-center justify-between">
                          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                            <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                        
                        {/* Content */}
                        <div>
                          <h3 className="text-xl font-semibold text-brand-dark mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Every property is unique. We tailor our services to match your specific 
              needs and challenges. Let&apos;s discuss how we can help your owners corporation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-wimbledon">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-wimbledon-outline">
                <Link href="/contact">
                  Request Consultation
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}