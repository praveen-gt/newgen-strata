// // Screen 3: Services Preview Section

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { 
//   Calendar,
//   DollarSign,
//   Wrench,
//   FileCheck,
//   Bell,
//   MessageSquare,
//   ArrowRight,
// } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { Button } from '../ui/button'
// import Link from 'next/link'

// const services = [
//   {
//     icon: Calendar,
//     title: 'Meeting Management',
//     description: 'Planning and arranging committee meetings and AGMs, preparing and distributing meeting notices, agendas, and minutes.',
//     color: 'text-primary'
//   },
//   {
//     icon: MessageSquare,
//     title: 'Correspondence Management',
//     description: 'Responding to correspondences on the owner\'s corporation\'s behalf professionally and promptly.',
//     color: 'text-secondary'
//   },
//   {
//     icon: Wrench,
//     title: 'Maintenance & Repairs',
//     description: 'Organizing maintenance and repairs for common property with our vetted network of contractors.',
//     color: 'text-brand-accent'
//   },
//   {
//     icon: FileCheck,
//     title: 'Register & Documentation',
//     description: 'Maintaining the owner\'s corporation register and assisting with documents required for sales.',
//     color: 'text-primary'
//   },
//   {
//     icon: DollarSign,
//     title: 'Financial Management',
//     description: 'Taking care of accounts payable, budgeting, and providing transparent financial reporting.',
//     color: 'text-secondary'
//   },
//   {
//     icon: Bell,
//     title: 'Stakeholder Communication',
//     description: 'Sharing updates and notices with stakeholders, ensuring building compliance, and liaising with all parties regarding disputes and special requests.',
//     color: 'text-brand-accent'
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

// export function ServicesPreview() {
// return (

//      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
//       <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="bg-primary/10 text-primary border-primary/20 mb-3 sm:mb-4 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2">
//               Our Services
//             </Badge>
//           </motion.div>

//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6 px-2"
//           >
//             Personal, High-Quality{" "}
//             <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
//           </motion.h2>

//           <motion.p
//             variants={fadeInUp}
//             className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2"
//           >
//             Comprehensive services for all aspects of owners corporation management.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={staggerContainer}
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12"
//         >
//           {services.map((service) => {
//             const IconComponent = service.icon
//             return (
//               <motion.div key={service.title} variants={fadeInUp}>
//                 <Link href="/services" className="block h-full">
//                   <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm group hover:-translate-y-2 cursor-pointer">
//                     <CardContent className="p-5 sm:p-6">
//                       <div className="flex flex-col space-y-3 sm:space-y-4">
//                         <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
//                           <IconComponent className={`h-7 w-7 sm:h-8 sm:w-8 ${service.color} group-hover:scale-110 transition-transform`} />
//                         </div>
                        
//                         <div>
//                           <h3 className="text-lg sm:text-xl font-semibold text-brand-dark mb-2 group-hover:text-primary transition-colors">
//                             {service.title}
//                           </h3>
//                           <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
//                             {service.description}
//                           </p>
//                           <div className="flex items-center text-primary text-xs sm:text-sm font-medium group-hover:gap-2 transition-all">
//                             <span>Learn more</span>
//                             <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* View All Services CTA */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="text-center"
//         >
//           <Button 
//             asChild 
//             size="lg"
//             className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-5 sm:px-10 sm:py-6 text-sm sm:text-base rounded-full shadow-xl hover:scale-105 transition-all duration-300"
//           >
//             <Link href="/services">
//               View All Services
//               <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//             </Link>
//           </Button>
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
import { 
  Calendar,
  DollarSign,
  Wrench,
  FileCheck,
  Bell,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Calendar,
    title: 'Meeting Management',
    description: 'Planning and arranging committee meetings and AGMs, preparing and distributing meeting notices, agendas, and minutes.',
    color: 'text-blue-600',
    gradient: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: MessageSquare,
    title: 'Correspondence Management',
    description: 'Responding to correspondences on the owner\'s corporation\'s behalf professionally and promptly.',
    color: 'text-purple-600',
    gradient: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Organizing maintenance and repairs for common property with our vetted network of contractors.',
    color: 'text-emerald-600',
    gradient: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    icon: FileCheck,
    title: 'Register & Documentation',
    description: 'Maintaining the owner\'s corporation register and assisting with documents required for sales.',
    color: 'text-amber-600',
    gradient: 'from-amber-500/20 to-amber-600/20'
  },
  {
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Taking care of accounts payable, budgeting, and providing transparent financial reporting.',
    color: 'text-rose-600',
    gradient: 'from-rose-500/20 to-rose-600/20'
  },
  {
    icon: Bell,
    title: 'Stakeholder Communication',
    description: 'Sharing updates and notices with stakeholders, ensuring building compliance, and liaising with all parties regarding disputes and special requests.',
    color: 'text-indigo-600',
    gradient: 'from-indigo-500/20 to-indigo-600/20'
  }
]

export default function ServicesPreview() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced background with more vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-emerald-50/50" />
      <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.4s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div>
            {/* Larger, more prominent badge */}
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border-blue-300/50 mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
              Our Services
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 sm:mb-5 md:mb-6 px-2">
            Personal, High-Quality{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 font-medium">
            Comprehensive services for all aspects of owners corporation management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.title} className="transform hover:-translate-y-2 transition-transform duration-300">
                <a href="/services" className="block h-full">
                  <Card className="h-full border-2 border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm group cursor-pointer relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <CardContent className="p-5 sm:p-6 relative z-10">
                      <div className="flex flex-col space-y-3 sm:space-y-4">
                        <div className={`bg-gradient-to-br ${service.gradient} rounded-xl p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 transition-all shadow-md group-hover:shadow-lg group-hover:scale-110`}>
                          <IconComponent className={`h-7 w-7 sm:h-8 sm:w-8 ${service.color} transition-transform`} />
                        </div>
                        
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                            {service.description}
                          </p>
                          <div className="flex items-center text-blue-600 text-xs sm:text-sm font-semibold transition-all">
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            )
          })}
        </div>

        {/* Enhanced CTA Button */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white font-bold px-8 py-5 sm:px-10 sm:py-6 text-sm sm:text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Link href="/services" className="flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}