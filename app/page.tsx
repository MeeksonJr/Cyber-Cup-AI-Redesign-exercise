import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Competitions } from "@/components/competitions"
import { Sponsors } from "@/components/sponsors"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Competitions />
      <Sponsors />
      <Footer />
    </main>
  )
}
