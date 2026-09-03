"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import styles from "./page.module.scss"

export default function Portfolio() {
  return (
    <div className={`font-body ${styles.page}`}>
      <HeroSection />
    </div>
  )
}
