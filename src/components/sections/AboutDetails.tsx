// src/components/sections/AboutDetails.tsx

"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const differentiators = [
  'Direct access to experienced strata managers',
  'Comprehensive financial reporting with no surprises',
  'Vetted contractor network for quality work at fair prices',
  'Proactive maintenance that protects property values',
  'Technology-enabled efficiency that saves you money'
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function AboutDetails() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative h-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-brand-dark opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                <Image src="/images/about/about-image-1.jpg" alt="Modern apartment building representing our strata management services" fill className="object-cover" objectPosition='center' />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 text-white">
              Our Story
            </Badge>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              A Fresh Approach to{" "}
              <span className="text-gradient-wimbledon">Strata Management</span>
            </h2>

            {/* <p className="text-lg text-gray-600 leading-relaxed">
              After hearing countless complaints about traditional strata management, 
              Kevin Fuller and Sam Disanayaka saw an opportunity to do things differently. 
              With 70+ years of combined business experience, they founded NewGen to provide 
              exceptional service using modern technology and proven business principles.
            </p> */}

            <p className="text-gray-600 leading-relaxed">
              The two founders, Kevin Fuller and Sam Disanayaka, have more than 70 years
              of business experience between them. Both have been involved in a variety of
              businesses ranging from small startups to large corporations, bringing invaluable
              hands-on experience and many years in business leadership roles. They have worked
              together on various successful projects for several different corporations.
            </p>

            <div className="space-y-3">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="btn-wimbledon">
                <Link href="/approach">
                  Our Approach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-wimbledon-outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}