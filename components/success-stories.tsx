"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Award, TrendingUp, Users, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stories = [
  {
    name: "Alex Chen",
    role: "2024 CTF Champion",
    track: "CTF",
    quote: "CyberCup.AI transformed my understanding of AI security. The hands-on challenges and real-world scenarios prepared me for my current role at a Fortune 500 company.",
    achievement: "Placed 1st in CTF Track",
    image: "👤",
    company: "Cybersecurity Engineer",
    stats: { score: 2847, rank: 1 },
  },
  {
    name: "Sarah Martinez",
    role: "LLM Security Expert",
    track: "LLM CTF",
    quote: "The LLM CTF challenges were incredibly innovative. I learned techniques that I now use daily in my research on AI safety and security.",
    achievement: "Top 3 in LLM CTF",
    image: "👤",
    company: "AI Security Researcher",
    stats: { score: 2756, rank: 2 },
  },
  {
    name: "Jordan Kim",
    role: "AI-Assisted CTF Winner",
    track: "AI-Assisted CTF",
    quote: "Competing in CyberCup.AI opened doors I never expected. The platform's forward-thinking approach to AI-assisted security is groundbreaking.",
    achievement: "Champion 2024",
    image: "👤",
    company: "Security Consultant",
    stats: { score: 2689, rank: 3 },
  },
]

export function SuccessStories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="success-stories" className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f0f4f8] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-monarch rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hudson/20 border border-monarch/20 mb-4">
            <Star className="w-5 h-5 text-monarch" />
            <span className="text-sm font-semibold text-monarch uppercase tracking-wider">Success Stories</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-monarch mb-4">
            Champions <span className="text-teal">Speak</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-monarch to-teal mx-auto rounded-full mb-6" />
          <p className="text-lg text-silver max-w-2xl mx-auto">
            Hear from past winners and see how CyberCup.AI has shaped their careers
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-[0.625rem] border border-silver/20 p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:border-teal/40">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-hudson/20">
                    <Quote className="w-6 h-6 text-monarch" />
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-monarch text-lg leading-relaxed mb-6 grow italic">
                  "{story.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-silver/10 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-monarch to-ultramarine flex items-center justify-center text-white text-2xl font-bold">
                      {story.image}
                    </div>
                    <div>
                      <div className="font-bold text-monarch text-lg">{story.name}</div>
                      <div className="text-sm text-silver">{story.company}</div>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-hudson/20 border border-monarch/20">
                      <Award className="w-4 h-4 text-monarch" />
                      <span className="text-xs font-semibold text-monarch">{story.achievement}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-teal">#{story.stats.rank}</div>
                      <div className="text-xs text-silver">{story.stats.score} pts</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-monarch to-ultramarine rounded-[0.625rem] p-8 md:p-12 text-center text-white"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-hudson max-w-2xl mx-auto mb-8">
            Join thousands of participants and take your cybersecurity career to the next level
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#competitions">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
                Join Competition
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#about">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

