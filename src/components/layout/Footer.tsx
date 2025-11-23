import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  ArrowRight,
  Award,
  Users,
  Briefcase
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer Content */}
      <div className="skyline-silhouette relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom section-padding z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <div className="relative h-24 w-40 bg-white rounded-lg p-2">
                  <Image
                    src="/images/logo/newgen-logo.jpeg"
                    alt="NewGen Strata Services"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                A new generation organisation providing personal, high-quality strata management 
                services in Melbourne. Operating with honesty, integrity, and a commitment to 
                excellence.
              </p>
              <div className="pt-4">
                <p className="text-brand-accent font-semibold text-sm mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  <Link 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-brand-accent flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Services', href: '/services' },
                  { name: 'Service Providers', href: '/service-providers' },
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'Get a Quote', href: '/quote' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Commitments & Services */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-brand-accent flex items-center gap-2">
                <Award className="h-5 w-5" />
                Our Commitments
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Capability - Deep knowledge & expertise</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Reliability - Consistent service you can count on</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Integrity - Honesty & transparency</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-600">
                <h4 className="font-semibold text-sm text-white mb-3 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-brand-accent" />
                  Key Services
                </h4>
                <ul className="space-y-2">
                  {[
                    'Meeting Management',
                    'Financial Management',
                    'Maintenance Coordination',
                    'Compliance & Administration',
                    'Insurance Services',
                    'Dispute Resolution',
                  ].map((service) => (
                    <li key={service}>
                      <Link 
                        href="/services" 
                        className="text-gray-300 hover:text-white text-xs transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-brand-accent flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-gray-300">
                    <p className="font-medium text-white mb-1">Office Location</p>
                    Melbourne, Victoria<br />
                    Australia
                  </div>
                </div>
                
                <a 
                  href="tel:+61399999999" 
                  className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <Phone className="h-5 w-5 text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <span className="text-sm text-gray-300 group-hover:text-white">+61 3 9XXX XXXX</span>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@newgenstrataservices.com.au" 
                  className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <Mail className="h-5 w-5 text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <span className="text-sm text-gray-300 group-hover:text-white break-all">
                      info@newgenstrataservices.com.au
                    </span>
                  </div>
                </a>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p className="font-medium text-white mb-1">Business Hours</p>
                    <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-brand-accent font-medium mt-1">Emergency: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Founders Info */}
              <div className="pt-4 border-t border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-brand-accent" />
                  <p className="text-sm font-semibold text-white">Our Founders</p>
                </div>
                <p className="text-xs text-gray-300">
                  Kevin Fuller & Sam Disanayaka<br />
                  <span className="text-brand-accent">70+ Years Combined Experience</span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-gray-600" />
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <p className="text-center md:text-left">
              &copy; {currentYear} NewGen Strata Services Pty Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-brand-accent font-semibold">
              Delighting our customers
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}