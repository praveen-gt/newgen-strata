// // src/app/services/page.tsx

// import React from 'react'
// import { Metadata } from 'next'
// import { ServicesHero } from '@/components/sections/ServicesHero'
// import { ServicesGrid } from '@/components/sections/ServicesGrid'
// import { ServicesValueProposition } from '@/components/sections/ServicesValueProposition'
// import { ServicesCTA } from '@/components/sections/ServicesCTA'

// export const metadata: Metadata = {
//   title: 'Strata Management Services - Complete Solutions',
//   description: 'Comprehensive strata management services in Melbourne including meeting management, financial oversight, maintenance coordination, compliance, and 24/7 emergency support.',
//   keywords: 'strata management services Melbourne, owners corporation management, meeting management, financial management, maintenance coordination, compliance management',
//   openGraph: {
//     title: 'Professional Strata Management Services Melbourne',
//     description: 'From meeting management to emergency support, we provide complete strata solutions with modern technology and transparent processes.',
//     images: ['/images/services-hero.jpg'],
//   },
// }

// export default function ServicesPage() {
//   return (
//     <>
//       <ServicesHero />
//       <ServicesGrid />
//       <ServicesValueProposition />
//       <ServicesCTA />
//     </>
//   )
// }

// 'use client'

// import React from 'react'
// import { Badge } from '@/components/ui/badge'
// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { motion } from 'framer-motion'
// import { 
//   Calendar,
//   FileText,
//   MessageSquare,
//   Wrench,
//   FolderOpen,
//   DollarSign,
//   Bell,
//   Shield,
//   CheckCircle,
//   Users,
//   FileCheck,
//   ArrowRight,
//   Phone
// } from 'lucide-react'

// import Link from 'next/link'

// const services = [
//   {
//     icon: Calendar,
//     title: 'Meeting Management',
//     description: 'Planning and arranging committee meetings and AGMs with complete coordination and support.',
//     details: [
//       'Schedule and coordinate committee meetings',
//       'Organize Annual General Meetings (AGMs)',
//       'Venue booking and logistics management',
//       'Meeting facilitation and minute-taking'
//     ]
//   },
//   {
//     icon: FileText,
//     title: 'Meeting Documentation',
//     description: 'Preparing and distributing meeting notices, agendas, and minutes with accuracy and timeliness.',
//     details: [
//       'Professional meeting notice preparation',
//       'Comprehensive agenda creation',
//       'Detailed minute recording and distribution',
//       'Timely communication to all stakeholders'
//     ]
//   },
//   {
//     icon: MessageSquare,
//     title: 'Correspondence Management',
//     description: 'Responding to correspondences on the owner\'s corporation\'s behalf professionally and promptly.',
//     details: [
//       'Handle all incoming correspondence',
//       'Professional response management',
//       'Maintain communication records',
//       'Single point of contact for your corporation'
//     ]
//   },
//   {
//     icon: Wrench,
//     title: 'Maintenance & Repairs',
//     description: 'Organizing maintenance and repairs for common property with our trusted network of contractors.',
//     details: [
//       'Coordinate routine maintenance schedules',
//       'Emergency repair response',
//       'Quality control and oversight',
//       'Work with vetted, reliable contractors'
//     ]
//   },
//   {
//     icon: FolderOpen,
//     title: 'Register Maintenance',
//     description: 'Maintaining the owner\'s corporation\'s register with accuracy and compliance.',
//     details: [
//       'Keep accurate ownership records',
//       'Maintain up-to-date lot information',
//       'Ensure regulatory compliance',
//       'Secure document management'
//     ]
//   },
//   {
//     icon: DollarSign,
//     title: 'Financial Management',
//     description: 'Taking care of accounts payable, budgeting, and complete financial oversight.',
//     details: [
//       'Accounts payable management',
//       'Budget preparation and monitoring',
//       'Levy collection and management',
//       'Transparent financial reporting'
//     ]
//   },
//   {
//     icon: Bell,
//     title: 'Stakeholder Communication',
//     description: 'Sharing updates and notices with stakeholders clearly and consistently.',
//     details: [
//       'Regular updates and newsletters',
//       'Important notice distribution',
//       'Emergency communications',
//       'Clear, transparent information sharing'
//     ]
//   },
//   {
//     icon: Shield,
//     title: 'Insurance Services',
//     description: 'Taking care of insurance requirements with specialized underwriters and brokers.',
//     details: [
//       'Insurance policy management',
//       'Work with specialized strata insurers',
//       'Claims assistance and coordination',
//       'Annual insurance reviews'
//     ]
//   },
//   {
//     icon: CheckCircle,
//     title: 'Compliance Management',
//     description: 'Ensuring the building is compliant with all regulations and requirements.',
//     details: [
//       'Building compliance monitoring',
//       'Essential safety measures',
//       'Regulatory requirement updates',
//       'Documentation and certification'
//     ]
//   },
//   {
//     icon: Users,
//     title: 'Dispute Resolution',
//     description: 'Liaising with tenants, owners, and the owner\'s corporation regarding disputes and special requests.',
//     details: [
//       'Mediation and conflict resolution',
//       'Handle special requests professionally',
//       'Tenant and owner liaison',
//       'Fair and transparent processes'
//     ]
//   },
//   {
//     icon: FileCheck,
//     title: 'Sale Documentation',
//     description: 'Assisting with the documents required if a sale occurs.',
//     details: [
//       'Prepare Section 32 statements',
//       'Provide necessary documentation',
//       'Coordinate with legal representatives',
//       'Streamline the sale process'
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

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-brand-dark via-primary to-secondary">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <motion.div variants={fadeInUp}>
//               <Badge className="bg-white/20 backdrop-blur-md border-white/40 text-white mb-6">
//                 Our Services
//               </Badge>
//             </motion.div>

