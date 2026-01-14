// // "use client"

// // import React, { useState, useEffect } from 'react'
// // import Link from 'next/link'
// // import Image from 'next/image'
// // import { usePathname } from 'next/navigation'
// // import { Button } from '@/components/ui/button'
// // import {
// //   NavigationMenu,
// //   NavigationMenuContent,
// //   NavigationMenuItem,
// //   NavigationMenuLink,
// //   NavigationMenuList,
// //   NavigationMenuTrigger,
// // } from '@/components/ui/navigation-menu'
// // import {
// //   Menu, Phone, Mail, MapPin, ArrowRight, LayoutGrid,
// //   Calendar, DollarSign, Wrench, FileCheck, Shield, Users, Droplets,
// //   Eye, Lightbulb, X, ChevronRight
// // } from 'lucide-react'
// // import { cn } from '@/lib/utils'
// // import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

// // const navigation = [
// //   { name: 'Home', href: '/' },
// //   { name: 'About', href: '/about' },
// //   {
// //     name: 'Services',
// //     href: '/services',
// //     hasDropdown: true,
// //     subItems: [
// //       { name: 'All Services', href: '/services', description: 'Complete overview of our services', icon: LayoutGrid, },
// //       { name: 'Meeting Management', href: '/services/meeting-management', description: 'AGM and committee meeting services', icon: Calendar, },
// //       { name: 'Financial Management', href: '/services/financial-management', description: 'Comprehensive financial oversight', icon: DollarSign, },
// //       { name: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Property maintenance and repairs', icon: Wrench, },
// //       { name: 'Compliance & Administration', href: '/services/compliance-administration', description: 'Legal and regulatory compliance', icon: FileCheck, },
// //       { name: 'Insurance Services', href: '/services/insurance-services', description: 'Insurance coordination and claims', icon: Shield, },
// //       { name: 'Dispute Resolution & Support', href: '/services/dispute-resolution-support', description: '24/7 emergency response services', icon: Users, }
// //     ]
// //   },
// //   {
// //     name: 'Case Studies',
// //     href: '',
// //     hasDropdown: true,
// //     subItems: [
// //       { name: 'Fixing the Leaks', href: '/case-studies/fixing-the-leaks', description: 'Emergency water damage response case study', icon: Droplets, },
// //       { name: 'Making the Invisible Visible', href: '/case-studies/making-invisible-visible', description: 'Financial transparency success story', icon: Eye, },
// //       { name: 'Problem Solvers to the Rescue', href: '/case-studies/problem-solvers-rescue', description: 'Complex dispute resolution case study', icon: Lightbulb, }
// //     ]
// //   },
// //   { name: 'Contact', href: '/contact' },
// // ]

// // export function Header() {
// //   const [isScrolled, setIsScrolled] = useState(false)
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
// //   const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)
// //   const pathname = usePathname()

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 20)
// //     }
// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   useEffect(() => {
// //     if (isMobileMenuOpen) {
// //       document.body.style.overflow = 'hidden'
// //     } else {
// //       document.body.style.overflow = 'unset'
// //     }
// //     return () => {
// //       document.body.style.overflow = 'unset'
// //     }
// //   }, [isMobileMenuOpen])

// //   const isActive = (path: string) => {
// //     if (path === '/services') {
// //       return pathname === path || pathname.startsWith('/services/')
// //     }
// //     return pathname === path
// //   }

// //   const toggleMobileItem = (itemName: string) => {
// //     setExpandedMobileItem(expandedMobileItem === itemName ? null : itemName)
// //   }

// //   return (
// //     <>
// //       {/* Top Contact Bar - Slides up on scroll */}
// //       <div className={cn(
// //         "hidden lg:block bg-brand-dark text-white border-b border-white/10 transition-all duration-300 overflow-hidden",
// //         isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-2.5"
// //       )}>
// //         <div className="container-custom">
// //           <div className="flex justify-between items-center text-xs">
// //             <div className="flex items-center space-x-8">
// //               <a href="tel:+61399999999" className="flex items-center space-x-2 hover:text-primary transition-colors group">
// //                 <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
// //                 <span>+61 3 9XXX XXXX</span>
// //               </a>
// //               <a href="mailto:info@newgenstrataservices.com.au" className="flex items-center space-x-2 hover:text-primary transition-colors group">
// //                 <Mail className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
// //                 <span>info@newgenstrataservices.com.au</span>
// //               </a>
// //               <div className="flex items-center space-x-2 text-white/70">
// //                 <MapPin className="h-3.5 w-3.5" />
// //                 <span>Melbourne, Victoria</span>
// //               </div>
// //             </div>
// //             <div className="text-white/90 font-medium italic">
// //               &quot;The quality is long remembered after the price is forgotten&quot;
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Navigation - Compact height */}
// //       <header
// //         className={cn(
// //           'sticky top-0 z-50 w-full transition-all duration-500 ease-in-out border-b',
// //           isScrolled
// //             ? 'bg-white shadow-lg border-gray-200'
// //             : 'bg-white/95 backdrop-blur-sm border-gray-100'
// //         )}
// //       >
// //         <div className="container-custom relative">
// //           <div className="flex items-center justify-between h-16">

