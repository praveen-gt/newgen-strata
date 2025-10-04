// src/app/services/layout.tsx

import React from 'react'
// import { ServiceNavigation } from '@/components/sections/ServiceNavigation'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <ServiceNavigation /> */}
      {children}
    </>
  )
}

