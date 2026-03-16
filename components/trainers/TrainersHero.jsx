"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Award } from "lucide-react"

export default function TrainersHero() {

    return (

        <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white">

            {/* background glow */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/20 blur-[140px] rounded-full"></div>

                <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[400px] bg-red-500/10 blur-[120px] rounded-full"></div>

            </div>


            <div className="relative max-w-7xl mx-auto px-6 text-center">

                {/* headline */}

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >

                    Learn From
                    <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">

                        Industry Experts

                    </span>

                </motion.h1>


                {/* description */}

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                    className="mt-8 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                >

                    Our trainers are not just teachers — they are mentors,
                    industry professionals and career architects who guide
                    students from learning fundamentals to achieving real
                    professional success.

                </motion.p>


                {/* trust metrics */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .4 }}
                    className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                >

                    <div className="flex flex-col items-center">

                        <Users className="text-primary mb-3" size={32} />

                        <span className="text-3xl font-bold">20+</span>

                        <span className="text-gray-400 text-sm mt-1">
                            Expert Mentors
                        </span>

                    </div>


                    <div className="flex flex-col items-center">

                        <Briefcase className="text-primary mb-3" size={32} />

                        <span className="text-3xl font-bold">10+ Years</span>

                        <span className="text-gray-400 text-sm mt-1">
                            Industry Experience
                        </span>

                    </div>


                    <div className="flex flex-col items-center col-span-2 md:col-span-1">

                        <Award className="text-primary mb-3" size={32} />

                        <span className="text-3xl font-bold">5000+</span>

                        <span className="text-gray-400 text-sm mt-1">
                            Students Mentored
                        </span>

                    </div>

                </motion.div>

            </div>

        </section>

    )

}