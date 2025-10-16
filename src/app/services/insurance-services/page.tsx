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
  title: 'Insurance Services',
  subtitle: 'Expert Insurance Coordination & Claims Management',
  description: 'Comprehensive insurance management ensuring your property is properly protected with expert guidance on coverage and efficient claims handling.',
  // heroImage: '/images/services/insurance-hero.jpg',
    heroImage: '/images/services/meeting-management-services.jpg',
  
  overview: {
    title: 'Complete Insurance Management',
    content: 'We manage all aspects of your owners corporation insurance, from policy selection and renewals to claims coordination. Our expertise ensures you have appropriate coverage at competitive rates.',
    features: [
      'Insurance policy review and recommendations',
      'Annual renewal coordination',
      'Premium negotiations',
      'Claims management and coordination',
      'Insurance compliance tracking',
      'Risk assessment and mitigation'
    ]
  },

  benefits: [
    {
      title: 'Appropriate Coverage',
      description: 'Expert assessment ensures your property is properly protected.',
      icon: 'Shield' as const
    },
    {
      title: 'Claims Support',
      description: 'Professional coordination through the entire claims process.',
      icon: 'Users' as const
    },
    {
      title: 'Competitive Rates',
      description: 'Leverage our relationships to secure best possible premiums.',
      icon: 'Award' as const
    },
    {
      title: 'Peace of Mind',
      description: 'Confidence that all insurance requirements are properly managed.',
      icon: 'CheckCircle' as const
    }
  ],

  process: [
    {
      step: 1,
      title: 'Coverage Review',
      description: 'Annual assessment of insurance needs and policy adequacy.',
      timeline: 'Pre-renewal'
    },
    {
      step: 2,
      title: 'Renewal Coordination',
      description: 'Obtain quotes, negotiate terms, and arrange policy renewal.',
      timeline: 'Renewal period'
    },
    {
      step: 3,
      title: 'Claims Management',
      description: 'Coordinate lodgment, provide documentation, and liaise with insurers.',
      timeline: 'As required'
    },
    {
      step: 4,
      title: 'Compliance Monitoring',
      description: 'Ensure policy meets all legal requirements and covers identified risks.',
      timeline: 'Ongoing'
    }
  ],

  faqs: [
    {
      question: 'How do you determine appropriate coverage?',
      answer: 'We review your property\'s characteristics, assess risks, and ensure coverage meets legal requirements. We also consider the committee\'s risk tolerance and budget considerations.'
    },
    {
      question: 'What happens if we need to make a claim?',
      answer: 'We coordinate the entire claims process - from initial lodgment through to settlement. We provide necessary documentation, liaise with assessors, and keep the committee informed throughout.'
    },
    {
      question: 'Can you help reduce insurance costs?',
      answer: 'We work to secure competitive premiums through our insurer relationships and by ensuring the property is well-maintained, which can result in lower premiums over time.'
    },
    {
      question: 'How often should coverage be reviewed?',
      answer: 'We review coverage annually at renewal and whenever there are significant changes to the property or identified risks.'
    }
  ]
}
export default function InsuranceServicesPage() {
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