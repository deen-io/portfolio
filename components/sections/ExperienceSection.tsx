'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experiences } from "@/lib/data"
import { SplitText } from "@/components/animations/TextAnimations"
import { FloatingBlob } from "@/components/animations/InteractiveElements"
import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      <FloatingBlob className="w-72 h-72 bg-accent/20 left-0 bottom-0" delay={1.5} />
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-primary uppercase mb-4">My Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            <SplitText>Experience</SplitText>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{ originY: 0 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-16 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Animated timeline dot */}
              <motion.div 
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 -translate-y-1/2 top-2 z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.2, type: "spring" }}
              />
              
              {/* Pulse effect */}
              <motion.div 
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary/30 md:-translate-x-1/2 -translate-y-1/2 top-2"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              />
              
              <div className={`${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <Card className="bg-card border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardContent className="p-6 relative">
                    <p className="text-sm text-primary font-medium mb-2">{exp.period}</p>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-1">{exp.role}</h3>
                    <p className="text-sm text-primary/70 mb-4">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}