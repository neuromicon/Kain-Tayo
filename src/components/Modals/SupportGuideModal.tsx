import React from 'react';
import { Partner } from '../../types';
import { X, HeartHandshake, CheckCircle2, Store, MapPin } from 'lucide-react';

interface SupportGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPartner?: Partner | null;
}

export const SupportGuideModal: React.FC<SupportGuideModalProps> = ({
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

        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
            <HeartHandshake className="w-4 h-4 text-amber-700" />
          </span>
          <h3 className="text-xl font-bold text-stone-900">
            How to Give & Support
          </h3>
        </div>

        <p className="text-xs text-stone-600 mb-6 leading-relaxed">
          Rice Circle Dumaguete does not collect donations online or take processing fees. Every peso is handed directly to local carinderia cooks in cash.
        </p>

        {selectedPartner && (
          <div className="mb-6 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>{selectedPartner.name}</span>
            </div>
            <p className="text-stone-600 text-[11px] mt-0.5">{selectedPartner.address}</p>
            <p className="text-amber-900 font-semibold text-[11px] mt-1">
              Standard cup price: ₱{selectedPartner.pricePerCup} · Host: {selectedPartner.contactPerson}
            </p>
          </div>
        )}

        <div className="space-y-4 text-xs mb-6">
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex gap-3">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
              1
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">Buy 1 + Give 1 on Your Regular Meal</h4>
              <p className="text-stone-600 leading-relaxed">
                When you order rice at any partner shop, simply ask to pay for one extra cup (+₱10–₱15). It takes 2 seconds and ensures the pot stays full.
              </p>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex gap-3">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
              2
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">Group or Alumni Sponsorship</h4>
              <p className="text-stone-600 leading-relaxed">
                Student organizations, church groups, or alumni batches can visit a partner carinderia and hand the cook ₱200–₱500 to keep rice freely flowing for exam weeks or rainy days.
              </p>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex gap-3">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
              3
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">Direct to the Cook</h4>
              <p className="text-stone-600 leading-relaxed">
                There are no bank fees, administrative cut, or third-party apps. 100% of your money strengthens a local Dumaguete family eatery.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Pure Community Trust:</strong> We do not count or audit cups. We trust our neighborhood cooks to feed our community.
          </span>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors"
          >
            Got It · Daghang Salamat
          </button>
        </div>
      </div>
    </div>
  );
};
