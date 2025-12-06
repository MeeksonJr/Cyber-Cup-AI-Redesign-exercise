"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Medal, Award, TrendingUp, Crown, Star } from "lucide-react"

const leaderboardData = [
  { rank: 1, name: "Alex Chen", score: 2847, track: "CTF", badge: "Gold", change: "+2" },
  { rank: 2, name: "Sarah Martinez", score: 2756, track: "LLM CTF", badge: "Gold", change: "+1" },
  { rank: 3, name: "Jordan Kim", score: 2689, track: "AI-Assisted CTF", badge: "Silver", change: "-1" },
  { rank: 4, name: "Taylor Brown", score: 2623, track: "MCP Security", badge: "Silver", change: "+3" },
  { rank: 5, name: "Morgan Lee", score: 2587, track: "LLM Backdoor", badge: "Silver", change: "new" },
  { rank: 6, name: "Casey Wilson", score: 2541, track: "CTF", badge: "Bronze", change: "-2" },
  { rank: 7, name: "Riley Davis", score: 2498, track: "AI-Assisted CTF", badge: "Bronze", change: "+1" },
  { rank: 8, name: "Avery Johnson", score: 2456, track: "LLM CTF", badge: "Bronze", change: "-1" },
]

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="w-5 h-5 text-yellow-400" />
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-300" />
  if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />
  return <span className="text-silver font-bold">{rank}</span>
}

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Gold":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
    case "Silver":
      return "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900"
    case "Bronze":
      return "bg-gradient-to-r from-amber-600 to-amber-800 text-white"
    default:
      return "bg-monarch text-white"
  }
}

export function Leaderboard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="leaderboard" className="py-24 md:py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(4, 54, 87) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} 
        />
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
            <Trophy className="w-5 h-5 text-monarch" />
            <span className="text-sm font-semibold text-monarch uppercase tracking-wider">Live Rankings</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-monarch mb-4">
            Top <span className="text-teal">Performers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-monarch to-teal mx-auto rounded-full mb-6" />
          <p className="text-lg text-silver max-w-2xl mx-auto">
            See who's leading the competition and climb the ranks yourself
          </p>
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[0.625rem] border border-silver/20 shadow-lg overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-monarch to-ultramarine px-4 sm:px-6 py-4 grid grid-cols-12 gap-2 sm:gap-4 items-center">
            <div className="col-span-1 text-center">
              <span className="text-white font-semibold text-xs sm:text-sm">Rank</span>
            </div>
            <div className="col-span-5 sm:col-span-4">
              <span className="text-white font-semibold text-xs sm:text-sm">Participant</span>
            </div>
            <div className="col-span-3 hidden sm:block">
              <span className="text-white font-semibold text-sm">Track</span>
            </div>
            <div className="col-span-3 sm:col-span-2 text-right">
              <span className="text-white font-semibold text-xs sm:text-sm">Score</span>
            </div>
            <div className="col-span-3 sm:col-span-2 text-center">
              <span className="text-white font-semibold text-xs sm:text-sm">Badge</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#828A8F]/10">
            {leaderboardData.map((entry, index) => (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="grid grid-cols-12 gap-2 sm:gap-4 items-center px-4 sm:px-6 py-4 hover:bg-[#f0f4f8] transition-colors group"
              >
                {/* Rank */}
                <div className="col-span-1 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    {getRankIcon(entry.rank)}
                  </div>
                </div>

                {/* Participant */}
                <div className="col-span-5 sm:col-span-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-monarch to-ultramarine flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    {entry.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-monarch text-sm sm:text-base truncate">{entry.name}</div>
                    <div className="text-xs text-silver flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 shrink-0" />
                      <span className={entry.change === "new" ? "text-green-600" : entry.change.startsWith("+") ? "text-green-600" : "text-red-500"}>
                        {entry.change}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Track */}
                <div className="col-span-3 hidden sm:block">
                  <span className="text-sm text-monarch font-medium">{entry.track}</span>
                </div>

                {/* Score */}
                <div className="col-span-3 sm:col-span-2 text-right">
                  <div className="font-bold text-monarch text-base sm:text-lg">{entry.score.toLocaleString()}</div>
                  <div className="text-xs text-silver hidden sm:block">points</div>
                </div>

                {/* Badge */}
                <div className="col-span-3 sm:col-span-2 flex items-center justify-center">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(entry.badge)}`}>
                    {entry.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="bg-[#f0f4f8] px-6 py-4 text-center border-t border-silver/10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-monarch font-semibold hover:text-teal transition-colors flex items-center gap-2 mx-auto"
            >
              View Full Leaderboard
              <TrendingUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { icon: Trophy, value: "8,500+", label: "Total Participants" },
            { icon: Star, value: "1,200+", label: "Active This Week" },
            { icon: Award, value: "45", label: "Challenges Completed" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-[0.625rem] border border-silver/20 p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-hudson/20 mb-4">
                <stat.icon className="w-6 h-6 text-monarch" />
              </div>
              <div className="text-3xl font-bold text-monarch mb-2">{stat.value}</div>
              <div className="text-sm text-silver">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

