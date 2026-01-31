import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Previous Year Question Papers | EduHub",
    description: "Download past question papers and solutions for all major boards.",
};

export default function PapersPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Question Papers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Solve previous year papers to understand exam patterns.
                Archive coming soon with PDF downloads.
            </p>
            <Button size="lg" variant="outline" asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
