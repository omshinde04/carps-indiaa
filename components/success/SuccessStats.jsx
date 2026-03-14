"use client";

import { motion } from "framer-motion";

export default function SuccessStats() {

    const stats = [
        { value: "94%", label: "Employment Rate" },
        { value: "15K+", label: "Alumni Worldwide" },
        { value: "45%", label: "Avg Salary Increase" },
        { value: "200+", label: "Hiring Partners" }
    ];

    return (

        <section className="py-20 bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1f2937] text-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    {stats.map((s, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >

                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                                {s.value}
                            </p>

                            <p className="text-xs md:text-sm mt-3 uppercase tracking-widest text-gray-300">
                                {s.label}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}