/**
 * All site content lives here — edit this file to update the landing page.
 * Placeholders to replace: profile.links.* (social URLs) and profile.cvFile.
 */

export const profile = {
  name: 'Abdulrahman Awad',
  role: 'Frontend Developer',
  tagline: 'I build fast, production-ready web interfaces with React & Next.js.',
  summary:
    'Frontend developer with 3 years of experience building production websites and dashboards with Next.js and React, plus 6 years teaching programming. Looking for an internship to grow into a product engineer.',

  location: 'Nobaria, Egypt',
  email: 'abdh.3wad@gmail.com',
  phone: '+201124048668',
  // The CV PDF lives in /public. BASE_URL keeps it working when the site is
  // hosted under a sub-path (e.g. GitHub Pages at /Portfolio/).
  cvFile: `${import.meta.env.BASE_URL}cv.pdf`,

  availability: 'Open to internships & frontend roles',

  links: {
    github: 'https://github.com/Abdulrahman3awad',
    linkedin: 'https://www.linkedin.com/in/abdulrhman-awad',
    youtube: 'https://www.youtube.com/@Eng.AbdulrahmanAwad/',
    email: 'mailto:abdh.3wad@gmail.com',
    phone: 'tel:+201124048668',
  },

  stats: [
    { value: '3+', label: 'Years building production apps' },
    { value: '6', label: 'Years teaching programming' },
    { value: '500+', label: 'Students taught' },
  ],
}

/**
 * YouTube channel — programming lessons for Egyptian high-school students
 * (تانية بكالوريا). `id` is the YouTube video id used for the embed + thumbnail.
 */
export const youtube = {
  channelUrl: 'https://www.youtube.com/@Eng.AbdulrahmanAwad/',
  channelId: 'UCHYwEkELKcMOMjAAScYLBvg',
  channelName: 'عبدالرحمن عوض || Abdulrahman Awad',
  tagline: 'شرح مادة البرمجة للصف الثاني الثانوي',
  featured: {
    id: '0KLa-_azTiw',
    title: 'الدرس الأول - الفصل الأول | تطور تكنولوجيا المعلومات والتحول الاجتماعي',
  },
  videos: [
    {
      id: '0KLa-_azTiw',
      title: 'الدرس الأول - الفصل الأول | تطور تكنولوجيا المعلومات والتحول الاجتماعي',
      meta: 'تانية بكالوريا',
    },
    {
      id: '4lBr_ioBrvM',
      title: 'الدرس الثاني - الفصل الأول | كيف يعمل الذكاء الاصطناعي',
      meta: 'تانية بكالوريا',
    },
    {
      id: 'pssvLRmQVjU',
      title: 'الدرس الأول - الفصل الثاني | تقنيات التشفير والمصادقة',
      meta: 'تانية بكالوريا',
    },
    {
      id: 's7BS2ZOQeDk',
      title: 'الجزء الثاني - تقنيات التشفير والمصادقة',
      meta: 'تانية بكالوريا',
    },
  ],
}


export const skills = [
  {
    title: 'Core',
    icon: 'code',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'layers',
    items: ['React', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Concepts',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'REST APIs', 'Supabase (basic)'],
  },
  {
    title: 'Languages',
    icon: 'globe',
    items: ['Arabic (Native)', 'English (Intermediate)'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Webket',
    type: 'Full-time',
    period: '2023 – 2024',
    location: 'Remote',
    highlights: [
      'Built production websites and web systems with Next.js for clients in Egypt and Saudi Arabia.',
    ],
    projects: [
      {
        name: 'Thiraa Real Estate',
        region: 'Saudi Arabia',
        description:
          'Built the admin dashboard (sales, projects, website management) and the public website.',
        link: 'https://thiraa.sa',
      },
      {
        name: 'agreNoba',
        region: 'Egypt',
        description:
          'Built the frontend of a land-protection violation-reporting system for the Ministry of Agriculture.',
      },
      {
        name: 'mofassal.com',
        region: 'Egypt',
        description:
          'Built the landing page for a Quran circles management platform.',
      },
      {
        name: 'Webket & Doctorket',
        region: 'Egypt',
        description:
          'Built the company website and Doctorket, an internal product owned by Webket.',
        link: 'https://doctorket.net',
      },
    ],
  },
  {
    role: 'Tech Lead (Volunteer)',
    company: 'Bytix',
    type: 'Volunteer',
    period: '2024',
    location: 'Remote',
    highlights: [
      'Led a student team to deliver the frontend of the Khalid Ibn Al-Walid Quran Competition in two weeks, and built the backend.',
      'Tested around 3,000 students across the competition and designed the exam engine.',
      'Designed the exam engine: no repeated exam model per 20 students, and no repeated question, topic, or surah per student.',
    ],
    stack: ['React', 'Supabase'],
  },
  {
    role: 'Frontend Developer (Freelance)',
    company: 'Bytix Programming Academy',
    type: 'Freelance',
    period: '2024',
    location: 'Remote',
    highlights: ["Built the academy's website."],
  },
  {
    role: 'Programming Instructor (Part-time)',
    company: 'Koodak, Skidy Rain, Be School',
    type: 'Part-time',
    period: '2021 – Present',
    location: 'Remote',
    highlights: [
      'Taught Python, HTML, CSS, JavaScript, React, and Next.js to around 500 students aged 8 to 25.',
    ],
  },
]

export const projects = [
  {
    name: 'Thiraa Real Estate',
    category: 'Next.js · Dashboard',
    description:
      'Admin dashboard and public website for a Saudi real estate company, covering sales, projects and website management.',
    link: 'https://thiraa.sa',
    featured: true,
  },
  {
    name: 'Doctorket',
    category: 'React · Product',
    description:
      'Internal product owned by Webket — an internal web application built by me as frontend developer.',
    link: 'https://doctorket.net',
    featured: true,
  },
  {
    name: 'agreNoba',
    category: 'React · Government Systems',
    description:
      'Land-protection violation-reporting system for the Ministry of Agriculture — I built the entire frontend.',
    featured: true,
  },
  {
    name: 'mofassal.com',
    category: 'Landing Page',
    description:
      'Landing page for a Quran circles management platform handling circle tracking and scheduling.',
    featured: false,
  },
  {
    name: 'Bytix Quran Competition',
    category: 'React · Supabase',
    description:
      'Competition platform for 3,000+ students with a custom exam engine guaranteeing unique papers — frontend lead, two-week delivery, and 20,000+ data requests handled.',
    featured: false,
  },
  {
    name: 'Bytix Academy',
    category: 'Web App',
    description:
      "The academy's own website, built as a freelance frontend developer.",
    featured: false,
  },
]

export const education = [
  {
    degree: 'B.Sc. in Agricultural Engineering',
    school: 'Al-Azhar University',
    period: '2025',
  },
]

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Production websites and dashboards built with React and Next.js — from design system to deployment.',
    icon: 'monitor',
  },
  {
    title: 'Admin Dashboards',
    description:
      'Complex, data-heavy interfaces: sales, projects, reports and full website management tooling.',
    icon: 'dashboard',
  },
  {
    title: 'Landing Pages',
    description:
      'Fast, responsive, conversion-focused landing pages that look great on every device.',
    icon: 'rocket',
  },
  {
    title: 'Teaching & Mentoring',
    description:
      'Six years of teaching programming to students aged 8 to 25 — from Python and web basics to React.',
    icon: 'users',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'videos', label: 'Videos' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
