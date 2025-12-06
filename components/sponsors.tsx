"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail } from "lucide-react"

const sponsors = [
  {
    name: "School of Cybersecurity",
    logo: "https://cybercup.ai/_astro/odu-cs-logo.BdiMY8SH_1eMPNU.webp",
    subtitle: "Old Dominion University",
    tier: "host",
  },
  {
    name: "Commonwealth Cyber Initiative",
    logo: "https://cybercup.ai/_astro/cci-logo.BEczLwlf_Z1eaaLC.webp",
    subtitle: "Coastal Virginia",
    tier: "platinum",
  },
  {
    name: "National Security Agency",
    logo: "https://cybercup.ai/_astro/nsa-logo.D-BjltOn_dkdcQ.webp",
    subtitle: "",
    tier: "platinum",
  },
  {
    name: "National Science Foundation",
    logo: "https://cybercup.ai/_astro/nsf-logo.8MAP1eOm_1SttDN.webp",
    subtitle: "",
    tier: "platinum",
  },
]

export function Sponsors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sponsors" className="py-24 md:py-32 bg-[#021a2b] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
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
            Powered <span className="text-[#00b4d8]">By</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00b4d8] to-[#00f0ff] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#98c5ea] max-w-2xl mx-auto">
            The generous support of our sponsors makes CyberCup.AI possible
          </p>
        </motion.div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glow-card rounded-2xl bg-[#043657]/30 backdrop-blur-sm border border-[#00b4d8]/10 p-6 md:p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-4 relative">
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="font-semibold text-white text-sm md:text-base mb-1">{sponsor.name}</h3>
              {sponsor.subtitle && <p className="text-[#828a8f] text-xs md:text-sm">{sponsor.subtitle}</p>}
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          id="contact"
          className="glow-card rounded-2xl bg-gradient-to-br from-[#043657]/50 to-[#021a2b]/50 backdrop-blur-sm border border-[#00b4d8]/20 p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Become a Sponsor</h3>
          <p className="text-[#98c5ea] max-w-xl mx-auto mb-8">
            Interested in supporting CyberCup.AI and getting involved in CyberAI education? We'd love to hear from you.
          </p>
          <motion.a
            href="mailto:cybercup@odu.edu"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-[#00b4d8] hover:bg-[#00d4ff] text-[#021a2b] px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-[#00b4d8]/25"
          >
            <span>Contact Prof. Daniel Takabi</span>
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
