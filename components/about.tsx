"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Users, Award, Target, TrendingUp, Zap } from "lucide-react"

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
    <section id="about" className="py-24 md:py-32 bg-deep relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-teal">CyberCup.AI</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal to-cyber mx-auto rounded-full" />
        </motion.div>

        {/* Feature cards with progress indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {features.map((feature, index) => {
            // Simulated progress values for gamification
            const progressValues = [85, 72, 68, 90]
            const progress = progressValues[index] || 75
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glow-card rounded-xl bg-monarch/40 backdrop-blur-sm border border-teal/10 p-6 text-center relative overflow-hidden"
              >
                {/* Progress badge */}
                <div className="absolute top-2 right-2">
                  <div className="w-8 h-8 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center">
                    <span className="text-xs font-bold text-teal">{progress}%</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal/10 mb-4">
                  <feature.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-silver text-sm leading-relaxed mb-3">{feature.description}</p>
                
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-monarch/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progress}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-teal to-hudson rounded-full"
                  />
                </div>
              </motion.div>
            )
          })}
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
            <div className="glow-card rounded-2xl bg-monarch/30 backdrop-blur-sm border border-teal/10 p-8">
              {/* Forward-Focused badge */}
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-teal" />
                <span className="text-sm font-semibold text-hudson uppercase tracking-wider">Forward-Focused</span>
              </div>
              
              <p className="text-lg text-white leading-relaxed mb-6">
                <span className="font-bold text-teal">Cyber AI Competition Unified Platform</span> (CyberCup.AI) is
                an innovative platform designed and developed at the School of Cybersecurity, Old Dominion University
                (ODU). CyberCup serves as a unified hub for hosting a diverse range of competitions at the intersection
                of Cybersecurity and Artificial Intelligence (AI).
              </p>
              <p className="text-hudson leading-relaxed mb-4">
                In this year's competitions, we have challenges related to security of Large language models (LLM),
                Model Context Protocol (MCP) and use of AI in Capture the Flag (CTF) competitions. Participants can
                engage in a variety of challenges including LLM CTF, AI-Assisted CTF, LLM Backdoor attacks, and MCP
                security.
              </p>
              
              {/* Achievement stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-teal/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal mb-1">3,400+</div>
                  <div className="text-xs text-silver">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal mb-1">5</div>
                  <div className="text-xs text-silver">Tracks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal mb-1">100+</div>
                  <div className="text-xs text-silver">Challenges</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Competition Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glow-card rounded-2xl bg-monarch/30 backdrop-blur-sm border border-teal/10 overflow-hidden"
          >
            <div className="p-6 border-b border-teal/20">
              <h3 className="font-display font-bold text-white text-xl">Competition Tracks</h3>
            </div>
            <div className="divide-y divide-teal/10">
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-4 hover:bg-teal/5 transition-colors"
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
                  <p className="text-sm text-silver">{comp.knowledge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
