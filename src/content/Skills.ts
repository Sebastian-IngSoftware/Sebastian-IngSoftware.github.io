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
        description: 'I use Python for data analysis in real projects and create scripts with Flask or FastAPI to leverage libraries like sklearn. I enjoy the clean syntax and vast ecosystem of libraries. Currently expanding my knowledge in data science and machine learning.',
        status: 'learning',
        category: ['backend', 'IA'],
        icon: 'python'
    },
    {
        skill: 'Laravel',
        level: 9,
        description: 'Years of experience using Laravel for personal and professional projects daily. It\'s my go-to framework for PHP web development due to its comprehensive feature set that accelerates development. While not the strongest on frontend, it excels for backend architecture.',
        status: 'expert',
        category: ['backend', 'database','frontend', 'architecture'],
        icon: 'laravel'
    },
    {
        skill: 'Tests',
        level: 9,
        description: 'I consider testing an essential part of software development. I have experience writing unit and integration tests, as well as setting up test environments. I believe that well-written tests help ensure code quality and reliability, making maintenance and future development easier.',
        status: 'expert',
        category: ['backend', 'frontend','devops','database','tools'],
        icon: 'tests'
    },
    {
        skill: 'PHP',
        level: 9,
        description: 'I have been using PHP for many years and have extensive experience with it. I have used it for many personal and real projects, and I have deep knowledge of the language. I like PHP and think it\'s a good choice for web development.',
        status: 'expert',
        category: ['backend', 'database','frontend'],
        icon: 'php'
    },
    {
        skill: 'Kanban',
        level: 9,
        description: 'I use Kanban for all my projects and find it excellent for organizing tasks and workflow. My interest began during university while learning agile methodologies, and I later conducted scientific research on it for my final degree project.',
        status: 'expert',
        category: ['tools'],
        icon: 'kanban'
    },
    {
        skill: 'Docker',
        level: 5,
        description: 'I use Docker across all projects because containers provide excellent dependency isolation and consistent environments. My laptop runs all personal and work projects in Docker, which streamlines development workflows significantly.',
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
        description: 'I have sufficient knowledge to create static websites with Astro. I appreciate it as a static site generator because I value the speed and security of static sites. This website itself is built with Astro - my only public project showcase.',
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
        description: 'This is the first CSS framework I learned. While it may be considered outdated in the frontend world, it\'s still very useful for quick projects. Personally, I prefer Tailwind since I learned it, but I have extensive experience with Bootstrap and I like it.',
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
        description: 'I like this architecture because it\'s very useful for organizing code and projects. This is the first architecture I learned - it\'s basic but very useful for understanding software architecture concepts.',
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
        description: 'I\'ve applied Modular Architecture concepts in personal projects and professional work. I appreciate this approach for code organization as it\'s more practical to implement than microservices while still providing good structure.',
        status: 'expert',
        category: ['architecture'],
        icon: 'modular-monolith'
    },
    {
        skill:'Monolith Architecture',
        level: 9,
        description: 'Extensive experience with monolith architecture from numerous personal and professional projects. The key is building well-structured monoliths with solid conventions and practices to prevent future architectural issues.',
        status: 'expert',
        category: ['architecture'],
        icon: 'monolith'
    },
    {
        skill: 'Cloud VPS',
        level: 6,
        description: 'Experience managing VPS servers through Hostinger and Yachay. I find VPS more manageable than shared hosting despite higher costs. While familiar with Vercel and Netlify, I prefer VPS control for private projects.',
        status: 'proficient',
        category: ['devops', 'tools'],
        icon: 'vps'
    },
    {
        skill: 'Intranet Management',
        level: 8,
        description: 'Experience deploying and managing corporate intranet systems. I understand the unique challenges including security protocols, access control, and internal communication needs. Successfully implemented solutions that enhanced organizational collaboration.',
        status: 'expert',
        category: ['devops'],
        icon: 'intranet'
    },
    {
        skill: 'FastAPI',
        level: 4,
        description: 'Used FastAPI for personal projects and appreciate its automatic documentation and performance. It\'s excellent for Python APIs, especially when leveraging ML libraries like sklearn. Currently building a public framework with it on GitHub.',
        status: 'learning',
        category: ['backend', 'IA'],
        icon: 'fastapi'
    },
    {
        skill: 'Machine Learning',
        level: 4,
        description: 'Learned ML fundamentals using sklearn and pandas for personal projects and master\'s coursework. I\'m genuinely interested in this field and believe it represents the future of technology development.',
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
        description: 'I find Vue intuitive to learn and highly flexible for development. Used it in professional work projects, and I particularly appreciate how it simplifies component creation compared to frameworks like Angular.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'vue'
    },
    {
        skill: 'React',
        level: 5,
        description: 'React\'s popularity motivated me to learn it, and I\'ve used it for personal projects. While I need to deepen my knowledge and experience, I appreciate the framework\'s strong community and ecosystem.',
        status: 'learning',
        category: ['frontend'],
        icon: 'react'
    },
    {
        skill: 'NextJS',
        level: 4,
        description: 'I appreciate Next.js for its React integrations and robust frontend capabilities. While it supports backend functionality, I prefer using it primarily for frontend development and basic backend features.',
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
        description: 'Vite is a build tool that\'s very fast for compiling code. I prefer it over other tools like Webpack. I have used it for personal and real projects, and I like the speed and simplicity it offers for JavaScript projects.',
        status: 'proficient',
        category: ['frontend', 'tools'],
        icon: 'vite'
    },
    {
        skill: 'Java',
        level: 3,
        description: 'Learned Java at university where it helped me grasp fundamental programming concepts like OOP and data structures. Only used for academic work, but I might return to it since its organizational structure appeals to me.',
        status: 'learning',
        category: ['backend'],
        icon: 'java'
    },
    {
        skill: 'Spring Boot',
        level: 3,
        description: 'Learned Spring Boot basics at university for academic projects. While it\'s a solid Java framework for API development, I generally prefer PHP or Python for backend work and need more hands-on experience.',
        status: 'learning',
        category: ['backend'],
        icon: 'springboot'
    }
] as const;