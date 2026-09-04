import { CheckCircle } from 'lucide-react';

interface ServiceCapabilitiesProps {
  capabilities: string[];
  outcomes: string[];
}

/**
 * Capabilities and outcomes section for service detail pages.
 */
export function ServiceCapabilities({ capabilities, outcomes }: ServiceCapabilitiesProps) {
  return (
    <section className="py-24 bg-neutral-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Capabilities */}
          <div>
            <h2 className="text-2xl font-display font-medium text-navy mb-6">Capabilities</h2>
            <ul className="space-y-3">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-bright flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-secondary">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="text-2xl font-display font-medium text-navy mb-6">Outcomes</h2>
            <ul className="space-y-3">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-secondary">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
