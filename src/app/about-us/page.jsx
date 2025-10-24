import "@/styles/detail.css";
import "@/styles/landing.css";
import "@/styles/aboutus.css";
import AboutUsSection from "@/components/ContactPage/AboutUsSection";
import OurStory from "@/components/ContactPage/OurStory";
import MissionVision from "@/components/ContactPage/MissionVision";
import WhatWeDo from "@/components/ContactPage/WhatWedo";
import GetInTouch from "@/components/landingPage/GetInTouch";
import EnrollNow from "@/components/landingPage/EnrollNow";
import Script from "next/script";

/* ========================================
   1. METADATA – SEO + SOCIAL TRUST
   ======================================== */
export const metadata = {
  title: "About IntegrateGo | IBM Integration Training Experts | Hyderabad",
  description:
    "Founded in 2022, IntegrateGo is Hyderabad's leading IBM IIB & ACE training institute. 500+ students trained, 90% placement rate, and 4.9/5 rating.",
  keywords:
    "IntegrateGo, about us, IBM integration training, IIB training Hyderabad, ACE course, integration career, founded 2022, Hyderabad institute",

  // Open Graph
  openGraph: {
    title: "About IntegrateGo – IBM IIB & ACE Training Institute",
    description:
      "500+ students trained | 90% placement | 4.9/5 rated | Founded in Hyderabad, 2022.",
    url: "https://www.integratego.com/about-us",
    siteName: "IntegrateGo",
    images: [
      {
        url: "https://www.integratego.com/images/og-aboutus.jpg",
        width: 1200,
        height: 630,
        alt: "IntegrateGo Team – IBM Integration Training Experts",
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
    title: "About IntegrateGo | 500+ Trained | 90% Placement",
    description: "Hyderabad’s top IBM IIB & ACE training institute since 2022.",
    images: ["https://www.integratego.com/images/twitter-aboutus.jpg"],
  },

  // Canonical
  alternates: {
    canonical: "https://www.integratego.com/about-us",
  },

  // Robots
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
};

/* ========================================
   2. PAGE COMPONENT
   ======================================== */
export default function AboutUs() {
  return (
    <>
      {/* === Organization JSON-LD (Enhanced) === */}
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "@id": "https://www.integratego.com/#organization",
            name: "IntegrateGo",
            legalName: "IntegrateGo Private Limited",
            url: "https://www.integratego.com",
            logo: "https://www.integratego.com/images/logo.png",
            image: "https://www.integratego.com/images/og-aboutus.jpg",
            description:
              "IntegrateGo is a premier IBM integration training institute in Hyderabad, specializing in IBM IIB, ACE, MQ, and API Connect. Founded in 2022 with a mission to bridge the integration skills gap.",
            foundingDate: "2022-06-15",
            founders: [
              {
                "@type": "Person",
                name: "Venkat Battula",
                jobTitle: "Founder & Lead Instructor",
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "JNTU Hyderabad",
                },
                image: "https://www.integratego.com/images/founder-rajesh.jpg",
                sameAs: [
                  "https://www.linkedin.com/in/rajesh-battula-ibm",
                  "https://x.com/rajeshintegrate",
                ],
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "KPHB Phase 6, Near Forum Sujana Mall",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500085",
              addressCountry: "IN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-9705558559",
                contactType: "customer support",
                email: "support@integratego.com",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              {
                "@type": "ContactPoint",
                telephone: "+91-9705558559",
                contactType: "admissions",
                email: "admissions@integratego.com",
              },
            ],
            sameAs: [
              "https://www.linkedin.com/company/integrate-go",
              "https://www.youtube.com/@IntegrateGo",
              "https://www.instagram.com/integrateg0/",
              "https://x.com/IntegrateGo",
            ],
            alumni: {
              "@type": "EducationalOccupationalCredential",
              name: "IntegrateGo Certified Integration Developer",
              recognizedBy: {
                "@type": "Organization",
                name: "IntegrateGo",
              },
            },
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                name: "IBM Certified Integration Developer",
                credentialCategory: "certification",
                recognizedBy: {
                  "@type": "Organization",
                  name: "IBM",
                },
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
              bestRating: "5",
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
                  name: "Anil Kumar",
                },
                reviewBody:
                  "IntegrateGo changed my career. From zero integration knowledge to IBM placement in 4 months!",
                datePublished: "2025-07-10",
              },
            ],
            department: [
              {
                "@type": "EducationalOrganization",
                name: "IBM Integration Academy",
                description: "Core training division for IIB, ACE, MQ, and API Connect",
              },
            ],
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: "12",
            },
            slogan: "Learn. Build. Integrate.",
            award: ["Best Integration Training Institute – Hyderabad 2024"],
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
                name: "About Us",
                item: "https://www.integratego.com/about-us",
              },
            ],
          }),
        }}
      />

      {/* === FAQ JSON-LD === */}
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
                name: "When was IntegrateGo founded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "IntegrateGo was founded on <strong>June 15, 2022</strong> in Hyderabad by Rajesh Battula.",
                },
              },
              {
                "@type": "Question",
                name: "Where is IntegrateGo located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our campus is in <strong>KPHB Phase 6, near Forum Sujana Mall, Hyderabad, Telangana</strong>. We also offer online live classes.",
                },
              },
              {
                "@type": "Question",
                name: "Does IntegrateGo provide placement support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We have a <strong>90% placement rate</strong> with partners like IBM, TCS, Wipro, and Accenture.",
                },
              },
              {
                "@type": "Question",
                name: "Who teaches the courses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All courses are taught by <strong>IBM-certified architects</strong> with 10+ years of enterprise integration experience.",
                },
              },
            ],
          }),
        }}
      />

      {/* === Page Content === */}
      <AboutUsSection />
      <OurStory />
      <MissionVision />
      <WhatWeDo />
      <EnrollNow />
      <GetInTouch />
    </>
  );
}