"use client"

import { useEffect, useState } from "react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Authentication", "Java"],
  },
  {
    category: "Tools & Platforms",
    skills: ["PyCharm", "Eclipse", "MySQL", "PowerBI", "Git", "GitHub", "Vercel"],
  },
  {
    category: "Design",
    skills: ["UI Design", "Responsive Design", "Animations", "Figma", "UX Principles"],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((item, index) => (
            <div
              key={item.category}
              className={`bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{item.category}</h3>
              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-foreground/80 hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
