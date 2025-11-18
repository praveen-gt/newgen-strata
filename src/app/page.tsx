// // src/app/page.tsx

// import Hero from '@/components/sections/Hero'
// import { ServiceStats } from '@/components/sections/ServiceStats'
// import { ServicesPreview } from '@/components/sections/ServicesPreview'
// import { AboutPreview } from '@/components/sections/AboutPreview'
// import { ContactCTA } from '@/components/sections/ContactCTA'

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <ServiceStats />
//       <ServicesPreview />
//       <AboutPreview />
//       <ContactCTA />
//     </>
//   )
// }


// export const metadata = {
//   title: 'NewGen Strata Services - Premium Strata Management Melbourne',
//   description: 'Experience excellence in owners corporation management with NewGen Strata Services. We provide comprehensive strata management services in Melbourne using the latest technology and a commitment to exceptional service.',
//   keywords: 'strata management Melbourne, owners corporation management, body corporate management, property management Melbourne, NewGen Strata Services',
//   openGraph: {
//     title: 'NewGen Strata Services - Melbourne\'s Premier Strata Management',
//     description: 'Transform your property management experience with technology, transparency, and expertise.',
//     images: ['/images/hero-melbourne-skyline.jpg'],
//     locale: 'en_AU',
//   },
// }

// src/app/page.tsx

import Hero from '@/components/sections/Hero'
import { OurCommitments } from '@/components/sections/OurCommitments'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurCommitments />
      <ServicesPreview />
      <WhyChooseUs />
      <ContactCTA />
    </>
  )
}

export const metadata = {
  title: 'NewGen Strata Services - Premium Strata Management Melbourne',
  description: 'A new generation organisation providing personal, high-quality strata management services in Melbourne. We combine the latest technology with 70+ years of combined experience, operating with honesty, integrity, and a commitment to delighting our customers.',
  keywords: 'strata management Melbourne, owners corporation management, body corporate management, property management Melbourne, NewGen Strata Services',
  openGraph: {
    title: 'NewGen Strata Services - Melbourne\'s Premier Strata Management',
    description: 'Personal, high-quality service using the latest technology. Operating with capability, reliability, and integrity.',
    images: ['/images/hero-melbourne-skyline.jpg'],
    locale: 'en_AU',
  },
}