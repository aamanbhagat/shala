import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | EduHub",
    description: "Get in touch with us.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
                Have questions? Reach out to our support team.
            </p>
            <Button asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
