'use client'

import { personalInfo, socialLinks } from '@/lib/data'
import { Ring } from '@/components/animations/Ring'

const ICONS: Record<string, React.ReactNode> = {
  Github: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  Linkedin: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.058-1.865-3.058-1.865 0-2.135 1.459-2.135 2.961v5.701h-3v-11h2.879v1.5h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v6.472z" />
    </svg>
  ),
  Mail: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  ),
}

export function HeroSection() {
  const [firstName] = personalInfo.name.split(' ')

  return (
    <section
      id="opening"
      className="hero-shell"
      style={{
        minHeight: '100svh',
        background: '#F8F7FB',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-120px',
          left: '-100px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,125,255,0.25), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-140px',
          right: '-120px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,125,255,0.2), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Left rail */}
      <div
        className="hero-rail"
        style={{
          position: 'absolute',
          left: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
          zIndex: 2,
        }}
      >
        <div style={{ width: '1px', height: '48px', background: 'rgba(176,125,255,0.3)' }} />
        <span
          style={{
            display: 'inline-block',
            transform: 'rotate(-90deg)',
            whiteSpace: 'nowrap',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '30px',
            color: 'transparent',
            WebkitTextStroke: '1.1px #B07DFF',
            letterSpacing: '0.01em',
          }}
        >
          {firstName}
        </span>
        <span style={{ color: '#B07DFF', fontSize: '14px', opacity: 0.8 }}>✦</span>
      </div>

      <div
        className="hero-rail"
        style={{
          position: 'absolute',
          left: '44px',
          bottom: '48px',
          flexDirection: 'column',
          gap: '18px',
          zIndex: 2,
        }}
      >
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={s.label}
            style={{ color: '#6B7280', transition: 'color 0.2s', display: 'block' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#B07DFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            {ICONS[s.icon]}
          </a>
        ))}
      </div>

      {/* Main grid */}
      <div
        className="hero-grid"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        {/* Text column */}
        <div style={{ animation: 'fade-up-in 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both' }}>
          <h1
            style={{
              fontFamily: 'var(--font-name)',
              fontSize: 'clamp(64px, 9.5vw, 140px)',
              fontWeight: 400,
              lineHeight: 0.9,
              color: '#1A1A1A',
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {personalInfo.name.split(' ').slice(1).join(' ')}
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#1A1A1A',
              marginTop: '20px',
            }}
          >
            {personalInfo.role}
          </div>
          <div style={{ width: '40px', height: '2px', background: '#B07DFF', margin: '14px 0 22px' }} />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 300,
              color: '#6B7280',
              maxWidth: '380px',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}
          >
            {personalInfo.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 28px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #B07DFF, #8B5CF6)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 10px 30px -8px rgba(176,125,255,0.6)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              View My Work
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>

            <a
              href="/files/Fajardo, Dina CV.pdf"
              download="Dina_Fajardo_CV.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#1A1A1A',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(26,26,26,0.25)',
                paddingBottom: '3px',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B07DFF'; e.currentTarget.style.color = '#B07DFF' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(26,26,26,0.25)'; e.currentTarget.style.color = '#1A1A1A' }}
            >
              Download Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" /></svg>
            </a>
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {personalInfo.stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  paddingRight: '36px',
                  borderRight: i < personalInfo.stats.length - 1 ? '1px solid rgba(176,125,255,0.2)' : 'none',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: '#B07DFF', lineHeight: 1 }}>
                  {s.number}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#1A1A1A', marginTop: '4px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait column */}
        <div
          style={{
            position: 'relative',
            height: 'clamp(420px, 62vh, 640px)',
            animation: 'fade-up-in 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both',
          }}
        >
          {/* Soft blob behind the arch */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-30px',
              borderRadius: '200px 200px 40px 40px',
              background: 'radial-gradient(circle at 30% 20%, rgba(176,125,255,0.35), transparent 60%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Decorative curved line */}
          <svg
            aria-hidden="true"
            width="100%"
            height="100%"
            viewBox="0 0 400 600"
            preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'visible' }}
          >
            <path
              d="M 20 420 C 120 480, 200 470, 260 410 S 360 330, 390 355"
              fill="none"
              stroke="rgba(176,125,255,0.35)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Arch portrait */}
          <div
            className="glass"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              height: '100%',
              borderRadius: '200px 200px 32px 32px',
              overflow: 'hidden',
              background: '#EDE9FE',
            }}
          >
            <img
              src="/img/profile-image.png"
              alt={personalInfo.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Sparkle accent */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '18%',
              left: '-4px',
              color: '#B07DFF',
              fontSize: '20px',
              zIndex: 2,
            }}
          >
            ✦
          </span>

          {/* Rotating ring badge */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-58px',
              zIndex: 2,
              width: '116px',
              height: '116px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ring text="OPTIMIZE · CODE · DESIGN · " size={116} />
            <span style={{ position: 'absolute', color: '#B07DFF', fontSize: '15px' }}>✦</span>
          </div>
        </div>
      </div>

      <style>{`@keyframes fade-up-in { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </section>
  )
}
