import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactCTA from "@/components/contact/ContactCTA"

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