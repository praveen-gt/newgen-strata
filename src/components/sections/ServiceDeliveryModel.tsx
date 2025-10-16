// src/components/sections/ServiceDeliveryModel.tsx
"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, UserCheck, Network, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const deliveryModels = [
  {
    id: 'dedicated',
    icon: UserCheck,
    title: 'Dedicated Manager',
    subtitle: 'Your single point of contact',
    description: 'Every property gets a dedicated strata manager who knows your building inside and out. No call centers, no ticket systems—just direct access to someone who genuinely cares about your property.',
    features: [
      'Direct mobile and email access to your manager',
      'Consistent service from someone who knows your history',
      'Proactive communication about property matters',
      'Personal relationship with your committee',
      'Quick decision-making without bureaucracy'
    ],
    image: '/images/approach/dedicated-manager.jpg',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'curated',
    icon: Network,
    title: 'Curated Service Network',
    subtitle: 'Pre-vetted, trusted professionals',
    description: 'We\'ve built a network of the best trade and professional service providers in Melbourne. Every contractor has been thoroughly evaluated for quality, reliability, and fair pricing.',
    features: [
      'Pre-screened contractors for quality assurance',
      'Competitive pricing through established relationships',
      'Faster response times from known providers',
      'Quality guarantees on all work performed',
      'Choice—you\'re never forced to use our network'
    ],
    image: '/images/approach/service-network.jpg',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'collaborative',
    icon: Handshake,
    title: 'Collaborative Decisions',
    subtitle: 'Your input, our expertise',
    description: 'We believe the best decisions come from collaboration. We provide expert recommendations, but you always have the final say on how your property is managed.',
    features: [
      'Committee input valued in all major decisions',
      'Transparent options with pros and cons explained',
      'No pressure tactics or hidden agendas',
      'Education and guidance to empower committees',
      'Flexibility to adapt to your preferences'
    ],
    image: '/images/approach/collaborative.jpg',
    color: 'from-purple-500 to-indigo-500'
  }
]

export function ServiceDeliveryModel() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            How We Deliver
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            Our Service Delivery{" "}
            <span className="text-gradient-wimbledon">Model</span>
          </h2>
          <p className="text-lg text-gray-600">
            Three pillars that make our approach different from traditional strata management
          </p>
        </motion.div>

        <Tabs defaultValue="dedicated" className="w-full">
          <TabsList className="w-full h-auto flex-wrap justify-center gap-3 bg-transparent mb-10 p-0">
            {deliveryModels.map((model) => {
              const Icon = model.icon
              return (
                <TabsTrigger
                  key={model.id}
                  value={model.id}
                  className="
                    data-[state=active]:bg-gradient-wimbledon 
                    data-[state=active]:text-white 
                    data-[state=active]:shadow-xl
                    data-[state=active]:scale-105
                    data-[state=inactive]:bg-white
                    data-[state=inactive]:text-gray-700
                    data-[state=inactive]:border
                    data-[state=inactive]:border-gray-200
                    hover:border-primary/30
                    hover:shadow-md
                    px-6 py-3 rounded-xl font-medium
                    transition-all duration-300
                    flex items-center gap-2
                  "
                >
                  <Icon className="h-5 w-5" />
                  <span>{model.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {deliveryModels.map((model) => {
            const Icon = model.icon
            return (
              <TabsContent key={model.id} value={model.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden border-0 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image Side */}
                      <div className="relative h-[400px] lg:h-full min-h-[500px]">
                        <Image
                          src={model.image}
                          alt={model.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Floating badge */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 bg-gradient-to-br ${model.color} rounded-lg`}>
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{model.title}</p>
                                <p className="text-sm text-gray-600">{model.subtitle}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${model.color} rounded-2xl shadow-lg mb-6 w-fit`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-2">
                          {model.title}
                        </h3>
                        <p className="text-primary font-medium mb-6">{model.subtitle}</p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                          {model.description}
                        </p>

                        <div className="space-y-3">
                          {model.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}