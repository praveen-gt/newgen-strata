import React from 'react'
import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/AboutHero'
import { WhyNewGen } from '@/components/sections/WhyNewGen'
import { WhatIsNewGen } from '@/components/sections/WhatIsNewGen'
import { HowWereDifferent } from '@/components/sections/HowWereDifferent'
import  OurCommitmentsAbout  from '@/components/sections/OurCommitmentsAbout'
import { Founders } from '@/components/sections/Founders'

export const metadata: Metadata = {
  title: 'About Us - NewGen Strata Services',
  description: 'Learn about NewGen Strata Services, founded by Kevin Fuller and Sam Disanayaka with 70+ years of combined business experience. Discover our commitment to honesty, integrity, and exceptional service.',
  keywords: 'about NewGen Strata Services, Kevin Fuller, Sam Disanayaka, strata management Melbourne',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyNewGen />
      <WhatIsNewGen />
      <OurCommitmentsAbout />
      <HowWereDifferent />
      <Founders />
    </>
  )
}