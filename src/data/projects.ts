export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'Placeholder. Replace with a real project — what it does and the problem it solves.',
    tags: ['.NET', 'Angular', 'SQL'],
    github: 'https://github.com/tudornicoara',
  },
  {
    title: 'Project Two',
    description: 'Placeholder. Add a Next.js or React app here with a live demo link.',
    tags: ['Next.js', 'React', 'TypeScript'],
    github: 'https://github.com/tudornicoara',
  },
  {
    title: 'Project Three',
    description: 'Placeholder. Showcase a cloud-native service built with .NET Aspire.',
    tags: ['.NET', 'Aspire', 'Docker'],
    github: 'https://github.com/tudornicoara',
  },
]
