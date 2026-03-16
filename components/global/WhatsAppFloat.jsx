"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {

    const phone = "919370682285"

    const message = encodeURIComponent(
        "Hello CARPS Team, I would like to know more about your training programs."
    )

    const link = `https://wa.me/${phone}?text=${message}`

    return (

        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"

            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .95 }}

            className="fixed bottom-6 right-6 z-[100] group"
        >

            {/* glow background */}

            <div className="absolute inset-0 bg-green-500 blur-xl opacity-40 rounded-full group-hover:opacity-70 transition" />

            {/* button */}

            <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white shadow-xl">

                <MessageCircle size={28} />

            </div>

            {/* tooltip */}

            <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">

                Chat with us

            </div>

        </motion.a>

    )

}