// // "use client"

// // import React from 'react'
// // import { Card, CardContent } from '@/components/ui/card'
// // import { Badge } from '@/components/ui/badge'
// // import { Award, Clock, Shield } from 'lucide-react'
// // import { motion } from 'framer-motion'

// // const commitments = [
// //   {
// //     icon: Award,
// //     title: 'Capability',
// //     color: 'text-primary'
// //   },
// //   {
// //     icon: Clock,
// //     title: 'Reliability',
// //     color: 'text-secondary'
// //   },
// //   {
// //     icon: Shield,
// //     title: 'Integrity',
// //     color: 'text-brand-accent'
// //   }
// // ]

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// // }

// // export function OurCommitmentsAbout() {
// //   return (
// //     <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary/5">
// //       <div className="container-custom">
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={fadeInUp}
// //           className="text-center max-w-3xl mx-auto mb-16"
// //         >
// //           <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
// //             Our Commitments
// //           </Badge>
// //           <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
// //             The Commitments of{" "}
// //             <span className="text-gradient-wimbledon">NewGen Strata Services</span>
// //           </h2>
// //           <p className="text-lg text-gray-600">
// //             We have three fundamental commitments we make to our clients, our professional 
// //             & trade service providers, and our own staff — and we are ready and willing to 
// //             be held to these and challenged on them at any time.
// //           </p>
// //         </motion.div>

// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={{
// //             hidden: {},
// //             visible: { transition: { staggerChildren: 0.15 } }
// //           }}
// //           className="grid md:grid-cols-3 gap-8"
// //         >
// //           {commitments.map((item) => {
// //             const IconComponent = item.icon
// //             return (
// //               <motion.div key={item.title} variants={fadeInUp}>
// //                 <Card className="text-center p-8 h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
// //                   <CardContent className="p-0">
// //                     <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
// //                       <IconComponent className={`h-10 w-10 ${item.color}`} />
// //                     </div>
// //                     <h3 className="text-3xl font-bold text-brand-dark">
// //                       {item.title}
// //                     </h3>
// //                   </CardContent>
// //                 </Card>
// //               </motion.div>
// //             )
// //           })}
// //         </motion.div>

// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={fadeInUp}
// //           className="text-center bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto mt-12 border border-primary/10"
// //         >
// //           <blockquote className="text-2xl font-semibold text-brand-dark italic mb-2">
// //             &quot;The quality is long remembered after the price is forgotten&quot;
// //           </blockquote>
// //           <p className="text-gray-600 font-medium">— NewGen Strata Services</p>
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }


// "use client"

// import React from 'react'
// import { Badge } from '@/components/ui/badge'
// import { Award, Clock, Shield, Star } from 'lucide-react'
// import { motion } from 'framer-motion'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// const fadeIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
// }

// export function OurCommitmentsAbout() {
//   return (
//     <section className="relative section-padding overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
//       {/* Decorative background */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />

//       <div className="container-custom relative z-10">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="text-center max-w-3xl mx-auto mb-20"
//         >
//           <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
//             Our Promise
//           </Badge>
//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
//             The Commitments of{" "}
//             <span className="text-gradient-wimbledon">NewGen Strata Services</span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//             We have three fundamental commitments we make to our clients, our professional 
//             & trade service providers, and our own staff — and we are ready and willing to 
//             be held to these and challenged on them at any time.
//           </p>
//         </motion.div>

//         {/* Value Proposition Infographic */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="max-w-4xl mx-auto mb-16"
//         >
//           <div className="relative aspect-square max-w-2xl mx-auto">
//             {/* Outer Green Circle */}
//             <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-2xl flex items-center justify-center">
//               {/* Company Name - Top */}
//               <div className="absolute top-8 left-1/2 -translate-x-1/2">
//                 <p className="text-white font-bold text-lg md:text-xl text-center tracking-wide">
//                   NEWGEN&apos;S STRATA SERVICES
//                 </p>
//               </div>

//               {/* Company Name - Bottom */}
//               <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
//                 <p className="text-white font-bold text-lg md:text-xl text-center tracking-wide">
//                   NEWGEN&apos;S STRATA SERVICES
//                 </p>
//               </div>

//               {/* Inner White Circle Container */}
//               <div className="absolute inset-[15%] bg-white rounded-full shadow-xl flex items-center justify-center">
//                 {/* Center Circle - Our Customers */}
//                 <div className="absolute inset-[35%] bg-white border-4 border-gray-300 rounded-full shadow-lg flex items-center justify-center z-10">
//                   <div className="text-center px-4">
//                     <p className="font-bold text-brand-dark text-base md:text-lg leading-tight">
//                       OUR<br/>CUSTOMERS
//                     </p>
//                   </div>
//                 </div>

//                 {/* Top Left - Capability */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -50, y: -50 }}
//                   whileInView={{ opacity: 1, x: 0, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2, duration: 0.6 }}
//                   className="absolute top-[8%] left-[8%] w-[35%] aspect-square bg-gradient-to-br from-[#c2ff6b] to-[#9ecc52] rounded-full shadow-xl flex items-center justify-center border-4 border-white"
//                 >
//                   <div className="text-center">
//                     <Award className="h-8 w-8 md:h-10 md:w-10 text-brand-dark mx-auto mb-2" />
//                     <p className="font-bold text-brand-dark text-lg md:text-xl">
//                       CAPABILITY
//                     </p>
//                   </div>
//                 </motion.div>

