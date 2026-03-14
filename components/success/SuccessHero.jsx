"use client";

import { motion } from "framer-motion";

export default function SuccessHero() {
    return (
        <section className="relative py-28 bg-[#0f172a] text-white overflow-hidden">

            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="max-w-6xl mx-auto px-6 text-center">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary uppercase tracking-[0.35em] text-sm font-semibold"
                >
                    Alumni Impact
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 text-4xl md:text-6xl font-bold"
                >
                    Your Ambition,
                    <span className="text-primary"> Our Legacy.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-gray-300 max-w-2xl mx-auto"
                >
                    Join the ranks of thousands of professionals who have redefined their
                    careers through the CARPS methodology. Real skills, real impact,
                    real results.
                </motion.p>

            </div>
        </section>
    );
}