import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    title: 'Discover',
    objective: 'Understand your business, audience, and goals before we propose anything.',
    clientExperience:
      'A focused conversation about where you are, where you want to be, and what success looks like. No jargon, no assumptions.',
    deliverables: 'Project brief, success criteria, timeline estimate',
    duration: '1–2 weeks',
  },
  {
    id: 'define',
    title: 'Define',
    objective: 'Turn discovery insights into a clear scope and strategy.',
    clientExperience:
      'We present a concrete plan — what we\'ll build, how we\'ll measure it, and what it will cost. You approve before anything is designed.',
    deliverables: 'Scope document, sitemap or campaign plan, budget confirmation',
    duration: '1 week',
  },
  {
    id: 'design',
    title: 'Design',
    objective: 'Create the visual and experiential direction.',
    clientExperience:
      'You see wireframes or campaign concepts early. Feedback is structured and focused — we refine until it\'s right, not until it\'s different.',
    deliverables: 'Visual designs, prototypes, or campaign creative',
    duration: '2–3 weeks',
  },
  {
    id: 'build',
    title: 'Build',
    objective: 'Develop, test, and prepare for launch.',
    clientExperience:
      'Regular progress updates. A staging environment to review before anything goes live. No surprises at launch.',
    deliverables: 'Tested product, launch plan, documentation',
    duration: '3–6 weeks',
  },
  {
    id: 'improve',
    title: 'Improve',
    objective: 'Measure real performance and iterate.',
    clientExperience:
      'Post-launch analysis and ongoing optimization. We don\'t disappear after launch — we use data to make things better.',
    deliverables: 'Performance report, optimization recommendations, iteration plan',
    duration: 'Ongoing',
  },
];