//                 {/* Top Right - Integrity */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50, y: -50 }}
//                   whileInView={{ opacity: 1, x: 0, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.3, duration: 0.6 }}
//                   className="absolute top-[8%] right-[8%] w-[35%] aspect-square bg-gradient-to-br from-[#7dd3ff] to-[#4fb3e8] rounded-full shadow-xl flex items-center justify-center border-4 border-white"
//                 >
//                   <div className="text-center">
//                     <Shield className="h-8 w-8 md:h-10 md:w-10 text-brand-dark mx-auto mb-2" />
//                     <p className="font-bold text-brand-dark text-lg md:text-xl">
//                       INTEGRITY
//                     </p>
//                   </div>
//                 </motion.div>

//                 {/* Bottom Left - Quality */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -50, y: 50 }}
//                   whileInView={{ opacity: 1, x: 0, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4, duration: 0.6 }}
//                   className="absolute bottom-[8%] left-[8%] w-[35%] aspect-square bg-gradient-to-br from-[#ff6bda] to-[#e84fb3] rounded-full shadow-xl flex items-center justify-center border-4 border-white"
//                 >
//                   <div className="text-center">
//                     <Star className="h-8 w-8 md:h-10 md:w-10 text-white mx-auto mb-2" />
//                     <p className="font-bold text-white text-lg md:text-xl">
//                       QUALITY
//                     </p>
//                   </div>
//                 </motion.div>

//                 {/* Bottom Right - Reliability */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50, y: 50 }}
//                   whileInView={{ opacity: 1, x: 0, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.5, duration: 0.6 }}
//                   className="absolute bottom-[8%] right-[8%] w-[35%] aspect-square bg-gradient-to-br from-[#ffd700] to-[#ffb700] rounded-full shadow-xl flex items-center justify-center border-4 border-white"
//                 >
//                   <div className="text-center">
//                     <Clock className="h-8 w-8 md:h-10 md:w-10 text-brand-dark mx-auto mb-2" />
//                     <p className="font-bold text-brand-dark text-lg md:text-xl">
//                       RELIABILITY
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Three Core Commitments - Text Description */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.15 } }
//           }}
//           className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
//         >
//           <motion.div variants={fadeInUp} className="text-center">
//             <div className="bg-gradient-to-br from-[#c2ff6b] to-[#9ecc52] rounded-2xl p-6 shadow-lg mb-4">
//               <Award className="h-12 w-12 text-brand-dark mx-auto" />
//             </div>
//             <h3 className="text-2xl font-bold text-brand-dark mb-3">Capability</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Deep knowledge and expertise in all aspects of owners corporation management
//             </p>
//           </motion.div>

//           <motion.div variants={fadeInUp} className="text-center">
//             <div className="bg-gradient-to-br from-[#ffd700] to-[#ffb700] rounded-2xl p-6 shadow-lg mb-4">
//               <Clock className="h-12 w-12 text-brand-dark mx-auto" />
//             </div>
//             <h3 className="text-2xl font-bold text-brand-dark mb-3">Reliability</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Consistent, dependable service you can count on every time
//             </p>
//           </motion.div>

//           <motion.div variants={fadeInUp} className="text-center">
//             <div className="bg-gradient-to-br from-[#7dd3ff] to-[#4fb3e8] rounded-2xl p-6 shadow-lg mb-4">
//               <Shield className="h-12 w-12 text-brand-dark mx-auto" />
//             </div>
//             <h3 className="text-2xl font-bold text-brand-dark mb-3">Integrity</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Honesty and transparency in everything we do
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Quote Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-primary/10"
//         >
//           <blockquote className="text-2xl md:text-3xl font-semibold text-brand-dark italic mb-2">
//             &quot;The quality is long remembered after the price is forgotten&quot;
//           </blockquote>
//           <p className="text-gray-600 font-medium text-lg">— NewGen Strata Services</p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default OurCommitmentsAbout


// "use client";

// import React, { useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Award, Clock, Shield, Star, CheckCircle2, Sparkles } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // ============================
// // Animation Variants
// // ============================
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// // ============================
// // Section Header Component
// // ============================
// const SectionHeader = () => (
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeInUp}
//     className="text-center max-w-3xl mx-auto mb-20"
//   >
//     <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
//       Our Promise
//     </Badge>

//     <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
//       The Commitments of{" "}
//       <span className="text-gradient-wimbledon">NewGen Strata Services</span>
//     </h2>

//     <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//       We have three fundamental commitments we make to our clients, our professional
//       & trade service providers, and our own staff — and we are ready and willing to
//       be held to these and challenged on them at any time.
//     </p>
//   </motion.div>
// );

