// // src/components/sections/About.tsx

// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { Target, Heart, Award, Users, Handshake, ArrowRight, CheckCircle } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const principles = [
//   {
//     icon: Target,
//     title: 'Honesty & Integrity',
//     description: 'We operate with complete transparency and ethical standards in all our dealings.',
//   },
//   {
//     icon: Award,
//     title: 'Excellence',
//     description: 'We strive to achieve the highest standard of excellence in everything we do.',
//   },
//   {
//     icon: Heart,
//     title: 'Customer Delight',
//     description: 'Our mission is to not just satisfy, but to truly delight our customers.',
//   },
//   {
//     icon: Handshake,
//     title: 'Mutual Respect',
//     description: 'We establish environments of respect, transparency and cooperation.',
//   },
//   {
//     icon: Users,
//     title: 'Professional Network',
//     description: 'We provide access to reliable, trustworthy and professionally competent service providers.',
//   },
// ]

// const differentiators = [
//   'Exceptional and consistent service delivery',
//   'Single point of contact for each owners corporation',
//   'Collaborative decision-making approach',
//   'Curated network of preferred service providers',
//   'Latest technology and modern techniques',
//   'Founding principles embedded in our culture',
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function AboutDetails() {
//   return (
// <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="container-custom">
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
//               About NewGen Strata Services
//             </Badge>
//           </motion.div>

//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
//           >
//             A New Generation of <span className="text-gradient-wimbledon"> Strata Management</span>
//           </motion.h2>

//           <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
//             Born from hearing countless complaints about traditional strata management, we saw a great opportunity to revolutionize the industry with exceptional service and modern approaches.
//           </motion.p>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
//           {/* Left Content */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={staggerContainer}
//             className="space-y-8"
//           >
//             <motion.div variants={fadeInUp}>
//               <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">Why NewGen Strata Services?</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Over time we have heard so many complaints from members of Owners Corporations about the level of service they receive from their management organisations. We decided there was a great business opportunity to enter the Strata Services business with a fresh perspective.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 As the name NewGen implies, we are a "new generation" organisation designed to provide a new level of support service and respect to members of Owners Corporations using the latest technology and techniques.
//               </p>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <h4 className="text-xl font-semibold text-brand-dark mb-4">What Makes Us Different?</h4>
//               <div className="space-y-3">
//                 {differentiators.map((item, index) => (
//                   <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-3">
//                     <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-600">{item}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <Button asChild size="lg" className="btn-wimbledon">
//                 <Link href="/approach">
//                   Learn More About Our Approach <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Image */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeInUp}
//             className="relative"
//           >
//             <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//               <Image src="/images/modern-apartment-building.jpg" alt="Modern apartment building representing our strata management services" fill className="object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//             </div>

//             {/* Floating Card */}
//             <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-primary/10 rounded-full p-3">
//                   <Award className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-brand-dark">70+ Years</div>
//                   <div className="text-sm text-gray-600">Combined Experience</div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Founding Principles */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//         >
//           <motion.div variants={fadeInUp} className="text-center mb-12">
//             <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">Our Founding Principles</h3>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               These principles guide everything we do and form the foundation of our commitment to exceptional service delivery.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {principles.map((principle) => {
//               const IconComponent = principle.icon
//               return (
//                 <motion.div key={principle.title} variants={fadeInUp}>
//                   <Card className="card-wimbledon h-full hover-lift">
//                     <CardContent className="p-6">
//                       <div className="flex items-start space-x-4">
//                         <div className="flex-shrink-0 bg-primary/10 rounded-full p-3">
//                           <IconComponent className="h-6 w-6 text-primary" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-brand-dark">{principle.title}</h4>
//                           <p className="text-sm text-gray-600 mt-1">{principle.description}</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )
//             })}
//           </div>

//           {/* Bottom CTA */}
//           <motion.div variants={fadeInUp} className="mt-12 text-center">
//             <Button asChild size="lg" className="btn-wimbledon">
//               <Link href="/contact">Get in Touch</Link>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default AboutDetails


// src/components/sections/AboutDetails.tsx

"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const differentiators = [
  'Single point of contact for personalized service',
  'Collaborative decision-making approach',
  'Curated network of trusted professionals',
  'Latest technology and digital solutions',
  '24/7 emergency support',
  'Transparent reporting and communication'
]

// const differentiators = [
//   'Our major differentiator is the service we provide to our clients and the consistency of it',
//   'All management staff and service providers have been indoctrinated in our founding principle of "Delighting our customer"',
//   'We have a register of trade and professional service providers - either owned by us, we have a financial interest in, or we have evaluated and appointed as a "preferred provider"',
//   'We do not mandate use of these providers but understand they are critical to our business success',
//   'We have assigned a single point of contact with our organization for each Owners Corporation'
// ]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function AboutDetails() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-brand-dark opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                <Image src="/images/modern-apartment-building.jpg" alt="Modern apartment building representing our strata management services" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Our Story
            </Badge>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              A Fresh Approach to{" "}
              <span className="text-gradient-wimbledon">Strata Management</span>
            </h2>

            {/* <p className="text-lg text-gray-600 leading-relaxed">
              After hearing countless complaints about traditional strata management, 
              Kevin Fuller and Sam Disanayaka saw an opportunity to do things differently. 
              With 70+ years of combined business experience, they founded NewGen to provide 
              exceptional service using modern technology and proven business principles.
            </p> */}

            <p className="text-gray-600 leading-relaxed">
  The two founders, Kevin Fuller and Sam Disanayaka, have more than 70 years 
  of business experience between them. Both have been involved in a variety of 
  businesses ranging from small startups to large corporations, bringing invaluable 
  hands-on experience and many years in business leadership roles. They have worked 
  together on various successful projects for several different corporations.
</p>

            <div className="space-y-3">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="btn-wimbledon">
                <Link href="/approach">
                  Our Approach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-wimbledon-outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}