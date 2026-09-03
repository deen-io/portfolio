'use client'

import { useState, type PointerEvent } from 'react'
import Link from 'next/link'
import { personalInfo, socialLinks } from '@/lib/data'
import { RingCard } from '@/components/animations/RingCard'
import { DotGridBackground } from '@/components/animations/DotGridBackground'
import styles from './HeroSection.module.scss'

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
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top })
  }

  return (
    <section
      id="opening"
      className={`hero-shell ${styles.section}`}
      onPointerEnter={() => setHovering(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setHovering(false)}
    >
      {/* Interactive dot-grid background */}
      <DotGridBackground cursor={cursor} hovering={hovering} />

      {/* Background blobs */}
      <div aria-hidden="true" className={styles.blobTopLeft} />
      <div aria-hidden="true" className={styles.blobBottomRight} />

      {/* Left rail — name */}
      <div className="hero-name-rail">
        <span className="hero-name-text">{firstName}</span>
      </div>

      <div className={`hero-rail ${styles.socialRail}`}>
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={s.label}
            className={styles.socialLink}
          >
            {ICONS[s.icon]}
          </a>
        ))}
      </div>

      {/* Main grid */}
      <div className={`hero-grid ${styles.grid}`}>
        {/* Text column */}
        <div className={styles.textColumn}>
          <h1 className={styles.name}>
            {personalInfo.name.split(' ').slice(1).join(' ')}
          </h1>

          <div className={styles.role}>{personalInfo.role}</div>
          <div className={styles.roleRule} />

          <p className={styles.paragraph}>
            {"I build systems"} <em className={styles.emphasis}>{"that quietly just work"}</em>{" — for the people running the business."}
          </p>
          <p className={styles.paragraph}>
            {personalInfo.bio}
          </p>

          <div className={styles.ctaRow}>
            <Link href="/projects" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
              View My Work
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>

            <a
              href="/files/Fajardo, Dina CV.pdf"
              download="Dina_Fajardo_CV.pdf"
              className={`${styles.ctaButton} ${styles.ctaSecondary}`}
            >
              Download Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

          <div className={styles.statsRow}>
            {personalInfo.stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait column */}
        <div className={styles.portraitColumn}>
          {/* Soft blob behind the portrait */}
          <div aria-hidden="true" className={styles.portraitBlob} />

          <RingCard text="FULL-STACK SOFTWARE ENGINEER · PROBLEM SOLVER · CONTINOUS LEARNER · " size={360} glass={false}>
            <div className={`glass ${styles.portraitFrame}`}>
              <img
                src="/img/profile-image-02.png"
                alt={personalInfo.name}
                className={styles.portraitImage}
              />
            </div>
          </RingCard>
        </div>
      </div>
    </section>
  )
}
