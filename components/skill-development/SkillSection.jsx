"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import {
    FaMicrophone,
    FaBrain,
    FaUsers,
    FaLaptop,
    FaBullseye
} from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

const skills = [
    {
        title: "Communication & Confidence Development",
        icon: <FaMicrophone />,
        cover: [
            "Public speaking training",
            "Verbal and non-verbal communication",
            "Presentation and stage skills",
            "Storytelling and self-expression",
        ],
        teach: [
            "Classroom speaking activities",
            "Role plays and presentations",
            "Group discussions and debates",
            "Confidence-building exercises",
        ],
        outcome:
            "Students overcome stage fear and communicate confidently in any situation.",
    },
    {
        title: "Emotional Intelligence & Well-Being",
        icon: <FaBrain />,
        cover: [
            "Understanding emotions",
            "Stress and anxiety management",
            "Growth mindset",
            "Mindfulness techniques",
        ],
        teach: [
            "Reflection activities",
            "Real-life discussions",
            "Mindfulness exercises",
            "Emotional awareness games",
        ],
        outcome:
            "Students become emotionally strong and resilient.",
    },
    {
        title: "Leadership & Teamwork",
        icon: <FaUsers />,
        cover: [
            "Leadership qualities",
            "Team collaboration",
            "Decision-making",
            "Conflict resolution",
        ],
        teach: [
            "Group challenges",
            "Leadership roles",
            "Case-based learning",
            "Interactive simulations",
        ],
        outcome:
            "Students develop confidence to lead and collaborate effectively.",
    },
    {
        title: "Digital & Future Skills",
        icon: <FaLaptop />,
        cover: [
            "Digital literacy",
            "Cyber safety awareness",
            "Productivity tools",
            "Creative thinking",
        ],
        teach: [
            "Hands-on activities",
            "Tool demonstrations",
            "Innovation challenges",
            "Problem-solving tasks",
        ],
        outcome:
            "Students become digitally aware and future-ready.",
    },
    {
        title: "Career Awareness & Life Skills",
        icon: <FaBullseye />,
        cover: [
            "Career exploration",
            "Goal setting",
            "Time management",
            "Financial basics",
        ],
        teach: [
            "Career mapping",
            "Workshops",
            "Case discussions",
            "Planning exercises",
        ],
        outcome:
            "Students gain clarity and confidence about their future.",
    },
    {
        title: "Critical Thinking & Problem Solving",
        icon: <FaBrain />,
        cover: [
            "Logical reasoning",
            "Analytical thinking",
            "Decision making",
            "Creative problem solving",
        ],
        teach: [
            "Case studies",
            "Real-world challenges",
            "Interactive tasks",
            "Group analysis",
        ],
        outcome:
            "Students develop strong thinking abilities to solve real-life problems.",
    },
];

export default function SkillSection() {
    return (
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-6 md:px-16 bg-background-light dark:bg-background-dark overflow-hidden">

            {/* 🔴 Background Glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary opacity-5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary opacity-5 blur-[120px] rounded-full"></div>


            {/* 🔥 Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-16"
            >

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full 
            bg-background-light dark:bg-background-dark 
            text-black dark:text-white text-lg shadow">
                        <FaLayerGroup />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    Our Core Programs
                </h2>

                {/* Description */}
                <p className="text-base text-black/70 dark:text-white/70">
                    We focus on building real-world skills that empower students to grow confidently,
                    think clearly, and succeed in modern environments.
                </p>

                {/* Accent Line */}
                <div className="w-20 h-[3px] bg-primary mx-auto mt-6 rounded-full"></div>

            </motion.div>

            {/* 🔥 Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <SkillCard {...skill} />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}