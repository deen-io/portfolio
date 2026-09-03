import Link from 'next/link'
import styles from './BackHomeLink.module.scss'

export function BackHomeLink() {
  return (
    <div className={`section-pad-x ${styles.wrap}`}>
      <Link href="/" className={styles.link}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5m0 0 7 7m-7-7 7-7" /></svg>
        Home
      </Link>
    </div>
  )
}
