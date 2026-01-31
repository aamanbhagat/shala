import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Senior Secondary Resources (Class 11-12) | EduHub",
    description: "Advanced study materials for Class 11-12 and entrance exam preparation.",
};

export default function SeniorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Class 11-12 Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Prepare for your future with specialized resources for Science, Commerce, and Arts streams.
                Entrance exam materials included.
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
