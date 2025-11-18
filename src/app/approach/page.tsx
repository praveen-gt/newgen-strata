// src/app/approach/page.tsx

import React from 'react'
import { Metadata } from 'next'
import { ApproachHero } from '@/components/sections/ApproachHero'
import { OurPhilosophy } from '@/components/sections/OurPhilosophy'
// import { OurProcess } from '@/components/sections/OurProcess'
// import { ServiceDeliveryModel } from '@/components/sections/ServiceDeliveryModel'
// import { TechnologyAdvantage } from '@/components/sections/TechnologyAdvantage'
import { WhyItMatters } from '@/components/sections/WhyItMatters'

export const metadata: Metadata = {
  title: 'Our Approach - Modern Strata Management',
  description: 'Discover NewGen Strata Services\' innovative approach to owners corporation management. We combine personal service, modern technology, and proven processes.',
  keywords: 'strata management approach, owners corporation philosophy, Melbourne property management methodology',
}

export default function ApproachPage() {
  return (
    <>
      <ApproachHero />
      <OurPhilosophy />
      {/* <ServiceDeliveryModel />
      <OurProcess />
      <TechnologyAdvantage /> */}
      <WhyItMatters />
    </>
  )
}
