import LandingPage from "@/components/LandingPage";

export const metadata = {
  title: "IntegrateGo | Learn, Build, and Grow",
  description:
    "IntegrateGo offers expert-led courses, hands-on projects, and a supportive community to help you learn, build, and grow your skills.",
  openGraph: {
    title: "IntegrateGo | Learn, Build, and Grow",
    description:
      "Expert courses and hands-on learning to accelerate your growth.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://example.com",
    siteName: "IntegrateGo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IntegrateGo Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntegrateGo | Learn, Build, and Grow",
    description: "Learn faster with expert-led courses and real projects.",
    images: ["/og-image.jpg"],
  },
};

export default async function HomePage() {
  
  return (
    <main>
      <LandingPage />
    </main>
  );
}
