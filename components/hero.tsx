"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Shield, Cpu, Zap, TrendingUp, Users, Award, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Smooth mouse tracking
  const springConfig = { damping: 25, stiffness: 200 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const { clientX, clientY } = e
      const { left, top, width, height } = rect
      const x = (clientX - left - width / 2) / width
      const y = (clientY - top - height / 2) / height
      mouseX.set(x)
      mouseY.set(y)
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Animated counter
  const AnimatedCounter = ({ value, label, icon: Icon }: { value: string; label: string; icon: any }) => {
    const [count, setCount] = useState(0)
    const numValue = parseInt(value.replace(/\D/g, "")) || 0

    useEffect(() => {
      const duration = 2000
      const steps = 60
      const increment = numValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numValue) {
          setCount(numValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [numValue])

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group relative"
      >
        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-hudson/20 hover:border-teal/40 transition-all duration-300 hover:bg-white/10">
          <div className="p-3 rounded-lg bg-gradient-to-br from-monarch to-ultramarine border border-teal/30">
            <Icon className="w-5 h-5 text-hudson" />
          </div>
          <div className="text-left">
            <div className="text-2xl md:text-3xl font-bold text-white font-display">
              {value.includes("+") ? `${count.toLocaleString()}+` : value}
            </div>
            <div className="text-xs md:text-sm text-silver">{label}</div>
          </div>
        </div>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal/0 via-teal/10 to-teal/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
      </motion.div>
    )
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-monarch via-deep to-[#011018]"
      onMouseMove={(e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width)
        mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height)
      }}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [-100, 100]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [-100, 100]),
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-teal/20 via-hudson/10 to-monarch/30 rounded-full blur-[120px]"
        />
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [100, -100]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [100, -100]),
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-ultramarine/20 via-teal/10 to-hudson/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Animated cyber grid with parallax */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
        }}
        className="absolute inset-0 cyber-grid opacity-30"
      />

      {/* Floating 3D particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `rgba(${Math.random() > 0.5 ? "0, 180, 216" : "152, 197, 234"}, ${0.4 + Math.random() * 0.4})`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content with 3D tilt effect */}
      <motion.div
        style={{
          y,
          opacity,
          scale,
          rotateX: useTransform(mouseYSpring, [-0.3, 0.3], [5, -5]),
          rotateY: useTransform(mouseXSpring, [-0.3, 0.3], [-5, 5]),
        }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="text-center">
          {/* Live badge with pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-monarch/80 to-ultramarine/80 backdrop-blur-md border border-teal/40 mb-8 shadow-lg shadow-teal/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal"></span>
            </span>
            <span className="text-hudson text-sm font-semibold">2025 Competition Season Now Open</span>
            <Sparkles className="w-4 h-4 text-teal" />
          </motion.div>

          {/* Main Title with gradient text and glow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-6 leading-none px-4"
          >
            <span className="block">
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-hudson to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                CYBER
              </motion.span>
              <motion.span
                className="inline-block bg-gradient-to-r from-teal via-cyber to-teal bg-clip-text text-transparent ml-2"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(0, 180, 216, 0.5))",
                    "drop-shadow(0 0 20px rgba(0, 240, 255, 0.8))",
                    "drop-shadow(0 0 10px rgba(0, 180, 216, 0.5))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                CUP
              </motion.span>
              <motion.span
                className="inline-block text-cyber ml-2"
                animate={{
                  filter: [
                    "drop-shadow(0 0 5px rgba(0, 240, 255, 0.5))",
                    "drop-shadow(0 0 15px rgba(0, 240, 255, 1))",
                    "drop-shadow(0 0 5px rgba(0, 240, 255, 0.5))",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                .AI
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-hudson font-semibold mb-3 px-4"
          >
            Cyber AI Competition Unified Platform
          </motion.p>

          {/* Forward-Focused badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-monarch/40 to-ultramarine/40 backdrop-blur-md border border-hudson/40 text-hudson text-sm font-bold uppercase tracking-wider"
              whileHover={{ scale: 1.05, borderColor: "#00b4d8" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
              Forward-Focused
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-silver max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Empowering the next generation of CyberAI professionals through innovative competitions and hands-on
            learning experiences. <span className="text-hudson font-semibold">Shaping tomorrow's solutions today.</span>
          </motion.p>

          {/* Animated Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
          >
            <AnimatedCounter value="3400+" label="Active Participants" icon={Users} />
            <AnimatedCounter value="5" label="Competition Tracks" icon={Shield} />
            <AnimatedCounter value="100+" label="Challenges" icon={Award} />
          </motion.div>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="#competitions" aria-label="Navigate to competitions section">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="px-10 py-7 text-lg font-bold shadow-2xl shadow-monarch/50 hover:shadow-teal/30 transition-all group relative overflow-hidden focus:ring-2 focus:ring-teal focus:ring-offset-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Competitions
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-ultramarine to-teal opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>
            </Link>
            <Link href="#about" aria-label="Navigate to about section">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-10 py-7 text-lg font-semibold border-2 focus:ring-2 focus:ring-teal focus:ring-offset-2"
                >
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Enhanced ODU Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm text-silver uppercase tracking-wider font-medium">Hosted by</span>
              <motion.div
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-monarch/40 to-ultramarine/40 backdrop-blur-md border border-hudson/30 shadow-lg"
                whileHover={{ scale: 1.05, borderColor: "#00b4d8" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img
                  src="https://cybercup.ai/_astro/odu-cs-logo.BdiMY8SH_1eMPNU.webp"
                  alt="Old Dominion University School of Cybersecurity logo"
                  className="h-12 object-contain brightness-0 invert opacity-90"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <span className="text-sm text-hudson font-semibold">ODU School of Cybersecurity</span>
              </motion.div>
            </div>
            <p className="text-xs text-silver max-w-md text-center leading-relaxed">
              Old Dominion University - Leading innovation in cybersecurity education and research
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#011018] via-deep/50 to-transparent pointer-events-none" />

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-7 h-12 rounded-full border-2 border-teal/60 flex justify-center pt-3 backdrop-blur-sm bg-monarch/20"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-3 bg-teal rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
