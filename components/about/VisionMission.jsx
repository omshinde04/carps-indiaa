"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
    const items = [
        {
            icon: Eye,
            title: "Our Vision",
            description:
                "To become a global leader in professional development by empowering individuals with the confidence, skills, and mindset required to succeed in the modern corporate world.",
            accent: "bg-primary",
            iconColor: "text-primary",
        },
        {
            icon: Target,
            title: "Our Mission",
            description:
                "To bridge the gap between academic learning and industry expectations through practical training, leadership development, and values that shape future-ready professionals.",
            accent: "bg-gray-900",
            iconColor: "text-gray-900",
        },
    ];

    return (
        <section className="bg-gray-50 py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-10">

                    {items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative bg-white border border-gray-200 p-10 shadow-sm hover:shadow-lg transition"
                            >

                                {/* LEFT ACCENT BAR */}
                                <span
                                    className={`absolute left-0 top-0 h-full w-1 ${item.accent}`}
                                />

                                {/* HEADER */}
                                <div className="flex items-center gap-4">

                                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-md">
                                        <Icon className={item.iconColor} size={26} />
                                    </div>

                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>

                                </div>

                                {/* TEXT */}
                                <p className="mt-6 text-gray-600 leading-relaxed text-[15px] md:text-base">
                                    {item.description}
                                </p>

                            </motion.div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
}