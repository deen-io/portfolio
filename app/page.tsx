"use client"

import { Navigation } from "@/components/layout/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { MarqueeSection } from "@/components/sections/MarqueeSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Portfolio() {
  return (
    <div className="font-body" style={{ background: '#F8F7FB' }}>
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <MarqueeSection reverse />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
