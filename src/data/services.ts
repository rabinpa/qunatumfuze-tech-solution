export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
  outcomes: string[];
  problem: string;
  approach: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Automation',
    description: 'Intelligent automation solutions that streamline operations, reduce costs, and unlock new capabilities.',
    icon: 'Cpu',
    capabilities: ['Process automation', 'AI-powered decision making', 'Custom AI model development', 'Workflow optimization'],
    outcomes: ['Reduced operational costs', 'Faster decision-making with AI insights', 'Eliminated manual repetitive tasks'],
    problem: 'Many businesses still rely on manual processes that slow down operations, introduce errors, and prevent teams from focusing on high-value work.',
    approach: ['Audit existing processes', 'Design custom AI solutions', 'Implement incrementally', 'Monitor and optimize'],
    faqs: [
      { question: 'What types of processes can you automate?', answer: 'We automate repetitive, rule-based tasks across departments.' },
      { question: 'Do I need existing data to use AI?', answer: 'While having historical data helps, it is not always required.' },
      { question: 'How long does it take to implement automation?', answer: 'Simple automations can be deployed in 2-4 weeks.' },
      { question: 'Is AI secure for my business data?', answer: 'Yes. We implement enterprise-grade security measures.' },
    ],
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Software Development',
    description: 'Custom software solutions built to solve your unique business challenges and scale with your growth.',
    icon: 'Code2',
    capabilities: ['Custom web applications', 'Enterprise software', 'API development', 'Legacy system modernization'],
    outcomes: ['Scalable software architecture', 'Seamless integrations', 'Faster time-to-market'],
    problem: 'Off-the-shelf software often forces businesses to adapt their processes to the tool, rather than the other way around.',
    approach: ['Discovery phase', 'Scalable architecture design', 'Iterative development', 'Ongoing support'],
    faqs: [
      { question: 'What tech stack do you use?', answer: 'We choose technologies based on your project requirements.' },
      { question: 'Do you handle hosting and maintenance?', answer: 'Yes. We offer full lifecycle support.' },
      { question: 'Can you integrate with my existing systems?', answer: 'Absolutely. We specialize in integrations.' },
      { question: 'How do you ensure software quality?', answer: 'We use automated testing and code reviews.' },
    ],
  },
  {
    id: 'product-design',
    slug: 'product-design',
    title: 'Product Design',
    description: 'Human-centered design that transforms complex problems into intuitive, beautiful digital products.',
    icon: 'Palette',
    capabilities: ['UX/UI design', 'User research', 'Prototyping', 'Design systems'],
    outcomes: ['Higher user satisfaction', 'Increased conversion rates', 'Consistent brand experience'],
    problem: 'Many digital products fail not because of technology, but because of poor design.',
    approach: ['User research', 'Wireframes and prototypes', 'High-fidelity designs', 'Design systems'],
    faqs: [
      { question: 'How involved will I be in the design process?', answer: 'Very involved. We believe in close collaboration.' },
      { question: 'What deliverables do you provide?', answer: 'Wireframes, prototypes, designs, and design systems.' },
      { question: 'Do you do user testing?', answer: 'Yes. We conduct usability testing with real users.' },
      { question: 'Can you design for both web and mobile?', answer: 'Absolutely. We design responsive experiences.' },
    ],
  },
  {
    id: 'business-solutions',
    slug: 'business-solutions',
    title: 'Business Solutions',
    description: 'Strategic technology solutions that align with your business goals and drive measurable growth.',
    icon: 'Briefcase',
    capabilities: ['Digital transformation', 'Business process optimization', 'Technology strategy', 'Change management'],
    outcomes: ['Improved operational efficiency', 'Clear technology roadmap', 'Competitive advantage'],
    problem: 'Technology should drive business growth, but many organizations struggle to connect technology investments with real business outcomes.',
    approach: ['Align with business objectives', 'Assess current state', 'Create phased roadmap', 'Measure business metrics'],
    faqs: [
      { question: 'What does digital transformation actually mean?', answer: 'Integration of digital technology into all areas of your business.' },
      { question: 'How do you measure business impact?', answer: 'We define success metrics at the start of every engagement.' },
      { question: 'How long does a transformation project take?', answer: 'Quick wins in 3-6 months, full transformation over 12-24 months.' },
      { question: 'Do you provide training for my team?', answer: 'Yes. We provide training and knowledge transfer.' },
    ],
  },
  {
    id: 'it-consulting',
    slug: 'it-consulting',
    title: 'IT Consulting',
    description: 'Expert guidance on technology strategy, infrastructure, and implementation to ensure your success.',
    icon: 'Users',
    capabilities: ['Technology assessment', 'IT strategy development', 'Vendor selection', 'Implementation oversight'],
    outcomes: ['Optimized technology stack', 'Reduced risk', 'Better ROI on technology investments'],
    problem: 'Making the right technology decisions is critical but complex. Without expert guidance, organizations risk investing in the wrong solutions.',
    approach: ['Comprehensive assessment', 'Strategic roadmap', 'Vendor evaluation', 'Implementation oversight'],
    faqs: [
      { question: 'Do you work with existing vendors?', answer: 'Yes. We can work with your current vendors or help you find new ones.' },
      { question: 'How do you assess our technology needs?', answer: 'We evaluate your current technology against your business goals.' },
      { question: 'What is your approach to risk management?', answer: 'We identify risks early and develop mitigation strategies.' },
      { question: 'Do you help with implementation or just strategy?', answer: 'Both. We provide full lifecycle support.' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
