// import React from 'react'
// import { Metadata } from 'next'
// import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero'
// import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent'
// import { CaseStudyStats } from '@/components/case-studies/CaseStudyStats'
// import { CaseStudyCTA } from '@/components/case-studies/CaseStudyCTA'
// import { 
//   Droplets, 
//   Clock, 
//   DollarSign, 
//   CheckCircle,
//   AlertTriangle,
//   Target
// } from 'lucide-react'

// export const metadata: Metadata = {
//   title: 'Case Study: Emergency Water Damage Response | NewGen Strata Services',
//   description: 'How NewGen Strata Services resolved a critical water damage emergency in a 45-unit apartment complex, saving $200K+ through rapid response.',
// }

// const caseStudyData = {
//   hero: {
//     title: 'Fixing the Leaks',
//     subtitle: 'Emergency Water Damage Response & Crisis Management',
//     category: 'Emergency Response',
//     readTime: '6 min read',
//     tags: ['Emergency Response', 'Water Damage', 'Crisis Management']
//   },
  
//   stats: [
//     {
//       icon: 'Clock',
//       value: '< 2 Hours',
//       label: 'Emergency Response Time',
//       description: 'From initial call to site arrival'
//     },
//     {
//       icon: 'DollarSign',
//       value: '$200K+',
//       label: 'Potential Damages Prevented',
//       description: 'Through rapid intervention'
//     },
//     {
//       icon: 'CheckCircle',
//       value: '45 Units',
//       label: 'Properties Protected',
//       description: 'All residents safely relocated'
//     },
//     {
//       icon: 'CheckCircle',
//       value: '100%',
//       label: 'Owner Satisfaction',
//       description: 'Post-crisis survey results'
//     }
//   ],

//   challenge: {
//     title: 'The Challenge',
//     icon: 'AlertTriangle',
//     description: 'A severe water main burst occurred at 2 AM in a 45-unit apartment complex in Melbourne\'s inner east. Water flooded three levels, affecting 18 units and threatening structural damage.',
//     keyIssues: [
//       'Major water main burst at 2 AM affecting multiple floors',
//       'Previous strata manager unreachable during emergency',
//       '18 units flooded with residents displaced',
//       'Potential structural damage to building',
//       'No emergency response plan in place',
//       'Risk of mold development'
//     ]
//   },

//   solution: {
//     title: 'Our Solution',
//     icon: 'Target',
//     description: 'NewGen Strata Services implemented a comprehensive emergency response plan.',
//     actions: [
//       {
//         phase: 'Immediate Response (0-2 hours)',
//         steps: [
//           'Kevin attended site within 90 minutes',
//           'Coordinated emergency plumber to shut off water',
//           'Arranged accommodation for 18 families',
//           'Set up communication center',
//           'Documented all damage for insurance'
//         ]
//       },
//       {
//         phase: 'Crisis Management (2-24 hours)',
//         steps: [
//           'Engaged water extraction specialists',
//           'Coordinated building inspector',
//           'Established temporary water supply',
//           'Emergency committee video meeting',
//           'Initiated insurance claims'
//         ]
//       }
//     ]
//   },

//   results: {
//     title: 'The Results',
//     icon: 'CheckCircle',
//     description: 'Through rapid response, we minimized damage and kept residents safe.',
//     outcomes: [
//       {
//         metric: 'Response Time',
//         value: 'Under 2 hours on-site',
//         impact: 'Prevented additional water damage'
//       },
//       {
//         metric: 'Resident Care',
//         value: 'All families housed within 4 hours',
//         impact: 'Zero families left without shelter'
//       },
//       {
//         metric: 'Financial Savings',
//         value: '$200K+ damages prevented',
//         impact: 'Rapid extraction prevented mold'
//       }
//     ]
//   },

//   testimonial: {
//     quote: "At 2 AM when our building was flooding, Kevin was there within 90 minutes. He took control and turned a disaster into a well-managed emergency response.",
//     author: 'Patricia Chen',
//     role: 'Committee Chairperson',
//     property: '45-Unit Apartment Complex, Hawthorn'
//   },

//   lessons: {
//     title: 'Key Takeaways',
//     points: [
//       {
//         title: 'Emergency Response Matters',
//         description: '24/7 availability can save hundreds of thousands in damages.'
//       },
//       {
//         title: 'Communication is Critical',
//         description: 'Constant updates reduce panic during crises.'
//       }
//     ]
//   }
// }

// export default function FixingTheLeaksPage() {
//   return (
//     <main>
//       <CaseStudyHero data={caseStudyData.hero} />
//       <CaseStudyStats stats={caseStudyData.stats} />
//       <CaseStudyContent data={caseStudyData} />
//       <CaseStudyCTA />
//     </main>
//   )
// }

import React from 'react'
import { Metadata } from 'next'
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero'
import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent'
import { CaseStudyStats } from '@/components/case-studies/CaseStudyStats'
import { CaseStudyCTA } from '@/components/case-studies/CaseStudyCTA'
import { 
  Droplets, 
  Clock, 
  DollarSign, 
  CheckCircle,
  AlertTriangle,
  Target
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Study: Emergency Water Damage Response | NewGen Strata Services',
  description: 'How NewGen Strata Services resolved a critical water damage emergency in a 45-unit apartment complex, saving $200K+ in potential damages through rapid response and expert coordination.',
  keywords: 'strata emergency response, water damage management, apartment complex repairs, Melbourne strata services',
}

