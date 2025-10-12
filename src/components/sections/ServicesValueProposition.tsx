// // src/components/sections/ServicesValueProposition.tsx

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { motion } from 'framer-motion'

// const values = [
//   { label: 'Capability', color: 'bg-green-500' },
//   { label: 'Integrity', color: 'bg-cyan-500' },
//   { label: 'Our Customers', color: 'bg-white' },
//   { label: 'Quality', color: 'bg-pink-500' },
//   { label: 'Reliability', color: 'bg-yellow-500' }
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// export function ServicesValueProposition() {
//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Value Proposition Image */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="flex justify-center"
//           >
//             <div className="relative w-full max-w-md aspect-square">
//               {/* Placeholder for value proposition circle image */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <div className="text-xl font-bold mb-2">NewGen&apos;s Strata Services</div>
//                   <div className="grid grid-cols-2 gap-4 p-8">
//                     {values.map((value) => (
//                       <div key={value.label} className={`${value.color} rounded-full p-4 flex items-center justify-center text-xs font-medium ${value.color === 'bg-white' ? 'text-gray-800' : 'text-white'}`}>
//                         {value.label}
//                       </div>
//                     ))}
//                   </div>
//                   <div className="text-xl font-bold mt-2">Delivers Strata Services</div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right - Commitments */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="space-y-6"
//           >
//             <Badge className="bg-primary/10 text-primary border-primary/20">
//               Our Commitments
//             </Badge>

//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
//               Three Fundamental{" "}
//               <span className="text-gradient-wimbledon">Commitments</span>
//             </h2>

//             <p className="text-lg text-gray-600 leading-relaxed">
//               We have three fundamental commitments we make to our clients, our professional 
//               and trade service providers, and our own staff:
//             </p>

//             <div className="space-y-4">
//               {['Capability', 'Reliability', 'Integrity'].map((commitment) => (
//                 <Card key={commitment} className="border-l-4 border-primary">
//                   <CardContent className="p-4">
//                     <h3 className="text-xl font-semibold text-brand-dark">{commitment}</h3>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <p className="text-gray-600 italic">
//               and we are ready and willing to be held to these and challenged on them at any time.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// src/components/sections/ServicesValueProposition.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Award, Target, Heart } from 'lucide-react'

const commitments = [
  {
    icon: Target,
    title: 'Capability',
    description: 'Expert knowledge and proven systems to deliver exceptional results for your owners corporation.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Award,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on, with responsive communication and timely action.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Transparent processes, honest advice, and unwavering commitment to your best interests.',
    color: 'from-purple-500 to-pink-500'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

export function ServicesValueProposition() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-dark via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 px-6 py-2 mb-6">
                Our Commitments
              </Badge>
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              Three Fundamental
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-2">
                Commitments
              </span>
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-300 leading-relaxed"
            >
              We have three fundamental commitments we make to our clients, our professional 
              and trade service providers, and our own staff. These principles guide everything we do.
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-gray-400 italic text-sm border-l-4 border-accent pl-4"
            >
              We are ready and willing to be held to these commitments and challenged on them at any time.
            </motion.p>
          </motion.div>

          {/* Right - Commitment Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {commitments.map((commitment) => {
              const IconComponent = commitment.icon
              return (
                <motion.div
                  key={commitment.title}
                  variants={fadeInUp}
                >
                  <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`relative flex-shrink-0`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${commitment.color} rounded-xl blur-md opacity-50`} />
                          <div className={`relative bg-gradient-to-br ${commitment.color} rounded-xl p-3`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-heading font-bold mb-2 text-white group-hover:text-accent transition-colors">
                            {commitment.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {commitment.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}