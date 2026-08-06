'use client'

import { personalInfo, socialLinks } from '@/lib/data'
import { Reveal } from '@/components/animations/Reveal'
import { Ring } from '@/components/animations/Ring'

const BIO_PILLS = ['Node.js', 'Laravel', 'React', 'Vue.js', 'AWS', 'PostgreSQL']
const githubLink = socialLinks.find((s) => s.label === 'GitHub')

export function AboutSection() {
  return (
    <section id="about" style={{ background: '#F8F7FB', padding: '80px 48px', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Chapter label */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: '#B07DFF', textTransform: 'uppercase' }}>
              01 — About
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(176,125,255,0.18)' }} />
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="bento">
          {/* Portrait card — tall, spans 2 rows */}
          <Reveal delay={0} className="bento-portrait">
            <div
              className="glass"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: '100%',
                minHeight: '440px',
                position: 'relative',
                background: '#EDE9FE',
              }}
            >
              <img
                src="/img/profile-image.png"
                alt={`${personalInfo.name} — ${personalInfo.role}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Overlay label */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 20px 20px',
                  background: 'linear-gradient(transparent, rgba(26,26,26,0.55))',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '18px', color: 'white', fontWeight: 300 }}>
                  {personalInfo.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.12em', marginTop: '3px', textTransform: 'uppercase' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio card — wide */}
          <Reveal id="skills" delay={60} className="bento-bio" style={{ scrollMarginTop: '100px' }}>
            <div
              className="glass"
              style={{ borderRadius: '24px', padding: '36px', height: '100%' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  fontWeight: 300,
                  lineHeight: 1.4,
                  color: '#1A1A1A',
                  marginBottom: '20px',
                }}
              >
                {"I build systems"} <em style={{ color: '#B07DFF' }}>{"that quietly just work"}</em>{" — for the people running the business."}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#6B7280',
                }}
              >
                {personalInfo.bio}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
                {BIO_PILLS.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Location card */}
          <Reveal delay={100}>
            <div
              className="glass"
              style={{ borderRadius: '24px', padding: '28px', background: 'rgba(176,125,255,0.08)', height: '100%' }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em', color: '#B07DFF', textTransform: 'uppercase', marginBottom: '12px' }}>
                Based in
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, color: '#1A1A1A', lineHeight: 1.2 }}>
                {personalInfo.location.split(',').map((line, i) => (
                  <span key={i}>{line.trim()}{i === 0 ? <br /> : null}</span>
                ))}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#9CA3AF', marginTop: '8px' }}>
                Open to remote
              </div>
            </div>
          </Reveal>

          {/* Rotating ring card */}
          <Reveal delay={120} className="bento-ring">
            <div
              className="glass"
              style={{
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '28px',
                height: '100%',
                minHeight: '200px',
              }}
            >
              <Ring text="Available for new opportunities · Full-Stack Engineer · " size={148} />
            </div>
          </Reveal>

          {/* Availability card */}
          <Reveal delay={140} className="bento-status">
            <div
              className="glass"
              style={{ borderRadius: '24px', padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Status
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#B07DFF', display: 'block', boxShadow: '0 0 0 3px rgba(176,125,255,0.2)' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: '#1A1A1A' }}>
                    Available
                  </span>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#9CA3AF', lineHeight: 1.5 }}>
                Full-time · Contract<br />Senior Engineer roles
              </div>
            </div>
          </Reveal>

          {/* GitHub CTA card */}
          <Reveal delay={160} className="bento-github">
            <a
              href={githubLink?.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: '24px',
                background: '#1A1A1A',
                padding: '28px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ opacity: 0.6 }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, color: 'white', lineHeight: 1 }}>GitHub</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: '6px' }}>View Profile →</div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
