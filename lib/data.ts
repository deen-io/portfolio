// Portfolio Data
export const personalInfo = {
  name: "Dina Fajardo",
  role: "Software Engineer",
  email: "dina.mar.fajardo@gmail.com",
  description: "Full-Stack Developer building ERP systems, logistics platforms, and scalable business solutions.",
  aboutText: [
    "Hey there! I'm Dina, a full-stack software engineer with 10+ years of experience building web apps that are fast, scalable, and actually enjoyable to use.",
    "I work across the stack—crafting clean, responsive frontends with React and Vue, and solid backends with Node.js, PHP, Ruby on Rails, and Python. I also work with REST APIs, MySQL/PostgreSQL, and deploy using AWS and Docker. I enjoy improving performance, scalability, and turning ideas into reliable products with teams.",
    "When I'm not coding, you'll probably find me doing crochet or getting lost in a good book. I believe the best software comes from a mix of technical excellence and genuine care for the user experience.",
    "I'm always excited to connect with fellow developers and collaborate on meaningful projects. Let's build something beautiful together!"
  ],
  stats: [
    { number: "10+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
  ]
};

export const skills = [
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
];

export const projects = [
  {
    title: "Waybilling and Logistics",
    description: "Developed a logistics management system for waybills, shipment tracking, and coordination, improving delivery accuracy, reducing manual errors, and increasing operational efficiency across shipping workflows.",
    tags: ["PHP", "MySQL", "JavaScript"],
    image: "/img/projects/project-01.png",
    snapshots: [
     
    ],
    demoLink: null,
    githubLink: null,
    color: "from-blue-100 to-indigo-100",
  },
  {
    title: "Job Searching Site",
    description: "Built and maintained a nationwide job platform for labor, manufacturing, and building management, enabling faster candidate matching, improved job visibility, and streamlined application processing for employers and applicants.",
    tags: ["Laravel", "Wordpress", "MySQL"],
    image: "/img/projects/project-02.png",
    snapshots: [],
    demoLink: "https://pfs.persol-group.co.jp/",
    githubLink: null,
    color: "from-green-100 to-emerald-100",
  },
  {
    title: "ERP – Procurement & Inventory",
    description: "Developed an ERP module to optimize procurement and inventory workflows, enhancing stock visibility, reducing processing time, and improving operational decision-making through centralized data management.",
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
    title: "AI EV Charging Spots Suggestion App",
    description: "Built an AI-driven application that recommends optimal EV charging stations based on location and battery level, improving driver convenience, reducing range anxiety, and optimizing charging efficiency.",
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