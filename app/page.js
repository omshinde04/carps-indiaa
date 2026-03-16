import Hero from "@/components/hero/Hero";
import CarpsApproach from "@/components/home/CarpsApproach";
import EnterpriseSkills from "@/components/home/EnterpriseSkills";
import CareerCTA from "@/components/home/CareerCTA";
import FiveMFormula from "@/components/home/FiveMFormula";

export const metadata = {
  title: "CARPS India | Corporate Training & Career Development",

  description:
    "CARPS India provides corporate training, professional development programs, and industry-focused learning to help students and professionals build real-world skills and achieve career success.",

  keywords: [
    "CARPS India",
    "Corporate Training India",
    "Professional Skills Training",
    "Career Development Programs",
    "Soft Skills Training",
    "Leadership Training",
    "Workplace Communication Training",
    "Corporate Training Programs",
  ],

  authors: [{ name: "CARPS India" }],

  publisher: "CARPS India",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.carpsindia.com",
  },

  openGraph: {
    title: "CARPS India | Corporate Training & Career Development",
    description:
      "Industry-focused corporate training and professional development programs designed to build future-ready professionals.",
    url: "https://www.carpsindia.com",
    siteName: "CARPS India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.carpsindia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CARPS India Corporate Training Programs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CARPS India | Corporate Training & Career Development",
    description:
      "Future-ready training programs for professionals and organizations.",
    images: ["https://www.carpsindia.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CarpsApproach />
      <EnterpriseSkills />
      <FiveMFormula />
      <CareerCTA />
    </main>
  );
}