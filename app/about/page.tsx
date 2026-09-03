'use client'

import { Navigation } from '@/components/layout/Navigation'
import { BackHomeLink } from '@/components/layout/BackHomeLink'
import { personalInfo, socialLinks } from '@/lib/data'
import { Reveal } from '@/components/animations/Reveal'
import { RingCard } from '@/components/animations/RingCard'
import styles from './page.module.scss'

const BIO_PILLS = ['Node.js', 'Laravel', 'React', 'Vue.js', 'AWS', 'PostgreSQL']
const githubLink = socialLinks.find((s) => s.label === 'GitHub')
const githubUsername = githubLink?.href.split('/').filter(Boolean).pop()
const githubAvatar = githubUsername ? `https://github.com/${githubUsername}.png?size=96` : undefined

export default function AboutPage() {
  return (
    <div className={`font-body ${styles.page}`}>
      <Navigation />
      <BackHomeLink />

      <section id="about" className={`section-pad-x ${styles.section}`}>
        <div className={styles.container}>

          {/* Chapter label */}
          <Reveal>
            <div className={styles.chapterRow}>
              <span className={styles.chapterLabel}>01 — About</span>
              <div className={styles.chapterRule} />
            </div>
          </Reveal>

          {/* Bento grid */}
          <div className="bento">
            {/* Portrait card — tall, spans 2 rows */}
            <Reveal delay={0} className="bento-portrait">
              <div className={`glass ${styles.portraitCard}`}>
                <img
                  src="/img/profile-image.png"
                  alt={`${personalInfo.name} — ${personalInfo.role}`}
                  className={styles.portraitImg}
                />
                {/* Overlay label */}
                <div className={styles.portraitOverlay}>
                  <div className={styles.portraitName}>{personalInfo.name}</div>
                  <div className={styles.portraitLocation}>{personalInfo.location}</div>
                </div>
              </div>
            </Reveal>

            {/* Bio card — wide */}
            <Reveal id="skills" delay={60} className={`bento-bio ${styles.skillsAnchor}`}>
              <div className={`glass ${styles.bioCard}`}>
                <div className={styles.bioHeadline}>
                  {"I build systems"} <em className={styles.emphasis}>{"that quietly just work"}</em>{" — for the people running the business."}
                </div>
                <p className={styles.bioText}>
                  {personalInfo.bio}
                </p>

                <div className={styles.bioPills}>
                  {BIO_PILLS.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Location card */}
            <Reveal delay={100}>
              <div className={`glass ${styles.locationCard}`}>
                <div className={styles.locationLabel}>Based in</div>
                <div className={styles.locationTitle}>
                  {personalInfo.location.split(',').map((line, i) => (
                    <span key={i}>{line.trim()}{i === 0 ? <br /> : null}</span>
                  ))}
                </div>
                <div className={styles.locationSub}>Open to remote</div>

                {/* Map preview */}
                <div aria-hidden="true" className={styles.mapPreview}>
                  <svg width="100%" height="100%" viewBox="0 0 220 110" preserveAspectRatio="none" className={styles.mapSvg}>
                    <defs>
                      <pattern id="mapDots" width="14" height="14" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="rgba(176,125,255,0.4)" />
                      </pattern>
                    </defs>
                    <rect width="220" height="110" fill="url(#mapDots)" />
                    <path d="M -10 75 C 40 45, 80 95, 130 60 S 200 25, 240 50" stroke="rgba(176,125,255,0.45)" strokeWidth="2" fill="none" />
                    <path d="M 30 -10 C 50 30, 35 65, 65 120" stroke="rgba(176,125,255,0.3)" strokeWidth="1.5" fill="none" />
                  </svg>

                  <div className={styles.mapPinWrap}>
                    <span className={`animate-ping-pin ${styles.mapPinPing}`} />
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#8B3DFF" className={styles.mapPinIcon}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Rotating ring card */}
            <Reveal delay={120} className="bento-ring">
              <div className={styles.ringCard}>
                {/* Glow highlights */}
                <div aria-hidden="true" className={styles.ringGlowTop} />
                <div aria-hidden="true" className={styles.ringGlowBottom} />

                {/* Dot texture */}
                <svg aria-hidden="true" width="100%" height="100%" className={styles.ringTexture}>
                  <defs>
                    <pattern id="ringTexture" width="14" height="14" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ringTexture)" />
                </svg>

                <RingCard text="Available for new opportunities · Full-Stack Engineer · " size={148} textColor="#FFFFFF" glass={false}>
                  <div className={styles.ringPortraitFrame}>
                    <img
                      src="/img/profile-image-02.png"
                      alt={personalInfo.name}
                      className={styles.ringPortraitImg}
                    />
                  </div>
                </RingCard>
              </div>
            </Reveal>

            {/* Availability card */}
            <Reveal delay={140} className="bento-status">
              <div className={`glass ${styles.statusCard}`}>
                <div aria-hidden="true" className={styles.statusBgGlow} />
                <svg aria-hidden="true" width="100%" height="100%" className={styles.statusDots}>
                  <defs>
                    <pattern id="statusDots" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="rgba(176,125,255,0.3)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#statusDots)" />
                </svg>

                <div className={styles.statusHeader}>
                  <div className={styles.statusLabel}>Status</div>
                  <div className={styles.statusRow}>
                    <span className={styles.statusDotWrap}>
                      <span className={`animate-ping-pin ${styles.statusDotPing}`} />
                      <span className={styles.statusDot} />
                    </span>
                    <span className={styles.statusText}>Available</span>
                  </div>
                </div>
                <div className={styles.statusFooter}>
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
                className={styles.githubCard}
              >
                <div className={styles.githubAvatarWrap}>
                  <img
                    src={githubAvatar}
                    alt={`${githubUsername} on GitHub`}
                    className={styles.githubAvatarImg}
                  />
                  <span className={styles.githubBadge}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <div className={styles.githubTitle}>GitHub</div>
                  <div className={styles.githubSubtitle}>View Profile →</div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
