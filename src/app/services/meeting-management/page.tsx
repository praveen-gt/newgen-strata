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
  title: 'Meeting Management',
  subtitle: 'Professional AGM & Committee Meeting Services',
  description: 'Comprehensive meeting management services ensuring your owners corporation meetings run smoothly, comply with regulations, and achieve productive outcomes.',
  // heroImage: '/images/services/meeting-management-hero.jpg',
  heroImage: '/images/about/about-banner.jpg',  
  overview: {
    title: 'Complete Meeting Management Solutions',
    content: 'Our meeting management service takes the stress out of organizing and conducting owners corporation meetings. From initial planning through to post-meeting follow-up, we handle every detail to ensure your meetings are productive, compliant, and well-documented.',
    features: [
      'AGM and committee meeting planning',
      'Venue sourcing and coordination',
      'Professional agenda preparation', 
      'Compliance with all legal requirements',
      'Real-time minutes documentation',
      'Post-meeting action item tracking'
    ]
  },

  benefits: [
    {
      title: 'Legal Compliance Guaranteed',
      description: 'All meetings conducted in full accordance with Victorian Owners Corporation Act requirements.',
      icon: 'Shield' as const 
    },
    {
      title: 'Professional Documentation',
      description: 'Detailed minutes and records maintained for easy reference and legal compliance.',
      icon: 'FileText' as const
    },
    {
      title: 'Efficient Meeting Management',
      description: 'Structured agendas and professional facilitation ensure productive outcomes.',
      icon: 'Clock' as const
    },
    {
      title: 'Stress-Free Experience',
      description: 'We handle all logistics so committee members can focus on decision-making.',
      icon: 'CheckCircle' as const
    }
  ],

  process: [
    {
      step: 1,
      title: 'Pre-Meeting Planning',
      description: 'We coordinate dates, venues, and send compliant notices to all owners with proper timing.',
      timeline: '4-6 weeks before meeting'
    },
    {
      step: 2,
      title: 'Agenda Preparation',
      description: 'Professional agenda creation incorporating all required items and owner submissions.',
      timeline: '2 weeks before meeting'
    },
    {
      step: 3,
      title: 'Meeting Facilitation',
      description: 'Professional chairperson services or support for your nominated chairperson.',
      timeline: 'Meeting day'
    },
    {
      step: 4,
      title: 'Minutes & Follow-up',
      description: 'Detailed minutes prepared and distributed, with action items tracked through completion.',
      timeline: 'Within 7 days'
    }
  ],

  faqs: [
    {
      question: 'Do you provide chairperson services?',
      answer: 'Yes, we can provide professional chairperson services or support your nominated chairperson to ensure meetings run smoothly and efficiently.'
    },
    {
      question: 'How do you ensure legal compliance?',
      answer: 'Our team stays current with all legislative requirements and follows strict protocols for meeting notices, agendas, voting procedures, and documentation.'
    },
    {
      question: 'Can you help find suitable meeting venues?',
      answer: 'Absolutely! We maintain relationships with suitable venues across Melbourne and can arrange appropriate facilities for your meeting size and requirements.'
    },
    {
      question: 'What if owners have questions about meeting procedures?',
      answer: 'We provide pre-meeting information sessions and are available to answer procedural questions, ensuring all owners feel informed and comfortable participating.'
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