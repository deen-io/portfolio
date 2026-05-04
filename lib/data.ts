// Portfolio Data
export const personalInfo = {
  name: "Dina Fajardo",
  role: "Software Engineer",
  email: "dina.mar.fajardo@gmail.com",
  description: "Full-Stack Developer building ERP systems, logistics platforms, and scalable business solutions.",
  aboutText: [
    "I’m a full-stack developer focused on building systems that solve operational problems—not just interfaces.",
    "I’ve worked on platforms for logistics, job matching, and internal business tools, helping teams move faster and manage data more efficiently.",
    "I specialize in:",
    "Backend systems (APIs, databases, business logic)",
    "Data-driven applications",
    "End-to-end feature development",
    "My goal is simple: build software that actually improves how businesses operate.",
    ],
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
    items: ["React.js", "Vue.js", "JavaScript (ES6+)", "HTML5, CSS3, jQuery"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Backend",
    image: "/img/skills/skill-02.png",
    items: ["Node.js", "PHP (Laravel)", "Ruby on Rails", "Python", "RESTful APIs"],
    color: "bg-secondary/30 text-secondary-foreground",
  },
  {
    category: "Database",
    image: "/img/skills/skill-03.png",
    items: ["MySQL", "PostgreSQL"],
    color: "bg-accent text-accent-foreground",
  },
  {
    category: "Tools",
    image: "/img/skills/skill-04.png",
    items: ["AWS (RDS, S3, Lambda)", "Docker", "WordPress", "Adobe XD", "Agile/Scrum", "CI/CD"],
    color: "bg-primary/15 text-primary",
  },
];

export const projects = [
  {
    title: "Waybilling & Logistics System",
    description: "**Problem:** Manual tracking of shipments caused delays, errors, and poor visibility.\n\n**Solution:** Developed a centralized system to manage waybills, track deliveries, and coordinate logistics operations in real time.\n\n**Impact:**\n• Improved delivery tracking accuracy\n• Reduced manual processing time\n• Streamlined coordination between teams",
    tags: ["PHP", "MySQL", "JavaScript"],
    image: "/img/projects/project-01.png",
    snapshots: [
     
    ],
    demoLink: null,
    githubLink: null,
    color: "from-blue-100 to-indigo-100",
  },
  {
    title: "Job Searching Platform",
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
    description: "**Problem:** EV drivers faced range anxiety due to uncertainty about nearby charging stations and optimal charging times.\n\n**Solution:** Built an AI-driven mobile application that recommends optimal EV charging stations based on real-time location, battery level, and usage patterns.\n\n**Impact:**\n• Reduced driver range anxiety\n• Improved charging efficiency\n• Enhanced EV adoption convenience",
    tags: ["Python", "Laravel", "Flutter", "PostgreSQL"],
    image: "/img/projects/project-04.png",
    snapshots: [
    ],
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

export const marqueeItems = [
  "React", "Next.js", "TypeScript", "Laravel", "Node.js", "PostgreSQL", "Python", "AWS"
];