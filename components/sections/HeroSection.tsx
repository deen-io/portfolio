'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { TextReveal } from '@/components/animations/TextAnimations'
import { FloatingBlob, MagneticButton } from '@/components/animations/InteractiveElements'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
        style={{ y }}
      />
      
      {/* Background logo for whole section */}
      <motion.img 
        src="/img/icon.png" 
        alt="" 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 w-[120vw] h-[120vh] object-contain opacity-20 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 0.2, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      />
      
      {/* Decorative blobs with parallax */}
      <FloatingBlob className="w-[500px] h-[500px] bg-primary/20 -top-32 -left-32" />
      <FloatingBlob className="w-[400px] h-[400px] bg-secondary/30 top-1/3 -right-20" delay={2} />
      <FloatingBlob className="w-[300px] h-[300px] bg-accent/40 bottom-20 left-1/4" delay={4} />

      <motion.div style={{ opacity }} className="relative z-10 text-left px-6 max-w-5xl mx-auto lg:ml-16 xl:ml-24">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main heading with split text animation */}
        <div className="mb-6 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            {personalInfo.role}
          </motion.p>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 leading-[0.9] relative">
          <div className="overflow-hidden">
            <TextReveal delay={1.2}>Hi, I&apos;m</TextReveal>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-block text-primary"
            >
              {personalInfo.name}
            </motion.span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <MagneticButton>
            <Button 
              size="lg" 
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.span>
              </a>
            </Button>
          </MagneticButton>
          
          <MagneticButton>
            <Button 
              variant="outline"
              size="lg" 
              className="rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary group"
              asChild
            >
              <a 
                href="/files/Dina Fajardo CV.pdf" 
                download="Dina_Fajardo_CV.pdf"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </MagneticButton>
        </motion.div>

      {/* Scroll indicator - only show on first section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity }}
        transition={{ duration: 1, delay: 2.5 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}