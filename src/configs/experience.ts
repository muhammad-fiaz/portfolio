'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Looking for Job Opportunities | Present',
    description:
      "Currently seeking job opportunities in **Software Engineering**, **AI**, **Data Science**, and **Full Stack** development. Open to full-time roles, internships, or freelance work. Let's connect!",
    startDate: 'Present',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'Fiaz Technologies | Nov. 2023 - Present',
    description:
      'Building developer-first tools at Fiaz Technologies to enhance productivity. Focused on creating innovative Tools that empower developers.',
    startDate: 'Nov 2023',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.github_organisation
  },
  {
    title: 'Hacktoberfest 2024 | Oct. 2024 - Nov. 2024',
    description:
      'Participated as a maintainer and content writer in the Hacktoberfest event. Contributed to open-source projects and wrote technical content on platforms such as Medium, Dev.to, and Hashnode.',
    startDate: 'Oct 2024',
    endDate: 'Nov 2024',
    isActive: false,
    companyUrl: siteConfig.other.hacktoberfest
  },
  {
    title: 'CodSoft - Data Science Intern | Sep. 2023 - Oct. 2023',
    description:
      'Self-paced Data Science Intern where I gained practical experience in data science applications using Python. I also contributed to open-source projects and maintained repositories on GitHub.',
    startDate: 'Sep 2023',
    endDate: 'Oct 2023',
    companyUrl: siteConfig.other.codsoft
  },
  {
    title: 'Hacktoberfest 2023 | Sep. 2023 - Oct. 2023',
    description:
      'Participated as a maintainer and content writer in the Hacktoberfest event. Contributed to open-source projects and wrote technical content on platforms such as Medium, Dev.to, and Hashnode.',
    startDate: 'Sep 2023',
    endDate: 'Oct 2023',
    companyUrl: siteConfig.other.hacktoberfest
  },
  {
    title: 'Technical Content Writer | Sep. 2023 - Present',
    description:
      'Writing technical content and tutorials on platforms like Medium, Dev.to, and Hashnode. Topics include software development, data science, and open-source contributions.',
    startDate: 'Sep 2023',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.baseUrl + '/blog'
  },
  {
    title: 'Open Source Contributor & Maintainer | Dec. 2020 - Present',
    description:
      'Actively contributing to and maintaining open-source repositories on GitHub. Focused on building and improving tools for the developer community.',
    startDate: 'Dec 2020',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.github
  }
];
