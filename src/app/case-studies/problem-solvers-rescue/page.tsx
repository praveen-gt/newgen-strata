import React from 'react'
import { Metadata } from 'next'
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero'
import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent'
import { CaseStudyStats } from '@/components/case-studies/CaseStudyStats'
import { CaseStudyCTA } from '@/components/case-studies/CaseStudyCTA'
import { 
  Scale, 
  Users, 
  MessageCircle, 
  CheckCircle,
  AlertTriangle,
  Target,
  ShieldCheck
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Study: Complex Dispute Resolution | NewGen Strata Services',
  description: 'How NewGen Strata Services resolved a year-long dispute between owners and tenants, restored community harmony, and prevented potential legal action through expert mediation.',
  keywords: 'strata dispute resolution, owners corporation disputes, tenant conflicts, community mediation, Melbourne strata management',
}

const caseStudyData = {
  hero: {
    title: 'Problem Solvers to the Rescue',
    subtitle: 'Complex Dispute Resolution & Community Restoration',
    category: 'Dispute Resolution',
    readTime: '8 min read',
    date: 'January 2024',
    image: '/images/case-studies/dispute-resolution.jpg', // Add your image
    tags: ['Dispute Resolution', 'Mediation', 'Community Management']
  },
  
  stats: [
    {
      icon: 'Scale',
      value: '100%',
      label: 'Dispute Resolved',
      description: 'Without legal action or VCAT'
    },
    {
      icon: 'Users',
      value: '38 Parties',
      label: 'Stakeholders Aligned',
      description: 'Owners and tenants reconciled'
    },
    {
      icon: 'MessageCircle',
      value: '12 Weeks',
      label: 'Resolution Timeline',
      description: 'After 14 months of conflict'
    },
    {
      icon: 'ShieldCheck',
      value: '$150K',
      label: 'Legal Costs Avoided',
      description: 'Estimated VCAT expenses prevented'
    }
  ],

  challenge: {
    title: 'The Challenge',
    icon: 'AlertTriangle',
    description: 'A 52-unit townhouse complex in Brunswick was embroiled in a bitter 14-month dispute between owner-occupiers and investors over noise complaints, parking violations, and common area usage.',
    keyIssues: [
      'Year-long conflict between owner-occupiers and investors',
      'Multiple noise complaints from tenants in party-prone units',
      'Parking violations and disputes over visitor parking allocation',
      'Damage to common areas with no one taking responsibility',
      'Committee dysfunction with 3 resignations in 6 months',
      'Previous strata manager stopped attending meetings',
      'Lawyers involved with threats of VCAT proceedings',
      'Property values declining due to building reputation',
      'Prospective buyers withdrawing after learning of disputes'
    ]
  },

  solution: {
    title: 'Our Solution',
    icon: 'Target',
    description: 'NewGen implemented a structured mediation process, established clear house rules with fair enforcement, and worked with both owners and tenants to rebuild community trust.',
    actions: [
      {
        phase: 'Assessment & Listening (Weeks 1-3)',
        steps: [
          'Individual meetings with all 38 affected parties',
          'Documented all complaints and incidents over 14-month period',
          'Reviewed bylaws, house rules, and enforcement history',
          'Identified root causes: lack of clear rules and inconsistent enforcement',
          'Assessed legal risks and prepared alternative resolution strategies'
        ]
      },
      {
        phase: 'Mediation & Rule Development (Weeks 4-8)',
        steps: [
          'Facilitated structured mediation sessions with neutral ground rules',
          'Created new, fair house rules developed with input from all parties',
          'Established clear parking system with allocated and visitor spaces',
          'Drafted noise guidelines with specific quiet hours',
          'Designed common area usage policy balancing everyone\'s needs',
          'Set up transparent complaint and resolution process'
        ]
      },
      {
        phase: 'Implementation & Monitoring (Weeks 9-12)',
        steps: [
          'Held community meeting to vote on new rules (98% approval)',
          'Installed parking signage and visitor parking booking system',
          'Implemented 3-strike warning system for rule violations',
          'Created monthly community newsletter to maintain dialogue',
          'Established resident liaison role for ongoing communication',
          'Set up quarterly community social events to build relationships'
        ]
      }
    ]
  },

  results: {
    title: 'The Results',
    icon: 'CheckCircle',
    description: 'Through patient mediation, fair rule-making, and consistent enforcement, we transformed a toxic environment into a harmonious community.',
    outcomes: [
      {
        metric: 'Dispute Resolution',
        value: '100% resolution without legal proceedings',
        impact: 'Saved estimated $150K in legal fees and VCAT costs'
      },
      {
        metric: 'Community Harmony',
        value: 'Zero formal complaints in 6 months',
        impact: 'Compared to average of 8 complaints per month previously'
      },
      {
        metric: 'Committee Stability',
        value: 'New committee elected with 82% participation',
        impact: 'Strong mandate and renewed volunteer engagement'
      },
      {
        metric: 'Compliance Rate',
        value: '96% adherence to new house rules',
        impact: 'Clear rules and fair enforcement achieved voluntary compliance'
      },
      {
        metric: 'Property Values',
        value: 'Market values stabilized and recovering',
        impact: 'Real estate agents reporting renewed buyer interest'
      },
      {
        metric: 'Resident Satisfaction',
        value: '91% satisfied with conflict resolution',
        impact: 'Anonymous survey 6 months post-implementation'
      }
    ]
  },

  testimonial: {
    quote: "Our building was a war zone. Neighbors weren't speaking, lawyers were involved, and I was seriously considering selling at a loss just to escape the stress. Kevin and Sam didn't take sides - they listened to everyone, found the real problems beneath the surface issues, and helped us create rules we could all live with. Now we actually have community barbecues instead of angry confrontations.",
    author: 'Michael Torres',
    role: 'Owners Corporation Committee Member',
    property: '52-Unit Townhouse Complex, Brunswick'
  },

  lessons: {
    title: 'Key Takeaways',
    points: [
      {
        title: 'Listen Before Acting',
        description: 'Most disputes have deeper root causes than the surface complaints. Individual listening sessions revealed the real issues: unclear rules and perceived unfairness in enforcement.'
      },
      {
        title: 'Neutrality is Essential',
        description: 'A strata manager must remain neutral and fair to all parties. Taking sides escalates conflicts; facilitating dialogue resolves them.'
      },
      {
        title: 'Clear Rules Prevent Disputes',
        description: 'Many conflicts arise from ambiguous rules and inconsistent enforcement. Clear, fair rules developed with community input achieve voluntary compliance.'
      },
      {
        title: 'Prevention Through Communication',
        description: 'Regular communication channels (newsletters, community events) help prevent disputes by addressing concerns before they escalate.'
      }
    ]
  }
}

export default function ProblemSolversRescuePage() {
  return (
    <main className="min-h-screen">
      <CaseStudyHero data={caseStudyData.hero} />
      <CaseStudyStats stats={caseStudyData.stats} />
      <CaseStudyContent data={caseStudyData} />
      <CaseStudyCTA />
    </main>
  )
}