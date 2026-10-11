/**
 * Central portfolio data for DHIBINESH P D — AI Software Engineer.
 * All portfolio facts and content are centralized in this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'DHIBINESH P D',
  displayName: 'Dhibinesh P D',
  firstName: 'DHIBINESH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the start of the opening sequence. */
  originalLabel: 'A DHIBINESH ORIGINAL',
  role: 'AI Software Engineer',
  tagline: ['AI Software Engineer', 'Generative AI', 'LLMs', 'Agentic AI', 'Python'],
  intro:
    'A Computer Science and Engineering graduate (CGPA 8.0) and aspiring AI Software Engineer focused on building practical AI-powered applications, generative AI workflows, and scalable full-stack software with Python, modern web frameworks, and relational databases.',
  location: 'Nagercoil, Tamil Nadu, India',
  email: 'dhibina2@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/dhibinesh-p-d-babb95248/',
    github: 'https://github.com/Dhibinesh-07',
    instagram: 'https://www.instagram.com/dhibin_07_/',
  },
  resumePdf: '/assets/Dhibinesh_Resume.pdf',
  hasResumePdf: false, // Resume coming soon state until official PDF is provided
  portrait: {
    hasCustomPhoto: true,
    initials: 'DP',
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of DHIBINESH P D',
  },
  interests: ['Generative AI & LLMs', 'Agentic AI & AI Agents', 'Prompt Engineering & RAG', 'Full-Stack Software Architecture'],
};

export const education = [
  {
    school: 'Hindusthan Institute of Technology',
    place: 'Coimbatore, Tamil Nadu',
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    period: '2021 – 2025',
    score: 'CGPA 8.0',
  },
];

