export interface SkillGroup {
  category: string
  icon: string
  items: { name: string; primary?: boolean }[]
}

// Lucide-style 24x24 stroke icons.
const icons = {
  server:
    'M5 3h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 14h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zM7 6.5h.01M7 17.5h.01',
  layout:
    'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zM3 9h18M9 21V9',
  cloud:
    'M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.3 4 4 0 0 0 7 17h10.5z',
  wrench:
    'M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.1-2.1 2.3-2.3z',
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    icon: icons.server,
    items: [
      { name: '.NET', primary: true },
      { name: 'Aspire', primary: true },
      { name: 'C#' },
      { name: 'Entity Framework' },
      { name: 'REST APIs' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frontend',
    icon: icons.layout,
    items: [
      { name: 'Angular', primary: true },
      { name: 'React', primary: true },
      { name: 'Next.js', primary: true },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'RxJS' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: icons.cloud,
    items: [{ name: 'Azure' }, { name: 'Docker' }, { name: 'Microservices' }],
  },
  {
    category: 'Tools',
    icon: icons.wrench,
    items: [{ name: 'Git' }, { name: 'Node.js' }],
  },
]
