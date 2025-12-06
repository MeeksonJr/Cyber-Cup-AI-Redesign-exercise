"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Users, Award, Target } from "lucide-react"

const competitions = [
  { name: "CTF", knowledge: "Familiarity with traditional CTFs", level: "Intermediate" },
  { name: "LLM CTF", knowledge: "No technical background", level: "Beginner" },
  { name: "AI-Assisted CTF", knowledge: "Familiarity with traditional CTFs and use of LLM agents", level: "Advanced" },
  { name: "LLM Backdoor", knowledge: "Good understanding of LLMs", level: "Advanced" },
  { name: "MCP Security", knowledge: "Good understanding of LLMs and MCP servers", level: "Expert" },
]

const features = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Hands-on experience with cutting-edge AI security challenges",
  },
  {
    icon: Users,
    title: "Compete",
    description: "Test your skills against participants worldwide",
  },
  {
    icon: Award,
    title: "Achieve",
    description: "Earn recognition and advance your cybersecurity career",
  },
  {
    icon: Target,
    title: "Innovate",
    description: "Push the boundaries of AI and security research",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 bg-[#021a2b] relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00b4d8]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-[#00b4d8]">CyberCup.AI</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00b4d8] to-[#00f0ff] mx-auto rounded-full" />
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glow-card rounded-xl bg-[#043657]/40 backdrop-blur-sm border border-[#00b4d8]/10 p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#00b4d8]/10 mb-4">
                <feature.icon className="w-6 h-6 text-[#00b4d8]" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-[#828a8f] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content - Updated to match provided content exactly */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glow-card rounded-2xl bg-[#043657]/30 backdrop-blur-sm border border-[#00b4d8]/10 p-8">
              <p className="text-lg text-white leading-relaxed mb-6">
                <span className="font-bold text-[#00b4d8]">Cyber AI Competition Unified Platform</span> (CyberCup.AI) is
                an innovative platform designed and developed at the School of Cybersecurity, Old Dominion University
                (ODU). CyberCup serves as a unified hub for hosting a diverse range of competitions at the intersection
                of Cybersecurity and Artificial Intelligence (AI).
              </p>
              <p className="text-[#98c5ea] leading-relaxed">
                In this year's competitions, we have challenges related to security of Large language models (LLM),
                Model Context Protocol (MCP) and use of AI in Capture the Flag (CTF) competitions. Participants can
                engage in a variety of challenges including LLM CTF, AI-Assisted CTF, LLM Backdoor attacks, and MCP
                security.
              </p>
            </div>
          </motion.div>

          {/* Competition Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glow-card rounded-2xl bg-[#043657]/30 backdrop-blur-sm border border-[#00b4d8]/10 overflow-hidden"
          >
            <div className="p-6 border-b border-[#00b4d8]/20">
              <h3 className="font-display font-bold text-white text-xl">Competition Tracks</h3>
            </div>
            <div className="divide-y divide-[#00b4d8]/10">
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-4 hover:bg-[#00b4d8]/5 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">{comp.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        comp.level === "Beginner"
                          ? "bg-green-500/20 text-green-400"
                          : comp.level === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : comp.level === "Advanced"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {comp.level}
                    </span>
                  </div>
                  <p className="text-sm text-[#828a8f]">{comp.knowledge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