// // ============================
// // Interactive Commitment Cards
// // ============================
// const InteractiveCommitmentCard = ({ title, icon: Icon, description, details, colors, index }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.15, duration: 0.6 }}
//       className="relative group"
//     >
//       <motion.div
//         layout
//         onClick={() => setIsExpanded(!isExpanded)}
//         className={`relative cursor-pointer rounded-3xl p-8 shadow-xl overflow-hidden backdrop-blur-sm border border-white/20 transition-all duration-500 ${
//           isExpanded ? 'bg-white' : `bg-gradient-to-br ${colors}`
//         }`}
//         whileHover={{ scale: 1.02, y: -5 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         {/* Animated background effect */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           <motion.div 
//             className="flex items-center justify-between mb-4"
//             layout
//           >
//             <div className={`p-4 rounded-2xl ${isExpanded ? `bg-gradient-to-br ${colors}` : 'bg-white/20'} backdrop-blur-sm`}>
//               <Icon className="h-8 w-8 text-brand-dark" />
//             </div>
//             <motion.div
//               animate={{ rotate: isExpanded ? 45 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Sparkles className="h-6 w-6 text-brand-dark opacity-70" />
//             </motion.div>
//           </motion.div>

//           <motion.h3 layout className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
//             {title}
//           </motion.h3>

//           <motion.p layout className="text-gray-700 leading-relaxed text-lg mb-4">
//             {description}
//           </motion.p>

//           <AnimatePresence>
//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="space-y-3 pt-4 border-t border-gray-200"
//               >
//                 {details.map((detail, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     className="flex items-start gap-3"
//                   >
//                     <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <p className="text-gray-600 text-sm">{detail}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <motion.div layout className="mt-4 text-sm text-gray-500 font-medium">
//             {isExpanded ? 'Click to collapse' : 'Click to explore'}
//           </motion.div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
//       </motion.div>
//     </motion.div>
//   );
// };

// // ============================
// // Advanced Commitments Grid
// // ============================
// const AdvancedCommitmentsGrid = () => {
//   const commitments = [
//     {
//       title: "Capability",
//       icon: Award,
//       description: "Deep knowledge and expertise in all aspects of owners corporation management",
//       details: [
//         "Comprehensive understanding of strata legislation and compliance requirements",
//         "Expert team with decades of combined industry experience",
//         "Continuous professional development and industry certifications",
//         "Proven track record across diverse property portfolios"
//       ],
//       colors: "from-[#c2ff6b] to-[#9ecc52]",
//     },
//     {
//       title: "Reliability",
//       icon: Clock,
//       description: "Consistent, dependable service you can count on every time",
//       details: [
//         "24/7 emergency response and support availability",
//         "Guaranteed response times for all inquiries and issues",
//         "Proactive maintenance scheduling and reminders",
//         "Consistent service delivery across all properties"
//       ],
//       colors: "from-[#ffd700] to-[#ffb700]",
//     },
//     {
//       title: "Integrity",
//       icon: Shield,
//       description: "Honesty and transparency in everything we do",
//       details: [
//         "Clear, transparent pricing with no hidden fees",
//         "Open communication and regular progress updates",
//         "Ethical business practices and vendor management",
//         "Complete accountability in all our operations"
//       ],
//       colors: "from-[#7dd3ff] to-[#4fb3e8]",
//     },
//   ];

//   return (
//     <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
//       {commitments.map((item, index) => (
//         <InteractiveCommitmentCard key={item.title} {...item} index={index} />
//       ))}
//     </div>
//   );
// };

// // ============================
// // Value Orbit Visualization
// // ============================
// const ValueOrbit = () => {
//   const values = [
//     { icon: Award, label: "Capability", color: "from-[#c2ff6b] to-[#9ecc52]", angle: -90 }, // Top
//     { icon: Shield, label: "Integrity", color: "from-[#7dd3ff] to-[#4fb3e8]", angle: 0 }, // Right
//     { icon: Clock, label: "Reliability", color: "from-[#ffd700] to-[#ffb700]", angle: 180 }, // Left
//     { icon: Star, label: "Quality", color: "from-[#ff6bda] to-[#e84fb3]", angle: 90 }, // Bottom
//   ];

//   const radius = 200; // Distance from center

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="relative max-w-4xl mx-auto mb-20 py-16"
//     >
//       {/* Container */}
//       <div className="relative w-full h-[600px] flex items-center justify-center">
//         {/* Orbital rings */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[440px] h-[440px] rounded-full border-2 border-dashed border-primary/30"
//         />
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[400px] h-[400px] rounded-full border-2 border-dotted border-secondary/30"
//         />

//         {/* Center core */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="absolute w-40 h-40 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-2xl flex items-center justify-center z-20 border-4 border-white"
//         >
//           <div className="text-center">
//             <p className="font-bold text-white text-lg leading-tight">
//               OUR<br />CUSTOMERS
//             </p>
//           </div>
//         </motion.div>

//         {/* Orbiting values - positioned in a circle */}
//         {values.map((value, index) => {
//           // Calculate position using trigonometry
//           const angleRad = (value.angle * Math.PI) / 180;
//           const x = Math.cos(angleRad) * radius;
//           const y = Math.sin(angleRad) * radius;

