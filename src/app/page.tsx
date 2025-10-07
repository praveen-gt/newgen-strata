// src/app/page.tsx

import Hero from '@/components/sections/Hero'
import { ServiceStats } from '@/components/sections/ServiceStats'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceStats />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
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