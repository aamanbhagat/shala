import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Entrance Exam Preparation | EduHub",
    description: "Study materials for JEE, NEET, CET, and other competitive exams.",
};

export default function ExamsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Entrance Exams
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Crack your dream college entrance with our targeted prep materials.
                Mock tests and guides are being prepared.
            </p>
            <Button size="lg" variant="outline" asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
