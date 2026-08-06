'use client'

import { CSSProperties, ReactNode } from 'react'
import { Ring } from './Ring'

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
    <div
      style={{
        position: 'relative',
        width: dimension,
        height: dimension,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        <Ring text={text} size={size} color={textColor} />
      </div>
      {children}
    </div>
  )

  if (!glass) {
    return <div className={className} style={style}>{ringAndContent}</div>
  }

  return (
    <div
      className={`glass ${className ?? ''}`.trim()}
      style={{
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '28px',
        height: '100%',
        minHeight: '200px',
        ...style,
      }}
    >
      {ringAndContent}
    </div>
  )
}
