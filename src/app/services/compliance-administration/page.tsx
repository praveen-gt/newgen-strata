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
  title: 'Compliance & Administration',
  subtitle: 'Complete Regulatory Compliance & Record Management',
  description: 'Expert management of all compliance requirements, registers, and documentation to keep your owners corporation legally compliant and well-organized.',
  heroImage: '/images/services/compliance-hero.jpg',
  
  overview: {
    title: 'Full Compliance Management',
    content: 'We ensure your owners corporation meets all legal requirements while maintaining comprehensive records. From building compliance to register management, we handle all administrative responsibilities.',
    features: [
      'Building compliance monitoring',
      'Owners corporation register maintenance',
      'Documentation management',
      'Regulatory requirement tracking',
      'Correspondence handling',
      'Stakeholder communication'
    ]
  },

  benefits: [
    {
      title: '100% Compliance',
      description: 'Full adherence to all Victorian Owners Corporation Act requirements.',
      icon: 'Shield' as const
    },
    {
      title: 'Complete Records',
      description: 'Well-organized documentation accessible when you need it.',
      icon: 'FileText' as const
    },
    {
      title: 'Proactive Updates',
      description: 'Regular stakeholder communications and timely notices.',
      icon: 'Users' as const
    },
    {
      title: 'Expert Guidance',
      description: 'Professional advice on regulatory requirements and best practices.',
      icon: 'Award' as const
    }
  ],

  process: [
    {
      step: 1,
      title: 'Initial Setup',
      description: 'Establish comprehensive records, registers, and compliance tracking systems.',
      timeline: 'First month'
    },
    {
      step: 2,
      title: 'Ongoing Maintenance',
      description: 'Regular updates to registers, correspondence management, and document filing.',
      timeline: 'Daily/Weekly'
    },
    {
      step: 3,
      title: 'Compliance Monitoring',
      description: 'Continuous tracking of regulatory requirements and building compliance status.',
      timeline: 'Ongoing'
    },
    {
      step: 4,
      title: 'Regular Communication',
      description: 'Distribution of updates, notices, and information to all stakeholders.',
      timeline: 'As required'
    }
  ],

  faqs: [
    {
      question: 'What records do you maintain?',
      answer: 'We maintain the owners corporation register, financial records, meeting minutes, correspondence, contracts, building plans, compliance certificates, and all other required documentation.'
    },
    {
      question: 'How do you handle correspondence?',
      answer: 'All correspondence is logged, responded to promptly, and filed appropriately. Owners receive responses typically within 24 hours during business days.'
    },
    {
      question: 'What if there\'s a compliance issue?',
      answer: 'We identify compliance issues early and work proactively to address them. If rectification work is needed, we coordinate it promptly to ensure ongoing compliance.'
    },
    {
      question: 'Can owners access the register?',
      answer: 'Yes, owners can access appropriate sections of the register as per their legal entitlements. We maintain strict privacy controls while ensuring transparency.'
    }
  ]
}
export default function ComplianceAdministrationPage() {
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