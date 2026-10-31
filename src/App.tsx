import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OurPhilosophy } from './components/OurPhilosophy';
import { HowItWorks } from './components/HowItWorks';
import { PartnerCarinderias } from './components/PartnerCarinderias';
import { ClaimGuideSection } from './components/ClaimGuideSection';
import { OpenToolkit } from './components/OpenToolkit';
import { TimelineSection } from './components/TimelineSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PartnerModal } from './components/Modals/PartnerModal';
import { ClaimGuideModal } from './components/Modals/ClaimGuideModal';
import { SupportGuideModal } from './components/Modals/SupportGuideModal';
import { INITIAL_PARTNERS } from './utils/riceBank';
import { Partner } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [partners, setPartners] = useState<Partner[]>(INITIAL_PARTNERS);

  // Modals state
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isClaimGuideOpen, setIsClaimGuideOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [selectedPartnerForModal, setSelectedPartnerForModal] = useState<Partner | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Open claim guide with optional preselected partner
  const handleOpenClaimGuide = (partner?: Partner) => {
    setSelectedPartnerForModal(partner || null);
    setIsClaimGuideOpen(true);
  };

  // Open support guide with optional preselected partner
  const handleOpenSupportModal = (partner?: Partner) => {
    setSelectedPartnerForModal(partner || null);
    setIsSupportModalOpen(true);
  };

  // Handle new partner carinderia application
  const handleAddPartner = (
    newPartnerData: Omit<Partner, 'id'>
  ) => {
    const newPartner: Partner = {
      ...newPartnerData,
      id: `partner-${Date.now()}`,
    };

    setPartners((prev) => [...prev, newPartner]);
    showToast(`${newPartner.name} registered as a partner carinderia!`);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 antialiased font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-stone-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        onOpenSupportModal={() => handleOpenSupportModal()}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
          onOpenClaimGuide={() => handleOpenClaimGuide()}
          onOpenSupportModal={() => handleOpenSupportModal()}
        />

        <OurPhilosophy />

        <HowItWorks
          onOpenClaimGuide={() => handleOpenClaimGuide()}
          onOpenSupportModal={() => handleOpenSupportModal()}
        />

        <PartnerCarinderias
          partners={partners}
          onOpenClaimGuide={handleOpenClaimGuide}
          onOpenSupportModal={handleOpenSupportModal}
          onOpenPartnerApplication={() => setIsPartnerModalOpen(true)}
        />

        <ClaimGuideSection />

        <OpenToolkit />

        <TimelineSection />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        onOpenSupportModal={() => handleOpenSupportModal()}
      />

      {/* Interactive Modals */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        onAddPartner={handleAddPartner}
      />

      <ClaimGuideModal
        isOpen={isClaimGuideOpen}
        onClose={() => setIsClaimGuideOpen(false)}
        selectedPartner={selectedPartnerForModal}
      />

      <SupportGuideModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
        selectedPartner={selectedPartnerForModal}
      />
    </div>
  );
}