//           return (
//             <motion.div
//               key={value.label}
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               style={{
//                 position: 'absolute',
//                 left: '50%',
//                 top: '50%',
//               }}
//               className="transform -translate-x-1/2 -translate-y-1/2"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.15, rotate: 5 }}
//                 style={{
//                   transform: `translate(${x}px, ${y}px)`,
//                 }}
//                 className={`w-32 h-32 rounded-2xl shadow-xl bg-gradient-to-br ${value.color} flex items-center justify-center backdrop-blur-sm border-4 border-white cursor-pointer group`}
//               >
//                 <div className="text-center">
//                   <value.icon className="h-9 w-9 text-brand-dark mx-auto mb-1 group-hover:scale-110 transition-transform" />
//                   <p className="font-bold text-brand-dark text-sm">{value.label}</p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// };

// // ============================
// // Quote Block Component
// // ============================
// const QuoteBlock = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//     className="relative text-center bg-gradient-to-br from-white via-primary/5 to-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-primary/20 overflow-hidden"
//   >
//     {/* Decorative quote marks */}
//     <div className="absolute top-6 left-6 text-8xl text-primary/10 font-serif leading-none">"</div>
//     <div className="absolute bottom-6 right-6 text-8xl text-primary/10 font-serif leading-none">"</div>

//     <div className="relative z-10">
//       <blockquote className="text-2xl md:text-4xl font-semibold text-brand-dark mb-4 leading-relaxed">
//         The quality is long remembered after the price is forgotten
//       </blockquote>
//       <div className="flex items-center justify-center gap-2 text-gray-600 font-medium text-lg">
//         <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
//         <p>NewGen Strata Services</p>
//         <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
//       </div>
//     </div>
//   </motion.div>
// );

// // ============================
// // Main Component
// // ============================
// export default function OurCommitmentsAbout() {
//   return (
//     <section className="relative section-padding overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
//       {/* Enhanced Decorative Background */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />

//       <div className="container-custom relative z-10">
//         <SectionHeader />
//         <ValueOrbit />
//         <AdvancedCommitmentsGrid />
//         <QuoteBlock />
//       </div>
//     </section>
//   );
// }




// "use client";

// import React, { useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Award, Clock, Shield, Star, CheckCircle2, Sparkles } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // ============================
// // Animation Variants
// // ============================
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// // ============================
// // Section Header Component
// // ============================
// const SectionHeader = () => (
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeInUp}
//     className="text-center max-w-3xl mx-auto mb-20"
//   >
//     <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
//       Our Promise
//     </Badge>

//     <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
//       The Commitments of{" "}
//       <span className="text-gradient-wimbledon">NewGen Strata Services</span>
//     </h2>

//     <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//       We have three fundamental commitments we make to our clients, our professional
//       & trade service providers, and our own staff — and we are ready and willing to
//       be held to these and challenged on them at any time.
//     </p>
//   </motion.div>
// );

// // ============================
// // Interactive Commitment Cards
// // ============================
// const InteractiveCommitmentCard = ({ title, icon: Icon, description, details, colors, index }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.15, duration: 0.6 }}
//       className="relative group"
//     >
//       <motion.div
//         layout
//         onClick={() => setIsExpanded(!isExpanded)}
//         className={`relative cursor-pointer rounded-3xl p-8 shadow-xl overflow-hidden backdrop-blur-sm border border-white/20 transition-all duration-500 ${
//           isExpanded ? 'bg-white' : `bg-gradient-to-br ${colors}`
//         }`}
//         whileHover={{ scale: 1.02, y: -5 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         {/* Animated background effect */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           <motion.div 
//             className="flex items-center justify-between mb-4"
//             layout
//           >
//             <div className={`p-4 rounded-2xl ${isExpanded ? `bg-gradient-to-br ${colors}` : 'bg-white/20'} backdrop-blur-sm`}>
//               <Icon className="h-8 w-8 text-brand-dark" />
//             </div>
//             <motion.div
//               animate={{ rotate: isExpanded ? 45 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Sparkles className="h-6 w-6 text-brand-dark opacity-70" />
//             </motion.div>
//           </motion.div>

//           <motion.h3 layout className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
//             {title}
//           </motion.h3>

//           <motion.p layout className="text-gray-700 leading-relaxed text-lg mb-4">
//             {description}
//           </motion.p>

//           <AnimatePresence>
//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="space-y-3 pt-4 border-t border-gray-200"
//               >
//                 {details.map((detail, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     className="flex items-start gap-3"
//                   >
//                     <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <p className="text-gray-600 text-sm">{detail}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <motion.div layout className="mt-4 text-sm text-gray-500 font-medium">
//             {isExpanded ? 'Click to collapse' : 'Click to explore'}
//           </motion.div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
//       </motion.div>
//     </motion.div>
//   );
// };

// // ============================
// // Advanced Commitments Grid
// // ============================
// const AdvancedCommitmentsGrid = () => {
//   const commitments = [
//     {
//       title: "Capability",
//       icon: Award,
//       description: "Deep knowledge and expertise in all aspects of owners corporation management",
//       details: [
//         "Comprehensive understanding of strata legislation and compliance requirements",
//         "Expert team with decades of combined industry experience",
//         "Continuous professional development and industry certifications",
//         "Proven track record across diverse property portfolios"
//       ],
//       colors: "from-[#c2ff6b] to-[#9ecc52]",
//     },
//     {
//       title: "Reliability",
//       icon: Clock,
//       description: "Consistent, dependable service you can count on every time",
//       details: [
//         "24/7 emergency response and support availability",
//         "Guaranteed response times for all inquiries and issues",
//         "Proactive maintenance scheduling and reminders",
//         "Consistent service delivery across all properties"
//       ],
//       colors: "from-[#ffd700] to-[#ffb700]",
//     },
//     {
//       title: "Integrity",
//       icon: Shield,
//       description: "Honesty and transparency in everything we do",
//       details: [
//         "Clear, transparent pricing with no hidden fees",
//         "Open communication and regular progress updates",
//         "Ethical business practices and vendor management",
//         "Complete accountability in all our operations"
//       ],
//       colors: "from-[#7dd3ff] to-[#4fb3e8]",
//     },
//   ];

//   return (
//     <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
//       {commitments.map((item, index) => (
//         <InteractiveCommitmentCard key={item.title} {...item} index={index} />
//       ))}
//     </div>
//   );
// };

// // ============================
// // Value Orbit Visualization
// // ============================
// const ValueOrbit = () => {
//   const values = [
//     { icon: Award, label: "Capability", color: "from-[#c2ff6b] to-[#9ecc52]", angle: -90 }, // Top
//     { icon: Shield, label: "Integrity", color: "from-[#7dd3ff] to-[#4fb3e8]", angle: 0 }, // Right
//     { icon: Clock, label: "Reliability", color: "from-[#ffd700] to-[#ffb700]", angle: 180 }, // Left
//     { icon: Star, label: "Quality", color: "from-[#ff6bda] to-[#e84fb3]", angle: 90 }, // Bottom
//   ];

//   const radius = 200; // Distance from center

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="relative max-w-4xl mx-auto mb-20 py-16"
//     >
//       {/* Container */}
//       <div className="relative w-full h-[600px] flex items-center justify-center">
//         {/* Orbital rings */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[440px] h-[440px] rounded-full border-2 border-dashed border-primary/30"
//         />
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[400px] h-[400px] rounded-full border-2 border-dotted border-secondary/30"
//         />

//         {/* Orbiting values - positioned in a circle */}
//         {values.map((value, index) => {
//           // Calculate position using trigonometry
//           const angleRad = (value.angle * Math.PI) / 180;
//           const x = Math.cos(angleRad) * radius;
//           const y = Math.sin(angleRad) * radius;

//           return (
//             <motion.div
//               key={value.label}
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               style={{
//                 position: 'absolute',
//                 left: `calc(50% + ${x}px)`,
//                 top: `calc(50% + ${y}px)`,
//                 transform: 'translate(-50%, -50%)',
//                 zIndex: 30,
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.15, rotate: 5 }}
//                 className={`w-32 h-32 rounded-2xl shadow-xl bg-gradient-to-br ${value.color} flex items-center justify-center backdrop-blur-sm border-4 border-white cursor-pointer group relative`}
//               >
//                 <div className="text-center">
//                   <value.icon className="h-9 w-9 text-brand-dark mx-auto mb-1 group-hover:scale-110 transition-transform" />
//                   <p className="font-bold text-brand-dark text-sm">{value.label}</p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           );
//         })}

//         {/* Center core - placed after value boxes so it can be on top */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="absolute w-40 h-40 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-2xl flex items-center justify-center z-10 border-4 border-white"
//         >
//           <div className="text-center">
//             <p className="font-bold text-white text-lg leading-tight">
//               OUR<br />CUSTOMERS
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ============================
// // Quote Block Component
// // ============================
// const QuoteBlock = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//     className="relative text-center bg-gradient-to-br from-white via-primary/5 to-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-primary/20 overflow-hidden"
//   >
//     {/* Decorative quote marks */}
//     <div className="absolute top-6 left-6 text-8xl text-primary/10 font-serif leading-none">"</div>
//     <div className="absolute bottom-6 right-6 text-8xl text-primary/10 font-serif leading-none">"</div>

//     <div className="relative z-10">
//       <blockquote className="text-2xl md:text-4xl font-semibold text-brand-dark mb-4 leading-relaxed">
//         The quality is long remembered after the price is forgotten
//       </blockquote>
//       <div className="flex items-center justify-center gap-2 text-gray-600 font-medium text-lg">
//         <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
//         <p>NewGen Strata Services</p>
//         <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
//       </div>
//     </div>
//   </motion.div>
// );

// // ============================
// // Main Component
// // ============================
// export default function OurCommitmentsAbout() {
//   return (
//     <section className="relative section-padding overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
//       {/* Enhanced Decorative Background */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />

//       <div className="container-custom relative z-10">
//         <SectionHeader />
//         <ValueOrbit />
//         <AdvancedCommitmentsGrid />
//         <QuoteBlock />
//       </div>
//     </section>
//   );
// }


// start here

// "use client";

// import React, { useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Award, Clock, Shield, Star, CheckCircle2, Sparkles } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // ============================
// // Animation Variants
// // ============================
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// // ============================
// // Section Header Component
// // ============================
// const SectionHeader = () => (
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeInUp}
//     className="text-center max-w-3xl mx-auto mb-20"
//   >
//     <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
//       Our Promise
//     </Badge>

