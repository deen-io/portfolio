'use client'

import { marqueeItems } from "@/lib/data"

export function MarqueeSection({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...marqueeItems].reverse() : marqueeItems
  const repeated = [...items, ...items]

  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid rgba(176,125,255,0.16)',
        borderBottom: '1px solid rgba(176,125,255,0.16)',
        background: '#EFEAF8',
        padding: '14px 0',
        userSelect: 'none',
      }}
    >
      <div className="animate-marquee" style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', width: 'max-content' }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#6B7280',
                padding: '0 28px',
              }}
            >
              {item}
            </span>
            <span style={{ color: '#B07DFF', fontSize: '10px', opacity: 0.7 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
