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
  title: 'Financial Management',
  subtitle: 'Complete Financial Oversight & Reporting',
  description: 'Comprehensive financial management services ensuring your owners corporation\'s finances are handled with transparency, accuracy, and professional expertise.',
  heroImage: '/images/services/financial-management-hero.jpg',
  
  overview: {
    title: 'Professional Financial Management',
    content: 'We provide complete financial oversight for your owners corporation, managing everything from accounts payable to financial reporting. Our transparent approach ensures you always have clear visibility of your financial position.',
    features: [
      'Accounts payable management',
      'Budget preparation and monitoring',
      'Financial reporting and statements',
      'Levy collection and management',
      'Banking and cash flow management',
      'Annual financial audits coordination'
    ]
  },

  benefits: [
    {
      title: 'Complete Transparency',
      description: 'Clear, detailed financial reports that are easy to understand and access anytime.',
      icon: 'FileText' as const
    },
    {
      title: 'Professional Accuracy',
      description: 'Expert financial management ensuring compliance and accuracy in all transactions.',
      icon: 'CheckCircle' as const
    },
    {
      title: 'Timely Payments',
      description: 'Efficient accounts payable management with all bills paid on time.',
      icon: 'Clock' as const
    },
    {
      title: 'Budget Control',
      description: 'Proactive budget monitoring to keep your finances on track.',
      icon: 'Award' as const
    }
  ],

  process: [
    {
      step: 1,
      title: 'Financial Setup',
      description: 'We establish banking arrangements, set up accounting systems, and configure financial reporting structures.',
      timeline: 'Initial setup'
    },
    {
      step: 2,
      title: 'Ongoing Management',
      description: 'Regular processing of accounts payable, levy collection, and financial record maintenance.',
      timeline: 'Daily/Weekly'
    },
    {
      step: 3,
      title: 'Reporting & Review',
      description: 'Monthly financial statements and quarterly budget reviews with committee.',
      timeline: 'Monthly/Quarterly'
    },
    {
      step: 4,
      title: 'Annual Audit',
      description: 'Coordination of annual financial audit and preparation of year-end statements.',
      timeline: 'Annually'
    }
  ],

  faqs: [
    {
      question: 'How often will we receive financial reports?',
      answer: 'You receive monthly financial statements showing income, expenses, and account balances. We also provide quarterly budget variance reports and can generate custom reports on request.'
    },
    {
      question: 'How do you handle accounts payable?',
      answer: 'We review all invoices for accuracy, obtain necessary approvals, and ensure timely payment. All transactions are recorded in your financial system with proper documentation.'
    },
    {
      question: 'What happens if levies aren\'t paid?',
      answer: 'We have a systematic follow-up process for unpaid levies, including reminders, payment plans where appropriate, and escalation procedures as needed.'
    },
    {
      question: 'Can owners access financial information?',
      answer: 'Yes, financial statements are distributed to all owners and are available through our online portal. We maintain complete transparency in all financial matters.'
    }
  ]
}

export default function FinancialManagementPage() {
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