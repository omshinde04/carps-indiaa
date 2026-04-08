import Hero from "@/components/hero/Hero";
import CarpsApproach from "@/components/home/CarpsApproach";
import EnterpriseSkills from "@/components/home/EnterpriseSkills";
import CareerCTA from "@/components/home/CareerCTA";
import FiveMFormula from "@/components/home/FiveMFormula";

export const metadata = {
  title: "CARPS India | Corporate Training & Skill Development Institute",

  description:
    "CARPS India is a leading corporate training and skill development institute offering leadership, communication, and career-focused programs for students and professionals.",

  keywords: [
    "CARPS India",
    "Corporate Training India",
    "Skill Development Institute",
    "Professional Development Programs",
    "Leadership Training",
    "Soft Skills Training",
    "Career Development Programs",
    "Workplace Communication Training",
    "Employee Training Programs India",
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
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "CARPS India | Corporate Training & Skill Development",
    description:
      "Empowering students and professionals with leadership, communication, and career-focused training programs.",
    url: "https://www.carpsindia.com",
    siteName: "CARPS India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.carpsindia.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "CARPS India Training Institute",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CARPS India | Training & Development",
    description:
      "Corporate training and skill development programs for future-ready professionals.",
    images: ["https://www.carpsindia.com/logo.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      {/* 🔥 STRUCTURED DATA (MOST IMPORTANT SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CARPS India",
              url: "https://www.carpsindia.com",
              logo: "https://www.carpsindia.com/logo.jpeg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 9876543210",
                contactType: "customer support",
                email: "info@carpsindia.com",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
            },

            {
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
            },

            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Corporate Training & Skill Development",
              provider: {
                "@type": "Organization",
                name: "CARPS India",
              },
              description:
                "Training programs focused on leadership, communication, and career development.",
              areaServed: "IN",
            },
          ]),
        }}
      />

      <main>
        <Hero />
        <CarpsApproach />
        <EnterpriseSkills />
        <FiveMFormula />
        <CareerCTA />
      </main>
    </>
  );
}