import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Textbook Solutions | EduHub",
    description: "Step-by-step solutions for NCERT and State Board textbooks.",
};

export default function SolutionsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Textbook Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Stuck on a problem? Get detailed, step-by-step solutions for your textbooks.
                NCERT, Balbharti, and more coming soon.
            </p>
            <Button size="lg" asChild>
                <Link href="/explore">Select Book</Link>
            </Button>
        </div>
    );
}
