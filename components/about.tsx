"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className={`flex-1 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm Sri, a dynamic systems thinker and technical architect with a strong foundation in software, AI, and
                data science. My journey blends academic rigor with hands-on innovation, where I thrive at the
                intersection of technology, education, and community empowerment.
              </p>
              <p>
                💻 <span className="font-semibold text-foreground">Technical Strengths:</span> Full Stack Java Developer
                with expertise in backend, frontend, and modular prototyping.
              </p>
              <p>
                📊 <span className="font-semibold text-foreground">Analytical Edge:</span> Skilled in financial
                modeling, risk analysis, and translating complex systems into clear, actionable strategies.
              </p>
              <p>
                🎤 <span className="font-semibold text-foreground">Facilitation & Leadership:</span> Energetic
                communicator and youth facilitator, known for launching interactive workshops and guiding peers through
                hands-on learning.
              </p>
              <p>
                🎨 <span className="font-semibold text-foreground">Creative Communicator:</span> Adept at reformatting
                dense information into accessible, visually clear formats for diverse audiences.
              </p>
              <p>
                🚀 <span className="font-semibold text-foreground">Vision:</span> Committed to leveraging AI and
                technology for inclusive, scalable solutions that make a lasting impact.
              </p>
              <p>
                At my core, I'm driven by curiosity, clarity, and collaboration — always seeking to build systems that
                are not only technically sound but also socially meaningful.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div
              className={`grid grid-cols-2 gap-4 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-foreground/70">Projects Built</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-foreground/70">Passion & Dedication</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-foreground/70">Years Learning</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-foreground/70">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
