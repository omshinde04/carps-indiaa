import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
    title: "Contact CARPS India | Training Programs & Business Inquiries",

    description:
        "Get in touch with CARPS India for corporate training, skill development programs, workshops, and partnerships. Contact us for inquiries, collaborations, and student training programs.",

    keywords: [
        "Contact CARPS India",
        "Corporate Training Contact India",
        "Skill Development Institute Contact",
        "Training Program Inquiry India",
        "Business Training Contact",
        "Leadership Training Inquiry",
        "Professional Development Programs Contact",
    ],

    authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
    creator: "CARPS India",
    publisher: "CARPS India",

    alternates: {
        canonical: "https://www.carpsindia.com/contact",
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
        title: "Contact CARPS India | Corporate Training & Programs",
        description:
            "Contact CARPS India for training programs, workshops, and partnerships. Empower your team with future-ready skills.",
        url: "https://www.carpsindia.com/contact",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "Contact CARPS India Training Institute",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact CARPS India",
        description:
            "Reach out to CARPS India for corporate training and skill development programs.",
        images: ["https://www.carpsindia.com/logo.jpeg"],
    },
};

export default function ContactPage() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA (VERY IMPORTANT FOR LOCAL SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            name: "Contact CARPS India",
                            url: "https://www.carpsindia.com/contact",
                            description:
                                "Contact CARPS India for corporate training programs and professional development.",
                        },
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
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://www.carpsindia.com",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Contact",
                                    item: "https://www.carpsindia.com/contact",
                                },
                            ],
                        },
                    ]),
                }}
            />

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
        </>
    );
}