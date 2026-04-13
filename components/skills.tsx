"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Gradio", "Streamlit"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Authentication", "Java", "Express.js", "Spring Boot"],
  },
  {
    category: "Tools & Platforms",
    skills: ["PyCharm", "Eclipse", "MySQL", "PowerBI", "Git", "GitHub", "Vercel", "n8n"],
  },
  {
    category: "Design",
    skills: ["UI Design", "Responsive Design", "Animations", "Figma", "UX Principles"],
  },
]

const radarData = [
  { subject: "Frontend", A: 90, fullMark: 100 },
  { subject: "Backend", A: 85, fullMark: 100 },
  { subject: "AI/ML", A: 80, fullMark: 100 },
  { subject: "Data Science", A: 75, fullMark: 100 },
  { subject: "Systems", A: 88, fullMark: 100 },
  { subject: "Collaboration", A: 95, fullMark: 100 },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  const [radius, setRadius] = useState("80%")
  const [fontSize, setFontSize] = useState(13)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius("55%")
        setFontSize(10)
      } else if (window.innerWidth < 1024) {
        setRadius("65%")
        setFontSize(11)
      } else {
        setRadius("80%")
        setFontSize(13)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Radar Chart side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-4 sm:p-8 h-[400px] sm:h-[500px] flex items-center justify-center relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart 
                  cx="50%" 
                  cy="50%" 
                  outerRadius={radius} 
                  data={radarData}
                  margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                >
                  <PolarGrid stroke="var(--border)" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "var(--foreground)", fontSize: fontSize, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Sriram"
                    dataKey="A"
                    stroke="var(--primary)"
                    fill="var(--primary)"
                    fillOpacity={0.4}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      color: "var(--foreground)",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Categories side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((item) => (
              <motion.div
                key={item.category}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
              >
                <h3 className="text-lg font-bold mb-4 text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                  {item.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background border border-border rounded-lg text-foreground/70 hover:border-primary hover:text-primary transition-all text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
