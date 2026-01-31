
import { getAllBoards, classes, languages } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight, Languages } from "lucide-react";

interface PageProps {
    params: {
        boardId: string;
        classId: string;
    };
}

export async function generateMetadata({ params }: PageProps) {
    const boards = getAllBoards();
    const board = boards.find((b) => b.id === params.boardId);
    const cls = classes.find((c) => c.id === params.classId);

    if (!board || !cls) {
        return {
            title: "Page Not Found | EduHub",
        };
    }

    return {
        title: `${cls.name} - ${board.name} | Select Language`,
        description: `Choose your medium of instruction for ${cls.name}, ${board.name}.`,
    };
}

export default function ClassPage({ params }: PageProps) {
    const boards = getAllBoards();
    const board = boards.find((b) => b.id === params.boardId);
    const cls = classes.find((c) => c.id === params.classId);

    if (!board || !cls) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-2">
                        <Link href={`/boards/${params.boardId}`} className="hover:text-primary transition-colors">{board.name}</Link>
                        <span>/</span>
                        <span className="text-foreground">{cls.name}</span>
                    </div>

                    <h1 className="text-4xl font-bold mb-4">Select Medium</h1>
                    <p className="text-xl text-muted-foreground">
                        Choose your preferred language for {cls.name}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {languages.map((lang) => (
                        <Link key={lang.id} href={`/boards/${params.boardId}/${params.classId}/${lang.id}`}>
                            <Card className={`p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 bg-gradient-to-br ${lang.color.replace('/20', '/10').replace('/30', '/10')} border-none`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-background/50 rounded-lg group-hover:bg-background/80 transition-colors">
                                            <Languages className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{lang.name}</h3>
                                            <p className="text-sm text-muted-foreground">Select Language</p>
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
