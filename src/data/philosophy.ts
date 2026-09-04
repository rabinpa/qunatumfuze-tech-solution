export interface PhilosophyPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    id: 'one-team',
    title: 'Think as one team.',
    description: "We integrate with your business like we're part of your company, not an outside vendor.",
    icon: 'Users',
  },
  {
    id: 'customer-first',
    title: 'Design for the customer.',
    description: "Every decision we make starts with your customer's needs and ends with their satisfaction.",
    icon: 'Heart',
  },
  {
    id: 'measure-growth',
    title: 'Measure real growth.',
    description: "We don't just build things — we track whether they actually drive meaningful results.",
    icon: 'BarChart',
  },
];
