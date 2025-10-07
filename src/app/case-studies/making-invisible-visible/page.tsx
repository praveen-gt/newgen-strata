import React from 'react'
import { Metadata } from 'next'
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero'
import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent'
import { CaseStudyStats } from '@/components/case-studies/CaseStudyStats'
import { CaseStudyCTA } from '@/components/case-studies/CaseStudyCTA'

export const metadata: Metadata = {
  title: 'Case Study: Financial Transparency Success Story | NewGen Strata Services',
  description: 'How NewGen Strata Services uncovered $85K in unexplained expenses and restored financial transparency to a 72-unit owners corporation through detailed auditing and clear reporting.',
  keywords: 'strata financial management, owners corporation audit, financial transparency, strata accounting, Melbourne strata services',
}

const caseStudyData = {
  hero: {
    title: 'Making the Invisible Visible',
    subtitle: 'Restoring Financial Transparency & Trust',
    category: 'Financial Management',
    readTime: '7 min read',
    date: 'February 2024',
    image: '/images/case-study/case-study-making-the-invisible-visible-again.JPG',
    tags: ['Financial Management', 'Transparency', 'Audit']
  },
  
  stats: [
    {
      icon: 'DollarSign',
      value: '$85K',
      label: 'Unexplained Expenses Found',
      description: 'Recovered through detailed audit'
    },
    {
      icon: 'TrendingDown',
      value: '32%',
      label: 'Annual Fees Reduced',
      description: 'Through better supplier management'
    },
    {
      icon: 'FileText',
      value: '100%',
      label: 'Financial Transparency',
      description: 'All expenses tracked and reported'
    },
    {
      icon: 'Eye',
      value: '24/7',
      label: 'Online Portal Access',
      description: 'Real-time financial visibility'
    }
  ],

  challenge: {
    title: 'The Challenge',
    icon: 'AlertTriangle',
    description: 'A 72-unit owners corporation in South Yarra was experiencing escalating costs with no clear explanation. Quarterly levies had increased 45% over three years, yet building maintenance was deteriorating.',
    keyIssues: [
      'Quarterly levies increased 45% over three years with no justification',
      'Building maintenance quality declining despite higher spending',
      'Financial reports unclear with vague expense categories',
      'Committee had no access to detailed financial information',
      'Suspected overcharging by contractors but no way to verify',
      'No competitive tendering process for major contracts',
      'Owners losing confidence in committee and management',
      'Difficulty planning for future capital works due to unclear finances'
    ]
  },

  solution: {
    title: 'Our Solution',
    icon: 'Target',
    description: 'NewGen implemented a comprehensive financial review and transparency initiative, conducting a detailed audit of the previous three years and establishing clear reporting systems.',
    actions: [
      {
        phase: 'Discovery & Audit (Weeks 1-4)',
        steps: [
          'Conducted comprehensive 3-year financial audit of all expenses',
          'Identified $85,000 in questionable or unexplained charges',
          'Documented all existing supplier contracts and service agreements',
          'Interviewed committee members about their concerns and priorities',
          'Created detailed breakdown of all historical expenditure by category'
        ]
      },
      {
        phase: 'Correction & Optimization (Weeks 5-12)',
        steps: [
          'Challenged inappropriate charges and recovered $62,000',
          'Implemented competitive tendering for all major contracts',
          'Renegotiated cleaning contract (30% reduction in cost)',
          'Renegotiated gardening services (25% reduction with better service)',
          'Switched insurance providers (20% premium reduction, better coverage)',
          'Established relationships with pre-vetted, reliable tradespeople'
        ]
      },
      {
        phase: 'Transparency & Prevention (Ongoing)',
        steps: [
          'Deployed online portal with real-time financial dashboard',
          'Implemented detailed monthly reporting with expense justifications',
          'Created 10-year capital works plan with accurate cost projections',
          'Established quarterly budget reviews with committee',
          'Set up automated alerts for unusual expenses',
          'Provided financial literacy training to committee members'
        ]
      }
    ]
  },

  results: {
    title: 'The Results',
    icon: 'CheckCircle',
    description: 'Through detailed auditing, competitive tendering, and transparent reporting, we reduced costs while improving service quality.',
    outcomes: [
      {
        metric: 'Cost Recovery',
        value: '$62,000 recovered from questioned expenses',
        impact: 'Funds redistributed to owners\' reserve fund for future works'
      },
      {
        metric: 'Annual Savings',
        value: '$47,000 per year through renegotiated contracts',
        impact: '32% reduction in ongoing operational expenses'
      },
      {
        metric: 'Levy Reduction',
        value: 'Quarterly levies reduced by 18% in first year',
        impact: 'Average owner saving $720 per year'
      },
      {
        metric: 'Service Quality',
        value: 'Improved maintenance despite lower costs',
        impact: 'Better contractors at competitive rates through proper tendering'
      },
      {
        metric: 'Committee Satisfaction',
        value: '100% report confidence in finances',
        impact: 'Real-time visibility into all expenses via online portal'
      },
      {
        metric: 'Owner Engagement',
        value: '85% now regularly check financial portal',
        impact: 'Increased transparency leads to higher meeting attendance'
      }
    ]
  },

  testimonial: {
    quote: "For three years we watched our fees go up while our building went downhill. We had no idea where the money was going. NewGen found $85,000 in expenses that couldn't be explained, recovered most of it, and now we can see every single transaction in real-time. We're paying less and getting better service.",
    author: 'David Richardson',
    role: 'Owners Corporation Treasurer',
    property: '72-Unit Complex, South Yarra'
  },

  lessons: {
    title: 'Key Takeaways',
    points: [
      {
        title: 'Transparency Builds Trust',
        description: 'When owners can see exactly where every dollar goes, confidence in management increases dramatically. Our online portal puts financial control in owners\' hands.'
      },
      {
        title: 'Audits Reveal Hidden Costs',
        description: 'A detailed financial audit often uncovers unexplained expenses, overcharging, and unnecessary services that accumulate over time.'
      },
      {
        title: 'Competition Reduces Costs',
        description: 'Proper competitive tendering for all major contracts ensures market rates and quality service. Sole-source contracts often lead to inflated costs.'
      },
      {
        title: 'Financial Literacy Matters',
        description: 'Educating committee members about reading financial reports and asking the right questions helps them make informed decisions.'
      }
    ]
  }
}

export default function MakingInvisibleVisiblePage() {
  return (
    <main className="min-h-screen">
      <CaseStudyHero data={caseStudyData.hero} />
      <CaseStudyStats stats={caseStudyData.stats} />
      <CaseStudyContent data={caseStudyData} />
      <CaseStudyCTA />
    </main>
  )
}
