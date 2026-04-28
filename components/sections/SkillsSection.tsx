'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { skills } from "@/lib/data"
import { SplitText } from "@/components/animations/TextAnimations"
import { FloatingBlob } from "@/components/animations/InteractiveElements"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      <FloatingBlob className="w-80 h-80 bg-primary/10 left-0 top-1/4" delay={2} />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-primary uppercase mb-4">My Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            <SplitText>Skills & Technologies</SplitText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <CardContent className="p-6 relative">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-5 overflow-hidden"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={skill.image} 
                      alt={skill.category}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </motion.div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-muted text-muted-foreground font-normal text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}