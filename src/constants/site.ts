const informations = {
    username: 'Hugo Laclau',
    company: 'Betclic Group',
    company_url: 'https://betclicgroup.com/',
    school: 'Ynov Campus Bordeaux',
    title: 'Ingénieur logiciel en alternance',
    image: '/og.png',
    location: 'Bordeaux, France',
};

const contact = {
    linkedin: 'https://www.linkedin.com/in/laclauhugo/',
    github: 'https://github.com/hlaclau',
};

const keywords = [
    'Développement logiciel',
    'Linux',
    'MacOS',
    'C#',
    '.NET',
    'ASP.NET',
    'Go',
    'GoLang',
    'JavaScript',
    'TypeScript',
    'React',
    'Astro',
    'Vue.js',
    'Tailwind',
    'HTML',
    'CSS',
    'Rust',
    'SQL',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Snowflake',
    'DynamoDB',
    'Redis',
    'Docker',
    'AWS',
    'Terraform',
    'CI/CD',
    'DevOps',
    'Cloud',
    'AI',
];

const description = `Ingénieur logiciel en alternance chez ${informations.company} et étudiant en M2 informatique à Ynov Bordeaux.`;

export const SITE = {
    url: 'https://hlaclau.fr',
    username: informations.username,
    school: informations.school,
    company: informations.company,
    company_url: informations.company_url,
    title: informations.title,
    description: description,
    image: informations.image,
    location: informations.location,
    contact: contact,
    repository: 'https://github.com/hlaclau/www',
    keywords: keywords,
    // SEO-optimized title suffix for better search visibility
    titleSuffix: 'Ingénieur logiciel à Bordeaux',
};
