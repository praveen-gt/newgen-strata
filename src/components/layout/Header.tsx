// "use client"

// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from '@/components/ui/navigation-menu'
// import { Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowRight } from 'lucide-react'
// import { cn } from '@/lib/utils'

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { 
//     name: 'Services', 
//     href: '/services',
//     hasDropdown: true,
//     subItems: [
//       { name: 'All Services', href: '/services', description: 'Complete overview of our services' },
//       { name: 'Meeting Management', href: '/services/meeting-management', description: 'AGM and committee meeting services' },
//       { name: 'Financial Management', href: '/services/financial-management', description: 'Comprehensive financial oversight' },
//       { name: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Property maintenance and repairs' },
//       { name: 'Compliance Management', href: '/services/compliance-management', description: 'Legal and regulatory compliance' },
//       { name: 'Insurance Services', href: '/services/insurance-services', description: 'Insurance coordination and claims' },
//       { name: 'Emergency Support', href: '/services/emergency-support', description: '24/7 emergency response services' }
//     ]
//   },
//   { name: 'Our Approach', href: '/approach' },
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

//   const isActive = (path: string) => {
//     if (path === '/services') {
//       return pathname === path || pathname.startsWith('/services/')
//     }
//     return pathname === path
//   }

//   return (
//     <>
//       {/* Top Contact Bar */}
//       <div className="hidden lg:block bg-brand-dark text-white py-2">
//         <div className="container-custom">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4" />
//                 <span>+61 3 9XXX XXXX</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4" />
//                 <span>info@newgenstrataservices.com.au</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="h-4 w-4" />
//                 <span>Melbourne, Victoria</span>
//               </div>
//             </div>
//             <div className="text-brand-accent font-medium">
//               "The quality is long remembered after the price is forgotten"
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <header 
//         className={cn(
//           'sticky top-0 z-50 w-full transition-all duration-300',
//           isScrolled 
//             ? 'bg-white/95 backdrop-blur-md shadow-lg' 
//             : 'bg-white/80 backdrop-blur-sm'
//         )}
//       >
//         <div className="container-custom relative">
//           <div className={cn(
//             "flex items-center justify-between transition-all duration-300",
//             isScrolled ? "h-20" : "h-20"
//           )}>
//             {/* Logo - Absolute positioned with smooth transition */}
//             <Link 
//               href="/" 
//               className={cn(
//                 "absolute z-10 transition-all duration-500 ease-in-out",
//                 isScrolled 
//                   ? "left-0 top-1/2 -translate-y-1/2" 
//                   : "left-0 top-1/5 -translate-y-1/2 lg:translate-y-[0%]"
//               )}
//             >
//               <div className={cn(
//                 "relative transition-all duration-500 ease-in-out rounded-lg  p-3", !isScrolled ? "bg-white shadow-lg" : "bg-transparent",
//                 isScrolled 
//                   ? "h-22 w-36" 
//                   : "h-32 w-80 lg:h-28 lg:w-36"
//               )}>
//                 <Image
//                   src="/images/logo/newgen-logo.png"
//                   alt="NewGen Strata Services"
//                   fill
//                   className="object-contain p-2"
//                   priority
//                   sizes="(max-width: 768px) 192px, 384px"
//                 />
//               </div>
//             </Link>

//             {/* Spacer to prevent navigation from overlapping logo */}
//             <div className={cn(
//               "transition-all duration-500",
//               isScrolled ? "w-52" : "w-[22rem] lg:w-[26rem]"
//             )} />


//             {/* Desktop Navigation */}
//             <NavigationMenu className="hidden lg:flex ml-auto">
//               <NavigationMenuList>
//                 {navigation.map((item) => (
//                   <NavigationMenuItem key={item.name}>
//                     {item.hasDropdown ? (
//                       <>
//                         <NavigationMenuTrigger 
//                           className={cn(
//                             'text-sm font-medium transition-colors hover:text-primary bg-transparent',
//                             isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
//                           )}
//                         >
//                           {item.name}
//                         </NavigationMenuTrigger>
//                         <NavigationMenuContent>
//                           <div className="w-[480px] p-4">
//                             <div className="grid gap-2">
//                               {item.subItems?.map((subItem, index) => (
//                                 <NavigationMenuLink key={subItem.name} asChild>
//                                   <Link
//                                     href={subItem.href}
//                                     className="group block select-none rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-[#016938]/5 hover:to-[#592c81]/5 hover:shadow-md hover:scale-[1.02] focus:bg-gradient-to-r focus:from-[#016938]/5 focus:to-[#592c81]/5 border border-transparent hover:border-[#016938]/20"
//                                     style={{ animationDelay: `${index * 50}ms` }}
//                                   >
//                                     <div className="flex items-start gap-3">
//                                       <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-md bg-[#016938]/10 text-[#016938] transition-all duration-300 group-hover:bg-[#016938] group-hover:text-white group-hover:scale-110">
//                                         <ArrowRight className="h-4 w-4" />
//                                       </div>
//                                       <div className="flex-1 space-y-1">
//                                         <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#016938] transition-colors duration-300">
//                                           {subItem.name}
//                                         </div>
//                                         <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
//                                           {subItem.description}
//                                         </p>
//                                       </div>
//                                     </div>
//                                   </Link>
//                                 </NavigationMenuLink>
//                               ))}
//                             </div>
//                           </div>
//                         </NavigationMenuContent>
//                       </>
//                     ) : (
//                       <NavigationMenuLink asChild>
//                         <Link
//                           href={item.href}
//                           className={cn(
//                             'text-sm font-medium transition-colors hover:text-primary px-4 py-2 relative',
//                             isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
//                           )}
//                         >
//                           {item.name}
//                           {isActive(item.href) && (
//                             <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
//                           )}
//                         </Link>
//                       </NavigationMenuLink>
//                     )}
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>

//             {/* CTA Button */}
//             <div className="hidden lg:flex items-center space-x-4 flex-shrink-0 ml-4">
//               <Button asChild className="btn-wimbledon">
//                 <Link href="/contact">Get Quote</Link>
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild className="lg:hidden ml-auto">
//                 <Button variant="ghost" size="sm">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-full max-w-sm">
//                 <div className="flex flex-col space-y-6 mt-8">
//                   {/* Mobile Logo */}
//                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                     <div className="relative h-16 w-48 bg-white rounded-lg shadow-lg p-2">
//                       <Image
//                         src="/images/logo/newgen-logo.png"
//                         alt="NewGen Strata Services"
//                         fill
//                         className="object-contain p-1"
//                       />
//                     </div>
//                   </Link>

//                   {/* Mobile Navigation */}
//                   <nav className="flex flex-col space-y-4">
//                     {navigation.map((item) => (
//                       <div key={item.name}>
//                         <Link
//                           href={item.href}
//                           onClick={() => setIsMobileMenuOpen(false)}
//                           className={cn(
//                             'text-lg font-medium transition-colors py-2 flex items-center justify-between',
//                             isActive(item.href)
//                               ? 'text-primary border-l-2 border-primary pl-4'
//                               : 'text-muted-foreground hover:text-primary'
//                           )}
//                         >
//                           {item.name}
//                           {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
//                         </Link>
//                         {item.hasDropdown && item.subItems && (
//                           <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-4">
//                             {item.subItems.map((subItem) => (
//                               <Link
//                                 key={subItem.name}
//                                 href={subItem.href}
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 className="block text-sm text-gray-600 hover:text-primary py-1"
//                               >
//                                 {subItem.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </nav>

//                   {/* Mobile Contact Info */}
//                   <div className="border-t pt-6 space-y-4">
//                     <div className="flex items-center space-x-3">
//                       <Phone className="h-5 w-5 text-primary" />
//                       <span className="text-sm">+61 3 9XXX XXXX</span>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Mail className="h-5 w-5 text-primary" />
//                       <span className="text-sm">info@newgenstrataservices.com.au</span>
//                     </div>
//                   </div>

//                   {/* Mobile CTA */}
//                   <Button asChild className="btn-wimbledon w-full">
//                     <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                       Get Quote
//                     </Link>
//                   </Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }


"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Menu, Phone, Mail, MapPin, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    hasDropdown: true,
    subItems: [
      { name: 'All Services', href: '/services', description: 'Complete overview of our services' },
      { name: 'Meeting Management', href: '/services/meeting-management', description: 'AGM and committee meeting services' },
      { name: 'Financial Management', href: '/services/financial-management', description: 'Comprehensive financial oversight' },
      { name: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Property maintenance and repairs' },
      { name: 'Compliance & Administration', href: '/services/compliance-administration', description: 'Legal and regulatory compliance' },
      { name: 'Insurance Services', href: '/services/insurance-services', description: 'Insurance coordination and claims' },
      { name: 'Dispute Resolution & Support', href: '/services/dispute-resolution-support', description: '24/7 emergency response services' }
    ]
  },
 { 
    name: 'Case Studies ', 
    href: '',
    hasDropdown: true,
    subItems: [
      { name: 'Fixing the Leaks', href: '/case-studies/fixing-the-leaks', description: 'Emergency water damage response case study' },
      { name: 'Making the Invisible Visible', href: '/case-studies/making-invisible-visible', description: 'Financial transparency success story' },
      { name: 'Problem Solvers to the Rescue', href: '/case-studies/problem-solvers-rescue', description: 'Complex dispute resolution case study' }
    ]
  },
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

  const isActive = (path: string) => {
    if (path === '/services') {
      return pathname === path || pathname.startsWith('/services/')
    }
    return pathname === path
  }

  return (
    <>
      {/* Top Contact Bar - Slides up on scroll */}
      <div className={cn(
        "hidden lg:block bg-brand-dark text-white border-b border-white/10 transition-all duration-300 overflow-hidden",
        isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-2.5"
      )}>
        <div className="container-custom">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-8">
              <a href="tel:+61399999999" className="flex items-center space-x-2 hover:text-primary transition-colors group">
                <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                <span>+61 3 9XXX XXXX</span>
              </a>
              <a href="mailto:info@newgenstrataservices.com.au" className="flex items-center space-x-2 hover:text-primary transition-colors group">
                <Mail className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                <span>info@newgenstrataservices.com.au</span>
              </a>
              <div className="flex items-center space-x-2 text-white/70">
                <MapPin className="h-3.5 w-3.5" />
                <span>Melbourne, Victoria</span>
              </div>
            </div>
            <div className="text-white/90 font-medium italic">
              "The quality is long remembered after the price is forgotten"
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Compact height */}
      <header 
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-500 ease-in-out border-b',
          isScrolled 
            ? 'bg-white shadow-lg border-gray-200' 
            : 'bg-white/95 backdrop-blur-sm border-gray-100'
        )}
      >
        <div className="container-custom relative">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Absolute positioned, extends beyond header */}
            <Link 
              href="/" 
              className={cn(
                "absolute z-20 transition-all duration-500 ease-in-out",
                isScrolled 
                  ? "left-0 top-1/2 -translate-y-1/2" 
                  : "left-0 top-1/2"
              )}
            >
              <div className={cn(
                "relative transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg p-2",
                isScrolled 
                  ? "h-14 w-32 shadow-md" 
                  : "h-24 w-56 shadow-xl hover:scale-105"
              )}>
                <Image
                  src="/images/logo/newgen-logo.png"
                  alt="NewGen Strata Services"
                  fill
                  className="object-contain transition-all duration-500"
                  priority
                  sizes="(max-width: 768px) 128px, 224px"
                />
              </div>
            </Link>

            {/* Spacer for logo */}
            <div className={cn(
              "transition-all duration-500",
              isScrolled ? "w-36" : "w-60"
            )} />

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex ml-auto mr-6">
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            'text-sm font-medium transition-colors hover:text-primary bg-transparent',
                            isActive(item.href) ? 'text-primary' : 'text-gray-700'
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[460px] p-3">
                            <div className="grid gap-1">
                              {item.subItems?.map((subItem) => (
                                <NavigationMenuLink key={subItem.name} asChild>
                                  <Link
                                    href={subItem.href}
                                    className="group block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-gray-50 border border-transparent hover:border-primary/10"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                                        <ArrowRight className="h-4 w-4" />
                                      </div>
                                      <div className="flex-1 space-y-0.5">
                                        <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                          {subItem.name}
                                        </div>
                                        <p className="text-xs leading-tight text-gray-600">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            'text-sm font-medium transition-colors hover:text-primary px-3 py-2 relative',
                            isActive(item.href) ? 'text-primary' : 'text-gray-700'
                          )}
                        >
                          {item.name}
                          {isActive(item.href) && (
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                          )}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <Button asChild variant="ghost" size="sm" className="text-gray-700 hover:text-primary hover:bg-primary/5">
                <a href="tel:+61399999999">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden ml-auto">
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Logo */}
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="relative h-20 w-44">
                      <Image
                        src="/images/logo/newgen-logo.png"
                        alt="NewGen Strata Services"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                          className={cn(
                            'text-base font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-between',
                            isActive(item.href)
                              ? 'text-primary bg-primary/5 border-l-2 border-primary'
                              : 'text-gray-700 hover:bg-gray-50'
                          )}
                        >
                          {item.name}
                          {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                        </Link>
                        {item.hasDropdown && item.subItems && (
                          <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm text-gray-600 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded-md transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Mobile Contact Info */}
                  <div className="border-t pt-6 space-y-3">
                    <a href="tel:+61399999999" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-primary transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+61 3 9XXX XXXX</span>
                    </a>
                    <a href="mailto:info@newgenstrataservices.com.au" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>info@newgenstrataservices.com.au</span>
                    </a>
                  </div>

                  {/* Mobile CTA */}
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary text-white w-full">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}