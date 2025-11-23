

// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { CheckCircle, ArrowRight, Award, Users, Target } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const differentiators = [
//   'Our major differentiator is the level of service we provide and the consistency of it',
//   'All of our management staff, trade and professional service providers have been indoctrinated in our founding principle of "Delighting our customer"',
//   'We have a register of Trade and Professional Service Providers who are critical to our business success',
//   'We do not make decisions for our client Owners Corporations; we work with them to help them make the best possible decisions and then we implement them',
//   'We have assigned a single point of contact within our organization for each and every Owners Corporation'
// ]

// const foundingPrinciples = [
//   'Operate with honesty and integrity at all times',
//   'Achieve a standard of excellence in everything we do',
//   'Strive to "delight our customers"',
//   'Establish an environment of mutual respect, transparency and cooperation',
//   'Provide reliable, trustworthy, professionally competent service providers'
// ]

// const stats = [
//   { icon: Award, value: '70+', label: 'Years Combined Experience' },
//   { icon: Users, value: 'Personal', label: 'Dedicated Service' },
//   { icon: Target, value: '100%', label: 'Client Focus' }
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function WhyChooseUs() {
//  return (
//     <section className="relative py-20 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5" />
//       <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
//               Our Story
//             </Badge>
//           </motion.div>

//           <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6">
//             How We&apos;re <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Different</span>
//           </motion.h2>

//           <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 leading-relaxed">
//             At NewGen, our story is simple — we are different from our competitors and we believe in 
//             clear communication, expert solutions, and genuine transparency.
//           </motion.p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="relative"
//           >
//             <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//               <Image 
//                 src="/images/modern-apartment-building.jpg" 
//                 alt="Modern apartment building representing our strata management services" 
//                 fill 
//                 className="object-cover" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
//             </div>

//             {stats.map((stat, idx) => {
//               const IconComponent = stat.icon
//               return (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.3 + idx * 0.1 }}
//                   className={`absolute bg-white rounded-xl shadow-xl p-4 ${
//                     idx === 0 ? '-bottom-6 -left-6' : 
//                     idx === 1 ? 'top-8 -right-6' : 'bottom-1/4 -left-6'
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="bg-primary/10 rounded-full p-3">
//                       <IconComponent className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-brand-dark">{stat.value}</div>
//                       <div className="text-xs text-gray-600">{stat.label}</div>
//                     </div>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="space-y-6"
//           >
//             <motion.div variants={fadeInUp}>
//               <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
//                 Our Story
//               </h3>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Our clients trust us because we combine expertise and experience with a commitment to 
//                 deliver honesty and integrity. We bring deep knowledge of the Owners Corporation Act, 
//                 managing every aspect of Owners Corporations — from financials and budgeting to compliance 
//                 and maintenance.
//               </p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Whether you own a large complex or a small property, we tailor our services to meet your 
//                 unique needs. Communication is at the heart of everything we do. We take pride in presenting 
//                 information clearly and openly, ensuring our clients are always informed and confident.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 We understand that in this industry, responsiveness and expertise can make all the difference. 
//                 As building issues become more complex, you can rely on NewGen for the clarity, support, 
//                 and professional solutions you deserve.
//               </p>
//             </motion.div>

//             <motion.div variants={fadeInUp} className="space-y-3">
//               {differentiators.map((item, index) => (
//                 <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
//                   <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
//                   <span className="text-gray-700 font-medium text-sm">{item}</span>
//                 </div>
//               ))}
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white shadow-xl mt-6">
//                 <h4 className="text-lg font-bold mb-4">Our Founding Principles</h4>
//                 <ul className="space-y-3">
//                   {foundingPrinciples.map((principle, index) => (
//                     <li key={index} className="flex items-start space-x-2 text-sm">
//                       <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
//                       <span>{principle}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>

//             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold">
//                 <Link href="/about">
//                   Learn More <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


// New alternate layout for WhyChooseUs section (stacked sections, better balance)
"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Award, Users, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const differentiators = [
  'Our major differentiator is the level of service we provide and the consistency of it',
  'All of our management staff, trade and professional service providers have been indoctrinated in our founding principle of "Delighting our customer"',
  'We have a register of Trade and Professional Service Providers who are critical to our business success',
  'We do not make decisions for our client Owners Corporations; we work with them to help them make the best possible decisions and then we implement them',
  'We have assigned a single point of contact within our organization for each and every Owners Corporation'
]

const foundingPrinciples = [
  'Operate with honesty and integrity at all times',
  'Achieve a standard of excellence in everything we do',
  'Strive to "delight our customers"',
  'Establish an environment of mutual respect, transparency and cooperation',
  'Provide reliable, trustworthy, professionally competent service providers'
]

const stats = [
  { icon: Award, value: '70+', label: 'Years Combined Experience' },
  { icon: Users, value: 'Personal', label: 'Dedicated Service' },
  { icon: Target, value: '100%', label: 'Client Focus' }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">Our Story</Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-tight"
          >
            How We&apos;re{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Different
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 leading-relaxed">
            At NewGen, our story is simple — clear communication, expert solutions, and true transparency.
          </motion.p>
        </motion.div>

        {/* NEW LAYOUT — 3 SECTIONS STACKED */}

        {/* Section 1 — Image + Stats full-width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative max-w-5xl mx-auto mb-24"
        >
          <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/modern-apartment-building.jpg"
              alt="Modern apartment building"
              fill
              className="object-cover"
            />
          </div>

          {/* Stats Row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4"
                >
                  <div className="bg-primary/10 rounded-full p-4">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Story Section - Premium Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="max-w-5xl mx-auto mb-32"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-12 md:p-16 border border-gray-100 overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 text-center">
                Our Story
              </h3>

              <div className="space-y-6 text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our clients trust us because we combine deep industry expertise with a commitment to honesty
                  and integrity. We handle everything from financials to compliance with complete transparency.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  No matter the size of your property, we tailor our approach and keep communication clear and
                  proactive.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  As building needs grow more complex, NewGen provides clarity, guidance, and reliable
                  professional support.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3 — Differentiators + Principles side-by-side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24"
        >
          {/* Differentiators */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-2xl font-bold text-brand-dark mb-4 text-center md:text-left">
              What Makes Us Different
            </h4>
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <CheckCircle className="h-5 w-5 relative top-2 text-primary flex-shrink-0" />
                <span className="text-gray-700 text-md font-medium">{item}</span>
              </div>
            ))}
          </motion.div>


          {/* Principles */}
          <motion.div variants={fadeInUp}>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-xl h-full">
              <h4 className="text-2xl font-bold mb-6 text-center md:text-left">Our Founding Principles</h4>
              <ul className="space-y-4">
                {foundingPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start space-x-3 text-md">
                    <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0 relative top-1" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            // className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-10 py-6 text-lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
>
            <Link href="/about" className="flex items-center justify-center">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}