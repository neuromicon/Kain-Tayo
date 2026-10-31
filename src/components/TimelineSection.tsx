import React from 'react';
import { Calendar, CheckCircle2, Store, Users, HeartHandshake, Compass } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Partner Onboarding',
      focus: 'Initial Eateries',
      points: [
        'Direct outreach to independent carinderias near NORSU & Silliman',
        'Negotiate fair standard rice cup pricing (₱10–₱15) and fresh portions',
        'Confirm food safety, operational compliance and sanitary permits',
        'Provide participating counter displays and window identification'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Counter Activation',
      focus: 'Active Participation',
      points: [
        'Introduce the Buy 1 + Give 1 habit to dining customers',
        'Inform university students and high school canteens',
        'Ensure warm and welcoming counter interactions for all who ask',
        'Expand participating eateries across market and transit corridors'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Campus & Civic Engagement',
      focus: 'Broadening Support',
      points: [
        'Coordinate with university student councils and youth organizations',
        'Encourage alumni and local businesses to sponsor pots at neighborhood spots',
        'Gather feedback from participating cooks and student patrons',
        'Normalize asking for a Rice Circle cup as an everyday Dumaguete custom'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Citywide Resilience',
      focus: 'Everyday Reality',
      points: [
        'Establish permanent mutual aid presence across all major Dumaguete barangays',
        'Celebrate local carinderias as core neighborhood community anchors',
        'Share open-source implementation guides with other Negros Oriental towns',
        'Prove that community trust feeds people better than bureaucratic machinery'
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
            Evolution of the Movement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-3">
            Implementation Roadmap
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From initial campus-area eateries to an ingrained, citywide community habit across Dumaguete City.
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, index) => {
            return (
              <div
                key={item.phase}
                className="p-6 rounded-2xl border border-stone-200 bg-[#FAF8F5] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded">
                      {item.phase}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-800">
                      {item.focus}
                    </span>
                  </div>

                  <h3 className="font-bold text-stone-900 text-base mb-3">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-xs text-stone-600 leading-relaxed">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Long-term vision */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span className="font-bold text-stone-900">Decentralized Vision: </span>
            <span className="text-stone-600">
              The ultimate objective is not an organization with offices or computers. The objective is that giving and claiming one extra cup of rice becomes second nature in everyday Dumaguete life.
            </span>
          </div>
          <span className="font-semibold text-brand-600 shrink-0">
            A City That Shares →
          </span>
        </div>
      </div>
    </section>
  );
};
