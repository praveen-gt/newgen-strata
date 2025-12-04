"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const foundingPrinciples = [
  'To operate with honesty and integrity at all times',
  'To achieve a standard of excellence in everything we do',
  'To strive to "delight our customers"',
  'To establish an environment of mutual respect, transparency and cooperation with every Owners Corporation we serve',
  'To provide to our client organisations with a high standard of reliable, trustworthy and professionally competent trade service providers'
]

export function WhatIsNewGen() {
  return (
    // <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-secondary/5">
    //   <div className="container-custom">
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">
    //       <motion.div
    //         initial="hidden"
    //         whileInView="visible"
    //         viewport={{ once: true }}
    //         variants={fadeInUp}
    //       >
    //         <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-6">
    //           What Is NewGen
    //         </Badge>
            
    //         <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
    //           What is <span className="text-gradient-wimbledon">NewGen Strata Services?</span>
    //         </h2>
            
    //         <p className="text-lg text-gray-700 leading-relaxed">
    //           As the name NewGen implies it is a &quot;new generation&quot; organisation designed to 
    //           provide a new level of support service and respect to members of Owners 
    //           Corporations using the latest technology and techniques and a business model 
    //           designed to provide the optimal level of management and services to Owners 
    //           Corporations and their members.
    //         </p>
    //       </motion.div>

    //       <motion.div
    //         initial="hidden"
    //         whileInView="visible"
    //         viewport={{ once: true }}
    //         variants={fadeInUp}
    //         className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl"
    //       >
    //         <h3 className="text-2xl font-bold mb-6">The Founding Principles</h3>
    //         <ul className="space-y-4">
    //           {foundingPrinciples.map((principle, index) => (
    //             <li key={index} className="flex items-start space-x-3">
    //               <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
    //               <span className="leading-relaxed">{principle}</span>
    //             </li>
    //           ))}
    //         </ul>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>

        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2">
                  What Is NewGen
                </Badge>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6">
                  What is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NewGen Strata Services?</span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  As the name NewGen implies it is a &quot;new generation&quot; organisation designed to 
                  provide a new level of support service and respect to members of Owners 
                  Corporations using the latest technology and techniques and a business model 
                  designed to provide the optimal level of management and services to Owners 
                  Corporations and their members.
                </p>
              </motion.div>
    
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-white shadow-2xl"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">The Founding Principles</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {foundingPrinciples.map((principle, index) => (
                    <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span className="leading-relaxed text-sm sm:text-base">{principle}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
  )
}
