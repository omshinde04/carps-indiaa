"use client"

import { useEffect, useRef } from "react"
import { Brain, Settings, Briefcase, TrendingUp, Target } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

const philosophy = [
    { text: "Focus on behaviour change, not just knowledge", icon: Brain },
    { text: "Practical application over theory", icon: Settings },
    { text: "Real workplace scenarios and case discussions", icon: Briefcase },
    { text: "Future-ready skills aligned with evolving business needs", icon: TrendingUp },
    { text: "Customization based on organization and role", icon: Target },
]

export default function TrainingPhilosophy() {

    const controls = useAnimation()
    const sliderRef = useRef(null)

    const sliderItems = [...philosophy, ...philosophy]

    useEffect(() => {

        controls.start({
            x: ["0%", "-50%"],
            transition: {
                repeat: Infinity,
                duration: 10, // faster movement
                ease: "linear"
            }
        })

    }, [])

    return (

        <section className="relative py-24 bg-neutral-950 overflow-hidden">

            {/* glow background */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[160px] rounded-full"></div>

            </div>


            <div className="relative max-w-7xl mx-auto px-6">

                {/* header */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Our Training Philosophy
                    </h2>

                    <p className="text-white/60 mt-4">
                        Our programs focus on transforming behaviour,
                        improving workplace capability, and preparing
                        professionals for real industry challenges.
                    </p>

                </div>


                {/* DESKTOP GRID */}

                <div className="hidden lg:grid grid-cols-5 gap-6">

                    {philosophy.map((item, i) => {

                        const Icon = item.icon

                        return (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur hover:border-primary/50 transition"
                            >

                                <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                    <Icon size={26} />
                                </div>

                                <p className="text-sm text-white/80 leading-relaxed">
                                    {item.text}
                                </p>

                            </motion.div>

                        )

                    })}

                </div>


                {/* MOBILE SLIDER */}

                <div className="lg:hidden overflow-hidden">

                    <motion.div
                        ref={sliderRef}
                        className="flex gap-5 cursor-grab active:cursor-grabbing"
                        animate={controls}
                        drag="x"
                        dragConstraints={{ left: -500, right: 0 }}
                        onHoverStart={() => controls.stop()}
                        onHoverEnd={() =>
                            controls.start({
                                x: ["0%", "-50%"],
                                transition: {
                                    repeat: Infinity,
                                    duration: 10,
                                    ease: "linear"
                                }
                            })
                        }
                    >

                        {sliderItems.map((item, i) => {

                            const Icon = item.icon

                            return (

                                <div
                                    key={i}
                                    className="min-w-[260px] rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                                >

                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">

                                        <Icon size={22} />

                                    </div>

                                    <p className="text-sm text-white/80 leading-relaxed">
                                        {item.text}
                                    </p>

                                </div>

                            )

                        })}

                    </motion.div>

                </div>

            </div>

        </section>

    )
}