import React from "react";
import { ChevronDown } from "lucide-react";

// Accordion-like FAQ block using native <details> for SEO-friendly rendering.
const FaqBlock = ({ items = [], title = "Sıkça Sorulan Sorular" }) => {
  if (!items.length) return null;
  return (
    <section className="container-wide" data-testid="faq-section">
      <div className="max-w-3xl mx-auto">
        <p className="overline mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-heading mb-10 text-ink tracking-tight">
          {title}
        </h2>
        <div className="divide-y divide-border">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group py-5"
              data-testid={`faq-item-${idx}`}
            >
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <span className="font-heading text-lg md:text-xl text-ink pr-4">
                  {item.q}
                </span>
                <ChevronDown className="w-5 h-5 text-brand flex-shrink-0 mt-1 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="mt-4 text-base text-ink-muted leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqBlock;
