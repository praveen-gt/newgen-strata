// src/components/sections/ServiceHero.tsx

"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceHeroProps {
  serviceData?: {
    title: string
    subtitle: string
    description: string
    heroImage?: string
    overview?: {
      title: string
      content: string
      features: string[]
    }
  }
}

const defaultServiceData = {
  title: 'Professional Strata Services',
  subtitle: 'Excellence in Owners Corporation Management',
  description: 'Comprehensive strata management services tailored to your property needs with modern technology and transparent communication.',
  overview: {
    title: 'Complete Service Solutions',
    content: 'Our comprehensive approach to strata management combines decades of experience with modern technology to deliver exceptional results for your owners corporation.',
    features: [
      'Professional service delivery',
      'Modern technology integration',
      'Transparent communication',
      'Regulatory compliance',
      '24/7 emergency support',
      'Dedicated contact person'
    ]
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function ServiceHero({ serviceData = defaultServiceData }: ServiceHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-dark via-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              {serviceData.title}
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            {serviceData.subtitle}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 leading-relaxed mb-8"
          >
            {serviceData.description}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                Request Quote
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Service Overview */}
        {serviceData.overview && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6">
                      {serviceData.overview.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {serviceData.overview.content}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">Rated 5 stars by our clients</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-dark mb-6">Service Features</h3>
                    <div className="space-y-4">
                      {serviceData.overview.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}