// //             {/* Logo - Responsive sizing for mobile and desktop */}
// //             <Link
// //               href="/"
// //               className={cn(
// //                 "z-20 transition-all duration-500 ease-in-out",
// //                 "lg:absolute",
// //                 isScrolled
// //                   ? "lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
// //                   : "lg:left-0 lg:top-1/2"
// //               )}
// //             >
// //               <div className={cn(
// //                 "relative transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg p-2",
// //                 // Mobile sizes
// //                 "h-12 w-28",
// //                 // Desktop sizes
// //                 isScrolled
// //                   ? "lg:h-14 lg:w-32 lg:shadow-md"
// //                   : "lg:h-24 lg:w-56 lg:shadow-xl lg:hover:scale-105"
// //               )}>
// //                 <Image
// //                   // src="/images/logo/newgen-logo.png"
// //                   src="/images/logo/newgen-logo.jpeg"
// //                   alt="NewGen Strata Services"
// //                   fill
// //                   className="object-contain transition-all duration-500"
// //                   priority
// //                   sizes="(max-width: 768px) 112px, 224px"
// //                 />
// //               </div>
// //             </Link>

// //             {/* Spacer for logo - Desktop only */}
// //             <div className={cn(
// //               "hidden lg:block transition-all duration-500",
// //               isScrolled ? "w-36" : "w-60"
// //             )} />

// //             {/* Desktop Navigation */}
// //             <NavigationMenu className="hidden lg:flex ml-auto mr-6">
// //               <NavigationMenuList>
// //                 {navigation.map((item) => (
// //                   <NavigationMenuItem key={item.name}>
// //                     {item.hasDropdown ? (
// //                       <>
// //                         <NavigationMenuTrigger
// //                           className={cn(
// //                             'text-sm font-medium transition-colors hover:text-primary bg-transparent',
// //                             isActive(item.href) ? 'text-primary' : 'text-gray-700'
// //                           )}
// //                         >
// //                           {item.name}
// //                         </NavigationMenuTrigger>
// //                         <NavigationMenuContent>
// //                           <VisuallyHidden>
// //                             <h2>{item.name} Menu</h2>
// //                           </VisuallyHidden>
// //                           <div className="w-[460px] p-3">
// //                             <div className="grid gap-1">
// //                               {item.subItems?.map((subItem) => {
// //                                 const IconComponent = subItem.icon || ArrowRight
// //                                 return (
// //                                   <NavigationMenuLink key={subItem.name} asChild>
// //                                     <Link
// //                                       href={subItem.href}
// //                                       className="group block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-gray-50 border border-transparent hover:border-primary/10"
// //                                     >
// //                                       <div className="flex items-center gap-3">
// //                                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
// //                                           <IconComponent className="h-4 w-4 text-primary group-hover:text-white" />
// //                                         </div>
// //                                         <div className="flex-1 space-y-0.5">
// //                                           <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
// //                                             {subItem.name}
// //                                           </div>
// //                                           <p className="text-xs leading-tight text-gray-600">
// //                                             {subItem.description}
// //                                           </p>
// //                                         </div>
// //                                       </div>
// //                                     </Link>
// //                                   </NavigationMenuLink>
// //                                 )
// //                               })}
// //                             </div>
// //                           </div>
// //                         </NavigationMenuContent>
// //                       </>
// //                     ) : (
// //                       <NavigationMenuLink asChild>
// //                         <Link
// //                           href={item.href}
// //                           className={cn(
// //                             'text-sm font-medium transition-colors hover:text-primary px-3 py-2 relative',
// //                             isActive(item.href) ? 'text-primary' : 'text-gray-700'
// //                           )}
// //                         >
// //                           {item.name}
// //                           {isActive(item.href) && (
// //                             <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
// //                           )}
// //                         </Link>
// //                       </NavigationMenuLink>
// //                     )}
// //                   </NavigationMenuItem>
// //                 ))}
// //               </NavigationMenuList>
// //             </NavigationMenu>

// //             {/* CTA Buttons */}
// //             <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
// //               <Button asChild variant="ghost" size="sm" className="text-gray-700 hover:text-primary hover:bg-primary/5">
// //                 <a href="tel:+61399999999">
// //                   <Phone className="h-4 w-4 mr-2" />
// //                   Call
// //                 </a>
// //               </Button>
// //               <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all">
// //                 <Link href="/contact">Get Quote</Link>
// //               </Button>
// //             </div>