const caseStudyData = {
  hero: {
    title: 'Fixing the Leaks',
    subtitle: 'Emergency Water Damage Response & Crisis Management',
    category: 'Emergency Response',
    readTime: '6 min read',
    date: 'March 2024',
    image: '/images/case-studies/water-damage.jpg', // Add your image here
    tags: ['Emergency Response', 'Water Damage', 'Crisis Management']
  },
  
  stats: [
    {
      icon: 'Clock',
      value: '< 2 Hours',
      label: 'Emergency Response Time',
      description: 'From initial call to site arrival'
    },
    {
      icon: 'DollarSign',
      value: '$200K+',
      label: 'Potential Damages Prevented',
      description: 'Through rapid intervention'
    },
    {
      icon: 'CheckCircle',
      value: '45 Units',
      label: 'Properties Protected',
      description: 'All residents safely relocated'
    },
    {
      icon: 'Droplets',
      value: '100%',
      label: 'Owner Satisfaction',
      description: 'Post-crisis survey results'
    }
  ],

  challenge: {
    title: 'The Challenge',
    icon: 'AlertTriangle',
    description: 'A severe water main burst occurred at 2 AM in a 45-unit apartment complex in Melbourne\'s inner east. Water flooded three levels, affecting 18 units and threatening structural damage. The previous strata manager was unreachable, residents were panicking, and water was still flowing.',
    keyIssues: [
      'Major water main burst at 2 AM affecting multiple floors',
      'Previous strata manager unreachable during emergency',
      '18 units flooded with residents displaced and distressed',
      'Potential structural damage to building and common areas',
      'No emergency response plan in place',
      'Risk of mold development and further property damage'
    ]
  },

  solution: {
    title: 'Our Solution',
    icon: 'Target',
    description: 'NewGen Strata Services implemented a comprehensive emergency response plan, coordinating with emergency services, plumbers, and accommodation providers while keeping all residents informed throughout the crisis.',
    actions: [
      {
        phase: 'Immediate Response (0-2 hours)',
        steps: [
          'Kevin personally attended site within 90 minutes of emergency call',
          'Coordinated with emergency plumber to shut off water supply',
          'Arranged emergency accommodation for 18 affected families',
          'Set up communication center for resident updates',
          'Documented all damage with photos and videos for insurance'
        ]
      },
      {
        phase: 'Crisis Management (2-24 hours)',
        steps: [
          'Engaged water extraction and drying specialists',
          'Coordinated building inspector for structural assessment',
          'Established temporary water supply for unaffected units',
          'Set up emergency committee meeting via video call',
          'Initiated insurance claims process with full documentation'
        ]
      },
      {
        phase: 'Recovery & Prevention (1-4 weeks)',
        steps: [
          'Managed all repairs and restoration work across affected units',
          'Implemented new emergency response protocols',
          'Installed early warning leak detection systems',
          'Conducted building-wide plumbing inspection',
          'Created comprehensive emergency contact procedures'
        ]
      }
    ]
  },

  results: {
    title: 'The Results',
    icon: 'CheckCircle',
    description: 'Through rapid response and expert coordination, we minimized damage, kept residents safe and informed, and turned a crisis into an opportunity to improve building systems.',
    outcomes: [
      {
        metric: 'Response Time',
        value: 'Under 2 hours on-site management',
        impact: 'Critical in preventing additional water damage and structural issues'
      },
      {
        metric: 'Resident Care',
        value: 'All 18 families housed within 4 hours',
        impact: 'Zero families left without shelter during emergency'
      },
      {
        metric: 'Financial Savings',
        value: 'Prevented $200K+ in damages',
        impact: 'Rapid water extraction prevented mold and structural damage'
      },
      {
        metric: 'Insurance Claims',
        value: '100% of claims approved',
        impact: 'Full coverage for all repairs and temporary accommodation costs'
      },
      {
        metric: 'Recovery Time',
        value: 'All residents back in 3 weeks',
        impact: 'Faster than industry average of 6-8 weeks for similar incidents'
      },
      {
        metric: 'System Improvements',
        value: 'New early warning systems installed',
        impact: 'Future emergencies can be detected and addressed proactively'
      }
    ]
  },

  testimonial: {
    quote: "At 2 AM when our building was flooding and our previous manager wouldn't answer the phone, Kevin was there within 90 minutes. He took control of the situation, kept everyone calm and informed, and turned what could have been a disaster into a well-managed emergency response. We wouldn't trust anyone else with our building.",
    author: 'Patricia Chen',
    role: 'Committee Chairperson',
    property: '45-Unit Apartment Complex, Hawthorn'
  },

  lessons: {
    title: 'Key Takeaways',
    points: [
      {
        title: 'Emergency Response Matters',
        description: 'Having a strata manager who answers calls 24/7 and responds immediately can save hundreds of thousands in damages and prevent resident displacement.'
      },
      {
        title: 'Communication is Critical',
        description: 'During a crisis, residents need constant updates and reassurance. Our communication center kept everyone informed and reduced panic.'
      },
      {
        title: 'Documentation Pays Off',
        description: 'Thorough documentation of damage from the outset ensured 100% insurance claim approval and simplified the recovery process.'
      },
      {
        title: 'Prevention Through Learning',
        description: 'Every emergency is an opportunity to improve systems. We installed early warning systems to prevent future incidents.'
      }
    ]
  }
}

export default function FixingTheLeaksPage() {
  return (
    <main className="min-h-screen">
      <CaseStudyHero data={caseStudyData.hero} />
      <CaseStudyStats stats={caseStudyData.stats} />
      <CaseStudyContent data={caseStudyData} />
      <CaseStudyCTA />
    </main>
  )
}
