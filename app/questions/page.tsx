import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Question Bank | EduHub",
    description: "Access thousands of practice questions with detailed solutions.",
};

export default function QuestionsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Question Bank
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Practice makes perfect. Access our vast repository of questions sorted by topic and difficulty.
                Launching soon.
            </p>
            <Button size="lg" variant="outline" asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
