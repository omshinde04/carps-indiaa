"use client"

import { motion } from "framer-motion"

export default function ProgramsHero() {

    return (

        <section className="py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="text-4xl md:text-6xl font-bold"
                >

                    Corporate Training
                    <span className="block text-primary">
                        Future-Ready Human Skills
                    </span>

                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                    className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
                >

                    We deliver impact-driven corporate training programs that focus on
                    human skills, professional mindset, and workplace performance.

                </motion.p>

            </div>
        </section>

    )
}