//     <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
//       The Commitments of{" "}
//       <span className="text-gradient-wimbledon">NewGen Strata Services</span>
//     </h2>

//     <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//       We have three fundamental commitments we make to our clients, our professional
//       & trade service providers, and our own staff — and we are ready and willing to
//       be held to these and challenged on them at any time.
//     </p>
//   </motion.div>
// );

// // ============================
// // Interactive Commitment Cards
// // ============================
// const InteractiveCommitmentCard = ({ title, icon: Icon, description, details, colors, index }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.15, duration: 0.6 }}
//       className="relative group"
//     >
//       <motion.div
//         layout
//         onClick={() => setIsExpanded(!isExpanded)}
//         className={`relative cursor-pointer rounded-3xl p-8 shadow-xl overflow-hidden backdrop-blur-sm border border-white/20 transition-all duration-500 ${isExpanded ? 'bg-white' : `bg-gradient-to-br ${colors}`
//           }`}
//         whileHover={{ scale: 1.02, y: -5 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         {/* Animated background effect */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           <motion.div
//             className="flex items-center justify-between mb-4"
//             layout
//           >
//             <div className={`p-4 rounded-2xl ${isExpanded ? `bg-gradient-to-br ${colors}` : 'bg-white/20'} backdrop-blur-sm`}>
//               <Icon className="h-8 w-8 text-brand-dark" />
//             </div>
//             <motion.div
//               animate={{ rotate: isExpanded ? 45 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Sparkles className="h-6 w-6 text-brand-dark opacity-70" />
//             </motion.div>
//           </motion.div>

