"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CareerCTA() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">

            {/* BACKGROUND DECOR */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 text-center">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
                >
                    Start Your Career Journey
                    <br />
                    <span className="text-primary">Today</span>
                </motion.h2>

                {/* SUBTITLE */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    Join thousands of successful graduates who have transformed their
                    careers through CARPS Institute’s expert training, mentorship, and
                    industry-aligned programs.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center gap-5 mt-10"
                >
                    <Link
                        href="/programs"
                        className="bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
                    >
                        Explore Programs
                    </Link>

                    <Link
                        href="/contact"
                        className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
                    >
                        Contact Admissions
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}