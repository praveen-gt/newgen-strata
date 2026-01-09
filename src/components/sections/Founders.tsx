// // src/components/sections/Founders.tsx

// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { ArrowRight } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const founders = [
//   {
//     name: 'Kevin Fuller',
//     role: 'Co-Founder & Managing Director',
//     experience: '35+ Years',
//     expertise: ['Business Leadership', 'Strategic Planning', 'Operations Management', 'Client Relations'],
//     description: 'Kevin brings decades of business leadership experience from startups to large corporations. His commitment to excellence and hands-on approach drives our operational strategy.',
//     image: '/images/about/kevin.jpg',
//   },
//   {
//     name: 'Sam Disanayaka',
//     role: 'Co-Founder & Director of Operations',
//     experience: '35+ Years',
//     expertise: ['Financial Management', 'Process Innovation', 'Technology Integration', 'Quality Assurance'],
//     description: 'Sam\'s expertise in financial management and technology ensures our clients receive cutting-edge service through streamlined, efficient processes.',
//     image: '/images/about/sam.jpg',
//   }
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// export function Founders() {
//   return (
//     <section className="section-padding bg-white" id='founders'>
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
//             Our Founders
//           </Badge>
//           <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
//             Experience You Can{" "}
//             <span className="text-gradient-wimbledon">Count On</span>
//           </h2>
//           <p className="text-lg text-gray-600">
//             Kevin Fuller and Sam Disanayaka bring 70+ years of combined business experience 
//             across various industries, from startups to large corporations.
//           </p>
//         </motion.div>

//         {/* Founders Grid */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-16">
//           {founders.map((founder, index) => (
//             <motion.div
//               key={founder.name}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
//                 <CardContent className="p-8">
//                   {/* Header */}
//                   <div className="flex items-start justify-between mb-6">
//                     {/* <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-2xl">
//                       {founder.name.charAt(0)}
//                     </div> */}
//                                         <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">

//                       <Image
//                         src={founder.image}
//                         alt={founder.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <Badge className="bg-primary/10 text-primary">
//                       {founder.experience}
//                     </Badge>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="text-2xl font-bold text-brand-dark mb-1">
//                         {founder.name}
//                       </h3>
//                       <p className="text-primary font-medium">
//                         {founder.role}
//                       </p>
//                     </div>

//                     <p className="text-gray-600 leading-relaxed">
//                       {founder.description}
//                     </p>

//                     <div>
//                       <h4 className="font-semibold text-brand-dark mb-3">Expertise</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {founder.expertise.map((skill, idx) => (
//                           <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
//                             {skill}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Quote */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-primary to-secondary text-white p-8 lg:p-12 rounded-2xl text-center"
//         >
//           <Quote className="h-12 w-12 text-white/40 mx-auto mb-6" />
//           <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed max-w-4xl mx-auto">
//             &quot;We&apos;re committed to bringing a new level of support, respect, and excellence 
//             to owners corporation management using the latest technology and proven business principles.&quot;
//           </blockquote>
//           <div className="font-semibold">
//             Kevin Fuller & Sam Disanayaka
//           </div>
//         </motion.div> */}

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <Button asChild size="lg" className="btn-wimbledon">
//             <Link href="/contact">
//               Schedule a Consultation
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import React from 'react'
// // import Image from 'next/image'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { ArrowRight } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// export function Founders() {
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
//             The Founders
//           </Badge>
//           <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
//             About the Founders of{" "}
//             <span className="text-gradient-wimbledon">NewGen Strata Services</span>
//           </h2>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <Card className="border-none shadow-xl">
//             <CardContent className="p-8 lg:p-12">
//               <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
//                 <div className="space-y-6">
//                   <h3 className="text-2xl font-bold text-brand-dark">
//                     Kevin Fuller & Sam Disanayaka
//                   </h3>
//                   <div className="space-y-4 text-gray-700 leading-relaxed">
//                     <p>
//                       The two Founders, Kevin Fuller and Sam Disanayaka have more than 70 years 
//                       of business experience between them.
//                     </p>
//                     <p>
//                       Both have been involved in a variety of businesses ranging from small to 
//                       large and have hands-on experience as well as many years in business leadership.
//                     </p>
//                     <p>
//                       They have worked together on a variety of projects for several different 
//                       corporations. At the time of their decision to enter the Owners Corporation 
//                       Management business and the subsequent formation of NewGen Strata Services 
//                       they were both actively involved in existing businesses whose resources can 
//                       now be brought to support NewGen Strata Services.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
//                     <div className="text-center mb-6">
//                       <div className="text-5xl font-bold mb-2">70+</div>
//                       <div className="text-lg">Years Combined Experience</div>
//                     </div>
//                     <div className="space-y-3 text-sm">
//                       <p>✓ Small to large business experience</p>
//                       <p>✓ Hands-on operational expertise</p>
//                       <p>✓ Business leadership roles</p>
//                       <p>✓ Collaborative project delivery</p>
//                       <p>✓ Multiple industry backgrounds</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-center pt-8 border-t border-gray-200">
//                 <Button asChild size="lg" className="btn-wimbledon">
//                   <Link href="/contact">
//                     Get in Touch
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"
// import Link from "next/link"

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// }

