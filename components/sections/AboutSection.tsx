'use client'

import { personalInfo, socialLinks } from '@/lib/data'
import { Reveal } from '@/components/animations/Reveal'
import { RingCard } from '@/components/animations/RingCard'

const BIO_PILLS = ['Node.js', 'Laravel', 'React', 'Vue.js', 'AWS', 'PostgreSQL']
const githubLink = socialLinks.find((s) => s.label === 'GitHub')
const githubUsername = githubLink?.href.split('/').filter(Boolean).pop()
const githubAvatar = githubUsername ? `https://github.com/${githubUsername}.png?size=96` : undefined

export function AboutSection() {
  return (
    <section id="about" className="section-pad-x" style={{ background: '#F8F7FB', padding: '80px 48px', scrollMarginTop: '80px' }}>
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
              style={{ borderRadius: '24px', padding: '28px', background: 'rgba(176,125,255,0.08)', height: '100%', display: 'flex', flexDirection: 'column' }}
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

              {/* Map preview */}
              <div
                aria-hidden="true"
                style={{
                  position: 'relative',
                  marginTop: '16px',
                  flex: 1,
                  minHeight: '100px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(176,125,255,0.18), rgba(176,125,255,0.05))',
                  border: '1px solid rgba(176,125,255,0.16)',
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 220 110" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
                  <defs>
                    <pattern id="mapDots" width="14" height="14" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="rgba(176,125,255,0.4)" />
                    </pattern>
                  </defs>
                  <rect width="220" height="110" fill="url(#mapDots)" />
                  <path d="M -10 75 C 40 45, 80 95, 130 60 S 200 25, 240 50" stroke="rgba(176,125,255,0.45)" strokeWidth="2" fill="none" />
                  <path d="M 30 -10 C 50 30, 35 65, 65 120" stroke="rgba(176,125,255,0.3)" strokeWidth="1.5" fill="none" />
                </svg>

                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span
                    className="animate-ping-pin"
                    style={{
                      position: 'absolute',
                      inset: '-9px',
                      borderRadius: '50%',
                      background: 'rgba(176,125,255,0.35)',
                    }}
                  />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#B07DFF" style={{ position: 'relative', filter: 'drop-shadow(0 2px 4px rgba(176,125,255,0.4))' }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Rotating ring card */}
          <Reveal delay={120} className="bento-ring">
            <div
              style={{
                position: 'relative',
                height: '100%',
                minHeight: '200px',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #B07DFF, #8B5CF6)',
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Glow highlights */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-30%',
                  left: '-20%',
                  width: '75%',
                  height: '75%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)',
                  filter: 'blur(6px)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-28%',
                  right: '-18%',
                  width: '65%',
                  height: '65%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(58,15,120,0.45), transparent 70%)',
                  filter: 'blur(6px)',
                }}
              />

              {/* Dot texture */}
              <svg aria-hidden="true" width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                <defs>
                  <pattern id="ringTexture" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ringTexture)" />
              </svg>

              <RingCard text="Available for new opportunities · Full-Stack Engineer · " size={148} textColor="#FFFFFF" glass={false}>
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '88px',
                    height: '88px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(255,255,255,0.85)',
                    boxShadow: '0 6px 20px -6px rgba(58,15,120,0.5)',
                  }}
                >
                  <img
                    src="/img/profile-image-02.png"
                    alt={personalInfo.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </RingCard>
            </div>
          </Reveal>

          {/* Availability card */}
          <Reveal delay={140} className="bento-status">
            <div
              className="glass"
              style={{ borderRadius: '24px', padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 85% 0%, rgba(176,125,255,0.3), transparent 55%), radial-gradient(circle at 0% 100%, rgba(139,92,246,0.2), transparent 55%)',
                }}
              />
              <svg aria-hidden="true" width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
                <defs>
                  <pattern id="statusDots" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(176,125,255,0.3)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#statusDots)" />
              </svg>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Status
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ position: 'relative', width: '8px', height: '8px' }}>
                    <span
                      className="animate-ping-pin"
                      style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', background: 'rgba(176,125,255,0.35)' }}
                    />
                    <span style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '50%', background: '#B07DFF', display: 'block', boxShadow: '0 0 0 3px rgba(176,125,255,0.2)' }} />
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: '#1A1A1A' }}>
                    Available
                  </span>
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-body)', fontSize: '13px', color: '#9CA3AF', lineHeight: 1.5 }}>
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
              <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                <img
                  src={githubAvatar}
                  alt={`${githubUsername} on GitHub`}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.08)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-3px',
                    right: '-3px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#1A1A1A',
                    border: '2px solid #1A1A1A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
              </div>
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
