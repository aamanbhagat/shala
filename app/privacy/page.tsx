import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | EduHub',
    description: 'Read our Privacy Policy to understand how EduHub collects, uses, and protects your personal information.',
    alternates: {
        canonical: '/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
            <div className="prose dark:prose-invert max-w-none bg-card p-8 rounded-2xl shadow-sm border">
                <p className="text-muted-foreground mb-6">Last Updated: February 2026</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                <p className="mb-4 text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and educational preferences.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4 text-muted-foreground">
                    We use the information we collect to operate, maintain, and improve our services, including to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                    <li>Personalize your learning experience.</li>
                    <li>Send you technical notices, updates, and support messages.</li>
                    <li>Respond to your comments and questions.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
                <p className="mb-4 text-muted-foreground">
                    We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
                <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at privacy@eduhub.com.
                </p>
            </div>
        </div>
    );
}
