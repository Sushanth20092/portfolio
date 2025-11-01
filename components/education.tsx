"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Srinivas University",
    period: "2023 – 2025",
    cgpa: "8.39",
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Milagres College",
    period: "2020 – 2023",
    cgpa: "6.88",
  },
  {
    degree: "PU (Pre-University)",
    institution: "Manipal Junior College",
    period: "2018 – 2020",
    cgpa: "7.1",
  },
  {
    degree: "10th Standard",
    institution: "Milagres English Medium School",
    period: "2017 – 2018",
    cgpa: "6.6",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Education
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline icon */}
                <motion.div
                  className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center glow-purple"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="glass rounded-2xl p-6 hover:glow-cyan transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                    <span className="text-sm font-semibold">CGPA: {edu.cgpa}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
