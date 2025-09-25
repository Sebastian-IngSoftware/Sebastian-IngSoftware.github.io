import { skills } from "@/content/Skills";

export type SkillName = typeof skills[number]['skill'];

export interface Project {
    title: string;
    description: string;
    image?: string;
    tags: SkillName | SkillName[];
}

export const projects: Project[] = [
    {
        title: 'Scalable OAuth2 Backend API',
        description: 'A scalable backend API built for my employer and secured with OAuth2. Designed as a modular monolith to enable horizontal scaling, reduce infrastructure costs, and improve overall performance and maintainability.',
        tags: ['Laravel', 'Docker', 'MySQL', 'Modular Architecture', 'Git', 'Kanban', 'Cloud VPS','Tests']
    },
    {
        title: 'Employee Training & Certification Platform',
        description: 'A full-stack application for managing employee training and certifications. Used by the quality department to schedule courses, track participation, and generate reports, improving compliance and training transparency.',
        tags: ['Laravel', 'Docker', 'MySQL', 'Monolith Architecture', 'Git', 'Bootstrap', 'Kanban', 'Node','Tests','Cloud VPS']
    },
    {
        title: 'Cancer Risk Prediction Model',
        description: "A machine learning model developed during my master's studies to predict the likelihood of cancer from clinical features. Implemented in Python using scikit-learn for preprocessing, training, and evaluation.",
        image: 'cancer.jpg',
        tags: ['Python', 'Machine Learning']
    },
    {
        title: 'Document Management System',
        description: 'An enterprise document management system built to store, organize, and generate reports. Deployed on the company intranet, it improved traceability, version control, and process oversight.',
        image:'docusys.jpg',
        tags: ['Laravel', 'Docker', 'MySQL', 'Monolith Architecture', 'Git', 'Bootstrap', 'Kanban', 'Node', 'MVC Architecture', 'Linux', 'Vite','Tests','Intranet Management']
    },
    {
        title: 'Corporate Presentation Website',
        description: 'A concise corporate website created to present a company’s services, portfolio, and contact information. Designed for rapid deployment and a professional online presence.',
        tags: ['Astro', 'Tailwind', 'TypeScript', 'Git', 'Node', 'PHP', 'Kanban']
    },
    {
        title: 'Operations Management System',
        description: 'The first full-stack application I developed for a local transport company to manage operations’s aerea. Applied OOP, MVC, and monolithic design principles to deliver a reliable intranet system for operational teams.',
        tags: ['PHP', 'Linux', 'Monolith Architecture', 'MySQL', 'MVC Architecture', 'Git', 'Bootstrap', 'Kanban','Intranet Management']
    },
    {
        title: 'Personal Portfolio Website',
        description: 'This is the page of my personal portfolio website built with Astro, styled with Tailwind CSS, and implemented in TypeScript. It showcases my frontend skills, selected projects, and technical background.',
        tags: ['Astro', 'Tailwind', 'TypeScript', 'Git', 'Node']
    },
]
