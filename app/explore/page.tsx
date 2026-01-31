import { Metadata } from "next";
import { ExploreClient } from "@/components/explore/explore-client";

export const metadata: Metadata = {
  title: "Explore Educational Resources - EduHub",
  description: "Find comprehensive study solutions for various educational boards, classes, and subjects.",
  openGraph: {
    title: "Explore Educational Resources - EduHub",
    description: "Find comprehensive study solutions for various educational boards, classes, and subjects.",
    type: "website",
  },
};

export default function ExplorePage() {
  return <ExploreClient />;
}