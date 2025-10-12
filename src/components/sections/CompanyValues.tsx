// // src/components/sections/CompanyValues.tsx

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { 
//   Shield, 
//   Heart, 
//   Users, 
//   Zap, 
//   Globe, 
//   Award,
//   ArrowRight,
//   CheckCircle2,
//   Lightbulb,
//   HandHeart
// } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const coreValues = [
//   {
//     icon: Shield,
//     title: 'Transparency & Trust',
//     description: 'We believe in complete transparency in all our dealings, ensuring our clients always know exactly what\'s happening with their property management.',
//     benefits: [
//       'Open communication channels',
//       'Regular detailed reporting',
//       'Clear fee structures',
//       'Accessible documentation'
//     ]
//   },
//   {
//     icon: Heart,
//     title: 'Customer-Centric Service',
//     description: 'Our clients are at the heart of everything we do. We go beyond meeting expectations to truly delight those we serve.',
//     benefits: [
//       'Personalized service approach',
//       '24/7 support availability',
//       'Proactive problem solving',
//       'Regular satisfaction surveys'
//     ]
//   },
//   {
//     icon: Award,
//     title: 'Excellence in Delivery',
//     description: 'We maintain the highest standards of service delivery through continuous improvement and attention to detail.',
//     benefits: [
//       'Quality assurance processes',
//       'Certified professionals',
//       'Best practice methodologies',
//       'Continuous staff training'
//     ]
//   },
//   {
//     icon: Users,
//     title: 'Collaborative Partnership',
//     description: 'We work as partners with our clients, fostering collaborative relationships built on mutual respect and shared goals.',
//     benefits: [
//       'Joint decision making',
//       'Regular stakeholder meetings',
//       'Shared responsibility model',
//       'Long-term relationship focus'
//     ]
//   },
//   {
//     icon: Zap,
//     title: 'Innovation & Technology',
//     description: 'We embrace cutting-edge technology and innovative solutions to enhance service delivery and client experience.',
//     benefits: [
//       'Digital service platforms',
//       'Automated reporting systems',
//       'Mobile accessibility',
//       'Data-driven insights'
//     ]
//   },
//   {
//     icon: Globe,
//     title: 'Community Impact',
//     description: 'We believe in making a positive impact on the communities we serve, creating better living environments for all residents.',
//     benefits: [
//       'Sustainable practices',
//       'Community engagement',
//       'Local service providers',
//       'Environmental responsibility'
//     ]
//   }
// ]

// const valueStats = [
//   { 
//     icon: HandHeart, 
//     value: '100%', 
//     label: 'Client Satisfaction Focus',
//     description: 'Every decision is made with client satisfaction in mind'
//   },
//   { 
//     icon: CheckCircle2, 
//     value: '24/7', 
//     label: 'Support Availability',
//     description: 'Round-the-clock support when you need it most'
//   },
//   { 
//     icon: Lightbulb, 
//     value: '15+', 
//     label: 'Innovation Initiatives',
//     description: 'Continuous improvement projects launched annually'
//   },
//   { 
//     icon: Users, 
//     value: '98%', 
//     label: 'Partnership Success Rate',
//     description: 'Long-term client relationships built on trust'
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

// export function CompanyValues() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-white via-brand-neutral/10 to-primary/5">
//       <div className="container-custom">
//         {/* Section Header */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-4xl mx-auto mb-16"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
//               Our Core Values
//             </Badge>
//           </motion.div>
//           <motion.h2 
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
//           >
//             Values That Drive 
//             <span className="text-gradient-wimbledon"> Our Success</span>
//           </motion.h2>
//           <motion.p 
//             variants={fadeInUp}
//             className="text-lg text-gray-600 leading-relaxed"
//           >
//             Our company values aren't just words on a wall – they're the principles that guide every 
//             interaction, decision, and service we provide to our clients.
//           </motion.p>
//         </motion.div>

//         {/* Values Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
//         >
//           {coreValues.map((value, index) => {
//             const IconComponent = value.icon
//             return (
//               <motion.div key={value.title} variants={fadeInUp}>
//                 <Card className="card-wimbledon h-full group hover-lift">
//                   <CardContent className="p-6">
//                     <div className="mb-6">
//                       <div className="flex items-center space-x-4 mb-4">
//                         <div className="bg-gradient-wimbledon p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
//                           <IconComponent className="h-6 w-6 text-white" />
//                         </div>
//                         <h3 className="text-xl font-semibold text-brand-dark">{value.title}</h3>
//                       </div>
//                       <p className="text-gray-600 leading-relaxed mb-4">
//                         {value.description}
//                       </p>
//                     </div>
                    
//                     <div className="space-y-2">
//                       <h4 className="font-medium text-brand-dark text-sm uppercase tracking-wide mb-3">
//                         How We Deliver
//                       </h4>
//                       {value.benefits.map((benefit, idx) => (
//                         <div key={idx} className="flex items-center space-x-2">
//                           <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
//                           <span className="text-sm text-gray-600">{benefit}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//         >
//           {valueStats.map((stat, index) => {
//             const IconComponent = stat.icon
//             return (
//               <motion.div key={stat.label} variants={fadeInUp}>
//                 <Card className="bg-gradient-wimbledon text-white p-6 text-center hover-lift">
//                   <IconComponent className="h-10 w-10 text-brand-accent mx-auto mb-4" />
//                   <div className="text-3xl font-bold mb-2">{stat.value}</div>
//                   <div className="font-semibold mb-2">{stat.label}</div>
//                   <div className="text-sm text-white/80">{stat.description}</div>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
//         >
//           <div className="max-w-3xl mx-auto">
//             <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
//               Experience Values-Driven Service
//             </h3>
//             <p className="text-gray-600 text-lg mb-8">
//               Our values aren't just principles – they're promises. Experience the difference 
//               that values-driven service can make for your owners corporation.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" className="btn-wimbledon">
//                 <Link href="/services">
//                   Explore Our Services
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="btn-wimbledon-outline">
//                 <Link href="/contact">Get in Touch</Link>
//               </Button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// src/components/sections/CompanyValues.tsx

// "use client"

// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { Shield, Heart, Users, Zap, Award, Target, ArrowRight, CheckCircle2, Handshake } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const coreValues = [
//   {
//     icon: Shield,
//     title: 'Transparency & Trust',
//     description: 'Complete openness in all dealings with clear reporting and accessible documentation.',
//     color: 'from-blue-500 to-cyan-500'
//   },
//   {
//     icon: Heart,
//     title: 'Customer Delight',
//     description: 'Going beyond satisfaction to truly delight our clients with exceptional service.',
//     color: 'from-pink-500 to-rose-500'
//   },
//   {
//     icon: Award,
//     title: 'Excellence',
//     description: 'Maintaining the highest standards through continuous improvement and attention to detail.',
//     color: 'from-amber-500 to-orange-500'
//   },
//   {
//     icon: Users,
//     title: 'Collaborative Partnership',
//     description: 'Working together as partners, fostering mutual respect and shared goals.',
//     color: 'from-purple-500 to-indigo-500'
//   },
//   {
//     icon: Zap,
//     title: 'Innovation',
//     description: 'Embracing modern technology and innovative solutions to enhance service delivery.',
//     color: 'from-yellow-500 to-lime-500'
//   },
//   {
//     icon: Target,
//     title: 'Results Focused',
//     description: 'Committed to delivering measurable outcomes that matter to our clients.',
//     color: 'from-emerald-500 to-teal-500'
//   }
// ]

// const principles = [
//   {
//     icon: Target,
//     title: 'Honesty & Integrity',
//     description: 'To operate with honesty and integrity at all times.',
//      color: 'from-blue-500 to-cyan-500'
//   },
//   {
//     icon: Award,
//     title: 'Excellence',
//     description: 'To achieve a standard of excellence in everything we do.',
//      color: 'from-pink-500 to-rose-500'
//   },
//   {
//     icon: Heart,
//     title: 'Customer Delight',
//     description: 'To strive to "delight our customers".',
//        color: 'from-amber-500 to-orange-500'
//   },
//   {
//     icon: Handshake,
//     title: 'Mutual Respect',
//     description: 'To establish an environment of mutual respect, transparency and cooperation with every Owners Corporation we serve.',
//         color: 'from-emerald-500 to-teal-500'
//   },
//   {
//     icon: Users,
//     title: 'Professional Service Providers',
//     description: 'To provide our client organisations with a high standard of reliable, trustworthy and professionally competent trade service providers.',
//      color: 'from-purple-500 to-indigo-500'
//   },
//     {
//     icon: Zap,
//     title: 'Innovation',
//     description: 'Embracing modern technology and innovative solutions to enhance service delivery.',
//     color: 'from-yellow-500 to-lime-500'
//   },
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } }
// }