// //             {/* Mobile Menu Button */}
// //             <Button 
// //               variant="ghost" 
// //               size="sm" 
// //               className={cn(
// //                 "lg:hidden ml-auto",
// //                 isScrolled ? "text-primary" : "text-gray-700", 
// //                 "bg-primary/5"
// //               )}
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //             >
// //               {isMobileMenuOpen ? (
// //                 <X className="h-6 w-6 text-primary" />
// //               ) : (
// //                 <Menu className="h-6 w-6 text-primary" />
// //               )}
// //               <span className="sr-only">Toggle menu</span>
// //             </Button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Modern Mobile Menu - Full Screen Overlay */}
// //       <div
// //         className={cn(
// //           "fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out",
// //           isMobileMenuOpen
// //             ? "opacity-100 pointer-events-auto"
// //             : "opacity-0 pointer-events-none"
// //         )}
// //       >
// //         {/* Backdrop */}
// //         <div 
// //           className={cn(
// //             "absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/90 to-primary/95 backdrop-blur-sm transition-opacity duration-300",
// //             isMobileMenuOpen ? "opacity-100" : "opacity-0"
// //           )}
// //           onClick={() => setIsMobileMenuOpen(false)}
// //         />

// //         {/* Menu Content */}
// //         <div
// //           className={cn(
// //             "relative h-full overflow-y-auto transition-transform duration-300 ease-out",
// //             isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
// //           )}
// //         >
// //           <div className="min-h-full flex flex-col p-6 pt-24">

// //             {/* Mobile Navigation */}
// //             <nav className="flex-1 space-y-2">
// //               {navigation.map((item, index) => (
// //                 <div 
// //                   key={item.name}
// //                   className={cn(
// //                     "transition-all duration-300",
// //                     isMobileMenuOpen 
// //                       ? "opacity-100 translate-x-0" 
// //                       : "opacity-0 -translate-x-4"
// //                   )}
// //                   style={{ transitionDelay: `${index * 50}ms` }}
// //                 >
// //                   {item.hasDropdown ? (
// //                     <div className="space-y-2">
// //                       <button
// //                         onClick={() => toggleMobileItem(item.name)}
// //                         className={cn(
// //                           "w-full text-left text-lg font-semibold py-4 px-5 rounded-xl transition-all duration-200 flex items-center justify-between group",
// //                           expandedMobileItem === item.name
// //                             ? "bg-white/20 text-white"
// //                             : "text-white/90 hover:bg-white/10 hover:text-white"
// //                         )}
// //                       >
// //                         <span>{item.name}</span>
// //                         <ChevronRight 
// //                           className={cn(
// //                             "h-5 w-5 transition-transform duration-200",
// //                             expandedMobileItem === item.name && "rotate-90"
// //                           )}
// //                         />
// //                       </button>

// //                       {/* Submenu */}
// //                       <div
// //                         className={cn(
// //                           "overflow-hidden transition-all duration-300 ease-in-out",
// //                           expandedMobileItem === item.name
// //                             ? "max-h-[800px] opacity-100"
// //                             : "max-h-0 opacity-0"
// //                         )}
// //                       >
// //                         <div className="ml-4 space-y-1 pt-1">
// //                           {item.subItems?.map((subItem) => {
// //                             const IconComponent = subItem.icon || ArrowRight
// //                             return (
// //                               <Link
// //                                 key={subItem.name}
// //                                 href={subItem.href}
// //                                 onClick={() => setIsMobileMenuOpen(false)}
// //                                 className="group flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-200 border border-white/10 hover:border-white/20"
// //                               >
// //                                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
// //                                   <IconComponent className="h-5 w-5" />
// //                                 </div>
// //                                 <div className="flex-1 min-w-0">
// //                                   <div className="text-white font-medium text-sm mb-1 group-hover:text-primary transition-colors">
// //                                     {subItem.name}
// //                                   </div>
// //                                   <p className="text-white/70 text-xs leading-relaxed">
// //                                     {subItem.description}
// //                                   </p>
// //                                 </div>
// //                               </Link>
// //                             )
// //                           })}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <Link
// //                       href={item.href}
// //                       onClick={() => setIsMobileMenuOpen(false)}
// //                       className={cn(
// //                         "block text-lg font-semibold py-4 px-5 rounded-xl transition-all duration-200",
// //                         isActive(item.href)
// //                           ? "bg-white/20 text-white border-l-4 border-primary"
// //                           : "text-white/90 hover:bg-white/10 hover:text-white"
// //                       )}
// //                     >
// //                       {item.name}
// //                     </Link>
// //                   )}
// //                 </div>
// //               ))}
// //             </nav>

