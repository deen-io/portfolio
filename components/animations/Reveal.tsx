'use client'

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'
import styles from './Reveal.module.scss'

export function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, visible }
}

export function Reveal({
  children,
  delay = 0,
  style,
  className = '',
  id,
}: {
  children: ReactNode
  delay?: number
  style?: CSSProperties
  className?: string
  id?: string
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      id={id}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </div>
  )
}
