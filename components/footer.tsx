"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border py-12 bg-background/80 backdrop-blur-md relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sriram. R
            </h2>
            <p className="text-foreground/50 text-sm max-w-xs text-center md:text-left">
              Systematic thinker and technical architect building scalable solutions with code and curiosity.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8 text-sm font-semibold tracking-wide uppercase">
              <a href="#about" className="text-foreground/60 hover:text-primary transition-all hover:-translate-y-1">About</a>
              <a href="#projects" className="text-foreground/60 hover:text-primary transition-all hover:-translate-y-1">Projects</a>
              <a href="#skills" className="text-foreground/60 hover:text-primary transition-all hover:-translate-y-1">Skills</a>
              <a href="#contact" className="text-foreground/60 hover:text-primary transition-all hover:-translate-y-1">Contact</a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-foreground/40 text-xs flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full border border-border/50">
                © {currentYear} Sriram R. Made with 
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-400"
                >
                  ♥
                </motion.span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