// //             {/* Mobile Contact Info & CTA */}
// //             <div 
// //               className={cn(
// //                 "mt-8 space-y-4 transition-all duration-300",
// //                 isMobileMenuOpen 
// //                   ? "opacity-100 translate-y-0" 
// //                   : "opacity-0 translate-y-4"
// //               )}
// //               style={{ transitionDelay: '300ms' }}
// //             >
// //               {/* Contact Info */}
// //               <div className="space-y-3 p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
// //                 <a 
// //                   href="tel:+61399999999" 
// //                   className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
// //                 >
// //                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-primary group-hover:scale-110 transition-all">
// //                     <Phone className="h-5 w-5" />
// //                   </div>
// //                   <div>
// //                     <div className="text-xs text-white/60 mb-0.5">Call us</div>
// //                     <div className="font-medium">+61 3 9XXX XXXX</div>
// //                   </div>
// //                 </a>
// //                 <a 
// //                   href="mailto:info@newgenstrataservices.com.au" 
// //                   className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
// //                 >
// //                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-primary group-hover:scale-110 transition-all">
// //                     <Mail className="h-5 w-5" />
// //                   </div>
// //                   <div>
// //                     <div className="text-xs text-white/60 mb-0.5">Email us</div>
// //                     <div className="font-medium text-sm">info@newgenstrataservices.com.au</div>
// //                   </div>
// //                 </a>
// //               </div>

// //               {/* CTA Button */}
// //               <Button 
// //                 asChild 
// //                 className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white h-14 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
// //               >
// //                 <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
// //                   Get Your Free Quote
// //                   <ArrowRight className="ml-2 h-5 w-5" />
// //                 </Link>
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// "use client"

// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import { Button } from '@/components/ui/button'
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from '@/components/ui/navigation-menu'
// import {
//   Menu, Phone, Mail, MapPin, ArrowRight,
//   Briefcase, Users, X, ChevronRight
// } from 'lucide-react'
// import { cn } from '@/lib/utils'
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Service Providers', href: '/service-providers' },
//   { name: 'Contact', href: '/contact' },
// ]

// // Quick links for desktop dropdown (optional)
// const quickLinks = [
//   {
//     name: 'Our Services',
//     href: '/services',
//     description: 'Complete overview of our comprehensive strata management services',
//     icon: Briefcase
//   },
//   {
//     name: 'Service Providers',
//     href: '/service-providers',
//     description: 'Our vetted network of professional service providers',
//     icon: Users
//   },
// ]

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'unset'
//     }
//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [isMobileMenuOpen])

//   const isActive = (path: string) => {
//     return pathname === path
//   }

//   return (
//     <>
//       {/* Top Contact Bar - Slides up on scroll */}
//       <div className={cn(
//         "hidden lg:block bg-brand-dark text-white border-b border-white/10 transition-all duration-300 overflow-hidden",
//         isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-2.5"
//       )}>
//         <div className="container-custom">
//           <div className="flex justify-between items-center text-xs">
//             <div className="flex items-center space-x-8">
//               <a href="tel:+61399999999" className="flex items-center space-x-2 hover:text-primary transition-colors group">
//                 <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
//                 <span>+61 3 9XXX XXXX</span>
//               </a>
//               <a href="mailto:info@newgenstrataservices.com.au" className="flex items-center space-x-2 hover:text-primary transition-colors group">
//                 <Mail className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
//                 <span>info@newgenstrataservices.com.au</span>
//               </a>
//               <div className="flex items-center space-x-2 text-white/70">
//                 <MapPin className="h-3.5 w-3.5" />
//                 <span>Melbourne, Victoria</span>
//               </div>
//             </div>
//             <div className="text-white/90 font-medium italic">
//               &quot;The quality is long remembered after the price is forgotten&quot;
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation - Compact height */}
//       <header
//         className={cn(
//           'sticky top-0 z-50 w-full transition-all duration-500 ease-in-out border-b',
//           isScrolled
//             ? 'bg-white shadow-lg border-gray-200'
//             : 'bg-white/95 backdrop-blur-sm border-gray-100'
//         )}
//       >
//         <div className="container-custom relative">
//           <div className="flex items-center justify-between h-16">

//             {/* Logo - Responsive sizing for mobile and desktop */}
//             <Link
//               href="/"
//               className={cn(
//                 "z-20 transition-all duration-500 ease-in-out",
//                 "lg:absolute",
//                 isScrolled
//                   ? "lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
//                   : "lg:left-0 lg:top-1/2"
//               )}
//             >
//               <div className={cn(
//                 "relative transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg p-2",
//                 // Mobile sizes
//                 "h-12 w-28",
//                 // Desktop sizes
//                 isScrolled
//                   ? "lg:h-14 lg:w-32 lg:shadow-md"
//                   : "lg:h-24 lg:w-56 lg:shadow-xl lg:hover:scale-105"
//               )}>
//                 <Image
//                   src="/images/logo/newgen-logo.webp"
//                   alt="NewGen Strata Services"
//                   fill
//                   className="object-contain transition-all duration-500"
//                   priority
//                   sizes="(max-width: 768px) 112px, 224px"
//                 />
//               </div>
//             </Link>

