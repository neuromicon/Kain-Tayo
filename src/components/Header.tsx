import React, { useState } from 'react';
import { Menu, X, HeartHandshake, FolderGit2 } from 'lucide-react';

interface HeaderProps {
  onOpenPartnerModal: () => void;
  onOpenSupportModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPartnerModal, onOpenSupportModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold text-lg sm:text-xl text-stone-900 tracking-tight whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-sm shadow-xs font-serif">
            🌾
          </span>
          <span>
            Rice Circle <span className="text-brand-600 font-semibold">Dumaguete</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a
            href="#how-it-works"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
          <a
            href="#philosophy"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            The Principle
          </a>
          <a
            href="#partners"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Partner Carinderias
          </a>
          <a
            href="#claim-guide"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Claim with Dignity
          </a>
          <a
            href="#toolkit"
            className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 font-semibold flex items-center gap-1.5 text-stone-800"
          >
            <FolderGit2 className="w-4 h-4 text-amber-600" />
            <span>Open Toolkit</span>
          </a>
          <a
            href="#faq"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Actions & GitHub Link */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="https://github.com/neuromicon/Kain-Tayo"
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 hover:text-stone-900 transition-colors border border-stone-200/80"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>GitHub</span>
          </a>

          <button
            onClick={onOpenPartnerModal}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Join as Partner</span>
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-amber-600 rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-stone-200 bg-[#FAF8F5] px-4 py-4 space-y-3 shadow-lg">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-brand-600 py-1.5"
          >
            How It Works
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-brand-600 py-1.5"
          >
            The Principle
          </a>
          <a
            href="#partners"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-brand-600 py-1.5"
          >
            Partner Carinderias
          </a>
          <a
            href="#claim-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-brand-600 py-1.5"
          >
            Claim with Dignity
          </a>
          <a
            href="#toolkit"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-amber-800 hover:text-brand-600 py-1.5"
          >
            Open Toolkit & Printed Materials
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-brand-600 py-1.5"
          >
            FAQ
          </a>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-stone-900 text-white flex items-center justify-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Join as Carinderia Partner</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupportModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-medium border border-stone-300 text-stone-700 bg-white hover:bg-stone-50"
            >
              How Giving Works
            </button>
            <a
              href="https://github.com/neuromicon/Kain-Tayo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub Repository (Kain-Tayo)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
