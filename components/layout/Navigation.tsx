'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navigation } from '@/lib/data'
import { FadeIn } from '@/components/animations/MotionComponents'
import { MagneticButton } from '@/components/animations/InteractiveElements'
import styles from './Navigation.module.css'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ["about", "skills", "projects", "experience", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`${styles.navigation} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.navItems}>
          {navigation.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <a
                href={item.href}
                className={`${styles.navLink} ${
                  activeSection === item.name.toLowerCase() 
                    ? styles.active 
                    : ''
                }`}
              >
                <span className={styles.highlight} />
                <span className={styles.text}>{item.name}</span>
              </a>
            </motion.div>
          ))}
        </div>
        <MagneticButton>
          <a href="#contact" className={styles.sayHello}>
            <img 
              src="/img/say-hello.png" 
              alt="Say Hello" 
              className={styles.sayHelloImage}
            />
          </a>
        </MagneticButton>
      </div>
    </motion.nav>
  )
}