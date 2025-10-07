// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { motion } from 'framer-motion'
// import { CheckCircle, Quote } from 'lucide-react'

// interface CaseStudyContentProps {
//   data: any
// }

// export function CaseStudyContent({ data }: CaseStudyContentProps) {
//   const ChallengeIcon = data.challenge.icon
//   const SolutionIcon = data.solution.icon
//   const ResultsIcon = data.results.icon

//   return (
//     <>
//       {/* Challenge Section */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-custom max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 bg-red-100 rounded-lg">
//                 <ChallengeIcon className="h-6 w-6 text-red-600" />
//               </div>
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
//                 {data.challenge.title}
//               </h2>
//             </div>

//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               {data.challenge.description}
//             </p>

//             <Card className="card-wimbledon bg-white">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-brand-dark mb-4 text-lg">
//                   Key Issues:
//                 </h3>
//                 <ul className="space-y-3">
//                   {data.challenge.keyIssues.map((issue: string, index: number) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm font-semibold mt-0.5">
//                         {index + 1}
//                       </span>
//                       <span className="text-gray-700">{issue}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* Solution Section */}
//       <section className="section-padding bg-white">
//         <div className="container-custom max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 bg-blue-100 rounded-lg">
//                 <SolutionIcon className="h-6 w-6 text-blue-600" />
//               </div>
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
//                 {data.solution.title}
//               </h2>
//             </div>

//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               {data.solution.description}
//             </p>

//             <div className="space-y-6">
//               {data.solution.actions.map((action: any, index: number) => (
//                 <Card key={index} className="card-wimbledon">
//                   <CardContent className="p-6">
//                     <div className="flex items-center gap-3 mb-4">
//                       <Badge className="bg-primary/10 text-primary border-primary/20">
//                         Phase {index + 1}
//                       </Badge>
//                       <h3 className="font-semibold text-brand-dark text-lg">
//                         {action.phase}
//                       </h3>
//                     </div>
//                     <ul className="space-y-2">
//                       {action.steps.map((step: string, stepIndex: number) => (
//                         <li key={stepIndex} className="flex items-start gap-3">
//                           <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
//                           <span className="text-gray-700">{step}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
//         <div className="container-custom max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 bg-green-100 rounded-lg">
//                 <ResultsIcon className="h-6 w-6 text-green-600" />
//               </div>
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
//                 {data.results.title}
//               </h2>
//             </div>

//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               {data.results.description}
//             </p>

//             <div className="grid md:grid-cols-2 gap-6">
//               {data.results.outcomes.map((outcome: any, index: number) => (
//                 <Card key={index} className="card-wimbledon bg-white">
//                   <CardContent className="p-6">
//                     <h3 className="font-semibold text-brand-dark mb-2 text-lg">
//                       {outcome.metric}
//                     </h3>
//                     <div className="text-2xl font-bold text-gradient-wimbledon mb-3">
//                       {outcome.value}
//                     </div>
//                     <p className="text-gray-600 text-sm">
//                       {outcome.impact}
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className="section-padding bg-gradient-wimbledon text-white">
//         <div className="container-custom max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <Quote className="h-12 w-12 mx-auto mb-6 opacity-50" />
//             <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
//               "{data.testimonial.quote}"
//             </blockquote>
//             <div className="border-t border-white/20 pt-6">
//               <p className="font-semibold text-lg mb-1">
//                 {data.testimonial.author}
//               </p>
//               <p className="text-white/80 mb-1">
//                 {data.testimonial.role}
//               </p>
//               <p className="text-white/60 text-sm">
//                 {data.testimonial.property}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Key Takeaways */}
//       <section className="section-padding bg-white">
//         <div className="container-custom max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8 text-center">
//               {data.lessons.title}
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6">
//               {data.lessons.points.map((lesson: any, index: number) => (
//                 <Card key={index} className="card-wimbledon hover-lift">
//                   <CardContent className="p-6">
//                     <div className="flex items-start gap-3">
//                       <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
//                         {index + 1}
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-brand-dark mb-2">
//                           {lesson.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm">
//                           {lesson.description}
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }

// src/components/case-studies/CaseStudyContent.tsx

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { motion } from 'framer-motion'
// import { CheckCircle, Quote, Sparkles } from 'lucide-react'

// interface CaseStudyContentProps {
//   data: any
// }

// export function CaseStudyContent({ data }: CaseStudyContentProps) {
//   const ChallengeIcon = data.challenge.icon
//   const SolutionIcon = data.solution.icon
//   const ResultsIcon = data.results.icon

