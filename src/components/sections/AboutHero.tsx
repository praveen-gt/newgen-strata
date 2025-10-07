// // src/components/sections/AboutHero.tsx

// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { motion } from 'framer-motion'
// import { Award, Users, Building2, ArrowDown } from 'lucide-react'

// const stats = [
//   { icon: Award, value: '70+', label: 'Years Combined Experience' },
//   { icon: Users, value: '500+', label: 'Properties Managed' },
//   { icon: Building2, value: '98%', label: 'Client Satisfaction' }
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } }
// }

// export function AboutHero() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         {/* Placeholder for team/office image */}
//         <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-brand-dark opacity-90" />
//         <div className="absolute inset-0 flex items-center justify-center text-white/10 text-xl">
//           {/* Replace this with: <Image src="/images/about/team-hero.jpg" alt="NewGen Team" fill className="object-cover" /> */}
//           Team / Office Hero Image
//         </div>
//       </div>

//       {/* Dark Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

//       {/* Animated Elements */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

//       {/* Content */}
//       <div className="container-custom relative z-10 py-32">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//           >
//             <motion.div variants={fadeInUp}>
//               <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
//                 About NewGen Strata Services
//               </Badge>
//             </motion.div>

//             <motion.h1 
//               variants={fadeInUp}
//               className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
//             >
//               Meet the Team Behind
//               <span className="block text-primary mt-2">Melbourne's Most Innovative</span>
//               <span className="block mt-2">Strata Management</span>
//             </motion.h1>

//             <motion.p 
//               variants={fadeInUp}
//               className="text-xl text-gray-300 mb-8 leading-relaxed"
//             >
//               Two experienced business leaders with a vision to revolutionize
//               property management through exceptional service and modern technology.
//             </motion.p>

//             {/* Stats */}
//             <motion.div 
//               variants={fadeInUp}
//               className="grid grid-cols-3 gap-6 mb-8"
//             >
//               {stats.map((stat) => {
//                 const IconComponent = stat.icon
//                 return (
//                   <div key={stat.label} className="text-center lg:text-left">
//                     <IconComponent className="h-8 w-8 text-primary mb-2 mx-auto lg:mx-0" />
//                     <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
//                     <div className="text-xs text-gray-400">{stat.label}</div>
//                   </div>
//                 )
//               })}
//             </motion.div>

//             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
//               <Button 
//                 asChild 
//                 size="lg"
//                 className="bg-white text-brand-dark hover:bg-gray-100"
//               >
//                 <a href="#story">Learn Our Story</a>
//               </Button>
//               <Button 
//                 asChild 
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-white text-white hover:bg-white hover:text-brand-dark"
//               >
//                 <a href="#founders">Meet the Founders</a>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Image Grid */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="hidden lg:grid grid-cols-2 gap-4"
//           >
//             {/* Large Image */}
//             <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40" />
//               <div className="absolute inset-0 flex items-center justify-center text-white/20">
//                 {/* Replace: <Image src="/images/about/office-1.jpg" alt="Office" fill className="object-cover" /> */}
//                 Office / Team Photo 1
//               </div>
//             </div>

//             {/* Two Smaller Images */}
//             <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40" />
//               <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
//                 {/* Replace: <Image src="/images/about/team-2.jpg" alt="Team" fill className="object-cover" /> */}
//                 Team Photo 2
//               </div>
//             </div>
//             <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-brand-accent/40" />
//               <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
//                 {/* Replace: <Image src="/images/about/office-2.jpg" alt="Office" fill className="object-cover" /> */}
//                 Office Photo 3
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-white/60 text-xs mb-2 uppercase tracking-wider">
//           Scroll to explore
//         </span>
//         <ArrowDown className="h-6 w-6 text-white/60" />
//       </div>
//     </section>
//   )
// }

// src/components/sections/AboutHero.tsx

"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

export function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/about-banner.jpg"
          alt="NewGen Team"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-brand-dark to-black/10" />
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Subtle animated elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          {/* <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
            About NewGen Strata Services
          </Badge> */}

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none heading-wimbledon">
            Strata Management Built on
            <span className="block text-primary mt-2">Trust & Results</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
            Founded by two experienced business leaders who saw an opportunity to
            revolutionize property management with exceptional service, modern technology,
            and genuine partnership.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      {/* <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}
    </section>
  )
}