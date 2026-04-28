'use client'

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/data"
import { SplitText } from "@/components/animations/TextAnimations"
import { FloatingBlob } from "@/components/animations/InteractiveElements"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 px-6 relative">
      <FloatingBlob className="w-96 h-96 bg-secondary/20 -right-32 top-1/3" delay={3} />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-primary uppercase mb-4">My Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            <SplitText>Featured Projects</SplitText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="group h-full bg-card border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-700 relative">
                <motion.div
                  className="aspect-video relative overflow-hidden bg-muted"
                  animate={{ scale: hoveredIndex === index ? 1.02 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ 
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Animated overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* View project button - only show if link is a valid URL */}
                  {project.link && project.link !== "#" && project.link.startsWith("http") && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button 
                        size="sm" 
                        className="rounded-full bg-card/90 text-foreground hover:bg-card"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                          <ArrowUpRight className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl font-medium text-foreground">{project.title}</h3>
                    <motion.a 
                      href={project.link}
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="border-primary/30 text-primary text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tag}
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