// // src/app/contact/page.tsx

// import React from 'react'
// import { Metadata } from 'next'
// import { ContactHero } from '@/components/sections/ContactHero'
// import { ContactDetails } from '@/components/sections/ContactDetails'
// import { ContactFormSection } from '@/components/sections/ContactFormSection'
// import { LocationMap } from '@/components/sections/LocationMap'

// export const metadata: Metadata = {
//   title: 'Contact Us - Get Your Free Consultation',
//   description: 'Contact NewGen Strata Services for expert strata management in Melbourne. Get your free consultation, emergency support, or request a custom quote. Available Mon-Fri 9AM-5PM.',
//   keywords: 'contact NewGen Strata Services, Melbourne strata management contact, free strata consultation, owners corporation management quote, emergency strata support',
//   openGraph: {
//     title: 'Contact NewGen Strata Services - Free Consultation',
//     description: 'Get in touch with Melbourne\'s premier strata management team. Free consultations available.',
//     images: ['/images/contact-hero.jpg'],

//   },
// }

// export default function ContactPage() {
//   return (
//     <>
//       <ContactHero />
//       <div className="grid lg:grid-cols-2 gap-0">
//         <ContactFormSection />
//         <ContactDetails />
//       </div>
//       <LocationMap />
//     </>
//   )
// }


// src/app/contact/page.tsx

import React from 'react'
import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/ContactHero'
import { ContactDetails } from '@/components/sections/ContactDetails'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { LocationMap } from '@/components/sections/LocationMap'

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Consultation',
  description: 'Contact NewGen Strata Services for expert strata management in Melbourne. Get your free consultation, emergency support, or request a custom quote. Available Mon-Fri 9AM-5PM.',
  keywords: 'contact NewGen Strata Services, Melbourne strata management contact, free strata consultation, owners corporation management quote, emergency strata support',
  openGraph: {
    title: 'Contact NewGen Strata Services - Free Consultation',
    description: 'Get in touch with Melbourne\'s premier strata management team. Free consultations available.',
    images: ['/images/contact-hero.jpg'],

  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactDetails />
      <LocationMap />
    </>
  )
}