'use client'

import { CSSProperties, ReactNode } from 'react'
import { Ring } from './Ring'
import styles from './RingCard.module.scss'

interface RingCardProps {
  text: string
  size?: number
  glass?: boolean
  className?: string
  style?: CSSProperties
  textColor?: string
  children?: ReactNode
}

export function RingCard({ text, size = 148, glass = true, className, style, textColor, children }: RingCardProps) {
  const dimension = `min(${size}px, 82vw)`
  const ringAndContent = (
    <div className={styles.wrap} style={{ width: dimension, height: dimension }}>
      <div className={styles.ringLayer}>
        <Ring text={text} size={size} color={textColor} />
      </div>
      {children}
    </div>
  )

  if (!glass) {
    return <div className={className} style={style}>{ringAndContent}</div>
  }

  return (
    <div className={`glass ${styles.glassWrap} ${className ?? ''}`.trim()} style={style}>
      {ringAndContent}
    </div>
  )
}
