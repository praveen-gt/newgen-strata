// // src/components/sections/WhyItMatters.tsx
// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { CheckCircle, ArrowRight } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
// }

// const benefits = [
//   'Lower operating costs through efficient management',
//   'Higher property values from proactive maintenance',
//   'Less stress with responsive, reliable service',
//   'Better community relationships through clear communication',
//   'Compliance confidence with expert oversight',
//   'Time savings with streamlined processes'
// ]

// export function WhyItMatters() {
//   return (
//     <section className="py-20 lg:py-28 bg-slate-50">
//       <div className="container-custom max-w-5xl">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//         >
//           <Card className="border-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
//             <CardContent className="p-8 lg:p-12 relative">
//               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              
//               <div className="relative z-10">
//                 <div className="text-center mb-12">
//                   <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                     The Result? Better Outcomes
//                   </h2>
//                   <p className="text-slate-300 text-lg max-w-2xl mx-auto">
//                     Our approach delivers tangible benefits that matter to property owners and residents
//                   </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4 mb-10">
//                   {benefits.map((benefit, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
//                       <span className="text-slate-200">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="text-center">
//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
//                       <Link href="/contact">
//                         Experience the Difference
//                         <ArrowRight className="ml-2 h-5 w-5" />
//                       </Link>
//                     </Button>
//                     <Button 
//                       asChild 
//                       size="lg" 
//                       variant="outline" 
//                       className="border-white/20 text-white hover:bg-white/10"
//                     >
//                       <Link href="/services">
//                         View Our Services
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// src/components/sections/WhyItMatters.tsx
"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, TrendingUp, DollarSign, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const benefits = [
  'Reduced operating costs through efficient management',
  'Higher property values from proactive maintenance',
  'Less stress with reliable, responsive service',
  'Better community relationships through clear communication',
  'Complete compliance confidence with expert oversight',
  'Significant time savings with streamlined processes'
]

const outcomes = [
  {
    icon: DollarSign,
    metric: '15-25%',
    label: 'Average Cost Savings',
    description: 'Through efficient vendor management'
  },
  {
    icon: TrendingUp,
    metric: '98%',
    label: 'Client Retention',
    description: 'Clients stay with us year after year'
  },
  {
    icon: Clock,
    metric: '<2hrs',
    label: 'Response Time',
    description: 'Average response to inquiries'
  },
  {
    icon: Users,
    metric: '4.9/5',
    label: 'Satisfaction Score',
    description: 'From annual client surveys'
  }
]

export function WhyItMatters() {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            The Results
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            Why Our Approach{" "}
            <span className="text-gradient-wimbledon">Delivers Results</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our methodology isn&apos;t just theory—it produces measurable, tangible benefits 
            for property owners and residents alike
          </p>
        </motion.div>

        {/* Outcomes Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient-wimbledon mb-2">
                      {outcome.metric}
                    </div>
                    <div className="font-semibold text-brand-dark mb-2">
                      {outcome.label}
                    </div>
                    <p className="text-sm text-gray-600">
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Benefits List & CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="border-0 overflow-hidden shadow-2xl py-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Benefits */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">
                  What You Can Expect
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - CTA */}
              <div className="bg-gradient-to-br from-primary via-secondary to-brand-dark p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Experience the Difference?
                  </h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    See how our approach can transform your property management experience. 
                    Get a free consultation and customized proposal—no obligation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-gray-100 hover:bottom-1 relative shadow-xl">
                      <Link href="/contact">
                        Get Your Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-2 border-white text-primary hover:bg-accent hover:text-brand-dark"
                    >
                      <Link href="/case-studies">
                        View Success Stories
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-sm text-white/80 text-center">
                      Join 1,800+ properties already benefiting from our approach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}