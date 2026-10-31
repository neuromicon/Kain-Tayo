import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  Copy,
  Check,
  FolderGit2,
  ExternalLink,
  Sparkles,
  FileDown,
  Layers,
  ShieldCheck,
  Share2,
  ChevronRight,
  Eye
} from 'lucide-react';

export const OpenToolkit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agreement' | 'tally' | 'checklist' | 'readme'>('agreement');
  const [copied, setCopied] = useState(false);
  const [showPosterPreview, setShowPosterPreview] = useState(false);

  const vendorAgreementText = `VENDOR AGREEMENT (TEMPLATE)
KAIN TAYO / RICE CIRCLE

This agreement is between:
Kain Tayo / Rice Circle Coordinating Team: _________________________________________
Participating Business / Vendor: __________________________________________________
Business Address: ________________________________________________________________
Authorized Representative: _______________________ Contact Number: _______________
Effective Date: ___________________ Partner ID: ___________________________________

VENDOR COMMITMENTS:
1. The vendor offers BUY 1 + GIVE 1 at the agreed normal price of ₱_____ per standard rice serving. The customer pays for two servings, receives one, and funds one prepaid serving.
2. The vendor receives full payment for both servings at purchase. No commission is deducted from the prepaid serving.
3. For every paid BUY 1 + GIVE 1 transaction, the vendor records exactly one prepaid serving in its own Rice Bank.
4. The vendor honors every outstanding prepaid serving. The recipient is not charged.
5. In Version 1, credits created at this vendor may be redeemed only at this same vendor.
6. The vendor maintains daily opening balance, new prepaid servings, redemptions, closing balance, and submits the agreed daily report.
7. The vendor serves one standard portion per person per visit, prepared fresh when requested.
8. The vendor remains responsible for food preparation, handling, permits, sanitation, and applicable local requirements.
9. The vendor displays approved signage and does not require beneficiary ID, income proof, registration, or personal details for ordinary access.
10. The vendor does not photograph, identify, or disclose information about people claiming free servings without informed consent.

AGREED OPERATING DETAILS:
- Standard serving description / size: _____________________________________________
- Operating days and hours: _______________________________________________________
- Daily reporting method and deadline: ___________________________________________
- Person responsible for Rice Bank records: _______________________________________

SIGNATURES:
For Coordinating Team: ___________________________ Date: _________________________
For Participating Vendor: ________________________ Date: _________________________`;

  const handleCopyAgreement = () => {
    navigator.clipboard.writeText(vendorAgreementText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintTally = () => {
    window.open('/assets/aistudio/Kain_Tayo_Printable_Toolkit_654d1884.pdf', '_blank');
  };

  return (
    <section id="toolkit" className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-stone-100 text-xs font-mono font-semibold mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Open Source Civic Repository · Public Domain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Open Toolkit & Printed Materials
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Everything you need to operate in Dumaguete or replicate the <strong>BUY 1 + GIVE 1</strong> model in your own city. Download official print-ready PDFs, campaign artwork, and operational agreements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/assets/aistudio/Kain_Tayo_Printable_Toolkit_654d1884.pdf"
              download="Kain_Tayo_Printable_Toolkit.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Toolkit (4 Pages)</span>
            </a>
            <a
              href="/assets/aistudio/Rice_Circle__Dumaguete_Shares_Kindness_487e773d.png"
              download="Rice_Circle_Dumaguete_Poster.png"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
            >
              <FileDown className="w-4 h-4 text-stone-500" />
              <span>Download Poster (PNG)</span>
            </a>
          </div>
        </div>

        {/* 3 Core Asset Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {/* Card 1: Printable Toolkit PDF */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-amber-700" />
              </div>
              <div className="text-[11px] font-mono font-semibold text-amber-800 uppercase tracking-wider mb-1">
                Print-Ready Document · 4 Pages
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">
                Printable Toolkit Pack (PDF)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Ready-to-print materials for counters and walls:
              </p>
              <ul className="text-xs text-stone-600 space-y-1.5 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Page 1: Public Eatery Poster (A4)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Page 2: Counter Display Table Tent</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Page 3: Daily Vendor Tally Ledger</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Page 4: City Pilot Launch Checklist</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2">
              <a
                href="/assets/aistudio/Kain_Tayo_Printable_Toolkit_654d1884.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>View PDF</span>
              </a>
              <a
                href="/assets/aistudio/Kain_Tayo_Printable_Toolkit_654d1884.pdf"
                download="Kain_Tayo_Printable_Toolkit.pdf"
                className="py-2 px-3 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-semibold transition-colors flex items-center justify-center"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Official Campaign Artwork */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="relative rounded-xl overflow-hidden border border-stone-200 mb-4 aspect-[4/3] bg-stone-200">
                <img
                  src="/assets/aistudio/Rice_Circle__Dumaguete_Shares_Kindness_487e773d.png"
                  alt="Rice Circle Dumaguete - A City That Shares poster"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setShowPosterPreview(true)}
                />
                <button
                  type="button"
                  onClick={() => setShowPosterPreview(true)}
                  className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1"
                >
                  <Eye className="w-3 h-3 text-amber-300" />
                  <span>Enlarge</span>
                </button>
              </div>
              <div className="text-[11px] font-mono font-semibold text-brand-700 uppercase tracking-wider mb-1">
                Visual Identity & Poster
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-1">
                Official Illustrated Poster
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Featuring the Dumaguete Campanario (Belfry) skyline, the warm bowl illustration, and core community commitments.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPosterPreview(true)}
                className="flex-1 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>Preview Artwork</span>
              </button>
              <a
                href="/assets/aistudio/Rice_Circle__Dumaguete_Shares_Kindness_487e773d.png"
                download="Rice_Circle_Dumaguete_Poster.png"
                className="py-2 px-3 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-semibold transition-colors flex items-center justify-center"
                title="Download High-Res PNG"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Organizer Starter Kit & Agreement */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="text-[11px] font-mono font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                Documentation & Rules
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">
                Starter Kit & Agreement
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                The full governance rules and vendor contracts from the Kain Tayo Starter Kit:
              </p>
              <ul className="text-xs text-stone-600 space-y-1.5 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>The 8 Non-Negotiable Principles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>30-Day Launch Implementation Plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Operational Food Safety Guidelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Binding Vendor Agreement Template</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200/80">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('agreement');
                  const el = document.getElementById('repo-viewer');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Read & Copy Agreement</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* In-Browser Repository Viewer (GitHub Style) */}
        <div id="repo-viewer" className="bg-stone-950 text-stone-200 rounded-3xl overflow-hidden border border-stone-800 shadow-xl">
          {/* Repo Top Bar */}
          <div className="px-6 py-4 bg-stone-900 border-b border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-stone-400 text-xs font-mono">
                <FolderGit2 className="w-4 h-4 text-amber-400" />
                <span className="text-stone-300 font-semibold">rice-circle</span>
                <span>/</span>
                <span className="text-white font-bold">dumaguete-toolkit</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-stone-800 text-amber-400 border border-stone-700">
                Public Domain · CC0
              </span>
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center gap-1 bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('agreement')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeTab === 'agreement' ? 'bg-stone-800 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                vendor-agreement.txt
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tally')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeTab === 'tally' ? 'bg-stone-800 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                daily-vendor-tally.sheet
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('checklist')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeTab === 'checklist' ? 'bg-stone-800 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                30-day-checklist.md
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('readme')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeTab === 'readme' ? 'bg-stone-800 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                README.md
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8 font-mono text-xs text-stone-300 leading-relaxed overflow-x-auto max-h-[500px] overflow-y-auto">
            {activeTab === 'agreement' && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-800 font-sans">
                  <div>
                    <h4 className="text-white font-bold text-sm">Vendor Agreement Template (Section 10 of Starter Kit)</h4>
                    <p className="text-stone-400 text-xs">For use between local organizers and participating food vendors.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAgreement}
                    className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold text-xs flex items-center gap-1.5 transition-colors border border-stone-700"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard' : 'Copy Template'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-stone-300 text-[11px] sm:text-xs">
                  {vendorAgreementText}
                </pre>
              </div>
            )}

            {activeTab === 'tally' && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-800 font-sans">
                  <div>
                    <h4 className="text-white font-bold text-sm">Daily Physical Vendor Tally (Page 3 of Printable Toolkit)</h4>
                    <p className="text-stone-400 text-xs">Kept by each carinderia counter to record prepaid and redeemed servings on paper.</p>
                  </div>
                  <a
                    href="/assets/aistudio/Kain_Tayo_Printable_Toolkit_654d1884.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Sheet (PDF)</span>
                  </a>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <p className="text-amber-400">
                    Formula: Opening Balance + Added Servings − Redeemed Servings = Closing Balance
                  </p>
                  <div className="border border-stone-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="bg-stone-900 text-stone-400 border-b border-stone-800">
                        <tr>
                          <th className="p-2.5">Time</th>
                          <th className="p-2.5">Prepaid Servings Added</th>
                          <th className="p-2.5">Servings Redeemed</th>
                          <th className="p-2.5">Running Balance</th>
                          <th className="p-2.5">Initials / Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-900 text-stone-400 text-[11px]">
                        <tr>
                          <td className="p-2.5">07:30 AM</td>
                          <td className="p-2.5 text-amber-300">+4 (₱48)</td>
                          <td className="p-2.5">—</td>
                          <td className="p-2.5 text-white">4</td>
                          <td className="p-2.5">Breakfast customer prepaid</td>
                        </tr>
                        <tr>
                          <td className="p-2.5">08:15 AM</td>
                          <td className="p-2.5">—</td>
                          <td className="p-2.5 text-emerald-400">1 (₱0)</td>
                          <td className="p-2.5 text-white">3</td>
                          <td className="p-2.5">Student before class</td>
                        </tr>
                        <tr>
                          <td className="p-2.5">12:05 PM</td>
                          <td className="p-2.5 text-amber-300">+5 (₱60)</td>
                          <td className="p-2.5">—</td>
                          <td className="p-2.5 text-white">8</td>
                          <td className="p-2.5">Office worker customer</td>
                        </tr>
                        <tr>
                          <td className="p-2.5">12:30 PM</td>
                          <td className="p-2.5">—</td>
                          <td className="p-2.5 text-emerald-400">2 (₱0)</td>
                          <td className="p-2.5 text-white">6</td>
                          <td className="p-2.5">Lunch served</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'checklist' && (
              <div>
                <div className="pb-4 mb-4 border-b border-stone-800 font-sans">
                  <h4 className="text-white font-bold text-sm">Launch Checklist (Section 11 of Starter Kit)</h4>
                  <p className="text-stone-400 text-xs">Steps to launch Kain Tayo or Rice Circle in your town.</p>
                </div>
                <div className="space-y-2 text-xs">
                  <p className="text-emerald-400">☐ Local city name and coordination contacts confirmed</p>
                  <p className="text-emerald-400">☐ 3–5 initial vendors recruited and approved</p>
                  <p className="text-emerald-400">☐ Serving size and normal price agreed with each vendor (₱10–₱15)</p>
                  <p className="text-emerald-400">☐ Vendor agreements signed and Partner IDs assigned</p>
                  <p className="text-emerald-400">☐ Accounting workbook configured and access permissions checked</p>
                  <p className="text-emerald-400">☐ Same-vendor redemption rule explained to all partners</p>
                  <p className="text-emerald-400">☐ Customer posters and free-serving claim instructions displayed</p>
                  <p className="text-emerald-400">☐ Food-safety and local compliance requirements checked with City Health</p>
                  <p className="text-emerald-400">☐ Community Goal and public dashboard published</p>
                  <p className="text-emerald-400">☐ Daily reconciliation and spot-check plan established</p>
                </div>
              </div>
            )}

            {activeTab === 'readme' && (
              <div className="space-y-4">
                <div className="pb-4 border-b border-stone-800 font-sans">
                  <h4 className="text-white font-bold text-sm">README.md · Project Overview</h4>
                  <p className="text-stone-400 text-xs">Decentralized, community-supported food distribution.</p>
                </div>
                <div className="space-y-3 font-mono text-xs text-stone-300">
                  <p># RICE CIRCLE DUMAGUETE / KAIN TAYO</p>
                  <p>&gt; BUY 1 + GIVE 1 · One for you. One for someone who needs it.</p>
                  <p>
                    A customer purchases two servings of cooked rice:
                    * One serving is consumed by the customer.
                    * One serving is prepaid and added to the local Rice Bank.
                    * Another person can claim that prepaid serving for free.
                  </p>
                  <p className="text-amber-400">
                    Non-negotiable principle: No proof of poverty. No registration. No IDs. No questions asked.
                  </p>
                  <p>
                    Licensed under Creative Commons Zero (CC0) / Public Domain. Anyone is free to copy, adapt, translate, and print these resources without copyright restrictions.
                  </p>
                  <div className="pt-3 mt-3 border-t border-stone-800 text-stone-300">
                    <p className="font-bold text-white mb-1">PARTNER & COORDINATION CONTACTS:</p>
                    <p>• Partner Google Form: <a href="https://forms.gle/v6x6HVLLgUudt7fC8" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">https://forms.gle/v6x6HVLLgUudt7fC8</a></p>
                    <p>• Direct Email: <a href="mailto:Neuromicon@gmail.com" className="text-amber-400 underline">Neuromicon@gmail.com</a></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action strip below repository */}
        <div className="mt-8 p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Join the Network or Start in Your Town</h4>
            <p className="text-stone-600 text-xs mt-0.5">Fill out our official vendor onboarding form or contact our coordination team directly.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="https://forms.gle/v6x6HVLLgUudt7fC8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Partner Google Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:Neuromicon@gmail.com"
              className="px-4 py-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 font-semibold text-xs transition-colors"
            >
              Neuromicon@gmail.com
            </a>
          </div>
        </div>

        {/* Modal Poster Lightbox */}
        {showPosterPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
              <button
                type="button"
                onClick={() => setShowPosterPreview(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900 transition-colors"
                aria-label="Close poster preview"
              >
                ✕
              </button>
              <div className="max-h-[85vh] overflow-y-auto p-4 flex flex-col items-center">
                <img
                  src="/assets/aistudio/Rice_Circle__Dumaguete_Shares_Kindness_487e773d.png"
                  alt="Full illustrated Rice Circle Dumaguete poster"
                  className="w-full rounded-2xl shadow-sm"
                />
                <div className="mt-4 flex items-center justify-between w-full px-2">
                  <span className="text-xs text-stone-500 font-sans">
                    Official Campaign Artwork · Rice Circle Dumaguete
                  </span>
                  <a
                    href="/assets/aistudio/Rice_Circle__Dumaguete_Shares_Kindness_487e773d.png"
                    download="Rice_Circle_Dumaguete_Poster.png"
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Full Resolution PNG</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
