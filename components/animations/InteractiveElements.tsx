'use client'

import { motion } from 'framer-motion'
import { ReactNode, useRef, useState, useEffect } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FloatingBlobProps {
  className?: string
  delay?: number
}

export function FloatingBlob({ className, delay = 0 }: FloatingBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    />
  )
}

interface SparkleDecorationProps {
  className?: string
}

export function SparkleDecoration({ className }: SparkleDecorationProps) {
  return (
    <motion.div
      className={`absolute rounded-full bg-primary/20 ${className}`}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
  )
}

interface ParallaxProps {
  children: ReactNode
  offset?: number
  className?: string
}

export function Parallax({ children, offset = 50, className }: ParallaxProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className={className}
      style={{
        y: scrollY * offset * 0.01
      }}
    >
      {children}
    </motion.div>
  )
}