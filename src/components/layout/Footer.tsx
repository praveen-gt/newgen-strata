// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Separator } from '@/components/ui/separator'
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   ArrowRight,
//   Award,
//   Users,
//   Briefcase
// } from 'lucide-react'

// export function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-brand-dark text-white">
//       {/* Main Footer Content */}
//       <div className="skyline-silhouette relative">
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="container-custom section-padding z-10 relative">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
//             {/* Company Info */}
//             <div className="space-y-6">
//               <Link href="/" className="inline-block">
//                 <div className="relative h-24 w-40 bg-white rounded-lg p-2">
//                   <Image
//                     src="/images/logo/newgen-logo.jpeg"
//                     alt="NewGen Strata Services"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </Link>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 A new generation organisation providing personal, high-quality strata management 
//                 services in Melbourne. Operating with honesty, integrity, and a commitment to 
//                 excellence.
//               </p>
//               <div className="pt-4">
//                 <p className="text-brand-accent font-semibold text-sm mb-3">Follow Us</p>
//                 <div className="flex space-x-4">
//                   <Link 
//                     href="https://facebook.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200"
//                     aria-label="Facebook"
//                   >
//                     <Facebook className="h-5 w-5" />
//                   </Link>
//                   <Link 
//                     href="https://twitter.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200"
//                     aria-label="Twitter"
//                   >
//                     <Twitter className="h-5 w-5" />
//                   </Link>
//                   <Link 
//                     href="https://instagram.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200"
//                     aria-label="Instagram"
//                   >
//                     <Instagram className="h-5 w-5" />
//                   </Link>
//                   <Link 
//                     href="https://linkedin.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200"
//                     aria-label="LinkedIn"
//                   >
//                     <Linkedin className="h-5 w-5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="space-y-6">
//               <h3 className="font-semibold text-lg text-brand-accent flex items-center gap-2">
//                 <ArrowRight className="h-5 w-5" />
//                 Quick Links
//               </h3>
//               <ul className="space-y-3">
//                 {[
//                   { name: 'Home', href: '/' },
//                   { name: 'About Us', href: '/about' },
//                   { name: 'Our Services', href: '/services' },
//                   { name: 'Service Providers', href: '/service-providers' },
//                   { name: 'Contact Us', href: '/contact' },
//                   { name: 'Get a Quote', href: '/quote' },
//                 ].map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       href={link.href}
//                       className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
//                     >
//                       <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
//                       <span className="group-hover:translate-x-1 transition-transform duration-200">
//                         {link.name}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Our Commitments & Services */}
//             <div className="space-y-6">
//               <h3 className="font-semibold text-lg text-brand-accent flex items-center gap-2">
//                 <Award className="h-5 w-5" />
//                 Our Commitments
//               </h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-2 text-sm text-gray-300">
//                   <div className="w-2 h-2 bg-brand-accent rounded-full mt-1.5 flex-shrink-0" />
//                   <span>Capability - Deep knowledge & expertise</span>
//                 </li>
//                 <li className="flex items-start gap-2 text-sm text-gray-300">
//                   <div className="w-2 h-2 bg-brand-accent rounded-full mt-1.5 flex-shrink-0" />
//                   <span>Reliability - Consistent service you can count on</span>
//                 </li>
//                 <li className="flex items-start gap-2 text-sm text-gray-300">
//                   <div className="w-2 h-2 bg-brand-accent rounded-full mt-1.5 flex-shrink-0" />
//                   <span>Integrity - Honesty & transparency</span>
//                 </li>
//               </ul>

//               <div className="pt-4 border-t border-gray-600">
//                 <h4 className="font-semibold text-sm text-white mb-3 flex items-center gap-2">
//                   <Briefcase className="h-4 w-4 text-brand-accent" />
//                   Key Services
//                 </h4>
//                 <ul className="space-y-2">
//                   {[
//                     'Meeting Management',
//                     'Financial Management',
//                     'Maintenance Coordination',
//                     'Compliance & Administration',
//                     'Insurance Services',
//                     'Dispute Resolution',
//                   ].map((service) => (
//                     <li key={service}>
//                       <Link 
//                         href="/services" 
//                         className="text-gray-300 hover:text-white text-xs transition-colors duration-200 hover:translate-x-1 inline-block"
//                       >
//                         {service}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-6">
//               <h3 className="font-semibold text-lg text-brand-accent flex items-center gap-2">
//                 <Phone className="h-5 w-5" />
//                 Contact Us
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3 group">
//                   <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
//                   <div className="text-sm text-gray-300">
//                     <p className="font-medium text-white mb-1">Office Location</p>
//                     Melbourne, Victoria<br />
//                     Australia
//                   </div>
//                 </div>
                
//                 <a 
//                   href="tel:+61399999999" 
//                   className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-200"
//                 >
//                   <Phone className="h-5 w-5 text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
//                   <div>
//                     <p className="text-xs text-gray-400">Phone</p>
//                     <span className="text-sm text-gray-300 group-hover:text-white">+61 3 9XXX XXXX</span>
//                   </div>
//                 </a>
                
//                 <a 
//                   href="mailto:info@newgenstrataservices.com.au" 
//                   className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-200"
//                 >
//                   <Mail className="h-5 w-5 text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
//                   <div>
//                     <p className="text-xs text-gray-400">Email</p>
//                     <span className="text-sm text-gray-300 group-hover:text-white break-all">
//                       info@newgenstrataservices.com.au
//                     </span>
//                   </div>
//                 </a>
                
