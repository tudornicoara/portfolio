export interface Experience {
  role: string
  company: string
  period: string
  blurb: string
}

export const experience: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Dennemeyer',
    period: '2024 — Present',
    blurb:
      'Software solutions for managing and renewing intellectual properties. Stack: .NET, Angular, Aspire, CQRS.',
  },
  {
    role: 'Software Developer',
    company: 'Endava',
    period: '2021 — 2024',
    blurb:
      'Built web apps for insurance underwriters, HR dashboards, and stock trading microservices. Stack: .NET Core 3.1–6, Angular 8–13, React, Azure, Microservices, PostgreSQL, CosmosDB.',
  },
  {
    role: 'Software Developer',
    company: 'Integrisoft Solutions',
    period: '2021 — 2021',
    blurb:
      'Management app for city halls and incident recorder for police forces. Stack: .NET Core 3.1, ABP.io, Angular 8–12, SQL Server, Docker.',
  },
  {
    role: 'Software Developer',
    company: 'Gemini CAD Systems',
    period: '2019 — 2020',
    blurb:
      '3D simulation of clothing using C++, Unreal Engine, and Nvidia FleX.',
  },
]
