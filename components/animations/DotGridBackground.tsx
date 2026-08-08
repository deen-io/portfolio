'use client'

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
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at center, ${color} 1.2px, transparent 1.4px)`,
          backgroundPosition: 'center',
          backgroundSize: '18px 18px',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at center, ${color} 2.16px, transparent 2.36px)`,
          backgroundPosition: 'center',
          backgroundSize: '18px 18px',
          opacity: hovering ? 1 : 0,
          maskImage: mask,
          WebkitMaskImage: mask,
          transition: 'opacity 0.25s ease',
        }}
      />
    </>
  )
}
