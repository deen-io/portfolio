'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navigation } from '@/lib/data'
import { MagneticButton } from '@/components/animations/InteractiveElements'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ["about", "skills", "projects", "experience", "contact"]
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/60 backdrop-blur-xl shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <a
                href={item.href}
                className={`text-sm relative group transition-colors px-4 py-2 rounded-full ${
                  activeSection === item.name.toLowerCase() 
                    ? "text-white" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Pill-style background highlight */}
                <span className={`absolute inset-0 bg-primary rounded-full transition-all duration-300 ${
                  activeSection === item.name.toLowerCase() ? "opacity-100" : "opacity-0 group-hover:opacity-20"
                }`} />
                
                <span className="relative z-10">{item.name}</span>
              </a>
            </motion.div>
          ))}
        </div>
        <MagneticButton>
          <a href="#contact" className="block transition-transform duration-300 hover:scale-105">
            <img 
              src="/img/say-hello.png" 
              alt="Say Hello" 
              className="h-10 w-auto object-contain"
            />
          </a>
        </MagneticButton>
      </div>
    </motion.nav>
  )
}