//             <motion.h1 
//               variants={fadeInUp}
//               className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
//             >
//               Personal, High-Quality{" "}
//               <span className="text-brand-accent">Strata Services</span>
//             </motion.h1>

//             <motion.p 
//               variants={fadeInUp}
//               className="text-xl text-white/90 leading-relaxed mb-8"
//             >
//               Comprehensive management and support for all aspects of owners corporations, 
//               delivered with honesty, integrity, and a commitment to excellence.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             variants={staggerContainer}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {services.map((service, index) => {
//               const IconComponent = service.icon
//               return (
//                 <motion.div key={service.title} variants={fadeInUp}>
//                   <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
//                     <CardContent className="p-8">
//                       <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-16 h-16 mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
//                         <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
//                       </div>
                      
//                       <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-primary transition-colors">
//                         {service.title}
//                       </h3>
                      
//                       <p className="text-gray-600 mb-6 leading-relaxed">
//                         {service.description}
//                       </p>

//                       <ul className="space-y-2">
//                         {service.details.map((detail, idx) => (
//                           <li key={idx} className="flex items-start text-sm text-gray-700">
//                             <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 mr-2" />
//                             <span>{detail}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-primary to-secondary">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//               Ready to Experience Professional Strata Management?
//             </h2>
//             <p className="text-xl text-white/90 mb-8 leading-relaxed">
//               Whether you own a large complex or a small property, we tailor our services 
//               to meet your unique needs with honesty, integrity, and excellence.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button 
//                 asChild
//                 size="lg"
//                 className="bg-white text-brand-dark hover:bg-gray-100 font-bold px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
//               >
//                 <Link href="/contact">
//                   Get Your Free Consultation
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
              
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-10 py-6 rounded-full transition-all duration-300"
//               >
//                 <Link href="tel:+61399999999">
//                   <Phone className="mr-2 h-5 w-5" />
//                   Call Us Today
//                 </Link>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }


