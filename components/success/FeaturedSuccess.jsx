"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function FeaturedSuccess() {

    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden">

            {/* Background glow */}
            <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden"
                >

                    {/* LEFT IMAGE */}
                    <div className="relative h-[420px] lg:h-full">

                        <Image
                            src="https://images.unsplash.com/photo-1557862921-37829c790f19"
                            alt="Featured Alumni"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                        {/* badge */}
                        <div className="absolute bottom-6 left-6 bg-primary text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg">
                            Class of 2023 <br />
                            Honors Graduate
                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="p-10 md:p-14 flex flex-col justify-center relative">

                        {/* quote icon */}
                        <Quote
                            className="absolute top-8 right-8 text-primary/20"
                            size={60}
                        />

                        <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-gray-800">
                            “CARPS transformed my career. The practical training and expert
                            mentorship gave me the skills to land my dream job.”
                        </p>

                        {/* divider */}
                        <div className="w-16 h-[3px] bg-primary mt-8"></div>

                        {/* person info */}
                        <div className="mt-6">

                            <p className="text-lg font-bold text-gray-900">
                                Alexandra Vance
                            </p>

                            <p className="text-primary text-sm font-medium">
                                Senior Solutions Architect at Microsoft
                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}