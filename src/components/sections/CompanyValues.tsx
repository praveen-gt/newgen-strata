// // src/components/sections/CompanyValues.tsx

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { 
//   Shield, 
//   Heart, 
//   Users, 
//   Zap, 
//   Globe, 
//   Award,
//   ArrowRight,
//   CheckCircle2,
//   Lightbulb,
//   HandHeart
// } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const coreValues = [
//   {
//     icon: Shield,
//     title: 'Transparency & Trust',
//     description: 'We believe in complete transparency in all our dealings, ensuring our clients always know exactly what\'s happening with their property management.',
//     benefits: [
//       'Open communication channels',
//       'Regular detailed reporting',
//       'Clear fee structures',
//       'Accessible documentation'
//     ]
//   },
//   {
//     icon: Heart,
//     title: 'Customer-Centric Service',
//     description: 'Our clients are at the heart of everything we do. We go beyond meeting expectations to truly delight those we serve.',
//     benefits: [
//       'Personalized service approach',
//       '24/7 support availability',
//       'Proactive problem solving',
//       'Regular satisfaction surveys'
//     ]
//   },
//   {
//     icon: Award,
//     title: 'Excellence in Delivery',
//     description: 'We maintain the highest standards of service delivery through continuous improvement and attention to detail.',
//     benefits: [
//       'Quality assurance processes',
//       'Certified professionals',
//       'Best practice methodologies',
//       'Continuous staff training'
//     ]
//   },
//   {
//     icon: Users,
//     title: 'Collaborative Partnership',
//     description: 'We work as partners with our clients, fostering collaborative relationships built on mutual respect and shared goals.',
//     benefits: [
//       'Joint decision making',
//       'Regular stakeholder meetings',
//       'Shared responsibility model',
//       'Long-term relationship focus'
//     ]
//   },
//   {
//     icon: Zap,
//     title: 'Innovation & Technology',
//     description: 'We embrace cutting-edge technology and innovative solutions to enhance service delivery and client experience.',
//     benefits: [
//       'Digital service platforms',
//       'Automated reporting systems',
//       'Mobile accessibility',
//       'Data-driven insights'
//     ]
//   },
//   {
//     icon: Globe,
//     title: 'Community Impact',
//     description: 'We believe in making a positive impact on the communities we serve, creating better living environments for all residents.',
//     benefits: [
//       'Sustainable practices',
//       'Community engagement',
//       'Local service providers',
//       'Environmental responsibility'
//     ]
//   }
// ]

// const valueStats = [
//   { 
//     icon: HandHeart, 
//     value: '100%', 
//     label: 'Client Satisfaction Focus',
//     description: 'Every decision is made with client satisfaction in mind'
//   },
//   { 
//     icon: CheckCircle2, 
//     value: '24/7', 
//     label: 'Support Availability',
//     description: 'Round-the-clock support when you need it most'
//   },
//   { 
//     icon: Lightbulb, 
//     value: '15+', 
//     label: 'Innovation Initiatives',
//     description: 'Continuous improvement projects launched annually'
//   },
//   { 
//     icon: Users, 
//     value: '98%', 
//     label: 'Partnership Success Rate',
//     description: 'Long-term client relationships built on trust'
//   }
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function CompanyValues() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-white via-brand-neutral/10 to-primary/5">
//       <div className="container-custom">
//         {/* Section Header */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-4xl mx-auto mb-16"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
//               Our Core Values
//             </Badge>
//           </motion.div>
//           <motion.h2 
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
//           >
//             Values That Drive 
//             <span className="text-gradient-wimbledon"> Our Success</span>
//           </motion.h2>
//           <motion.p 
//             variants={fadeInUp}
//             className="text-lg text-gray-600 leading-relaxed"
//           >
//             Our company values aren't just words on a wall – they're the principles that guide every 
//             interaction, decision, and service we provide to our clients.
//           </motion.p>
//         </motion.div>

//         {/* Values Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
//         >
//           {coreValues.map((value, index) => {
//             const IconComponent = value.icon
//             return (
//               <motion.div key={value.title} variants={fadeInUp}>
//                 <Card className="card-wimbledon h-full group hover-lift">
//                   <CardContent className="p-6">
//                     <div className="mb-6">
//                       <div className="flex items-center space-x-4 mb-4">
//                         <div className="bg-gradient-wimbledon p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
//                           <IconComponent className="h-6 w-6 text-white" />
//                         </div>
//                         <h3 className="text-xl font-semibold text-brand-dark">{value.title}</h3>
//                       </div>
//                       <p className="text-gray-600 leading-relaxed mb-4">
//                         {value.description}
//                       </p>
//                     </div>
                    
//                     <div className="space-y-2">
//                       <h4 className="font-medium text-brand-dark text-sm uppercase tracking-wide mb-3">
//                         How We Deliver
//                       </h4>
//                       {value.benefits.map((benefit, idx) => (
//                         <div key={idx} className="flex items-center space-x-2">
//                           <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
//                           <span className="text-sm text-gray-600">{benefit}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//         >
//           {valueStats.map((stat, index) => {
//             const IconComponent = stat.icon
//             return (
//               <motion.div key={stat.label} variants={fadeInUp}>
//                 <Card className="bg-gradient-wimbledon text-white p-6 text-center hover-lift">
//                   <IconComponent className="h-10 w-10 text-brand-accent mx-auto mb-4" />
//                   <div className="text-3xl font-bold mb-2">{stat.value}</div>
//                   <div className="font-semibold mb-2">{stat.label}</div>
//                   <div className="text-sm text-white/80">{stat.description}</div>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
//         >
//           <div className="max-w-3xl mx-auto">
//             <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
//               Experience Values-Driven Service
//             </h3>
//             <p className="text-gray-600 text-lg mb-8">
//               Our values aren't just principles – they're promises. Experience the difference 
//               that values-driven service can make for your owners corporation.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" className="btn-wimbledon">
//                 <Link href="/services">
//                   Explore Our Services
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="btn-wimbledon-outline">
//                 <Link href="/contact">Get in Touch</Link>
//               </Button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// src/components/sections/CompanyValues.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Shield, Heart, Users, Zap, Award, Target, ArrowRight, CheckCircle2, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const coreValues = [
  {
    icon: Shield,
    title: 'Transparency & Trust',
    description: 'Complete openness in all dealings with clear reporting and accessible documentation.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Customer Delight',
    description: 'Going beyond satisfaction to truly delight our clients with exceptional service.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest standards through continuous improvement and attention to detail.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: 'Working together as partners, fostering mutual respect and shared goals.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Embracing modern technology and innovative solutions to enhance service delivery.',
    color: 'from-yellow-500 to-lime-500'
  },
  {
    icon: Target,
    title: 'Results Focused',
    description: 'Committed to delivering measurable outcomes that matter to our clients.',
    color: 'from-emerald-500 to-teal-500'
  }
]

