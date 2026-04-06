"use client";
import { motion } from "framer-motion";

export default function SkillCard({ title, cover, teach, outcome, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="group relative h-full flex flex-col p-6 md:p-7 rounded-xl bg-white dark:bg-navy-deep shadow-nav border border-gray-100 dark:border-white/10 overflow-hidden transition"
        >

            {/* 🔴 Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-primary opacity-80"></div>

            {/* 🔥 Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full 
                bg-background-light dark:bg-background-dark 
                text-black dark:text-white text-2xl mb-5 
                transition-all duration-300 
                group-hover:bg-primary group-hover:text-white group-hover:scale-110"
            >
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-4 leading-snug">
                {title}
            </h3>

            {/* Divider */}
            <div className="w-8 h-[2px] bg-primary mb-5"></div>

            {/* Content Wrapper */}
            <div className="flex flex-col gap-5 flex-grow">

                {/* What We Cover */}
                <div>
                    <h4 className="text-xs font-semibold mb-2 uppercase tracking-wide text-black/60 dark:text-white/60">
                        What We Cover
                    </h4>
                    <ul className="text-sm leading-relaxed space-y-1 text-black/80 dark:text-white/80">
                        {cover.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1 text-xs">●</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* How We Teach */}
                <div>
                    <h4 className="text-xs font-semibold mb-2 uppercase tracking-wide text-black/60 dark:text-white/60">
                        How We Teach
                    </h4>
                    <ul className="text-sm leading-relaxed space-y-1 text-black/80 dark:text-white/80">
                        {teach.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1 text-xs">●</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Outcome (Pinned Bottom for Equal Height) */}
            <div className="mt-6">
                <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10">
                    <p className="text-sm font-medium text-black/80 dark:text-white/80 leading-relaxed">
                        {outcome}
                    </p>
                </div>
            </div>

            {/* 🔥 Subtle Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary opacity-5 blur-2xl rounded-full"></div>
            </div>

        </motion.div>
    );
}