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

// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

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
//     <section className="relative h-[70vh] flex items-center overflow-hidden">
//       <div className="absolute inset-0">
//         <Image
//           src="/images/about/about-banner.jpg"
//           alt="NewGen Strata Services"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-primary/60 to-black/70" />
//       </div>

//       <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

//       <div className="container-custom relative z-10">
//          <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="max-w-3xl"
//         >
//         {/* <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.15 } }
//           }}
//           className="max-w-3xl"
//         > */}
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight heading-wimbledon"
//           >
//             About{" "}
//             <span className="text-brand-accent">NewGen Strata Services</span>
//           </motion.h1>

//           <motion.p 
//             variants={fadeInUp} 
//             className="text-lg md:text-xl text-gray-200 leading-relaxed"
//           >
//             A new generation organisation designed to provide exceptional support, 
//             service and respect to members of Owners Corporations.
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Award, Users, Target, TrendingUp } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const stats = [
  { icon: Award, value: '70+', label: 'Years Combined Experience', color: 'from-primary to-primary/80' },
  { icon: Users, value: '100%', label: 'Client Satisfaction', color: 'from-secondary to-secondary/80' },
  { icon: Target, value: '3', label: 'Core Commitments', color: 'from-brand-accent to-brand-accent/80' },
  { icon: TrendingUp, value: 'Growing', label: 'Portfolio', color: 'from-primary to-secondary' }
]

export function AboutHero() {
  return (
    // <section className="relative flex items-center overflow-hidden">
    //   {/* Background Image with Parallax Effect */}
    //   <div className="absolute inset-0">
    //     <Image
    //       src="/images/about/about-banner.jpg"
    //       alt="NewGen Strata Services - Modern strata management excellence"
    //       fill
    //       className="object-cover"
    //       priority
    //     />
    //     {/* Lighter Gradient Overlay - Better Contrast */}
    //     <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/75 via-black/50 to-brand-dark/70" />
    //   </div>

    //   {/* Animated Gradient Orbs - Subtler */}
    //   <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
    //   <div className="absolute bottom-32 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />

    //   <div className="container-custom relative z-10 pt-20 pb-16">
    //     <motion.div
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.3 }}
    //       variants={staggerContainer}
    //       className="max-w-4xl"
    //     >


    //       {/* Main Heading */}
    //       <motion.h1
    //         variants={fadeInUp}
    //         className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
    //       >
    //         About NewGen Strata Services
           
    //         {/* <span className="text-brand-accent drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
    //           NewGen Strata Services
    //         </span> */}
    //       </motion.h1>

    //       {/* Subtitle */}
    //       <motion.p 
    //         variants={fadeInUp} 
    //         className="text-xl md:text-2xl text-white leading-relaxed mb-8 max-w-3xl drop-shadow-md"
    //       >
    //         A new generation organisation designed to provide exceptional support, 
    //         service and respect to members of Owners Corporations.
    //       </motion.p>

    //       {/* Key Values */}
    //       <motion.div 
    //         variants={fadeInUp}
    //         className="flex flex-wrap gap-4 mb-12"
    //       >
    //         {['Honesty', 'Integrity', 'Excellence', 'Transparency'].map((value, index) => (
    //           <div 
    //             key={value}
    //             className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-white/50 rounded-full px-5 py-2.5 text-brand-dark hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
    //           >
    //             <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
    //             <span className="text-sm font-semibold">{value}</span>
    //           </div>
    //         ))}
    //       </motion.div>


    //     </motion.div>
    //   </div>


    // </section>

      <section className="relative flex items-center overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <Image
              src="/images/about/about-banner.jpg"
              alt="NewGen Strata Services - Modern strata management excellence"
              fill
              className="object-cover"
              priority
            />
            {/* Lighter Gradient Overlay - Better Contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/75 via-black/50 to-brand-dark/70" />
          </div>
    
          {/* Animated Gradient Orbs - Subtler */}
          <div className="absolute top-10 left-5 w-48 h-48 sm:top-14 sm:left-7 sm:w-64 sm:h-64 md:top-20 md:left-10 md:w-96 md:h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-16 right-5 w-48 h-48 sm:bottom-20 sm:right-7 sm:w-64 sm:h-64 md:bottom-32 md:right-20 md:w-96 md:h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
    
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="max-w-4xl"
            >
              {/* Main Heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight drop-shadow-lg"
              >
                About NewGen Strata Services
              </motion.h1>
    
              {/* Subtitle */}
              <motion.p 
                variants={fadeInUp} 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-3xl drop-shadow-md"
              >
                A new generation organisation designed to provide exceptional support, 
                service and respect to members of Owners Corporations.
              </motion.p>
    
              {/* Key Values */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-2 sm:gap-3 md:gap-4"
              >
                {['Honesty', 'Integrity', 'Excellence', 'Transparency'].map((value, index) => (
                  <div 
                    key={value}
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md border border-white/50 rounded-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-2.5 text-brand-dark hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                    <span className="text-xs sm:text-sm font-semibold">{value}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
  )
}

export default AboutHero