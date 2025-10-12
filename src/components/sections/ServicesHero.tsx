// src/components/sections/ServicesHero.tsx

"use client"

import React from 'react'
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

export function ServicesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-brand-dark to-black">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
              Our Services
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Strata
            <span className="block text-primary mt-2">Management Solutions</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Personal, high-quality services designed to provide optimal management 
            and support to owners corporations and their members.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" /> */}
    </section>
  )
}


// "use client"

// import React from 'react'
// import { Badge } from '@/components/ui/badge'
// import { motion } from 'framer-motion'
// import { ArrowDown } from 'lucide-react'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } }
// }

// export function ServicesHero() {
//   return (
//     <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-brand-dark to-black">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
//         <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
//       </div>
      
//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 opacity-5" style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//         backgroundSize: '40px 40px'
//       }} />

//       <div className="container-custom relative z-10 py-24">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-5xl mx-auto"
//         >
//           <motion.div variants={fadeInUp} className="mb-8">
//             <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full text-sm font-medium shadow-lg">
//               Comprehensive Solutions
//             </Badge>
//           </motion.div>

//           <motion.h1 
//             variants={fadeInUp} 
//             className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight"
//           >
//             Strata Management
//             <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-3">
//               Perfected
//             </span>
//           </motion.h1>

//           <motion.p 
//             variants={fadeInUp} 
//             className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
//           >
//             Personal, high-quality services designed to provide optimal management 
//             and unwavering support to owners corporations and their members.
//           </motion.p>

//           <motion.div 
//             variants={fadeInUp}
//             className="flex flex-col items-center gap-4"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="text-white/60"
//             >
//               <ArrowDown className="w-6 h-6" />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Bottom gradient overlay */}
//       <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
//     </section>
//   )
// }