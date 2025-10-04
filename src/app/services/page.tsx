// src/app/services/page.tsx

import React from 'react'
import { Metadata } from 'next'
import { Services } from '@/components/sections/Services'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceProcess } from '@/components/sections/ServiceProcess'
import { ServiceGuarantee } from '@/components/sections/ServiceGuarantee'

export const metadata: Metadata = {
  title: 'Strata Management Services - Complete Solutions',
  description: 'Comprehensive strata management services in Melbourne including meeting management, financial oversight, maintenance coordination, compliance, and 24/7 emergency support.',
  keywords: 'strata management services Melbourne, owners corporation management, meeting management, financial management, maintenance coordination, compliance management',
  openGraph: {
    title: 'Professional Strata Management Services Melbourne',
    description: 'From meeting management to emergency support, we provide complete strata solutions with modern technology and transparent processes.',
    images: ['/images/services-hero.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <Services />
      <ServiceProcess />
      <ServiceGuarantee />
    </>
  )
}