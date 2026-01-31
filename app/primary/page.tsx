import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Primary School Resources (Class 1-4) | EduHub",
    description: "Foundational learning materials, worksheets, and study guides for students in Class 1 to 4.",
};

export default function PrimaryPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Class 1-4 Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                We are curating the best foundational learning materials for young minds.
                Notes, worksheets, and interactive lessons will be available here soon.
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
