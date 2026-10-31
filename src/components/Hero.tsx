import React from 'react';
import { ArrowRight, Store, ShieldCheck, HeartHandshake, CheckCircle2, FolderGit2, Printer } from 'lucide-react';
import heroRiceImage from '../assets/images/hero_rice_dumaguete_1793432425673.jpg';

interface HeroProps {
  onOpenPartnerModal: () => void;
  onOpenClaimGuide: () => void;
  onOpenSupportModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenPartnerModal,
  onOpenClaimGuide,
  onOpenSupportModal,
}) => {
  return (
    <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Pilot campaign tag & Open Repo Badge */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider border border-amber-200/60 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-600" />
          <span>Decentralized Community Initiative · Dumaguete City</span>
        </div>
        <a
          href="#toolkit"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono font-semibold hover:bg-stone-800 transition-colors shadow-xs"
        >
          <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Open Toolkit & Printables</span>
        </a>
      </div>

      {/* Main Hero Grid */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12] mb-6 text-balance">
            One for you.{' '}
            <span className="text-brand-600 underline decoration-amber-200 decoration-8 underline-offset-4">
              One for someone who needs it.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 font-normal">
            You don't need to sponsor an entire expensive meal. At your neighborhood Dumaguete carinderia,{' '}
            <strong className="text-stone-900 font-semibold">
              simply pay for just a single cup of rice (₱10–₱15)
            </strong>.
            You can add an extra cup of rice to your own order, or simply stop by and pay for a cup of rice for someone in need. The rice stays ready in the pot for a university student, schoolchild, or neighbor having a hard day. No questions. No judgment. No registration.
          </p>

          {/* Quick Partner Note */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 mb-8 flex items-center gap-2.5">
            <Printer className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Are you a carinderia owner?</strong> Joining takes 2 minutes: just print 1 page and display it at your cash register.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
            <a
              href="#partners"
              className="px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              <Store className="w-4 h-4 text-amber-200" />
              <span>Partner Eateries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenClaimGuide}
              className="px-6 py-3.5 rounded-xl bg-white border border-stone-300 text-stone-800 font-semibold text-sm hover:bg-stone-50 transition-colors shadow-xs flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-stone-600" />
              <span>How to Claim Free Rice</span>
            </button>

            <a
              href="#toolkit"
              className="px-4 py-3.5 rounded-xl border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-800 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
            >
              <FolderGit2 className="w-4 h-4 text-amber-600" />
              <span>Printable Kit & Poster</span>
            </a>
          </div>

          {/* Core Guarantees & Values */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-200/80 text-left text-xs text-stone-600">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Just ₱10–₱15:</strong> Sponsoring just rice is easy</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Zero Stigma:</strong> No IDs or proof of poverty</span>
            </div>
            <div className="flex items-start gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>100% Direct:</strong> Cash stays with local cooks</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Asset */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[4/3] sm:aspect-[16/11] bg-stone-100">
            <img
              src={heroRiceImage}
              alt="Fresh steaming white rice served in a rustic carinderia bowl in Dumaguete City"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Scrim for legible caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent text-white">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-300">Neighborhood Carinderia Network</span>
                <span className="text-stone-300">Dumaguete City</span>
              </div>
              <p className="text-[11px] text-stone-200 mt-0.5">
                Steaming hot rice, prepared fresh in neighborhood carinderias.
              </p>
            </div>
          </div>

          {/* Floating trust card */}
          <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl border border-stone-200 shadow-lg items-center gap-3 max-w-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-stone-900">Direct Mutual Aid</p>
              <p className="text-stone-500 text-[11px]">No middlemen. Paid straight to local eatery owners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
