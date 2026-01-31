import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Middle School Resources (Class 5-8) | EduHub",
    description: "Comprehensive study materials, subject notes, and practice questions for students in Class 5 to 8.",
};

export default function MiddlePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Class 5-8 Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Bridge the gap between primary and secondary education with our structured materials.
                Detailed notes and question banks are coming soon.
            </p>
            <div className="flex gap-4">
                <Button size="lg" asChild>
                    <Link href="/explore">
                        Find Solutions
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/">
                        Back Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}
