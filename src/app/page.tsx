import {
  Hero,
  CapabilitySection,
  SolutionsSection,
  HowWeThink,
  FeaturedWork,
  ProcessSection,
  AboutSection,
  FinalCTA,
} from '@/components/sections';
import { TechnologyEcosystem } from '@/components/sections/TechnologyEcosystem';

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