export const experience = [
  {
    company: 'JClick Solution',
    role: 'Database Intern',
    place: 'Nagercoil, Tamil Nadu, India',
    period: '18 June 2025 – 25 July 2025',
    points: [
      'Acquired practical foundational knowledge in SQL, relational schema structuring, and database query fundamentals.',
      'Explored core concepts of Database Administration (DBA), focusing on table normalization, relational data integrity, and maintenance workflows.',
    ],
  },
  {
    company: 'CodeBind Technologies',
    role: 'Intern',
    place: 'Trichy, Tamil Nadu, India',
    period: '29 June 2023 – 3 July 2023',
    points: [
      'Gained introductory exposure to web technologies, working with HTML, CSS, and JavaScript for foundational user interface design.',
      'Acquired basic understanding of business processes, organizational workflows, and collaborative software practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  liveDemo?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'mindmate-ai',
    title: 'MindMate AI',
    year: '2025',
    genre: 'AI • LangGraph • LLMs • FastAPI',
    logline: 'A production-oriented Personal AI Study Companion with stateful conversational orchestration and decoupled architecture.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'MySQL', 'React', 'TypeScript'],
    build: [
      'Engineered a decoupled architecture featuring an asynchronous FastAPI REST backend, Pydantic v2 schemas, and a responsive React 19 + TypeScript frontend.',
      'Implemented controlled state machine conversation orchestration using LangGraph with node-based execution, error routing, and persistent SQLite graph checkpointing.',
      'Designed secure JWT Bearer authentication with bcrypt password hashing and strict object-level user data isolation to prevent unauthorized cross-user access.',
    ],
    features: [
      'Stateful LangGraph conversation orchestration with error routing',
      'FastAPI asynchronous REST API engine with SQLAlchemy ORM',
      'JWT Bearer authentication with strict user data isolation',
      'Persistent SQLite graph checkpointing & MySQL storage',
      'React + TypeScript UI with real-time markdown code block rendering',
    ],
    metrics: [
      { value: 'Phase 1', label: 'completed & active' },
      { value: '100%', label: 'user data isolation' },
      { value: 'Async', label: 'FastAPI REST engine' },
      { value: 'Stateful', label: 'LangGraph orchestration' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'clothing-ecommerce',
    title: 'Clothing E-Commerce',
    year: '2024',
    genre: 'Full-Stack • Flask • MySQL • E-Commerce',
    logline: 'A full-stack web application featuring product category browsing, persistent shopping cart, and administrative management.',
    stack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    build: [
      'Developed a full-stack e-commerce web application with Python and Flask, connecting to MySQL for relational product, user, and order persistence.',
      'Implemented end-to-end customer shopping workflows: account authentication, category filtering, cart management, and order placement flow.',
      'Constructed an administrative interface for managing product catalog listings, viewing registered accounts, and processing customer orders.',
    ],
    features: [
      'User registration and secure account authentication',
      'Categorized apparel browsing and product search',
      'Interactive shopping cart and order placement workflow',
      'Administrative portal for catalog and order management',
      'Relational MySQL schema with customer and order tracking',
    ],
    metrics: [
      { value: 'Full-Stack', label: 'Flask & MySQL architecture' },
      { value: 'CRUD', label: 'product & order management' },
      { value: '6+', label: 'integrated user workflows' },
      { value: 'Relational', label: 'MySQL database structure' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'agribot',
    title: 'AgriBot',
    year: '2024',
    genre: 'Software • Agricultural Systems',
    logline: 'An intelligent agricultural software system designed to explore automated assistance and decision support for farming operations.',
    stack: ['Python', 'Software Engineering', 'System Design'],
    build: [
      'Conceptualized and structured AgriBot as a domain-focused software system targeting digital assistance for agricultural workflows.',
      'Engineered modular software components structured for future data stream ingestion and analytical module integrations.',
    ],
    features: [
      'Domain-focused architecture for agricultural workflows',
      'Modular software design for analytical integration',
      'Clean separation of application logic and interfaces',
    ],
    metrics: [
      { value: 'Concept', label: 'domain architecture' },
      { value: 'Modular', label: 'extensible software design' },
      { value: 'Python', label: 'core engineering base' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih',
    title: 'Participant',
    org: 'Smart India Hackathon',
    detail: 'Participated at Hindusthan Institute of Technology, collaborating with peers on solving real-world technological challenges.',
    laurel: 'National Hackathon',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Microsoft / LinkedIn Learning', name: 'Learning Microsoft Power BI' },
  { issuer: 'Great Learning', name: 'Artificial Intelligence Fundamentals' },
  { issuer: 'Great Learning', name: 'Database Management System' },
  { issuer: 'Infosys Springboard', name: 'Basics of Machine Learning' },
  { issuer: 'Course Completion', name: 'SQL Course Completion Certificate' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai',
    title: 'AI & Generative AI',
    subtitle: 'Intelligent systems & LLMs',
    skills: [
      { name: 'Generative AI', mono: 'Gen', note: 'Focus' },
      { name: 'LLMs', mono: 'LLM', note: 'Core' },
      { name: 'Prompt Engineering', mono: 'PE' },
      { name: 'RAG', mono: 'RAG' },
      { name: 'LangChain', mono: 'LC' },
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'AI Agents', mono: 'AA' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Languages & problem solving',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sql' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server logic & APIs',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'Node.js', mono: 'No' },
    ],
  },
  {
    id: 'databases',
    title: 'Database',
    subtitle: 'Relational data management',
    skills: [
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Environments',
    subtitle: 'Workspaces & developer tools',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Visual Studio Code', mono: 'Vs' },
      { name: 'Antigravity', mono: 'Ag' },
    ],
  },
];

/**
 * Factual context descriptions explaining what each technology is used for.
 */
export const skillEvidence: Record<string, string[]> = {
  'Generative AI': ['Core principles of synthetic generation', 'Foundational model architectures'],
  LLMs: ['Large language model orchestration', 'FastAPI & LangGraph integrations'],
  'Prompt Engineering': ['Structured prompt patterns', 'System prompts & few-shot examples'],
  RAG: ['Retrieval-Augmented Generation', 'Contextual knowledge retrieval'],
  LangChain: ['Prompt templating', 'Model wrappers & tool chains'],
  'Agentic AI': ['Stateful reasoning workflows', 'Autonomous decision loops'],
  'AI Agents': ['Multi-step task automation', 'Dynamic routing & tool execution'],
  Python: ['Primary language for AI pipelines', 'FastAPI & Flask backends'],
  JavaScript: ['Interactive frontend logic', 'DOM manipulation & async flows'],
  SQL: ['Relational queries & indexing', 'Database administration foundation'],
  HTML: ['Semantic document structuring', 'Accessible web platform standards'],
  CSS: ['Modern responsive layouts', 'Visual styling & transitions'],
  React: ['Component-based UI architecture', 'State management & dynamic views'],
  Flask: ['Lightweight Python web framework', 'RESTful routing & service logic'],
  'Node.js': ['JavaScript runtime environment', 'Server-side execution & tooling'],
  MySQL: ['Relational schema design', 'Persistent table storage & normalization'],
  Git: ['Distributed version control', 'Branch management & code tracking'],
  GitHub: ['Collaborative code hosting', 'Repository management & versioning'],
  'Visual Studio Code': ['Primary development environment', 'Code editing & debugging'],
  Antigravity: ['AI-powered agentic coding IDE', 'Intelligent development workflows'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Academic Foundations',
    period: '2021 – 2025',
    synopsis: 'B.E. in Computer Science and Engineering at Hindusthan Institute of Technology, building core engineering discipline with an 8.0 CGPA.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineering Degree',
        description: 'B.E. Computer Science and Engineering at Hindusthan Institute of Technology — graduating with a CGPA of 8.0.',
        tags: ['B.E. CSE', 'CGPA 8.0', 'Hindusthan'],
        runtime: '2021 – 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'First Steps & Internships',
    period: '2023 – 2025',
    synopsis: 'Gaining early foundational exposure through internship experiences at CodeBind Technologies and JClick Solution.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Web & Business Fundamentals',
        description: 'Internship at CodeBind Technologies, Trichy — practical exposure to HTML, CSS, JavaScript, and business processes.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Business Processes'],
        runtime: 'Jun – Jul 2023',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Database Administration',
        description: 'Database Internship at JClick Solution, Nagercoil — foundational SQL, relational schema structuring, and DBA fundamentals.',
        tags: ['SQL', 'Database Admin', 'Relational Schemas'],
        runtime: 'Jun – Jul 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The AI Specialization',
    period: '2024 – 2025',
    synopsis: 'Diving into Generative AI, Large Language Models, Prompt Engineering, LangChain, and Agentic AI workflows.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Generative AI & LLMs',
        description: 'Exploring LLM integration, prompt engineering techniques, and LangChain orchestration for conversational software.',
        tags: ['Generative AI', 'LLMs', 'Prompt Engineering', 'LangChain'],
        runtime: 'Specialization',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'Foundations & Certifications',
        description: 'Earning certifications in AI Fundamentals, Machine Learning, Database Management Systems, and Power BI.',
        tags: ['Great Learning', 'Infosys Springboard', 'Power BI', 'SQL'],
        runtime: '5 Credentials',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Software',
    period: '2024 – 2025',
    synopsis: 'Three engineering productions — MindMate AI, Clothing E-Commerce, and AgriBot — plus national hackathon participation.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'MindMate AI',
        description: 'Production-oriented Personal AI Study Companion with stateful LangGraph conversation orchestration and FastAPI backend.',
        tags: ['FastAPI', 'LangGraph', 'LangChain', 'React'],
        runtime: 'In Development',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Clothing E-Commerce',
        description: 'Full-stack Flask application with relational MySQL persistence, category filtering, cart workflows, and admin portal.',
        tags: ['Python', 'Flask', 'MySQL', 'Full-Stack'],
        runtime: 'Production',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'AgriBot & Hackathons',
        description: 'Smart India Hackathon participant at Hindusthan Institute of Technology and conceptualization of AgriBot software system.',
        tags: ['AgriBot', 'Smart India Hackathon', 'Python'],
        runtime: 'National Stage',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Advancing as an AI Software Engineer, building autonomous agentic architectures and intelligent software systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Frontier',
        description: 'Expanding depth in Agentic AI, RAG pipelines, multi-agent systems, and production full-stack AI engineering.',
        tags: ['Agentic AI', 'RAG Pipelines', 'Autonomous Systems'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary focus', title: 'Generative AI', detail: 'LLMs • Prompt Engineering • LangChain • Agents', palette: crimson },
  { label: 'Engineering degree', title: 'B.E. CSE', detail: 'Hindusthan Institute of Technology', palette: ocean },
  { label: 'Academic standing', title: '8.0 CGPA', detail: 'Consistent computer science record', palette: jade },
  { label: 'The AI Production', title: 'MindMate AI', detail: 'FastAPI • LangGraph • React • MySQL', palette: crimson },
  { label: 'Full-stack project', title: 'Clothing E-Commerce', detail: 'Flask • MySQL • Shopping workflows & Admin', palette: amber },
  { label: 'Software system', title: 'AgriBot', detail: 'Agricultural software architecture', palette: ocean },
  { label: 'National hackathon', title: 'Smart India Hackathon', detail: 'Participant at Hindusthan Inst. of Tech', palette: violet },
  { label: 'Database internship', title: 'JClick Solution', detail: 'SQL & Database Administration', palette: jade },
  { label: 'Web internship', title: 'CodeBind Tech', detail: 'Web exposure & business processes', palette: amber },
  { label: 'Developer tooling', title: 'Antigravity & VS Code', detail: 'Agentic & modern dev environments', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. Computer Science',
    lines: ['Hindusthan Institute of Technology', 'Graduating Class of 2025'],
    chips: ['CGPA 8.0'],
  },
  {
    kicker: 'Specialization',
    title: 'AI Software Engineer',
    lines: ['Generative AI, LLMs, Prompt Engineering & Agentic AI', 'Python, LangChain, FastAPI & React'],
    chips: ['Python', 'Generative AI', 'LLMs', 'LangChain', 'FastAPI'],
  },
  {
    kicker: 'Internships',
    title: 'Foundational Exposure',
    lines: ['Database Intern · JClick Solution · SQL & DBA', 'Intern · CodeBind Technologies · Web & Business Workflows'],
  },
  {
    kicker: 'Projects',
    title: 'Featured Productions',
    lines: ['MindMate AI — LangGraph & FastAPI study companion', 'Clothing E-Commerce — Full-stack Flask & MySQL platform', 'AgriBot — Agricultural software architecture'],
  },
  {
    kicker: 'Hackathons',
    title: 'National Challenge',
    lines: ['Smart India Hackathon — Participant', 'Collaborative engineering problem solving at Hindusthan Inst. of Tech'],
  },
  {
    kicker: 'Certifications',
    title: '5 Specialized Credentials',
    lines: ['Microsoft / LinkedIn Learning · Great Learning · Infosys Springboard', 'AI Fundamentals, Machine Learning, DBMS & SQL'],
  },
  {
    kicker: 'Current Mission',
    title: 'Building Intelligent Software',
    lines: ['Practical AI-powered applications · Stateful agentic workflows · Full-stack engineering'],
  },
];

export type ProfileId = 'dhibinesh' | 'recruiter' | 'developer' | 'ai_engineer';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'dhibinesh',
    name: 'Dhibinesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, education & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'ai_engineer',
    name: 'AI Engineer',
    blurb: 'AI & Generative AI focus first',
    color: '#b98bff',
    order: ['skills', 'originals', 'about', 'journey', 'picks', 'moments', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Productions • AI & Full-Stack`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Career Highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Hackathon • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume & Career Screenplay', palette: violet },
};
