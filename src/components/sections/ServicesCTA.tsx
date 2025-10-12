// src/components/sections/ServicesCTA.tsx

"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function ServicesCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-dark via-primary to-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Experience the{" "}
            <span className="text-yellow-300">NewGen Difference?</span>
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Let&apos;s discuss how our comprehensive services can transform your 
            owners corporation management experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              description: 'Speak with our team',
              action: 'tel:+61399999999',
              label: '+61 3 9XXX XXXX'
            },
            {
              icon: Mail,
              title: 'Email Us',
              description: 'Get a detailed response',
              action: 'mailto:info@newgenstrataservices.com.au',
              label: 'Send Email'
            },
            {
              icon: Calendar,
              title: 'Book Consultation',
              description: 'Free 30-minute meeting',
              action: '/contact',
              label: 'Schedule Now'
            }
          ].map((contact, idx) => {
            const IconComponent = contact.icon
            return (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-center h-full">
                  <CardContent className="p-6">
                    <IconComponent className="h-10 w-10 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {contact.description}
                    </p>
                    <Button 
                      asChild 
                      className="bg-white text-primary hover:bg-gray-100 w-full"
                    >
                      <Link href={contact.action}>
                        {contact.label}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// src/components/sections/ServicesCTA.tsx

// "use client"

// import React from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function ServicesCTA() {
//   const contactMethods = [
//     {
//       icon: Phone,
//       title: 'Call Us',
//       description: 'Speak with our team',
//       action: 'tel:+61399999999',
//       label: '+61 3 9XXX XXXX',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: Mail,
//       title: 'Email Us',
//       description: 'Get a detailed response',
//       action: 'mailto:info@newgenstrataservices.com.au',
//       label: 'Send Email',
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       icon: Calendar,
//       title: 'Book Consultation',
//       description: 'Free 30-minute meeting',
//       action: '/contact',
//       label: 'Schedule Now',
//       color: 'from-purple-500 to-pink-500'
//     }
//   ]

//   return (
//     <section className="section-padding bg-white relative overflow-hidden">
//       {/* Decorative background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

//       <div className="container-custom relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="text-center max-w-4xl mx-auto mb-16"
//         >
//           <motion.h2 
//             variants={fadeInUp}
//             className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6"
//           >
//             Ready to Experience the
//             <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-2">
//               NewGen Difference?
//             </span>
//           </motion.h2>
//           <motion.p 
//             variants={fadeInUp}
//             className="text-xl text-gray-600 leading-relaxed"
//           >
//             Let's discuss how our comprehensive services can transform your 
//             owners corporation management experience.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-3 gap-8 mb-12"
//         >
//           {contactMethods.map((contact, idx) => {
//             const IconComponent = contact.icon
//             return (
//               <motion.div key={contact.title} variants={fadeInUp}>
//                 <Card className="h-full border-2 border-gray-100 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white">
//                   <CardContent className="p-8 text-center flex flex-col items-center h-full">
//                     <div className="relative mb-6">
//                       <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} rounded-2xl blur-lg opacity-30`} />
//                       <div className={`relative bg-gradient-to-br ${contact.color} rounded-2xl p-4`}>
//                         <IconComponent className="h-8 w-8 text-white" />
//                       </div>
//                     </div>
//                     <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">
//                       {contact.title}
//                     </h3>
//                     <p className="text-gray-600 mb-6 flex-1">
//                       {contact.description}
//                     </p>
//                     <Button 
//                       asChild 
//                       className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold"
//                     >
//                       <Link href={contact.action}>
//                         {contact.label}
//                       </Link>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

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
//             className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
//           >
//             <Link href="/contact">
//               Get Your Free Consultation
//               <ArrowRight className="ml-2 h-6 w-6" />
//             </Link>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }