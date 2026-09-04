'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

interface FAQ {
  question: string;
  answer: string;
}

interface ProcessFAQsProps {
  faqs: FAQ[];
}

/**
 * FAQ accordion for the process page.
 */
export function ProcessFAQs({ faqs }: ProcessFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-neutral-border rounded-md overflow-hidden bg-neutral-white">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left hover:bg-neutral-lightgray transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              aria-expanded={isOpen}
              aria-controls={`process-faq-answer-${index}`}
            >
              <span className="font-medium text-navy">{faq.question}</span>
              <ChevronDown
                size={20}
                className={cn('text-neutral-secondary transition-transform', isOpen ? 'rotate-180' : '')}
              />
            </button>
            <div
              id={`process-faq-answer-${index}`}
              className={cn('px-5 pb-5', isOpen ? 'block' : 'hidden')}
            >
              <p className="text-neutral-secondary">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
