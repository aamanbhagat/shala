"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  GraduationCap, 
  ChevronDown, 
  Search,
  Calculator,
  FlaskConical,
  BookOpen,
  Globe2,
  Calendar,
  FileText,
  BookMarked,
  Award,
  Brain,
  Trophy,
  Medal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const coursesMenu = [
    { name: "Mathematics", href: "/courses/math", icon: Calculator },
    { name: "Science", href: "/courses/science", icon: FlaskConical },
    { name: "English", href: "/courses/english", icon: BookOpen },
    { name: "Social Studies", href: "/courses/social", icon: Globe2 },
  ];

  const syllabusMenu = [
    { name: "Class Schedules", href: "/syllabus/schedules", icon: Calendar },
    { name: "Academic Calendar", href: "/syllabus/calendar", icon: FileText },
    { name: "Study Materials", href: "/syllabus/materials", icon: BookMarked },
  ];

  const examsMenu = [
    { name: "JEE Main", href: "/exams/jee-main", icon: Brain },
    { name: "NEET", href: "/exams/neet", icon: Award },
    { name: "Board Exams", href: "/exams/boards", icon: Trophy },
    { name: "Olympiads", href: "/exams/olympiads", icon: Medal },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center">
          <div className="flex-shrink-0 mr-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6" />
              <span className="text-lg font-bold">EduHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between flex-1">
            <div className="flex items-center space-x-1">
              {/* Regular Links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary duration-150"
                >
                  {item.name}
                </Link>
              ))}

              {/* Courses Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="group px-3 py-2 flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors duration-150 data-[state=open]:text-primary" asChild>
                  <Button variant="ghost" className="gap-1 data-[state=open]:bg-accent">
                    Courses
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-56 group-hover:opacity-100 group-hover:visible"
                  sideOffset={0}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  {coursesMenu.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="py-2">
                      <Link href={item.href} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Syllabus Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="group px-3 py-2 flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors duration-150 data-[state=open]:text-primary" asChild>
                  <Button variant="ghost" className="gap-1 data-[state=open]:bg-accent">
                    Syllabus
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-56 group-hover:opacity-100 group-hover:visible"
                  sideOffset={0}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  {syllabusMenu.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="py-2">
                      <Link href={item.href} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Exams Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="group px-3 py-2 flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors duration-150 data-[state=open]:text-primary" asChild>
                  <Button variant="ghost" className="gap-1 data-[state=open]:bg-accent">
                    Exams
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-56 group-hover:opacity-100 group-hover:visible"
                  sideOffset={0}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  {examsMenu.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="py-2">
                      <Link href={item.href} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center space-x-2">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-[180px] h-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </form>
              <ThemeToggle />
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden ml-auto">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium hover:bg-accent transition-colors duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <form onSubmit={handleSearch}>
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
                <Button className="w-full" variant="outline" size="sm">Sign In</Button>
                <Button className="w-full" size="sm">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;