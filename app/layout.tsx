import type React from "react"
import type { Metadata, Viewport } from "next"
import { Sora, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "CyberCup.AI - Cyber AI Competition Unified Platform",
  description:
    "CyberCup.AI is an innovative platform designed at Old Dominion University's School of Cybersecurity. Compete in LLM CTF, AI-Assisted CTF, LLM Backdoor attacks, and MCP security challenges.",
  keywords: [
    "cybersecurity",
    "AI",
    "CTF",
    "capture the flag",
    "competition",
    "LLM",
    "large language models",
    "ODU",
    "Old Dominion University",
    "MCP",
    "Model Context Protocol",
    "AI security",
    "CyberAI",
  ],
  authors: [{ name: "Old Dominion University School of Cybersecurity" }],
  creator: "Old Dominion University School of Cybersecurity",
  publisher: "CyberCup.AI",
  openGraph: {
    title: "CyberCup.AI - Cyber AI Competition Unified Platform",
    description:
      "Empowering the next generation of CyberAI professionals through innovative competitions and hands-on learning experiences.",
    url: "https://cybercup.ai",
    siteName: "CyberCup.AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberCup.AI - Cyber AI Competition Unified Platform",
    description:
      "Empowering the next generation of CyberAI professionals through innovative competitions and hands-on learning experiences.",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export const viewport: Viewport = {
  themeColor: "#043657",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
