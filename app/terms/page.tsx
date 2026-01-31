import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | EduHub",
    description: "Read our terms of service.",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground mb-8">
                Standard terms and conditions apply.
            </p>
            <Button asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
