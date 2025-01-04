
export const siteConfig: {
    baseUrl: string;
    author: string;
    author_surname: string;
    titlePrefix: string;
    profile_image: string;
    form_id: string;
    social: {
        kofi: string;
        sponsor: string;
        email: string;
        twitter: string;
        github: string;
        linkedin: string;
        blog: string;
        medium: string;
        dev: string;
        hashnode: string;
        discord: string;
        github_organisation: string;

    };
    other: {
        hacktoberfest: string;
        codsoft: string;
    };
    chatbot:{
        rateLimit: number;
    }
    metadata: {
        description: string;
        keywords: string;
        type: string;
    };
} = {
    baseUrl: 'https://muhammadfiaz.com',
    author: 'Muhammad Fiaz',
    author_surname: 'Fiaz',
    titlePrefix: 'Muhammad Fiaz',
    profile_image: 'https://avatars.githubusercontent.com/u/75434191?s=400&u=0aa88e4ae941c44425b2be4595cf92b68f578f8a&v=4',
    form_id:'https://formspree.io/f/myzynpbr',
    social: {
        kofi: 'https://ko-fi.com/muhammadfiaz',
        sponsor: 'https://github.com/sponsors/muhammad-fiaz',
        email: 'contact@muhammadfiaz.com',
        twitter: '@muhammadfiaz_',
        github: 'muhammad-fiaz',
        linkedin: 'https://www.linkedin.com/in/muhammad-fiaz-/',
        blog: 'https://articles.muhammadfiaz.com',
        medium: 'https://muhammad-fiaz.medium.com',
        dev: 'https://dev.to/muhammadfiaz',
        hashnode: 'https://muhammadfiaz.hashnode.dev',
        discord: 'https://discord.gg/mXMhy2EX',
        github_organisation: 'https://github.com/FiazTechnologies',
    },
    metadata: {
        description: `Hi! I'm Muhammad Fiaz, a Full Stack developer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
        keywords:
            'Muhammad Fiaz, Full Stack Developer, Muhammad Fiaz portfolio, Muhammad Fiaz GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
        type: 'website',
    },
    chatbot: {
        rateLimit: 10,
    },
    other: {
        hacktoberfest: 'https://hacktoberfest.com/',
        codsoft: 'https://www.codsoft.in/',
    },
};
