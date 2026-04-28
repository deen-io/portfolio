'use client'

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Eye, Code2, Camera } from "lucide-react"
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
  const [currentSnapshots, setCurrentSnapshots] = useState<{ [key: number]: number }>({})

  // Auto-cycle through snapshots for projects without demos
  useEffect(() => {
    // Debug: Check which projects have snapshots
    projects.forEach((project, index) => {
      console.log(`Project ${index} (${project.title}):`, {
        demoLink: project.demoLink,
        snapshotsLength: project.snapshots.length,
        snapshots: project.snapshots,
        shouldShowSnapshots: !project.demoLink && project.snapshots.length > 0
      })
    })

    const interval = setInterval(() => {
      setCurrentSnapshots(prev => {
        const newSnapshots = { ...prev }
        projects.forEach((project, index) => {
          if (!project.demoLink && project.snapshots.length > 1) {
            const newIndex = ((prev[index] || 0) + 1) % project.snapshots.length
            newSnapshots[index] = newIndex
            console.log(`Project ${index} cycling to snapshot ${newIndex}:`, project.snapshots[newIndex])
          }
        })
        return newSnapshots
      })
    }, 3000) // Change snapshot every 3 seconds

    return () => clearInterval(interval)
  }, [])

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
                  {/* Show snapshot or main image */}
                  {!project.demoLink && project.snapshots.length > 0 ? (
                    <motion.img 
                      key={`${index}-${currentSnapshots[index] || 0}`}
                      src={project.snapshots[currentSnapshots[index] || 0]}
                      alt={`${project.title} snapshot`}
                      className="w-full h-full object-cover blur-sm"
                      animate={{ 
                        scale: hoveredIndex === index ? 1.1 : 1,
                        opacity: 1
                      }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.5, opacity: { duration: 0.3 } }}
                      onError={(e) => console.error('Snapshot image failed to load:', project.snapshots[currentSnapshots[index] || 0])}
                      onLoad={() => console.log('Snapshot image loaded:', project.snapshots[currentSnapshots[index] || 0])}
                    />
                  ) : (
                    <motion.img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{ 
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* Animated overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Project action buttons or snapshot indicator */}
                  {project.demoLink || project.githubLink ? (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.demoLink && (
                        <Button 
                          size="sm" 
                          className="rounded-full bg-card/90 text-foreground hover:bg-card border border-border/20"
                          asChild
                        >
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="rounded-full bg-muted/90 text-foreground hover:bg-muted border border-border/20"
                          asChild
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Code2 className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  ) : project.snapshots.length > 0 && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20">
                        <div className="flex items-center gap-2 text-sm text-foreground">
                          <Camera className="w-4 h-4" />
                          <span>Project Snapshot</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Always visible snapshot indicator for projects without demos */}
                  {!project.demoLink && project.snapshots.length > 0 && (
                    <div className="absolute top-3 right-3 bg-muted/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Camera className="w-3 h-3" />
                        <span>Preview</span>
                      </div>
                    </div>
                  )}

                  {/* Snapshot counter for multiple snapshots */}
                  {!project.demoLink && project.snapshots.length > 1 && (
                    <div className="absolute bottom-3 left-3 bg-muted/80 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-xs text-muted-foreground">
                        {(currentSnapshots[index] || 0) + 1} / {project.snapshots.length}
                      </span>
                    </div>
                  )}
                </motion.div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-medium text-foreground flex-1">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
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
                  
                  {/* Action buttons */}
                  {(project.demoLink || project.githubLink || project.snapshots.length > 0) && (
                    <div className="flex gap-2 pt-4 border-t border-border/20">
                      {project.demoLink ? (
                        <Button 
                          size="sm" 
                          className="flex-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          asChild
                        >
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      ) : project.snapshots.length > 0 && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 rounded-full border-border/50 text-muted-foreground cursor-default"
                          disabled
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          Preview Only
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 rounded-full border-border/50 hover:bg-muted transition-all duration-300"
                          asChild
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Code2 className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}