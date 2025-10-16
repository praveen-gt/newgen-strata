// // src/components/sections/OurProcess.tsx
// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { motion } from 'framer-motion'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } }
// }

// const processSteps = [
//   {
//     number: '01',
//     title: 'Discovery & Assessment',
//     description: 'We start by understanding your property, challenges, and goals. A thorough assessment helps us identify opportunities and create a tailored management plan.',
//     details: ['Property walkthrough', 'Document review', 'Stakeholder interviews', 'Customized proposal']
//   },
//   {
//     number: '02',
//     title: 'Seamless Transition',
//     description: 'Switching strata managers shouldn\'t be stressful. We handle all the details to ensure a smooth handover with zero disruption to your operations.',
//     details: ['Document transfer', 'Contractor introductions', 'System setup', 'Committee onboarding']
//   },
//   {
//     number: '03',
//     title: 'Active Management',
//     description: 'Day-to-day excellence through proactive maintenance, clear communication, and efficient problem-solving. You\'ll always know what\'s happening.',
//     details: ['Regular inspections', 'Vendor coordination', 'Financial reporting', 'Resident communication']
//   },
//   {
//     number: '04',
//     title: 'Continuous Improvement',
//     description: 'We regularly review performance, gather feedback, and refine our approach to ensure we\'re always delivering maximum value.',
//     details: ['Quarterly reviews', 'Performance metrics', 'Strategy adjustments', 'Long-term planning']
//   }
// ]

// export function OurProcess() {
//   return (
//     <section className="py-20 lg:py-28 bg-slate-50">
//       <div className="container-custom max-w-6xl">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={staggerContainer}
//         >
//           <motion.div variants={fadeInUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               How We Work
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               A proven process that delivers consistent results
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {processSteps.map((step, index) => (
//               <motion.div key={index} variants={fadeInUp}>
//                 <Card className="border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
//                   <CardContent className="p-0">
//                     <div className="grid md:grid-cols-12 gap-0">
//                       {/* Number Section */}
//                       <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex items-center justify-center">
//                         <div className="text-5xl font-bold text-white opacity-50">
//                           {step.number}
//                         </div>
//                       </div>

//                       {/* Content Section */}
//                       <div className="md:col-span-10 p-8">
//                         <h3 className="text-2xl font-semibold text-slate-900 mb-3">
//                           {step.title}
//                         </h3>
//                         <p className="text-slate-600 mb-6 leading-relaxed">
//                           {step.description}
//                         </p>
//                         <div className="flex flex-wrap gap-2">
//                           {step.details.map((detail, idx) => (
//                             <span
//                               key={idx}
//                               className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-lg"
//                             >
//                               {detail}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// src/components/sections/OurProcess.tsx
"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Compass, Zap, Activity, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const processSteps = [
  {
    icon: Compass,
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We start by truly understanding your property, its challenges, and your goals. A comprehensive assessment helps us create a tailored management plan.',
    details: [
      'Complete property walkthrough and inspection',
      'Review of all existing documentation and contracts',
      'Stakeholder interviews with committee members',
      'Analysis of current performance and pain points',
      'Customized management proposal with clear pricing'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    number: '02',
    title: 'Seamless Transition',
    description: 'Changing strata managers should be smooth and stress-free. We handle every detail to ensure zero disruption to your operations.',
    details: [
      'Complete document transfer and verification',
      'Introduction to our vetted contractor network',
      'Setup of financial systems and online portals',
      'Committee onboarding and training sessions',
      'Resident communication about the transition'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Activity,
    number: '03',
    title: 'Active Management',
    description: 'Day-to-day excellence through proactive maintenance, transparent communication, and efficient problem-solving.',
    details: [
      'Regular property inspections and maintenance coordination',
      'Prompt response to owner and resident inquiries',
      'Transparent financial reporting and budget management',
      'Proactive issue identification and resolution',
      'Quarterly meetings and ongoing communication'
    ],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: BarChart,
    number: '04',
    title: 'Continuous Improvement',
    description: 'We never rest on our laurels. Regular reviews and feedback loops ensure we\'re always delivering maximum value.',
    details: [
      'Quarterly performance reviews with committees',
      'Annual satisfaction surveys and feedback collection',
      'Regular strategy sessions for long-term planning',
      'Performance metrics tracking and reporting',
      'Continuous process refinement and optimization'
    ],
    color: 'from-amber-500 to-orange-500'
  }
]

export function OurProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            From Onboarding to{" "}
            <span className="text-gradient-wimbledon">Ongoing Excellence</span>
          </h2>
          <p className="text-lg text-gray-600">
            A proven four-phase approach that ensures successful outcomes at every stage
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-12 gap-0">
                      {/* Number & Icon Section */}
                      <div className={`md:col-span-3 bg-gradient-to-br ${step.color} p-8 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
                        </div>
                        <div className="relative z-10 text-center">
                          <div className="text-6xl md:text-7xl font-bold opacity-30 mb-4">
                            {step.number}
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block">
                            <Icon className="h-12 w-12" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:col-span-9 p-8 lg:p-10">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} mt-2 flex-shrink-0`} />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}