"use client"

import { motion } from "framer-motion"
import { User, Mail, Phone, MessageSquare } from "lucide-react"

export default function ContactForm() {

    return (

        <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
        >

            {/* TITLE */}

            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">

                <span className="text-primary text-xl">➤</span>

                Send us a Message

            </h3>


            <form className="space-y-6">

                {/* NAME + EMAIL */}

                <div className="grid md:grid-cols-2 gap-5">

                    <div className="relative">

                        <User
                            size={18}
                            className="absolute left-4 top-3.5 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                        />

                    </div>


                    <div className="relative">

                        <Mail
                            size={18}
                            className="absolute left-4 top-3.5 text-gray-400"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                        />

                    </div>

                </div>


                {/* PHONE */}

                <div className="relative">

                    <Phone
                        size={18}
                        className="absolute left-4 top-3.5 text-gray-400"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    />

                </div>


                {/* MESSAGE */}

                <div className="relative">

                    <MessageSquare
                        size={18}
                        className="absolute left-4 top-4 text-gray-400"
                    />

                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                    />

                </div>


                {/* BUTTON */}

                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-red-600 text-white py-3.5 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
                >

                    Submit Inquiry →

                </button>

            </form>

        </motion.div>

    )

}