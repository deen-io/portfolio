'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Send, Download } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { SplitText } from "@/components/animations/TextAnimations"
import { FloatingBlob, SparkleDecoration, MagneticButton } from "@/components/animations/InteractiveElements"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { icon: Github, href: "https://github.com/deen-io", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dina-fajardo/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dina.mar.fajardo@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <FloatingBlob className="w-80 h-80 bg-primary/15 -right-20 top-0" delay={2.5} />
      <FloatingBlob className="w-64 h-64 bg-secondary/20 -left-10 bottom-10" delay={3.5} />
      
      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <SparkleDecoration className="w-8 h-8 mx-auto mb-6" />
          </motion.div>
          <p className="text-sm tracking-widest text-primary uppercase mb-4">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-8">
            <SplitText>Let&apos;s Create Together</SplitText>
          </h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            I&apos;m always excited to connect with fellow creators and explore new opportunities. 
            Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <MagneticButton>
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-3 transition-all duration-300 group"
                asChild
              >
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send me an email
                </a>
              </Button>
            </MagneticButton>
            
            <MagneticButton>
              <Button 
                variant="outline"
                size="lg" 
                className="rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary group"
                asChild
              >
                <a 
                  href="/files/Fajardo, Dina CV.pdf" 
                  download="Dina_Fajardo_CV.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, i) => (
              <MagneticButton key={social.label}>
                <motion.a
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}