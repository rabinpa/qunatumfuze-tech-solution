export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const capabilities: Capability[] = [
  {
    id: 'fast-turnaround',
    title: 'Fast Turnaround',
    description: 'We deliver results quickly without compromising quality or attention to detail.',
    icon: 'Rocket',
  },
  {
    id: 'dedicated-team',
    title: 'One Dedicated Team',
    description: 'A single point of contact with full access to our entire multidisciplinary team.',
    icon: 'Users',
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees or unexpected charges.',
    icon: 'DollarSign',
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    description: 'We stick around after launch with continuous support and optimization.',
    icon: 'LifeBuoy',
  },
];
