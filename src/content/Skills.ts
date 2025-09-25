export interface Skills {
    skill: string;
    level: number; // Level from 1 to 10
    description: string;
    status: 'learning' | 'proficient' | 'expert';
    category: Array<'frontend' | 'backend' | 'devops' | 'database' | 'architecture' | 'tools' | 'other' | 'IA'>;
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
        description: 'I use Python for data analysis in real projects, as well as basic projects and scripts with Flask or FastAPI to leverage libraries like sklearn. I like the syntax and the large number of available libraries. I plan to learn more about it because I\'m interested in data science and machine learning.',
        status: 'learning',
        category: ['backend', 'IA'],
        icon: 'python'
    },
    {
        skill: 'Laravel',
        level: 9,
        description: 'I have been using Laravel for many years and have extensive experience with it. I have used it for many personal and real projects, and I use it daily for my work. I like the framework and think it\'s an excellent choice for web development with PHP because it\'s very comprehensive and has many features that make development easier and faster. Maybe it\'s not the best on the frontend side compared to other frameworks, but for backend, it\'s one of the best in my opinion.',
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
        description: 'I use Kanban for all my projects. I like the way of working with it and think it\'s a good way to organize tasks and work. My interest in Kanban emerged when I was learning agile methodologies at university, and I used it for my freelance projects. I particularly enjoyed conducting scientific research about it for my final degree project.',
        status: 'expert',
        category: ['tools'],
        icon: 'kanban'
    },
    {
        skill: 'Docker',
        level: 5,
        description: 'I use Docker for all my projects. I like working with containers and think it\'s a good way to deploy applications. For example, on my personal laptop, I have all my personal and real projects in Docker because I like having all dependencies isolated and the same environment across all my projects. I also use it for work, and I find it very useful for development because having all dependencies and environment configured in a container is convenient. While I don\'t have extensive experience with it yet, I enjoy using it and want to learn more.',
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
        description: 'I have been using Astro for some time and have sufficient knowledge to create static websites with it. I like the framework, especially because it\'s a static site generator, since I enjoy creating static websites for their speed and security. This is the only skill I\'ve worked with in a public project - this website is made with Astro.',
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
        skill: 'English',
        level: 7,
        description: 'I have a B2 level in English. I can read and understand technical documentation without problems, and I can also write and speak in English, but I need to improve my speaking skills.',
        status: 'proficient',
        category: ['other'],
        icon: 'english'
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
        skill: 'Modular Monolith Architecture',
        level: 8,
        description: 'I have learned the concepts of modular monolith architecture and used it in some personal projects and real projects at work. I like this architecture because it\'s very useful for organizing code and projects, and it\'s easier to implement than microservices architecture.',
        status: 'expert',
        category: ['architecture'],
        icon: 'modular-monolith'
    },
    {
        skill:'Monolith Architecture',
        level: 9,
        description: 'I have extensive experience with monolith architecture. I have used it for many personal and real projects, and I use it daily for my work. It\'s important to create a good monolith architecture to avoid future problems. Establishing conventions and good practices is very important for building a solid monolith architecture.',
        status: 'expert',
        category: ['architecture'],
        icon: 'monolith'
    },
    {
        skill: 'VPS Management',
        level: 7,
        description: 'I have experience managing VPS servers using services like Hostinger and Yachay. For me, it\'s easier than using shared hosting. The only drawback is the cost, but I think it\'s worth it for the benefits it provides. I know other services like Vercel, Netlify, or Laravel Cloud, but I prefer VPS for private projects.',
        status: 'proficient',
        category: ['devops', 'tools'],
        icon: 'vps'
    },
    {
        skill: 'FastAPI',
        level: 4,
        description: 'I have used FastAPI for some personal projects. I like the automatic documentation it provides and the performance it offers. I want to learn more about it because I think it\'s a good library for creating APIs with Python. While it\'s not a full framework like Laravel, it\'s excellent for using Python libraries like sklearn for machine learning. I\'m building a framework with FastAPI - it\'s public on my GitHub profile if you want to see it. It\'s still in the early stages.',
        status: 'learning',
        category: ['backend', 'IA'],
        icon: 'fastapi'
    },
    {
        skill: 'Machine Learning',
        level: 4,
        description: 'I have learned the basics of machine learning and used libraries like sklearn and pandas for some personal projects and my master\'s course projects. I\'m interested in this field and want to learn more about it because I think it\'s the future of technology.',
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
        description: 'I have been using Vue for some time. I like the framework because it\'s very easy to learn and use, and it\'s very flexible. I have used it for real projects at work. For creating components and interactive elements in the frontend, it\'s easier than other frameworks like Angular.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'vue'
    },
    {
        skill: 'React',
        level: 5,
        description: 'I have been using React for some time. Its popularity sparked my interest in learning it, and I have used it for some personal projects, but I need to improve my knowledge and experience with it. I like the framework because it\'s very popular and has a large community.',
        status: 'learning',
        category: ['frontend'],
        icon: 'react'
    },
    {
        skill: 'NextJS',
        level: 4,
        description: 'I have been using Next.js for some time. I like the framework for its integrations with React - it\'s a more robust framework on the frontend side. While it can be used on the backend side, I prefer to use it only for frontend and basic backend functionalities.',
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
        description: 'I learned Java at university. This language helped me understand programming concepts like OOP and data structures. I only used it for academic projects, but I might revisit it in the future because its structure resonated with me for code organization.',
        status: 'learning',
        category: ['backend'],
        icon: 'java'
    },
    {
        skill: 'Spring Boot',
        level: 3,
        description: 'I learned the basics of Spring Boot at university and used it for some academic projects, but I need to improve my knowledge and experience with it. I think it\'s a good framework for creating APIs with Java, but I prefer using other languages like PHP or Python for backend development.',
        status: 'learning',
        category: ['backend'],
        icon: 'springboot'
    }
] as const;