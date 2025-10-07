// // src/components/sections/ServiceDetailContent.tsx

// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { Badge } from '@/components/ui/badge'
// import { CheckCircle } from 'lucide-react'
// import { motion } from 'framer-motion'

// interface ServiceDetailContentProps {
//   serviceData: {
//     overview: {
//       title: string
//       content: string
//       features: string[]
//     }
//   }
// }

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// export function ServiceDetailContent({ serviceData }: ServiceDetailContentProps) {
//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Image */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-brand-accent/20" />
//             <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl">
//               {/* Add service-specific image here */}
//               Service Detail Image
//             </div>
//           </motion.div>

//           {/* Right - Content */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="space-y-6 order-1 lg:order-2"
//           >
//             <Badge className="bg-primary/10 text-primary border-primary/20">
//               Service Overview
//             </Badge>

//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
//               {serviceData.overview.title}
//             </h2>

//             <p className="text-lg text-gray-600 leading-relaxed">
//               {serviceData.overview.content}
//             </p>

//             <div className="space-y-3 pt-4">
//               <h3 className="font-semibold text-brand-dark mb-4">Key Features</h3>
//               {serviceData.overview.features.map((feature, index) => (
//                 <div key={index} className="flex items-start space-x-3">
//                   <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-700">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// src/components/sections/ServiceDetailContent.tsx

"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServiceDetailContentProps {
  serviceData: {
    overview: {
      title: string
      content: string
      features: string[]
    }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function ServiceDetailContent({ serviceData }: ServiceDetailContentProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-brand-accent/30" />
            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl">
                <Image src="/images/services/meeting-management-image.jpg" alt="Modern apartment building representing our strata management services" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 order-1 lg:order-2"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Service Overview
            </Badge>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              {serviceData.overview.title}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {serviceData.overview.content}
            </p>

            <div className="space-y-3 pt-4">
              <h3 className="font-semibold text-brand-dark mb-4">Key Features</h3>
              {serviceData.overview.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}