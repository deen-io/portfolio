'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { SplitText } from "@/components/animations/TextAnimations"
import { FloatingBlob, SparkleDecoration } from "@/components/animations/InteractiveElements"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 relative">
      <FloatingBlob className="w-72 h-72 bg-secondary/20 -right-20 top-0" delay={1} />
      
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Illustration side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center overflow-hidden relative group">
              <motion.div 
                className="w-3/4 h-3/4 bg-card rounded-2xl shadow-xl flex items-center justify-center relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/img/profile-image.png" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                <SparkleDecoration className="absolute top-4 right-4 w-5 h-5" />
                <SparkleDecoration className="absolute bottom-8 left-4 w-4 h-4" />
              </motion.div>
              
              {/* Decorative ring */}
              <motion.div 
                className="absolute inset-4 border-2 border-primary/20 rounded-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span className="text-muted-foreground">Passionate about clean code</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-sm tracking-widest text-primary uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              About Me
            </motion.p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">
              <SplitText delay={0.4}>A little bit about me</SplitText>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {personalInfo.aboutText.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              {personalInfo.stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <motion.p 
                    className="font-serif text-3xl md:text-4xl text-primary mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}