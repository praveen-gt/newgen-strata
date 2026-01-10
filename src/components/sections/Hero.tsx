// Screen 1 Hero Section

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"


export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] md:min-h-screen flex items-center justify-center overflow-hidden skyline-silhouette">
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20 z-0" />


      <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-0 animate-fade-in">
        {/* Badge */}
        {/* <Badge className="mb-4 md:mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm rounded-full shadow-lg shadow-brand-accent/20 animate-slide-down">
          Melbourne&apos;s Premier Strata Management
        </Badge> */}

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-4 md:mb-6 animate-slide-up heading-wimbledon px-2">
          A New Generation of Strata Management
        </h1>

        {/* Sub-heading */}
        <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto animate-slide-up delay-200 px-2">
          Personal, high-quality service using the latest technology to provide optimal management and support to owners corporations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 md:gap-4 animate-slide-up delay-400 px-2">
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-5 md:px-10 md:py-6 text-sm md:text-base rounded-full shadow-2xl shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact">
              Get Free Quote <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white hover:text-white px-8 py-5 md:px-10 md:py-6 text-sm md:text-base rounded-full hover:bg-white/20 hover:border-white/80 transition-all duration-300"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Contact Us
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}