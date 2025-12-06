"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, FileText, Video, Code, ExternalLink, Download, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const resources = [
  {
    category: "Getting Started",
    icon: BookOpen,
    items: [
      { title: "Competition Guide", description: "Complete guide to participating in CyberCup.AI", type: "PDF", link: "#" },
      { title: "Platform Tutorial", description: "Learn how to navigate and use the platform", type: "Video", link: "#" },
      { title: "Rules & Regulations", description: "Official competition rules and guidelines", type: "PDF", link: "#" },
    ],
  },
  {
    category: "Learning Materials",
    icon: FileText,
    items: [
      { title: "LLM Security Basics", description: "Introduction to large language model security", type: "Article", link: "#" },
      { title: "CTF Strategies", description: "Tips and techniques for Capture the Flag", type: "Guide", link: "#" },
      { title: "AI-Assisted Security", description: "Using AI tools in cybersecurity challenges", type: "Tutorial", link: "#" },
    ],
  },
  {
    category: "Code & Tools",
    icon: Code,
    items: [
      { title: "Starter Templates", description: "Code templates for common challenge types", type: "Code", link: "#" },
      { title: "API Documentation", description: "Complete API reference for developers", type: "Docs", link: "#" },
      { title: "Tool Collection", description: "Curated list of useful security tools", type: "Resource", link: "#" },
    ],
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Video":
      return <PlayCircle className="w-4 h-4" />
    case "PDF":
      return <FileText className="w-4 h-4" />
    case "Code":
      return <Code className="w-4 h-4" />
    default:
      return <ExternalLink className="w-4 h-4" />
  }
}

export function Resources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="resources" className="py-24 md:py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #043657 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#98C5EA]/20 border border-[#043657]/20 mb-4">
            <BookOpen className="w-5 h-5 text-[#043657]" />
            <span className="text-sm font-semibold text-[#043657] uppercase tracking-wider">Resources</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#043657] mb-4">
            Learning <span className="text-[#00b4d8]">Resources</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#043657] to-[#00b4d8] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#828a8f] max-w-2xl mx-auto">
            Everything you need to succeed in CyberCup.AI competitions
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, categoryIndex) => (
            <motion.div
              key={resource.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-white rounded-[0.625rem] border border-[#828A8F]/20 p-6 hover:shadow-lg transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#98C5EA]/20 flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-[#043657]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#043657]">{resource.category}</h3>
              </div>

              {/* Resource Items */}
              <div className="space-y-4">
                {resource.items.map((item, itemIndex) => (
                  <motion.a
                    key={itemIndex}
                    href={item.link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                    className="block p-4 rounded-lg border border-[#828A8F]/10 hover:border-[#00b4d8]/40 hover:bg-[#f0f4f8] transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold text-[#043657] group-hover:text-[#00b4d8] transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[#828a8f] group-hover:text-[#00b4d8] transition-colors">
                        {getTypeIcon(item.type)}
                        <span className="text-xs font-medium">{item.type}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#828a8f] leading-relaxed">{item.description}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-[#828a8f] mb-6">Looking for more resources?</p>
          <Button variant="outline" className="px-8 py-6 text-lg font-semibold">
            <Download className="mr-2 w-5 h-5" />
            Download Resource Pack
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

