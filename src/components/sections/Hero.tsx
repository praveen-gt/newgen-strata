// // src/components/sections/Hero.tsx

// "use client"

// import React from "react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Play, CheckCircle } from "lucide-react"

// const features = [
//   "24/7 Emergency Response",
//   "Digital Property Management",
//   "Transparent Reporting",
//   "Expert Legal Compliance",
// ]

// export default function Hero() {
//   return (
//      <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      
//       <div className="absolute bottom-32 right-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-700" />

//       {/* Melbourne Skyline Silhouette */}
//       <div className="absolute inset-x-0 bottom-0 h-full skyline-silhouette z-0" /> 

//        {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />

      
//       {/* Content */}
//       <div className="relative z-10 text-center max-w-4xl px-6">
//         {/* Badge */}
//         <Badge className="mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-yellow-300 px-5 py-2 rounded-full">
//           Melbourne's Premier Strata Management
//         </Badge>

//         {/* Heading */}
//         <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//           Exceptional{" "}
//           <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
//             Strata Management
//           </span>
//         </h1>

//         {/* Sub-heading */}
//         <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//           Transform your property management experience with technology,
//           transparency, and expertise.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
//           <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform">
//             Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           <Button
//             variant="outline"
//             className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
//           >
//             <Play className="mr-2 h-5 w-5" /> Watch Demo
//           </Button>
//         </div>

//         {/* Slim Features */}
//         <div className="mt-10 flex flex-wrap justify-center gap-3">
//           {features.map((f) => (
//             <span
//               key={f}
//               className="flex items-center px-4 py-2 text-sm text-white/80 bg-white/10 rounded-full"
//             >
//               <CheckCircle className="w-4 h-4 text-primary mr-2" /> {f}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
//         <span className="text-white/60 text-xs mb-2 animate-pulse">
//           Scroll to explore
//         </span>
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-yellow-400 mt-2 rounded-full animate-bounce" />
//         </div>
//       </div>
//     </section>
//   )
// }


// src/components/sections/Hero.tsx

"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"

const features = [
  "24/7 Emergency Response",
  "Digital Property Management",
  "Transparent Reporting",
  "Expert Legal Compliance",
]

export default function Hero() {
  return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Melbourne Skyline Silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-full skyline-silhouette z-0" /> 

       {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />

      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Badge */}
        <Badge className="mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-yellow-300 px-5 py-2 rounded-full">
          Melbourne's Premier Strata Management
        </Badge>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          Exceptional{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Strata Management
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Transform your property management experience with technology,
          transparency, and expertise.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform">
            <Link href="/contact">
              Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white/30 text-primary px-8 py-4 rounded-full hover:bg-secondary/50 hover:text-white transition-all"
          >
            <Link href="/services">
              <Phone className="mr-2 h-5 w-5" /> Our Services
            </Link>
          </Button>
        </div>

        {/* Slim Features */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {features.map((f) => (
            <span
              key={f}
              className="flex items-center px-4 py-2 text-sm text-white/80 bg-white/30 rounded-full"
            >
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" /> {f}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-xs mb-2 animate-pulse">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 mt-2 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}