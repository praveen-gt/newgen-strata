// // src/components/sections/OurPhilosophy.tsx
// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Heart, Users, TrendingUp, Shield } from 'lucide-react'
// import { motion } from 'framer-motion'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// const philosophyPillars = [
//   {
//     icon: Heart,
//     title: 'Client-Centric Service',
//     description: 'Every decision we make starts with one question: "What\'s best for our clients?" We\'re not just managing properties; we\'re partnering with communities to create better living environments.'
//   },
//   {
//     icon: Users,
//     title: 'Transparent Communication',
//     description: 'No jargon, no surprises. We believe in clear, honest communication that keeps you informed and empowered to make the best decisions for your property.'
//   },
//   {
//     icon: TrendingUp,
//     title: 'Proactive Management',
//     description: 'We don\'t wait for problems to arise. Our proactive approach identifies and addresses potential issues before they become costly headaches.'
//   },
//   {
//     icon: Shield,
//     title: 'Accountability & Trust',
//     description: 'We hold ourselves to the highest standards and take full responsibility for our commitments. Your trust is something we earn every day.'
//   }
// ]

// export function OurPhilosophy() {
//   return (
//     <section className="py-20 lg:py-28 bg-white">
//       <div className="container-custom max-w-6xl">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//         >
//           <motion.div variants={fadeInUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               Our Philosophy
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Built on core principles that guide everything we do
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {philosophyPillars.map((pillar, index) => {
//               const Icon = pillar.icon
//               return (
//                 <motion.div key={index} variants={fadeInUp}>
//                   <Card className="border border-slate-200 hover:border-slate-300 transition-all h-full group hover:shadow-lg">
//                     <CardContent className="p-8">
//                       <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
//                         <Icon className="h-7 w-7 text-slate-700 group-hover:text-primary transition-colors" />
//                       </div>
//                       <h3 className="text-xl font-semibold text-slate-900 mb-3">
//                         {pillar.title}
//                       </h3>
//                       <p className="text-slate-600 leading-relaxed">
//                         {pillar.description}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// src/components/sections/OurPhilosophy.tsx
"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Shield, TrendingUp, Users, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const principles = [
  {
    icon: Heart,
    title: 'Client-Centric Always',
    description: 'Every decision starts with one question: "What\'s best for our clients?" We put your needs first, always.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Accountability & Trust',
    description: 'We take full responsibility for our commitments and hold ourselves to the highest standards.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Proactive Excellence',
    description: 'We don\'t wait for problems. Our forward-thinking approach prevents issues before they arise.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Users,
    title: 'Transparent Partnership',
    description: 'Clear communication, honest advice, and collaborative decision-making in everything we do.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Star,
    title: 'Consistent Quality',
    description: 'Excellence isn\'t occasional—it\'s our standard. Same high quality, every time, every property.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Innovation Driven',
    description: 'We leverage technology and fresh thinking to deliver smarter, faster, better solutions.',
    color: 'from-violet-500 to-purple-500'
  }
]

export function OurPhilosophy() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Our Philosophy
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark">
              Built on Principles That{" "}
              <span className="text-gradient-wimbledon">Actually Matter</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We didn&apos;t just create another strata management company. We built a service 
              philosophy centered on what property owners truly need: reliability, transparency, 
              and results.
            </p>

            <p className="text-gray-600 leading-relaxed">
              After decades in business and hearing countless frustrations with traditional 
              strata managers, we identified the core principles that make the difference between 
              mediocre service and exceptional partnership. These aren&apos;t just words on a 
              page—they guide every decision we make.
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-primary">
              <p className="text-gray-700 italic">
                &quot;Our founding principle is simple: Delight our customers. Everything else flows from there.&quot;
              </p>
              <p className="text-sm text-gray-600 mt-2">— Kevin Fuller & Sam Disanayaka, Founders</p>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                // src="/images/approach/philosophy-image.jpg" 
                src="/images/case-study/case-study-probm-solving.jpg" 
                alt="Our philosophy in action" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Principles Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}