//           <motion.h3 layout className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
//             {title}
//           </motion.h3>

//           <motion.p layout className="text-gray-700 leading-relaxed text-lg mb-4">
//             {description}
//           </motion.p>

//           <AnimatePresence>
//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="space-y-3 pt-4 border-t border-gray-200"
//               >
//                 {details.map((detail, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     className="flex items-start gap-3"
//                   >
//                     <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <p className="text-gray-600 text-sm">{detail}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <motion.div layout className="mt-4 text-sm text-gray-500 font-medium">
//             {isExpanded ? 'Click to collapse' : 'Click to explore'}
//           </motion.div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
//       </motion.div>
//     </motion.div>
//   );
// };

// // ============================
// // Advanced Commitments Grid
// // ============================
// const AdvancedCommitmentsGrid = () => {
//   const commitments = [
//     {
//       title: "Capability",
//       icon: Award,
//       description: "Deep knowledge and expertise in all aspects of owners corporation management",
//       details: [
//         "Comprehensive understanding of strata legislation and compliance requirements",
//         "Expert team with decades of combined industry experience",
//         "Continuous professional development and industry certifications",
//         "Proven track record across diverse property portfolios"
//       ],
//       colors: "from-[#c2ff6b] to-[#9ecc52]",
//     },
//     {
//       title: "Reliability",
//       icon: Clock,
//       description: "Consistent, dependable service you can count on every time",
//       details: [
//         "24/7 emergency response and support availability",
//         "Guaranteed response times for all inquiries and issues",
//         "Proactive maintenance scheduling and reminders",
//         "Consistent service delivery across all properties"
//       ],
//       colors: "from-[#ffd700] to-[#ffb700]",
//     },
//     {
//       title: "Integrity",
//       icon: Shield,
//       description: "Honesty and transparency in everything we do",
//       details: [
//         "Clear, transparent pricing with no hidden fees",
//         "Open communication and regular progress updates",
//         "Ethical business practices and vendor management",
//         "Complete accountability in all our operations"
//       ],
//       colors: "from-[#7dd3ff] to-[#4fb3e8]",
//     },
//   ];

//   return (
//     <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
//       {commitments.map((item, index) => (
//         <InteractiveCommitmentCard key={item.title} {...item} index={index} />
//       ))}
//     </div>
//   );
// };

// // ============================
// // Value Orbit Visualization
// // ============================
// const ValueOrbit = () => {
//   const values = [
//     // { icon: Award, label: "Capability", color: "from-[#c2ff6b] to-[#9ecc52]", angle: 270 }, // Top
//     // { icon: Shield, label: "Integrity", color: "from-[#7dd3ff] to-[#4fb3e8]", angle: 0 }, // Right
//     // { icon: Star, label: "Quality", color: "from-[#ff6bda] to-[#e84fb3]", angle: 90 }, // Bottom
//     // { icon: Clock, label: "Reliability", color: "from-[#ffd700] to-[#ffb700]", angle: 180 }, // Left

//     { icon: Award, label: "Capability", color: "from-[#c2ff6b] to-[#9ecc52]", angle: -90 }, // Top
//     { icon: Shield, label: "Integrity", color: "from-[#7dd3ff] to-[#4fb3e8]", angle: 0 }, // Right
//     { icon: Clock, label: "Reliability", color: "from-[#ffd700] to-[#ffb700]", angle: 180 }, // Left
//     { icon: Star, label: "Quality", color: "from-[#ff6bda] to-[#e84fb3]", angle: 90 }, // Bottom
//   ];

//   const radius = 220; // Distance from center

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="relative max-w-4xl mx-auto mb-20 py-16"
//     >
//       {/* Container */}
//       <div className="relative w-full h-[600px] flex items-center justify-center">
//         {/* Orbital rings */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[440px] h-[440px] rounded-full border-2 border-dashed border-primary/30"
//         />
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[400px] h-[400px] rounded-full border-2 border-dotted border-secondary/30"
//         />

