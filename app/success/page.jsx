import SuccessHero from "@/components/success/SuccessHero"
import FeaturedSuccess from "@/components/success/FeaturedSuccess"
import AlumniStories from "@/components/success/AlumniStories"
import SuccessStats from "@/components/success/SuccessStats"
import SuccessCTA from "@/components/success/SuccessCTA"

export const metadata = {
    title: "Success Stories | CARPS India Alumni & Career Transformations",

    description:
        "Discover inspiring success stories from CARPS India participants who achieved career growth, professional confidence, and workplace excellence through our training programs.",

    keywords: [
        "CARPS India Success Stories",
        "Corporate Training Success Stories",
        "Professional Growth Stories",
        "Career Transformation Programs",
        "Training Program Results",
        "Alumni Success Stories India",
        "Skill Development Success Stories",
    ],

    authors: [{ name: "CARPS India" }],

    publisher: "CARPS India",

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: "https://www.carpsindia.com/success",
    },

    openGraph: {
        title: "Success Stories | CARPS India Alumni & Career Transformations",
        description:
            "Read real success stories from CARPS India participants who built confidence, leadership skills, and professional growth through our programs.",
        url: "https://www.carpsindia.com/success",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CARPS India Success Stories",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Success Stories | CARPS India",
        description:
            "Explore inspiring career growth and success stories from CARPS India training participants.",
        images: ["https://www.carpsindia.com/og-image.jpg"],
    },
};

export default function SuccessPage() {

    return (

        <main>

            <SuccessHero />

            <FeaturedSuccess />

            <AlumniStories />

            <SuccessStats />

            <SuccessCTA />

        </main>

    )

}