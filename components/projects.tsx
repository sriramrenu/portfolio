"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Info } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  github: string
  demo: string
  image: string
  features: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Scheme Bridge",
    description: "AI-powered chat application simplifying complex bureaucratic scheme processes.",
    longDescription: "Scheme Bridge leverages Large Language Models to interpret complex government scheme documents and provide users with clear, actionable summaries and real-time assistance through a conversational interface.",
    tags: ["React", "Next.js", "AI", "WebSocket"],
    github: "https://github.com/sriramrenu",
    demo: "#",
    image: "/scheme_bridge.png",
    features: ["Real-time AI Chat", "Document Summarization", "Multi-language support", "Secure user sessions"],
  },
  {
    id: 2,
    title: "Rural Medics",
    description: "An AI-driven mobile platform bringing advanced healthcare diagnostics to rural nations.",
    longDescription: "Rural Medics provides remote diagnostic capabilities using AI image recognition and symptoms tracking, aimed at bridging the healthcare gap in underserved communities.",
    tags: ["React Native", "AI", "Healthcare", "Mobile"],
    github: "https://github.com/sriramrenu",
    demo: "#",
    image: "/rural_medics.png",
    features: ["AI Diagnostic Suite", "Symptom Tracking", "Low-bandwidth optimization", "Emergency SOS"],
  },
  {
    id: 3,
    title: "LEMOS",
    description: "Landfill Emission Monitoring System - IoT device for environmental health tracking.",
    longDescription: "LEMOS is an end-to-end IoT solution that monitors landfill gases in real-time using hardware sensors and visualizes the data through a professional analytics dashboard.",
    tags: ["IoT", "Sensors", "Python", "Data Analysis"],
    github: "https://github.com/sriramrenu",
    demo: "#",
    image: "/lemos.png",
    features: ["Real-time Gas Sensing", "Cloud Data Logging", "Visual Analytics Dashboard", "Alert System"],
  },
  {
    id: 4,
    title: "DFS",
    description: "DFS - Driver Fatigue Detection System. An AI-powered system that detects driver fatigue and alerts the driver to prevent accidents.",
    longDescription: "Driver Fatigue Detection System is an end-to-end IoT solution that monitors driver fatigue using hardware sensors and visualizes the data through a professional analytics dashboard.",
    tags: ["IoT", "Sensors", "OpenCV", "Data Analysis"],
    github: "https://github.com/sriramrenu",
    demo: "#",
    image: "/ driver_fatigue.png",
    features: ["Real-time Gas Sensing", "Cloud Data Logging", "Visual Analytics Dashboard", "Alert System"],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 relative bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A selection of my most impactful works bridging technology and social utility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all flex flex-col h-full"
            >
              {/* Project Image Placeholder / Image */}
              <div className="relative h-48 w-full bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-foreground/20 font-bold uppercase tracking-tighter text-4xl select-none">
                    {project.title}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" className="p-2 rounded-full hover:bg-primary/10 text-foreground/40 hover:text-primary transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/70 mb-6 text-sm flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-primary/5 text-primary border border-primary/20 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Info className="w-4 h-4" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border-border">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold flex items-center gap-3">
                        {project.title}
                        <span className="text-xs font-normal px-2 py-1 bg-primary/10 text-primary rounded ring-1 ring-primary/20">Case Study</span>
                      </DialogTitle>
                      <DialogDescription className="text-lg py-4">
                        {project.longDescription}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-4">
                      <div>
                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map(f => (
                            <li key={f} className="text-sm text-foreground/70 flex items-center gap-2">
                               <div className="w-1 h-1 rounded-full bg-border" />
                               {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-4 justify-end">
                        <Button className="w-full gap-2" asChild>
                          <a href={project.github}>
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" className="w-full gap-2" asChild>
                          <a href={project.github}>
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
