import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | EduHub',
    description: 'Review the Terms & Conditions for using EduHub services and resources.',
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
            <div className="prose dark:prose-invert max-w-none bg-card p-8 rounded-2xl shadow-sm border">
                <p className="text-muted-foreground mb-6">Last Updated: February 2026</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4 text-muted-foreground">
                    By accessing or using EduHub, you agree to be bound by these Terms & Conditions. If you do not agree, you may not use our services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Services</h2>
                <p className="mb-4 text-muted-foreground">
                    You grant us a non-exclusive license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media. You also agree not to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                    <li>Use the service for any illegal purpose.</li>
                    <li>Attempt to gain unauthorized access to any portion of the service.</li>
                    <li>Interfere with or disrupt the integrity or performance of the service.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
                <p className="mb-4 text-muted-foreground">
                    The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Changes to Terms</h2>
                <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. We will post the most current version of these terms on this page.
                </p>
            </div>
        </div>
    );
}
