"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const words = ["Developer", "Builder", "Innovator", "Creator"]
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-20 w-80 h-80 bg-primary/25 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Eyebrow text */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50"></div>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Full Stack • JAVA • AI • Data Science
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50"></div>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          <span className="block text-foreground">I'm Sriram</span>
          <span className="block h-24 md:h-32 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Bridging technology, education, and innovation. A systems thinker designing solutions that{" "}
          <span className="text-accent font-semibold">scale meaningfully</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-20"
        >
          <Link
            href="#projects"
            className="group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold text-lg relative overflow-hidden transform hover:scale-105 transition-all text-center"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <a
            href="/Sriram_Resume.pdf"
            download
            className="px-8 py-4 rounded-lg border-2 border-primary/50 text-primary hover:bg-primary/10 font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50"
        >
          {[
            { label: "Projects Built", value: "10+" },
            { label: "Technologies", value: "20+" },
            { label: "Years Learning", value: "2+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">{stat.value}</div>
              <p className="text-sm text-foreground/60 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
