"use client"

import { useRef } from "react"
import Header from "@/components/header"
import Overview from "@/components/sections/overview"
import Activities from "@/components/sections/activities"
import Location from "@/components/sections/location"
import Contact from "@/components/sections/contact"
import ScrollGear from "@/components/ScrollGear"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900 text-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-16 space-y-32 ">
        <section id="overview" className="pt-20">
          <Overview />
        </section>

        <section id="activities" className="pt-20">
          <Activities />
        </section>

        <section id="location" className="pt-20">
          <Location />
        </section>

        <section id="contact" className="pt-20 pb-32">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-gray-800 py-6 bg-gray-900">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} C-Tech. All rights reserved.</p>
        </div>
        <ScrollGear />
      </footer>
    </div>
  )
}
