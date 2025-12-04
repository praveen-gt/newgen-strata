// // src/components/sections/HowWereDifferent.tsx

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { CheckCircle, Star, Users, ArrowRight } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const differentiators = [
//   {
//     title: 'Consistent Service Excellence',
//     description: 'Our major differentiator is the service we provide to our clients and the consistency of it.',
//     icon: Star
//   },
//   {
//     title: 'Customer-Centric Culture',
//     description: 'All of our management staff, trade and professional service providers have been indoctrinated in our founding principle of "Delighting our customer".',
//     icon: CheckCircle
//   },
//   {
//     title: 'Curated Service Provider Network',
//     description: 'We have a register of trade and professional Service providers. In this register we list those that are either, owned by us, or we have a financial interest in, or we have been evaluated and appointed as a "preferred provider" for our organization.',
//     icon: Users
//   },
//   {
//     title: 'Provider Choice Freedom',
//     description: 'We do not mandate use of these providers but, in a collaborative decision making environment, we will make them aware to help them make the best possible decisions and then we implement them.',
//     icon: CheckCircle
//   },
//   {
//     title: 'Single Point of Contact',
//     description: 'We have assigned a single point of contact within our organization for each and every Owners Corporation.',
//     icon: Users
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

// export function HowWereDifferent() {
//   return (
//     <section className="section-padding bg-gradient-to-b from-gray-50 to-primary/5">
//       <div className="container-custom">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
//             What Sets Us Apart
//           </Badge>
//           <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
//             How is NewGen Strata Services{" "}
//             <span className="text-gradient-wimbledon">Different?</span>
//           </h2>
//           <p className="text-lg text-gray-600">
//             Our unique approach combines personal service with professional excellence, 
//             setting new standards in owners corporation management.
//           </p>
//         </motion.div>

//         {/* Differentiators Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 gap-6 mb-12"
//         >
//           {differentiators.map((item, index) => {
//             const IconComponent = item.icon
//             return (
//               <motion.div key={index} variants={fadeInUp}>
//                 <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                   <CardContent className="p-6">
//                     <div className="flex items-start gap-4">
//                       <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-3 flex-shrink-0">
//                         <IconComponent className="h-6 w-6 text-primary" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-brand-dark mb-2">
//                           {item.title}
//                         </h3>
//                         <p className="text-gray-600 leading-relaxed">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 lg:p-12 text-center"
//         >
//           <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
//             Experience the NewGen Difference
//           </h3>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-8">
//             We understand that our &quot;providers&quot; are critical to our business success, 
//             and we&apos;re committed to collaborative decision-making that puts your needs first.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="btn-wimbledon">
//               <Link href="/approach">
//                 Learn About Our Approach
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button asChild size="lg" variant="outline" className="btn-wimbledon-outline">
//               <Link href="/contact">Get in Touch</Link>
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { CheckCircle } from 'lucide-react'
// import { motion } from 'framer-motion'

// const differentiators = [
//   'Our major differentiator is the level of service we provide to our clients and the consistency of it',
//   'All of our management staff, trade and professional service providers have been indoctrinated in our founding principle of "Delighting our customer"',
//   'We have a register of Trade and Professionals Service Providers, all of whom are either, owned by us, or we have a financial interest in, or who have been evaluated and appointed as a "preferred provider" for our organization. We understand and accept that these "providers" are critical to our business success',
//   'We do not make decisions for our client Owners Corporations; we work with them to help them make the best possible decisions and then we implement them',
//   'We have assigned a single point of contact within our organization for each and every Owners Corporation'
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// export function HowWereDifferent() {
//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
//             Our Difference
//           </Badge>
//           <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
//             How is NewGen Strata Services{" "}
//             <span className="text-gradient-wimbledon">Different?</span>
//           </h2>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.1 } }
//           }}
//           className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
//         >
//           {differentiators.map((item, index) => (
//             <motion.div key={index} variants={fadeInUp}>
//               <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
//                 <CardContent className="p-6">
//                   <div className="flex items-start space-x-3">
//                     <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
//                     <p className="text-gray-700 leading-relaxed">{item}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const differentiators = [
  'Our major differentiator is the level of service we provide to our clients and the consistency of it',
  'All of our management staff, trade and professional service providers have been indoctrinated in our founding principle of "Delighting our customer"',
  'We have a register of Trade and Professionals Service Providers, all of whom are either, owned by us, or we have a financial interest in, or who have been evaluated and appointed as a "preferred provider" for our organization. We understand and accept that these "providers" are critical to our business success',
  'We do not make decisions for our client Owners Corporations; we work with them to help them make the best possible decisions and then we implement them',
  'We have assigned a single point of contact within our organization for each and every Owners Corporation'
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function HowWereDifferent() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Soft pattern background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-primary/5">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20px 20px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-3 sm:mb-4 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2">
            Our Difference
          </Badge>

         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6 px-2">
            How is NewGen Strata Services{" "}
            <span className="text-gradient-wimbledon">Different?</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {differentiators.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 bg-white/80 backdrop-blur-lg shadow-lg 
                hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">

                {/* Gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />

                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>

                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
