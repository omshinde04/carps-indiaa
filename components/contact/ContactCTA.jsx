"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactCTA() {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 px-10 py-14 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm"
                >

                    {/* subtle background glow */}

                    <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-primary/10 blur-[120px] rounded-full"></div>

                    <div className="absolute bottom-[-100px] left-[-100px] w-[260px] h-[260px] bg-gray-300/20 blur-[100px] rounded-full"></div>


                    {/* TEXT */}

                    <div className="max-w-xl text-center md:text-left relative">

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">

                            Ready to start your journey?

                        </h3>

                        <p className="text-gray-600 mt-4 text-lg">

                            Join thousands of learners building successful careers
                            through industry-driven training programs at CARPS.

                        </p>

                    </div>


                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-4 justify-center md:justify-end relative">

                        <Link
                            href="/programs"
                            className="bg-primary text-white px-7 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md"
                        >
                            Explore Courses
                        </Link>

                        <Link
                            href="/contact"
                            className="border border-gray-300 px-7 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
                        >
                            Talk to Advisor
                        </Link>

                    </div>

                </motion.div>

            </div>

        </section>

    )

}