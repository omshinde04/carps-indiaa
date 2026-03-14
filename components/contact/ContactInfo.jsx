"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactInfo() {

    const cards = [

        {
            icon: Mail,
            title: "Email Us",
            desc: "Our team responds within 24 hours.",
            value: "admin@carpsindia.com",
            link: "mailto:admin@carpsindia.com",
            color: "bg-red-50 text-primary"
        },

        {
            icon: Phone,
            title: "Call Us",
            desc: "Mon – Fri from 9am to 6pm",
            value: "+91 9370682285",
            link: "tel:+919370682285",
            color: "bg-gray-100 text-gray-800"
        },

        {
            icon: MapPin,
            title: "Our Main Campus",
            desc: "Maharashtra, India",
            value: "Open in Maps",
            link: "https://maps.google.com",
            color: "bg-red-50 text-primary"
        }

    ]

    return (

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">

            {cards.map((card, i) => {

                const Icon = card.icon

                return (

                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
                    >

                        <div className="flex items-start gap-4">

                            {/* icon */}

                            <div className={`p-3 rounded-xl ${card.color} group-hover:scale-110 transition`}>

                                <Icon size={20} />

                            </div>

                            {/* content */}

                            <div className="flex-1">

                                <h4 className="font-semibold text-lg text-gray-900">
                                    {card.title}
                                </h4>

                                <p className="text-gray-500 text-sm mt-1">
                                    {card.desc}
                                </p>

                                <a
                                    href={card.link}
                                    target="_blank"
                                    className="text-primary font-semibold text-sm mt-3 inline-block hover:underline"
                                >

                                    {card.value} →

                                </a>

                            </div>

                        </div>

                    </motion.div>

                )

            })}

        </div>

    )

}