// // src/components/sections/Founders.tsx

// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { 
//   Briefcase, 
//   Award, 
//   Users, 
//   TrendingUp,
//   ArrowRight,
//   Quote,
//   Star,
//   Building2,
//   Target
// } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const founders = [
//   {
//     name: 'Kevin Fuller',
//     role: 'Co-Founder & Managing Director',
//     image: '/images/founders/kevin-fuller.jpg',
//     experience: '35+ years',
//     expertise: ['Business Leadership', 'Strategic Planning', 'Operations Management', 'Client Relations'],
//     description: 'Kevin brings decades of business leadership experience across various industries, from small startups to large corporations. His hands-on approach and commitment to excellence drives our operational strategy.',
//     highlights: [
//       'Successfully led multiple business transformations',
//       'Expert in operational efficiency and client satisfaction',
//       'Proven track record in building high-performing teams',
//       'Specializes in strategic business development'
//     ]
//   },
//   {
//     name: 'Sam Disanayaka',
//     role: 'Co-Founder & Director of Operations',
//     image: '/images/founders/sam-disanayaka.jpg',
//     experience: '35+ years',
//     expertise: ['Financial Management', 'Process Innovation', 'Technology Integration', 'Quality Assurance'],
//     description: 'Sam\'s extensive experience in financial management and process innovation ensures our clients receive the highest quality service delivery through cutting-edge technology and streamlined processes.',
//     highlights: [
//       'Expert in financial systems and compliance',
//       'Pioneered technology integration in service delivery',
//       'Focused on continuous process improvement',
//       'Champion of quality assurance and customer satisfaction'
//     ]
//   }
// ]

// const stats = [
//   { icon: Award, label: 'Combined Experience', value: '70+ Years' },
//   { icon: Building2, label: 'Industries Served', value: '15+' },
//   { icon: Users, label: 'Teams Built', value: '50+' },
//   { icon: TrendingUp, label: 'Success Rate', value: '98%' },
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function Founders() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-brand-neutral/20 via-white to-primary/5">
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
//               Meet Our Founders
//             </Badge>
//           </motion.div>
//           <motion.h2 
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
//           >
//             Experience and Expertise 
//             <span className="text-gradient-wimbledon"> You Can Trust</span>
//           </motion.h2>
//           <motion.p 
//             variants={fadeInUp}
//             className="text-lg text-gray-600 leading-relaxed"
//           >
//             Kevin Fuller and Sam Disanayaka bring more than 70 years of combined business 
//             experience, having worked together on various successful projects across multiple corporations.
//           </motion.p>
//         </motion.div>

//         {/* Founders Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           {founders.map((founder, index) => (
//             <motion.div
//               key={founder.name}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeInUp}
//               transition={{ delay: index * 0.2 }}
//             >
//               <Card className="card-wimbledon h-full overflow-hidden group hover-lift">
//                 <div className="relative h-64 overflow-hidden">
//                   <Image
//                     src={founder.image}
//                     alt={founder.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <div className="text-2xl font-bold">{founder.name}</div>
//                     <div className="text-brand-accent">{founder.role}</div>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <Badge className="bg-white/20 text-white border-white/30">
//                       {founder.experience}
//                     </Badge>
//                   </div>
//                 </div>
                
//                 <CardContent className="p-6">
//                   <div className="space-y-6">
//                     <p className="text-gray-600 leading-relaxed">
//                       {founder.description}
//                     </p>
                    
//                     <div>
//                       <h4 className="font-semibold text-brand-dark mb-3">Areas of Expertise</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {founder.expertise.map((skill, idx) => (
//                           <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
//                             {skill}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h4 className="font-semibold text-brand-dark mb-3">Key Highlights</h4>
//                       <ul className="space-y-2">
//                         {founder.highlights.map((highlight, idx) => (
//                           <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
//                             <Star className="h-4 w-4 text-brand-accent mt-0.5 flex-shrink-0" />
//                             <span>{highlight}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-4 gap-6 mb-16"
//         >
//           {stats.map((stat, index) => {
//             const IconComponent = stat.icon
//             return (
//               <motion.div key={stat.label} variants={fadeInUp}>
//                 <Card className="card-wimbledon text-center p-6 hover-lift">
//                   <IconComponent className="h-10 w-10 text-primary mx-auto mb-4" />
//                   <div className="text-2xl lg:text-3xl font-bold text-brand-dark mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-600">{stat.label}</div>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* Quote Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="text-center mb-16"
//         >
//           <Card className="bg-gradient-wimbledon text-white p-8 lg:p-12 rounded-2xl">
//             <Quote className="h-12 w-12 text-brand-accent mx-auto mb-6" />
//             <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
//               "At the time of our decision to enter the Owners Corporation Management 
//               business and form NewGen Strata Services, we were both actively involved 
//               in existing businesses whose resources can now be brought to support our 
//               new venture."
//             </blockquote>
//             <div className="text-brand-accent font-semibold">
//               Kevin Fuller & Sam Disanayaka, Founders
//             </div>
//           </Card>
//         </motion.div>

