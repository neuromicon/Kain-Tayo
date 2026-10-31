import React, { useState } from 'react';
import { Partner } from '../types';
import { filterApprovedPartners } from '../utils/riceBank';
import { MapPin, Clock, Search, HelpCircle, Store, HeartHandshake, Flame, ExternalLink, Mail, Printer, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface PartnerCarinderiasProps {
  partners: Partner[];
  onOpenClaimGuide: (partner?: Partner) => void;
  onOpenSupportModal: (partner?: Partner) => void;
}

export const PartnerCarinderias: React.FC<PartnerCarinderiasProps> = ({
  partners,
  onOpenClaimGuide,
  onOpenSupportModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Only approved partners where Column L is TRUE
  const approvedPartners = partners.filter((p) => p.isApproved);
  const filtered = filterApprovedPartners(approvedPartners, searchQuery);

  return (
    <section id="partners" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
              Decentralized Carinderia Network
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Partner Eateries in Dumaguete
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-xl">
              Independent local eateries participating in the Buy 1 + Give 1 rice tradition.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 self-start md:self-auto">
            <a
              href="https://forms.gle/v6x6HVLLgUudt7fC8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <Store className="w-4 h-4" />
              <span>Apply as Carinderia Partner</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="mailto:Neuromicon@gmail.com?subject=Rice%20Circle%20Partner%20Inquiry"
              className="text-xs font-medium px-3.5 py-2.5 bg-white text-stone-700 hover:text-stone-900 rounded-xl border border-stone-300 hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>Neuromicon@gmail.com</span>
            </a>
          </div>
        </div>

        {/* If no approved partners yet (Column L is not TRUE), show honest onboarding state */}
        {approvedPartners.length === 0 ? (
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Onboarding Explanation */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span>Currently Onboarding Founding Eateries</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
                  Be our first partner carinderia in Dumaguete!
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                  We are currently enrolling our first pilot food stalls and eateries near NORSU, Silliman University, Foundation University, the Public Market, and Rizal Boulevard. We do not use mock listings — once approved, participating spots appear right here.
                </p>

                {/* 3 Step Simplicity for Eatery Owners */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 mb-6 space-y-3 text-xs">
                  <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Printer className="w-4 h-4 text-amber-700" />
                    <span>How to participate as a food vendor (Takes 2 minutes):</span>
                  </h4>
                  <div className="flex items-start gap-2.5 text-stone-700">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                    <span>Fill out our simple form: <a href="https://forms.gle/v6x6HVLLgUudt7fC8" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold underline">Partner Google Form</a> (or email <a href="mailto:Neuromicon@gmail.com" className="text-amber-700 font-bold underline">Neuromicon@gmail.com</a>).</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-stone-700">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                    <span><strong>Print 1 page</strong> (the counter sign / table tent).</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-stone-700">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                    <span><strong>Place it at your cash register.</strong> When a customer pays +₱10–₱15 for rice, keep the cash. When someone in need asks, scoop warm rice. No app, no fees, no hassle.</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://forms.gle/v6x6HVLLgUudt7fC8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-md"
                  >
                    <span>Sign Up as a Partner Eatery</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="/assets/aistudio/Kain_Tayo_Printable_Toolkit_654d1884.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                  >
                    <Printer className="w-4 h-4 text-stone-600" />
                    <span>Download Counter Sign (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Counter Sign Preview */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200">
                <div className="text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  What Goes on Your Counter:
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-sm text-center">
                  <span className="text-lg font-serif">🌾</span>
                  <div className="font-extrabold text-stone-900 text-sm mt-1">KAIN TAYO / RICE CIRCLE</div>
                  <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-2">A prepaid serving is waiting</div>
                  
                  <div className="p-3 bg-amber-50 rounded-lg text-left text-[11px] text-stone-700 space-y-1.5 my-3 border border-amber-200/60">
                    <p><strong>TO GIVE:</strong> Add one extra serving of rice (₱10–₱15) to your order.</p>
                    <p><strong>TO RECEIVE:</strong> Ask the counter: <em>"May Rice Circle rice serving po?"</em></p>
                  </div>

                  <div className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">
                    NO ID · NO REGISTRATION · NO QUESTIONS
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 mt-3 text-center italic">
                  That's all your customer and staff need to see.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Render approved partners once present in the response sheet */
          <div>
            {/* Search Box */}
            <div className="relative sm:w-72 mb-6">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search approved eatery or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-stone-900"
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-emerald-600" />
                        <span>Verified Partner</span>
                      </span>
                      {partner.typeOfEstablishment && (
                        <span className="text-stone-500 text-[11px]">{partner.typeOfEstablishment}</span>
                      )}
                    </div>

                    <h3 className="font-bold text-stone-900 text-lg mb-1 leading-snug">
                      {partner.businessName}
                    </h3>
                    <p className="text-xs text-amber-800 font-medium mb-3">
                      Host: {partner.contactPerson} {partner.contactNumber && `· ${partner.contactNumber}`}
                    </p>

                    {partner.locationLink && (
                      <p className="text-xs text-stone-600 mb-3 flex items-start gap-1.5">
                        <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <a
                          href={partner.locationLink}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline text-amber-800"
                        >
                          View Location Link
                        </a>
                      </p>
                    )}

                    {partner.notes && (
                      <p className="text-xs text-stone-600 italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4">
                        "{partner.notes}"
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <button
                      onClick={() => onOpenClaimGuide(partner)}
                      className="w-full py-2.5 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span>How to Claim Here</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
