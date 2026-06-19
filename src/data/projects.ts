export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  /** Small WebP shown in the grid. */
  cover: string
  /** Full-res WebP images for the lightbox. */
  images: string[]
  featured?: boolean
}

const opt = (name: string) => `/projects/opt/${name}`

export const projects: Project[] = [
  {
    title: 'Carsties',
    description:
      'Car auction platform built as a set of .NET microservices with an event-driven backend and a Next.js front end.',
    tags: ['.NET', 'Microservices', 'RabbitMQ', 'Next.js', 'Docker'],
    github: 'https://github.com/tudornicoara/Carsties',
    featured: true,
    cover: opt('carsties1.cover.webp'),
    images: [opt('carsties1.webp'), opt('carsties2.webp')],
  },
  {
    title: 'Dating App',
    description:
      'Full-stack dating app with real-time messaging and presence, an Angular front end and a .NET API.',
    tags: ['Angular', '.NET', 'SignalR', 'EF Core'],
    github: 'https://github.com/tudornicoara/DatingApp2',
    cover: opt('datingApp1.cover.webp'),
    images: [
      opt('datingApp1.webp'),
      opt('datingApp2.webp'),
      opt('datingApp3.webp'),
      opt('datingApp4.webp'),
      opt('datingApp5.webp'),
      opt('datingApp6.webp'),
    ],
  },
  {
    title: 'Reactivities',
    description:
      'Social activities app where users create and attend events, built with a React client and a .NET clean-architecture API.',
    tags: ['React', '.NET', 'TypeScript', 'MobX'],
    github: 'https://github.com/tudornicoara/reactivities',
    cover: opt('reactivities1.cover.webp'),
    images: [opt('reactivities1.webp'), opt('reactivities2.webp')],
  },
  {
    title: 'ReStore',
    description:
      'Full-stack e-commerce store with a product catalog, search, filtering, shopping cart, and a multi-step checkout flow with Stripe payments.',
    tags: ['React', 'TypeScript', '.NET', 'EF Core', 'Stripe'],
    github: 'https://github.com/tudornicoara/ReStore',
    cover: opt('reStore1.cover.webp'),
    images: [
      opt('reStore1.webp'),
      opt('reStore2.webp'),
      opt('reStore3.webp'),
      opt('reStore4.webp'),
      opt('reStore5.webp'),
    ],
  },
  {
    title: 'Self-Driving Car',
    description:
      'TypeScript simulation of a car learning to navigate traffic via a neural network. Save the best brain each generation and evolve it over successive runs.',
    tags: ['TypeScript', 'Neural Network', 'Canvas API', 'AI'],
    github: 'https://github.com/tudornicoara/SelfDrivingCarNeuralNetwork',
    live: 'https://selfdrivingcar.tudornicoara.com',
    cover: opt('selfDrivingCar1.cover.webp'),
    images: [opt('selfDrivingCar1.webp')],
  },
  {
    title: 'Minesweeper',
    description:
      'Classic Minesweeper rebuilt for the web — pick a difficulty and play. Live and hosted.',
    tags: ['React', 'TypeScript', 'Game'],
    github: 'https://github.com/tudornicoara/Minesweeper',
    live: 'https://minesweeper.tudornicoara.com',
    cover: opt('minesweeper.cover.webp'),
    images: [opt('minesweeper.webp')],
  },
]
