// // src/components/sections/ContactCTA.tsx

// "use client"

// import React from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { 
//   Phone, 
//   Mail, 
//   MessageSquare, 
//   Calendar,
//   ArrowRight,
//   Clock,
//   MapPin,
//   CheckCircle
// } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const contactMethods = [
//   {
//     icon: Phone,
//     title: 'Call Us',
//     description: 'Speak directly with our team',
//     action: 'Call Now',
//     href: 'tel:+61399999999',
//     info: '+61 3 9XXX XXXX',
//     availability: 'Mon-Fri 9AM-5PM'
//   },
//   {
//     icon: Mail,
//     title: 'Email Us',
//     description: 'Get a detailed response',
//     action: 'Send Email',
//     href: 'mailto:info@newgenstrataservices.com.au',
//     info: 'info@newgenstrataservices.com.au',
//     availability: 'Response within 2 hours'
//   },
//   {
//     icon: MessageSquare,
//     title: 'Contact Form',
//     description: 'Tell us about your needs',
//     action: 'Fill Form',
//     href: '/contact',
//     info: 'Detailed inquiry form',
//     availability: 'Get custom quote'
//   },
//   {
//     icon: Calendar,
//     title: 'Book Consultation',
//     description: 'Free 30-minute consultation',
//     action: 'Schedule Now',
//     href: '/contact?consultation=true',
//     info: 'No obligation meeting',
//     availability: 'Available this week'
//   }
// ]

// const benefits = [
//   'Free initial consultation',
//   'No obligation quotes',
//   'Same-day response guaranteed',
//   'Custom solutions for your property',
//   'Transparent pricing',
//   '24/7 emergency support included'
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function ContactCTA() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-brand-dark via-primary to-secondary relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
//       </div>

//       <div className="container-custom relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-4xl mx-auto mb-16"
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
//           >
//             Ready to Transform Your <span className="text-brand-accent">Strata Management</span>?
//           </motion.h2>
//           <motion.p
//             variants={fadeInUp}
//             className="text-xl text-white/90 leading-relaxed mb-8"
//           >
//             Join hundreds of Melbourne properties that have already made the switch to NewGen. 
//             Get your free consultation and discover the difference our new generation approach can make.
//           </motion.p>
//         </motion.div>

//         {/* Contact Methods Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//         >
//           {contactMethods.map((method, index) => {
//             const IconComponent = method.icon
//             return (
//               <motion.div key={method.title} variants={fadeInUp}>
//                 <Card className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 h-full hover-lift">
//                   <CardContent className="p-6 text-center">
//                     <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                       <IconComponent className="h-8 w-8 text-primary" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-brand-dark mb-2">
//                       {method.title}
//                     </h3>
//                     <p className="text-gray-600 mb-3">
//                       {method.description}
//                     </p>
//                     <div className="text-sm text-primary font-medium mb-3">
//                       {method.info}
//                     </div>
//                     <div className="text-xs text-gray-500 mb-4">
//                       {method.availability}
//                     </div>
//                     <Button asChild size="sm" className="btn-wimbledon w-full">
//                       <Link href={method.href}>
//                         {method.action}
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* Main CTA Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12"
//         >
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Side - Benefits */}
//             <div>
//               <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6">
//                 Why Choose NewGen Today?
//               </h3>
//               <div className="grid md:grid-cols-2 gap-4 mb-8">
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
//                     <span className="text-gray-700">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex items-center space-x-4 text-sm text-gray-600">
//                 <div className="flex items-center space-x-2">
//                   <Clock className="h-4 w-4 text-primary" />
//                   <span>Open Mon-Fri 9AM-5PM</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="h-4 w-4 text-primary" />
//                   <span>Servicing All Melbourne</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - CTA */}
//             <div className="text-center lg:text-left space-y-6">
//               <div>
//                 <h4 className="text-xl font-semibold text-brand-dark mb-3">
//                   Get Your Free Consultation
//                 </h4>
//                 <p className="text-gray-600 mb-6">
//                   Discover how NewGen can improve your property management experience. 
//                   No obligation, no pressure - just expert advice tailored to your needs.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <Button asChild size="lg" className="btn-wimbledon w-full lg:w-auto">
//                   <Link href="/contact">
//                     Start Your Journey
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <div className="text-sm text-gray-500">
//                   Or call us directly at{' '}
//                   <Link href="tel:+61399999999" className="text-primary hover:text-primary/80 font-medium">
//                     +61 3 9XXX XXXX
//                   </Link>
//                 </div>
//               </div>

//               {/* Trust Indicators */}
//               <div className="pt-6 border-t border-gray-200">
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <div className="text-2xl font-bold text-primary">98%</div>
//                     <div className="text-xs text-gray-600">Satisfaction</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-secondary">24h</div>
//                     <div className="text-xs text-gray-600">Response</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-brand-accent">70+</div>
//                     <div className="text-xs text-gray-600">Years Exp.</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom Quote */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="text-center mt-12"
//         >
//           <blockquote className="text-lg font-medium text-white/80 italic">
//             "The quality is long remembered after the price is forgotten"
//           </blockquote>
//           <div className="text-white/60 text-sm mt-2">— NewGen Strata Services</div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// src/components/sections/ContactCTA.tsx

"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, Calendar, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const benefits = [
  'Free initial consultation',
  'Same-day response',
  'No obligation quotes',
  '24/7 emergency support'
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function ContactCTA() {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-brand-dark via-primary to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                          linear-gradient(to bottom, white 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="text-brand-accent">Strata Management</span>?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Join hundreds of Melbourne properties experiencing the NewGen difference.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center justify-center space-x-2 text-white/90 text-sm">
                <CheckCircle className="h-4 w-4 text-brand-accent flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-brand-dark hover:bg-white/90 font-bold px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-10 py-6 rounded-full transition-all duration-300"
            >
              <Link href="tel:+61399999999">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+61 3 9XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@newgenstrataservices.com.au</span>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2hrs</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Properties</div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8">
            <blockquote className="text-lg font-medium text-white/70 italic">
              "The quality is long remembered after the price is forgotten"
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}