import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/global/WhatsAppFloat";

// 🔥 IMPORT AI AGENT
import AIWidget from "@/components/agent/AIWidget";

export const metadata = {
  metadataBase: new URL("https://www.carpsindia.com"),

  title: {
    default: "CARPS India | Corporate Training & Professional Development",
    template: "%s | CARPS India",
  },

  description:
    "CARPS India provides corporate training, leadership development, and professional skill programs designed to build future-ready professionals and high-performing organizations.",

  keywords: [
    "CARPS India",
    "Corporate Training India",
    "Professional Development Programs",
    "Leadership Training",
    "Workplace Communication Training",
    "Business Skills Training",
    "Corporate Workshops India",
  ],

  authors: [{ name: "CARPS India" }],

  publisher: "CARPS India",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.carpsindia.com",
    siteName: "CARPS India",
    title: "CARPS India | Corporate Training & Professional Development",
    description:
      "Industry-focused corporate training programs designed to build leadership, communication, and workplace skills.",
    images: [
      {
        url: "https://www.carpsindia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CARPS India Corporate Training",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CARPS India | Corporate Training",
    description:
      "Corporate training and professional development programs designed for future-ready professionals.",
    images: ["https://www.carpsindia.com/og-image.jpg"],
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
      <body>

        <Navbar />

        {children}

        <WhatsAppFloat />

        {/* 🔥 AI ASSISTANT (GLOBAL FLOAT) */}
        <AIWidget />

        <Footer />

      </body>
    </html>
  );
}