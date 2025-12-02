"use client"

import { useEffect, useState } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className={`text-center ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-foreground/70 mb-12 text-lg">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:r.sriramrenu@gmail.com"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105 font-medium text-center"
            >
              Send me an Email
            </a>
            <a
              href="tel:+916379390238"
              className="px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all font-medium"
            >
              Make a Call
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-8 border-t border-border flex-wrap">
            <a
              href="https://linkedin.com/in/sriram-r-59024b328"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="http://github.com/sriramrenu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://huggingface.co/Sriramrenu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Hugging Face
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