//             {/* Spacer for logo - Desktop only */}
//             <div className={cn(
//               "hidden lg:block transition-all duration-500",
//               isScrolled ? "w-36" : "w-60"
//             )} />

//             {/* Desktop Navigation */}
//             <NavigationMenu className="hidden lg:flex ml-auto mr-6">
//               <NavigationMenuList>
//                 {navigation.map((item) => (
//                   <NavigationMenuItem key={item.name}>
//                     <NavigationMenuLink asChild>
//                       <Link
//                         href={item.href}
//                         className={cn(
//                           'text-sm font-medium transition-colors hover:text-primary px-3 py-2 relative',
//                           isActive(item.href) ? 'text-primary' : 'text-gray-700'
//                         )}
//                       >
//                         {item.name}
//                         {isActive(item.href) && (
//                           <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
//                         )}
//                       </Link>
//                     </NavigationMenuLink>
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>

//             {/* CTA Buttons */}
//             <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
//               <Button asChild variant="ghost"
//                 // size="sm"
//                 // className="text-gray-700 hover:text-primary hover:bg-primary/5"
//                 className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all rounded-full"
//               >
//                 <a href="tel:+61399999999">
//                   <Phone className="h-4 w-4 mr-2" />
//                   Call
//                 </a>
//               </Button>
//               {/* <Button 
//               asChild 
//               className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all rounded-full"
//               >
//                 <Link href="/contact">Get Quote</Link>
//               </Button> */}
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="sm"
//               className={cn(
//                 "lg:hidden ml-auto",
//                 isScrolled ? "text-primary" : "text-gray-700",
//                 "bg-primary/5"
//               )}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6 text-primary" />
//               ) : (
//                 <Menu className="h-6 w-6 text-primary" />
//               )}
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Modern Mobile Menu - Full Screen Overlay */}
//       <div
//         className={cn(
//           "fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out",
//           isMobileMenuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         )}
//       >
//         {/* Backdrop */}
//         <div
//           className={cn(
//             "absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/90 to-primary/95 backdrop-blur-sm transition-opacity duration-300",
//             isMobileMenuOpen ? "opacity-100" : "opacity-0"
//           )}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />

//         {/* Menu Content */}
//         <div
//           className={cn(
//             "relative h-full overflow-y-auto transition-transform duration-300 ease-out",
//             isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
//           )}
//         >
//           <div className="min-h-full flex flex-col p-6 pt-24">

//             {/* Mobile Navigation */}
//             <nav className="flex-1 space-y-2">
//               {navigation.map((item, index) => (
//                 <div
//                   key={item.name}
//                   className={cn(
//                     "transition-all duration-300",
//                     isMobileMenuOpen
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 -translate-x-4"
//                   )}
//                   style={{ transitionDelay: `${index * 50}ms` }}
//                 >
//                   <Link
//                     href={item.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={cn(
//                       "block text-lg font-semibold py-4 px-5 rounded-xl transition-all duration-200",
//                       isActive(item.href)
//                         ? "bg-white/20 text-white border-l-4 border-primary"
//                         : "text-white/90 hover:bg-white/10 hover:text-white"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 </div>
//               ))}

//               {/* Quick Access Links in Mobile */}
//               <div
//                 className={cn(
//                   "mt-6 pt-6 border-t border-white/20 space-y-2 transition-all duration-300",
//                   isMobileMenuOpen
//                     ? "opacity-100 translate-x-0"
//                     : "opacity-0 -translate-x-4"
//                 )}
//                 style={{ transitionDelay: `${navigation.length * 50}ms` }}
//               >
//                 <div className="text-white/60 text-sm font-medium px-5 mb-3">Quick Access</div>
//                 {/* {quickLinks.map((link) => {
//                   const IconComponent = link.icon
//                   return (
//                     <Link
//                       key={link.name}
//                       href={link.href}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-200 border border-white/10 hover:border-white/20"
//                     >
//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-white hover:bg-primary hover:scale-110 transition-all duration-200">
//                         <IconComponent className="h-5 w-5" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="text-white font-medium text-sm mb-1">
//                           {link.name}
//                         </div>
//                         <p className="text-white/70 text-xs leading-relaxed">
//                           {link.description}
//                         </p>
//                       </div>
//                     </Link>
//                   )
//                 })} */}
//               </div>
//             </nav>

//             {/* Mobile Contact Info & CTA */}
//             <div
//               className={cn(
//                 " space-y-4 transition-all duration-300",
//                 isMobileMenuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               )}
//               style={{ transitionDelay: '300ms' }}
//             >
//               {/* Contact Info */}
//               <div className="space-y-3 p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
//                 <a
//                   href="tel:+61399999999"
//                   className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
//                 >
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-primary group-hover:scale-110 transition-all">
//                     <Phone className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-white/60 mb-0.5">Call us</div>
//                     <div className="font-medium">+61 3 9XXX XXXX</div>
//                   </div>
//                 </a>
//                 <a
//                   href="mailto:info@newgenstrataservices.com.au"
//                   className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
//                 >
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-primary group-hover:scale-110 transition-all">
//                     <Mail className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-white/60 mb-0.5">Email us</div>
//                     <div className="font-medium text-sm">info@newgenstrataservices.com.au</div>
//                   </div>
//                 </a>
//               </div>

