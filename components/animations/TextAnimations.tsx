'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SplitTextProps {
  children: string
  delay?: number
  className?: string
}

export function SplitText({ children, delay = 0, className }: SplitTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <span ref={ref} className={className}>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + i * 0.03,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

interface TextRevealProps {
  children: string
  delay?: number
  className?: string
}

export function TextReveal({ children, delay = 0, className = "" }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

interface TypingEffectProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export function TypingEffect({ text, delay = 0, speed = 50, className }: TypingEffectProps) {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{
        duration: text.length * (speed / 1000),
        delay,
        ease: "linear"
      }}
      className={`overflow-hidden ${className}`}
    >
      {text}
    </motion.span>
  )
}