"use client"

import { useEffect, useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate serverless API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    
    toast.success("Message drafted! Opening your email client...", {
      description: "Thanks for reaching out, Sriram will get back to you soon.",
    })
    
    window.location.href = `mailto:r.sriramrenu@gmail.com?subject=${subject}&body=${body}`
    
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/60 max-w-lg mx-auto text-lg">
            Have a project in mind or just want to say hi? I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/70">Name</label>
                  <input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground/70">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground/70">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:r.sriramrenu@gmail.com" className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-all group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-foreground/40 mb-0.5">Email</p>
                    <p className="font-medium">r.sriramrenu@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+916379390238" className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-all group">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent transition-colors">
                    <Phone className="w-5 h-5 text-accent group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-foreground/40 mb-0.5">Phone</p>
                    <p className="font-medium">+91 6379390238</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Social Profiles</h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/sriram-r-59024b328", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/sriramrenu", label: "GitHub" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="p-4 bg-card border border-border rounded-xl hover:border-primary transition-all group"
                  >
                    <social.icon className="w-6 h-6 text-foreground/60 group-hover:text-primary group-hover:scale-110 transition-all" />
                  </a>
                ))}
                <a
                  href="https://huggingface.co/Sriramrenu"
                  target="_blank"
                  className="p-4 bg-card border border-border rounded-xl hover:border-primary transition-all group text-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                >
                  🤗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
