// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string; // ISO / human month-year
  end: string | 'Present';
  summary: string;
  technologies: string[];
};

export type BentoItem = {
  id: string;
  title: string;
  description: string;
  cta?: string;
  href?: string;
  colSpan?: number; // responsive layout hints
  rowSpan?: number;
  icon?: string;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatar?: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  bio: string;
  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    tips: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  hero: {
    greeting: string;
    title: string;
    highlight: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  bento: BentoItem[];
  experience: ExperienceItem[];
  testimonials: Testimonial[];
  skills: SkillCategory[];
  contact: {
    heading: string;
    blurb: string;
    emailLabel: string;
  };
  footer: {
    copyright: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  siteName: 'Portfolio – Muhammad Fiaz',
  domain: 'muhammadfiaz.com',
  author: 'Muhammad Fiaz',
  bio: 'Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.',
  about:
    'I am a Full Stack developer who loves creating new things. I spend my spare time building free apps & tools, and I am currently diving into Machine Learning & AI to expand my problem‑solving toolkit. Always open to collaboration & new challenges.',
  keywords: [
    'Muhammad Fiaz',
    'Full Stack Developer',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'shadcn/ui',
    'Framer Motion',
    'Machine Learning',
    'AI'
  ],
  ogImage: '/og.png',
  twitterHandle: '@muhammadfiaz',
  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    website: 'https://muhammadfiaz.com',
    github: 'https://github.com/muhammad-fiaz',
    linkedin: 'https://www.linkedin.com/feed/',
    tips: 'https://pay.muhammadfiaz.com',
    email: 'mailto:contact@muhammadfiaz.com',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/muhammad-fiaz', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/feed/', icon: 'linkedin' },
    { label: 'Website', url: 'https://muhammadfiaz.com', icon: 'globe' },
    { label: 'Tip', url: 'https://pay.muhammadfiaz.com', icon: 'coffee' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Posts', href: '/posts' },
    { label: 'Chat', href: '/chat' },
  ],
  hero: {
    greeting: 'Hi, I\'m',
    title: 'Muhammad Fiaz',
    highlight: 'Full Stack Developer',
    subtitle:
      'I build fast, accessible & delightful web products. Currently exploring Machine Learning & AI – always shipping, always learning.',
    primaryCta: { label: 'View Projects', href: '/projects' },
    secondaryCta: { label: 'Get in Touch', href: '#contact' },
  },
  bento: [
    {
      id: 'projects',
      title: 'Open Source Projects',
      description: 'A selection of tools, apps & experiments I\'ve built and shipped.',
      cta: 'Browse',
      href: '/projects',
      colSpan: 2,
      icon: 'code'
    },

  ],
  experience: [
    {
      company: '',
      role: '',
      start: '',
      end: '',
      summary: '',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL']
    },
  ],
  testimonials: [
    {
      name: '',
      title: '',
      quote: '',
    },
  ],
  skills: [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Prisma (planned)', 'Auth'] },
    { category: 'Tools', items: ['Git', 'CI/CD', 'Testing', 'Design Systems'] },
    { category: 'Learning', items: ['Machine Learning', 'Neural Networks', 'AI Tooling'] },
  ],
  contact: {
    heading: 'Let\'s build something',
    blurb: 'Collaboration, freelance work or just a hello — my inbox is open.',
    emailLabel: 'Send Email',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Muhammad Fiaz. All rights reserved.`,
  },
  seo: {
    title: 'Muhammad Fiaz – Full Stack Developer',
    description:
      'Portfolio of Muhammad Fiaz, Full Stack Developer exploring ML & AI. Projects, posts, experience & more.',
    keywords: [
      'Muhammad Fiaz portfolio',
      'Full Stack Developer',
      'Next.js developer',
      'TypeScript engineer',
      'Machine Learning',
      'AI'
    ],
  },
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain, ogImage } = siteConfig;
  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: 'https://' + domain,
      siteName,
      images: [ogImage],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [ogImage],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
  };
  return { ...base, ...overrides };
}

export type { Metadata };
