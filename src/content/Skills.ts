export interface Skills {
    skill: string;
    level: number; // Level from 1 to 10
    description: string;
    status: 'learning' | 'proficient' | 'expert';
    category: Array<'frontend' | 'backend' | 'devops' | 'database' | 'architecture' | 'tools' | 'IA'>;
    icon: string;
}

export const skills = [
    {
        skill: 'TypeScript',
        level: 6,
        description: 'I prefer this language over JavaScript because types help me avoid many errors and improve code quality. For me, it\'s like having self-documenting code.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'typescript'
    },
    {
        skill: 'Python',
        level: 5,
        description: 'I use Python for data analysis in real projects, scripts with Flask/FastAPI and sklearn libraries. I plan to learn more for data science and machine learning.',
        status: 'learning',
        category: ['backend', 'IA'],
        icon: 'python'
    },
    {
        skill: 'Laravel',
        level: 9,
        description: 'Extensive experience using Laravel for personal and professional projects daily. Excellent comprehensive framework for web development - one of the best for backend.',
        status: 'expert',
        category: ['backend', 'database','frontend', 'architecture'],
        icon: 'laravel'
    },
    {
        skill: 'Tests',
        level: 9,
        description: 'Testing is essential for software development. Experience with unit and integration tests. Well-written tests ensure code quality and make maintenance easier.',
        status: 'expert',
        category: ['backend', 'frontend','devops','database','tools'],
        icon: 'tests'
    },
    {
        skill: 'PHP',
        level: 9,
        description: 'Many years of experience with extensive knowledge. Used for many personal and real projects with deep understanding of the language.',
        status: 'expert',
        category: ['backend', 'database','frontend'],
        icon: 'php'
    },
    {
        skill: 'Kanban',
        level: 9,
        description: 'I use Kanban for all projects - excellent for organizing tasks and work. Did scientific research about it for my final degree project.',
        status: 'expert',
        category: ['tools'],
        icon: 'kanban'
    },
    {
        skill: 'Docker',
        level: 5,
        description: 'Use Docker for all projects to isolate dependencies and maintain consistent environments. Very useful for development, though still learning advanced features.',
        status: 'learning',
        category: ['devops'],
        icon: 'docker'
    },
    {
        skill: 'MySQL',
        level: 9,
        description: 'I have extensive experience with MySQL. I have used it for many personal and real projects, and I use it daily for my work. I like the database and its performance.',
        status: 'expert',
        category: ['database'],
        icon: 'mysql'
    },
    {
        skill: 'Astro',
        level: 6,
        description: 'Sufficient knowledge to create static websites. I like it for speed and security. This website is made with Astro - my only public project skill showcase.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'astro'
    },
    {
        skill: 'Tailwind',
        level: 6,
        description: 'I have been using TailwindCSS for some time. I like this library because it\'s very customizable and makes styling frontend components easier and faster.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'tailwindcss'
    },
    {
        skill: 'Bootstrap',
        level: 8,
        description: 'First CSS framework I learned. Still very useful for quick projects. I prefer Tailwind now, but have extensive experience with Bootstrap.',
        status: 'expert',
        category: ['frontend'],
        icon: 'bootstrap'
    },
    {
        skill: 'Git',
        level: 9,
        description: 'This is the tool I use most for my projects. It\'s a standard in the development world, and it\'s essential for version control and working on both team and personal projects.',
        status: 'expert',
        category: ['tools'],
        icon: 'git'
    },
    {
        skill: 'Linux',
        level: 7,
        description: 'I use Linux on my personal laptop to stay familiar with it for server deployments. I have used distros like Debian, Ubuntu, Fedora, and Parrot.',
        status: 'proficient',
        category: ['tools'],
        icon: 'linux'
    },
    {
        skill: 'MVC Architecture',
        level: 9,
        description: 'Very useful architecture for organizing code and projects. First architecture I learned - basic but essential for understanding software architecture concepts.',
        status: 'expert',
        category: ['architecture'],
        icon: 'mvc'
    },
    {
        skill: 'Microservices Architecture',
        level: 3,
        description: 'I have learned the concepts of microservices architecture and used it in some personal projects, but I need to improve my knowledge and experience with it.',
        status: 'learning',
        category: ['architecture'],
        icon: 'microservices'
    },
    {
        skill: 'Hexagonal Architecture',
        level: 3,
        description: 'I have learned the concepts of hexagonal architecture and used it in some personal projects, but I need to improve my knowledge and experience with it.',
        status: 'learning',
        category: ['architecture'],
        icon: 'hexagonal'
    },
    {
        skill: 'Modular Architecture',
        level: 8,
        description: 'Used in personal and work projects. Very useful for organizing code and projects, and easier to implement than microservices architecture.',
        status: 'expert',
        category: ['architecture'],
        icon: 'modular-monolith'
    },
    {
        skill:'Monolith Architecture',
        level: 9,
        description: 'Extensive experience with monolith architecture for personal and work projects. Important to create good architecture with solid conventions and practices.',
        status: 'expert',
        category: ['architecture'],
        icon: 'monolith'
    },
    {
        skill: 'Cloud VPS',
        level: 6,
        description: 'Experience managing VPS servers with Hostinger and Yachay. Easier than shared hosting despite higher cost. I prefer VPS for private projects.',
        status: 'proficient',
        category: ['devops', 'tools'],
        icon: 'vps'
    },
    {
        skill: 'Intranet Management',
        level: 8,
        description: 'Experience managing and deploying intranet systems. Understand security, access control, and internal communication requirements for organizations.',
        status: 'expert',
        category: ['devops'],
        icon: 'intranet'
    },
    {
        skill: 'FastAPI',
        level: 4,
        description: 'Used for personal projects. Great automatic documentation and performance. Building a public framework with it on GitHub - excellent for Python ML libraries.',
        status: 'learning',
        category: ['backend', 'IA'],
        icon: 'fastapi'
    },
    {
        skill: 'Machine Learning',
        level: 4,
        description: 'Learned basics using sklearn and pandas for personal and master\'s projects. Interested in learning more - I think it\'s the future of technology.',
        status: 'learning',
        category: ['IA'],
        icon: 'machine-learning'
    },
    {
        skill: 'Kubernetes',
        level: 1,
        description: 'I have learned the basics of Kubernetes, but I need to improve my knowledge and experience with it. I think it\'s a good tool for managing containers in production environments, but it\'s not necessary for small projects.',
        status: 'learning',
        category: ['devops'],
        icon: 'kubernetes'
    },
    {
        skill: 'Vue',
        level: 7,
        description: 'Easy to learn and very flexible framework. Used for real work projects. For creating components and interactive elements, it\'s easier than Angular.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'vue'
    },
    {
        skill: 'React',
        level: 5,
        description: 'Popular framework with large community. Used for personal projects but need to improve knowledge and experience. Its popularity sparked my interest.',
        status: 'learning',
        category: ['frontend'],
        icon: 'react'
    },
    {
        skill: 'NextJS',
        level: 4,
        description: 'More robust React framework with great integrations. I prefer using it for frontend and basic backend functionalities.',
        status: 'learning',
        category: ['frontend'],
        icon: 'nextjs'
    },
    {
        skill: 'Node',
        level: 4,
        description: 'I have used Node for personal and real projects. Understanding how it works is important because many frontend frameworks like React or Vue use it for their development environment.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'nodejs'
    },
    {
        skill: 'Vite',
        level: 5,
        description: 'Very fast build tool for compiling code. I prefer it over Webpack. Used for personal and real projects - love the speed and simplicity for JavaScript.',
        status: 'proficient',
        category: ['frontend', 'tools'],
        icon: 'vite'
    },
    {
        skill: 'Java',
        level: 3,
        description: 'Learned at university for understanding OOP and data structures. Only used for academic projects, but might revisit for its code organization structure.',
        status: 'learning',
        category: ['backend'],
        icon: 'java'
    },
    {
        skill: 'Spring Boot',
        level: 3,
        description: 'Learned basics at university for academic projects. Good Java framework for APIs, but I prefer PHP or Python for backend development.',
        status: 'learning',
        category: ['backend'],
        icon: 'springboot'
    }
] as const;