"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypewriterText from "@/components/typewriter-text"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
         <motion.h1
  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Hi, I'm{" "}
  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
    Sushanth
  </span>{" "}
  <motion.span
    animate={{ rotate: [0, 20, -10, 20, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut",
    }}
    style={{ display: "inline-block" }}
  >
    👋
  </motion.span>
</motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Full Stack & Mobile App Developer
          </motion.h2>

          <motion.div
            className="text-xl md:text-2xl mb-12 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypewriterText texts={["React Developer", "Mobile Developer", "Problem Solver", "Lifelong Learner"]} />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="glow-cyan bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              className="glow-blue bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a href="/resume_sushanth.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="glow-purple border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/Sushanth20092"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sushanthacharya062790343"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:sushanthpacharya9@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="tel:+919035443664"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
