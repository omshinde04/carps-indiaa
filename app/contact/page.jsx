import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactCTA from "@/components/contact/ContactCTA"

export const metadata = {
    title: "Contact CARPS India | Corporate Training & Program Inquiries",

    description:
        "Contact CARPS India for corporate training programs, professional development workshops, and skill-building initiatives. Reach out to our team for program details, partnerships, and training inquiries.",

    keywords: [
        "Contact CARPS India",
        "Corporate Training Contact India",
        "Corporate Training Inquiry",
        "Professional Training Programs India",
        "Business Skills Training India",
        "Corporate Learning Programs",
        "CARPS India Contact",
    ],

    authors: [{ name: "CARPS India" }],

    publisher: "CARPS India",

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: "https://www.carpsindia.com/contact",
    },

    openGraph: {
        title: "Contact CARPS India | Corporate Training & Program Inquiries",
        description:
            "Get in touch with CARPS India for corporate training programs, workshops, and professional development opportunities.",
        url: "https://www.carpsindia.com/contact",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact CARPS India Corporate Training",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact CARPS India | Corporate Training",
        description:
            "Reach out to CARPS India for corporate training programs and professional development workshops.",
        images: ["https://www.carpsindia.com/og-image.jpg"],
    },
};

export default function ContactPage() {

    return (

        <main>

            <ContactHero />

            <section className="py-20 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

                    <ContactForm />

                    <ContactInfo />

                </div>

            </section>

            <ContactCTA />

        </main>

    )

}