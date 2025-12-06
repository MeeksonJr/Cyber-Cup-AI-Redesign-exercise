"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Shield, Brain, Bot, Lock, Server, ChevronRight, Users, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const competitions = [
  {
    title: "CTF",
    description:
      "Traditional Capture-The-Flag challenges covering web security, cryptography, forensics, and reverse engineering.",
    icon: Shield,
    gradient: "from-[#043657] via-[#0a4a6e] to-[#043657]",
    accent: "#00b4d8",
    difficulty: "All Levels",
    participants: "1,200+",
    deadline: "March 15, 2025",
    status: "Open",
  },
  {
    title: "LLM CTF Challenge",
    description:
      "Exploring prompt injection and jailbreak attacks to uncover flags hidden within large language models.",
    icon: Brain,
    gradient: "from-[#1a4b8c] via-[#043657] to-[#1a4b8c]",
    accent: "#98c5ea",
    difficulty: "Beginner",
    participants: "850+",
    deadline: "February 28, 2025",
    status: "Open",
  },
  {
    title: "AI-Assisted CTF",
    description:
      "Leveraging AI tools and agents to solve traditional cybersecurity challenges with enhanced capabilities.",
    icon: Bot,
    gradient: "from-[#043657] via-[#1a4b8c] to-[#043657]",
    accent: "#00f0ff",
    difficulty: "Advanced",
    participants: "650+",
    deadline: "April 1, 2025",
    status: "Open",
  },
  {
    title: "LLM Backdoor Attack",
    description:
      "Investigating backdoor attacks, jailbreaking techniques, and defense mechanisms to improve LLM robustness.",
    icon: Lock,
    gradient: "from-[#0a4a6e] via-[#043657] to-[#0a4a6e]",
    accent: "#00b4d8",
    difficulty: "Advanced",
    participants: "420+",
    deadline: "March 20, 2025",
    status: "Open",
  },
  {
    title: "MCP Security",
    description: "Exploring attacks and defenses to strengthen MCP servers and ensure resilient AI coordination.",
    icon: Server,
    gradient: "from-[#043657] via-[#0a4a6e] to-[#043657]",
    accent: "#98c5ea",
    difficulty: "Expert",
    participants: "280+",
    deadline: "April 10, 2025",
    status: "Open",
  },
]

function CompetitionCard({
  competition,
  index,
  isInView,
}: {
  competition: (typeof competitions)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
        index === 0 ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${competition.gradient}`} />

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${competition.accent}40, transparent, ${competition.accent}40)`,
          opacity: isHovered ? 1 : 0,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Icon watermark */}
      <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 opacity-5">
        <competition.icon className="w-64 h-64" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 p-6 md:p-8 h-full flex flex-col ${index === 0 ? "min-h-[400px]" : "min-h-[200px]"}`}
      >
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${competition.accent}20` }}
          >
            <competition.icon className="w-6 h-6" style={{ color: competition.accent }} />
          </motion.div>
          <div className="flex flex-col items-end gap-2">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${competition.accent}20`,
                color: competition.accent,
              }}
            >
              {competition.difficulty}
            </span>
            <span
              className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30"
            >
              {competition.status}
            </span>
          </div>
        </div>

        <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">{competition.title}</h3>
        <p className="text-[#98c5ea]/80 leading-relaxed flex-grow text-sm md:text-base mb-4">{competition.description}</p>

        {/* Additional Information */}
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-[#98c5ea]/70">
            <Users className="w-4 h-4" style={{ color: competition.accent }} />
            <span>{competition.participants}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#98c5ea]/70">
            <Calendar className="w-4 h-4" style={{ color: competition.accent }} />
            <span>Reg: {competition.deadline}</span>
          </div>
        </div>

        <motion.div
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 font-semibold"
          style={{ color: competition.accent }}
        >
          <span className="text-sm uppercase tracking-wider">Learn More</span>
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 60px ${competition.accent}20`,
          opacity: isHovered ? 1 : 0,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export function Competitions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="competitions" className="py-24 md:py-32 bg-[#011018] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00b4d8]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Competition <span className="text-[#00b4d8]">Tracks</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00b4d8] to-[#00f0ff] mx-auto rounded-full mb-4" />
          <p className="text-lg text-[#98c5ea] max-w-2xl mx-auto mb-2">
            Choose your arena and prove your skills across our distinct cybersecurity challenges.
          </p>
          <p className="text-sm text-[#828a8f] max-w-xl mx-auto italic">
            Forward-Focused: Shaping tomorrow's cybersecurity solutions today
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {competitions.map((comp, index) => (
            <CompetitionCard key={comp.title} competition={comp} index={index} isInView={isInView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-[#021a2b] px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Register for Competitions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
