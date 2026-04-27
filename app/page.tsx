"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Sparkles,
  Heart,
  ArrowDown,
  Send,
  ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Animated text reveal component
function TextReveal({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

// Split text animation - letter by letter
function SplitText({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <span ref={ref} className={className}>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + i * 0.03,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

// Magnetic button effect
function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.3
    const y = (clientY - top - height / 2) * 0.3
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Horizontal marquee
function Marquee({ children, speed = 30, direction = "left" }: { children: React.ReactNode; speed?: number; direction?: "left" | "right" }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

// Sparkle decoration component
function SparkleDecoration({ className }: { className?: string }) {
  return (
    <Sparkles className={`text-primary/40 ${className}`} />
  )
}

// Floating blob decoration with parallax
function FloatingBlob({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  )
}

// Cursor follower
function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary/30 pointer-events-none z-[100] mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isHovering ? 3 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

// Navigation
function Navigation() {
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

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"]

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
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm relative group transition-colors px-4 py-2 rounded-full ${
                  activeSection === item.toLowerCase() 
                    ? "text-white" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Pill-style background highlight */}
                <span className={`absolute inset-0 bg-primary rounded-full transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? "opacity-100" : "opacity-0 group-hover:opacity-20"
                }`} />
                
                <span className="relative z-10">{item}</span>
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

// Hero Section with dramatic animations
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
        style={{ y }}
      />
      
      {/* Background logo for whole section */}
      <motion.img 
        src="/img/icon.png" 
        alt="" 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 w-[120vw] h-[120vh] object-contain opacity-20 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 0.2, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      />
      
      {/* Decorative blobs with parallax */}
      <FloatingBlob className="w-[500px] h-[500px] bg-primary/20 -top-32 -left-32" />
      <FloatingBlob className="w-[400px] h-[400px] bg-secondary/30 top-1/3 -right-20" delay={2} />
      <FloatingBlob className="w-[300px] h-[300px] bg-accent/40 bottom-20 left-1/4" delay={4} />

      <motion.div style={{ opacity }} className="relative z-10 text-left px-6 max-w-5xl mx-auto lg:ml-16 xl:ml-24">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main heading with split text animation */}
        <div className="mb-6 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            Software Engineer
          </motion.p>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 leading-[0.9] relative">
          <div className="overflow-hidden">
            <TextReveal delay={1.2}>Hi, I&apos;m</TextReveal>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-block text-primary"
            >
              Dina Fajardo
            </motion.span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty"
        >
          Crafting elegant digital experiences with code, creativity, and a touch of magic. 
          I transform complex problems into beautiful, intuitive solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Button 
              size="lg" 
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.span>
              </a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-full text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </MagneticButton>
        </motion.div>

      {/* Scroll indicator - only show on first section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity }}
        transition={{ duration: 1, delay: 2.5 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Marquee section
function MarqueeSection() {
  return (
    <div className="py-8 bg-primary/5 overflow-hidden">
      <Marquee speed={40}>
        <span className="flex items-center gap-8 mx-8 text-2xl md:text-3xl font-serif text-foreground/20">
          <span>React</span>
          <Sparkles className="w-4 h-4" />
          <span>Next.js</span>
          <Sparkles className="w-4 h-4" />
          <span>TypeScript</span>
          <Sparkles className="w-4 h-4" />
          <span>Laravel</span>
          <Sparkles className="w-4 h-4" />
          <span>Node.js</span>
          <Sparkles className="w-4 h-4" />
          <span>PostgreSQL</span>
          <Sparkles className="w-4 h-4" />
          <span>Python</span>
          <Sparkles className="w-4 h-4" />
          <span>AWS</span>
          <Sparkles className="w-4 h-4" />
        </span>
      </Marquee>
    </div>
  )
}

// About Section
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 relative">
      <FloatingBlob className="w-72 h-72 bg-secondary/20 -right-20 top-0" delay={1} />
      
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Illustration side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center overflow-hidden relative group">
              <motion.div 
                className="w-3/4 h-3/4 bg-card rounded-2xl shadow-xl flex items-center justify-center relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/img/profile-image.png" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                <SparkleDecoration className="absolute top-4 right-4 w-5 h-5" />
                <SparkleDecoration className="absolute bottom-8 left-4 w-4 h-4" />
              </motion.div>
              
              {/* Decorative ring */}
              <motion.div 
                className="absolute inset-4 border-2 border-primary/20 rounded-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span className="text-muted-foreground">Passionate about clean code</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-sm tracking-widest text-primary uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              About Me
            </motion.p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">
              <SplitText delay={0.4}>A little bit about me</SplitText>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                Hey there! I&apos;m Dina, a full-stack software engineer with 10+ years of experience building web apps that are fast, scalable, and actually enjoyable to use.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                I work across the stack—crafting clean, responsive frontends with React and Vue, and solid backends with Node.js, PHP, Ruby on Rails, and Python. I also work with REST APIs, MySQL/PostgreSQL, and deploy using AWS and Docker. I enjoy improving performance, scalability, and turning ideas into reliable products with teams.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                When I&apos;m not coding, you’ll probably find me doing crochet or getting lost in a good book. I believe the best software comes from a mix of technical excellence and genuine care for the user experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                I&apos;m always excited to connect with fellow developers and collaborate on 
                meaningful projects. Let&apos;s build something beautiful together!
              </motion.p>
            </div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              {[
                { number: "10+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "10+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <motion.p 
                    className="font-serif text-3xl md:text-4xl text-primary mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
const skills = [
  {
    category: "Languages & Frameworks",
    image: "/img/skills/skill-01.png",
    items: ["Node.js", "PHP (Laravel)", "Ruby on Rails", "Python", "React.js", "Vue.js", "JavaScript (ES6+)", "HTML5, CSS3, jQuery"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Databases",
    image: "/img/skills/skill-02.png",
    items: ["MySQL", "PostgreSQL"],
    color: "bg-secondary/30 text-secondary-foreground",
  },
  {
    category: "Cloud & Tools",
    image: "/img/skills/skill-03.png",
    items: ["AWS (RDS, S3, Lambda)", "Docker", "RESTful APIs", "WordPress", "Adobe XD"],
    color: "bg-accent text-accent-foreground",
  },
  {
    category: "Other",
    image: "/img/skills/skill-04.png",
    items: ["Agile/Scrum", "CI/CD", "System Deployment", "Teaching & Mentorship"],
    color: "bg-primary/15 text-primary",
  },
]

function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      <FloatingBlob className="w-80 h-80 bg-primary/10 left-0 top-1/4" delay={2} />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-primary uppercase mb-4">My Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            <SplitText>Skills & Technologies</SplitText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <CardContent className="p-6 relative">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-5 overflow-hidden"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={skill.image} 
                      alt={skill.category}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </motion.div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-muted text-muted-foreground font-normal text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
const projects = [
  {
    title: "Waybilling and Logistics",
    description: "Designed and developed a system for managing waybills, shipment tracking, and logistics coordination to improve delivery accuracy and operational efficiency.",
    tags: ["PHP", "MySQL", "JavaScript"],
    image: "/img/projects/project-01.png",
    link: "#",
    color: "from-blue-100 to-indigo-100",
  },
  {
    title: "Job Searching Site",
    description: "Built and maintained a job search platform for labor, manufacturing, and building management, featuring nationwide listings, smart filters, and application support for faster hiring.",
    tags: ["Laravel", "Wordpress", "MySQL"],
    image: "/img/projects/project-02.png",
    link: "https://pfs.persol-group.co.jp/",
    color: "from-green-100 to-emerald-100",
  },
  {
    title: "ERP – Procurement & Inventory",
    description: "Developed an ERP module to streamline procurement workflows and inventory management, improving stock visibility and reducing manual processing.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/img/projects/project-03.png",
    link: "#",
    color: "from-purple-100 to-violet-100",
  },
  {
    title: "AI EV Charging Spots Suggestion App",
    description: "Created an AI-powered application that recommends optimal EV charging locations based on user location and EV battery percentage.",
    tags: ["Python", "Laravel", "Flutter", "PostgreSQL"],
    image: "/img/projects/project-04.png",
    link: "#",
    color: "from-amber-100 to-orange-100",
  },
]

function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 px-6 relative">
      <FloatingBlob className="w-96 h-96 bg-secondary/20 -right-32 top-1/3" delay={3} />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-primary uppercase mb-4">My Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            <SplitText>Featured Projects</SplitText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="group h-full bg-card border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-700 relative">
                <motion.div
                  className="aspect-video relative overflow-hidden bg-muted"
                  animate={{ scale: hoveredIndex === index ? 1.02 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ 
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Animated overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* View project button - only show if link is a valid URL */}
                  {project.link && project.link !== "#" && project.link.startsWith("http") && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button 
                        size="sm" 
                        className="rounded-full bg-card/90 text-foreground hover:bg-card"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                          <ArrowUpRight className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl font-medium text-foreground">{project.title}</h3>
                    <motion.a 
                      href={project.link}
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="border-primary/30 text-primary text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section
const experiences = [
  {
    role: "Software Engineer",
    company: "Cody Web Development Inc.",
    period: "2021 - Present",
    description: "Built and maintained backend services with reliable server-side logic and external integrations. Designed REST APIs for scalable applications and contributed as a full-stack developer across both frontend and backend, including projects involving AI and ERP systems.",
  },
  {
    role: "IT Teacher",
    company: "Kredo IT Abroad Inc.",
    period: "2020 - 2022",
    description: "Delivered IT classes aligned with international curriculum standards. Prepared course materials, conducted lectures, and evaluated student performance.",
  },
  {
    role: "Web Developer",
    company: "Daily Overland Freight Forwarders",
    period: "2016 - 2021",
    description: "Built and maintained internal systems, including logistics platforms, improving user efficiency and reducing processing time. Optimized database performance, cutting response time by up to 33%, and provided deployment support, end-user training, and technical assistance.",
  },
]

function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      <FloatingBlob className="w-72 h-72 bg-accent/20 left-0 bottom-0" delay={1.5} />
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-primary uppercase mb-4">My Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            <SplitText>Experience</SplitText>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{ originY: 0 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-16 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Animated timeline dot */}
              <motion.div 
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 -translate-y-1/2 top-2 z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.2, type: "spring" }}
              />
              
              {/* Pulse effect */}
              <motion.div 
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary/30 md:-translate-x-1/2 -translate-y-1/2 top-2"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              />
              
              <div className={`${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <Card className="bg-card border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardContent className="p-6 relative">
                    <p className="text-sm text-primary font-medium mb-2">{exp.period}</p>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-1">{exp.role}</h3>
                    <p className="text-sm text-primary/70 mb-4">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <MagneticButton>
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-3 transition-all duration-300 group"
                asChild
              >
                <a href="mailto:dina.mar.fajardo@gmail.com" className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send me an email
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

// Footer
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          &copy; 2026 Dina Fajardo. Crafted with love
        </motion.p>
        <motion.p 
          className="text-sm text-muted-foreground flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> using Next.js
        </motion.p>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorFollower />
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
