export interface Skills {
    skill: string;
    level: number; // Level from 1 to 10
    description: string;
    status: 'learning' | 'proficient' | 'expert';
    category: Array<'frontend' | 'backend' | 'devops' | 'database' | 'architecture' | 'tools' | 'other' | 'IA'>;
    icon: string;
}

export const skills: Skills[] =[
    {
        skill: 'TypeScript',
        level: 6,
        description: 'I like more this language that JavaScript, because the types help me to avoid many errors and improve the code quality, for me is like this lenguaje documentation by itself.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'typescript'
    },
    {
        skill: 'Python',
        level: 5,
        description: 'I use Python for data analysis in real projects, but basic projects and scripts with Flask or FastApi to used it for some libraries like sklearn. I have done with this language. I like the syntax and the large number of libraries available. I gonna learn more about it because I am interested in data science and machine learning.',
        status: 'learning',
        category: ['backend', 'IA'],
        icon: 'python'
    },
    {
        skill: 'PHP',
        level: 9,
        description: 'I have been using PHP for many years, and I have a lot of experience with it. I have used it for many personal an real projects, and I have a lot of knowledge about it. I like the language, and I think it is a good choice for web development.',
        status: 'expert',
        category: ['backend', 'database','frontend'],
        icon: 'php'
    },
    {
        skill: 'Laravel',
        level: 8,
        description: 'I have been using Laravel for many years, and I have a lot of experience with it. I have used it for many personal an real projects, all days I use it for my work. I like the framework, and I think it is a good choice for web development with PHP because it is very complete and has a lot of features that make the development easier and faster, maybe its not the best in the frontend side than other frameworks, but for backend is one of the best for me.',
        status: 'expert',
        category: ['backend', 'database','frontend', 'architecture'],
        icon: 'laravel'
    },
    {
        skill: 'Kanban',
        level: 9,
        description: 'I use kanban for all my projects, I like the way of working with it, and I think it is a good way to organize the tasks and the work, my interest in kanban surged when I learning agile methodologies in the university, and I used it for my freelance projects. I like a lot that I make a science investigation about it in my final degree project.',
        status: 'expert',
        category: ['tools'],
        icon: 'kanban'
    },
    {
        skill: 'Docker',
        level: 5,
        description: 'I use Docker for all my projects, I like to work with containers, and I think it is a good way to deploy applications. For example in my personal laptop I have all my personal and real projects in docker because I like to have all the dependencies isolated and the same environment in all my projects. I also use it for my work, and I like to use it for development because it is very useful to have all the dependencies and the environment configured in a container. Maybe I dont have a lot of experience with it, but I like to use it and I want to learn more about it.',
        status: 'learning',
        category: ['devops'],
        icon: 'docker'
    },
    {
        skill: 'MySQL',
        level: 9,
        description: 'I have a lot of experience with it. I have used it for many personal an real projects, all days I use it for my work. I like the database and its performance',
        status: 'expert',
        category: ['database'],
        icon: 'mysql'
    },
    {
        skill: 'Astro',
        level: 6,
        description: 'I have been using Astro for some time, and I have the sufificient knowledge to create static websites with it. I like the framework, also I like that it is a static site generator, because I like to create static websites because they are faster and more secure. This is the only skill that I worked in a public project, this website is made with Astro I made gruporisar.com for a website of a client with Astro and TailwindCSS.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'astro'
    },
    {
        skill: 'TailwindCSS',
        level: 6,
        description: 'I have been using TailwindCSS for some time, I like this library because it is very customizable an make the styles for the frontend components easier and faster.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'tailwindcss'
    },
    {
        skill: 'Bootstrap',
        level: 8,
        description: 'This is the first CSS framework that I learned, Maybe it is deprecated in the frontend world, but for fast projects is very useful, For my personal opinion I prefer Tailwind since I learned it, but I have a lot of experience with Bootstrap and I like it.',
        status: 'expert',
        category: ['frontend'],
        icon: 'bootstrap'
    },
    {
        skill: 'Git',
        level: 9,
        description: 'This is the most tool that I use for my projects, Its is an standard in the development world, its good use it for version control and to work in team and personal projects.',
        status: 'expert',
        category: ['tools'],
        icon: 'git'
    },
    {
        skill: 'Linux',
        level: 7,
        description: 'I use Linux in my personal laptop to I got used to it in the servers when I deployed projects, distros like Debiasn, Ubuntu, Fedora and Parrot its the ones that I have used.',
        status: 'proficient',
        category: ['tools'],
        icon: 'linux'
    },
    {
        skill: 'English',
        level: 7,
        description: 'I have a B2 level in English, I can read and understand technical documentation without problems, I can also write and speak in English, but I need to improve my speaking skills.',
        status: 'proficient',
        category: ['other'],
        icon: 'english'
    },
    {
        skill: 'MVC Architecture',
        level: 9,
        description: 'I like the architecture because it is very useful to organize the code and the projects, This is the first architecture that I learning, its basic but its very useful to understand the concepts of software architecture.',
        status: 'expert',
        category: ['architecture'],
        icon: 'mvc'
    },
    {
        skill: 'Microservices Architecture',
        level: 3,
        description: 'I have learned the concepts of microservices architecture, I have used it in some personal projects, but I need to improve my knowledge and experience with it.',
        status: 'learning',
        category: ['architecture'],
        icon: 'microservices'
    },
    {
        skill: 'Hexagonal Architecture',
        level: 3,
        description: 'I have learned the concepts of hexagonal architecture, I have used it in some personal projects, but I need to improve my knowledge and experience with it.',
        status: 'learning',
        category: ['architecture'],
        icon: 'hexagonal'
    },
    {
        skill: 'Modular Monolith Architecture',
        level: 7,
        description: 'I have learned the concepts of modular monolith architecture, I have used it in some personal projects and real projects at work, I like this architecture because its very useful to organize the code and the projects, and its easier to implement than microservices architecture.',
        status: 'proficient',
        category: ['architecture'],
        icon: 'modular-monolith'
    },
    {
        skill:'Monolith Architecture',
        level: 9,
        description: 'I have a lot of experience with monolith architecture, I have used it for many personal an real projects, all days I use it for my work. Its important to make a good monolith architecture to avoid problems in the future, make conventions and good practices is very important to make a good monolith architecture.',
        status: 'expert',
        category: ['architecture'],
        icon: 'monolith'
    },
    {
        skill: 'VPS Management',
        level: 7,
        description: 'I have experience managing VPS servers, I have used services like Hostinger, Yachay. For me its more easier than esier than get a shared hosting, the only problem is the cost, but I think its worth it for the benefits that it has. I know another services like Vercel, Netlify or Laravel Cloud, but I prefer a VPS to provates projects where the users are limited for a enterprise or organization because the security its more strictics and I can have more control of the server that a public projects',
        status: 'proficient',
        category: ['devops', 'tools'],
        icon: 'vps'
    },
    {
        skill: 'FastAPI',
        level: 4,
        description: 'I have used FastAPI for some personal projects, I like the automatic documentation that it has, and the performance that it offers. I want to learn more about it because I think its a good library to create APIs with Python. Maybe its not a framework like Laravel, but its goot only for use python \'s libraries like sklearn for machine learning. I have making a framework with FastAPI to use it, its public in my GitHub profile if you want to see it. Its in the early phase yet.',
        status: 'learning',
        category: ['backend', 'IA'],
        icon: 'fastapi'
    },
    {
        skill: 'Machine Learning',
        level: 4,
        description: 'I have learned the basics of machine learning, I have used libraries like sklearn and pandas for some personal and my magister courses projects. I am interested in this field, and I want to learn more about it because I think its the future of technology.',
        status: 'learning',
        category: ['IA'],
        icon: 'machine-learning'
    },
    {
        skill: 'Kubernetes',
        level: 1,
        description: 'I have learned the basics of Kubernetes, but I need to improve my knowledge and experience with it. I think its a good tool to manage containers in production environments, but its not necessary for small projects.',
        status: 'learning',
        category: ['devops'],
        icon: 'kubernetes'
    },
    {
        skill: 'Vue',
        level: 7,
        description: 'I have been using Vue for some time, I like the framework because its very easy to learn and use, and its very flexible. I have used it for real projects at work. For make components and interactive elements in the frontend its easier than other frameworks like Angular',
        status: 'proficient',
        category: ['frontend'],
        icon: 'vue'
    },
    {
        skill: 'React',
        level: 5,
        description: 'I have been using React for some time, Its popularity give me the interest to learn it, I have used it for some personal projects, but I need to improve my knowledge and experience with it. I like the framework because its very popular and has a large community.',
        status: 'learning',
        category: ['frontend'],
        icon: 'react'
    },
    {
        skill: 'NextJS',
        level: 4,
        description: 'I have been using Next.js for some time, I like the framework for the integrations with React, its a stronger framework in the frontend side, this can used in the backend side but I prefer to use only for the frontend and basic backend functionalities.',
        status: 'learning',
        category: ['frontend'],
        icon: 'nextjs'
    },
    {
        skill: 'Node',
        level: 4,
        description: 'I used node for personal and real projects, understand its functioning is important because many frontend frameworks like React or Vue use it for its development environment.',
        status: 'proficient',
        category: ['frontend'],
        icon: 'nodejs'
    },
    {
        skill: 'Vite',
        level: 5,
        description: 'Vite its a build tool it is very fast to compile the code, I prefer this that other tools like Webpack, I have used it for personal and real projects, I like the speed and simplicity that it has for js projects',
        status: 'proficient',
        category: ['frontend', 'tools'],
        icon: 'vite'
    },
    {
        skill: 'Java',
        level: 3,
        description: 'I learned Java in the university, This lenguage make me understand the programing concepts like OOP and data structures. I only used it for academic projects, maybe I will retake it in the future because its structure integrated with me for the organization of the code.',
        status: 'learning',
        category: ['backend'],
        icon: 'java'
    },
    {
        skill: 'Spring Boot',
        level: 3,
        description: 'I learned the basics of Spring Boot in the university, I used it for some academic projects, but I need to improve my knowledge and experience with it. I think its a good framework to create APIs with Java, but I prefer to use other lenguages like PHP or Python for backend development.',
        status: 'learning',
        category: ['backend'],
        icon: 'springboot'
    }
];