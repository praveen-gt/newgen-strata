"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
// import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

// const contactInfo = [
//   {
//     icon: Phone,
//     title: 'Phone',
//     details: '+61 3 9XXX XXXX',
//     description: 'Call us for immediate assistance'
//   },
//   {
//     icon: Mail,
//     title: 'Email',
//     details: 'info@newgenstrataservices.com.au',
//     description: 'Send us your detailed inquiry'
//   },
//   {
//     icon: Clock,
//     title: 'Business Hours',
//     details: 'Mon-Fri: 9:00 AM - 5:00 PM',
//     description: '24/7 emergency support available'
//   },
//   {
//     icon: MapPin,
//     title: 'Service Area',
//     details: 'All Melbourne Metropolitan',
//     description: 'From CBD to outer suburbs'
//   }
// ]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function ContactHero() {
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
              Get In Touch
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Let&apos;s Discuss Your <span className="text-brand-accent">Strata Needs</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 leading-relaxed mb-8"
          >
            Ready to experience the NewGen difference? We&apos;re here to help you transform 
            your strata management experience with our expertise and personalized approach.
          </motion.p>
        </motion.div>
{/* 
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <motion.div key={info.title} variants={fadeInUp}>
                <Card className="bg-white/95 backdrop-blur-sm h-full hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-brand-dark mb-2">{info.title}</h3>
                    <div className="text-primary font-medium mb-2">{info.details}</div>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div> */}
      </div>
    </section>
  )
}