//   return (
//     <>
//       {/* Challenge Section */}
//       <section className="relative section-padding overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50 via-white to-orange-50">
//           <div className="absolute inset-0 opacity-30" style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.15) 1px, transparent 0)',
//             backgroundSize: '40px 40px'
//           }} />
//         </div>

//         <div className="container-custom max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Section Header with Icon */}
//             <div className="flex items-center gap-4 mb-8">
//               <motion.div 
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//                 className="relative"
//               >
//                 <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg">
//                   <ChallengeIcon className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-ping" />
//               </motion.div>
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
//                   {data.challenge.title}
//                 </h2>
//                 <p className="text-gray-600">Understanding the problem</p>
//               </div>
//             </div>

//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               {data.challenge.description}
//             </p>

//             {/* Issues Grid */}
//             <div className="grid md:grid-cols-2 gap-4">
//               {data.challenge.keyIssues.map((issue: string, index: number) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                 >
//                   <Card className="border-l-4 border-red-500 bg-white/80 backdrop-blur hover:shadow-lg transition-all">
//                     <CardContent className="p-4 flex items-start gap-3">
//                       <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm font-semibold mt-0.5">
//                         {index + 1}
//                       </span>
//                       <span className="text-gray-700 text-sm">{issue}</span>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Solution Section */}
//       <section className="relative section-padding overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.5, 0.3]
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
//           />
//           <motion.div
//             animate={{
//               scale: [1.2, 1, 1.2],
//               opacity: [0.5, 0.3, 0.5]
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"
//           />
//         </div>

//         <div className="container-custom max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Section Header */}
//             <div className="flex items-center gap-4 mb-8">
//               <motion.div 
//                 whileHover={{ rotate: -360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//                 className="relative"
//               >
//                 <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
//                   <SolutionIcon className="h-8 w-8 text-white" />
//                 </div>
//                 <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" />
//               </motion.div>
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
//                   {data.solution.title}
//                 </h2>
//                 <p className="text-gray-600">Our strategic approach</p>
//               </div>
//             </div>

//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               {data.solution.description}
//             </p>

//             {/* Action Phases */}
//             <div className="space-y-6">
//               {data.solution.actions.map((action: any, index: number) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                 >
//                   <Card className="relative overflow-hidden bg-white/80 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all">
//                     {/* Gradient accent */}
//                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                    
//                     <CardContent className="p-6">
//                       <div className="flex items-center gap-3 mb-4">
//                         <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-1">
//                           Phase {index + 1}
//                         </Badge>
//                         <h3 className="font-semibold text-brand-dark text-lg">
//                           {action.phase}
//                         </h3>
//                       </div>
//                       <ul className="space-y-3">
//                         {action.steps.map((step: string, stepIndex: number) => (
//                           <motion.li
//                             key={stepIndex}
//                             initial={{ opacity: 0, x: -10 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.3, delay: stepIndex * 0.1 }}
//                             className="flex items-start gap-3 group"
//                           >
//                             <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                             <span className="text-gray-700">{step}</span>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="relative section-padding overflow-hidden">
//         {/* Celebration Background */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
//             backgroundSize: '30px 30px'
//           }} />
//         </div>

//         <div className="container-custom max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Section Header */}
//             <div className="flex items-center gap-4 mb-8">
//               <motion.div 
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative"
//               >
//                 <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
//                   <ResultsIcon className="h-8 w-8 text-white" />
//                 </div>
//                 <motion.div
//                   animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="absolute inset-0 bg-green-400 rounded-2xl"
//                 />
//               </motion.div>
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
//                   {data.results.title}
//                 </h2>
//                 <p className="text-gray-600">Measurable outcomes</p>
//               </div>
//             </div>

//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               {data.results.description}
//             </p>

//             {/* Outcomes Grid */}
//             <div className="grid md:grid-cols-2 gap-6">
//               {data.results.outcomes.map((outcome: any, index: number) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <Card className="relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all h-full group">
//                     {/* Hover gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
//                     {/* Top accent */}
//                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                    
//                     <CardContent className="relative p-6">
//                       <h3 className="font-semibold text-brand-dark mb-3 text-lg flex items-center gap-2">
//                         <CheckCircle className="h-5 w-5 text-green-600" />
//                         {outcome.metric}
//                       </h3>
//                       <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
//                         {outcome.value}
//                       </div>
//                       <p className="text-gray-600 text-sm leading-relaxed">
//                         {outcome.impact}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className="relative section-padding overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-wimbledon">
//           {/* Animated orbs */}
//           <motion.div
//             animate={{
//               x: [0, 100, 0],
//               y: [0, -50, 0],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
//           />
//           <motion.div
//             animate={{
//               x: [0, -100, 0],
//               y: [0, 50, 0],
//               scale: [1.2, 1, 1.2],
//             }}
//             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
//           />
//         </div>

