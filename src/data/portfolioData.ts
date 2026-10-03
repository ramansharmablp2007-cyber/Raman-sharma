import { Project, EducationItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Raman Sharma',
  role: 'Web Developer & AI Enthusiast',
  tagline: 'DEV • AI',
  status: 'Available for Web Development & AI Roles',
  email: 'ramansharmablp2007@gmail.com',
  github: 'https://github.com/ramansharmablp2007-cyber',
  linkedin: 'https://www.linkedin.com/in/raman-sharma-27406543a',
  location: 'Himachal Pradesh, India',
  educationStatus: 'BCA Expected 2027',
  focus: 'Practical Code & AI',
  photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmiOFMxd4KFlP9Q5TpLRBnSKllWtMEYsYet8NLHxdTNJpwueQA-fOMQMzYtJGOfhCdWw6uMolH8_v7Dy4qd8pX9KfrzOgbpu9U1QbcXiUDOjLFUFrlUSocl5eH_PMsbjgl74NEh7AVsCXGgSmZQptXp6ZxA-3dKa2bU2tJtTZB7RpRVlzNYajKEu7SvBj1Sy6Jfyy6EyiiK2GAORienSKKTdc8Mhz9MuiS7rG7xMTq3_hn1M66exLWAHcHE2etwmQ9deg',
  bio: [
    'I am Raman Sharma, a dedicated Bachelor of Computer Applications (BCA) 3rd-year student passionate about building clean, performant, and intuitive web solutions. My academic journey and hands-on explorations focus on full-stack web development, ASP.NET framework capabilities, and structured relational database architecture.',
    'Beyond traditional software development, I actively immerse myself in the modern AI ecosystem. I experiment with generative AI tools, prompt engineering methodologies, and intelligent workflow optimization to accelerate practical problem-solving and craft smarter software. I value clean code, strong information design, and continuous technical growth.'
  ]
};

