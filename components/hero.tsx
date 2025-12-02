"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const words = ["Developer", "Builder", "Innovator", "Creator"]
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary/25 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className={`max-w-5xl mx-auto px-6 relative z-10 ${mounted ? "animate-fadeInUp" : "opacity-0"}`}>
        {/* Eyebrow text */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50"></div>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Full Stack • JAVA • AI • Data Science
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50"></div>
        </div>

        {/* Main headline with animated word */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-center">
          <span className="block text-foreground">I'm Sriram</span>
          <span className="block h-24 md:h-32 flex items-center justify-center">
            <span className="inline-block min-w-max">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent animate-fadeIn key={currentWord}">
                {words[currentWord]}
              </span>
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
          Bridging technology, education, and innovation. A systems thinker designing solutions that{" "}
          <span className="text-accent font-semibold">scale meaningfully</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Link
            href="#projects"
            className="group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold text-lg relative overflow-hidden transform hover:scale-105 transition-all"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 font-bold text-lg transition-all transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-accent mb-2">10+</div>
            <p className="text-sm text-foreground/60 uppercase tracking-wide">Projects Built</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-accent mb-2">20+</div>
            <p className="text-sm text-foreground/60 uppercase tracking-wide">Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-accent mb-2">2+</div>
            <p className="text-sm text-foreground/60 uppercase tracking-wide">Years Learning</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
