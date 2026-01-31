import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | EduHub",
    description: "Join our team.",
};

export default function CareersPage() {
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-muted-foreground mb-8">
                Join us in our mission to transform education.
            </p>
            <Button asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