// export function CompanyValues() {
//   return (
//     <section className="relative section-padding overflow-hidden">
//       {/* Animated background with gradient mesh */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-dark to-black">
//         {/* Animated orbs */}
//         <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-3xl animate-pulse delay-500" />
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 opacity-5" style={{
//         backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
//                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//         backgroundSize: '50px 50px'
//       }} />

//       <div className="container-custom relative z-10">
//         {/* Header */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <motion.div variants={fadeInUp}>
//             <Badge className="bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4">
//               Our Core Values
//             </Badge>
//           </motion.div>
//           <motion.h2 
//             variants={fadeInUp}
//             className="text-3xl md:text-5xl font-heading leading-tight  font-bold text-white mb-6"
//           >
//             Principles That Drive{" "} <br />
//             <span className="text-primary">Everything We Do</span>
//           </motion.h2>
//           <motion.p 
//             variants={fadeInUp}
//             className="text-lg text-gray-300 leading-relaxed"
//           >
//             Our values guide every interaction, decision, and service we provide to our clients.
//           </motion.p>
//         </motion.div>

//         {/* Values Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={staggerContainer}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
//         >
//           {principles.map((value) => {
//             const IconComponent = value.icon
//             return (
//               <motion.div key={value.title} variants={fadeInUp}>
//                 <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:-translate-y-2">
//                   <CardContent className="p-6">
//                     <div className="flex flex-col space-y-4">
//                       {/* Icon with gradient */}
//                       <div className={`bg-gradient-to-br ${value.color} p-4 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
//                         <IconComponent className="h-8 w-8 text-white" />
//                       </div>
                      
