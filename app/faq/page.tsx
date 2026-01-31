import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | EduHub",
    description: "Frequently Asked Questions.",
};

export default function FAQPage() {
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground mb-8">
                Find answers to common questions.
            </p>
            <Button asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
