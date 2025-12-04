"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Clock, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const commitments = [
  {
    icon: Award,
    title: 'Capability',
    description: 'Deep knowledge of the Owners Corporation Act and expertise in managing every aspect of Owners Corporations — from financials and budgeting to compliance and maintenance.',
    color: 'text-primary'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on every time. In this industry, responsiveness and expertise make all the difference.',
    color: 'text-secondary'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with honesty and integrity at all times, with transparency in everything we do.',
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

export function OurCommitments() {
  return (
    // <section className="relative py-20 overflow-hidden">
    //   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
    //   <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
    //   <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      
    //   <div className="container mx-auto px-6 relative z-10">
    //     <motion.div
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.3 }}
    //       variants={staggerContainer}
    //       className="text-center max-w-3xl mx-auto mb-16"
    //     >
    //       <motion.div variants={fadeInUp}>
    //         <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
    //           Our Promise
    //         </Badge>
    //       </motion.div>

    //       <motion.h2
    //         variants={fadeInUp}
    //         className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6"
    //       >
    //         Three Fundamental <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Commitments</span>
    //       </motion.h2>

    //       <motion.p
    //         variants={fadeInUp}
    //         className="text-lg md:text-xl text-gray-600 leading-relaxed"
    //       >
    //         We make these commitments to our clients, our service providers, and our staff — 
    //         and we&apos;re ready to be held accountable to them at any time.
    //       </motion.p>
    //     </motion.div>

    //     <motion.div
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.1 }}
    //       variants={staggerContainer}
    //       className="grid md:grid-cols-3 gap-8 mb-12"
    //     >
    //       {commitments.map((item) => {
    //         const IconComponent = item.icon
    //         return (
    //           <motion.div key={item.title} variants={fadeInUp}>
    //             <Card className="text-center p-8 h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105">
    //               <CardContent className="p-0">
    //                 <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
    //                   <IconComponent className={`h-10 w-10 ${item.color}`} />
    //                 </div>
    //                 <h3 className="text-2xl font-bold text-brand-dark mb-3">
    //                   {item.title}
    //                 </h3>
    //                 <p className="text-gray-600 leading-relaxed">
    //                   {item.description}
    //                 </p>
    //               </CardContent>
    //             </Card>
    //           </motion.div>
    //         )
    //       })}
    //     </motion.div>

    //     <motion.div
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.3 }}
    //       variants={fadeInUp}
    //       className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-primary/10"
    //     >
    //       <blockquote className="text-2xl font-semibold text-brand-dark italic mb-2">
    //         &quot;The quality is long remembered after the price is forgotten&quot;
    //       </blockquote>
    //       <p className="text-gray-600 font-medium">— NewGen Strata Services</p>
    //     </motion.div>
    //   </div>
    // </section>

    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-3 sm:mb-4 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2">
              Our Promise
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6 px-2"
          >
            Three Fundamental <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Commitments</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2"
          >
            We make these commitments to our clients, our service providers, and our staff — 
            and we&apos;re ready to be held accountable to them at any time.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12"
        >
          {commitments.map((item) => {
            const IconComponent = item.icon
            return (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="text-center p-6 sm:p-7 md:p-8 h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full p-4 sm:p-5 md:p-6 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
                      <IconComponent className={`h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 ${item.color}`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-7 md:p-8 max-w-4xl mx-auto border border-primary/10"
        >
          <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-dark italic mb-2 px-2">
            &quot;The quality is long remembered after the price is forgotten&quot;
          </blockquote>
          <p className="text-sm sm:text-base text-gray-600 font-medium">— NewGen Strata Services</p>
        </motion.div>
      </div>
    </section>
  )
}