//                       {/* Content */}
//                       <div>
//                         <h3 className="text-xl font-semibold text-white mb-2">
//                           {value.title}
//                         </h3>
//                         <p className="text-gray-300 leading-relaxed">
//                           {value.description}
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// src/components/sections/WhoWeHelp.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Building2, 
  Factory, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Building,
  UserCheck
} from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const propertyTypes = [
  {
    id: 'residential',
    icon: Building2,
    title: 'Residential Blocks',
    subtitle: 'Apartment complexes, townhouses & villa units',
    description: 'NewGen Strata Services provides outstanding services for residential townhouses, villa units and apartment blocks. We aim to provide a win/win/win so tenants and occupiers have a pleasant living environment, executive committees can deliver exceptional service and building value is maximised.',
    features: [
      'Comprehensive maintenance management for common areas',
      'Proactive communication with residents and committee members',
      '24/7 emergency response for urgent property issues',
      'Financial management with detailed transparent reporting',
      'AGM planning and execution support',
      'Compliance with strata legislation and regulations'
    ],
    image: '/images/about/residential-blocks.jpg',
    color: 'from-blue-500 to-cyan-500',
    stats: [
      { label: 'Properties Managed', value: '1,200+' },
      { label: 'Average Units', value: '45' }
    ],
    cta: 'Get Free Consultation'
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Complexes',
    subtitle: 'Warehouses, factories & commercial spaces',
    description: 'Specialized management for industrial and commercial strata properties. We understand the unique challenges of managing industrial complexes including warehousing facilities, manufacturing sites, and commercial office parks with specific operational requirements.',
    features: [
      'Heavy-duty maintenance and infrastructure management',
      'Commercial tenant liaison and coordination',
      'Loading dock and access management systems',
      'Industrial safety compliance and reporting',
      'Multi-tenancy coordination and dispute resolution',
      'Capital works planning for industrial facilities'
    ],
    image: '/images/about/industrial-complexes.jpg',
    color: 'from-slate-500 to-gray-600',
    stats: [
      { label: 'Industrial Sites', value: '150+' },
      { label: 'Avg Site Size', value: '8,500m²' }
    ],
    cta: 'Discuss Your Property'
  },
  {
    id: 'new-developments',
    icon: Sparkles,
    title: 'New Developments',
    subtitle: 'Newly built properties & handover support',
    description: 'Expert guidance for new developments transitioning from developer control to owner management. We provide comprehensive support during the critical handover period and establish strong foundations for long-term successful management.',
    features: [
      'Developer handover coordination and documentation review',
      'Initial committee establishment and training',
      'Defect identification and resolution management',
      'Setup of financial systems and reserve funds',
      'Creation of building rules and governance framework',
      'First-year warranty claim management'
    ],
    image: '/images/about/new-developments.jpg',
    color: 'from-emerald-500 to-teal-500',
    stats: [
      { label: 'New Handovers', value: '85+' },
      { label: 'Success Rate', value: '100%' }
    ],
    cta: 'Plan Your Handover'
  },
  {
    id: 'self-management',
    icon: UserCheck,
    title: 'Self-Management Support',
    subtitle: 'Assistance for self-managed properties',
    description: 'Flexible support services for owners corporations that prefer to self-manage but need professional assistance with specific aspects. We provide tailored services to complement your existing management structure.',
    features: [
      'Consulting services for complex decisions and issues',
      'Financial management and bookkeeping services',
      'AGM preparation, attendance and minute-taking',
      'Compliance audits and legislative guidance',
      'Access to our pre-vetted contractor network',
      'Training for committee members on their responsibilities'
    ],
    image: '/images/about/self-management-support.jpg',
    color: 'from-purple-500 to-indigo-500',
    stats: [
      { label: 'Supported Properties', value: '200+' },
      { label: 'Consultation Hours', value: '5,000+' }
    ],
    cta: 'Explore Support Options'
  },
  {
    id: 'mixed-use',
    icon: Building,
    title: 'Mixed-Use Developments',
    subtitle: 'Residential & commercial combination',
    description: 'Specialized management for mixed-use developments combining residential, retail, and commercial spaces. We expertly navigate the complexities of managing diverse stakeholder needs in multi-purpose buildings.',
    features: [
      'Coordination between residential and commercial tenants',
      'Different levy structures for various property uses',
      'Retail hours and access management',
      'Shared facility scheduling and maintenance',
      'Commercial lease management support',
      'Balancing residential amenity with commercial needs'
    ],
    image: '/images/about/mixed-use-developments.jpg',
    color: 'from-orange-500 to-amber-500',
    stats: [
      { label: 'Mixed Developments', value: '180+' },
      { label: 'Tenant Satisfaction', value: '94%' }
    ],
    cta: 'Manage Your Development'
  },
  // {
  //   id: 'retirement',
  //   icon: Home,
  //   title: 'Retirement Living',
  //   subtitle: 'Age-restricted communities',
  //   description: 'Compassionate and specialized management for retirement villages and age-restricted communities. We understand the unique needs of senior residents and focus on creating safe, comfortable, and socially engaging environments.',
  //   features: [
  //     'Age-appropriate maintenance and accessibility upgrades',
  //     'Enhanced communication tailored for senior residents',
  //     'Priority safety and emergency response systems',
  //     'Social activity coordination support',
  //     'Healthcare and mobility access considerations',
  //     'Sensitive handling of transitional situations'
  //   ],
  //   image: '/images/who-we-help/retirement.jpg',
  //   color: 'from-rose-500 to-pink-500',
  //   stats: [
  //     { label: 'Retirement Villages', value: '35+' },
  //     { label: 'Residents Served', value: '2,800+' }
  //   ],
  //   cta: 'Care for Your Community'
  // }
]

