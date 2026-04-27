'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ArrowDown } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { FadeIn } from '@/components/animations/MotionComponents'
import { TextReveal, SplitText } from '@/components/animations/TextAnimations'
import { FloatingBlob, MagneticButton } from '@/components/animations/InteractiveElements'
import { Button } from '@/components/ui/button'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className={styles.hero}>
      {/* Animated gradient background */}
      <motion.div 
        className={styles.gradientBg}
        style={{ y }}
      />
      
      {/* Background logo */}
      <motion.img 
        src="/img/icon.png" 
        alt="" 
        className={styles.backgroundLogo}
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 0.2, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      />
      
      {/* Decorative blobs */}
      <FloatingBlob className={styles.blob1} />
      <FloatingBlob className={styles.blob2} delay={2} />
      <FloatingBlob className={styles.blob3} delay={4} />

      <motion.div style={{ opacity }} className={styles.content}>
        {/* Animated badge */}
        <FadeIn delay={0.8} className={styles.badge}>
          <span className={styles.badgeContent}>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            Available for new opportunities
          </span>
        </FadeIn>

        {/* Main heading */}
        <div className={styles.titleContainer}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className={styles.subtitle}
          >
            {personalInfo.role}
          </motion.p>
        </div>

        <h1 className={styles.title}>
          <div className={styles.titleLine}>
            <TextReveal delay={1.2}>Hi, I'm</TextReveal>
          </div>
          <div className={styles.titleLine}>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
              className={styles.name}
            >
              {personalInfo.name}
            </motion.span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className={styles.description}
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className={styles.cta}
        >
          <MagneticButton>
            <Button variant="pill" size="lg" asChild>
              <a href="#contact" className={styles.ctaButton}>
                Let's work together
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity }}
        transition={{ duration: 1, delay: 2.5 }}
        className={styles.scrollIndicator}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={styles.scrollContent}
        >
          <span className={styles.scrollText}>Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}