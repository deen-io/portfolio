// Portfolio Data — sourced from Dina Fajardo's CV
export const personalInfo = {
  name: "Dina Fajardo",
  role: "Senior Full-Stack Software Engineer",
  location: "Cebu City, Philippines",
  email: "dina.mar.fajardo@gmail.com",
  description:
    "I build scalable, reliable systems that solve real business problems — not just interfaces.",
  bio:
    "10+ years building scalable SaaS and enterprise platforms — from logistics and procurement systems to recruitment tools. I specialize in Node.js and Laravel backends, RESTful API design, and end-to-end feature delivery, from architecture through deployment. Currently a Software Engineer at Cody Web Development Inc.",
  stats: [
    { number: "10+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
  ]
};

export const skills = [
  {
    category: "Frontend",
    image: "/img/skills/skill-01.png",
    items: ["React.js", "Vue.js", "JavaScript (ES6+)", "TypeScript", "HTML5, CSS3"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Backend",
    image: "/img/skills/skill-02.png",
    items: ["Node.js", "PHP (Laravel)", "Express", "Ruby on Rails", "REST APIs", "TypeORM"],
    color: "bg-secondary/30 text-secondary-foreground",
  },
  {
    category: "Database",
    image: "/img/skills/skill-03.png",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    color: "bg-accent text-accent-foreground",
  },
  {
    category: "Cloud & DevOps",
    image: "/img/skills/skill-04.png",
    items: ["AWS", "Docker", "Nginx", "CI/CD", "Git", "GitHub Actions"],
    color: "bg-primary/15 text-primary",
  },
];

// Flat, real tech inventory (from CV "Technical Skills") — feeds the marquee ticker
export const techStack = [
  "JavaScript", "TypeScript", "PHP", "Python", "Ruby",
  "React", "Vue.js", "Node.js", "Laravel", "Express", "Ruby on Rails",
  "REST APIs", "MySQL", "PostgreSQL", "MongoDB", "Redis",
  "AWS", "Docker", "Nginx", "CI/CD", "Git", "GitHub Actions",
];

export const projects = [
  {
    title: "Waybilling & Logistics System",
    category: "Logistics Platform",
    highlight: "Improved delivery tracking accuracy",
    summary:
      "Manual shipment tracking caused delays and poor visibility. I built a centralized waybilling and logistics platform with real-time delivery tracking, coordination tools, and reporting — improving tracking accuracy and cutting manual processing time.",
    description: "**Problem:** Manual tracking of shipments caused delays, errors, and poor visibility.\n\n**Solution:** Developed a centralized system to manage waybills, track deliveries, and coordinate logistics operations in real time.\n\n**Impact:**\n• Improved delivery tracking accuracy\n• Reduced manual processing time\n• Streamlined coordination between teams",
    tags: ["PHP", "MySQL", "JavaScript"],
    image: "/img/projects/project-01.png",
    snapshots: [],
    demoLink: null,
    githubLink: null,
    color: "from-blue-100 to-indigo-100",
  },
  {
    title: "Job Searching Platform",
    category: "Recruitment Platform",
    highlight: "Faster candidate-job matching nationwide",
    summary:
      "Manual job matching limited efficiency for employers and job seekers alike. I built and maintained a nationwide recruitment platform with automated matching, custom job postings, and employer workflows for labor, manufacturing, and building management.",
    description: "**Problem:** Manual job matching processes limited efficiency and visibility for both employers and job seekers.\n\n**Solution:** Built and maintained a nationwide job platform for labor, manufacturing, and building management with automated matching algorithms.\n\n**Impact:**\n• Faster candidate-job matching\n• Improved job visibility and reach\n• Streamlined application processing",
    tags: ["Laravel", "Wordpress", "MySQL"],
    image: "/img/projects/project-02.png",
    snapshots: [],
    demoLink: "https://pfs.persol-group.co.jp/",
    githubLink: null,
    color: "from-green-100 to-emerald-100",
  },
  {
    title: "ERP – Procurement & Inventory System",
    category: "Enterprise ERP Module",
    highlight: "Enhanced stock visibility across operations",
    summary:
      "Disconnected procurement and inventory processes led to poor stock visibility. I developed an integrated ERP module centralizing procurement workflows with approval flows and real-time inventory tracking — improving stock visibility and decision-making.",
    description: "**Problem:** Disconnected procurement and inventory processes led to poor stock visibility and slow decision-making.\n\n**Solution:** Developed an integrated ERP module that centralizes procurement workflows and provides real-time inventory management.\n\n**Impact:**\n• Enhanced stock visibility across operations\n• Reduced processing time significantly\n• Improved operational decision-making",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/img/projects/project-03.png",
    snapshots: [
      "/img/projects/project-03-snapshot-1.png",
      "/img/projects/project-03-snapshot-2.png",
      "/img/projects/project-03-snapshot-3.png"
    ],
    demoLink: null,
    githubLink: null,
    color: "from-purple-100 to-violet-100",
  },
  {
    title: "AI EV Charging Spots App",
    category: "AI Mobile App",
    highlight: "Reduced driver range anxiety",
    summary:
      "EV drivers faced range anxiety from uncertainty about nearby charging options. I built an AI-driven app that recommends optimal charging stations based on real-time location, battery level, and usage patterns — reducing range anxiety and improving charging efficiency.",
    description: "**Problem:** EV drivers faced range anxiety due to uncertainty about nearby charging stations and optimal charging times.\n\n**Solution:** Built an AI-driven mobile application that recommends optimal EV charging stations based on real-time location, battery level, and usage patterns.\n\n**Impact:**\n• Reduced driver range anxiety\n• Improved charging efficiency\n• Enhanced EV adoption convenience",
    tags: ["Python", "Laravel", "Flutter", "PostgreSQL"],
    image: "/img/projects/project-04.png",
    snapshots: [],
    demoLink: null,
    githubLink: null,
    color: "from-amber-100 to-orange-100",
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Cody Web Development Inc.",
    period: "2021 - Present",
    description: "Developing scalable backend services with Node.js and Laravel supporting thousands of daily transactions. Designing secure RESTful APIs for enterprise procurement and logistics applications, and delivering end-to-end features across React, Vue.js, and AWS in Agile teams.",
    tags: ["Node.js", "Laravel", "REST APIs", "AWS"],
  },
  {
    role: "IT Teacher (Part-Time)",
    company: "Kredo IT Abroad Inc.",
    period: "2020 - 2022",
    description: "Delivered IT classes aligned with international curriculum standards, prepared course materials, and evaluated student performance — while mentoring students transitioning into tech careers.",
    tags: ["Curriculum Design", "Mentorship", "Training"],
  },
  {
    role: "Web Developer",
    company: "Daily Overland Freight Forwarders",
    period: "2016 - 2021",
    description: "Built and maintained internal management systems for logistics operations, cutting manual processing time by 40%. Improved database performance by up to 33% and led development of four key business modules focused on scalable, maintainable architecture.",
    tags: ["PHP", "MySQL", "Logistics Systems"],
  },
];

export const socialLinks = [
  { icon: "Github", href: "https://github.com/deen-io", label: "GitHub" },
  { icon: "Linkedin", href: "https://www.linkedin.com/in/dina-fajardo/", label: "LinkedIn" },
  { icon: "Mail", href: "mailto:dina.mar.fajardo@gmail.com", label: "Email" },
];

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const marqueeItems = techStack;
