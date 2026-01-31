import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | EduHub",
    description: "Learn about our mission to democratize education.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                EduHub is dedicated to providing high-quality educational resources to students across India.
            </p>
            <Button asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
