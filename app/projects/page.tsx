'use client'

import { Navigation } from '@/components/layout/Navigation'
import { BackHomeLink } from '@/components/layout/BackHomeLink'
import { projects } from '@/lib/data'
import { Reveal, useReveal } from '@/components/animations/Reveal'
import styles from './page.module.scss'

const ACCENTS = ['#9B87C4', '#C97FA6']

function ProjectStrip({ p, index }: { p: (typeof projects)[0]; index: number }) {
  const { ref, visible } = useReveal()
  const flip = index % 2 === 1
  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <div
      ref={ref}
      className={`${styles.strip} ${visible ? styles.visible : ''}`}
    >
      {/* Image side */}
      <div className={`${styles.imageSide} ${flip ? styles.flip : ''}`}>
        <img src={p.image} alt={p.title} className={styles.projectImage} />
        {/* index overlay */}
        <div className={styles.indexOverlay}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Text side */}
      <div className={`${styles.textSide} ${flip ? styles.flip : ''}`}>
        <div className={styles.category}>{p.category}</div>

        <h2 className={styles.title}>{p.title}</h2>

        <div className={styles.accentRule} style={{ '--accent': accent } as React.CSSProperties} />

        <p className={styles.summary}>{p.summary}</p>

        <div className={styles.highlight} style={{ '--accent': accent } as React.CSSProperties}>
          {p.highlight}
        </div>

        <div className={styles.tags}>
          {p.tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        {p.demoLink && (
          <a href={p.demoLink} target="_blank" rel="noopener noreferrer" className={`cta-outline ${styles.demoLink}`}>
            View Live Demo
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className={`font-body ${styles.page}`}>
      <Navigation />
      <BackHomeLink />

      <section id="projects" className={styles.section}>
        <div className={`section-pad-x ${styles.header}`}>
          <Reveal>
            <div className={styles.headerRow}>
              <div className={styles.headerRule} />
            </div>
            <h2 className={styles.headerTitle}>
              {"Things I've"}{' '}
              <em className={styles.emphasis}>shipped.</em>
            </h2>
          </Reveal>
        </div>

        {projects.map((p, index) => (
          <ProjectStrip key={p.title} p={p} index={index} />
        ))}
      </section>
    </div>
  )
}


