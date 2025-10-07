// src/app/services/meeting-management/page.tsx

import React from 'react'
import { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent'
import { ServiceBenefits } from '@/components/sections/ServiceBenefits'
import { ServiceProcess } from '@/components/sections/ServiceProcess'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { RelatedServices } from '@/components/sections/RelatedServices'

export const metadata: Metadata = {
  title: 'Meeting Management Services - Professional AGM & Committee Support',
  description: 'Expert meeting management for owners corporations including AGM planning, committee meetings, venue coordination, agenda preparation, and detailed minutes documentation.',
  keywords: 'AGM management, committee meetings, owners corporation meetings, meeting planning, minutes documentation, Melbourne strata meetings',
}

const serviceData = {
  title: 'Maintenance Coordination',
  subtitle: 'Proactive Property Maintenance & Repairs',
  description: 'Expert coordination of all maintenance and repairs for your common property, ensuring your building is well-maintained through our trusted contractor network.',
  heroImage: '/images/services/maintenance-hero.jpg',
  
  overview: {
    title: 'Comprehensive Maintenance Solutions',
    content: 'We manage all aspects of common property maintenance, from routine upkeep to major repairs. Our curated network of reliable contractors ensures quality work at competitive prices.',
    features: [
      'Routine maintenance scheduling',
      'Emergency repair coordination',
      'Contractor sourcing and management',
      'Quality control and inspections',
      'Maintenance budget planning',
      'Long-term maintenance planning'
    ]
  },

  benefits: [
    {
      title: 'Trusted Contractors',
      description: 'Access to our vetted network of licensed, insured professionals.',
      icon: 'Shield' as const
    },
    {
      title: 'Fast Response',
      description: 'Quick coordination of urgent repairs to minimize disruption.',
      icon: 'Clock' as const
    },
    {
      title: 'Quality Assurance',
      description: 'We oversee all work to ensure it meets our high standards.',
      icon: 'Award' as const
    },
    {
      title: 'Competitive Pricing',
      description: 'Our contractor relationships ensure value for money.',
      icon: 'CheckCircle' as const
    }
  ],

  process: [
    {
      step: 1,
      title: 'Issue Identification',
      description: 'Regular inspections and prompt response to reported maintenance issues.',
      timeline: 'Ongoing'
    },
    {
      step: 2,
      title: 'Contractor Engagement',
      description: 'We source quotes, verify credentials, and engage appropriate contractors.',
      timeline: '1-3 days'
    },
    {
      step: 3,
      title: 'Work Coordination',
      description: 'Schedule work, coordinate access, and oversee completion to standards.',
      timeline: 'As required'
    },
    {
      step: 4,
      title: 'Quality Check',
      description: 'Inspect completed work and ensure proper documentation and invoicing.',
      timeline: 'Upon completion'
    }
  ],

  faqs: [
    {
      question: 'How quickly do you respond to maintenance requests?',
      answer: 'Routine maintenance is scheduled appropriately, while urgent issues receive immediate attention. Emergency situations are addressed 24/7 with contractors on-site typically within 2 hours.'
    },
    {
      question: 'How do you select contractors?',
      answer: 'All contractors in our network are licensed, insured, and have proven track records. We maintain relationships with multiple contractors in each trade to ensure availability and competitive pricing.'
    },
    {
      question: 'What if we\'re not satisfied with the work?',
      answer: 'We inspect all completed work and address any issues immediately. If work doesn\'t meet standards, we require the contractor to rectify it at no additional cost.'
    },
    {
      question: 'Can we use our own contractors?',
      answer: 'Yes, you can request specific contractors. We just need to verify they have appropriate licenses and insurance before engagement.'
    }
  ]
}
export default function MeetingManagementPage() {
  return (
    <>
      <ServiceHero serviceData={serviceData} />
      <ServiceDetailContent serviceData={serviceData} />
      <ServiceBenefits benefits={serviceData.benefits} />
      <ServiceProcess process={serviceData.process} />
      <ServiceFAQ faqs={serviceData.faqs} />
      <RelatedServices currentService="meeting-management" />
    </>
  )
}