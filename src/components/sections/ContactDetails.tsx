// // src/components/sections/ContactDetails.tsx

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { 
//   Phone, 
//   Mail, 
// } from 'lucide-react'
// import Link from 'next/link'

// const contactMethods = [
//   {
//     icon: Phone,
//     title: 'Call Us Direct',
//     primary: '+61 3 9XXX XXXX',
//     secondary: 'Mon-Fri: 9:00 AM - 5:00 PM',
//     description: 'Speak directly with Kevin or Sam',
//     action: 'Call Now',
//     href: 'tel:+61399999999',
//     urgent: false
//   },
//   {
//     icon: Mail,
//     title: 'Email Us',
//     primary: 'info@newgenstrataservices.com.au',
//     secondary: 'Response within 2 hours',
//     description: 'Detailed inquiries and documentation',
//     action: 'Send Email',
//     href: 'mailto:info@newgenstrataservices.com.au',
//     urgent: false
//   },
// ]
// export function ContactDetails() {
//   return (
//     <section className="bg-gradient-to-br from-brand-neutral/20 to-gray-50 py-16 lg:py-20">
//       <div className="container-custom max-w-2xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
//             Multiple Ways to <span className="text-gradient-wimbledon">Connect</span>
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Choose the method that works best for you. We&apos;re committed to 
//             responding quickly and providing the support you need.
//           </p>
//         </div>

//         <div className="space-y-6">
//           {/* Contact Methods */}
//           {contactMethods.map((method) => {
//             const IconComponent = method.icon
//             return (
//               <Card key={method.title} className="card-wimbledon hover-lift">
//                 <CardContent className="p-6">
//                   <div className="flex items-start space-x-4">
//                     <div className={`flex-shrink-0 p-3 rounded-lg ${
//                       method.urgent 
//                         ? 'bg-red-100 text-red-600' 
//                         : 'bg-primary/10 text-primary'
//                     }`}>
//                       <IconComponent className="h-6 w-6" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h3 className="font-semibold text-brand-dark text-lg mb-1">
//                         {method.title}
//                       </h3>
//                       <div className="text-primary font-medium mb-1">
//                         {method.primary}
//                       </div>
//                       <div className="text-sm text-gray-600 mb-2">
//                         {method.secondary}
//                       </div>
//                       <p className="text-sm text-gray-600 mb-4">
//                         {method.description}
//                       </p>
//                       <Button 
//                         asChild 
//                         size="sm" 
//                         className={method.urgent ? 'bg-red-600 hover:bg-red-700' : 'btn-wimbledon'}
//                       >
//                         <Link href={method.href}>
//                           {method.action}
//                         </Link>
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             )
//           })}

//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+61 3 9XXX XXXX',
    detail: 'Mon-Fri, 9AM-5PM',
    href: 'tel:+61399999999',
    cta: 'Call us'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@newgenstrataservices.com.au',
    detail: 'We reply within 2 hours',
    href: 'mailto:info@newgenstrataservices.com.au',
    cta: 'Send email'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Melbourne CBD Area',
    detail: 'Serving all Melbourne metro',
    href: '#location',
    // cta: 'Get directions'
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9AM-5PM',
    detail: 'Emergency: 24/7',
    href: '#emergency',
    // cta: 'View schedule'
  }
]

export function ContactDetails() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Other ways to reach us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose your preferred method of contact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <motion.div key={item.label} variants={fadeInUp}>
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-slate-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-slate-500 mb-1">
                            {item.label}
                          </div>
                          <div className="text-slate-900 font-semibold mb-1 break-words">
                            {item.value}
                          </div>
                          <div className="text-sm text-slate-600 mb-4">
                            {item.detail}
                          </div>
                          {/* <Button 
                            asChild 
                            variant="ghost" 
                            size="sm"
                            className="text-primary hover:text-primary hover:bg-primary/10 -ml-3"
                          >
                            <Link href={item.href}>
                              {item.cta} →
                            </Link>
                          </Button> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}