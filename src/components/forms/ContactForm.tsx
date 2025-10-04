// src/components/forms/ContactForm.tsx

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
import { Checkbox } from '@/components/ui/checkbox'
// import { useToast } from '@/components/ui/use-toast'
import { toast } from 'sonner'
import { Loader2, Send, CheckCircle } from 'lucide-react'

const contactFormSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    company: z.string().optional(),
    propertyType: z.string().min(1, 'Please select a property type'),
    units: z.string().optional(),
    currentManager: z.string().optional(),
    serviceType: z.string().min(1, 'Please select a service type'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    newsletter: z.boolean().default(false),
    privacy: z.boolean().refine((val) => val === true, {
        message: 'You must accept the privacy policy',
    }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const propertyTypes = [
    { value: 'apartment', label: 'Apartment Complex' },
    { value: 'townhouse', label: 'Townhouse Complex' },
    { value: 'mixed', label: 'Mixed Development' },
    { value: 'commercial', label: 'Commercial Property' },
    { value: 'other', label: 'Other' },
]

const serviceTypes = [
    { value: 'full-management', label: 'Full Strata Management' },
    { value: 'consultation', label: 'Consultation Services' },
    { value: 'transition', label: 'Management Transition' },
    { value: 'emergency', label: 'Emergency Support' },
    { value: 'quote', label: 'Get a Quote' },
    { value: 'other', label: 'Other Services' },
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
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Here you would normally send the data to your API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setIsSubmitted(true)
                toast.success("Message Sent Successfully!", {
                    description: "We'll get back to you within 2 hours during business hours.",
                })
                reset()
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            toast.error("Error", {
                description: "Failed to send message. Please try again or call us directly.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll be in touch within 2 hours
                    during business hours.
                </p>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="btn-wimbledon-outline"
                >
                    Send Another Message
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                        id="firstName"
                        {...register('firstName')}
                        placeholder="John"
                        className="focus-wimbledon"
                    />
                    {errors.firstName && (
                        <p className="text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                        id="lastName"
                        {...register('lastName')}
                        placeholder="Smith"
                        className="focus-wimbledon"
                    />
                    {errors.lastName && (
                        <p className="text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                </div>
            </div>

            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="john@example.com"
                        className="focus-wimbledon"
                    />
                    {errors.email && (
                        <p className="text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        placeholder="+61 3 9XXX XXXX"
                        className="focus-wimbledon"
                    />
                    {errors.phone && (
                        <p className="text-sm text-red-600">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                    id="company"
                    {...register('company')}
                    placeholder="Your company or owners corporation name"
                    className="focus-wimbledon"
                />
            </div>

            {/* Property Details */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type *</Label>
                    <Select onValueChange={(value) => setValue('propertyType', value)}>
                        <SelectTrigger className="focus-wimbledon">
                            <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                            {propertyTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.propertyType && (
                        <p className="text-sm text-red-600">{errors.propertyType.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="units">Number of Units</Label>
                    <Input
                        id="units"
                        type="number"
                        {...register('units')}
                        placeholder="e.g., 24"
                        className="focus-wimbledon"
                    />
                </div>
            </div>

            {/* Current Manager */}
            <div className="space-y-2">
                <Label htmlFor="currentManager">Current Strata Manager (if any)</Label>
                <Input
                    id="currentManager"
                    {...register('currentManager')}
                    placeholder="Name of current management company"
                    className="focus-wimbledon"
                />
            </div>

            {/* Service Type */}
            <div className="space-y-2">
                <Label htmlFor="serviceType">Service Required *</Label>
                <Select onValueChange={(value) => setValue('serviceType', value)}>
                    <SelectTrigger className="focus-wimbledon">
                        <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                        {serviceTypes.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                                {service.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.serviceType && (
                    <p className="text-sm text-red-600">{errors.serviceType.message}</p>
                )}
            </div>

            {/* Message */}
            <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Tell us about your requirements, current challenges, or any questions you have..."
                    rows={4}
                    className="focus-wimbledon"
                />
                {errors.message && (
                    <p className="text-sm text-red-600">{errors.message.message}</p>
                )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="newsletter"
                        onCheckedChange={(checked) => setValue('newsletter', !!checked)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for strata management tips and updates
                    </Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="privacy"
                        onCheckedChange={(checked) => setValue('privacy', !!checked)}
                    />
                    <Label htmlFor="privacy" className="text-sm">
                        I agree to the privacy policy and terms of service *
                    </Label>
                </div>
                {errors.privacy && (
                    <p className="text-sm text-red-600">{errors.privacy.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-wimbledon w-full"
                size="lg"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
                We typically respond within 2 hours during business hours (Mon-Fri, 9AM-5PM AEST)
            </p>
        </form>
    )
}