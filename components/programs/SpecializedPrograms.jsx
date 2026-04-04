"use client"

import { Award, TrendingUp, ShieldCheck, Sparkles, Users, Globe, Zap } from "lucide-react"
import { motion } from "framer-motion"

const specialized = [
    {
        title: "Behavioural Safety & Risk Mindset",
        icon: ShieldCheck,
        desc: "Developing a safety-first mindset and proactive risk awareness in high-responsibility environments."
    },
    {
        title: "Digital Professionalism & Online Reputation",
        icon: Globe,
        desc: "Building responsible digital communication habits and protecting professional credibility online."
    },
    {
        title: "Women Leadership & Workplace Confidence",
        icon: Users,
        desc: "Empowering women professionals to lead with confidence, influence, and strategic decision-making."
    },
    {
        title: "POSH Awareness & Workplace Sensitization",
        icon: Sparkles,
        desc: "Creating respectful workplaces through awareness of POSH policies and ethical conduct."
    }
]

const benefits = [
    {
        title: "Improved Communication & Professionalism",
        icon: Zap
    },
    {
        title: "Stronger Leadership & Accountability",
        icon: Award
    },
    {
        title: "Better Teamwork & Collaboration",
        icon: Users
    },
    {
        title: "Reduced Workplace Conflicts",
        icon: ShieldCheck
    },
    {
        title: "Future-Ready Workforce Skills",
        icon: TrendingUp
    },
    {
        title: "Sustainable Performance Growth",
        icon: Sparkles
    }
]

export default function SpecializedPrograms() {

    return (

        <section className="relative py-24 bg-neutral-950 overflow-hidden">

            {/* subtle glow */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute left-1/2 top-[-200px] -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[160px] rounded-full" />

            </div>


            <div className="relative max-w-7xl mx-auto px-6">

                {/* header */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Advanced Corporate Training Focus
                    </h2>

                    <p className="text-white/60 mt-4">
                        Beyond core training programs, we deliver specialized programs
                        designed to strengthen workplace culture, leadership readiness,
                        and sustainable organizational performance.
                    </p>

                </div>


                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Specialized Programs */}

                    <div>

                        <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-8">

                            <Award className="text-primary" />

                            Specialized Programs

                        </h3>

                        <div className="space-y-6">

                            {specialized.map((item, i) => {

                                const Icon = item.icon

                                return (

                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition backdrop-blur"
                                    >

                                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">

                                            <Icon size={22} />

                                        </div>

                                        <div>

                                            <h4 className="font-semibold text-white mb-1">
                                                {item.title}
                                            </h4>

                                            <p className="text-sm text-white/60 leading-relaxed">
                                                {item.desc}
                                            </p>

                                        </div>

                                    </motion.div>

                                )

                            })}

                        </div>

                    </div>


                    {/* Benefits */}

                    <div>

                        <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-8">

                            <TrendingUp className="text-primary" />

                            How Organizations Benefit

                        </h3>

                        <div className="grid sm:grid-cols-2 gap-5">

                            {benefits.map((item, i) => {

                                const Icon = item.icon

                                return (

                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-center gap-3 p-5 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition"
                                    >

                                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">

                                            <Icon size={18} />

                                        </div>

                                        <p className="text-sm text-white/80">
                                            {item.title}
                                        </p>

                                    </motion.div>

                                )

                            })}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}