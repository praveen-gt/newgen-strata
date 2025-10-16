// src/app/about/page.tsx

import React from 'react'
import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/AboutHero'
import { Founders } from '@/components/sections/Founders'
import { HowWereDifferent } from '@/components/sections/HowWereDifferent'
import { WhoWeHelp } from '@/components/sections/CompanyValues'
import AboutDetails from '@/components/sections/AboutDetails'

export const metadata: Metadata = {
  title: 'About Us - Our Story & Founders',
  description: 'Learn about NewGen Strata Services founders Kevin Fuller and Sam Disanayaka, their 70+ years of combined experience, and our commitment to revolutionary strata management in Melbourne.',
  keywords: 'about NewGen Strata Services, Kevin Fuller, Sam Disanayaka, strata management founders, Melbourne property management experience',
}

export default function AboutPage() {
  return (
    <>
    <AboutHero />
      <AboutDetails />
       <HowWereDifferent />
      <WhoWeHelp />
      {/* <Timeline /> */}
      <Founders />
    </>
  )
}

