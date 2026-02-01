import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | EduHub',
    description: 'Learn about EduHub\'s mission to democratize education and provide high-quality resources for students worldwide.',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">About EduHub</h1>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <section className="bg-card p-8 rounded-2xl shadow-sm border">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
                    <p>
                        At EduHub, we believe that high-quality education should be accessible to everyone, everywhere. Our mission is to democratize learning by providing comprehensive, free, and premium study resources for students from Class 1 to 12.
                    </p>
                </section>

                <section className="bg-card p-8 rounded-2xl shadow-sm border">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">What We Offer</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Comprehensive study materials for all major boards (CBSE, ICSE, State Boards).</li>
                        <li>Interactive video lectures and concept animations.</li>
                        <li>Previous year question papers and detailed solutions.</li>
                        <li>Personalized progress tracking and performance analytics.</li>
                        <li>Community forums for peer-to-peer learning and support.</li>
                    </ul>
                </section>

                <section className="bg-card p-8 rounded-2xl shadow-sm border">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Story</h2>
                    <p>
                        Founded in 2024, EduHub started as a small project to help students during their board exams. Today, it has grown into a vibrant community of learners and educators dedicated to academic excellence. We are constantly innovating to make learning more engaging, effective, and fun.
                    </p>
                </section>
            </div>
        </div>
    );
}
