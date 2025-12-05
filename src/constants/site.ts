const informations = {
    username: 'Hugo Laclau',
    company: 'Betclic',
    school: 'Ynov Campus Bordeaux',
    title: 'Ingénieur logiciel en alternance',
    image: '/favicon.png',
    location: 'Bordeaux, France',
};

const contact = {
    linkedin: 'https://www.linkedin.com/in/laclauhugo/',
    github: 'https://github.com/hlaclau',
};

const keywords = [
    'Développement logiciel',
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

const description = `Je suis ${informations.title} chez ${informations.company}, je suis passionné par le développement logiciel et je suis toujours à la recherche de nouveaux challenges.`;

export const SITE = {
    url: 'https://hlaclau.fr',
    username: informations.username,
    school: informations.school,
    company: informations.company,
    title: informations.title,
    description: description,
    image: informations.image,
    location: informations.location,
    contact: contact,
    keywords: keywords,
};
