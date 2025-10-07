import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      {/* Melbourne Skyline Background */}
      <div className="skyline-silhouette relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom section-padding z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <div className="relative h-32 w-36 bg-white rounded-lg">
                  <Image
                    src="/images/logo/newgen-logo.png"
                    alt="NewGen Strata Services"
                    fill
                    className="object-contain pt-3 pb-2"
                  />
                </div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                A new generation organisation designed to provide exceptional support
                services to owners corporations using the latest technology and a
                commitment to excellence.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-brand-accent">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Services', href: '/services' },
                  // { name: 'Our Approach', href: '/approach' },
                  { name: 'Meet Our Founders', href: '/about#founders' },
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'Get Quote', href: '/quote' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-brand-accent">Our Services</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Meeting Management', href: '/services/meeting-management' },
                  { name: 'Financial Management', href: '/services/financial-management' },
                  { name: 'Maintenance Coordination', href: '/services/maintenance-coordination' },
                  { name: 'Compliance & Administration', href: '/services/compliance-administration' },
                  { name: 'Insurance Services', href: '/services/insurance-services' },
                  { name: 'Dispute Resolution & Support', href: '/services/dispute-resolution-support' }
                ].map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-brand-accent">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-brand-accent mt-0.5" />
                  <div className="text-sm text-gray-300">
                    Melbourne, Victoria<br />
                    Australia
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-accent" />
                  <span className="text-sm text-gray-300">+61 3 9XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-accent" />
                  <span className="text-sm text-gray-300">info@newgenstrataservices.com.au</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-brand-accent mt-0.5" />
                  <div className="text-sm text-gray-300">
                    Mon - Fri: 9:00 AM - 5:00 PM<br />
                    Emergency: 24/7
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              {/* <div className="border-t border-gray-600 pt-6">
                <h4 className="font-medium text-white mb-3">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button size="sm" className="bg-brand-accent text-brand-dark hover:bg-brand-accent/90">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-gray-600" />
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <p>&copy; {currentYear} NewGen Strata Services Pty Ltd. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            <span className="text-brand-accent font-medium">
              &quot;Delighting our customers&quot;
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}