//                 <div className="flex items-start space-x-3">
//                   <Clock className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
//                   <div className="text-sm text-gray-300">
//                     <p className="font-medium text-white mb-1">Business Hours</p>
//                     <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
//                     <p className="text-brand-accent font-medium mt-1">Emergency: 24/7</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Founders Info */}
//               <div className="pt-4 border-t border-gray-600">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Users className="h-4 w-4 text-brand-accent" />
//                   <p className="text-sm font-semibold text-white">Our Founders</p>
//                 </div>
//                 <p className="text-xs text-gray-300">
//                   Kevin Fuller & Sam Disanayaka<br />
//                   <span className="text-brand-accent">70+ Years Combined Experience</span>
//                 </p>
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <Separator className="bg-gray-600" />
//       <div className="container-custom py-6">
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
//             <p className="text-center md:text-left">
//               &copy; {currentYear} NewGen Strata Services Pty Ltd. All rights reserved.
//             </p>
//             <div className="flex space-x-4">
//               <Link href="/privacy" className="hover:text-white transition-colors">
//                 Privacy Policy
//               </Link>
//               <span className="text-gray-600">|</span>
//               <Link href="/terms" className="hover:text-white transition-colors">
//                 Terms of Service
//               </Link>
//               <span className="text-gray-600">|</span>
//               <Link href="/sitemap" className="hover:text-white transition-colors">
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//           <div className="text-sm">
//             <span className="text-brand-accent font-semibold">
//               Delighting our customers
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

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
  Briefcase
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Service Providers', href: '/service-providers' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Get a Quote', href: '/quote' },
  ]

  const services = [
    'Meeting Management',
    'Financial Management',
    'Maintenance Coordination',
    'Compliance & Administration',
    'Insurance Services',
    'Dispute Resolution',
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ]

  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="skyline-silhouette-footer relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Company Info */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg" aria-label="NewGen Strata Services Home">
                <div className="relative h-20 w-32 sm:h-22 sm:w-36 md:h-24 md:w-40 bg-white rounded-lg p-2">
                  <Image
                    src="/images/logo/newgen-logo.jpeg"
                    alt="NewGen Strata Services Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                A new generation organisation providing personal, high-quality strata management 
                services in Melbourne. Operating with honesty, integrity, and a commitment to 
                excellence.
              </p>
              
              <div className="pt-3 sm:pt-4">
                <p className="text-brand-accent font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
                  Follow Us
                </p>
                <div className="flex space-x-3 sm:space-x-4" role="list">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110 duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="space-y-4 sm:space-y-5 md:space-y-6" aria-labelledby="quick-links-heading">
              <h3 id="quick-links-heading" className="font-semibold text-base sm:text-lg text-brand-accent flex items-center gap-2">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm flex items-center group focus:outline-none focus:text-white"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
                      <span className="group-hover:translate-x-1 group-focus:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav className="space-y-4 sm:space-y-5 md:space-y-6" aria-labelledby="services-heading">
              <h3 id="services-heading" className="font-semibold text-base sm:text-lg text-brand-accent flex items-center gap-2">
                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                Our Services
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      href="/services" 
                      className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block focus:outline-none focus:text-white"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="font-semibold text-base sm:text-lg text-brand-accent flex items-center gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                Contact Us
              </h3>
              
              <address className="space-y-3 sm:space-y-4 not-italic">
                {/* Location */}
                <div className="flex items-start space-x-2 sm:space-x-3 group">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-brand-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-gray-300">
                    <p className="font-medium text-white mb-0.5 sm:mb-1">Office Location</p>
                    <p>Melbourne, Victoria<br />Australia</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-2 sm:space-x-3 group">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <a 
                      href="tel:+61399999999"
                      className="text-xs sm:text-sm text-gray-300 hover:text-white focus:text-white focus:outline-none transition-colors"
                    >
                      +61 3 9XXX XXXX
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center space-x-2 sm:space-x-3 group">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <a 
                      href="mailto:info@newgenstrataservices.com.au"
                      className="text-xs sm:text-sm text-gray-300 hover:text-white focus:text-white focus:outline-none break-all transition-colors"
                    >
                      info@newgenstrataservices.com.au
                    </a>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-brand-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-gray-300">
                    <p className="font-medium text-white mb-0.5 sm:mb-1">Business Hours</p>
                    <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-brand-accent font-medium mt-0.5 sm:mt-1">Emergency: 24/7</p>
                  </div>
                </div>
              </address>

              {/* Founders Info */}
              <div className="pt-3 sm:pt-4 border-t border-gray-600">
                <p className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                  Our Founders
                </p>
                <p className="text-xs text-gray-300">
                  Kevin Fuller & Sam Disanayaka
                </p>
                <p className="text-xs text-brand-accent mt-1">
                  70+ Years Combined Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-gray-600" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 lg:gap-6 text-xs sm:text-sm text-gray-400">
            <p>
              &copy; {currentYear} NewGen Strata Services Pty Ltd. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4" aria-label="Legal">
              <Link 
                href="/privacy" 
                className="hover:text-white focus:text-white focus:outline-none transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600 hidden sm:inline" aria-hidden="true">|</span>
              <Link 
                href="/terms" 
                className="hover:text-white focus:text-white focus:outline-none transition-colors whitespace-nowrap"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600 hidden sm:inline" aria-hidden="true">|</span>
              <Link 
                href="/sitemap" 
                className="hover:text-white focus:text-white focus:outline-none transition-colors whitespace-nowrap"
              >
                Sitemap
              </Link>
            </nav>
          </div>
          <p className="text-xs sm:text-sm text-brand-accent font-semibold">
            Delighting our customers
          </p>
        </div>
      </div>
    </footer>
  )
}