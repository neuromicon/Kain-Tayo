import React from 'react';
import { Heart, Flame, Shield, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const OurPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-20 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Our Guiding Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            We don't count meals.{' '}
            <span className="text-brand-600">We simply know that it's there.</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Mutual aid is not an accounting exercise or an inventory dashboard. It is an act of everyday community trust between neighbors, students, and local cooks.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
                <Heart className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-2">
                Unconditional Trust
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                When you buy an extra cup, you leave it in the hands of the cook. No surveillance, no token machines, no audit overhead. Trust makes kindness swift and human.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-amber-800">
              Kindness needs no receipt
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                <Flame className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-2">
                The Pot Stays Warm
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Carinderias steam fresh pots of rice throughout the day. When someone steps up to the counter hungry, warm rice is scooped on the spot — freshly made, never pre-packed.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-emerald-800">
              Hot & fresh on demand
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center font-bold mb-4">
                <Shield className="w-5 h-5 text-stone-700" />
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-2">
                Zero Stigma & Paperwork
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                No proof of poverty, no student ID inspection, no logbooks to sign. Anyone who needs warm rice today can claim one with total privacy and self-respect.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-stone-700">
              Dignity is non-negotiable
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-2">
                Local Neighborhood Wealth
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Instead of centralized warehouses or outside charities, 100% of community contributions go straight to local Dumaguete eateries and their cooking families.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-amber-800">
              Strengthening our city
            </div>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200 flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
            🌾
          </div>
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h4 className="font-bold text-stone-900 text-base mb-1">
              "How do I know there's rice available?"
            </h4>
            <p>
              When a city decides that eating is a collective responsibility, carinderias become living community kitchens. Whenever you eat at a partner shop, paying for one extra serving (₱10–₱15) ensures the rice cooker is never turned off for someone who arrives with an empty stomach. You don't need to check a computer — you simply visit the shop and ask.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