//               {/* CTA Button */}
//               <Button
//                 asChild
//                 className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white h-14 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
//               >
//                 <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                   Get Your Free Quote
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


// "use client"

// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import { Button } from '@/components/ui/button'
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from '@/components/ui/navigation-menu'
// import {
//   Menu, Phone, Mail, MapPin, ArrowRight,
//   Briefcase, Users, X, ChevronRight
// } from 'lucide-react'
// import { cn } from '@/lib/utils'
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Service Providers', href: '/service-providers' },
//   { name: 'Contact', href: '/contact' },
// ]

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'unset'
//     }
//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [isMobileMenuOpen])

//   const isActive = (path: string) => {
//     return pathname === path
//   }

//   return (
//     <>
//       {/* Top Contact Bar - Slides up on scroll */}
//       <div className={cn(
//         "hidden lg:block bg-gradient-to-r from-[#6B2DD8] via-[#7C3AED] to-[#8B5CF6] text-white border-b border-white/10 transition-all duration-300 overflow-hidden",
//         isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-2.5"
//       )}>
//         <div className="container-custom">
//           <div className="flex justify-between items-center text-xs">
//             <div className="flex items-center space-x-8">
//               <a href="tel:+61399999999" className="flex items-center space-x-2 hover:text-[#10B981] transition-colors group">
//                 <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
//                 <span>+61 3 9XXX XXXX</span>
//               </a>
//               <a href="mailto:info@newgenstrataservices.com.au" className="flex items-center space-x-2 hover:text-[#10B981] transition-colors group">
//                 <Mail className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
//                 <span>info@newgenstrataservices.com.au</span>
//               </a>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <MapPin className="h-3.5 w-3.5" />
//                 <span>Melbourne, Victoria</span>
//               </div>
//             </div>
//             <div className="text-white/95 font-medium italic">
//               &quot;The quality is long remembered after the price is forgotten&quot;
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation - Enhanced with gradient accent */}
//       <header
//         className={cn(
//           'sticky top-0 z-50 w-full transition-all duration-500 ease-in-out',
//           isScrolled
//             ? 'bg-white shadow-lg border-b border-gray-200'
//             : 'bg-white/98 backdrop-blur-md border-b-2 border-transparent shadow-sm'
//         )}
//       >
//         {/* Gradient accent bar at top of header */}
//         <div className={cn(
//           "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6B2DD8] via-[#10B981] to-[#6B2DD8] transition-opacity duration-300",
//           isScrolled ? "opacity-100" : "opacity-0"
//         )} />
        
//         <div className="container-custom relative">
//           <div className="flex items-center justify-between h-20 lg:h-16">

//             {/* Enhanced Logo with gradient background on mobile */}
//             <Link
//               href="/"
//               className={cn(
//                 "z-20 transition-all duration-500 ease-in-out relative",
//                 "lg:absolute",
//                 isScrolled
//                   ? "lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
//                   : "lg:left-0 lg:top-1/2"
//               )}
//             >
//               {/* Mobile: Logo with gradient glow background */}
//               <div className={cn(
//                 "relative transition-all duration-500 ease-in-out rounded-xl overflow-hidden",
//                 "lg:bg-white lg:shadow-lg lg:p-2",
//                 // Mobile sizes - LARGER
//                 "h-16 w-36",
//                 // Desktop sizes
//                 isScrolled
//                   ? "lg:h-14 lg:w-32 lg:shadow-md"
//                   : "lg:h-24 lg:w-56 lg:shadow-xl lg:hover:scale-105"
//               )}>
//                 {/* Gradient background for mobile only */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#6B2DD8]/10 via-[#10B981]/10 to-[#6B2DD8]/10 lg:hidden" />
                
//                 {/* Logo image container with enhanced shadow on mobile */}
//                 <div className={cn(
//                   "relative w-full h-full bg-white rounded-lg p-2",
//                   "lg:bg-transparent lg:p-0 lg:rounded-none",
//                   "shadow-lg lg:shadow-none"
//                 )}>
//                   <Image
//                     src="/images/logo/newgen-logo.webp"
//                     alt="NewGen Strata Services"
//                     fill
//                     className="object-contain transition-all duration-500 p-1 lg:p-0"
//                     priority
//                     sizes="(max-width: 768px) 144px, 224px"
//                   />
//                 </div>
//               </div>
//             </Link>

