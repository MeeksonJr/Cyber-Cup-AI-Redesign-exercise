"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Terminal } from "lucide-react"

const footerLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Competition Rules", href: "#" },
]

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Competitions", href: "#competitions" },
  { name: "Sponsors", href: "#sponsors" },
]

export function Footer() {
  return (
    <footer className="bg-[#011018] relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00b4d8]/50 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00b4d8] to-[#043657] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl">
                <span className="text-white">CYBER</span>
                <span className="text-[#00b4d8]">CUP</span>
                <span className="text-[#00f0ff]">.AI</span>
              </span>
            </Link>
            <p className="text-[#828a8f] max-w-md leading-relaxed mb-6">
              Empowering the next generation of CyberAI professionals through innovative competitions and hands-on
              learning experiences.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.instagram.com/oducyber/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#043657]/50 border border-[#00b4d8]/20 flex items-center justify-center text-[#98c5ea] hover:text-[#00b4d8] hover:border-[#00b4d8]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:ring-offset-2"
                aria-label="Follow ODU Cybersecurity on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/odu-school-of-cybersecurity"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#043657]/50 border border-[#00b4d8]/20 flex items-center justify-center text-[#98c5ea] hover:text-[#00b4d8] hover:border-[#00b4d8]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:ring-offset-2"
                aria-label="Follow ODU School of Cybersecurity on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#828a8f] hover:text-[#00b4d8] transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:cybercup@odu.edu"
                  className="text-[#828a8f] hover:text-[#00b4d8] transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  cybercup@odu.edu
                </a>
              </li>
              <li className="text-[#828a8f] inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Norfolk, Virginia
              </li>
            </ul>
            <div className="mt-6">
              <img
                src="https://cybercup.ai/_astro/odu-cs-logo.BdiMY8SH_1eMPNU.webp"
                alt="Old Dominion University School of Cybersecurity logo"
                className="h-12 object-contain opacity-60"
                loading="lazy"
                width="48"
                height="48"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[#00b4d8]/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#828a8f] text-sm">© {new Date().getFullYear()} CyberCup.AI. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#828a8f] hover:text-[#00b4d8] text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
