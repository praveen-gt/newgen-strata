// // src/components/sections/Testimonials.tsx

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Star, Quote, Building2 } from 'lucide-react'
// import { motion } from 'framer-motion'

// const testimonials = [
//   {
//     name: 'Sarah Mitchell',
//     role: 'Committee Chairperson',
//     property: 'Riverside Apartments, South Yarra',
//     image: '/images/testimonials/sarah-mitchell.jpg',
//     rating: 5,
//     content: 'After years of frustration with our previous strata manager, NewGen has been a breath of fresh air. Kevin and Sam are always available, proactive in their approach, and have saved us thousands in unnecessary expenses through their excellent contractor network.',
//     highlight: 'Saved thousands in expenses'
//   },
//   {
//     name: 'David Chen',
//     role: 'Property Owner',
//     property: 'Melbourne Central Towers, Carlton',
//     image: '/images/testimonials/david-chen.jpg',
//     rating: 5,
//     content: 'The difference is night and day. We finally have a strata manager who actually cares about our property. The monthly reports are detailed, transparent, and easy to understand. Their 24/7 emergency support gave us peace of mind when we had a major water leak.',
//     highlight: '24/7 emergency support when needed'
//   },
//   {
//     name: 'Jennifer Walsh',
//     role: 'Committee Member',
//     property: 'Harbour View Complex, Docklands',
//     image: '/images/testimonials/jennifer-walsh.jpg',
//     rating: 5,
//     content: 'NewGen doesn\'t just manage our property - they partner with us. Their collaborative approach means we\'re involved in decisions but not overwhelmed with details. The quality of service providers they recommend has been consistently excellent.',
//     highlight: 'True partnership approach'
//   },
//   {
//     name: 'Michael Thompson',
//     role: 'Owner & Resident',
//     property: 'Parkside Townhouses, Brighton',
//     image: '/images/testimonials/michael-thompson.jpg',
//     rating: 5,
//     content: 'What impressed me most is their attention to compliance and legal requirements. They proactively keep us updated on regulatory changes and ensure we\'re always compliant. Their expertise has prevented several potential legal issues.',
//     highlight: 'Proactive compliance management'
//   },
//   {
//     name: 'Lisa Rodriguez',
//     role: 'Committee Secretary',
//     property: 'Skyline Residences, Southbank',
//     image: '/images/testimonials/lisa-rodriguez.jpg',
//     rating: 5,
//     content: 'The technology they use is fantastic. Everything is digital, reports are generated automatically, and we can access information anytime through their portal. It\'s so much more efficient than the old paper-based systems.',
//     highlight: 'Modern digital systems'
//   },
//   {
//     name: 'Robert Kim',
//     role: 'Investment Property Owner',
//     property: 'Metro Heights, Richmond',
//     image: '/images/testimonials/robert-kim.jpg',
//     rating: 5,
//     content: 'As an investor with multiple properties, I appreciate having one dedicated contact person who knows my property\'s history and needs. Response times are excellent, and the financial reporting gives me complete visibility into my investment.',
//     highlight: 'Excellent response times'
//   }
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function Testimonials() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-brand-neutral/10 via-white to-primary/5">
//       <div className="container-custom">
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="bg-brand-accent/10 text-brand-accent border-brand-accent/20 mb-4">
//               Client Testimonials
//             </Badge>
//           </motion.div>
//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
//           >
//             What Our Clients <span className="text-gradient-wimbledon">Say About Us</span>
//           </motion.h2>
//           <motion.p
//             variants={fadeInUp}
//             className="text-lg text-gray-600 leading-relaxed"
//           >
//             Don't just take our word for it. Here's what property owners and committee members 
//             across Melbourne are saying about their NewGen experience.
//           </motion.p>
//         </motion.div>

//         {/* Testimonials Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div key={testimonial.name} variants={fadeInUp}>
//               <Card className="card-wimbledon h-full hover-lift group">
//                 <CardContent className="p-6">
//                   <div className="space-y-4">
//                     {/* Quote Icon */}
//                     <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    
//                     {/* Rating */}
//                     <div className="flex space-x-1">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                       ))}
//                     </div>