// export function Founders() {
//   return (
//     <section className="section-padding bg-gradient-to-b from-white to-secondary/5">
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
//             The Founders
//           </Badge>

//           <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
//             About the Founders of{" "}
//             <span className="text-gradient-wimbledon">NewGen Strata Services</span>
//           </h2>
//         </motion.div>

//         {/* Main content */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <Card className="shadow-2xl bg-white/80 backdrop-blur-md rounded-3xl border border-white/50">
//             <CardContent className="p-10 lg:p-14">

//               <div className="grid lg:grid-cols-2 gap-14 items-start">

//                 {/* Founders Text */}
//                 <div className="space-y-7 border-l-4 border-primary pl-6">
//                   <h3 className="text-2xl font-bold text-brand-dark">
//                     Kevin Fuller & Sam Disanayaka
//                   </h3>

//                   <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
//                     <p>
//                       The two Founders, Kevin Fuller and Sam Disanayaka have more than 70 years 
//                       of business experience between them.
//                     </p>
//                     <p>
//                       Both have been involved in a variety of businesses ranging from small to 
//                       large and have hands-on experience as well as many years in business leadership.
//                     </p>
//                     <p>
//                       They have worked together on a variety of projects for several different 
//                       corporations. At the time of their decision to enter the Owners Corporation 
//                       Management business and the subsequent formation of NewGen Strata Services 
//                       they were both actively involved in existing businesses whose resources can 
//                       now be brought to support NewGen Strata Services.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Stat Card */}
//                 <div className="relative">
//                   <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-white shadow-xl">
//                     <div className="text-center mb-8">
//                       <div className="text-6xl font-extrabold mb-2">70+</div>
//                       <div className="text-lg opacity-90">
//                         Years Combined Experience
//                       </div>
//                     </div>

//                     <div className="space-y-3 text-white/90 text-sm">
//                       <p>✓ Small to large business experience</p>
//                       <p>✓ Hands-on operational expertise</p>
//                       <p>✓ Business leadership roles</p>
//                       <p>✓ Collaborative project delivery</p>
//                       <p>✓ Multiple industry backgrounds</p>
//                     </div>
//                   </div>
//                 </div>

//               </div>

//               {/* CTA */}
//               <div className="text-center pt-10 border-t border-gray-200">
//                 <Button asChild size="lg" className="btn-wimbledon">
//                   <Link href="/contact">
//                     Get in Touch
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//               </div>

//             </CardContent>
//           </Card>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function Founders() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">

      {/* Background animated orbs */}
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-6 left-4 w-44 sm:w-56 md:w-72 h-44 sm:h-56 md:h-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-8 right-4 w-44 sm:w-56 md:w-72 h-44 sm:h-56 md:h-72 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border-blue-300/50 mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            The Founders
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6 px-2">
            About the Founders of{" "}
            <span className="text-gradient-wimbledon">NewGen Strata Services</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-14">

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Text column */}
                <div className="space-y-4 sm:space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark inline-block">
                    Kevin Fuller & Sam Disanayaka
                    <span className="block h-1 w-16 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full" />
                  </h3>

                  <p>
                    The two Founders, Kevin Fuller and Sam Disanayaka have more than 70 years
                    of business experience between them.
                  </p>
                  <p>
                    Both have been involved in a variety of businesses ranging from small to
                    large and have hands-on experience as well as many years in business leadership.
                  </p>
                  <p>
                    They have worked together on a variety of projects for several different
                    corporations. At the time of their decision to enter the Owners Corporation
                    Management business and the subsequent formation of NewGen Strata Services
                    they were both actively involved in existing businesses whose resources can
                    now be brought to support NewGen Strata Services.
                  </p>
                </div>

                {/* Experience bubble */}
                <motion.div whileHover={{ scale: 1.03 }} className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-full">
                  <div
                    className="bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-white shadow-2xl h-full relative overflow-hidden"

                  >
                    {/* <div className="absolute inset-0 bg-white/10 blur-2xl" /> */}
                    {/* <div className="absolute -bottom-6 -right-6 w-28 sm:w-36 md:w-40 h-28 sm:h-36 md:h-40 bg-white/10 rounded-full blur-2xl" /> */}

                    <div className="relative z-10 text-center mb-4 sm:mb-6">
                      <div className="text-5xl sm:text-6xl font-extrabold mb-1 drop-shadow-lg">70+</div>
                      <div className="text-base sm:text-lg tracking-wide opacity-90">Years Combined Experience</div>
                    </div>

                    <div className="relative z-10 space-y-2 text-sm sm:text-base">
                      <p>✓ Small to large business experience</p>
                      <p>✓ Hands-on operational expertise</p>
                      <p>✓ Business leadership roles</p>
                      <p>✓ Collaborative project delivery</p>
                      <p>✓ Multiple industry backgrounds</p>
                    </div>
                  </div>
                </motion.div>

              </div>

              <div className="text-center pt-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white font-bold px-8 py-5 sm:px-10 sm:py-6 text-sm sm:text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
