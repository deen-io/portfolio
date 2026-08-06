'use client'

import { useId } from 'react'

export function Ring({ text, size = 160 }: { text: string; size?: number }) {
  const pathId = useId()
  return (
    <div className="animate-spin-ccw" style={{ width: size, height: size, flexShrink: 0 }}>
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <defs>
          <path id={pathId} d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fill: '#B07DFF', letterSpacing: '0.12em' }}>
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
    </div>
  )
}
