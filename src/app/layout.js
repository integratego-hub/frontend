import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import QueryWrapper from "@/components/QueryWrapper";
import Script from "next/script";

// Font: Montserrat (optimized)
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

/* ========================================
   1. GLOBAL METADATA – SEO & SOCIAL
   ======================================== */
export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.integratego.com"
  ),
  title: {
    default: "IntegrateGo | Learn IBM Integration, Build Real Projects",
    template: "%s | IntegrateGo",
  },
  description:
    "Master IBM IIB, ACE, MQ, and API Connect with expert-led courses, hands-on labs, and a thriving community. Accelerate your integration career.",
  keywords:
    "IBM Integration, IIB, ACE, App Connect, API Connect, MQ, integration courses, hands-on training, career growth, online learning",

  // Favicons & App Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // Manifest for PWA (optional but pro)
  manifest: "/manifest.json",

  // Open Graph
  openGraph: {
    title: "IntegrateGo – Learn, Build, Grow in IBM Integration",
    description:
      "Expert-led courses, real-world projects, and community support to master IBM integration technologies.",
    url: "/",
    siteName: "IntegrateGo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IntegrateGo Learning Platform",
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
    title: "IntegrateGo | IBM Integration Courses & Labs",
    description: "Learn faster with hands-on projects and expert guidance.",
    images: ["/twitter-card.jpg"],
  },

  // Robots & Verification
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE", // ← Replace!
  },

  // Alternates (for future multilingual)
  alternates: {
    canonical: "/",
  },
};

/* ========================================
   2. ROOT LAYOUT – PROFESSIONAL STRUCTURE
   ======================================== */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        {/* === Preload Critical Assets === */}
        <link
          rel="preload"
          href="/fonts/montserrat-v25-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/montserrat-v25-latin-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <head>
          <link rel="icon" href="/logo-short.png" sizes="any" />
        </head>
        {/* === DNS Prefetch & Preconnect === */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* === Favicon Set === */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* === Theme Color (for mobile browsers) === */}
        <meta name="theme-color" content="#0d6efd" />
        <meta name="msapplication-TileColor" content="#0d6efd" />

        {/* === Viewport === */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="font-sans antialiased bg-white text-gray-900">
        {/* === Google Tag Manager (GTM) – Optional === */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />

        {/* === GTM Noscript Fallback === */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* === App Wrapper === */}
        <QueryWrapper>
          <Navbar />
          <main id="main-content">{children}</main>
        </QueryWrapper>

        {/* === Performance: Lazy Load Bootstrap JS (only if needed) === */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