export function WhoWeHelp() {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-accent/5 to-primary/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Property Types We Manage
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            Who We Help
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            NewGen Strata Services provides outstanding management solutions tailored to your property type, 
            ensuring exceptional service and maximum value
          </p>
        </motion.div>

        {/* Tabs Component */}
        <Tabs defaultValue="residential" className="w-full">
          {/* Tab List */}
          <TabsList className="w-full h-auto flex-wrap justify-center gap-3 bg-transparent mb-10 p-0">
            {propertyTypes.map((property) => {
              const TabIcon = property.icon
              return (
                <TabsTrigger
                  key={property.id}
                  value={property.id}
                  className="
                    data-[state=active]:bg-green-800 
                    data-[state=active]:text-white 
                    data-[state=active]:shadow-xl
                    data-[state=active]:scale-105
                    data-[state=inactive]:bg-white
                    data-[state=inactive]:text-gray-700
                    data-[state=inactive]:border
                    data-[state=inactive]:border-gray-200
                    hover:border-primary/30
                    hover:shadow-md
                    px-4 sm:px-6 py-3 rounded-xl font-medium
                    transition-all duration-300
                    flex items-center gap-2
                  "
                >
                  <TabIcon className="h-4 w-4" />
                  <span className="hidden md:inline">{property.title}</span>
                  <span className="md:hidden text-sm">{property.title.split(' ')[0]}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {/* Tab Contents */}
          {propertyTypes.map((property) => {
            const IconComponent = property.icon
            return (
              <TabsContent key={property.id} value={property.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden border-0 shadow-2xl py-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Left: Content */}
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-white order-2 lg:order-1">
                        {/* Icon and Title */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`p-3 bg-gradient-to-br ${property.color} rounded-2xl shadow-lg flex-shrink-0`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-2">
                              {property.title}
                            </h3>
                            <p className="text-primary font-medium text-sm md:text-base">
                              {property.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                          {property.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                          {property.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0}}
          viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Stats and CTA */}
                        <div className="flex flex-col gap-6 pt-6 border-t border-gray-200">
                          {/* Stats */}
                          <div className="flex items-center gap-6">
                            {property.stats.map((stat, index) => (
                              <div key={index} className="text-center">
                                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${property.color} bg-clip-text text-transparent`}>
                                  {stat.value}
                                </div>
                                <div className="text-xs text-gray-600 mt-1">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <Button asChild className="btn-wimbledon w-full sm:w-auto">
                            <Link href="/contact">
                              {property.cta}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>

                      {/* Right: Image */}
                      <div className="relative h-[350px] sm:h-[400px] lg:h-full min-h-[450px] order-1 lg:order-2">
                        {/* Image or Placeholder */}
                        {property.image ? (
                          <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className={`absolute inset-0 bg-gradient-to-br ${property.color} opacity-90`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <IconComponent className="h-32 w-32 text-white opacity-40" />
                            </div>
                          </div>
                        )}
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Decorative animated elements */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0] 
                          }}
                          transition={{ 
                            duration: 20, 
                            repeat: Infinity,
                            ease: "linear" 
                          }}
                          className={`absolute top-10 right-10 w-32 h-32 bg-gradient-to-br ${property.color} rounded-full opacity-20 blur-2xl`}
                        />
                        <motion.div
                          animate={{ 
                            scale: [1.2, 1, 1.2],
                            rotate: [90, 0, 90] 
                          }}
                          transition={{ 
                            duration: 15, 
                            repeat: Infinity,
                            ease: "linear" 
                          }}
                          className={`absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br ${property.color} rounded-full opacity-20 blur-2xl`}
                        />

                        {/* Bottom Label */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 bg-gradient-to-br ${property.color} rounded-lg`}>
                                <IconComponent className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">
                                  {property.title}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {property.subtitle}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            )
          })}
        </Tabs>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          {/* <Card className="bg-gradient-wimbledon text-white p-8 lg:p-12 rounded-2xl border-0 shadow-2xl"> */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8 lg:p-12 rounded-2xl text-center border-0">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Not Sure Which Category Fits Your Property?
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Every property is unique. Let us assess your needs and provide a customized management solution 
                that delivers exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-primary/90 hover:bg-white hover:text-primary">
                  <Link href="tel:+61399999999">
                    Call Us: +61 3 9XXX XXXX
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}