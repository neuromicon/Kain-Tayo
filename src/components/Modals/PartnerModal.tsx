import React, { useState } from 'react';
import { Partner } from '../../types';
import { X, Store, CheckCircle2, ExternalLink, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPartner: (newPartner: Omit<Partner, 'id'>) => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose, onAddPartner }) => {
  const [showInlineForm, setShowInlineForm] = useState(false);
  const [name, setName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [area, setArea] = useState<Partner['area']>('NORSU');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [phone, setPhone] = useState('');
  const [pricePerCup, setPricePerCup] = useState<number>(12);
  const [hasSanitaryPermit, setHasSanitaryPermit] = useState(true);
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contactPerson.trim() || !address.trim() || !phone.trim()) {
      setError('Please fill in all required fields (Name, Contact Person, Address, Phone).');
      return;
    }
    if (!hasSanitaryPermit) {
      setError('Partners must maintain valid sanitary permits issued by Dumaguete City Health.');
      return;
    }

    onAddPartner({
      name: name.trim(),
      contactPerson: contactPerson.trim(),
      area,
      address: address.trim(),
      landmark: landmark.trim() || 'Dumaguete City',
      phone: phone.trim(),
      pricePerCup,
      operatingHours: '6:30 AM – 7:30 PM (Daily)',
      status: 'active',
      notes: notes.trim() || 'Neighborhood carinderia welcoming students and community members.'
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setShowInlineForm(false);
      onClose();
    }, 2000);
  };

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

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900">Mabuhay & Welcome!</h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              <strong className="text-stone-900">{name}</strong> has been registered.
            </p>
            <p className="text-xs text-stone-400">
              A community coordinator will reach out shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
                <Store className="w-4 h-4 text-amber-700" />
              </span>
              <h3 className="text-xl font-bold text-stone-900">
                Partner with Rice Circle Dumaguete
              </h3>
            </div>
            <p className="text-xs text-stone-500 mb-6 leading-relaxed">
              Are you an eatery or carinderia in Dumaguete? Join our network: 100% upfront payment from customers, zero commissions, and fresh warm food for neighborhood students and residents.
            </p>

            {/* Official Link & Contact Under Button */}
            <div className="space-y-3 mb-6">
              <a
                href="https://forms.gle/v6x6HVLLgUudt7fC8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Fill Out Partner Form (Google Forms)</span>
                <ExternalLink className="w-4 h-4 text-amber-200 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="mailto:Neuromicon@gmail.com?subject=Rice%20Circle%20Dumaguete%20-%20Partner%20Inquiry"
                className="w-full py-3 px-4 rounded-xl border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                <span>Contact Organizer: Neuromicon@gmail.com</span>
              </a>
            </div>

            {/* Divider or Quick Register Toggle */}
            <div className="pt-4 border-t border-stone-200">
              {!showInlineForm ? (
                <button
                  type="button"
                  onClick={() => setShowInlineForm(true)}
                  className="w-full py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 text-center underline underline-offset-4"
                >
                  Or quick register on this page →
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs mt-2">
                  <div className="flex items-center justify-between font-bold text-stone-900 mb-2">
                    <span>Quick On-Page Registration</span>
                    <button
                      type="button"
                      onClick={() => setShowInlineForm(false)}
                      className="text-stone-400 hover:text-stone-600 text-[11px]"
                    >
                      Hide form
                    </button>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs border border-red-200">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Carinderia Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nanay Tessie's"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setError('');
                        }}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tessie Reyes"
                        value={contactPerson}
                        onChange={(e) => {
                          setContactPerson(e.target.value);
                          setError('');
                        }}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Dumaguete Area *
                      </label>
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value as Partner['area'])}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="NORSU">Near NORSU Main</option>
                        <option value="Silliman">Near Silliman University</option>
                        <option value="Downtown Market">Public Market / Downtown</option>
                        <option value="Taclobo / FU">Taclobo / Foundation Univ.</option>
                        <option value="Rizal Blvd">Rizal Boulevard / Port</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Phone / GCash *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0917-000-0000"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setError('');
                        }}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Street Address & Landmark *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hibbard Ave, beside student dorm"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        setError('');
                      }}
                      className="w-full p-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasSanitaryPermit}
                        onChange={(e) => setHasSanitaryPermit(e.target.checked)}
                        className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
                      />
                      <div className="text-stone-700 leading-snug">
                        <span className="font-semibold">City Health Compliance:</span> I confirm our kitchen maintains valid sanitary permits with Dumaguete City Health.
                      </div>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    Submit Quick Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
