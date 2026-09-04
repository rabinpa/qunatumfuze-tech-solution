import {
  Hero,
  CapabilitySection,
  SolutionsSection,
  HowWeThink,
  FeaturedWork,
  TechnologyEcosystem,
  ProcessSection,
  AboutSection,
  FinalCTA,
} from '@/components/sections';

export default function Home() {
  return (
    <main>
      <Hero />
      <CapabilitySection />
      <SolutionsSection />
      <HowWeThink />
      <FeaturedWork />
      <TechnologyEcosystem />
      <ProcessSection />
      <AboutSection />
      <FinalCTA />
    </main>
  );
}
