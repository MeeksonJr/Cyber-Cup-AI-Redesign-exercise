import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Competitions } from "@/components/competitions"
import { Leaderboard } from "@/components/leaderboard"
import { SuccessStories } from "@/components/success-stories"
import { Resources } from "@/components/resources"
import { Sponsors } from "@/components/sponsors"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#043657] focus:text-white focus:rounded-md focus:ring-2 focus:ring-[#00b4d8] focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Competitions />
        <Leaderboard />
        <SuccessStories />
        <Resources />
        <Sponsors />
        <Footer />
      </main>
    </>
  )
}
