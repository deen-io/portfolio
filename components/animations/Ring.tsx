'use client'

import { useId, type CSSProperties } from 'react'
import styles from './Ring.module.scss'

export function Ring({ text, size = 160, color = '#8B3DFF' }: { text: string; size?: number; color?: string }) {
  const pathId = useId()
  const dimension = `min(${size}px, 82vw)`
  return (
    <div className={`animate-spin-ccw ${styles.wrap}`} style={{ width: dimension, height: dimension }}>
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <path id={pathId} d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text className={styles.label} style={{ '--ring-color': color } as CSSProperties}>
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
    </div>
  )
}
