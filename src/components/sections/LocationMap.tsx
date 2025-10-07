// src/components/sections/LocationMap.tsx

"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Mail, 
  Clock,
  Building2,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const serviceAreas = [
  {
    name: 'Melbourne CBD',
    properties: '150+',
    responseTime: '<30min',
    coverage: 'Full Coverage'
  },
  {
    name: 'Inner East',
    properties: '200+',
    responseTime: '<45min',
    coverage: 'Full Coverage'
  },
  {
    name: 'Inner West',
    properties: '180+',
    responseTime: '<45min',
    coverage: 'Full Coverage'
  },
  {
    name: 'Inner North',
    properties: '120+',
    responseTime: '<45min',
    coverage: 'Full Coverage'
  },
  {
    name: 'Inner South',
    properties: '160+',
    responseTime: '<45min',
    coverage: 'Full Coverage'
  },
  {
    name: 'Eastern Suburbs',
    properties: '300+',
    responseTime: '<1hr',
    coverage: 'Full Coverage'
  },
  {
    name: 'Western Suburbs',
    properties: '250+',
    responseTime: '<1hr',
    coverage: 'Full Coverage'
  },
  {
    name: 'Northern Suburbs',
    properties: '200+',
    responseTime: '<1hr',
    coverage: 'Full Coverage'
  },
  {
    name: 'Southern Suburbs',
    properties: '220+',
    responseTime: '<1hr',
    coverage: 'Full Coverage'
  },
  {
    name: 'South East',
    properties: '180+',
    responseTime: '<1.5hr',
    coverage: 'Full Coverage'
  },
  {
    name: 'Outer Areas',
    properties: '100+',
    responseTime: '<2hr',
    coverage: 'Selected Areas'
  }
]

const locationStats = [
  {
    icon: Building2,
    value: '1,800+',
    label: 'Properties Managed',
    description: 'Across Melbourne Metro'
  },
  {
    icon: Users,
    value: '15,000+',
    label: 'Residents Served',
    description: 'Happy community members'
  },
  {
    icon: MapPin,
    value: '25+',
    label: 'Suburbs Covered',
    description: 'Comprehensive coverage'
  },
  {
    icon: Clock,
    value: '<2hrs',
    label: 'Average Response',
    description: 'Emergency response time'
  }
]

const keyLocations = [
  {
    name: 'Head Office',
    address: 'Melbourne CBD Area',
    description: 'Central location for easy access',
    contact: '+61 3 9XXX XXXX'
  },
  {
    name: 'Operations Center',
    address: 'Eastern Suburbs Hub',
    description: '24/7 emergency response center',
    contact: '+61 4XX XXX XXX'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function LocationMap() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Service Coverage
            </Badge>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6"
          >
            Comprehensive Coverage Across 
            <span className="text-gradient-wimbledon"> Melbourne</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From the bustling CBD to the peaceful outer suburbs, we provide exceptional 
            strata management services across all Melbourne metropolitan areas.
          </motion.p>
        </motion.div>

        {/* Interactive Map Placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <Card className="card-wimbledon overflow-hidden">
            <CardContent className="p-0">
              {/* Map Container */}
              <div className="relative h-96 bg-gradient-to-br from-primary/10 via-secondary/10 to-brand-accent/10 flex items-center justify-center">
                {/* Placeholder for actual map integration */}
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    Interactive Service Area Map
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Covering all Melbourne metropolitan areas with professional strata management services
                  </p>
                  <Button className="btn-wimbledon">
                    View Full Coverage Area
                    <Navigation className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {/* Coverage indicators */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Full Coverage</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm mt-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700">Selected Areas</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Service Areas Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-heading font-bold text-brand-dark text-center mb-12"
          >
            Detailed Service Area Coverage
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <motion.div key={area.name} variants={fadeInUp}>
                <Card className="card-wimbledon h-full hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-brand-dark">{area.name}</h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          area.coverage === 'Full Coverage' 
                            ? 'border-green-200 text-green-700 bg-green-50' 
                            : 'border-yellow-200 text-yellow-700 bg-yellow-50'
                        }`}
                      >
                        {area.coverage}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Properties:</span>
                        <span className="font-medium text-primary">{area.properties}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Time:</span>
                        <span className="font-medium text-secondary">{area.responseTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {locationStats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <motion.div key={stat.label} variants={fadeInUp}>
                <Card className="card-wimbledon text-center p-6 hover-lift">
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gradient-wimbledon mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-brand-dark mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key Locations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {keyLocations.map((location) => (
            <motion.div key={location.name} variants={fadeInUp}>
              <Card className="card-wimbledon h-full hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-brand-dark mb-2">
                        {location.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {location.address}
                      </div>
                      <p className="text-gray-600 mb-4">{location.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        <Phone className="h-4 w-4 mr-2" />
                        {location.contact}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center"
        >
          <Card className="bg-gradient-wimbledon text-white p-8 lg:p-12 rounded-2xl">
            <div className="max-w-3xl mx-auto">
              <CheckCircle className="h-12 w-12 text-brand-accent mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 text-lg mb-8">
                No matter where your property is located in Melbourne, we&apos;re here to provide 
                exceptional strata management services. Contact us today for your free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link href="#contact-form">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link href="tel:+61399999999">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Card className="card-wimbledon text-center p-6">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-2">Email Support</h4>
              <p className="text-sm text-gray-600 mb-4">
                Detailed inquiries and document sharing
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="mailto:info@newgenstrataservices.com.au">
                  Send Email
                </Link>
              </Button>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="card-wimbledon text-center p-6">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-2">Business Hours</h4>
              <p className="text-sm text-gray-600 mb-4">
                Mon-Fri: 9AM-5PM<br />
                Emergency: 24/7
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="#business-hours">
                  View Schedule
                </Link>
              </Button>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="card-wimbledon text-center p-6">
              <Navigation className="h-8 w-8 text-brand-accent mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-2">Get Directions</h4>
              <p className="text-sm text-gray-600 mb-4">
                Easy access from anywhere in Melbourne
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Open Maps
                </Link>
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}