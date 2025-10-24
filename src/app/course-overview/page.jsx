import "@/styles/detail.css";
import "@/styles/landing.css";
import HeroSection from "@/components/DetailedPage/HeroSection";
import GoalSection from "@/components/DetailedPage/GoalSection";
import ProcessSection from "@/components/DetailedPage/ProcessSection";
import SkillsMaster from "@/components/DetailedPage/SkillsMaster";
import Trnasformation from "@/components/DetailedPage/Transformation";
import EnrollNow from "@/components/landingPage/EnrollNow";
import GetInTouch from "@/components/landingPage/GetInTouch";
import Script from "next/script";

/* ========================================
   1. METADATA – SEO + RICH COURSE SNIPPET
   ======================================== */
export const metadata = {
  title: "IBM IIB & ACE Training Course | Hands-On Enterprise Integration | IntegrateGo",
  description:
    "Master IBM Integration Bus (IIB) and App Connect Enterprise (ACE) with 100+ hands-on labs, real-world projects, and job placement support. Enroll now and become integration-ready.",
  keywords:
    "IBM IIB training, IBM ACE course, App Connect Enterprise, integration certification, enterprise integration, IIB developer, ACE developer, Hyderabad training, online integration course",

  // Open Graph
  openGraph: {
    title: "IBM IIB & ACE Training | Hands-On Labs + Real Projects | IntegrateGo",
    description:
      "Learn IIB & ACE from industry experts. 3-month live training, 50+ projects, 1:1 mentorship. Next batch starts Nov 2025.",
    url: "https://www.integratego.com/course-view",
    siteName: "IntegrateGo",
    images: [
      {
        url: "https://www.integratego.com/images/og-course-iib-ace.jpg",
        width: 1200,
        height: 630,
        alt: "IBM IIB & ACE Hands-On Training – IntegrateGo",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@IntegrateGo",
    creator: "@IntegrateGo",
    title: "IBM IIB & ACE Training | Hands-On + Job Ready",
    description: "Next batch: Nov 2025. 50+ labs, live projects, placement support.",
    images: ["https://www.integratego.com/images/twitter-course-iib-ace.jpg"],
  },

  // Canonical
  alternates: {
    canonical: "https://www.integratego.com/course-view",
  },

  // Robots
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
};

/* ========================================
   2. PAGE COMPONENT
   ======================================== */
export default function DetailedPage() {
  return (
    <>
      {/* === Structured Data: Course (Rich Results) === */}
      <Script
        id="course-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "IBM Integration Bus (IIB) & App Connect Enterprise (ACE) – Professional Training",
            description:
              "Comprehensive 3-month training covering IBM IIB v10, ACE v11/v12, ESQL, DFDL, REST APIs, MQ, message modeling, error handling, and deployment. Includes 50+ hands-on labs and 3 capstone projects.",
            provider: {
              "@type": "Organization",
              name: "IntegrateGo",
              sameAs: "https://www.integratego.com",
              logo: "https://www.integratego.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9705558559",
                contactType: "customer support",
                email: "support@integratego.com",
                areaServed: "IN",
              },
            },
            url: "https://www.integratego.com/course-view",
            image: "https://www.integratego.com/images/course-hero.jpg",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "49999",
              availability: "https://schema.org/InStock",
              url: "https://www.integratego.com/course-view#enroll",
              validFrom: "2025-10-01",
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                name: "IIB & ACE Batch – Nov 2025",
                courseMode: ["online", "blended"],
                startDate: "2025-11-01",
                endDate: "2026-02-28",
                eventStatus: "https://schema.org/EventScheduled",
                location: [
                  {
                    "@type": "VirtualLocation",
                    name: "Online Live Classes",
                    url: "https://zoom.us",
                  },
                  {
                    "@type": "Place",
                    name: "IntegrateGo Hyderabad Campus",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "KPHB Phase 6, Near Forum Mall",
                      addressLocality: "Hyderabad",
                      addressRegion: "Telangana",
                      postalCode: "500085",
                      addressCountry: "IN",
                    },
                  },
                ],
                instructor: [
                  {
                    "@type": "Person",
                    name: "Rajesh Kumar",
                    jobTitle: "IBM Certified Integration Architect",
                    worksFor: {
                      "@type": "Organization",
                      name: "IntegrateGo",
                    },
                    image: "https://www.integratego.com/images/instructor-rajesh.jpg",
                    sameAs: "https://www.linkedin.com/in/rajesh-ibm-integration",
                  },
                ],
                maximumAttendeeCapacity: 30,
                remainingAttendeeCapacity: 12,
              },
            ],
            educationalLevel: "Advanced",
            teaches: [
              "IBM Integration Bus (IIB) v10",
              "App Connect Enterprise (ACE) v11/v12",
              "ESQL Programming",
              "Message Modeling & DFDL",
              "REST/JSON APIs in ACE",
              "Error Handling & Logging",
              "MQ & JMS Integration",
              "CI/CD for Integration",
            ],
            occupationalCredentialAwarded: "IntegrateGo Certified Integration Developer",
            inLanguage: "en",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            review: [
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "Priya Sharma",
                },
                reviewBody:
                  "Best IIB & ACE course! Got placed in IBM within 2 months of completion.",
                datePublished: "2025-06-15",
              },
            ],
          }),
        }}
      />

      {/* === Breadcrumb JSON-LD === */}
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.integratego.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Courses",
                item: "https://www.integratego.com/courses",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "IBM IIB & ACE Training",
                item: "https://www.integratego.com/course-view",
              },
            ],
          }),
        }}
      />

      {/* === FAQ JSON-LD (Boosts Rich Results) === */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this IBM IIB & ACE course for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, this is an advanced course. Basic knowledge of XML, JSON, and any programming language is required.",
                },
              },
              {
                "@type": "Question",
                name: "Will I get a certificate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! You’ll receive an <strong>IntegrateGo Certified Integration Developer</strong> certificate + IBM skill badge prep.",
                },
              },
              {
                "@type": "Question",
                name: "Are classes recorded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all live sessions are recorded and available for 12 months.",
                },
              },
              {
                "@type": "Question",
                name: "What is the batch size?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Maximum 30 students per batch for personalized attention.",
                },
              },
            ],
          }),
        }}
      />

      {/* === Page Sections === */}
      <HeroSection />
      <GoalSection />
      <ProcessSection />
      <SkillsMaster />
      <Trnasformation />
      <EnrollNow />
      <GetInTouch />
    </>
  );
}