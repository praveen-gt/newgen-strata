// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/providers/theme-provider'
import ErrorBoundary from '@/components/common/ErrorBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NewGen Strata Services - Premium Strata Management Melbourne',
    template: '%s | NewGen Strata Services'
  },
  description: 'NewGen Strata Services provides premium strata management services in Melbourne. Experience excellence in owners corporation management with our new generation approach.',
  keywords: 'strata management, owners corporation, Melbourne, property management, body corporate, NewGen Strata Services',
  authors: [{ name: 'NewGen Strata Services' }],
  creator: 'NewGen Strata Services',
  publisher: 'NewGen Strata Services',
  metadataBase: new URL('https://newgenstrataservices.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://newgenstrataservices.com',
    siteName: 'NewGen Strata Services',
    title: 'NewGen Strata Services - Premium Strata Management Melbourne',
    description: 'Experience excellence in owners corporation management with our new generation approach to strata services in Melbourne.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NewGen Strata Services - Melbourne Strata Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewGen Strata Services - Premium Strata Management Melbourne',
    description: 'Experience excellence in owners corporation management with our new generation approach.',
    images: ['/images/twitter-image.jpg'],
    creator: '@newgenstrataservices',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}

// Force dynamic rendering for better security
export const dynamic = 'force-dynamic'
export const revalidate = false