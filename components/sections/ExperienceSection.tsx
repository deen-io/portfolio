'use client'

import { experiences } from '@/lib/data'
import { useReveal } from '@/components/animations/Reveal'

function startYear(period: string) {
  return period.split('-')[0].trim()
}

function ExperienceRow({ r, i }: { r: (typeof experiences)[0]; i: number }) {
  const { ref, visible } = useReveal()
  const year = startYear(r.period)

  return (
    <div
      ref={ref}
      className="exp-grid"
      style={{
        gap: '0',
        borderTop: '1px solid rgba(176,125,255,0.14)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity 0.8s ease ${i * 80}ms, transform 0.8s ease ${i * 80}ms`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Year — giant faded */}
      <div className="section-pad-x" style={{ padding: '48px 0 48px 48px', position: 'relative' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(80px, 10vw, 130px)',
            fontWeight: 200,
            color: 'rgba(176,125,255,0.08)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {year}
        </div>
        <div style={{ position: 'relative', zIndex: 1, marginTop: '8px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 300, color: '#1A1A1A' }}>
            {year}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#B07DFF', textTransform: 'uppercase', marginTop: '6px' }}>
            {r.period}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="exp-content" style={{ padding: '48px 80px 48px 48px' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, color: '#B07DFF', marginBottom: '6px' }}>
          {r.company}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 2vw, 26px)',
            fontWeight: 300,
            color: '#1A1A1A',
            marginBottom: '16px',
          }}
        >
          {r.role}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontWeight: 300,
            lineHeight: 1.75,
            color: '#6B7280',
            marginBottom: '20px',
            maxWidth: '520px',
          }}
        >
          {r.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {r.tags.map((t) => <span key={t} className="pill">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" style={{ background: '#EFEAF8', scrollMarginTop: '80px' }}>
      <div className="section-pad-x" style={{ padding: '80px 48px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: '#B07DFF', textTransform: 'uppercase' }}>
            03 — Experience
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(176,125,255,0.18)' }} />
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 200,
            color: '#1A1A1A',
            marginBottom: '48px',
          }}
        >
          Where {"I've"} worked.
        </h2>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {experiences.map((r, i) => <ExperienceRow key={r.company} r={r} i={i} />)}
      </div>
    </section>
  )
}
