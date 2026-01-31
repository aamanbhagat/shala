import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Concept Notes & Videos | EduHub",
    description: "Visual learning resources and concise concept notes.",
};

export default function ResourcesPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Concept Notes & Videos
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Learn complex topics easily with our visual guides and summary notes.
                Video library coming soon.
            </p>
            <Button size="lg" variant="outline" asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
