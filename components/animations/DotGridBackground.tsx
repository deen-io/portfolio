'use client'

import type { CSSProperties } from 'react'
import styles from './DotGridBackground.module.scss'

interface DotGridBackgroundProps {
  cursor: { x: number; y: number }
  hovering: boolean
  color?: string
}

// A soft dot grid that "blooms" — larger, denser dots reveal within a
// circle that follows the cursor. Controlled component: the parent owns
// pointer tracking (usually on the outer section, so movement bubbles up
// correctly even when the cursor is over content sitting on top of this).
export function DotGridBackground({ cursor, hovering, color = 'rgba(176, 125, 255, 0.4)' }: DotGridBackgroundProps) {
  const mask = `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, #000 72px, transparent 120px)`

  return (
    <>
      <div aria-hidden="true" className={styles.base} style={{ '--dot-color': color } as CSSProperties} />
      <div
        aria-hidden="true"
        className={`${styles.bloom} ${hovering ? styles.hovering : ''}`}
        style={{ '--dot-color': color, '--dot-mask': mask } as CSSProperties}
      />
    </>
  )
}