//         <div className="container-custom max-w-4xl relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center text-white"
//           >
//             <motion.div
//               animate={{ rotate: [0, 5, -5, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <Quote className="h-16 w-16 mx-auto mb-8 opacity-50" />
//             </motion.div>
            
//             <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 font-light italic">
//               "{data.testimonial.quote}"
//             </blockquote>
            
//             <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
//               <p className="font-semibold text-xl mb-2">
//                 {data.testimonial.author}
//               </p>
//               <p className="text-white/80 mb-1">
//                 {data.testimonial.role}
//               </p>
//               <p className="text-white/60 text-sm">
//                 {data.testimonial.property}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Key Takeaways */}
//       <section className="section-padding bg-white">
//         <div className="container-custom max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
//                 {data.lessons.title}
//               </h2>
//               <p className="text-gray-600 text-lg">
//                 Essential insights from this case study
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               {data.lessons.points.map((lesson: any, index: number) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all h-full group">
//                     {/* Number badge */}
//                     <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-[3rem]">
//                       <span className="absolute top-4 right-4 text-2xl font-bold text-primary">
//                         {index + 1}
//                       </span>
//                     </div>
                    
//                     <CardContent className="p-6">
//                       <h3 className="font-semibold text-brand-dark mb-3 text-lg pr-16">
//                         {lesson.title}
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         {lesson.description}
//                       </p>
//                     </CardContent>
                    
//                     {/* Bottom accent on hover */}
//                     <motion.div
//                       initial={{ scaleX: 0 }}
//                       whileInView={{ scaleX: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
//                       className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left"
//                     />
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }


// src/components/case-studies/CaseStudyContent.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { CheckCircle, Quote, Sparkles } from 'lucide-react'

interface CaseStudyContentProps {
  data: any
}

export function CaseStudyContent({ data }: CaseStudyContentProps) {
  const ChallengeIcon = data.challenge.icon
  const SolutionIcon = data.solution.icon
  const ResultsIcon = data.results.icon

  return (
    <>
      {/* Challenge Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50 via-white to-orange-50">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header with Icon */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg">
                  <ChallengeIcon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-ping" />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
                  {data.challenge.title}
                </h2>
                <p className="text-gray-600">Understanding the problem</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {data.challenge.description}
            </p>

            {/* Issues Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {data.challenge.keyIssues.map((issue: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-l-4 border-red-500 bg-white/80 backdrop-blur hover:shadow-lg transition-all">
                    <CardContent className="p-4 flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm font-semibold mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{issue}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ rotate: -360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                  <SolutionIcon className="h-8 w-8 text-white" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
                  {data.solution.title}
                </h2>
                <p className="text-gray-600">Our strategic approach</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {data.solution.description}
            </p>

            {/* Action Phases */}
            <div className="space-y-6">
              {data.solution.actions.map((action: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="relative overflow-hidden bg-white/80 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all">
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-1">
                          Phase {index + 1}
                        </Badge>
                        <h3 className="font-semibold text-brand-dark text-lg">
                          {action.phase}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {action.steps.map((step: string, stepIndex: number) => (
                          <motion.li
                            key={stepIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: stepIndex * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700">{step}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Celebration Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                  <ResultsIcon className="h-8 w-8 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-green-400 rounded-2xl"
                />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
                  {data.results.title}
                </h2>
                <p className="text-gray-600">Measurable outcomes</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {data.results.description}
            </p>

            {/* Outcomes Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {data.results.outcomes.map((outcome: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all h-full group">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                    
                    <CardContent className="relative p-6">
                      <h3 className="font-semibold text-brand-dark mb-3 text-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        {outcome.metric}
                      </h3>
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                        {outcome.value}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {outcome.impact}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-wimbledon">
          {/* Animated orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote className="h-16 w-16 mx-auto mb-8 opacity-50" />
            </motion.div>
            
            <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 font-light italic">
              "{data.testimonial.quote}"
            </blockquote>
            
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
              <p className="font-semibold text-xl mb-2">
                {data.testimonial.author}
              </p>
              <p className="text-white/80 mb-1">
                {data.testimonial.role}
              </p>
              <p className="text-white/60 text-sm">
                {data.testimonial.property}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
                {data.lessons.title}
              </h2>
              <p className="text-gray-600 text-lg">
                Essential insights from this case study
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {data.lessons.points.map((lesson: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all h-full group">
                    {/* Number badge */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-[3rem]">
                      <span className="absolute top-4 right-4 text-2xl font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-brand-dark mb-3 text-lg pr-16">
                        {lesson.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {lesson.description}
                      </p>
                    </CardContent>
                    
                    {/* Bottom accent on hover */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left"
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}