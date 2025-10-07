// // src/components/sections/RelatedServices.tsx

// "use client"

// import React from 'react'
// import Link from 'next/link'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { ArrowRight, DollarSign, Wrench, FileCheck } from 'lucide-react'
// import { motion } from 'framer-motion'

// const allServices = [
//   {
//     slug: 'meeting-management',
//     title: 'Meeting Management',
//     description: 'Professional AGM and committee meeting services',
//     icon: FileCheck
//   },
//   {
//     slug: 'financial-management',
//     title: 'Financial Management',
//     description: 'Complete financial oversight and reporting',
//     icon: DollarSign
//   },
//   {
//     slug: 'maintenance-coordination',
//     title: 'Maintenance Coordination',
//     description: 'Property maintenance and repairs',
//     icon: Wrench
//   },
// ]

// interface RelatedServicesProps {
//   currentService: string
// }

// export function RelatedServices({ currentService }: RelatedServicesProps) {
//   const related = allServices.filter(s => s.slug !== currentService).slice(0, 3)

//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
//             Related Services
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
//             Explore Our Other <span className="text-gradient-wimbledon">Services</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {related.map((service) => {
//             const IconComponent = service.icon
//             return (
//               <Card key={service.slug} className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
//                 <CardContent className="p-6">
//                   <IconComponent className="h-10 w-10 text-primary mb-4" />
//                   <h3 className="text-xl font-semibold text-brand-dark mb-2">{service.title}</h3>
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <Button asChild variant="link" className="p-0 text-primary">
//                     <Link href={`/services/${service.slug}`}>
//                       Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// src/components/sections/RelatedServices.tsx

"use client"

import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  DollarSign, 
  Wrench, 
  FileCheck, 
  Shield, 
  Zap,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const allServices = [
  {
    slug: 'meeting-management',
    title: 'Meeting Management',
    description: 'Professional AGM and committee meeting services with full compliance',
    icon: Calendar
  },
  {
    slug: 'financial-management',
    title: 'Financial Management',
    description: 'Complete financial oversight, budgeting and transparent reporting',
    icon: DollarSign
  },
  {
    slug: 'maintenance-coordination',
    title: 'Maintenance Coordination',
    description: 'Proactive property maintenance with trusted contractor network',
    icon: Wrench
  },
  {
    slug: 'compliance-management',
    title: 'Compliance Management',
    description: '100% regulatory compliance and legal requirement management',
    icon: FileCheck
  },
  {
    slug: 'insurance-services',
    title: 'Insurance Services',
    description: 'Expert insurance coordination and claims management support',
    icon: Shield
  },
  {
    slug: 'emergency-support',
    title: 'Emergency Support',
    description: '24/7 emergency response for urgent property issues',
    icon: Zap
  },
]

interface RelatedServicesProps {
  currentService: string
}

export function RelatedServices({ currentService }: RelatedServicesProps) {
  const related = allServices.filter(s => s.slug !== currentService)

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'center',
    skipSnaps: false 
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(autoScroll)
  }, [emblaApi])

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Related Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
            Explore Our Other <span className="text-gradient-wimbledon">Services</span>
          </h2>
          <p className="text-gray-600">
            Comprehensive strata management solutions for every need
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 py-4">
              {related.map((service) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={service.slug}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <Link href={`/services/${service.slug}`}>
                      <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 bg-white">
                        <CardContent className="p-8">
                          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-fit mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                            <IconComponent className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          
                          <h3 className="text-xl font-semibold text-brand-dark mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                            Learn More 
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="btn-wimbledon">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}