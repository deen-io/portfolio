'use client'

import { useState } from 'react'
import { personalInfo, socialLinks } from '@/lib/data'
import { Reveal } from '@/components/animations/Reveal'

const githubLink = socialLinks.find((s) => s.label === 'GitHub')
const linkedinLink = socialLinks.find((s) => s.label === 'LinkedIn')

export function ContactSection() {
  const [form, setForm] = useState({ email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.email}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.email}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section
      id="contact"
      style={{
        background: '#1A1A1A',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '80px',
      }}
    >
      {/* Ghost background text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '-20px',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(100px, 18vw, 260px)',
          fontWeight: 200,
          fontStyle: 'italic',
          color: 'rgba(176,125,255,0.07)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        hello
      </div>

      <div className="section-pad-x" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 48px', position: 'relative', zIndex: 1 }}>
        <div className="contact-grid">

          {/* Left — editorial invitation */}
          <Reveal>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: '#B07DFF', textTransform: 'uppercase', marginBottom: '32px' }}>
              04 — Contact
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 5vw, 72px)',
                fontWeight: 200,
                color: 'white',
                lineHeight: 1.05,
                marginBottom: '28px',
              }}
            >
              {"Let's make"}<br />
              {"something worth"}<br />
              <em style={{ color: '#B07DFF' }}>{"remembering."}</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.45)',
                maxWidth: '380px',
                marginBottom: '40px',
              }}
            >
              Open to full-time roles, contract work, and selective collaborations.
              I&apos;d love to hear about what you&apos;re building.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'white',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  paddingBottom: '2px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B07DFF')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
              >
                {personalInfo.email}
              </a>
              <a
                href={linkedinLink?.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B07DFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                LinkedIn →
              </a>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={100}>
            {sent ? (
              <div
                style={{
                  background: 'rgba(176,125,255,0.1)',
                  border: '1px solid rgba(176,125,255,0.2)',
                  borderRadius: '24px',
                  padding: '48px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '28px', color: 'white', fontWeight: 300, marginBottom: '12px' }}>
                  Opening your email app…
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
                  Send it from there and {"I'll"} get back to you shortly.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { key: 'email', label: 'Email', type: 'email', ph: 'you@company.com' },
                  { key: 'message', label: 'Message', type: 'textarea', ph: 'Tell me about your project...' },
                ].map(({ key, label, type, ph }) => (
                  <div key={key}>
                    <label
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        color: 'rgba(255,255,255,0.3)',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '10px',
                      }}
                    >
                      {label}
                    </label>
                    {type === 'textarea' ? (
                      <textarea
                        required
                        rows={5}
                        placeholder={ph}
                        value={(form as Record<string, string>)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '14px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: 'white',
                          outline: 'none',
                          resize: 'vertical',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(176,125,255,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    ) : (
                      <input
                        type={type}
                        required
                        placeholder={ph}
                        value={(form as Record<string, string>)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '14px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: 'white',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(176,125,255,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    )}
                  </div>
                ))}

                <button type="submit" className="cta-solid" style={{ alignSelf: 'flex-start', marginTop: '4px' }}>
                  Send
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" /></svg>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>

      {/* Colophon footer */}
      <div
        className="section-pad-x"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '24px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '15px', color: 'rgba(255,255,255,0.2)', fontWeight: 300 }}>
          {personalInfo.name} © 2026
        </span>
        <div style={{ display: 'flex', gap: '28px' }}>
          {[
            { label: 'GitHub', href: githubLink?.href, external: true },
            { label: 'LinkedIn', href: linkedinLink?.href, external: true },
            { label: 'Resume', href: '/files/Fajardo, Dina CV.pdf', external: false },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              download={l.label === 'Resume' ? 'Dina_Fajardo_CV.pdf' : undefined}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B07DFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
