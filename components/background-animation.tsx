"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      targetOpacity: number
    }

    interface Star {
      x: number
      y: number
      radius: number
      opacity: number
      targetOpacity: number
      twinkleSpeed: number
    }

    const particles: Particle[] = []
    const stars: Star[] = []
    const particleCount = 50
    const starCount = 100

    const colorConfig = currentTheme === "dark" 
      ? {
          bgStop1: "rgba(5, 10, 25, 0.6)",
          bgStop2: "rgba(10, 15, 35, 0.4)",
          bgStop3: "rgba(5, 10, 25, 0.6)",
          starColor: "255, 255, 255",
          particleColor: "147, 51, 234",
          starRadius: 1,
          starGlow: 2,
          isNebula: false
        }
      : {
          bgStop1: "rgba(240, 245, 255, 0.4)",
          bgStop2: "rgba(235, 240, 250, 0.3)",
          bgStop3: "rgba(240, 245, 255, 0.4)",
          starColor: "100, 120, 255",
          particleColor: "79, 70, 229",
          starRadius: 3,
          starGlow: 8,
          isNebula: true
        }

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * colorConfig.starRadius + (colorConfig.isNebula ? 2 : 0.3),
        opacity: Math.random() * 0.4 + 0.1,
        targetOpacity: Math.random() * 0.4 + 0.1,
        twinkleSpeed: Math.random() * 0.01 + 0.002,
      })
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3,
        targetOpacity: Math.random() * 0.3 + 0.1,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, colorConfig.bgStop1)
      gradient.addColorStop(0.5, colorConfig.bgStop2)
      gradient.addColorStop(1, colorConfig.bgStop3)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.opacity += (star.targetOpacity - star.opacity) * star.twinkleSpeed
        if (Math.random() < 0.01) {
          star.targetOpacity = Math.random() * (colorConfig.isNebula ? 0.3 : 0.7) + 0.2
        }

        ctx.fillStyle = `rgba(${colorConfig.starColor}, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw glow around star/orb
        ctx.strokeStyle = `rgba(${colorConfig.starColor}, ${star.opacity * 0.2})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius + colorConfig.starGlow, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Smooth opacity transitions
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.02
        if (Math.random() < 0.02) {
          particle.targetOpacity = Math.random() * 0.3 + 0.1
        }

        // Draw particle
        ctx.fillStyle = `rgba(${colorConfig.particleColor}, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw connecting lines
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(${colorConfig.particleColor}, ${0.05 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [mounted, theme, resolvedTheme])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: currentTheme === "dark" ? 0.7 : 0.4 }}
    />
  )
}
