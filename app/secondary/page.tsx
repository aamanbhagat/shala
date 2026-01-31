import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Secondary School Resources (Class 9-10) | EduHub",
    description: "Board exam preparation materials, notes, and question banks for Class 9 and 10.",
};

export default function SecondaryPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Class 9-10 Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Master your board exams with our comprehensive study guides.
                Important questions, previous year papers, and solutions coming soon.
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
