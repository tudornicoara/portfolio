export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  images: string[]
}

export const projects: Project[] = [
  {
    title: 'Carsties',
    description:
      'Car auction platform built as a set of .NET microservices with an event-driven backend and a Next.js front end.',
    tags: ['.NET', 'Microservices', 'RabbitMQ', 'Next.js', 'Docker'],
    github: 'https://github.com/tudornicoara/Carsties',
    images: ['/projects/carsties1.png', '/projects/carsties2.png'],
  },
  {
    title: 'Dating App',
    description:
      'Full-stack dating app with real-time messaging and presence, an Angular front end and a .NET API.',
    tags: ['Angular', '.NET', 'SignalR', 'EF Core'],
    github: 'https://github.com/tudornicoara/DatingApp2',
    images: [
      '/projects/datingApp1.png',
      '/projects/datingApp2.png',
      '/projects/datingApp3.png',
      '/projects/datingApp4.png',
      '/projects/datingApp5.png',
      '/projects/datingApp6.png',
    ],
  },
  {
    title: 'Reactivities',
    description:
      'Social activities app where users create and attend events, built with a React client and a .NET clean-architecture API.',
    tags: ['React', '.NET', 'TypeScript', 'MobX'],
    github: 'https://github.com/tudornicoara/reactivities',
    images: ['/projects/reactivities1.png', '/projects/reactivities2.png'],
  },
  {
    title: 'Minesweeper',
    description:
      'Classic Minesweeper rebuilt for the web — pick a difficulty and play. Live and hosted.',
    tags: ['React', 'TypeScript', 'Game'],
    github: 'https://github.com/tudornicoara/Minesweeper',
    live: 'https://minesweeper.tudornicoara.com',
    images: ['/projects/minesweeper.png'],
  },
]
