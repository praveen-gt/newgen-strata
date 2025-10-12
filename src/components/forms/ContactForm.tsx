
// "use client"

// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Label } from '@/components/ui/label'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { Checkbox } from '@/components/ui/checkbox'
// import { toast } from 'sonner'
// import { Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react'

// // Enhanced validation schema with Australian-specific rules
// const contactFormSchema = z.object({
//   firstName: z.string()
//     .min(2, 'First name must be at least 2 characters')
//     .max(50, 'First name must be less than 50 characters')
//     .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
//   lastName: z.string()
//     .min(2, 'Last name must be at least 2 characters')
//     .max(50, 'Last name must be less than 50 characters')
//     .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
//   email: z.string()
//     .email('Please enter a valid email address')
//     .toLowerCase()
//     .trim(),
//   phone: z.string()
//     .min(10, 'Please enter a valid Australian phone number')
//     .regex(/^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/, 'Please enter a valid Australian phone number (e.g., 0412 345 678 or +61 3 9123 4567)'),
//   company: z.string()
//     .max(100, 'Company name must be less than 100 characters')
//     .optional(),
//   propertyType: z.string()
//     .min(1, 'Please select a property type'),
//   units: z.string()
//     .regex(/^\d*$/, 'Please enter numbers only')
//     .optional()
//     .or(z.literal('')),
//   currentManager: z.string()
//     .max(100, 'Current manager name must be less than 100 characters')
//     .optional(),
//   serviceType: z.string()
//     .min(1, 'Please select a service type'),
//   message: z.string()
//     .min(10, 'Message must be at least 10 characters')
//     .max(2000, 'Message must be less than 2000 characters'),
//   newsletter: z.boolean()
//     .default(false),
//   privacy: z.boolean()
//     .refine((val) => val === true, {
//       message: 'You must accept the privacy policy to continue',
//     }),
// })

// type ContactFormData = z.infer<typeof contactFormSchema>

// interface PropertyType {
//   value: string
//   label: string
//   description?: string
// }

// interface ServiceType {
//   value: string
//   label: string
//   popular?: boolean
// }

// const propertyTypes: PropertyType[] = [
//   { value: 'apartment', label: 'Apartment Complex', description: 'Multi-storey residential building' },
//   { value: 'townhouse', label: 'Townhouse Complex', description: 'Multi-level attached dwellings' },
//   { value: 'mixed', label: 'Mixed Development', description: 'Combination of residential and commercial' },
//   { value: 'commercial', label: 'Commercial Property', description: 'Office or retail spaces' },
//   { value: 'retirement', label: 'Retirement Living', description: 'Age-restricted community' },
//   { value: 'other', label: 'Other', description: 'Please specify in message' },
// ]

// const serviceTypes: ServiceType[] = [
//   { value: 'full-management', label: 'Full Strata Management', popular: true },
//   { value: 'consultation', label: 'Consultation Services', popular: true },
//   { value: 'transition', label: 'Management Transition', popular: false },
//   { value: 'emergency', label: 'Emergency Support', popular: false },
//   { value: 'quote', label: 'Get a Quote', popular: true },
//   { value: 'agm-planning', label: 'AGM Planning & Support', popular: false },
//   { value: 'financial-review', label: 'Financial Review', popular: false },
//   { value: 'other', label: 'Other Services', popular: false },
// ]

// export function ContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors },
//     reset,
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactFormSchema),
//     defaultValues: {
//       newsletter: false,
//       privacy: false,
//     },
//   })

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true)
    
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })

//       const result = await response.json()

//       if (response.ok) {
//         setIsSubmitted(true)
//         toast.success("Message Sent Successfully!", {
//           description: "We'll get back to you within 2 hours during business hours (Mon-Fri, 9AM-5PM AEST).",
//           duration: 5000,
//         })
//         reset()
        
