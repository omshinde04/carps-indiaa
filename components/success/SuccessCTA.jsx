"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessCTA() {
    return (
        <section className="relative py-20 md:py-24 bg-gray-50 overflow-hidden">

            {/* subtle background decoration */}
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                >
                    Ready to write your own story?
                </motion.h2>

                {/* TEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mt-4 text-sm sm:text-base max-w-xl mx-auto"
                >
                    Take the first step toward a more rewarding career. Our admissions
                    team is ready to help you find the right path.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
                >

                    <Link
                        href="/contact"
                        className="bg-primary text-white text-sm sm:text-base px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
                    >
                        Start Your Application
                    </Link>

                    <Link
                        href="/programs"
                        className="border border-gray-300 text-sm sm:text-base px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        View Programs
                    </Link>

                </motion.div>

            </div>

        </section>
    );
}