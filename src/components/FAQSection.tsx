import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Do you keep track of every single cup or run a digital ledger?',
    answer:
      'No. We do not count or run bureaucratic ledgers — we simply know that it is there. Mutual aid functions on community trust, human relationship, and neighborhood solidarity, not surveillance or artificial scorecards. When people eat, they pay forward an extra cup; when someone is hungry, the cook scoops warm rice.'
  },
  {
    question: 'Are you building central kitchens or cooking food yourselves?',
    answer:
      'No. Rice Circle Dumaguete does not operate kitchens, lease warehouses, or manage delivery fleets. We empower existing, licensed Dumaguete carinderias directly, putting money straight into neighborhood micro-businesses while serving hot, fresh rice right where students and workers already eat.'
  },
  {
    question: 'Who is eligible to claim a free rice serving?',
    answer:
      'Access is open to everyone, with priority for university & high school students (such as NORSU, Silliman, and Foundation University students) and children facing food insecurity. However, anyone having a tough day can request a Rice Circle serving with zero proof of income, zero ID cards, and zero questions asked.'
  },
  {
    question: 'Can someone take 10 servings home at once?',
    answer:
      'No. To ensure equitable access and maintain strict food safety, portions are strictly limited to one standard serving per person per visit, intended for immediate hot consumption at the table or in a personal container.'
  },
  {
    question: 'Is this initiative affiliated with any political candidate or party?',
    answer:
      '100% non-partisan and decentralized. Rice Circle is a civic mutual-aid tradition created by Dumaguete citizens, students, and small local businesses. No government funds, campaign endorsements, or political sponsorships are accepted.'
  },
  {
    question: 'What food safety standards are enforced?',
    answer:
      'Rice Circle only partners with established food establishments possessing valid sanitary permits and health certificates for food handlers issued by the Dumaguete City Health Office. Rice is prepared fresh and kept hot according to municipal food safety standards.'
  },
  {
    question: 'Why focus specifically on cooked rice?',
    answer:
      'Rice is the staple heartbeat of Filipino nutrition. At ₱10–₱15, it represents the most universally accessible and affordable carbohydrate base. Many struggling students carry dried fish or canned viand but skip rice due to budget constraints; providing warm rice guarantees immediate nourishment with zero distribution waste.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 tracking-wider uppercase mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>Clear Principles & Trust</span>
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Common questions regarding our philosophy, carinderia partners, and recipient dignity.
          </p>
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-colors shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-stone-900 hover:text-amber-800 transition-colors focus-visible:outline-2 focus-visible:outline-amber-600"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
