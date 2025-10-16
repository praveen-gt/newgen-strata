// src/components/sections/TechnologyAdvantage.tsx
"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Smartphone, Cloud, BarChart3, Bell, FileText, Lock, Wifi, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const techFeatures = [
  { icon: Smartphone, title: 'Mobile-First Platform', description: 'Manage your property from anywhere, anytime' },
  { icon: Cloud, title: 'Cloud Document Storage', description: '24/7 access to all property records' },
  { icon: BarChart3, title: 'Live Financial Dashboard', description: 'Real-time budget and expense tracking' },
  { icon: Bell, title: 'Smart Notifications', description: 'Stay informed with instant alerts' },
  { icon: FileText, title: 'Digital Workflows', description: 'Paperless approvals and signatures' },
  { icon: Lock, title: 'Bank-Grade Security', description: 'Enterprise encryption for your data' },
  { icon: Wifi, title: 'API Integrations', description: 'Connected with accounting and tools' },
  { icon: Database, title: 'Automated Reporting', description: 'Scheduled reports delivered automatically' }
]

export function TechnologyAdvantage() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/approach/technology.jpg" 
                alt="Technology platform interface" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-8"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Technology Platform
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                Modern Tools for{" "}
                <span className="text-gradient-wimbledon">Better Management</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We leverage cutting-edge technology to make strata management more efficient, 
                transparent, and accessible than ever before.
              </p>
              <p className="text-gray-600 leading-relaxed">
                But technology is just a tool—our real advantage is how we use it to enhance 
                personal service, not replace it.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              {techFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="border border-gray-200 hover:border-primary/30 transition-all h-full group hover:shadow-md">
                      <CardContent className="p-4">
                        <Icon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold text-brand-dark text-sm mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}