//         {/* Orbiting values - positioned in a circle */}
//         {values.map((value, index) => {
//           // Calculate position using trigonometry
//           const angleRad = (value.angle * Math.PI) / 180;
//           const x = Math.cos(angleRad) * radius;
//           const y = Math.sin(angleRad) * radius;

//           return (
//             <motion.div
//               key={value.label}
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               style={{
//                 position: 'absolute',
//                 left: `calc(43% + ${x}px)`,
//                 top: `calc(39% + ${y}px)`,
//                 transform: 'translate(-50%, -50%)',
//                 zIndex: 30,
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.15, rotate: 5 }}
//                 className={`w-32 h-32 rounded-2xl shadow-xl bg-gradient-to-br ${value.color} flex items-center justify-center backdrop-blur-sm border-4 border-white cursor-pointer group relative`}
//               >
//                 <div className="text-center">
//                   <value.icon className="h-9 w-9 text-brand-dark mx-auto mb-1 group-hover:scale-110 transition-transform" />
//                   <p className="font-bold text-brand-dark text-sm">{value.label}</p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           );
//         })}

//         {/* Center core - placed after value boxes so it can be on top */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="absolute w-40 h-40 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-2xl flex items-center justify-center z-10 border-4 border-white"
//         >
//           <div className="text-center">
//             <p className="font-bold text-white text-lg leading-tight">
//               OUR<br />CUSTOMERS
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ============================
// // Quote Block Component
// // ============================
// const QuoteBlock = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//     className="relative text-center bg-gradient-to-br from-white via-primary/5 to-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-primary/20 overflow-hidden"
//   >
//     {/* Decorative quote marks */}
//     <div className="absolute top-6 left-6 text-8xl text-primary/10 font-serif leading-none">"</div>
//     <div className="absolute bottom-6 right-6 text-8xl text-primary/10 font-serif leading-none">"</div>

//     <div className="relative z-10">
//       <blockquote className="text-2xl md:text-4xl font-semibold text-brand-dark mb-4 leading-relaxed">
//         The quality is long remembered after the price is forgotten
//       </blockquote>
//       <div className="flex items-center justify-center gap-2 text-gray-600 font-medium text-lg">
//         <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
//         <p>NewGen Strata Services</p>
//         <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
//       </div>
//     </div>
//   </motion.div>
// );

// // ============================
// // Main Component
// // ============================
// export default function OurCommitmentsAbout() {
//   return (
//     <section className="relative section-padding overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
//       {/* Enhanced Decorative Background */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />

//       <div className="container-custom relative z-10">
//         <SectionHeader />
//         <ValueOrbit />
//         <AdvancedCommitmentsGrid />
//         <QuoteBlock />
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Shield, Star, CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// Types
// ==========================================
interface CommitmentItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  details: string[];
  colors: string;
}

interface OrbitValue {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  angle: number;
}

// ============================
// Animation Variants
// ============================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ============================
// Section Header Component
// ============================
const SectionHeader = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="text-center max-w-3xl mx-auto mb-20"
  >
    <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
      Our Promise
    </Badge>

    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
      The Commitments of{" "}
      <span className="text-gradient-wimbledon">NewGen Strata Services</span>
    </h2>

    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
      We have three fundamental commitments we make to our clients, our professional
      & trade service providers, and our own staff — and we are ready and willing to
      be held to these and challenged on them at any time.
    </p>
  </motion.div>
);

