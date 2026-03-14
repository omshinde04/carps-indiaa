"use client"

import { motion } from "framer-motion"

export default function ContactHero() {

    return (

        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-28">

            {/* background glow */}

            <div className="absolute inset-0 opacity-30 pointer-events-none">

                <div className="absolute top-[-200px] left-[20%] w-[500px] h-[500px] bg-primary blur-[180px] rounded-full"></div>

                <div className="absolute bottom-[-200px] right-[10%] w-[400px] h-[400px] bg-red-500 blur-[160px] rounded-full"></div>

            </div>


            {/* grid pattern */}

            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:32px_32px]" />


            <div className="relative max-w-7xl mx-auto px-6 text-center">

                {/* badge */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-white/10"
                >

                    CARPS Institute • Contact

                </motion.div>


                {/* headline */}

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7, delay: .1 }}
                    className="mt-8 text-4xl md:text-6xl font-bold leading-tight"
                >

                    Connect with{" "}

                    <span className="text-primary">
                        Excellence
                    </span>

                </motion.h1>


                {/* description */}

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7, delay: .2 }}
                    className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
                >

                    Have questions about our programs, training initiatives,
                    or career opportunities?

                    <span className="block mt-2 text-gray-400">

                        Our team is here to guide your academic and professional journey.

                    </span>

                </motion.p>


                {/* CTA buttons */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7, delay: .3 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >

                    <a
                        href="#contact-form"
                        className="bg-primary hover:bg-red-600 transition px-7 py-3 rounded-full font-semibold shadow-lg"
                    >
                        Send Message
                    </a>

                    <a
                        href="/programs"
                        className="bg-white/10 hover:bg-white/20 border border-white/10 px-7 py-3 rounded-full font-semibold backdrop-blur"
                    >
                        Explore Programs
                    </a>

                </motion.div>

            </div>

        </section>

    )

}