//         // Scroll to top of form to show success message
//         window.scrollTo({ top: 0, behavior: 'smooth' })
//       } else {
//         throw new Error(result.error || 'Failed to send message')
//       }
//     } catch (error) {
//       console.error('Form submission error:', error)
//       toast.error("Unable to Send Message", {
//         description: error instanceof Error ? error.message : "Failed to send message. Please try again or call us directly at +61 3 9XXX XXXX.",
//         duration: 6000,
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (isSubmitted) {
//     return (
//       <div className="text-center py-12 px-6">
//         <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
//           <CheckCircle className="h-12 w-12 text-green-600" />
//         </div>
//         <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
//           Thank You for Getting in Touch!
//         </h3>
//         <p className="text-gray-600 mb-6 max-w-md mx-auto">
//           Your message has been sent successfully. Kevin or Sam will personally respond 
//           within 2 hours during business hours (Monday to Friday, 9:00 AM - 5:00 PM AEST).
//         </p>
//         <div className="space-y-3 mb-8">
//           <div className="flex items-center justify-center text-sm text-gray-600">
//             <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//             Confirmation email sent to your inbox
//           </div>
//           <div className="flex items-center justify-center text-sm text-gray-600">
//             <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//             Your inquiry has been assigned a priority status
//           </div>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-3 justify-center">
//           <Button
//             onClick={() => setIsSubmitted(false)}
//             variant="outline"
//             className="btn-wimbledon-outline"
//           >
//             Send Another Message
//           </Button>
//           <Button
//             asChild
//             className="btn-wimbledon"
//           >
//             <a href="tel:+61399999999">
//               Call Us Now
//             </a>
//           </Button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
//       {/* Personal Information Section */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold text-brand-dark border-b pb-2">
//           Personal Information
//         </h3>
        
//         <div className="grid md:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="firstName" className="text-gray-700">
//               First Name <span className="text-red-500">*</span>
//             </Label>
//             <Input
//               id="firstName"
//               {...register('firstName')}
//               placeholder="John"
//               className={`focus-wimbledon text-gray-500 ${errors.firstName ? 'border-red-500' : ''}`}
//               aria-invalid={errors.firstName ? 'true' : 'false'}
//               aria-describedby={errors.firstName ? 'firstName-error' : undefined}
//             />
//             {errors.firstName && (
//               <p id="firstName-error" className="text-sm text-red-600 flex items-center gap-1">
//                 <AlertCircle className="h-3 w-3" />
//                 {errors.firstName.message}
//               </p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="lastName" className="text-gray-700">
//               Last Name <span className="text-red-500">*</span>
//             </Label>
//             <Input
//               id="lastName"
//               {...register('lastName')}
//               placeholder="Smith"
//               className={`focus-wimbledon text-gray-500 ${errors.lastName ? 'border-red-500' : ''}`}
//               aria-invalid={errors.lastName ? 'true' : 'false'}
//               aria-describedby={errors.lastName ? 'lastName-error' : undefined}
//             />
//             {errors.lastName && (
//               <p id="lastName-error" className="text-sm text-red-600 flex items-center gap-1">
//                 <AlertCircle className="h-3 w-3" />
//                 {errors.lastName.message}
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-gray-700">
//               Email Address <span className="text-red-500">*</span>
//             </Label>
//             <Input
//               id="email"
//               type="email"
//               {...register('email')}
//               placeholder="john.smith@example.com"
//               className={`focus-wimbledon text-gray-500 ${errors.email ? 'border-red-500' : ''}`}
//               aria-invalid={errors.email ? 'true' : 'false'}
//               aria-describedby={errors.email ? 'email-error' : undefined}
//             />
//             {errors.email && (
//               <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
//                 <AlertCircle className="h-3 w-3" />
//                 {errors.email.message}
//               </p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="phone" className="text-gray-700">
//               Phone Number <span className="text-red-500">*</span>
//             </Label>
//             <Input
//               id="phone"
//               type="tel"
//               {...register('phone')}
//               placeholder="0412 345 678 or +61 3 9123 4567"
//               className={`focus-wimbledon text-gray-500 ${errors.phone ? 'border-red-500' : ''}`}
//               aria-invalid={errors.phone ? 'true' : 'false'}
//               aria-describedby={errors.phone ? 'phone-error' : undefined}
//             />
//             {errors.phone && (
//               <p id="phone-error" className="text-sm text-red-600 flex items-center gap-1">
//                 <AlertCircle className="h-3 w-3" />
//                 {errors.phone.message}
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="company" className="text-gray-700">
//             Company / Owners Corporation Name
//           </Label>
//           <Input
//             id="company"
//             {...register('company')}
//             placeholder="Your company or owners corporation name"
//             className="focus-wimbledon text-gray-500"
//           />
//           <p className="text-xs text-gray-500">Optional: If applicable</p>
//         </div>
//       </div>

//       {/* Property Details Section */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold text-brand-dark border-b pb-2">
//           Property Details
//         </h3>
        
//         <div className="grid md:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="propertyType" className="text-gray-700">
//               Property Type <span className="text-red-500">*</span>
//             </Label>
//             <Select onValueChange={(value) => setValue('propertyType', value, { shouldValidate: true })}>
//               <SelectTrigger className={`focus-wimbledon text-gray-500 ${errors.propertyType ? 'border-red-500' : ''}`}>
//                 <SelectValue placeholder="Select property type" />
//               </SelectTrigger>
//               <SelectContent>
//                 {propertyTypes.map((type) => (
//                   <SelectItem key={type.value} value={type.value}>
//                     <div className="flex flex-col">
//                       <span className='text-gray-800'>{type.label}</span>
//                       {type.description && (
//                         <span className="text-xs text-gray-500">{type.description}</span>
//                       )}
//                     </div>
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {errors.propertyType && (
//               <p className="text-sm text-red-600 flex items-center gap-1">
//                 <AlertCircle className="h-3 w-3" />
//                 {errors.propertyType.message}
//               </p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="units" className="text-gray-700">
//               Number of Units / Lots
//             </Label>
//             <Input
//               id="units"
//               type="text"
//               inputMode="numeric"
//               {...register('units')}
//               placeholder="e.g., 24"
//               className={`focus-wimbledon text-gray-500 ${errors.units ? 'border-red-500' : ''}`}
//             />
//             {errors.units && (
//               <p className="text-sm text-red-600 flex items-center gap-1">
//                 <AlertCircle className="h-3 w-3" />
//                 {errors.units.message}
//               </p>
//             )}
//             <p className="text-xs text-gray-500">Optional: Helps us understand the scale</p>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="currentManager" className="text-gray-700">
//             Current Strata Manager
//           </Label>
//           <Input
//             id="currentManager"
//             {...register('currentManager')}
//             placeholder="Name of current management company (if any)"
//             className="focus-wimbledon text-gray-500"
//           />
//           <p className="text-xs text-gray-500">Optional: If you&apos;re considering a transition</p>
//         </div>
//       </div>

//       {/* Service Requirements Section */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold text-brand-dark border-b pb-2">
//           Service Requirements
//         </h3>
        
//         <div className="space-y-2">
//           <Label htmlFor="serviceType" className="text-gray-700">
//             Service Required <span className="text-red-500">*</span>
//           </Label>
//           <Select onValueChange={(value) => setValue('serviceType', value, { shouldValidate: true })}>
//             <SelectTrigger className={`focus-wimbledon text-gray-500 ${errors.serviceType ? 'border-red-500' : ''}`}>
//               <SelectValue placeholder="Select service type" />
//             </SelectTrigger>
//             <SelectContent>
//               {serviceTypes.map((service) => (
//                 <SelectItem key={service.value} value={service.value}>
//                   <div className="flex items-center gap-2">
//                     <span className='text-gray-800'>{service.label}</span>
//                     {service.popular && (
//                       <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
//                         Popular
//                       </span>
//                     )}
//                   </div>
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.serviceType && (
//             <p className="text-sm text-red-600 flex items-center gap-1">
//               <AlertCircle className="h-3 w-3" />
//               {errors.serviceType.message}
//             </p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="message" className="text-gray-700">
//             Tell Us About Your Requirements <span className="text-red-500">*</span>
//           </Label>
//           <Textarea
//             id="message"
//             {...register('message')}
//             placeholder="Please share details about your property, current challenges, what you're looking for in a strata manager, or any specific questions you have. The more detail you provide, the better we can assist you."
//             rows={6}
//             className={`focus-wimbledon text-gray-500 resize-none ${errors.message ? 'border-red-500' : ''}`}
//             aria-invalid={errors.message ? 'true' : 'false'}
//             aria-describedby={errors.message ? 'message-error' : undefined}
//           />
//           {errors.message && (
//             <p id="message-error" className="text-sm text-red-600 flex items-center gap-1">
//               <AlertCircle className="h-3 w-3" />
//               {errors.message.message}
//             </p>
//           )}
//           <p className="text-xs text-gray-500">
//             Character count: {watch('message')?.length || 0} / 2000
//           </p>
//         </div>
//       </div>

//       {/* Preferences & Consent Section */}
//       <div className="space-y-4 pt-4 border-t">
//         <div className="flex items-start space-x-3">
//           <Checkbox
//             id="newsletter"
//             onCheckedChange={(checked) => setValue('newsletter', !!checked)}
//             className="mt-1"
//           />
//           <div className="flex-1">
//             <Label htmlFor="newsletter" className="text-sm text-gray-700 font-normal cursor-pointer">
//               Yes, I&apos;d like to receive the NewGen Strata Services newsletter with industry insights, 
//               compliance updates, and property management tips
//             </Label>
//             <p className="text-xs text-gray-500 mt-1">
//               Unsubscribe anytime. We respect your privacy.
//             </p>
//           </div>
//         </div>

//         <div className="flex items-start space-x-3">
//           <Checkbox
//             id="privacy"
//             onCheckedChange={(checked) => setValue('privacy', !!checked, { shouldValidate: true })}
//             className="mt-1"
//           />
//           <div className="flex-1">
//             <Label htmlFor="privacy" className="text-sm text-gray-700 font-normal cursor-pointer">
//               I agree to the <a href="/privacy-policy" className="text-primary hover:underline">privacy policy</a> and 
//               <a href="/terms" className="text-primary hover:underline ml-1">terms of service</a> <span className="text-red-500">*</span>
//             </Label>
//             {errors.privacy && (
//               <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
//                 <AlertCircle className="h-3 w-3" />
//                 {errors.privacy.message}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="pt-6">
//         <Button
//           type="submit"
//           disabled={isSubmitting}
//           className="btn-wimbledon w-full"
//           size="lg"
//         >
//           {isSubmitting ? (
//             <>
//               <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//               Sending Your Message...
//             </>
//           ) : (
//             <>
//               Send Message
//               <Send className="ml-2 h-5 w-5" />
//             </>
//           )}
//         </Button>

//         <div className="mt-4 text-center space-y-2">
//           <p className="text-sm text-gray-600">
//             We typically respond within <strong>2 hours</strong> during business hours
//           </p>
//           <p className="text-xs text-gray-500">
//             Monday to Friday, 9:00 AM - 5:00 PM AEST
//           </p>
//           <p className="text-xs text-gray-500">
//             For urgent matters, please call <a href="tel:+61399999999" className="text-primary hover:underline font-medium">+61 3 9XXX XXXX</a>
//           </p>
//         </div>
//       </div>
//     </form>
//   )
// }

"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
// import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'
import { Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react'

// Enhanced validation schema with Australian-specific rules
const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z.string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  phone: z.string()
    .min(10, 'Please enter a valid Australian phone number')
    .regex(/^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/, 'Please enter a valid Australian phone number (e.g., 0412 345 678 or +61 3 9123 4567)'),
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  propertyType: z.string()
    .min(1, 'Please select a property type'),
  units: z.string()
    .regex(/^\d*$/, 'Please enter numbers only')
    .optional()
    .or(z.literal('')),
  currentManager: z.string()
    .max(100, 'Current manager name must be less than 100 characters')
    .optional(),
  serviceType: z.string()
    .min(1, 'Please select a service type'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface PropertyType {
  value: string
  label: string
  description?: string
}

interface ServiceType {
  value: string
  label: string
  popular?: boolean
}

const propertyTypes: PropertyType[] = [
  { value: 'apartment', label: 'Apartment Complex', description: 'Multi-storey residential building' },
  { value: 'townhouse', label: 'Townhouse Complex', description: 'Multi-level attached dwellings' },
  { value: 'mixed', label: 'Mixed Development', description: 'Combination of residential and commercial' },
  { value: 'commercial', label: 'Commercial Property', description: 'Office or retail spaces' },
  { value: 'retirement', label: 'Retirement Living', description: 'Age-restricted community' },
  { value: 'other', label: 'Other', description: 'Please specify in message' },
]

const serviceTypes: ServiceType[] = [
  { value: 'full-management', label: 'Full Strata Management', popular: true },
  { value: 'consultation', label: 'Consultation Services', popular: true },
  { value: 'transition', label: 'Management Transition', popular: false },
  { value: 'emergency', label: 'Emergency Support', popular: false },
  { value: 'quote', label: 'Get a Quote', popular: true },
  { value: 'agm-planning', label: 'AGM Planning & Support', popular: false },
  { value: 'financial-review', label: 'Financial Review', popular: false },
  { value: 'other', label: 'Other Services', popular: false },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
  register,
  handleSubmit,
  setValue,
  watch,
  formState: { errors },
  reset,
} = useForm<ContactFormData>({
  resolver: zodResolver(contactFormSchema),
})

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success("Message Sent Successfully!", {
          description: "We'll get back to you within 2 hours during business hours (Mon-Fri, 9AM-5PM AEST).",
          duration: 5000,
        })
        reset()
        
        // Scroll to top of form to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error("Unable to Send Message", {
        description: error instanceof Error ? error.message : "Failed to send message. Please try again or call us directly at +61 3 9XXX XXXX.",
        duration: 6000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
          Thank You for Getting in Touch!
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Your message has been sent successfully. Kevin or Sam will personally respond 
          within 2 hours during business hours (Monday to Friday, 9:00 AM - 5:00 PM AEST).
        </p>
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            Confirmation email sent to your inbox
          </div>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            Your inquiry has been assigned a priority status
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="btn-wimbledon-outline"
          >
            Send Another Message
          </Button>
          <Button
            asChild
            className="btn-wimbledon"
          >
            <a href="tel:+61399999999">
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Personal Information Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-brand-dark border-b pb-2">
          Personal Information
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-700">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              {...register('firstName')}
              placeholder="John"
              className={`focus-wimbledon text-gray-500 ${errors.firstName ? 'border-red-500' : ''}`}
              aria-invalid={errors.firstName ? 'true' : 'false'}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.firstName.message}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              {...register('lastName')}
              placeholder="Smith"
              className={`focus-wimbledon text-gray-500 ${errors.lastName ? 'border-red-500' : ''}`}
              aria-invalid={errors.lastName ? 'true' : 'false'}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="john.smith@example.com"
              className={`focus-wimbledon text-gray-500 ${errors.email ? 'border-red-500' : ''}`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email.message}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="0412 345 678 or +61 3 9123 4567"
              className={`focus-wimbledon text-gray-500 ${errors.phone ? 'border-red-500' : ''}`}
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-700">
            Company / Owners Corporation Name
          </Label>
          <Input
            id="company"
            {...register('company')}
            placeholder="Your company or owners corporation name"
            className="focus-wimbledon text-gray-500"
          />
          <p className="text-xs text-gray-500">Optional: If applicable</p>
        </div>
      </div>

      {/* Property Details Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-brand-dark border-b pb-2">
          Property Details
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="propertyType" className="text-gray-700">
              Property Type <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={(value) => setValue('propertyType', value, { shouldValidate: true })}>
              <SelectTrigger className={`focus-wimbledon text-gray-500 ${errors.propertyType ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex flex-col">
                      <span className='text-gray-800'>{type.label}</span>
                      {type.description && (
                        <span className="text-xs text-gray-500">{type.description}</span>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.propertyType && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.propertyType.message}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="units" className="text-gray-700">
              Number of Units / Lots
            </Label>
            <Input
              id="units"
              type="text"
              inputMode="numeric"
              {...register('units')}
              placeholder="e.g., 24"
              className={`focus-wimbledon text-gray-500 ${errors.units ? 'border-red-500' : ''}`}
            />
            {errors.units && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.units.message}
              </p>
            )}
            <p className="text-xs text-gray-500">Optional: Helps us understand the scale</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentManager" className="text-gray-700">
            Current Strata Manager
          </Label>
          <Input
            id="currentManager"
            {...register('currentManager')}
            placeholder="Name of current management company (if any)"
            className="focus-wimbledon text-gray-500"
          />
          <p className="text-xs text-gray-500">Optional: If you&apos;re considering a transition</p>
        </div>
      </div>

      {/* Service Requirements Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-brand-dark border-b pb-2">
          Service Requirements
        </h3>
        
        <div className="space-y-2">
          <Label htmlFor="serviceType" className="text-gray-700">
            Service Required <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={(value) => setValue('serviceType', value, { shouldValidate: true })}>
            <SelectTrigger className={`focus-wimbledon text-gray-500 ${errors.serviceType ? 'border-red-500' : ''}`}>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  <div className="flex items-center gap-2">
                    <span className='text-gray-800'>{service.label}</span>
                    {service.popular && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                        Popular
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.serviceType.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-700">
            Tell Us About Your Requirements <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="Please share details about your property, current challenges, what you're looking for in a strata manager, or any specific questions you have. The more detail you provide, the better we can assist you."
            rows={6}
            className={`focus-wimbledon text-gray-500 resize-none ${errors.message ? 'border-red-500' : ''}`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.message.message}
            </p>
          )}
          <p className="text-xs text-gray-500">
            Character count: {watch('message')?.length || 0} / 2000
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-wimbledon w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending Your Message...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        <div className="mt-4 text-center space-y-2">
          <p className="text-sm text-gray-600">
            We typically respond within <strong>2 hours</strong> during business hours
          </p>
          <p className="text-xs text-gray-500">
            Monday to Friday, 9:00 AM - 5:00 PM AEST
          </p>
          <p className="text-xs text-gray-500">
            For urgent matters, please call <a href="tel:+61399999999" className="text-primary hover:underline font-medium">+61 3 9XXX XXXX</a>
          </p>
        </div>
      </div>
    </form>
  )
}