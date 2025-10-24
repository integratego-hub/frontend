import LandingPage from "@/components/LandingPage";
import Script from "next/script";

/* -------------------------------------------------
   1. METADATA – Enhanced for 2025 SEO (Core Web Vitals, Rich Results, Voice Search)
   ------------------------------------------------- */
export const metadata = {
  title: "IntegrateGo | Master IBM Integration: IIB, ACE, MQ – Hands-On Courses & Career Growth",
  description:
    "Join Hyderabad's top IBM Integration training institute. Learn IIB, ACE, MQ, API Connect with 100+ labs, real projects, 90% placement. Next batch Nov 1, 2025.",
  keywords:
    "IntegrateGo, IBM Integration training Hyderabad, IBM IIB course, IBM ACE training, IBM MQ, App Connect Enterprise, API Connect, integration developer certification, hands-on labs, career in integration, online integration courses",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, noimageindex: false",

  /* ----- Open Graph – Optimized for Shares ----- */
  openGraph: {
    title: "IntegrateGo – IBM Integration Mastery: Learn, Build, Launch Your Career",
    description:
      "500+ students placed | 4.9/5 rated | Hands-on IIB & ACE training in Hyderabad & online. Enroll for Nov 2025 batch.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com",
    siteName: "IntegrateGo",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com") +
          "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IntegrateGo: Premier IBM Integration Training Platform",
        type: "image/jpeg",
      },
    ],
  },

  /* ----- Twitter Card – Engagement Boost ----- */
  twitter: {
    card: "summary_large_image",
    site: "@IntegrateGo",
    creator: "@IntegrateGo",
    title: "IntegrateGo | IBM IIB, ACE, MQ Training – Hands-On & Job-Ready",
    description:
      "Accelerate your career with expert-led courses, labs, and community. Hyderabad & online – 90% placement.",
    images: [
      (process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com") +
        "/twitter-card.jpg",
    ],
  },

  /* ----- Canonical & Alternates ----- */
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com",
    languages: {
      "en-IN": process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com",
    },
  },

  /* ----- Verification & Additional Signals ----- */
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE", // <-- Replace
    yandex: "YOUR_YANDEX_VERIFICATION_CODE", // Optional: For Yandex Webmaster
    bing: "YOUR_BING_VERIFICATION_CODE", // Optional: For Bing Webmaster
  },

  /* ----- Theme & PWA Signals ----- */
  themeColor: "#0d6efd", // Bootstrap primary blue
  applicationName: "IntegrateGo",
};

/* -------------------------------------------------
   2. PAGE COMPONENT – Performance, Accessibility, Rich Results
   ------------------------------------------------- */
export default function HomePage() {
  return (
    <>
      {/* ---------- Structured Data (JSON-LD) – Comprehensive for Rich SERPs ---------- */}
      {/* 2-a EducationalOrganization (Authority + Local Signals) */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "IntegrateGo",
            alternateName: "Integrate Go",
            url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com",
            logo: (process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com") + "/logo.png",
            image: (process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com") + "/og-image.jpg",
            description:
              "Hyderabad-based IBM Integration training institute offering courses in IIB, ACE, MQ, API Connect. 500+ alumni, 90% placement rate, 4.9/5 reviews.",
            foundingDate: "2022-06-15",
            address: {
              "@type": "PostalAddress",
              streetAddress: "KPHB Phase 6, Near Forum Sujana Mall",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500085",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 17.4844,
              longitude: 78.3905,
            },
            telephone: "+91-9705558559",
            email: "support@integratego.com",
            sameAs: [
              "https://www.linkedin.com/company/integrate-go",
              "https://www.instagram.com/integrateg0/",
              "https://www.youtube.com/@IntegrateGo",
              "https://x.com/IntegrateGo",
              "https://www.facebook.com/IntegrateGo",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-9705558559",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Telugu"],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
            ],
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
                reviewBody: "Best IBM integration training in Hyderabad! Placed at TCS.",
                datePublished: "2025-09-15",
              },
            ],
            priceRange: "$$",
            award: ["Best Integration Training Institute – Hyderabad 2024"],
            alumni: {
              "@type": "Person",
              name: "500+ Alumni Placed at IBM, TCS, Wipro",
            },
          }),
        }}
      />

      {/* 2-b WebSite (Site Search + Potential Action) */}
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com",
            name: "IntegrateGo",
            inLanguage: "en-IN",
            publisher: {
              "@id": "https://www.integratego.com/#organization",
            },
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: (process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com") + "/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            ],
          }),
        }}
      />

      {/* 2-c BreadcrumbList */}
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
                item: process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com",
              },
            ],
          }),
        }}
      />

      {/* 2-d FAQPage (Voice Search + Rich Snippet) */}
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
                name: "What is IntegrateGo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "IntegrateGo is Hyderabad's leading institute for IBM Integration training, specializing in IIB, ACE, MQ, and API Connect since 2022.",
                },
              },
              {
                "@type": "Question",
                name: "What courses does IntegrateGo offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer hands-on courses in IBM IIB, ACE, MQ, App Connect, API Connect with labs, projects, and placement support.",
                },
              },
              {
                "@type": "Question",
                name: "When is the next batch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Next IBM IIB & ACE batch starts November 1, 2025. Enroll now!",
                },
              },
              {
                "@type": "Question",
                name: "Is placement assistance provided?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, 90% placement rate with partners like IBM, TCS, Accenture.",
                },
              },
            ],
          }),
        }}
      />

      {/* 2-e Event (Upcoming Batch for Rich Results) */}
      <Script
        id="event-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            name: "IBM IIB & ACE Training Batch – November 2025",
            startDate: "2025-11-01T09:00:00+05:30",
            endDate: "2026-02-28T18:00:00+05:30",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
            location: [
              {
                "@type": "VirtualLocation",
                url: "https://www.integratego.com/online-classes",
              },
              {
                "@type": "Place",
                name: "IntegrateGo Hyderabad Campus",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "KPHB Phase 6, Near Forum Sujana Mall",
                  addressLocality: "Hyderabad",
                  addressRegion: "Telangana",
                  postalCode: "500085",
                  addressCountry: "IN",
                },
              },
            ],
            image: (process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com") + "/images/event-poster.jpg",
            description: "3-month intensive training with hands-on labs and projects. Limited seats.",
            offers: {
              "@type": "Offer",
              url: "https://www.integratego.com/enroll",
              price: "49999",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              validFrom: "2025-10-24",
            },
            performer: {
              "@type": "Person",
              name: "Rajesh Kumar",
              image: (process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com") + "/images/instructor.jpg",
            },
            organizer: {
              "@id": "https://www.integratego.com/#organization",
            },
          }),
        }}
      />

      {/* ---------- Performance Optimizations (Core Web Vitals 2025) ---------- */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="dns-prefetch"
        href="//www.google-analytics.com"
      />
      <link
        rel="dns-prefetch"
        href="//www.googletagmanager.com"
      />
      {/* Preload Hero Image (assuming in LandingPage) */}
      <link
        rel="preload"
        as="image"
        href={(process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com") + "/images/hero-bg.jpg"}
        fetchPriority="high"
      />

      {/* ---------- Main Content – Accessibility Boost ---------- */}
      <main id="main-content" className="min-h-screen">
        <LandingPage />
      </main>
    </>
  );
}