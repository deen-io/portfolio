'use client'

import { useState } from 'react'
import { projects } from '@/lib/data'
import { Reveal, useReveal } from '@/components/animations/Reveal'

const ACCENTS = ['#B07DFF', '#8B5CF6']

function ProjectStrip({ p, index }: { p: (typeof projects)[0]; index: number }) {
  const { ref, visible } = useReveal()
  const [hovered, setHovered] = useState(false)
  const flip = index % 2 === 1
  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '520px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(32px)',
        transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',
        borderTop: '1px solid rgba(176,125,255,0.14)',
      }}
      className="project-strip"
    >
      {/* Image side */}
      <div
        style={{
          order: flip ? 2 : 1,
          position: 'relative',
          overflow: 'hidden',
          background: '#EDE9FE',
        }}
      >
        <img
          src={p.image}
          alt={p.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {/* index overlay */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            fontFamily: 'var(--font-display)',
            fontSize: '80px',
            fontWeight: 200,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Text side */}
      <div
        style={{
          order: flip ? 1 : 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(40px, 6vw, 80px)',
          background: flip ? '#EFEAF8' : '#F8F7FB',
        }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '20px' }}>
          {p.category}
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 3.5vw, 48px)',
            fontWeight: 300,
            color: '#1A1A1A',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}
        >
          {p.title}
        </h2>

        <div style={{ width: '40px', height: '1px', background: accent, marginBottom: '24px' }} />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#6B7280',
            marginBottom: '24px',
            maxWidth: '440px',
          }}
        >
          {p.summary}
        </p>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: accent, marginBottom: '28px' }}>
          {p.highlight}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
          {p.tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        {p.demoLink && (
          <a href={p.demoLink} target="_blank" rel="noopener noreferrer" className="cta-outline" style={{ width: 'fit-content', fontSize: '12px' }}>
            View Live Demo
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        )}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" style={{ background: '#F8F7FB', scrollMarginTop: '80px' }}>
      <div style={{ padding: '80px 48px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: '#B07DFF', textTransform: 'uppercase' }}>
              02 — Selected Work
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(176,125,255,0.18)' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 200,
              color: '#1A1A1A',
              lineHeight: 1.05,
            }}
          >
            {"Things I've"}{' '}
            <em style={{ color: '#B07DFF' }}>shipped.</em>
          </h2>
        </Reveal>
      </div>

      {projects.map((p, index) => (
        <ProjectStrip key={p.title} p={p} index={index} />
      ))}
    </section>
  )
}
