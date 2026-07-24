export interface EducationItem {
    degree: string
    institution: string
    boardOrUniversity: string
    year: string
    score: string
}

export interface WorkExperienceItem {
    role: string
    organization: string
    location: string
    duration: string
    responsibilities: string[]
}

export interface SkillCategory {
    category: string
    items: string[]
}

export interface ContactChannel {
    type: 'email' | 'phone' | 'whatsapp'
    value: string
    label: string
    href: string
}

export interface ClientProfile {
    name: string
    titles: string[]
    summary: string
    location: {
        city: string
        state: string
        country: string
    }
    workHistory: WorkExperienceItem[]
    educationHistory: EducationItem[]
    skills: {
        technical: SkillCategory[]
        soft: string[]
    }
    languages: {
        name: string
        fluency: string
    }[]
    contact: {
        email: string
        phone: string
        whatsapp: string
        displayPhone: string
    }
}
