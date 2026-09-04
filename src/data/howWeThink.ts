export interface HowWeThinkStage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const howWeThinkStages: HowWeThinkStage[] = [
  {
    id: 'goal',
    title: 'Goal',
    description: 'We start by understanding what success looks like for your business.',
    icon: 'Target',
  },
  {
    id: 'research',
    title: 'Research',
    description: 'We dive deep into your market, competitors, and audience.',
    icon: 'Search',
  },
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'We build a roadmap that connects your goals to measurable outcomes.',
    icon: 'Map',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'We create experiences that are intuitive, beautiful, and effective.',
    icon: 'Palette',
  },
  {
    id: 'build',
    title: 'Build',
    description: 'We develop with quality, speed, and scalability in mind.',
    icon: 'Code',
  },
  {
    id: 'grow',
    title: 'Grow',
    description: 'We optimize, iterate, and scale based on real performance data.',
    icon: 'TrendingUp',
  },
];
