import React from 'react';
import { Sparkles, Utensils, HeartHandshake, CheckCircle2, Shield, Printer, Store, ExternalLink, Mail } from 'lucide-react';
import { getAssetUrl } from '../utils/paths';

interface HowItWorksProps {
  onOpenClaimGuide: () => void;
  onOpenSupportModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenClaimGuide, onOpenSupportModal }) => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
          Decentralized Community Model
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-3">
          How Giving Rice Works
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          No central kitchen. No food storage warehouses. Anyone can simply pay for a single cup of rice (₱10–₱15) to keep warm food waiting for someone in need.
        </p>
      </div>

      {/* 3 Clear Steps Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {/* Step 1: Clarified - pay for just a portion of rice */}
        <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs relative flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg mb-5 font-mono">
              01
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Pay for Just a Cup of Rice
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              You do <strong>not</strong> need to buy a full viand meal. When ordering, simply add an extra cup of rice (₱10–₱15) — or walk up to the counter specifically to pay for a cup of rice for someone else.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-amber-800 font-semibold">Just ₱10–₱15 per cup</span>
            <button
              onClick={onOpenSupportModal}
              className="text-stone-700 hover:text-amber-800 underline font-medium"
            >
              Learn more →
            </button>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs relative flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg mb-5 font-mono">
              02
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              The Pot Stays Full
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              The carinderia cook keeps the payment upfront in their drawer. Fresh steamed rice is maintained hot in the normal daily pots, ready to be scooped whenever asked.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500 font-medium">
            <Utensils className="w-4 h-4 text-amber-600" />
            <span>100% paid upfront to the cook</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs relative flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg mb-5 font-mono">
              03
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Claimed with Dignity
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              A student, schoolchild, or neighbor having a hard day steps up and asks. The cook serves a hot cup of rice onto their plate or container. No proof of poverty. No questions asked.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
              <HeartHandshake className="w-4 h-4" />
              <span>Free ₱0 for recipient</span>
            </div>
            <button
              onClick={onOpenClaimGuide}
              className="text-xs text-stone-800 underline font-semibold hover:text-amber-700"
            >
              Read Claim Guide
            </button>
          </div>
        </div>
      </div>

      {/* For Partners: Just print and place on counter banner */}
      <div className="bg-amber-500 text-stone-950 rounded-3xl p-8 sm:p-10 shadow-lg mb-14">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-950 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Printer className="w-3.5 h-3.5" />
              <span>For Food Vendors & Carinderia Owners</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-tight mb-3">
              To be a partner, you only need to print one page and place it at your cash register.
            </h3>
            <p className="text-stone-900 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              No apps to install. No technical equipment. No sign-up fee. You simply print our official counter sign or display poster, put it near your cashbox, and keep the rice pot warm for people who need it.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="https://forms.gle/v6x6HVLLgUudt7fC8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-stone-950 hover:bg-stone-900 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <Store className="w-4 h-4 text-amber-400" />
              <span>Sign Up as a Partner</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={getAssetUrl('assets/aistudio/Kain_Tayo_Printable_Toolkit_654d1884.pdf')}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white hover:bg-amber-50 text-stone-900 font-semibold text-xs text-center border border-amber-600/40 flex items-center justify-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-amber-700" />
              <span>Get 1-Page Printable Counter Sign</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dignity & Architecture Highlight Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
              Dignity First
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-1 mb-4 text-balance">
              No IDs. No Stigma. Open to All.
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              Priority is given to university students (such as NORSU, Silliman, and Foundation University) and schoolchildren facing food insecurity. However, access is completely open: if you need warm rice today, you can ask without signing a ledger, showing a card, or feeling judged.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-xs text-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No income verification or paperwork</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% upfront vendor reimbursement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Steaming fresh cooked rice on demand</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1 standard serving per visit</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-stone-800/90 rounded-2xl p-6 border border-stone-700">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Why Just Cooked Rice?</span>
            </h4>
            <ul className="space-y-3 text-xs text-stone-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">·</span>
                <span>
                  <strong>Affordable for Everyone:</strong> At ₱10–₱15, anyone can sponsor a cup of rice. It is small enough that any student or worker can participate easily.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">·</span>
                <span>
                  <strong>Zero Waste & Fresh:</strong> Rice is cooked in daily pots. It doesn't spoil in storage or sit in vans.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">·</span>
                <span>
                  <strong>Core Nourishment:</strong> Many struggling students have canned goods or dried fish in their boarding rooms, but lack fresh rice. A warm cup makes a full meal possible.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
