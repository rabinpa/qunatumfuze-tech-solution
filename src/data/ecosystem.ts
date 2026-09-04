export interface EcosystemNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

export interface EcosystemConnection {
  from: string;
  to: string;
}

export const ecosystemNodes: EcosystemNode[] = [
  { id: 'web', label: 'Web', x: 25, y: 15 },
  { id: 'mobile', label: 'Mobile', x: 65, y: 10 },
  { id: 'seo', label: 'SEO', x: 80, y: 35 },
  { id: 'branding', label: 'Branding', x: 70, y: 65 },
  { id: 'social', label: 'Social', x: 30, y: 70 },
  { id: 'analytics', label: 'Analytics', x: 15, y: 45 },
];

export const ecosystemConnections: EcosystemConnection[] = [
  { from: 'web', to: 'mobile' },
  { from: 'web', to: 'seo' },
  { from: 'web', to: 'analytics' },
  { from: 'mobile', to: 'social' },
  { from: 'mobile', to: 'branding' },
  { from: 'seo', to: 'analytics' },
  { from: 'seo', to: 'social' },
  { from: 'branding', to: 'social' },
  { from: 'branding', to: 'analytics' },
  { from: 'social', to: 'analytics' },
];
