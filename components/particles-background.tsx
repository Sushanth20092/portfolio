"use client"

import { useEffect, useRef } from "react"

interface ParticlesBackgroundProps {
  theme: "dark" | "light"
}

export default function ParticlesBackground({ theme }: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    const codeElements: Array<{
      x: number
      y: number
      vy: number
      text: string
      opacity: number
      fadeDirection: number
    }> = []

    const particleCount = 50
    const codeElementCount = 15

    const codeSnippets = [
      "const",
      "function",
      "=>",
      "async",
      "await",
      "{}",
      "[]",
      "</>",
      "import",
      "export",
      "0x",
      "1010",
      "0xFF",
      "class",
      "return",
      "if",
      "else",
      "for",
      "map",
      "filter",
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    for (let i = 0; i < codeElementCount; i++) {
      codeElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vy: -0.3 - Math.random() * 0.3,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: Math.random() * 0.5 + 0.3,
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    const particleColor = theme === "dark" ? "rgba(6, 182, 212, 0.6)" : "rgba(37, 99, 235, 0.8)"
    const connectionColor = theme === "dark" ? "6, 182, 212" : "37, 99, 235"
    const codeTextColor = theme === "dark" ? "rgba(168, 85, 247, 0.7)" : "rgba(147, 51, 234, 0.8)"

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            const lineOpacity = theme === "dark" ? 0.3 : 0.4
            ctx.strokeStyle = `rgba(${connectionColor}, ${lineOpacity * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      ctx.font = "14px 'Courier New', monospace"
      codeElements.forEach((element) => {
        element.y += element.vy
        element.opacity += element.fadeDirection * 0.005

        if (element.opacity >= 0.8 || element.opacity <= 0.2) {
          element.fadeDirection *= -1
        }

        if (element.y < -20) {
          element.y = canvas.height + 20
          element.x = Math.random() * canvas.width
          element.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        }

        ctx.fillStyle = codeTextColor.replace(/[\d.]+\)$/, `${element.opacity})`)
        ctx.fillText(element.text, element.x, element.y)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${theme === "dark" ? "opacity-30" : "opacity-50"}`}
    />
  )
}
