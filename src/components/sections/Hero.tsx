// "use client"

// import React from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Phone, CheckCircle } from "lucide-react"

// const features = [
//   "24/7 Emergency Response",
//   "Digital Property Management",
//   "Expert Legal Compliance",
// ]

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden skyline-silhouette">
      
//       {/* Dark overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-brand-dark/60 to-black/70" />

//       {/* Animated gradient orbs */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 opacity-5" style={{
//         backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
//                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//         backgroundSize: '50px 50px'
//       }} />

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in">
//         {/* Badge */}
//         {/* <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-lg animate-slide-down"> */}
//         <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-lg shadow-brand-accent/20 animate-slide-down">
//           Melbourne&apos;s Premier Strata Management
//         </Badge>

//         {/* Heading */}
//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 animate-slide-up heading-wimbledon">
//           Exceptional{" "}
//           <span className="bg-gradient-to-r from-primary via-brand-accent to-secondary bg-clip-text text-transparent animate-gradient">
//             Strata Management
//           </span>
//         </h1>

//         {/* Sub-heading */}
//         <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto animate-slide-up delay-200">
//          Personal, high-quality service using the latest technology to provide optimal management and support to owners corporations.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-400">
//           <Button 
//             asChild 
//             size="lg"
//             className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-10 py-6 rounded-full shadow-2xl shadow-primary/50 hover:scale-105 transition-all duration-300"
//           >
//             <Link href="/contact">
//               Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//           <Button
//             asChild
//             variant="outline"
//             size="lg"
//             className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white px-10 py-6 rounded-full hover:bg-white/20 hover:border-white/80 transition-all duration-300"
//           >
//             <Link href="/services">
//               <Phone className="mr-2 h-5 w-5" /> Our Services
//             </Link>
//           </Button>
//         </div>

//         {/* Features */}
//         <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up delay-600">
//           {features.map((f) => (
//             <span
//               key={f}
//               className="flex items-center px-5 py-3 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
//             >
//               <CheckCircle className="w-4 h-4 text-brand-accent mr-2" /> {f}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="hidden 2xl:flex absolute bottom-8 left-1/2 -translate-x-1/2  flex-col items-center animate-bounce z-10">
//         <span className="text-white/60 text-xs mb-2 uppercase tracking-wider">
//           Scroll to explore
//         </span>
//         <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
//           <div className="w-1 h-3 bg-primary mt-2 rounded-full animate-scroll" />
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"

const features = [
  "Personal Service",
  "Clear Communication",
  "Expert Solutions",
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden skyline-silhouette">
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-brand-dark/60 to-black/70" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in">
        {/* Badge */}
        <Badge className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-lg shadow-brand-accent/20 animate-slide-down">
          Melbourne&apos;s Premier Strata Management
        </Badge>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 animate-slide-up heading-wimbledon">
          A New Generation of{" "}
          <span className="bg-gradient-to-r from-primary via-brand-accent to-secondary bg-clip-text text-transparent animate-gradient">
            Strata Management
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto animate-slide-up delay-200">
          Personal, high-quality service using the latest technology to provide optimal management and support to owners corporations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-400">
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-10 py-6 rounded-full shadow-2xl shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact">
              Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white hover:text-white px-10 py-6 rounded-full hover:bg-white/20 hover:border-white/80 transition-all duration-300"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" /> Contact Us
            </Link>
          </Button>
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up delay-600">
          {features.map((f) => (
            <span
              key={f}
              className="flex items-center px-5 py-3 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircle className="w-4 h-4 text-brand-accent mr-2" /> {f}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden 2xl:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce z-10">
        <span className="text-white/60 text-xs mb-2 uppercase tracking-wider">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary mt-2 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}