// src/app/page.tsx

import Hero from '@/components/sections/Hero'
import { About } from '@/components/sections/AboutHomepage'
// import { Services } from '@/components/sections/Services'
import { Founders } from '@/components/sections/Founders'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ServiceStats } from '@/components/sections/ServiceStats'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceStats />
      <About />
      <WhyChooseUs />
      {/* <Services /> */}
      <Founders />
      {/* <Testimonials /> */}
      <FAQ />
      <ContactCTA />
    </>
  )
}

export const metadata = {
  title: 'NewGen Strata Services - Premium Strata Management Melbourne',
  description: 'Experience excellence in owners corporation management with NewGen Strata Services. We provide comprehensive strata management services in Melbourne using the latest technology and a commitment to exceptional service.',
  keywords: 'strata management Melbourne, owners corporation management, body corporate management, property management Melbourne, NewGen Strata Services',
  openGraph: {
    title: 'NewGen Strata Services - Melbourne\'s Premier Strata Management',
    description: 'Transform your property management experience with technology, transparency, and expertise.',
    images: ['/images/hero-melbourne-skyline.jpg'],
    locale: 'en_AU',
  },
}