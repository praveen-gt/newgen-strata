// src/components/sections/WhyChooseUs.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  UserCheck, 
  MessageSquare, 
  Network,
  Smartphone,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const advantages = [
  {
    icon: UserCheck,
    title: 'Single Point of Contact',
    description: 'Each owners corporation gets one dedicated contact person who knows your property inside and out.',
    benefits: ['Consistent communication', 'Personal relationship', 'Faster response times', 'Better understanding of needs']
  },
  {
    icon: MessageSquare,
    title: 'Collaborative Decision Making',
    description: 'We work with you to make the best decisions for your property, not just implement orders.',
    benefits: ['Expert guidance', 'Transparent discussions', 'Informed recommendations', 'Shared responsibility']
  },
  {
    icon: Network,
    title: 'Trusted Service Network',
    description: 'Access to our carefully vetted network of reliable, professional trade and service providers.',
    benefits: ['Pre-screened contractors', 'Competitive pricing', 'Quality guarantee', 'Faster service delivery']
  },
  {
    icon: Smartphone,
    title: 'Modern Technology',
    description: 'Latest technology and digital solutions for efficient, transparent service delivery.',
    benefits: ['Digital reporting', 'Online portals', 'Real-time updates', 'Paperless processes']
  },
  {
    icon: Clock,
    title: '24/7 Emergency Support',
    description: 'Round-the-clock emergency response for urgent issues that can\'t wait until business hours.',
    benefits: ['Always available', 'Rapid response', 'Emergency protocols', 'Peace of mind']
  },
  {
    icon: Shield,
    title: 'Full Compliance Guarantee',
    description: 'Complete adherence to all regulations and legal requirements with regular updates.',
    benefits: ['Legal compliance', 'Risk mitigation', 'Regular audits', 'Documentation management']
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-brand-neutral/5 to-primary/5">
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
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Why Choose NewGen
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
          >
            The <span className="text-gradient-wimbledon">NewGen Advantage</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Discover what sets us apart from traditional strata management companies 
            and why property owners are switching to NewGen.
          </motion.p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <motion.div key={advantage.title} variants={fadeInUp}>
                <Card className="card-wimbledon h-full group hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-brand-dark">
                          {advantage.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {advantage.description}
                      </p>
                      
                      <div className="space-y-2">
                        {advantage.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
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

        {/* Comparison Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
              NewGen vs Traditional Strata Management
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our modern approach compares to traditional strata management methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Traditional Approach</h4>
              <div className="space-y-3">
                {[
                  'Multiple contact points',
                  'Reactive problem solving',
                  'Limited technology use',
                  'Generic service providers',
                  'Business hours only support',
                  'Compliance as minimum requirement'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NewGen */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary mb-4">NewGen Approach</h4>
              <div className="space-y-3">
                {[
                  'Single dedicated contact person',
                  'Proactive partnership model',
                  'Latest technology & digital solutions',
                  'Curated network of trusted providers',
                  '24/7 emergency support available',
                  'Excellence in compliance & beyond'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing number of Melbourne properties that have made the switch to 
            NewGen Strata Services and never looked back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-wimbledon">
              <Link href="/contact">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-wimbledon-outline">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}