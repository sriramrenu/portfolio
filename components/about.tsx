"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "2026 - Present",
    title: "Backend Developer",
    description: "Working as a Backend Developer at Sairam Techno Incubator, Chennai.",
    category: "Professional",
  },
  {
    year: "2025",
    title: "Student Innovator",
    description: "Successfully launched 'Scheme Bridge' and 'Rural Medics', leveraging AI to solve local healthcare and bureaucratic challenges.",
    category: "Projects",
  },
  {
    year: "2024",
    title: "Learner",
    description: "Started my 1st Diploma in Master in Software and Data Science.",
    category: "Education",
  },
  {
    year: "2024",
    title: "Challenge maker",
    description: "Intensive focus on Java development, Data Science, and Financial Risk Modeling.",
    category: "Education",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-foreground/80 text-justify leading-relaxed text-lg">
              <p>
                I am Sriram, a systematic thinker and technical architect with a strong foundation in software development,
                Artificial Intelligence, and Data Science. My career is defined by a blend of academic excellence and
                practical innovation, focusing on the intersection of scalable technology and community impact.
              </p>
              <p>
                <span className="font-semibold text-foreground">Technical Expertise:</span> As a Full Stack Java Developer,
                I specialize in building robust backend architectures, dynamic frontends, and modular system prototypes
                that prioritize efficiency and maintainability.
              </p>
              <p>
                <span className="font-semibold text-foreground">Leadership & Strategy:</span> A dedicated communicator
                and facilitator, I have a proven track record of leading technical workshops and guiding teams
                through complex problem-solving and hands-on learning initiatives.
              </p>
              <p>
                Driven by curiosity and a commitment to clarity, I strive to build systems that are both technically
                sophisticated and socially relevant.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {[
                { label: "Projects Built", value: "10+", color: "primary" },
                { label: "Passion & Dedication", value: "100%", color: "accent" },
                { label: "Years Learning", value: "2+", color: "primary" },
                { label: "Technologies", value: "20+", color: "accent" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-card/50 backdrop-blur-xl border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className={`text-3xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Experience Timeline
            </h3>

            <div className="relative border-l-2 border-border ml-4 space-y-12">
              {milestones.map((item, index) => (
                <motion.div
                  key={`${item.year}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300" />

                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.year}</span>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <span className="text-xs font-medium text-accent italic mb-2">{item.category}</span>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
