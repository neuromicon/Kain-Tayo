import React from 'react';
import { Heart, MapPin, ShieldCheck, Store, FolderGit2, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPartnerModal: () => void;
  onOpenSupportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartnerModal, onOpenSupportModal }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-14 border-t border-stone-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight">
              <span className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center text-xs font-serif font-bold">
                🌾
              </span>
              <span>RICE CIRCLE DUMAGUETE</span>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed max-w-sm">
              BUY 1 + GIVE 1. One for you, one for someone who needs it. An open-source, community-led mutual aid initiative in the City of Gentle People.
            </p>
            <div className="flex items-center gap-2 text-stone-400 text-[11px] pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Dumaguete City, Negros Oriental, Philippines</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-[11px]">
              <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <a href="mailto:Neuromicon@gmail.com" className="hover:text-white underline underline-offset-2">
                Neuromicon@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  The Principle
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  Partner Carinderia Directory
                </a>
              </li>
              <li>
                <a href="#claim-guide" className="hover:text-white transition-colors">
                  Claim with Dignity Guide
                </a>
              </li>
              <li>
                <a href="#toolkit" className="hover:text-amber-400 text-amber-300/90 font-semibold transition-colors flex items-center gap-1">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Open Toolkit & Printables</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Actions & Partner Join */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Participate
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Are you a local Dumaguete carinderia or eatery owner? Partner with us:
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href="https://forms.gle/v6x6HVLLgUudt7fC8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Partner Application (Google Form)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:Neuromicon@gmail.com?subject=Rice%20Circle%20Dumaguete%20-%20Carinderia%20Partner"
                className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs border border-stone-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Contact: Neuromicon@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>
            © 2026 Rice Circle Dumaguete · Public Domain (CC0) · A City That Shares.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              100% Non-Partisan Mutual Aid
            </span>
            <span>Padayon Dumaguete</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
