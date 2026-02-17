export interface CvExperience {
  role: string
  company: string
  companySubline?: string
  companyLogo?: string
  period: string
  bullets: string[]
  selectedProjects?: string[]
}

export interface CvTechnicalStackGroup {
  label: string
  items: string[]
}

export interface CvEducationEntry {
  degree: string
  institution: string
  year: string
}

export interface CvLanguage {
  name: string
  level: string
}

export interface CvSections {
  summary: string
  competencies: string
  experience: string
  technicalStack: string
  education: string
  languages: string
  selectedProjects: string
}

export interface CvData {
  name: string
  title: string
  location: string
  email: string
  linkedIn: string
  summary: string
  summaryNote?: string
  competencies: string[]
  experience: CvExperience[]
  technicalStack: CvTechnicalStackGroup[]
  education: CvEducationEntry[]
  languages: CvLanguage[]
  sections: CvSections
  skipToContent: string
}
