// // src/components/sections/ContactFormSection.tsx

// "use client"

// import React from 'react'
// import { ContactForm } from '@/components/forms/ContactForm'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { CheckCircle, Shield, Clock } from 'lucide-react'

// const formBenefits = [
//   {
//     icon: CheckCircle,
//     title: 'Free Consultation',
//     description: 'No obligation, no cost - just expert advice'
//   },
//   {
//     icon: Shield,
//     title: 'Secure & Private',
//     description: 'Your information is protected and confidential'
//   },
//   {
//     icon: Clock,
//     title: 'Quick Response',
//     description: 'We respond within 2 hours during business hours'
//   }
// ]

// export function ContactFormSection() {
//   return (
//     <section className="bg-white py-16 lg:py-20">
//       <div className="container-custom max-w-2xl">
//         <div className="text-center mb-12">
//           <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
//             Contact Form
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
//             Tell Us About Your <span className="text-gradient-wimbledon">Property</span>
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed mb-8">
//             Complete the form below and we&apos;ll provide a customized consultation 
//             based on your specific strata management needs.
//           </p>
          
//           {/* Benefits */}
//           <div className="grid md:grid-cols-3 gap-4 mb-8">
//             {formBenefits.map((benefit) => {
//               const IconComponent = benefit.icon
//               return (
//                 <div key={benefit.title} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
//                   <IconComponent className="h-6 w-6 text-primary mb-2" />
//                   <h3 className="font-semibold text-brand-dark text-sm mb-1">{benefit.title}</h3>
//                   <p className="text-xs text-gray-600">{benefit.description}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         <Card className="card-wimbledon shadow-lg p-0">
//           <CardContent className="p-8">
//             <ContactForm />
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   )
// }


"use client"

import React from 'react'
import { ContactForm } from '@/components/forms/ContactForm'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const benefits = [
  { icon: CheckCircle, text: 'Free consultation' },
  { icon: Shield, text: 'Secure & private' },
  { icon: Clock, text: '2-hour response' }
]

export function ContactFormSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start"
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Send us a message
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Fill out the form and we&apos;ll get back to you within 2 business hours.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-slate-700">{benefit.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <Card className="border-0 shadow-xl shadow-slate-200/50 lg:pt-0">
              <CardContent className="p-8 lg:p-10 lg:pt-0">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}