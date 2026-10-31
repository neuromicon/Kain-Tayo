import React from 'react';
import { Heart, CheckCircle2, ShieldCheck, Smile, HelpCircle, Utensils, Coins } from 'lucide-react';

export const ClaimGuideSection: React.FC = () => {
  return (
    <section id="claim-guide" className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
            Simple & Respectful
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-3">
            How to Give & How to Claim
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            No registration forms, no tokens, and no apps. You can pay for just a portion of rice, or claim a warm serving when you need one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Box 1: For Givers (Pay for just a portion of rice) */}
          <div className="bg-[#FAF8F5] p-7 sm:p-8 rounded-3xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Coins className="w-5 h-5 text-amber-700" />
                </span>
                <h3 className="text-xl font-bold text-stone-900">
                  How to Give (Just a Cup of Rice)
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                You do <strong>not</strong> need to buy a full viand meal to help. Anyone can sponsor just a single cup of rice:
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Two Easy Ways to Pay:</strong>
                    <div className="text-stone-600 space-y-1 mt-1">
                      <p>• <strong>With your meal:</strong> Ask the counter: <em>"Pa-add og isa ka Rice Circle cup palihog"</em> (+₱10–₱15).</p>
                      <p>• <strong>Rice only:</strong> Walk up to the counter and simply pay ₱10–₱15 for a cup of rice for someone in need.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">100% Stays in the Shop</strong>
                    <span className="text-stone-600">The cook places the cash directly into their register. There are zero platform cuts or middleman fees.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">The Pot Stays Ready</strong>
                    <span className="text-stone-600">Fresh steamed rice remains available for the next student, child, or neighbor who arrives hungry.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200 text-xs text-amber-900 font-medium">
              ✓ Smallest price (₱10–₱15) · Maximum community impact
            </div>
          </div>

          {/* Box 2: For Receivers */}
          <div className="bg-[#FAF8F5] p-7 sm:p-8 rounded-3xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 text-emerald-700" />
                </span>
                <h3 className="text-xl font-bold text-stone-900">
                  How to Claim (Dignity First)
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                If you are a student, child, or neighbor who needs a warm meal today, walk in and ask:
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Visit Any Partner Carinderia</strong>
                    <span className="text-stone-600">Walk into the shop displaying the Rice Circle counter sign.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Ask with Confidence & Ease</strong>
                    <div className="mt-1 bg-white p-2.5 rounded-xl border border-stone-200 text-stone-800 italic space-y-1">
                      <p>• <strong>Bisaya:</strong> "Ate/Kuya, naa moy available nga Rice Circle karon?"</p>
                      <p>• <strong>Tagalog:</strong> "Ate/Kuya, may available pa po ba na Rice Circle ngayon?"</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Receive Warm, Steaming Rice</strong>
                    <span className="text-stone-600">The cook will scoop a standard warm portion with a smile. It is already paid for.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200 text-xs text-emerald-900 font-medium">
              ✓ No IDs, no paperwork, and zero questions asked
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
