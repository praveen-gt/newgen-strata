"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar,
  DollarSign,
  Wrench,
  FileCheck,
  Bell,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Link from 'next/link'

const services = [
  {
    icon: Calendar,
    title: 'Meeting Management',
    description: 'Planning and arranging committee meetings and AGMs, preparing and distributing meeting notices, agendas, and minutes.',
    color: 'text-primary'
  },
  {
    icon: MessageSquare,
    title: 'Correspondence Management',
    description: 'Responding to correspondences on the owner\'s corporation\'s behalf professionally and promptly.',
    color: 'text-secondary'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Organizing maintenance and repairs for common property with our vetted network of contractors.',
    color: 'text-brand-accent'
  },
  {
    icon: FileCheck,
    title: 'Register & Documentation',
    description: 'Maintaining the owner\'s corporation register and assisting with documents required for sales.',
    color: 'text-primary'
  },
  {
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Taking care of accounts payable, budgeting, and providing transparent financial reporting.',
    color: 'text-secondary'
  },
  {
    icon: Bell,
    title: 'Stakeholder Communication',
    description: 'Sharing updates and notices with stakeholders, ensuring building compliance, and liaising with all parties regarding disputes and special requests.',
    color: 'text-brand-accent'
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

export function ServicesPreview() {
return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Our Services
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6"
          >
            Personal, High-Quality{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Comprehensive services for all aspects of owners corporation management.
          </motion.p>
        </motion.div>

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
                <Link href="/services" className="block h-full">
                  <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm group hover:-translate-y-2 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-16 h-16 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                          <IconComponent className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform`} />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-brand-dark mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {service.description}
                          </p>
                          <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                            <span>Learn more</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}