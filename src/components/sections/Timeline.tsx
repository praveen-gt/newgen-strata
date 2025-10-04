// src/components/sections/Timeline.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Lightbulb, 
  Users, 
  Building, 
  Rocket, 
  Target, 
  Trophy,
  ArrowRight,
  Calendar,
  CheckCircle,
  Star
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const timelineEvents = [
  {
    year: '2023',
    quarter: 'Q1',
    title: 'The Vision Takes Shape',
    subtitle: 'Market Research & Planning',
    description: 'After hearing countless complaints about traditional strata management, Kevin and Sam identified a significant opportunity to revolutionize the industry.',
    icon: Lightbulb,
    achievements: [
      'Comprehensive market analysis completed',
      'Client pain points thoroughly researched',
      'Business model framework developed',
      'Technology requirements identified'
    ],
    status: 'completed'
  },
  {
    year: '2023',
    quarter: 'Q2-Q3',
    title: 'Foundation Building',
    subtitle: 'Team & Infrastructure Development',
    description: 'Established the core team and built the foundational infrastructure needed to deliver exceptional strata management services.',
    icon: Building,
    achievements: [
      'Core management team assembled',
      'Technology platform architecture designed',
      'Service delivery processes defined',
      'Quality assurance frameworks established'
    ],
    status: 'completed'
  },
  {
    year: '2023',
    quarter: 'Q4',
    title: 'NewGen Strata Services Launch',
    subtitle: 'Official Company Formation',
    description: 'NewGen Strata Services officially launched with a mission to provide a new level of support and respect to owners corporations.',
    icon: Rocket,
    achievements: [
      'Company officially registered and launched',
      'Initial service offerings finalized',
      'First client partnerships established',
      'Brand identity and market presence created'
    ],
    status: 'completed'
  },
  {
    year: '2024',
    quarter: 'Q1-Q2',
    title: 'Service Excellence',
    subtitle: 'Proving Our Value Proposition',
    description: 'Focused on delivering exceptional service to our initial client base while refining our processes and expanding our service offerings.',
    icon: Trophy,
    achievements: [
      'Client satisfaction targets exceeded',
      'Service delivery processes optimized',
      'Technology platform enhancements deployed',
      'Professional network of service providers curated'
    ],
    status: 'completed'
  },
  {
    year: '2024',
    quarter: 'Q3-Q4',
    title: 'Strategic Growth',
    subtitle: 'Expanding Our Impact',
    description: 'Building on our proven track record, we\'re expanding our client base and enhancing our service capabilities.',
    icon: Target,
    achievements: [
      'Client portfolio growth of 150%+',
      'Advanced reporting systems implemented',
      'Staff training and certification programs launched',
      'Industry recognition and awards received'
    ],
    status: 'in-progress'
  },
  {
    year: '2025',
    quarter: 'Q1-Q4',
    title: 'Industry Leadership',
    subtitle: 'Setting New Standards',
    description: 'Establishing NewGen as the gold standard in strata management through innovation, excellence, and client-first approach.',
    icon: Star,
    achievements: [
      'Market leadership position targeted',
      'Innovation lab for new services established',
      'Industry partnerships and collaborations',
      'Sustainability and ESG initiatives launched'
    ],
    status: 'planned'
  }
]

const milestones = [
  { label: 'Years of Combined Founder Experience', value: '70+' },
  { label: 'Service Excellence Rating', value: '98%' },
  { label: 'Client Retention Rate', value: '95%+' },
  { label: 'Average Response Time', value: '<2hrs' }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export function Timeline() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-neutral/10 via-white to-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Our Journey
            </Badge>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
          >
            From Vision to 
            <span className="text-gradient-wimbledon"> Industry Innovation</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Our journey began with a simple observation: strata management could be so much better. 
            Here's how we're making that vision a reality.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-brand-accent transform md:-translate-x-1/2"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={`${event.year}-${event.quarter}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={isEven ? slideInLeft : slideInRight}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      event.status === 'completed' 
                        ? 'bg-gradient-wimbledon' 
                        : event.status === 'in-progress' 
                        ? 'bg-gradient-to-br from-brand-accent to-secondary' 
                        : 'bg-gray-200'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        event.status === 'completed' || event.status === 'in-progress' 
                          ? 'text-white' 
                          : 'text-gray-500'
                      }`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 ${isEven ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                    <Card className="card-wimbledon hover-lift">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              {event.year} {event.quarter}
                            </Badge>
                            <Badge className={`text-xs ${
                              event.status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : event.status === 'in-progress' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {event.status === 'completed' ? 'Completed' : 
                               event.status === 'in-progress' ? 'In Progress' : 'Planned'}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-brand-dark mb-1">
                              {event.title}
                            </h3>
                            <p className="text-primary font-medium text-sm">
                              {event.subtitle}
                            </p>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {event.description}
                          </p>

                          <div>
                            <h4 className="font-medium text-brand-dark mb-3">Key Achievements</h4>
                            <div className="space-y-2">
                              {event.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                                    event.status === 'completed' 
                                      ? 'text-green-500' 
                                      : event.status === 'in-progress' 
                                      ? 'text-blue-500' 
                                      : 'text-gray-400'
                                  }`} />
                                  <span className="text-sm text-gray-600">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Milestones Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
              Key Milestones Achieved
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These numbers represent our commitment to excellence and the trust our clients place in us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {milestones.map((milestone, index) => (
              <motion.div key={milestone.label} variants={fadeInUp}>
                <Card className="card-wimbledon text-center p-6 hover-lift">
                  <div className="text-3xl font-bold text-gradient-wimbledon mb-2">
                    {milestone.value}
                  </div>
                  <div className="text-gray-600 text-sm">{milestone.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center">
            <Card className="bg-gradient-wimbledon text-white p-8 lg:p-12 rounded-2xl">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Be Part of Our Journey
                </h3>
                <p className="text-white/90 text-lg mb-8">
                  Join us as we continue to revolutionize strata management and set new standards 
                  for service excellence in the industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                    <Link href="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/contact">Start Your Journey</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}