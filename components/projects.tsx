"use client"

import { useEffect, useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Scheme Bridge",
    description: "A real-time chat application powered by AI to simplify your scheme process",
    tags: ["React", "Next.js", "AI", "WebSocket"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Rural Medics",
    description: "An AI-driven mobile app to bring healthcare to every corner of the nation",
    tags: ["React Native", "AI", "Healthcare", "Mobile"],
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "LEMOS",
    description:
      "Landfill Emission Monitoring System - an eco-friendly device that monitors landfill emissions simultaneously in your surroundings",
    tags: ["IoT", "Sensors", "Python", "Data Analysis"],
    link: "#",
    featured: true,
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          Featured Projects
        </h2>
        <p
          className={`text-foreground/70 mb-12 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          A selection of my recent work and experiments
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-card border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.featured && <span className="text-xs font-semibold text-accent">Featured</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
