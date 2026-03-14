"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] flex items-center justify-center overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="CARPS Institute Campus"
                fill
                priority
                className="object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b132b]/90 via-[#0b132b]/80 to-[#0b132b]/60"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

                {/* SMALL LABEL */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-primary px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase"
                >
                    Excellence in Education
                </motion.span>

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                    About CARPS INDIA
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="mt-6 text-gray-200 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    Empowering the next generation of professionals through excellence in
                    corporate education, leadership development, and character building.
                </motion.p>

            </div>

        </section>
    );
}