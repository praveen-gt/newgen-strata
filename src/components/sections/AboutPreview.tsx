"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Award, Users, Target, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// const highlights = [
//   'Single point of contact',
//   'Collaborative approach',
//   'Modern technology',
//   '24/7 emergency support'
// ]

const foundingPrinciples = [
  'Operate with honesty and integrity at all times',
  'Achieve a standard of excellence in everything we do',
  'Strive to "delight our customers"',
  'Establish mutual respect, transparency and cooperation',
  'Provide reliable, trustworthy, professionally competent service providers'
]

const stats = [
  { icon: Award, value: '70+', label: 'Years Combined Experience' },
  { icon: Users, value: '500+', label: 'Properties Managed' },
  { icon: Target, value: '98%', label: 'Client Satisfaction' }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function AboutPreview() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              About NewGen Strata Services
            </Badge>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            A New Generation of <span className="text-gradient-wimbledon">Strata Management</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
            Born from a vision to revolutionize the industry with exceptional service and modern technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-brand-accent opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                {/* <Image src={
                  "/images/about/about-us-1.jpg"
                } alt="About NewGen Strata Services" fill className="object-cover" priority /> */}
                <Image src="/images/modern-apartment-building.jpg" alt="Modern apartment building representing our strata management services" fill className="object-cover" />
                {/* Image overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            {stats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className={`absolute bg-white rounded-xl shadow-xl p-4 ${
                    idx === 0 ? '-bottom-6 -left-6' : 
                    idx === 1 ? 'top-8 -right-6' : 'bottom-1/4 -left-6'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 rounded-full p-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-dark">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
                Why Choose NewGen?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We've revolutionized strata management by combining 70+ years of expertise 
                with cutting-edge technology and genuine partnership.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              {/* {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))} */}
              {foundingPrinciples.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/20 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="btn-wimbledon">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-wimbledon-outline">
                <Link href="/approach">Our Approach</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}