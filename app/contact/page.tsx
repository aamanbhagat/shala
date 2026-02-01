import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | EduHub',
    description: 'Get in touch with the EduHub team for support, inquiries, or feedback.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Get in Touch</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="bg-card p-8 rounded-2xl shadow-sm border h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <p className="text-muted-foreground mb-8">
                            Have a question or just want to say hi? We'd love to hear from you. Fill out the form or reach us via email or phone.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email Us</h3>
                                    <p className="text-muted-foreground">support@eduhub.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Call Us</h3>
                                    <p className="text-muted-foreground">+91 1234 567 890</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Visit Us</h3>
                                    <p className="text-muted-foreground">123 Education Lane, Knowledge City, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card p-8 rounded-2xl shadow-sm border">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                <Input id="firstName" placeholder="John" aria-label="First Name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                <Input id="lastName" placeholder="Doe" aria-label="Last Name" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                            <Input id="email" type="email" placeholder="john@example.com" aria-label="Email Address" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <Input id="subject" placeholder="How can we help?" aria-label="Subject" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea id="message" placeholder="Type your message here..." className="min-h-[150px]" aria-label="Message" />
                        </div>

                        <Button type="submit" className="w-full text-lg py-6">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
