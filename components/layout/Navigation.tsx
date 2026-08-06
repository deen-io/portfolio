'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'opening', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Navigation() {
  const [active, setActive] = useState('opening')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    // "skills" is a sub-anchor nested inside the "about" section, not a
    // true top-level section — it stays clickable via its href, but it
    // shouldn't compete with "about" for the active-highlight, since their
    // detection bands necessarily overlap.
    const observableIds = NAV_ITEMS.map((item) => item.id).filter((id) => id !== 'skills')
    observableIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      // A thin detection band near the top of the viewport, rather than a
      // percentage-of-target threshold — the latter breaks down when
      // sections vary wildly in height (a section taller than the viewport
      // can never satisfy a 40%-visible threshold).
      const io = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id) },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      )
      io.observe(el)
      observers.push(io)
    })
    return () => observers.forEach((io) => io.disconnect())
  }, [])

  return (
    <nav
      className="side-nav"
      style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      {NAV_ITEMS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          title={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              color: active === id ? '#B07DFF' : 'transparent',
              transition: 'color 0.3s',
              textTransform: 'uppercase',
              userSelect: 'none',
            }}
          >
            {label}
          </span>
          <span
            style={{
              width: active === id ? '20px' : '6px',
              height: '1px',
              background: active === id ? '#B07DFF' : 'rgba(26,26,26,0.25)',
              borderRadius: '1px',
              transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
              display: 'block',
            }}
          />
        </a>
      ))}
    </nav>
  )
}
