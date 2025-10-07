// src/components/sections/Services.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar,
  FileText,
  Mail,
  Wrench,
  BookOpen,
  Calculator,
  Bell,
  Shield,
  Building,
  MessageSquare,
  ArrowRight,
  Users,
  ClipboardCheck
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    icon: Calendar,
    title: 'Meeting Management',
    description: 'Planning and arranging committee meetings and AGMs with comprehensive preparation and follow-up.',
    features: ['Meeting scheduling', 'Venue coordination', 'Agenda preparation', 'Minutes documentation']
  },
  {
    icon: FileText,
    title: 'Documentation Services',
    description: 'Professional preparation and distribution of meeting notices, agendas, and detailed minutes.',
    features: ['Legal compliance', 'Digital distribution', 'Archive management', 'Template customization']
  },
  {
    icon: Mail,
    title: 'Correspondence Management',
    description: 'Prompt and professional responses to all correspondence on behalf of your owners corporation.',
    features: ['Email management', 'Letter drafting', 'Inquiry handling', 'Communication tracking']
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Comprehensive organization of maintenance and repairs for all common property areas.',
    features: ['Contractor coordination', 'Quality assurance', 'Cost management', 'Progress monitoring']
  },
  {
    icon: BookOpen,
    title: 'Register Maintenance',
    description: 'Meticulous maintenance of your owners corporation register with accurate record-keeping.',
    features: ['Owner records', 'Property details', 'Legal updates', 'Digital accessibility']
  },
  {
    icon: Calculator,
    title: 'Financial Management',
    description: 'Professional handling of accounts payable and comprehensive financial oversight.',
    features: ['Budget management', 'Invoice processing', 'Financial reporting', 'Audit preparation']
  },
  {
    icon: Bell,
    title: 'Stakeholder Updates',
    description: 'Regular sharing of updates and important notices with all relevant stakeholders.',
    features: ['Newsletter creation', 'Notice distribution', 'Emergency alerts', 'Community updates']
  },
  {
    icon: Shield,
    title: 'Insurance Coordination',
    description: 'Complete management of insurance requirements and claims processing.',
    features: ['Policy management', 'Claims assistance', 'Risk assessment', 'Coverage optimization']
  },
  {
    icon: Building,
    title: 'Compliance Management',
    description: 'Ensuring your building meets all regulatory requirements and safety standards.',
    features: ['Code compliance', 'Safety audits', 'Certificate management', 'Regulatory updates']
  },
  {
    icon: MessageSquare,
    title: 'Dispute Resolution',
    description: 'Professional liaison services for disputes and special requests involving all parties.',
    features: ['Mediation services', 'Conflict resolution', 'Legal coordination', 'Communication facilitation']
  },
  {
    icon: ClipboardCheck,
    title: 'Sale Documentation',
    description: 'Comprehensive assistance with all documents required during property sale processes.',
    features: ['Certificate preparation', 'Document verification', 'Buyer assistance', 'Settlement support']
  },
  {
    icon: Users,
    title: 'Stakeholder Relations',
    description: 'Professional management of relationships between tenants, owners, and the corporation.',
    features: ['Tenant liaison', 'Owner communication', 'Relationship building', 'Issue resolution']
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

export function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
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
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
          >
            Comprehensive Strata 
            <span className="text-gradient-wimbledon"> Management Services</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Our organisation provides personal, high-quality services to owners corporations, 
            their occupants, owners and members across all essential processes.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="card-wimbledon h-full group hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-brand-dark">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="bg-gradient-to-br from-brand-neutral/30 to-primary/5 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6">
                Why Choose Our Services?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Single Point of Contact',
                    description: 'Every owners corporation has one dedicated contact person for seamless communication.'
                  },
                  {
                    title: 'Collaborative Decision Making',
                    description: 'We work with you to help make the best possible decisions, then implement them effectively.'
                  },
                  {
                    title: 'Trusted Service Network',
                    description: 'Access to our curated network of reliable, professional trade and service providers.'
                  },
                  {
                    title: 'Modern Technology',
                    description: 'Latest technology and techniques ensure efficient and transparent service delivery.'
                  }
                ].map((highlight, index) => (
                  <motion.div key={highlight.title} variants={fadeInUp} className="flex space-x-4">
                    <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-lg font-semibold text-brand-dark mb-4">Emergency Support</div>
                <p className="text-gray-600 mb-6">
                  While our regular hours are Monday to Friday, 9AM to 5PM, 
                  we provide 24/7 emergency support for urgent matters.
                </p>
                <Button asChild className="btn-wimbledon w-full">
                  <Link href="/contact">
                    Get Emergency Contact
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6">
            Ready to Experience the NewGen Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us show you how our comprehensive services can transform your 
            owners corporation management experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-wimbledon">
              <Link href="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-wimbledon-outline">
              <Link href="/quote">
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}