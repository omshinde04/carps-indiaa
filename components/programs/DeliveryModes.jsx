"use client"

import {
    Users,
    Clock,
    Building2,
    Factory,
    Truck,
    Laptop,
    Briefcase
} from "lucide-react"

import { motion } from "framer-motion"

const deliveryModes = [
    {
        title: "On-site Classroom Training",
        desc: "Instructor-led programs delivered directly at your workplace.",
        icon: Building2
    },
    {
        title: "Virtual / Online Training",
        desc: "Interactive virtual sessions designed for distributed teams.",
        icon: Laptop
    },
    {
        title: "Short Workshops & Deep-Dives",
        desc: "Focused learning sessions for rapid skill development.",
        icon: Briefcase
    },
    {
        title: "Department-Specific Sessions",
        desc: "Customized programs designed for specific teams.",
        icon: Users
    }
]

const industries = [
    { name: "Corporate Organizations", icon: Building2 },
    { name: "IT & Technology Companies", icon: Laptop },
    { name: "Manufacturing Units", icon: Factory },
    { name: "Logistics Companies", icon: Truck },
    { name: "MSMEs & Growing Businesses", icon: Briefcase }
]

export default function DeliveryModes() {

    return (

        <section className="py-24 bg-neutral-950">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="text-center max-w-3xl mx-auto mb-20">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">

                        Flexible Training Delivery & Industry Partnerships

                    </h2>

                    <p className="text-white/60 mt-4">

                        Our programs adapt to different learning environments and industries,
                        ensuring organizations receive practical, scalable training solutions.

                    </p>

                </div>


                <div className="grid lg:grid-cols-2 gap-20">

                    {/* DELIVERY TIMELINE */}

                    <div>

                        <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-10">

                            <Clock className="text-primary" />
                            Training Delivery Modes

                        </h3>

                        <div className="relative border-l border-white/10 pl-8 space-y-10">

                            {deliveryModes.map((item, i) => {

                                const Icon = item.icon

                                return (

                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative"
                                    >

                                        {/* dot */}

                                        <div className="absolute -left-[34px] w-8 h-8 rounded-full bg-primary/10 border border-primary flex items-center justify-center">

                                            <Icon size={16} className="text-primary" />

                                        </div>

                                        <h4 className="text-white font-semibold mb-2">
                                            {item.title}
                                        </h4>

                                        <p className="text-sm text-white/60">
                                            {item.desc}
                                        </p>

                                    </motion.div>

                                )

                            })}

                        </div>

                    </div>


                    {/* INDUSTRY GRID */}

                    <div>

                        <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-10">

                            <Users className="text-primary" />
                            Industries We Support

                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

                            {industries.map((item, i) => {

                                const Icon = item.icon

                                return (

                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: .9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition text-center"
                                    >

                                        <div className="mb-3 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">

                                            <Icon size={20} />

                                        </div>

                                        <p className="text-sm text-white/80 font-medium">
                                            {item.name}
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