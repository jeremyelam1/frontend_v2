export interface Experience {
    title: string;
    company: string;
    period: string;
    achievements: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
}

export interface Skill {
    category: string;
    skills: string[];
}

export interface Contact {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
}

export interface ResumeData {
    name: string;
    title: string;
    contact: Contact;
    summary: string;
    skills: Skill[];
    experience: Experience[];
    education: Education[];
    strengths: string[];
}