//             {/* Spacer for logo - Desktop only */}
//             <div className={cn(
//               "hidden lg:block transition-all duration-500",
//               isScrolled ? "w-36" : "w-60"
//             )} />

//             {/* Desktop Navigation */}
//             <NavigationMenu className="hidden lg:flex ml-auto mr-6">
//               <NavigationMenuList>
//                 {navigation.map((item) => (
//                   <NavigationMenuItem key={item.name}>
//                     <NavigationMenuLink asChild>
//                       <Link
//                         href={item.href}
//                         className={cn(
//                           'text-sm font-semibold transition-all duration-200 hover:text-[#7C3AED] px-4 py-2 relative rounded-lg',
//                           isActive(item.href) 
//                             ? 'text-[#7C3AED] bg-[#7C3AED]/5' 
//                             : 'text-gray-700 hover:bg-gray-50'
//                         )}
//                       >
//                         {item.name}
//                         {isActive(item.href) && (
//                           <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#10B981] rounded-full" />
//                         )}
//                       </Link>
//                     </NavigationMenuLink>
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>

//             {/* CTA Button - Enhanced gradient */}
//             <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
//               <Button 
//                 asChild 
//                 className="bg-gradient-to-r from-[#7C3AED] to-[#10B981] hover:from-[#6B2DD8] hover:to-[#059669] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full font-semibold hover:scale-105"
//               >
//                 <a href="tel:+61399999999">
//                   <Phone className="h-4 w-4 mr-2" />
//                   Call Now
//                 </a>
//               </Button>
//             </div>

//             {/* Mobile Menu Button - Enhanced with gradient background */}
//             <Button
//               variant="ghost"
//               size="sm"
//               className={cn(
//                 "lg:hidden ml-auto relative overflow-hidden group",
//                 "bg-gradient-to-r from-[#7C3AED] to-[#10B981] hover:from-[#6B2DD8] hover:to-[#059669]",
//                 "text-white shadow-md hover:shadow-lg transition-all duration-300"
//               )}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6 relative z-10" />
//               ) : (
//                 <Menu className="h-6 w-6 relative z-10" />
//               )}
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Modern Mobile Menu - Full Screen Overlay with enhanced gradients */}
//       <div
//         className={cn(
//           "fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out",
//           isMobileMenuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         )}
//       >
//         {/* Enhanced gradient backdrop */}
//         <div 
//           className={cn(
//             "absolute inset-0 bg-gradient-to-br from-[#6B2DD8]/95 via-[#7C3AED]/90 to-[#10B981]/95 backdrop-blur-md transition-opacity duration-300",
//             isMobileMenuOpen ? "opacity-100" : "opacity-0"
//           )}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />

//         {/* Menu Content */}
//         <div
//           className={cn(
//             "relative h-full overflow-y-auto transition-transform duration-300 ease-out",
//             isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
//           )}
//         >
//           <div className="min-h-full flex flex-col p-6 pt-24">

//             {/* Mobile Navigation */}
//             <nav className="flex-1 space-y-2">
//               {navigation.map((item, index) => (
//                 <div
//                   key={item.name}
//                   className={cn(
//                     "transition-all duration-300",
//                     isMobileMenuOpen
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 -translate-x-4"
//                   )}
//                   style={{ transitionDelay: `${index * 50}ms` }}
//                 >
//                   <Link
//                     href={item.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={cn(
//                       "block text-lg font-semibold py-4 px-5 rounded-xl transition-all duration-200 backdrop-blur-sm",
//                       isActive(item.href)
//                         ? "bg-white/25 text-white border-l-4 border-[#10B981] shadow-lg"
//                         : "text-white/90 hover:bg-white/15 hover:text-white"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 </div>
//               ))}
//             </nav>

//             {/* Mobile Contact Info & CTA */}
//             <div
//               className={cn(
//                 "mt-8 space-y-4 transition-all duration-300",
//                 isMobileMenuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               )}
//               style={{ transitionDelay: '300ms' }}
//             >
//               {/* Contact Info */}
//               <div className="space-y-3 p-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xl">
//                 <a
//                   href="tel:+61399999999"
//                   className="flex items-center gap-3 text-white hover:text-[#10B981] transition-colors group"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 group-hover:bg-[#10B981] group-hover:scale-110 transition-all shadow-lg">
//                     <Phone className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-white/70 mb-0.5">Call us now</div>
//                     <div className="font-semibold text-lg">+61 3 9XXX XXXX</div>
//                   </div>
//                 </a>
//                 <a
//                   href="mailto:info@newgenstrataservices.com.au"
//                   className="flex items-center gap-3 text-white hover:text-[#10B981] transition-colors group"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 group-hover:bg-[#10B981] group-hover:scale-110 transition-all shadow-lg">
//                     <Mail className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-white/70 mb-0.5">Email us</div>
//                     <div className="font-semibold text-sm">info@newgenstrataservices.com.au</div>
//                   </div>
//                 </a>
//               </div>