// ============================
// Interactive Commitment Cards
// ============================
// const InteractiveCommitmentCard = ({ title, icon: Icon, description, details, colors, index }) => {
const InteractiveCommitmentCard = ({
  title,
  icon: Icon,
  description,
  details,
  colors,
  index,
}: CommitmentItem & { index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative group"
    >
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative cursor-pointer rounded-3xl p-8 shadow-xl overflow-hidden backdrop-blur-sm border border-white/20 transition-all duration-500 ${isExpanded ? 'bg-white' : `bg-gradient-to-br ${colors}`
          }`}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="flex items-center justify-between mb-4"
            layout
          >
            <div className={`p-4 rounded-2xl ${isExpanded ? `bg-gradient-to-br ${colors}` : 'bg-white/20'} backdrop-blur-sm`}>
              <Icon className="h-8 w-8 text-brand-dark" />
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="h-6 w-6 text-brand-dark opacity-70" />
            </motion.div>
          </motion.div>

          <motion.h3 layout className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
            {title}
          </motion.h3>

          <motion.p layout className="text-gray-700 leading-relaxed text-lg mb-4">
            {description}
          </motion.p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 pt-4 border-t border-gray-200"
              >
                {details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{detail}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div layout className="mt-4 text-sm text-gray-500 font-medium">
            {isExpanded ? 'Click to collapse' : 'Click to explore'}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </motion.div>
    </motion.div>
  );
};

// ============================
// Advanced Commitments Grid
// ============================
const AdvancedCommitmentsGrid = () => {
  const commitments = [
    {
      title: "Capability",
      icon: Award,
      description: "Deep knowledge and expertise in all aspects of owners corporation management",
      details: [
        "Comprehensive understanding of strata legislation and compliance requirements",
        "Expert team with decades of combined industry experience",
        "Continuous professional development and industry certifications",
        "Proven track record across diverse property portfolios"
      ],
      colors: "from-[#c2ff6b] to-[#9ecc52]",
    },
    {
      title: "Reliability",
      icon: Clock,
      description: "Consistent, dependable service you can count on every time",
      details: [
        "24/7 emergency response and support availability",
        "Guaranteed response times for all inquiries and issues",
        "Proactive maintenance scheduling and reminders",
        "Consistent service delivery across all properties"
      ],
      colors: "from-[#ffd700] to-[#ffb700]",
    },
    {
      title: "Integrity",
      icon: Shield,
      description: "Honesty and transparency in everything we do",
      details: [
        "Clear, transparent pricing with no hidden fees",
        "Open communication and regular progress updates",
        "Ethical business practices and vendor management",
        "Complete accountability in all our operations"
      ],
      colors: "from-[#7dd3ff] to-[#4fb3e8]",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
      {commitments.map((item, index) => (
        <InteractiveCommitmentCard key={item.title} {...item} index={index} />
      ))}
    </div>
  );
};

// ============================
// Value Orbit Visualization
// ============================
const ValueOrbit = () => {
  // const values = [
  const values: OrbitValue[] = [
    { icon: Award, label: "Capability", color: "from-[#c2ff6b] to-[#9ecc52]", angle: 270 }, // Top
    { icon: Shield, label: "Integrity", color: "from-[#7dd3ff] to-[#4fb3e8]", angle: 0 }, // Right
    { icon: Star, label: "Quality", color: "from-[#ff6bda] to-[#e84fb3]", angle: 90 }, // Bottom
    { icon: Clock, label: "Reliability", color: "from-[#ffd700] to-[#ffb700]", angle: 180 }, // Left
  ];
  const [positions, setPositions] = React.useState({
    left: 43,
    top: 39,
    radius: 220,
  });

  React.useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setPositions({
          left: 40,
          top: 41,
          radius: 130,
        });
      } else if (width < 768) {
        setPositions({
          left: 42,
          top: 40,
          radius: 170,
        });
      } else {
        setPositions({
          left: 43,
          top: 39,
          radius: 220,
        });
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative max-w-4xl mx-auto mb-20 py-8 md:py-16 px-4"
    >
      {/* Container - responsive sizing */}
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
        {/* Orbital rings - responsive sizing */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] rounded-full border-2 border-dashed border-primary/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] md:w-[400px] md:h-[400px] rounded-full border-2 border-dotted border-secondary/30"
        />

        {/* Orbiting values - positioned in a circle */}
        {values.map((value, index) => {
          // Responsive radius calculation
          // const getRadius = () => {
          //   if (typeof window !== 'undefined') {
          //     if (window.innerWidth < 640) return 130; // mobile
          //     if (window.innerWidth < 768) return 170; // tablet
          //     return 220; // desktop
          //   }
          //   return 220; // default
          // };


          const { left, top, radius } = positions;
          const angleRad = (value.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              // style={{
              //   position: 'absolute',
              //   left: `calc(${leftPos}% + ${x}px)`,
              //   top: `calc(${topPos}% + ${y}px)`,
              //   transform: 'translate(-50%, -50%)',
              //   zIndex: 30,
              // }}
              style={{
                position: 'absolute',
                left: `calc(${left}% + ${x}px)`,
                top: `calc(${top}% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: 30,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl md:rounded-2xl shadow-xl bg-gradient-to-br ${value.color} flex items-center justify-center backdrop-blur-sm border-2 md:border-4 border-white cursor-pointer group relative`}
              >
                <div className="text-center">
                  <value.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 text-brand-dark mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-brand-dark text-xs sm:text-xs md:text-sm">{value.label}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Center core - responsive sizing */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-2xl flex items-center justify-center z-10 border-2 md:border-4 border-white"
        >
          <div className="text-center">
            <p className="font-bold text-white text-sm sm:text-base md:text-lg leading-tight">
              OUR<br />CUSTOMERS
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ============================
// Quote Block Component
// ============================
const QuoteBlock = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative text-center bg-gradient-to-br from-white via-primary/5 to-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-primary/20 overflow-hidden"
  >
    {/* Decorative quote marks */}
    <div className="absolute top-6 left-6 text-8xl text-primary/10 font-serif leading-none">&quot;</div>
    <div className="absolute bottom-6 right-6 text-8xl text-primary/10 font-serif leading-none">&quot;</div>

    <div className="relative z-10">
      <blockquote className="text-2xl md:text-4xl font-semibold text-brand-dark mb-4 leading-relaxed">
        The quality is long remembered after the price is forgotten
      </blockquote>
      <div className="flex items-center justify-center gap-2 text-gray-600 font-medium text-lg">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
        <p>NewGen Strata Services</p>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
      </div>
    </div>
  </motion.div>
);

// ============================
// Main Component
// ============================
export default function OurCommitmentsAbout() {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeader />
        <ValueOrbit />
        <AdvancedCommitmentsGrid />
        <QuoteBlock />
      </div>
    </section>
  );
}