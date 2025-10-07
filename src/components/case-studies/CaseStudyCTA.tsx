"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Phone, Mail, FileText } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Pre-generated random values to prevent hydration mismatch
const PARTICLE_POSITIONS = [
  { left: 20, top: 30, delay: 0 },
  { left: 80, top: 60, delay: 0.5 },
  { left: 50, top: 15, delay: 1 },
  { left: 30, top: 80, delay: 1.5 },
  { left: 70, top: 40, delay: 2 }
]

export function CaseStudyCTA() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary to-secondary">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl p-8 lg:p-12 rounded-3xl">
            <div className="max-w-4xl mx-auto">
              {/* Main CTA */}
              <div className="text-center text-white mb-12">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-6"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                </motion.div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                  Facing Similar Challenges?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Every owners corporation faces unique challenges. Let us show you how our 
                  experience and problem-solving approach can work for your property.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all px-8 py-6 text-lg"
                    >
                      <Link href="/contact">
                        Get Your Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl transition-all px-8 py-6 text-lg backdrop-blur-sm bg-white/10"
                    >
                      <Link href="tel:+61399999999">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {[
                    { icon: Phone, text: 'Available 24/7 for emergencies' },
                    { icon: Mail, text: 'Response within 2 hours' },
                    { icon: FileText, text: 'Free property assessment' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-center gap-3 text-white/90"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                {/* <div className="border-t border-white/20 pt-10 mt-10">
                  <p className="text-white/80 mb-6 text-lg">
                    Want to read more case studies?
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { 
                        href: '/case-studies/fixing-the-leaks', 
                        title: 'Emergency Response',
                        icon: '🚨'
                      },
                      { 
                        href: '/case-studies/making-invisible-visible', 
                        title: 'Financial Transparency',
                        icon: '💰'
                      },
                      { 
                        href: '/case-studies/problem-solvers-rescue', 
                        title: 'Dispute Resolution',
                        icon: '🤝'
                      }
                    ].map((caseStudy, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link href={caseStudy.href}>
                          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all p-4 cursor-pointer group h-full">
                            <div className="text-center">
                              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform inline-block">
                                {caseStudy.icon}
                              </div>
                              <p className="text-white font-medium text-sm">
                                {caseStudy.title}
                              </p>
                            </div>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Floating particles effect - only render after mount to prevent hydration issues */}
        {mounted && PARTICLE_POSITIONS.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}