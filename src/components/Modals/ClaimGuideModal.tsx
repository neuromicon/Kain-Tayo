import React from 'react';
import { Partner } from '../../types';
import { X, Heart, Smile, CheckCircle, MapPin } from 'lucide-react';

interface ClaimGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPartner?: Partner | null;
}

export const ClaimGuideModal: React.FC<ClaimGuideModalProps> = ({
  isOpen,
  onClose,
  selectedPartner,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Heart className="w-4 h-4 text-emerald-700" />
          </span>
          <h3 className="text-xl font-bold text-stone-900">
            How to Claim Free Rice
          </h3>
        </div>

        <p className="text-xs text-stone-600 mb-6 leading-relaxed">
          Rice Circle is an everyday community safety net in Dumaguete so that no student, child, or resident has to study or work on an empty stomach.
        </p>

        {selectedPartner && (
          <div className="mb-6 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>{selectedPartner.name}</span>
            </div>
            <p className="text-stone-600 text-[11px] mt-0.5">{selectedPartner.address}</p>
            <p className="text-stone-500 text-[11px] mt-1 italic">Contact: {selectedPartner.contactPerson} · Open {selectedPartner.operatingHours}</p>
          </div>
        )}

        {/* Step-by-Step Respectful Guide */}
        <div className="space-y-4 text-xs mb-6">
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex gap-3">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
              1
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">Step Up to the Counter</h4>
              <p className="text-stone-600 leading-relaxed">
                Walk into any partner carinderia displaying the Rice Circle sign or sticker.
              </p>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex gap-3">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
              2
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">What to Say (Sample Phrasing)</h4>
              <p className="text-stone-600 mb-2 leading-relaxed">
                You can ask casually in Bisaya, Tagalog, or English. You do not need to explain anything:
              </p>
              <div className="space-y-1.5 font-sans italic text-stone-800 bg-white p-3 rounded-xl border border-stone-200 text-[11px]">
                <p>
                  <strong>Bisaya:</strong> "Ate / Kuya, naa moy available nga Rice Circle serving karon?"
                </p>
                <p>
                  <strong>Tagalog:</strong> "Ate / Kuya, may available pa po ba na Rice Circle serving ngayon?"
                </p>
                <p>
                  <strong>English:</strong> "Hello, may I claim a Rice Circle serving please?"
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex gap-3">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
              3
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">Receive Fresh Hot Rice</h4>
              <p className="text-stone-600 leading-relaxed">
                The cook will gladly scoop a standard warm portion of rice onto your plate or container with a smile. It is already paid for by your fellow Dumagueteños.
              </p>
            </div>
          </div>
        </div>

        {/* Dignity Guarantees */}
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
          <div className="font-bold flex items-center gap-1.5 text-emerald-900">
            <CheckCircle className="w-4 h-4 text-emerald-700" />
            <span>Zero Judgment Guarantee</span>
          </div>
          <p className="text-[11px] leading-relaxed text-emerald-900">
            • No student ID or proof of poverty is ever required.<br />
            • No one will ask your name, family background, or personal reasons.<br />
            • The meal belongs to you as a member of our community.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors"
          >
            I Understand · Salamat
          </button>
        </div>
      </div>
    </div>
  );
};
