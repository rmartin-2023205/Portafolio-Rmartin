export interface NavItem {
  name: string
  href: string
}

export interface EducationItem {
  id: string
  title: string
  institution: string
  period: string
  description: string
  icon: string
}

export interface SkillItem {
  name: string
  level: 'Básico' | 'Intermedio' | 'Avanzado'
  percentage: number
  category?: 'Frontend' | 'Backend' | 'Tools & Design'
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl: string
  demoUrl?: string
  gradient: string
  icon: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  handle: string
}

export interface PortfolioData {
  personal: {
    name: string
    fullName: string
    role: string
    shortRole: string
    description: string
    aboutParagraphs: string[]
    email: string
    github: string
    linkedin: string
    cvUrl: string
  }
  navigation: NavItem[]
  education: EducationItem[]
  skills: SkillItem[]
  projects: ProjectItem[]
  experience: ExperienceItem[]
}