const principles = [
  {
    icon: Target,
    title: 'Honesty & Integrity',
    description: 'To operate with honesty and integrity at all times.',
     color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'To achieve a standard of excellence in everything we do.',
     color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Heart,
    title: 'Customer Delight',
    description: 'To strive to "delight our customers".',
       color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Handshake,
    title: 'Mutual Respect',
    description: 'To establish an environment of mutual respect, transparency and cooperation with every Owners Corporation we serve.',
        color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Users,
    title: 'Professional Service Providers',
    description: 'To provide our client organisations with a high standard of reliable, trustworthy and professionally competent trade service providers.',
     color: 'from-purple-500 to-indigo-500'
  },
    {
    icon: Zap,
    title: 'Innovation',
    description: 'Embracing modern technology and innovative solutions to enhance service delivery.',
    color: 'from-yellow-500 to-lime-500'
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function CompanyValues() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Animated background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-dark to-black">
        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4">
              Our Core Values
            </Badge>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-heading leading-tight  font-bold text-white mb-6"
          >
            Principles That Drive{" "} <br />
            <span className="text-primary">Everything We Do</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Our values guide every interaction, decision, and service we provide to our clients.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {principles.map((value) => {
            const IconComponent = value.icon
            return (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      {/* Icon with gradient */}
                      <div className={`bg-gradient-to-br ${value.color} p-4 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA with gradient card */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-primary to-secondary p-8 lg:p-12 rounded-2xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Experience Values-Driven Service
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our values aren't just principles – they're promises. Experience the difference 
            that values-driven service can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}