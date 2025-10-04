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
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowRight } from 'lucide-react'
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
      { name: 'Compliance Management', href: '/services/compliance-management', description: 'Legal and regulatory compliance' },
      { name: 'Insurance Services', href: '/services/insurance-services', description: 'Insurance coordination and claims' },
      { name: 'Emergency Support', href: '/services/emergency-support', description: '24/7 emergency response services' }
    ]
  },
  { name: 'Our Approach', href: '/approach' },
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
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-brand-dark text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+61 3 9XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@newgenstrataservices.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Melbourne, Victoria</span>
              </div>
            </div>
            <div className="text-brand-accent font-medium">
              "The quality is long remembered after the price is forgotten"
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm'
        )}
      >
        <div className="container-custom relative">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-20" : "h-20"
          )}>
            {/* Logo - Absolute positioned with smooth transition */}
            <Link 
              href="/" 
              className={cn(
                "absolute z-10 transition-all duration-500 ease-in-out",
                isScrolled 
                  ? "left-0 top-1/2 -translate-y-1/2" 
                  : "left-0 top-1/5 -translate-y-1/2 lg:translate-y-[0%]"
              )}
            >
              <div className={cn(
                "relative transition-all duration-500 ease-in-out rounded-lg  p-3", !isScrolled ? "bg-white shadow-lg" : "bg-transparent",
                isScrolled 
                  ? "h-22 w-36" 
                  : "h-32 w-80 lg:h-28 lg:w-36"
              )}>
                <Image
                  src="/images/logo/newgen-logo.png"
                  alt="NewGen Strata Services"
                  fill
                  className="object-contain p-2"
                  priority
                  sizes="(max-width: 768px) 192px, 384px"
                />
              </div>
            </Link>

            {/* Spacer to prevent navigation from overlapping logo */}
            <div className={cn(
              "transition-all duration-500",
              isScrolled ? "w-52" : "w-[22rem] lg:w-[26rem]"
            )} />


            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex ml-auto">
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            'text-sm font-medium transition-colors hover:text-primary bg-transparent',
                            isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[480px] p-4">
                            <div className="grid gap-2">
                              {item.subItems?.map((subItem, index) => (
                                <NavigationMenuLink key={subItem.name} asChild>
                                  <Link
                                    href={subItem.href}
                                    className="group block select-none rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-[#016938]/5 hover:to-[#592c81]/5 hover:shadow-md hover:scale-[1.02] focus:bg-gradient-to-r focus:from-[#016938]/5 focus:to-[#592c81]/5 border border-transparent hover:border-[#016938]/20"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-md bg-[#016938]/10 text-[#016938] transition-all duration-300 group-hover:bg-[#016938] group-hover:text-white group-hover:scale-110">
                                        <ArrowRight className="h-4 w-4" />
                                      </div>
                                      <div className="flex-1 space-y-1">
                                        <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#016938] transition-colors duration-300">
                                          {subItem.name}
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
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
                            'text-sm font-medium transition-colors hover:text-primary px-4 py-2 relative',
                            isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                          )}
                        >
                          {item.name}
                          {isActive(item.href) && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                          )}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0 ml-4">
              <Button asChild className="btn-wimbledon">
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
              <SheetContent side="right" className="w-full max-w-sm">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Logo */}
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="relative h-16 w-48 bg-white rounded-lg shadow-lg p-2">
                      <Image
                        src="/images/logo/newgen-logo.png"
                        alt="NewGen Strata Services"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  </Link>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'text-lg font-medium transition-colors py-2 flex items-center justify-between',
                            isActive(item.href)
                              ? 'text-primary border-l-2 border-primary pl-4'
                              : 'text-muted-foreground hover:text-primary'
                          )}
                        >
                          {item.name}
                          {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                        </Link>
                        {item.hasDropdown && item.subItems && (
                          <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-4">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm text-gray-600 hover:text-primary py-1"
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
                  <div className="border-t pt-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-sm">+61 3 9XXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-sm">info@newgenstrataservices.com.au</span>
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <Button asChild className="btn-wimbledon w-full">
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