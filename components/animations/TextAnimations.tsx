'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SplitTextProps {
  children: string
  delay?: number
  className?: string
}

export function SplitText({ children, delay = 0, className }: SplitTextProps) {
  const words = children.split(' ')
  
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + index * 0.1,
            ease: [0.25, 0.4, 0.25, 1]
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

interface TextRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function TextReveal({ children, delay = 0, className }: TextRevealProps) {
  return (
    <motion.span
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
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