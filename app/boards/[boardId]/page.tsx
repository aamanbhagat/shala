
import { getAllBoards, classes } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

interface PageProps {
    params: {
        boardId: string;
    };
}

export async function generateMetadata({ params }: PageProps) {
    const boards = getAllBoards();
    const board = boards.find((b) => b.id === params.boardId);

    if (!board) {
        return {
            title: "Board Not Found | EduHub",
        };
    }

    return {
        title: `${board.name} Study Materials and Solutions | EduHub`,
        description: `Access comprehensive study materials, notes, and solutions for ${board.name}. Class 1 to 12.`,
    };
}

export default function BoardPage({ params }: PageProps) {
    const boards = getAllBoards();
    const board = boards.find((b) => b.id === params.boardId);

    if (!board) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    {/* If you have the icon, render it. board.icon is a component, so we need to handle it carefully in Client Component or just ignore for now in Server Component if not strictly needed or serialized */}
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
                        {board.name}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Select your class to continue
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((cls) => (
                        <Link key={cls.id} href={`/boards/${params.boardId}/${cls.id}`}>
                            <Card className={`p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 bg-gradient-to-br ${cls.color.replace('/20', '/10').replace('/30', '/10')} border-none`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-background/50 rounded-lg group-hover:bg-background/80 transition-colors">
                                            <BookOpen className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{cls.name}</h3>
                                            <p className="text-sm text-muted-foreground">View Subjects</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