'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { 
  Calendar,
  FileText,
  MessageSquare,
  Wrench,
  FolderOpen,
  DollarSign,
  Bell,
  Shield,
  CheckCircle,
  Users,
  FileCheck,
  ArrowRight,
  Phone,
  Sparkles,
  ChevronRight
} from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: Calendar,
    title: 'Meeting Management',
    description: 'Planning and arranging committee meetings and AGMs with complete coordination and support.',
    details: [
      'Schedule and coordinate committee meetings',
      'Organize Annual General Meetings (AGMs)',
      'Venue booking and logistics management',
      'Meeting facilitation and minute-taking'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FileText,
    title: 'Meeting Documentation',
    description: 'Preparing and distributing meeting notices, agendas, and minutes with accuracy and timeliness.',
    details: [
      'Professional meeting notice preparation',
      'Comprehensive agenda creation',
      'Detailed minute recording and distribution',
      'Timely communication to all stakeholders'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: MessageSquare,
    title: 'Correspondence Management',
    description: 'Responding to correspondences on the owner\'s corporation\'s behalf professionally and promptly.',
    details: [
      'Handle all incoming correspondence',
      'Professional response management',
      'Maintain communication records',
      'Single point of contact for your corporation'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Organizing maintenance and repairs for common property with our trusted network of contractors.',
    details: [
      'Coordinate routine maintenance schedules',
      'Emergency repair response',
      'Quality control and oversight',
      'Work with vetted, reliable contractors'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: FolderOpen,
    title: 'Register Maintenance',
    description: 'Maintaining the owner\'s corporation\'s register with accuracy and compliance.',
    details: [
      'Keep accurate ownership records',
      'Maintain up-to-date lot information',
      'Ensure regulatory compliance',
      'Secure document management'
    ],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Taking care of accounts payable, budgeting, and complete financial oversight.',
    details: [
      'Accounts payable management',
      'Budget preparation and monitoring',
      'Levy collection and management',
      'Transparent financial reporting'
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Bell,
    title: 'Stakeholder Communication',
    description: 'Sharing updates and notices with stakeholders clearly and consistently.',
    details: [
      'Regular updates and newsletters',
      'Important notice distribution',
      'Emergency communications',
      'Clear, transparent information sharing'
    ],
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Insurance Services',
    description: 'Taking care of insurance requirements with specialized underwriters and brokers.',
    details: [
      'Insurance policy management',
      'Work with specialized strata insurers',
      'Claims assistance and coordination',
      'Annual insurance reviews'
    ],
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: CheckCircle,
    title: 'Compliance Management',
    description: 'Ensuring the building is compliant with all regulations and requirements.',
    details: [
      'Building compliance monitoring',
      'Essential safety measures',
      'Regulatory requirement updates',
      'Documentation and certification'
    ],
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Dispute Resolution',
    description: 'Liaising with tenants, owners, and the owner\'s corporation regarding disputes and special requests.',
    details: [
      'Mediation and conflict resolution',
      'Handle special requests professionally',
      'Tenant and owner liaison',
      'Fair and transparent processes'
    ],
    color: 'from-sky-500 to-blue-500'
  },
  {
    icon: FileCheck,
    title: 'Sale Documentation',
    description: 'Assisting with the documents required if a sale occurs.',
    details: [
      'Prepare Section 32 statements',
      'Provide necessary documentation',
      'Coordinate with legal representatives',
      'Streamline the sale process'
    ],
    color: 'from-amber-500 to-orange-500'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-brand-dark via-primary to-secondary">
                  <div className="absolute inset-0">
                    <Image
                      // src="/images/about/about-banner.jpg"
                      src="/images/melbourne-skyline-banner.png"
                      alt="NewGen Strata Services - Modern strata management excellence"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Lighter Gradient Overlay - Better Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/75 via-black/50 to-brand-dark/70" />
                  </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full blur-3xl" />
        </div>

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
                    initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-4xl text-center mx-auto"
          >
            {/* <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
              <Badge className="bg-white/20 backdrop-blur-md border-white/40 text-white text-sm px-4 py-1.5">
                Our Services
              </Badge>
              <Sparkles className="h-5 w-5 text-white animate-pulse" style={{ animationDelay: '0.3s' }} />
            </motion.div> */}

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Personal, High-Quality{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-accent">Strata Services</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-white/20 -rotate-1" />
              </span>
            </motion.h1>

            {/* <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Comprehensive management and support for all aspects of owners corporations, 
              delivered with honesty, integrity, and a commitment to excellence.
            </motion.p> */}
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52.5C840 55 960 60 1080 57.5C1200 55 1320 45 1380 40L1440 35V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Everything You Need,{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                All in One Place
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From financial management to compliance, we handle every aspect of your strata management needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div 
                  key={service.title} 
                  variants={scaleIn}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <Card className="h-full border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group hover:-translate-y-3 overflow-hidden relative">
                    {/* Gradient accent on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                    
                    <CardContent className="p-8">
                      {/* Icon with gradient background */}
                      <div className="relative mb-6">
                        <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-4 w-16 h-16 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        {/* Floating badge on hover */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: hoveredIndex === index ? 1 : 0,
                            scale: hoveredIndex === index ? 1 : 0
                          }}
                          className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                        >
                          Featured
                        </motion.div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Details list with staggered animation */}
                      <div className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-sm text-gray-700 group/item"
                          >
                            <div className={`bg-gradient-to-br ${service.color} rounded-full p-1 mr-3 mt-0.5 flex-shrink-0`}>
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <span className="group-hover/item:text-gray-900 transition-colors">{detail}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Learn more indicator */}
                      {/* <div className="mt-6 pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center text-primary font-semibold text-sm">
                          Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div> */}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-primary to-secondary" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white/20 rounded-full" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-white/10 rounded-2xl rotate-12" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}

            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Experience Professional Strata Management?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
            >
              Whether you own a large complex or a small property, we tailor our services 
              to meet your unique needs with honesty, integrity, and excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button 
                asChild
                size="lg"
                className="group bg-white text-brand-dark hover:bg-gray-50 font-bold px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Your Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-2 border-white bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-brand-dark px-12 py-7 rounded-2xl transition-all duration-300 text-lg font-bold"
              >
                <Link href="tel:+61399999999" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us Today
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">70+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Personalized Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Transparent Communication</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}