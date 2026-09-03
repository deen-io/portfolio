'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Navigation.module.scss'

const NAV_ITEMS = [
  { id: 'opening', label: 'Intro', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'skills', label: 'Skills', href: '/about#skills' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'experience', label: 'Experience', href: '/experience' },
]

export function Navigation() {
  const pathname = usePathname()
  const [active, setActive] = useState('opening')

  useEffect(() => {
    // Scroll-spy only applies within the home page — "about", "projects" and
    // "experience" are now separate routes, so their active state is derived
    // from the current pathname instead (see routeActive below).
    if (pathname !== '/') return
    const el = document.getElementById('opening')
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive('opening') },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [pathname])

  const routeActive = (id: string) => {
    if (id === 'about') return pathname.startsWith('/about')
    if (id === 'projects') return pathname.startsWith('/projects')
    if (id === 'experience') return pathname.startsWith('/experience')
    return pathname === '/' && active === id
  }

  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map(({ id, label, href }) => {
        const isActive = routeActive(id)
        return (
          <Link key={id} href={href} title={label} className={styles.item}>
            <span className={`${styles.label} ${isActive ? styles.active : ''}`}>{label}</span>
            <span className={`${styles.dash} ${isActive ? styles.active : ''}`} />
          </Link>
        )
      })}
    </nav>
  )
}
