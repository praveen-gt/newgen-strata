// // src/components/sections/ServicesGrid.tsx

// "use client"

// import React from 'react'
// import Link from 'next/link'
// import { Card, CardContent } from '@/components/ui/card'
// import { 
//   Calendar, 
//   DollarSign, 
//   Wrench, 
//   FileCheck, 
//   Shield,
//   Users,
//   ArrowRight,
//   CheckCircle
// } from 'lucide-react'
// import { motion } from 'framer-motion'

// const services = [
//   {
//     slug: 'meeting-management',
//     icon: Calendar,
//     title: 'Meeting Management',
//     description: 'Professional planning and coordination of committee meetings and AGMs with complete documentation.',
//     features: [
//       'AGM and committee meeting planning',
//       'Meeting notices and agendas',
//       'Professional minutes documentation',
//       'Compliance with all requirements'
//     ]
//   },
//   {
//     slug: 'financial-management',
//     icon: DollarSign,
//     title: 'Financial Management',
//     description: 'Complete financial oversight including accounts payable, reporting, and budget management.',
//     features: [
//       'Accounts payable management',
//       'Financial reporting and statements',
//       'Budget preparation and monitoring',
//       'Levy collection and banking'
//     ]
//   },
//   {
//     slug: 'maintenance-coordination',
//     icon: Wrench,
//     title: 'Maintenance Coordination',
//     description: 'Expert coordination of all maintenance and repairs for common property with trusted contractors.',
//     features: [
//       'Routine maintenance scheduling',
//       'Emergency repair coordination',
//       'Contractor sourcing and management',
//       'Quality control and inspections'
//     ]
//   },
//   {
//     slug: 'compliance-administration',
//     icon: FileCheck,
//     title: 'Compliance & Administration',
//     description: 'Complete management of compliance requirements, registers, and documentation.',
//     features: [
//       'Building compliance monitoring',
//       'Register maintenance',
//       'Correspondence handling',
//       'Stakeholder communication'
//     ]
//   },
//   {
//     slug: 'insurance-services',
//     icon: Shield,
//     title: 'Insurance Services',
//     description: 'Comprehensive insurance management including policy coordination and claims support.',
//     features: [
//       'Policy review and recommendations',
//       'Annual renewal coordination',
//       'Claims management',
//       'Risk assessment'
//     ]
//   },
//   {
//     slug: 'dispute-resolution',
//     icon: Users,
//     title: 'Dispute Resolution',
//     description: 'Professional mediation and support for disputes and special requests.',
//     features: [
//       'Dispute mediation',
//       'Stakeholder liaison',
//       'Special request coordination',
//       'VCAT support'
//     ]
//   }
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function ServicesGrid() {
//   return (
//     <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
//       <div className="container-custom">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {services.map((service) => {
//             const IconComponent = service.icon
//             return (
//               <motion.div key={service.slug} variants={fadeInUp}>
//                 <Link href={`/services/${service.slug}`}>
//                   <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
//                     <CardContent className="p-8">
//                       <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-fit mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
//                         <IconComponent className="h-10 w-10 text-primary" />
//                       </div>
                      
//                       <h3 className="text-2xl font-semibold text-brand-dark mb-3 group-hover:text-primary transition-colors">
//                         {service.title}
//                       </h3>
                      
//                       <p className="text-gray-600 leading-relaxed mb-6">
//                         {service.description}
//                       </p>

//                       <div className="space-y-2 mb-6">
//                         {service.features.map((feature, idx) => (
//                           <div key={idx} className="flex items-start space-x-2">
//                             <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
//                             <span className="text-sm text-gray-600">{feature}</span>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
//                         Learn More
//                         <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// src/components/sections/ServicesGrid.tsx

"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  DollarSign, 
  Wrench, 
  FileCheck, 
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    slug: 'meeting-management',
    icon: Calendar,
    title: 'Meeting Management',
    description: 'Professional planning and coordination of committee meetings and AGMs with complete documentation.',
    features: [
      'AGM and committee meeting planning',
      'Meeting notices and agendas',
      'Professional minutes documentation',
      'Compliance with all requirements'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    slug: 'financial-management',
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Complete financial oversight including accounts payable, reporting, and budget management.',
    features: [
      'Accounts payable management',
      'Financial reporting and statements',
      'Budget preparation and monitoring',
      'Levy collection and banking'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    slug: 'maintenance-coordination',
    icon: Wrench,
    title: 'Maintenance Coordination',
    description: 'Expert coordination of all maintenance and repairs for common property with trusted contractors.',
    features: [
      'Routine maintenance scheduling',
      'Emergency repair coordination',
      'Contractor sourcing and management',
      'Quality control and inspections'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    slug: 'compliance-administration',
    icon: FileCheck,
    title: 'Compliance & Administration',
    description: 'Complete management of compliance requirements, registers, and documentation.',
    features: [
      'Building compliance monitoring',
      'Register maintenance',
      'Correspondence handling',
      'Stakeholder communication'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    slug: 'insurance-services',
    icon: Shield,
    title: 'Insurance Services',
    description: 'Comprehensive insurance management including policy coordination and claims support.',
    features: [
      'Policy review and recommendations',
      'Annual renewal coordination',
      'Claims management',
      'Risk assessment'
    ],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    slug: 'dispute-resolution',
    icon: Users,
    title: 'Dispute Resolution',
    description: 'Professional mediation and support for disputes and special requests.',
    features: [
      'Dispute mediation',
      'Stakeholder liaison',
      'Special request coordination',
      'VCAT support'
    ],
    color: 'from-yellow-500 to-orange-500'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

export function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-4xl font-heading font-bold text-brand-dark mb-4"
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            End-to-end strata management solutions tailored to your needs
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div 
                key={service.slug} 
                variants={fadeInUp}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card className="h-full border-2 border-gray-100 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden bg-white">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <CardContent className="p-8 relative z-10">
                      {/* Icon with animated gradient background */}
                      <motion.div 
                        className={`relative mb-6 w-16 h-16`}
                        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-50`} />
                        <div className={`relative bg-gradient-to-br ${service.color} rounded-2xl p-4 flex items-center justify-center`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>
                      
                      <h3 className="text-2xl font-heading font-bold text-brand-dark mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 min-h-[3rem]">
                        {service.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button 
                        variant="ghost" 
                        className="w-full group/btn justify-between text-primary hover:text-white hover:bg-primary transition-all duration-300"
                      >
                        <span className="font-semibold">Learn More</span>
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}