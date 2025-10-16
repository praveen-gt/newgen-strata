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
  title: 'Dispute Resolution & Support',
  subtitle: 'Professional Mediation & Request Management',
  description: 'Expert handling of disputes and special requests, ensuring fair outcomes through professional mediation and clear communication with all stakeholders.',
  // heroImage: '/images/services/dispute-resolution-hero.jpg',
    heroImage: '/images/services/meeting-management-services.jpg',
  
  overview: {
    title: 'Conflict Resolution & Support Services',
    content: 'We provide professional mediation services for disputes between owners, tenants, and the owners corporation. Our experience helps resolve conflicts fairly while maintaining positive relationships.',
    features: [
      'Dispute mediation and resolution',
      'Special request assessment and coordination',
      'Stakeholder liaison and communication',
      'Rule enforcement support',
      'VCAT representation assistance',
      'Documentation and record keeping'
    ]
  },

  benefits: [
    {
      title: 'Fair Resolution',
      description: 'Impartial mediation focused on equitable outcomes for all parties.',
      icon: 'Users' as const
    },
    {
      title: 'Expert Guidance',
      description: 'Professional advice on rules, rights, and resolution options.',
      icon: 'Award' as const
    },
    {
      title: 'Clear Communication',
      description: 'Effective liaison between all stakeholders to prevent misunderstandings.',
      icon: 'FileText' as const
    },
    {
      title: 'Timely Response',
      description: 'Quick action on issues before they escalate into major conflicts.',
      icon: 'Clock' as const
    }
  ],

  process: [
    {
      step: 1,
      title: 'Issue Assessment',
      description: 'Understand the situation, review relevant rules and regulations, and identify potential solutions.',
      timeline: '1-2 days'
    },
    {
      step: 2,
      title: 'Stakeholder Liaison',
      description: 'Communicate with all involved parties to understand perspectives and facilitate dialogue.',
      timeline: '3-5 days'
    },
    {
      step: 3,
      title: 'Resolution Coordination',
      description: 'Work toward mutually acceptable solutions or prepare for formal processes if needed.',
      timeline: '1-2 weeks'
    },
    {
      step: 4,
      title: 'Documentation',
      description: 'Record outcomes, update relevant parties, and monitor compliance with resolutions.',
      timeline: 'Ongoing'
    }
  ],

  faqs: [
    {
      question: 'How do you handle disputes between owners?',
      answer: 'We act as impartial mediators, helping parties understand their rights and obligations while working toward fair resolutions. We facilitate communication and can arrange formal mediation if needed.'
    },
    {
      question: 'What if a dispute can\'t be resolved?',
      answer: 'If mediation is unsuccessful, we can assist with VCAT applications or other formal dispute resolution processes, providing necessary documentation and support.'
    },
    {
      question: 'How do you assess special requests?',
      answer: 'We review requests against rules and regulations, assess potential impacts, seek necessary approvals, and coordinate implementation if approved.'
    },
    {
      question: 'Can you help with tenant issues?',
      answer: 'Yes, we liaise with tenants on behalf of the owners corporation regarding rule compliance, maintenance issues, and other matters affecting common property.'
    }
  ]
}
export default function DisputeResolutionSupportPage() {
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