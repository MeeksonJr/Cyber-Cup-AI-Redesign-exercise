"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Shield, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#021a2b]"
    >
      {/* Animated cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#043657]/30 rounded-full blur-[100px]"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00b4d8] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#043657]/50 border border-[#00b4d8]/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b4d8]"></span>
            </span>
            <span className="text-[#98c5ea] text-sm font-medium">2025 Competition Season Now Open</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block text-white">
              CYBER
              <span className="text-[#00b4d8]">CUP</span>
              <span className="text-[#00f0ff] glow-text">.AI</span>
            </span>
          </motion.h1>

          {/* Updated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#98c5ea] font-medium mb-4"
          >
            Cyber AI Competition Unified Platform (CUP)
          </motion.p>

          {/* Updated description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-[#828a8f] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Empowering the next generation of CyberAI professionals through innovative competitions and hands-on
            learning experiences.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: Shield, value: "5", label: "Competition Tracks" },
              { icon: Cpu, value: "AI", label: "Powered Challenges" },
              { icon: Zap, value: "ODU", label: "Hosted Platform" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#043657]/50 border border-[#00b4d8]/20">
                  <stat.icon className="w-5 h-5 text-[#00b4d8]" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-[#828a8f]">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#competitions">
              <Button
                size="lg"
                className="bg-[#00b4d8] hover:bg-[#00d4ff] text-[#021a2b] px-8 py-6 text-lg font-bold rounded-lg shadow-lg shadow-[#00b4d8]/25 hover:shadow-[#00b4d8]/50 transition-all group"
              >
                Explore Competitions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#about">
              <Button
                size="lg"
                variant="outline"
                className="border-[#00b4d8]/50 text-[#98c5ea] hover:bg-[#043657]/50 hover:text-white px-8 py-6 text-lg font-semibold rounded-lg bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Hosted by badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex items-center justify-center gap-4"
          >
            <span className="text-sm text-[#828a8f] uppercase tracking-wider">Hosted by</span>
            <img
              src="https://cybercup.ai/_astro/odu-cs-logo.BdiMY8SH_1eMPNU.webp"
              alt="ODU School of Cybersecurity"
              className="h-12 object-contain brightness-0 invert opacity-70"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#021a2b] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border-2 border-[#00b4d8]/50 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-2 bg-[#00b4d8] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
