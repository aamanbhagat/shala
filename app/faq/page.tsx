import type { Metadata } from 'next';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'FAQ - Frequently Asked Questions | EduHub',
    description: 'Find answers to common questions about EduHub, study materials, subscriptions, and more.',
    alternates: {
        canonical: '/faq',
    },
};

export default function FAQPage() {
    const faqs = [
        {
            question: "Is EduHub completely free to use?",
            answer: "Yes! The vast majority of our resources, including NCERT solutions, previous year papers, and fast-track notes, are completely free for all students. We may offer premium personalized tutoring in the future."
        },
        {
            question: "Which educational boards do you cover?",
            answer: "We currently cover CBSE, ICSE, and major State Boards (Maharashtra, Rajasthan, UP, Tamil Nadu, etc.) for Classes 1 to 12."
        },
        {
            question: "Do you provide video lectures?",
            answer: "Yes, we have a curated library of video lectures for complex topics in Science and Mathematics, helping you visualize concepts better."
        },
        {
            question: "How can I download the study materials?",
            answer: "You can download PDFs of question papers and solutions directly from their respective pages. Look for the 'Download PDF' button."
        },
        {
            question: "Can I contribute study materials?",
            answer: "Absolutely! We welcome contributions from teachers and toppers. Please contact us via the 'Contact Us' page to join our contributor network."
        },
        {
            question: "Is there a mobile app?",
            answer: "We are currently working on a dedicated mobile app. For now, our website is fully responsive and works perfectly on all mobile browsers."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
            <p className="text-center text-muted-foreground mb-12">
                Have questions? We're here to help.
            </p>

            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-medium text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
