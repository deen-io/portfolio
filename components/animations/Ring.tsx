'use client'

import { useId } from 'react'

export function Ring({ text, size = 160, color = '#B07DFF' }: { text: string; size?: number; color?: string }) {
  const pathId = useId()
  const dimension = `min(${size}px, 82vw)`
  return (
    <div className="animate-spin-ccw" style={{ width: dimension, height: dimension, flexShrink: 0 }}>
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <path id={pathId} d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fill: color, letterSpacing: '0.12em' }}>
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
    </div>
  )
}
