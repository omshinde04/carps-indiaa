import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/global/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL("https://www.carpsindia.com"),

  title: {
    default: "CARPS India | Corporate Training & Skill Development",
    template: "%s | CARPS India",
  },

  description:
    "CARPS India offers corporate training, leadership development, communication skills, and digital skill programs designed to build future-ready professionals and high-performing individuals.",

  keywords: [
    "CARPS India",
    "Corporate Training India",
    "Skill Development Programs",
    "Communication Skills Training",
    "Leadership Training India",
    "Digital Skills Training",
    "Student Development Programs",
    "Professional Training",
  ],

  authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
  creator: "CARPS India",
  publisher: "CARPS India",

  alternates: {
    canonical: "https://www.carpsindia.com",
  },

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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.carpsindia.com",
    siteName: "CARPS India",
    title: "CARPS India | Corporate Training & Skill Development",
    description:
      "Empowering students and professionals with industry-relevant skills, leadership training, and career-focused programs.",
    images: [
      {
        url: "https://www.carpsindia.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "CARPS India Corporate Training",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CARPS India | Corporate Training & Skill Development",
    description:
      "Industry-focused training programs for communication, leadership, and digital skills.",
    images: ["https://www.carpsindia.com/logo.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CARPS India",
              url: "https://www.carpsindia.com",
              logo: "https://www.carpsindia.com/logo.jpeg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 9876543210",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
                "https://www.facebook.com/",
              ],
            }),
          }}
        />

        {/* 🔥 EDUCATIONAL ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "CARPS India",
              url: "https://www.carpsindia.com",
              logo: "https://www.carpsindia.com/logo.jpeg",
              email: "info@carpsindia.com",
              telephone: "+91 9876543210",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* 🔥 WEBSITE SCHEMA (VERY POWERFUL FOR SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CARPS India",
              url: "https://www.carpsindia.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.carpsindia.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body>
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}