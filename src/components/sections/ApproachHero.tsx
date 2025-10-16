// // // src/components/sections/ApproachHero.tsx
// // "use client"

// // import React from 'react'
// // import { motion } from 'framer-motion'

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
// // }

// // const staggerContainer = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.15 } }
// // }


// // export function ApproachHero() {
// //   return (
// //     <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
// //       {/* Subtle grid pattern */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
// //       {/* Gradient orbs */}
// //       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
// //       <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

// //       <div className="container-custom relative z-10">
// //         <motion.div
// //            initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.3 }}
// //           variants={staggerContainer}
// //           className="text-center max-w-4xl mx-auto"
// //         >
// //           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
// //             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-accent">Approach</span>
// //           </h1>
// //           <p className="text-xl text-slate-300 leading-relaxed">
// //             A fresh perspective on strata management, combining personal service with modern efficiency
// //           </p>
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }


// // src/components/sections/ApproachHero.tsx
// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { Badge } from '@/components/ui/badge'
// import { motion } from 'framer-motion'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } }
// }

// export function ApproachHero() {
//   return (
//     <section className="relative h-[70vh] flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <Image
//           src="/images/approach/approach-hero.jpg"
//           alt="Modern Strata Management Approach"
//           fill
//           className="object-cover"
//           priority
//           sizes="100vw"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-brand-dark/90" />
//       </div>

//       {/* Gradient Overlay for text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

//       {/* Subtle animated elements */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

//       {/* Content */}
//       <div className="container-custom relative z-10">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="max-w-4xl"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
//               Our Approach to Excellence
//             </Badge>
//           </motion.div>

//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none heading-wimbledon"
//           >
//             Redefining Strata Management
//             <span className="block text-brand-accent mt-2">Through Innovation</span>
//           </motion.h1>

//           <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
//             We&apos;ve reimagined strata management from the ground up, combining cutting-edge 
//             technology with genuine personal service to deliver exceptional results for every property.
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



// src/components/sections/ApproachHero.tsx
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

export function ApproachHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/approach/approach-hero.jpg"
          alt="Modern Strata Management Approach"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-brand-dark/90" />
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Subtle animated elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
              Our Approach to Excellence
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none heading-wimbledon"
          >
            Strata Management Done
            <span className="block text-brand-accent mt-2">Differently. Done Right.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            After decades in business and hearing countless frustrations with traditional strata managers, 
            we built something better: a service that combines personal attention with modern efficiency, 
            transparent communication with proven results, and genuine partnership with professional excellence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}