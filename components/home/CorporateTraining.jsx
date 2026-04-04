"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CorporateTraining() {

    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-black via-[#121212] to-[#1b1b1b] text-white py-24">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                >

                    <p className="text-primary tracking-[0.25em] uppercase text-sm font-semibold">
                        B2B Solutions
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">

                        Future-Ready <br />

                        <span className="text-primary">
                            Human Skills
                        </span>{" "}
                        for Enterprises

                    </h2>

                    <p className="text-gray-300 mt-6 leading-relaxed text-lg max-w-xl">
                        Our corporate training philosophy goes beyond technical instruction.
                        We build cultures of high performance, leadership, and emotional
                        intelligence within your workforce.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-8 space-y-5">

                        <div className="flex items-start gap-4">

                            <CheckCircle className="text-primary mt-1" size={22} />

                            <div>
                                <p className="font-semibold text-white">
                                    Custom Curriculum
                                </p>

                                <p className="text-gray-400 text-sm">
                                    Tailored to your industry-specific operational challenges.
                                </p>
                            </div>

                        </div>

                        <div className="flex items-start gap-4">

                            <CheckCircle className="text-primary mt-1" size={22} />

                            <div>
                                <p className="font-semibold text-white">
                                    Impact Measurement
                                </p>

                                <p className="text-gray-400 text-sm">
                                    ROIs tracked through post-training performance metrics.
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* CTA */}
                    <div className="mt-10">

                        <Link
                            href="/contact"
                            className="bg-primary hover:scale-105 transition text-white font-semibold px-8 py-4 rounded-full inline-block shadow-lg"
                        >
                            Request Training Proposal
                        </Link>

                    </div>

                </motion.div>



                {/* RIGHT SIDE VISUAL */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="relative flex justify-center"
                >

                    {/* BACKGROUND SHAPE */}
                    <div className="absolute w-[420px] h-[260px] border-4 border-gray-700 opacity-30 rounded-lg top-10 right-8 hidden md:block" />



                    {/* CARD */}
                    <motion.div
                        initial={{ scale: .9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: .2 }}
                        className="relative bg-gradient-to-br from-[#1c6a73] to-[#0f4046] rounded-xl shadow-2xl p-16 text-center w-[420px]"
                    >

                        <h3 className="text-3xl font-semibold tracking-wide">
                            CORPORATE <br /> TRAINING
                        </h3>

                    </motion.div>



                    {/* PARTNER BADGE */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: .4 }}
                        className="absolute -bottom-6 left-12 bg-white text-black px-8 py-6 rounded-xl shadow-xl"
                    >

                        <p className="text-primary text-3xl font-bold">
                            50+
                        </p>

                        <p className="text-xs font-semibold tracking-wide">
                            CORPORATE PARTNERS
                        </p>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}