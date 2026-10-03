export interface Project {
  id: string;
  title: string;
  category: string;
  categoryTag: string;
  colorTheme: 'purple' | 'blue' | 'emerald' | 'amber';
  description: string;
  technologies: string[];
  githubUrl: string;
  detailedOverview?: string;
  features?: string[];
  architecture?: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  badgeText: string;
  badgeStyle: 'purple' | 'blue' | 'zinc';
  periodOrScore: string;
  subtext: string;
  isScore?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  color: string;
  skills: string[];
}