export const HIGHLIGHTS = [
  {
    id: 'score',
    badge: '69%',
    title: '69.80%',
    subtitle: 'Senior Secondary Score',
    colorTheme: 'purple',
    badgeStyle: 'bg-purple-500/10 border-purple-500/20 text-purple-400'
  },
  {
    id: 'tech',
    badge: '4+',
    title: 'Core Technologies',
    subtitle: 'HTML • CSS • JS • C# / ASP.NET',
    colorTheme: 'blue',
    badgeStyle: 'bg-blue-500/10 border-blue-500/20 text-blue-400'
  },
  {
    id: 'ai',
    badge: '⚡',
    title: 'AI Powered',
    subtitle: 'Generative AI & Prompt Engineering',
    colorTheme: 'emerald',
    badgeStyle: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Development',
    icon: '🌐',
    description: 'Crafting responsive, accessible, and user-centric web frontends.',
    color: 'purple',
    skills: [
      'HTML5 & CSS3',
      'Responsive Web Design',
      'JavaScript (ES6+)',
      'UI Development'
    ]
  },
  {
    title: 'Backend & Database',
    icon: '⚙️',
    description: 'Building structured server logic and relational database schemas.',
    color: 'blue',
    skills: [
      'C# Language',
      'ASP.NET Web Framework',
      'SQL / MySQL',
      'Database Management'
    ]
  },
  {
    title: 'AI & Innovation',
    icon: '🧠',
    description: 'Leveraging generative AI and prompt design to supercharge workflows.',
    color: 'emerald',
    skills: [
      'Generative AI Tools',
      'AI Image & Video Generation',
      'Prompt Engineering',
      'AI-powered Research',
      'Workflow / GRAPH Prompt Optimization'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'bca',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Swami Vivekananda Government College, Ghumarwin',
    badgeText: 'Currently Pursuing • 3rd Year',
    badgeStyle: 'purple',
    periodOrScore: '2024 – Present',
    subtext: 'Affiliated Institution',
    isScore: false
  },
  {
    id: 'senior-sec',
    title: 'Senior Secondary (+2)',
    institution: 'Swami Vivekananda Government College / School Stream',
    badgeText: 'Completed',
    badgeStyle: 'blue',
    periodOrScore: '69.80%',
    subtext: 'Class of 2024',
    isScore: true
  },
  {
    id: 'matric',
    title: 'Matriculation (10th)',
    institution: 'General Secondary Education Curriculum',
    badgeText: 'Completed',
    badgeStyle: 'zinc',
    periodOrScore: '70%',
    subtext: 'Class of 2022',
    isScore: true
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aspnet-apps',
    title: 'ASP.NET Web Applications',
    category: 'Backend & Full-Stack',
    categoryTag: 'BACKEND & FULL-STACK',
    colorTheme: 'purple',
    description: 'Full-featured web applications built with C# and ASP.NET. Implements MVC architectural patterns, user session state, database interactions via SQL queries, and robust server-side processing for reliable web functionality.',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'HTML/CSS'],
    githubUrl: 'https://github.com/ramansharmablp2007-cyber',
    detailedOverview: 'Built around the Model-View-Controller pattern, these applications feature secure data validation, role-based authorization flows, and optimized ADO.NET / Entity Framework database queries. Designed to handle business data logic seamlessly.',
    features: [
      'Model-View-Controller (MVC) server architecture',
      'User session state & authentication management',
      'Relational SQL Server database querying and transaction handling',
      'Responsive server-rendered views with styled HTML/CSS templates'
    ],
    architecture: ['C# .NET runtime', 'SQL Server Database', 'Razor View Engine', 'IIS Express / Kestrel']
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio / Resume Website',
    category: 'Frontend & Design',
    categoryTag: 'FRONTEND & DESIGN',
    colorTheme: 'blue',
    description: 'A high-performance personal developer portfolio built with clean components, responsive layout systems, dark aesthetics, subtle glassmorphic textures, and accessible typography showcasing credentials and achievements.',
    technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/ramansharmablp2007-cyber',
    detailedOverview: 'Engineered as a clean Single-Page Application utilizing modern styling, reactive UI primitives, interactive modal previews, seamless anchor smooth scrolling, and mobile responsive drawers.',
    features: [
      'Tailwind CSS design system with subtle dark glassmorphic styling',
      'Subtle ambient glow gradients and floating badge micro-animations',
      'Fast client-side routing, quick contact integration, and modal inspectors',
      'Semantic HTML5 structure with high accessibility and contrast ratio'
    ],
    architecture: ['React 19 + TypeScript', 'Vite Bundler', 'Tailwind CSS', 'Lucide Icons']
  },
  {
    id: 'ai-prompt-tool',
    title: 'AI Prompt Generator / AI Workflow Tool',
    category: 'Generative AI',
    categoryTag: 'GENERATIVE AI',
    colorTheme: 'emerald',
    description: 'An intelligent utility designed to formulate, optimize, and chain generative prompts for text, code, and multimedia synthesis. Incorporates structured templates and context parameters to ensure higher precision in AI outputs.',
    technologies: ['Prompt Engineering', 'LLM Workflows', 'JavaScript'],
    githubUrl: 'https://github.com/ramansharmablp2007-cyber',
    detailedOverview: 'Created to eliminate trial-and-error in generative AI prompts by applying systematic prompting techniques such as persona specification, few-shot examples, chain-of-thought instructions, and output format constraints.',
    features: [
      'Custom prompt construction frameworks (ROLE + GOAL + CONSTRAINTS + OUTPUT)',
      'Prompt templates for coding, debugging, refactoring, and creative generation',
      'Workflow graph chaining for multi-step AI tasks',
      'Pre-formatted export utilities for modern LLMs'
    ],
    architecture: ['Modular Prompt Templates', 'Context Synthesizer', 'Browser LocalStorage', 'Vanilla JS Engine']
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis Projects',
    category: 'Database & Analytics',
    categoryTag: 'DATABASE & ANALYTICS',
    colorTheme: 'amber',
    description: 'Exploratory dataset investigations, SQL query formulations, and practical data transformations. Focused on extracting actionable insights, visualizing trends, and ensuring database integrity across diverse data schemas.',
    technologies: ['SQL', 'MySQL', 'Data Modeling', 'Analytical Queries'],
    githubUrl: 'https://github.com/ramansharmablp2007-cyber',
    detailedOverview: 'Comprehensive analytical exercises demonstrating relational schema design, complex multi-table joins, subqueries, group aggregates, and data normalization across real-world datasets.',
    features: [
      'Advanced SQL queries with JOINs, GROUP BY, and WINDOW functions',
      'Schema design & Entity-Relationship (ER) normalization (1NF to 3NF)',
      'Data cleaning, transformation, and aggregation pipelines',
      'Business intelligence metrics extraction and trend interpretation'
    ],
    architecture: ['MySQL Server / SQLite', 'Relational Schemas', 'Structured Query Scripts', 'Reporting Dashboards']
  }
];