//         {/* Experience Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
//         >
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div variants={fadeInUp}>
//               <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6">
//                 Diverse Business Background
//               </h3>
//               <div className="space-y-4">
//                 <p className="text-gray-600 leading-relaxed">
//                   Both founders have been involved in a variety of businesses ranging from 
//                   small startups to large corporations, bringing invaluable hands-on experience 
//                   and many years in business leadership roles.
//                 </p>
//                 <p className="text-gray-600 leading-relaxed">
//                   Their collaborative approach has been proven across several different 
//                   corporations and projects, making them uniquely qualified to understand 
//                   and address the complex needs of owners corporations.
//                 </p>
//                 <div className="flex items-center space-x-4 pt-4">
//                   <div className="flex items-center space-x-2">
//                     <Target className="h-5 w-5 text-primary" />
//                     <span className="text-sm text-gray-600">Strategic Vision</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Briefcase className="h-5 w-5 text-primary" />
//                     <span className="text-sm text-gray-600">Practical Experience</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
//                 <h4 className="text-xl font-semibold text-brand-dark mb-4">
//                   Ready to Leverage Our Expertise?
//                 </h4>
//                 <p className="text-gray-600 mb-6">
//                   Discover how our founders' combined experience can benefit your 
//                   owners corporation. Schedule a consultation to discuss your specific needs.
//                 </p>
//                 <Button asChild className="btn-wimbledon w-full">
//                   <Link href="/contact">
//                     Schedule a Meeting
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// src/components/sections/Founders.tsx

"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const founders = [
  {
    name: 'Kevin Fuller',
    role: 'Co-Founder & Managing Director',
    experience: '35+ Years',
    expertise: ['Business Leadership', 'Strategic Planning', 'Operations Management', 'Client Relations'],
    description: 'Kevin brings decades of business leadership experience from startups to large corporations. His commitment to excellence and hands-on approach drives our operational strategy.',
    image: '/images/about/kevin.jpg',
  },
  {
    name: 'Sam Disanayaka',
    role: 'Co-Founder & Director of Operations',
    experience: '35+ Years',
    expertise: ['Financial Management', 'Process Innovation', 'Technology Integration', 'Quality Assurance'],
    description: 'Sam\'s expertise in financial management and technology ensures our clients receive cutting-edge service through streamlined, efficient processes.',
    image: '/images/about/sam.jpg',
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function Founders() {
  return (
    <section className="section-padding bg-white" id='founders'>
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Our Founders
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            Experience You Can{" "}
            <span className="text-gradient-wimbledon">Count On</span>
          </h2>
          <p className="text-lg text-gray-600">
            Kevin Fuller and Sam Disanayaka bring 70+ years of combined business experience 
            across various industries, from startups to large corporations.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    {/* <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-2xl">
                      {founder.name.charAt(0)}
                    </div> */}
                                        <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">

                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Badge className="bg-primary/10 text-primary">
                      {founder.experience}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-1">
                        {founder.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {founder.role}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {founder.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-brand-dark mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary text-white p-8 lg:p-12 rounded-2xl text-center"
        >
          <Quote className="h-12 w-12 text-white/40 mx-auto mb-6" />
          <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed max-w-4xl mx-auto">
            &quot;We&apos;re committed to bringing a new level of support, respect, and excellence 
            to owners corporation management using the latest technology and proven business principles.&quot;
          </blockquote>
          <div className="font-semibold">
            Kevin Fuller & Sam Disanayaka
          </div>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="btn-wimbledon">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}