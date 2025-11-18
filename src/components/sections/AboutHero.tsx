// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } }
// }

// export function AboutHero() {
//   return (
//     <section className="relative h-[70vh] flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <Image
//           src="/images/about/about-banner.jpg"
//           alt="NewGen Team"
//           fill
//           className="object-cover"
//           priority
//           sizes="100vw"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-brand-dark to-black/10" />
//       </div>

//       {/* Gradient Overlay for text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

//       {/* Subtle animated elements */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

//       {/* Content */}
//       <div className="container-custom relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="max-w-3xl"
//         >
//           {/* <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
//             About NewGen Strata Services
//           </Badge> */}

//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none heading-wimbledon">
//             Strata Management Built on
//             <span className="block text-primary mt-2">Trust & Results</span>
//           </motion.h1>

//           <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
//             Founded by two experienced business leaders who saw an opportunity to
//             revolutionize property management with exceptional service, modern technology,
//             and genuine partnership.
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Bottom fade effect */}
//       {/* <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}
//     </section>
//   )
// }

"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

export function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/about/about-banner.jpg"
          alt="NewGen Strata Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-primary/60 to-black/70" />
      </div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container-custom relative z-10">
         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-3xl"
        >
        {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-3xl"
        > */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight heading-wimbledon"
          >
            About{" "}
            <span className="text-brand-accent">NewGen Strata Services</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            A new generation organisation designed to provide exceptional support, 
            service and respect to members of Owners Corporations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}