//                     {/* Content */}
//                     <p className="text-gray-600 leading-relaxed italic">
//                       "{testimonial.content}"
//                     </p>

//                     {/* Highlight */}
//                     <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
//                       <p className="text-primary text-sm font-medium">
//                         Key Benefit: {testimonial.highlight}
//                       </p>
//                     </div>

//                     {/* Author */}
//                     <div className="flex items-center space-x-3 pt-2 border-t">
//                       <Avatar className="h-12 w-12">
//                         <AvatarImage src={testimonial.image} alt={testimonial.name} />
//                         <AvatarFallback className="bg-primary/10 text-primary">
//                           {testimonial.name.split(' ').map(n => n[0]).join('')}
//                         </AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <div className="font-semibold text-brand-dark">{testimonial.name}</div>
//                         <div className="text-sm text-gray-600">{testimonial.role}</div>
//                         <div className="flex items-center space-x-1 text-xs text-gray-500">
//                           <Building2 className="h-3 w-3" />
//                           <span>{testimonial.property}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Trust Indicators */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="bg-white rounded-2xl p-8 shadow-lg"
//         >
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-3xl font-bold text-primary mb-2">98%</div>
//               <div className="text-sm text-gray-600">Client Satisfaction</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-secondary mb-2">24h</div>
//               <div className="text-sm text-gray-600">Average Response</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-brand-accent mb-2">100%</div>
//               <div className="text-sm text-gray-600">Compliance Rate</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-primary mb-2">5★</div>
//               <div className="text-sm text-gray-600">Average Rating</div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// src/components/sections/Testimonials.tsx

"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Building Manager',
    property: 'Southbank Towers',
    rating: 5,
    text: 'NewGen transformed our strata management completely. Their proactive approach and modern technology have made everything so much easier. Response times are incredible, and the single point of contact means we actually know who to call.',
    image: '/images/testimonials/person-1.jpg'
  },
  {
    name: 'David Chen',
    role: 'Owner Corporation Chair',
    property: 'Richmond Gardens',
    rating: 5,
    text: 'After years of frustration with our previous manager, switching to NewGen was the best decision we made. They genuinely care about our property and residents. The financial reporting is transparent and easy to understand.',
    image: '/images/testimonials/person-2.jpg'
  },
  {
    name: 'Jennifer Williams',
    role: 'Committee Member',
    property: 'Carlton Residences',
    rating: 5,
    text: 'The 24/7 emergency support has been a game-changer. We had a major plumbing issue at 2am, and NewGen had someone on-site within 30 minutes. Their network of contractors is reliable and professional.',
    image: '/images/testimonials/person-3.jpg'
  },
  {
    name: 'Michael O\'Brien',
    role: 'Property Owner',
    property: 'Docklands Marina',
    rating: 5,
    text: 'What sets NewGen apart is their collaborative approach. They don\'t just take orders - they provide expert guidance and help us make informed decisions. Our building has never been better managed.',
    image: '/images/testimonials/person-4.jpg'
  },
  {
    name: 'Lisa Thompson',
    role: 'Owners Corporation Secretary',
    property: 'St Kilda Beach Apartments',
    rating: 5,
    text: 'The digital reporting and online portal are fantastic. Everything is organized and accessible. AGM preparation is smooth, and their meeting management is professional and efficient.',
    image: '/images/testimonials/person-5.jpg'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Trusted by Melbourne&apos;s{" "}
            <span className="text-gradient-wimbledon">Leading Properties</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Don&apos;t just take our word for it - hear from the property managers and owners
            who&apos;ve experienced the NewGen difference.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="m-auto" ref={emblaRef}>
            <div className="flex gap-6 py-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card className="h-full border-none shadow-md transition-all duration-300 bg-white">
                    <CardContent className="p-8">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="h-10 w-10 text-primary/20" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 leading-relaxed mb-6 italic">
                        &quot;{testimonial.text}&quot;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-brand-dark">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="text-xs text-gray-500">
                            {testimonial.property}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full border-2 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full border-2 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to experience exceptional strata management?
          </p>
          <Button asChild size="lg" className="btn-wimbledon">
            <a href="/contact">Get Your Free Consultation</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}