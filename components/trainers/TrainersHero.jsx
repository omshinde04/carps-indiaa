"use client"

import { motion } from "framer-motion"

export default function TrainersHero() {

    return (

        <section className="py-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold"
                >

                    Meet Our
                    <span className="text-primary"> Expert Trainers</span>

                </motion.h1>

                <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                    Our trainers combine academic excellence with real-world industry experience,
                    ensuring every learner receives practical, career-focused guidance.
                </p>

            </div>

        </section>

    )

}