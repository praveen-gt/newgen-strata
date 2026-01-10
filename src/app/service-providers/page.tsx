'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Wrench,
  Sparkles,
  TreePine,
  Shield,
  LineChart,
  CreditCard,
  Calculator,
  Laptop,
  FileText,
  Scale,
  Building2,
  Zap,
  TrendingUp,
  CheckCircle2,
  Star,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const providerCategories = [
  {
    category: 'Maintenance and Repairs',
    icon: Wrench,
    color: 'from-blue-300 to-blue-600',
    providers: [
      {
        icon: Wrench,
        title: 'Tradespeople Network',
        description: 'Locally sourced network of reliable electricians, plumbers, carpenters, and general repair contractors for common property maintenance.',
        inHouse: false
      },
      {
        icon: Sparkles,
        title: 'Cleaning Services',
        description: 'Regular cleaning of common areas, including foyers, hallways, and shared facilities. We can provide in-house cleaning services at very competitive prices for our clients.',
        inHouse: true,
        highlight: 'In-house service available'
      },
      {
        icon: TreePine,
        title: 'Gardening and Landscaping',
        description: 'For the upkeep of common gardens and outdoor spaces. We can also provide in-house services for our clients at very competitive prices.',
        inHouse: true,
        highlight: 'In-house service available'
      },
      {
        icon: Shield,
        title: 'Essential Safety Partners',
        description: 'Locally sourced providers for fire safety compliance, window safety compliance, and other regulatory requirements.',
        inHouse: false
      },
      {
        icon: LineChart,
        title: 'Predictive Maintenance',
        description: 'Locally sourced technology providers offering sensors and systems for proactive property upkeep.',
        inHouse: false
      }
    ]
  },
  {
    category: 'Financial and Administrative',
    icon: Calculator,
    color: 'from-green-300 to-green-600',
    providers: [
      {
        icon: CreditCard,
        title: 'Strata Finance Providers',
        description: 'Our pool of expert financial professionals that offer loans or financial solutions for major works or unexpected expenses (e.g., Big Banks, Small financial institutions and Lenders).',
        inHouse: false
      },
      {
        icon: Laptop,
        title: 'Payment Systems',
        description: 'We can help our clients with latest online payment options for strata levies and invoices.',
        inHouse: false
      },
      {
        icon: Calculator,
        title: 'Accounting/Auditing Services',
        description: 'Our pool of hand-picked accounting professionals to assist with your financial reporting, budgets, and audits.',
        inHouse: false
      },
      {
        icon: Laptop,
        title: 'Strata Software Platforms',
        description: 'Our partner technology companies providing cloud-based software for managing administrative tasks, communication, and financial statements.',
        inHouse: false
      }
    ]
  },
  {
    category: 'Insurance and Legal',
    icon: FileText,
    color: 'from-purple-300 to-purple-600',
    providers: [
      {
        icon: Shield,
        title: 'Strata Insurance Underwriters & Brokers',
        description: 'We can offer specialised insurance providers covering residential, commercial, and community title properties (e.g., CHU and Strata Community Insurance).',
        inHouse: false
      },
      {
        icon: Scale,
        title: 'Strata Lawyers & Legal Advisors',
        description: 'Our partner firms specialising in strata law to advise on compliance, by-laws, and dispute resolution (e.g., Becketts Lawyers, Arnold Bloch Leibler, Grace Lawyers).',
        inHouse: false
      }
    ]
  },
  {
    category: 'Other Specialists',
    icon: Building2,
    color: 'from-orange-300 to-orange-600',
    providers: [
      {
        icon: Building2,
        title: 'Building Consultants/Surveyors',
        description: 'We currently have professional advisors for building defect reports, maintenance plans, and project management of major building works.',
        inHouse: false
      },
      {
        icon: Zap,
        title: 'Utility Providers',
        description: 'Electricity, water, and gas companies for common area services. Our friendly staff can negotiate with many major utility providers to provide a better price for our clients.',
        inHouse: false,
        highlight: 'Negotiation service available'
      },
      {
        icon: TrendingUp,
        title: 'Property Valuers',
        description: 'We also provide professionals for property valuations when required.',
        inHouse: false
      }
    ]
  }
]

const selectionCriteria = [
  'Owned by us or we have a financial interest',
  'Evaluated and appointed as "preferred provider"',
  'Indoctrinated in our founding principle of "Delighting our customer"',
  'Proven track record of reliability and quality',
  'Commitment to our standards of excellence',
  'Critical to our business success - we understand this'
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function ServiceProvidersPage() {

  const SectionHeader = ({ title }: { title: string }) => (
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-dark to-brand-light bg-clip-text text-transparent mb-8">
      {title}
    </h2>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        
                  <div className="absolute inset-0">
                    <Image
                      // src="/images/about/about-banner.jpg"
                      src="/images/image-2.jpg"
                      alt="NewGen Strata Services - Modern strata management excellence"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Lighter Gradient Overlay - Better Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/55 via-black/30 to-brand-dark/50" />
                  </div>
        
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full blur-3xl" />
        </div>

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl text-center mx-auto"
          >
   

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Our Vetted{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-accent">Service Providers</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-white/20 -rotate-1" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 leading-relaxed mx-auto"
            >
              We rely on a carefully selected range of service providers to manage and maintain properties effectively. Each provider is committed to our principle of &quot;Delighting our customer&quot;.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52.5C840 55 960 60 1080 57.5C1200 55 1320 45 1380 40L1440 35V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="rgb(249, 250, 251)" />
          </svg>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              {/* <Badge className="bg-primary/10 text-primary border-primary/20 mb-4"> */}
                        <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border-blue-300/50 mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
                Our Standards
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
                How We Choose Our{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Service Providers
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                We have a register of Trade and Professional Service Providers who are critical to our business success.
              </p>
            </div>

            <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-4">
                  {selectionCriteria.map((criterion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-sm"
                    >
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{criterion}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Provider Categories */}
      {providerCategories.map((category, categoryIndex) => {
        const CategoryIcon = category.icon
        return (
          <section
            key={category.category}
            className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-white'}`}
          >
            <div className="container mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <CategoryIcon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                    {category.category}
                  </h2>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-6"
              >
                {category.providers.map((provider, index) => {
                  const ProviderIcon = provider.icon
                  return (
                    <motion.div key={provider.title} variants={fadeInUp}>
                      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} group-hover:opacity-20 transition-opacity`}>
                              <ProviderIcon className={`h-6 w-6 bg-gradient-to-br ${category.color} bg-clip-text text`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-primary transition-colors">
                                {provider.title}
                              </h3>
                              {provider.inHouse && (
                                <Badge className="bg-green-100 text-green-700 border-green-200 mb-2">
                                  {provider.highlight}
                                </Badge>
                              )}
                              {!provider.inHouse && provider.highlight && (
                                <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-2">
                                  {provider.highlight}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {provider.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Experience the NewGen Network
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our carefully vetted network of service providers ensures you receive
              the highest quality service, every time.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-dark hover:bg-gray-100 font-bold px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}