// src/components/sections/ServiceHero.tsx

"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceHeroProps {
  serviceData: {
    title: string
    subtitle: string
    description: string
    heroImage: string
  }
}

// interface ServiceHeroProps {
//   serviceData?: {
//     title: string
//     subtitle: string
//     description: string
//     heroImage?: string
//     overview?: {
//       title: string
//       content: string
//       features: string[]
//     }
//   }
// }


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

export function ServiceHero({ serviceData }: ServiceHeroProps) {
  return (
    <section className="relative pt-24 pb-10 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={serviceData.heroImage}
          alt={serviceData.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-[1]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center space-x-2 text-sm text-gray-300 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{serviceData.title}</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
              {serviceData.subtitle}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {serviceData.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 leading-relaxed mb-8"
          >
            {serviceData.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="btn-wimbledon">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-dark">
              <Link href="/services">
                <ArrowLeft className="mr-2 h-5 w-5" />
                All Services
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div >

      {/* Bottom fade */}
      < div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]" />
    </section >
  )
}