//               {/* CTA Button */}
//               <Button
//                 asChild
//                 className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white h-16 text-base font-bold shadow-2xl hover:shadow-[#10B981]/50 hover:scale-105 transition-all duration-300 rounded-xl"
//               >
//                 <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                   Get Your Free Quote
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Menu, Phone, Mail, MapPin, ArrowRight,
  Briefcase, Users, X, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Service Providers', href: '/service-providers' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      {/* Top Contact Bar - Desktop Only */}
      <div className={cn(
        "hidden lg:block bg-gradient-to-r from-[#5B21B6] via-[#6B2DD8] to-[#7C3AED] text-white transition-all duration-300 overflow-hidden border-b border-white/10",
        isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-2.5"
      )}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-6">
              <a href="tel:+61399999999" className="flex items-center space-x-2 hover:text-[#10B981] transition-colors group">
                <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+61 3 9XXX XXXX</span>
              </a>
              <a href="mailto:info@newgenstrataservices.com.au" className="flex items-center space-x-2 hover:text-[#10B981] transition-colors group">
                <Mail className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">info@newgenstrataservices.com.au</span>
              </a>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-3.5 w-3.5" />
                <span className="font-medium">Melbourne, Victoria</span>
              </div>
            </div>
            <div className="text-white/95 font-medium text-xs italic">
              &quot;The quality is long remembered after the price is forgotten&quot;
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b',
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-lg border-gray-200'
            : 'bg-white shadow-md border-gray-100'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn(
            "relative flex items-center transition-all duration-300",
            // Mobile: fixed compact height
            "h-16",
            // Desktop: larger height with scroll effect
            isScrolled ? "lg:h-20" : "lg:h-20"
          )}>

            {/* Logo - Consistent across all devices */}
            <Link
              href="/"
              className={cn("absolute left-4 sm:left-6 z-30 transition-all duration-300 ease-out", isScrolled ? "top-1/2 -translate-y-1/2" : "top-3/4 -translate-y-1/2")}
            >
              <div className={cn(
                "relative bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105",
                // Mobile: compact fixed size
                "p-2",
                // Desktop: larger with scroll effect
                isScrolled 
                  ? " w-32 h-12 lg:p-3 lg:w-40 lg:h-16" 
                  : "w-36 h-20 lg:p-4 lg:w-56 lg:h-24"
              )}>
                <Image
                  src="/images/logo/logo.webp"
                  alt="NewGen Strata Services"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 128px, 224px"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {navigation.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            'inline-flex items-center justify-center text-sm font-semibold transition-all duration-200 px-4 py-2.5 rounded-full whitespace-nowrap',
                            isActive(item.href) 
                              ? 'text-white bg-gradient-to-r from-[#7C3AED] to-[#10B981] shadow-lg' 
                              : 'text-gray-700 hover:text-[#7C3AED] hover:bg-gray-100/80'
                          )}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2">
              <Button 
                asChild 
                className="bg-gradient-to-r from-[#7C3AED] to-[#10B981] hover:from-[#6B2DD8] hover:to-[#059669] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full font-semibold px-6 h-10"
              >
                <a href="tel:+61399999999" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 rounded-full h-10 w-10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-[#5B21B6]/98 via-[#6B2DD8]/96 to-[#10B981]/98 backdrop-blur-2xl transition-opacity duration-500",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "relative h-full overflow-y-auto transition-all duration-500 ease-out",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <div className="min-h-full flex flex-col px-6 pt-30 pb-8">

            {/* Navigation Links */}
            <nav className="flex-1 space-y-2 mb-8">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={cn(
                    "transition-all duration-500",
                    isMobileMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  )}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block text-lg font-bold py-4 px-6 rounded-2xl transition-all duration-300 active:scale-98",
                      isActive(item.href)
                        ? "bg-white text-[#7C3AED] shadow-2xl"
                        : "text-white hover:bg-white/15 active:bg-white/20"
                    )}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Contact Cards */}
            <div
              className={cn(
                "space-y-3 mb-6 transition-all duration-500",
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="tel:+61399999999"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/25 active:bg-white/25 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/70 font-medium mb-1">Call us now</div>
                  <div className="font-bold text-white text-base">+61 3 9XXX XXXX</div>
                </div>
              </a>

              <a
                href="mailto:info@newgenstrataservices.com.au"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/25 active:bg-white/25 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/70 font-medium mb-1">Email us</div>
                  <div className="font-bold text-white text-xs truncate">info@newgenstrataservices.com.au</div>
                </div>
              </a>
            </div>

            {/* CTA Button */}
            {/* <Button
              asChild
              className={cn(
                "w-full bg-white text-[#7C3AED] hover:bg-white/95 active:scale-98 h-14 text-base font-bold shadow-2xl transition-all duration-300 rounded-2xl",
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '450ms' }}
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                Get Your Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </>
  )
}