'use client'

import { Sparkles } from "lucide-react"
import { marqueeItems } from "@/lib/data"
import { Marquee } from "@/components/animations/InteractiveElements"

export function MarqueeSection() {
  return (
    <div className="py-8 bg-primary/5 overflow-hidden">
      <Marquee speed={40}>
        <span className="flex items-center gap-8 mx-8 text-2xl md:text-3xl font-serif text-foreground/20">
          {marqueeItems.map((item, index) => (
            <span key={`marquee-${index}`} className="flex items-center gap-8">
              <span>{item}</span>
              <Sparkles className="w-4 h-4" />
            </span>
          ))}
        </span>
      </Marquee>
    </div>
  )
}