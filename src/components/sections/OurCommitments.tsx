// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Award, Clock, Shield } from 'lucide-react'
// import { motion } from 'framer-motion'

// const commitments = [
//   {
//     icon: Award,
//     title: 'Capability',
//     description: 'Deep knowledge of the Owners Corporation Act and expertise in managing every aspect of Owners Corporations — from financials and budgeting to compliance and maintenance.',
//     color: 'text-primary'
//   },
//   {
//     icon: Clock,
//     title: 'Reliability',
//     description: 'Consistent, dependable service you can count on every time. In this industry, responsiveness and expertise make all the difference.',
//     color: 'text-secondary'
//   },
//   {
//     icon: Shield,
//     title: 'Integrity',
//     description: 'We operate with honesty and integrity at all times, with transparency in everything we do.',
//     color: 'text-brand-accent'
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

// export function OurCommitments() {
//   return (
//     // <section className="relative py-20 overflow-hidden">
//     //   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
//     //   <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//     //   <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      
//     //   <div className="container mx-auto px-6 relative z-10">
//     //     <motion.div
//     //       initial="hidden"
//     //       whileInView="visible"
//     //       viewport={{ once: true, amount: 0.3 }}
//     //       variants={staggerContainer}
//     //       className="text-center max-w-3xl mx-auto mb-16"
//     //     >
//     //       <motion.div variants={fadeInUp}>
//     //         <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
//     //           Our Promise
//     //         </Badge>
//     //       </motion.div>

//     //       <motion.h2
//     //         variants={fadeInUp}
//     //         className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6"
//     //       >
//     //         Three Fundamental <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Commitments</span>
//     //       </motion.h2>

//     //       <motion.p
//     //         variants={fadeInUp}
//     //         className="text-lg md:text-xl text-gray-600 leading-relaxed"
//     //       >
//     //         We make these commitments to our clients, our service providers, and our staff — 
//     //         and we&apos;re ready to be held accountable to them at any time.
//     //       </motion.p>
//     //     </motion.div>

//     //     <motion.div
//     //       initial="hidden"
//     //       whileInView="visible"
//     //       viewport={{ once: true, amount: 0.1 }}
//     //       variants={staggerContainer}
//     //       className="grid md:grid-cols-3 gap-8 mb-12"
//     //     >
//     //       {commitments.map((item) => {
//     //         const IconComponent = item.icon
//     //         return (
//     //           <motion.div key={item.title} variants={fadeInUp}>
//     //             <Card className="text-center p-8 h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105">
//     //               <CardContent className="p-0">
//     //                 <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
//     //                   <IconComponent className={`h-10 w-10 ${item.color}`} />
//     //                 </div>
//     //                 <h3 className="text-2xl font-bold text-brand-dark mb-3">
//     //                   {item.title}
//     //                 </h3>
//     //                 <p className="text-gray-600 leading-relaxed">
//     //                   {item.description}
//     //                 </p>
//     //               </CardContent>
//     //             </Card>
//     //           </motion.div>
//     //         )
//     //       })}
//     //     </motion.div>

//     //     <motion.div
//     //       initial="hidden"
//     //       whileInView="visible"
//     //       viewport={{ once: true, amount: 0.3 }}
//     //       variants={fadeInUp}
//     //       className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-primary/10"
//     //     >
//     //       <blockquote className="text-2xl font-semibold text-brand-dark italic mb-2">
//     //         &quot;The quality is long remembered after the price is forgotten&quot;
//     //       </blockquote>
//     //       <p className="text-gray-600 font-medium">— NewGen Strata Services</p>
//     //     </motion.div>
//     //   </div>
//     // </section>

//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
//       <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-3 sm:mb-4 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2">
//               Our Promise
//             </Badge>
//           </motion.div>

//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6 px-2"
//           >
//             Three Fundamental <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Commitments</span>
//           </motion.h2>

//           <motion.p
//             variants={fadeInUp}
//             className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2"
//           >
//             We make these commitments to our clients, our service providers, and our staff — 
//             and we&apos;re ready to be held accountable to them at any time.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={staggerContainer}
//           className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12"
//         >
//           {commitments.map((item) => {
//             const IconComponent = item.icon
//             return (
//               <motion.div key={item.title} variants={fadeInUp}>
//                 <Card className="text-center p-6 sm:p-7 md:p-8 h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105">
//                   <CardContent className="p-0">
//                     <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full p-4 sm:p-5 md:p-6 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
//                       <IconComponent className={`h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 ${item.color}`} />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2 sm:mb-3">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
//                       {item.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-7 md:p-8 max-w-4xl mx-auto border border-primary/10"
//         >
//           <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-dark italic mb-2 px-2">
//             &quot;The quality is long remembered after the price is forgotten&quot;
//           </blockquote>
//           <p className="text-sm sm:text-base text-gray-600 font-medium">— NewGen Strata Services</p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


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
    color: 'text-primary',
    gradient: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on every time. In this industry, responsiveness and expertise make all the difference.',
    color: 'text-secondary',
    gradient: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with honesty and integrity at all times, with transparency in everything we do.',
    color: 'text-brand-accent',
    gradient: 'from-emerald-500/20 to-emerald-600/20'
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

export default function OurCommitments() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced background with more visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-emerald-50" />
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.4s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div variants={fadeInUp}>
            {/* Larger, more prominent badge */}
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border-blue-300/50 mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
              Our Promise
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6 px-2"
          >
            Three Fundamental <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Commitments</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 font-medium"
          >
            We make these commitments to our clients, our service providers, and our staff — 
            and we&apos;re ready to be held accountable <strong>for them</strong> at any time.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12"
        >
          {commitments.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div 
                key={item.title} 
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center p-6 sm:p-7 md:p-8 h-full border-2 border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm relative overflow-hidden group">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="p-0 relative z-10">
                    <motion.div 
                      className={`bg-gradient-to-br ${item.gradient} rounded-full p-4 sm:p-5 md:p-6 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className={`h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 ${item.color}`} />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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
          className="text-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-7 md:p-8 max-w-4xl mx-auto border-2 border-blue-200/50 relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-tl-full" />
          
          <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-dark italic mb-2 px-2 relative z-10">
            &quot;The quality is long remembered after the price is forgotten&quot;
          </blockquote>
          <p className="text-sm sm:text-base text-gray-700 font-medium relative z-10">— NewGen Strata Services</p>
        </motion.div>
      </div>
    </section>
  )
}