export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  objective: string;
  clientExperience: string;
  teamDelivers: string;
  duration: string;
}

export const processStages: ProcessStage[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description: 'We learn about your business, goals, and challenges.',
    icon: 'Compass',
    objective: 'Understand your business, audience, and what success looks like.',
    clientExperience: 'You share your vision, goals, and challenges with our team.',
    teamDelivers: 'A comprehensive discovery report and project roadmap.',
    duration: '1-2 weeks',
  },
  {
    id: 'define',
    number: '02',
    title: 'Define',
    description: 'We outline the scope, timeline, and success metrics.',
    icon: 'FileText',
    objective: 'Create a clear plan with defined scope, timeline, and success metrics.',
    clientExperience: 'You review and approve the project plan, timeline, and budget.',
    teamDelivers: 'A detailed project scope, technical requirements, and success metrics.',
    duration: '1-2 weeks',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    description: 'We create prototypes and visual designs for your approval.',
    icon: 'PenTool',
    objective: 'Translate requirements into intuitive, beautiful designs.',
    clientExperience: 'You provide feedback on designs and prototypes.',
    teamDelivers: 'Interactive prototypes, visual designs, and design systems.',
    duration: '2-4 weeks',
  },
  {
    id: 'build',
    number: '04',
    title: 'Build',
    description: 'We develop, test, and refine until everything is production-ready.',
    icon: 'Code',
    objective: 'Build a high-quality, scalable solution that meets your needs.',
    clientExperience: 'You review progress, test features, and provide feedback.',
    teamDelivers: 'A fully tested, production-ready solution.',
    duration: '4-12 weeks',
  },
  {
    id: 'improve',
    number: '05',
    title: 'Improve',
    description: 'We monitor, optimize, and scale based on real results.',
    icon: 'TrendingUp',
    objective: 'Optimize performance and scale based on real-world data.',
    clientExperience: 'You review performance reports and discuss next steps.',
    teamDelivers: 'Performance metrics, optimization recommendations, and ongoing support.',
    duration: 'Ongoing',
  },
];

export const processFAQs = [
  {
    question: 'Do you handle hosting and maintenance?',
    answer: 'Yes, we offer hosting and ongoing maintenance packages to keep your solution running smoothly. We can also work with your existing infrastructure if you prefer to self-host.',
  },
  {
    question: 'Can you just do the marketing if someone else built our site?',
    answer: "Absolutely. We work with existing websites, apps, and brands — we don't require you to use all four services. We integrate with whatever you already have.",
  },
  {
    question: 'Do you sign ongoing retainers or project-only work?',
    answer: "We offer both options. Some clients prefer a project-based engagement, while others choose ongoing retainers for continuous improvement and support. We'll recommend what makes sense for your goals.",
  },
  {
    question: 'What if I need to pivot during the project?',
    answer: 'We build flexibility into our process. Our approach is iterative, so we can adjust direction based on new insights, changing priorities, or market shifts without losing momentum.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'You get a dedicated project manager who serves as your single point of contact. We use a combination of regular check-ins, progress reports, and collaborative tools to keep you informed at every stage.',
  },
];
