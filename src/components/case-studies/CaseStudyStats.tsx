"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
// import { LucideIcon } from 'lucide-react'
import { Clock, DollarSign, CheckCircle, Droplets } from 'lucide-react'

const icons = { Clock, DollarSign, CheckCircle, Droplets }

interface Stat {
   icon: string
  value: string
  label: string
  description: string
}

interface CaseStudyStatsProps {
  stats: Stat[]
}

export function CaseStudyStats({ stats }: CaseStudyStatsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            // const IconComponent = icons[stat.icon] || CheckCircle as LucideIcon
            const IconComponent = icons[stat.icon as keyof typeof icons] || CheckCircle
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-wimbledon text-center h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gradient-wimbledon mb-2">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-brand-dark mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-gray-600">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}