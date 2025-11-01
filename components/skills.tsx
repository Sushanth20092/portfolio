"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Smartphone, Database, BarChart3, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Frameworks & Libraries",
    icon: Smartphone,
    skills: ["React", "React Native (Expo)", "Node.js"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data & Visualization",
    icon: BarChart3,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Supabase (PostgreSQL)", "MySQL", "Firebase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem-Solving", "Teamwork", "Adaptability", "Punctuality"],
    color: "from-orange-500 to-red-500",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Skills
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:glow-cyan transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
              >
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
