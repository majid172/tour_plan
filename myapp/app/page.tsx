'use client';

import React, { useState, useRef } from 'react';
import { DESTINATIONS_DATA, FAQS, Destination } from './data';
import { SpinWheel } from './SpinWheel';
import { DestinationDetail } from './DestinationDetail';
import { ExploreGrid } from './ExploreGrid';
import { TravelCostEstimator } from './TravelCostEstimator';
import {
  Compass,
  MapPin,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Navigation,
  ChevronRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  const [filterScope, setFilterScope] = useState<'all' | 'inside_dhaka' | 'outside_dhaka'>('all');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const detailRef = useRef<HTMLDivElement | null>(null);

  const wheelDestinations =
    filterScope === 'all'
      ? DESTINATIONS_DATA
      : DESTINATIONS_DATA.filter((d) => d.category === filterScope);

  const handleDestinationSelect = (dest: Destination) => {
    setSelectedDestination(dest);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative overflow-x-hidden text-sm">
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                  কোথায় যাবো?
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 uppercase tracking-wider">
                  Kothay Jabo
                </span>
              </div>
              <p className="text-[10px] text-slate-500 hidden sm:block">
                বাংলাদেশ ট্রাভেল ডিসকভারি ও স্মার্ট প্ল্যানার
              </p>
            </div>
          </div>

          {/* Quick Header Nav */}
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setFilterScope('inside_dhaka')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                filterScope === 'inside_dhaka'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>ঢাকার ভেতরে</span>
            </button>
            <button
              onClick={() => setFilterScope('outside_dhaka')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                filterScope === 'outside_dhaka'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>ঢাকার বাইরে</span>
            </button>
            <button
              onClick={() => setFilterScope('all')}
              className={`hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filterScope === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              সবগুলো
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
        {/* FIRST HERO SECTION: Left Side (Text & Filters) + Right Side (Interactive Spin Wheel) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Left Column (Content & Category Switcher) - 7 cols */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Accent Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
              <Flame className="w-3.5 h-3.5 text-emerald-600" />
              <span>ভ্রমণ পরিকল্পনা হোক সহজ, রোমাঞ্চকর ও সাশ্রয়ী</span>
            </div>

            {/* Hero Heading */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
              ছুটিতে ঘুরতে যাবেন, কিন্তু{' '}
              <span className="text-emerald-600">কোথায় যাবেন</span> বুঝতে পারছেন না?
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
              ডানদিকের <strong className="text-slate-800 font-bold">ইন্টারেক্টিভ ট্রাভেল হুইল</strong> ঘুরিয়ে ভাগ্যের হাতে ছেড়ে দিন আপনার ভ্রমণ সিদ্ধান্ত! সাথে পেয়ে যাবেন আকর্ষণীয় দর্শনীয় স্থান, বাস ও ট্রেনের সঠিক ভাড়া এবং বাজেট গাইড।
            </p>

            {/* Scope Filter Switcher Tabs */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                ঘুরতে যাওয়ার এলাকা পছন্দ করুন:
              </div>
              <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300">
                <button
                  onClick={() => setFilterScope('all')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    filterScope === 'all'
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  সবগুলো ({DESTINATIONS_DATA.length})
                </button>
                <button
                  onClick={() => setFilterScope('inside_dhaka')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    filterScope === 'inside_dhaka'
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ঢাকার ভেতরে (১০)
                </button>
                <button
                  onClick={() => setFilterScope('outside_dhaka')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    filterScope === 'outside_dhaka'
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ঢাকার বাইরে (১২)
                </button>
              </div>
            </div>

            {/* Quick Action Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div
                onClick={() => setFilterScope('inside_dhaka')}
                className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer group bg-white ${
                  filterScope === 'inside_dhaka'
                    ? 'border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:border-emerald-400 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl p-1.5 rounded-lg bg-emerald-50">🏙️</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    ১০টি স্পট
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  ঢাকার ভেতরে ডে-ট্যুর
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  লালবাগ কেল্লা, পানাম নগর, মাওয়া ঘাট, মিলিটারি মিউজিয়াম।
                </p>
              </div>

              <div
                onClick={() => setFilterScope('outside_dhaka')}
                className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer group bg-white ${
                  filterScope === 'outside_dhaka'
                    ? 'border-sky-600 shadow-md ring-2 ring-sky-500/20'
                    : 'border-slate-200 hover:border-sky-400 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl p-1.5 rounded-lg bg-sky-50">🌄</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-bold border border-sky-200">
                    ১২টি স্পট
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-2 group-hover:text-sky-700 transition-colors">
                  ঢাকার বাইরে ভ্রমণ
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  সাজেক ভ্যালি, কক্সবাজার, সুন্দরবন, শ্রীমঙ্গল, সেন্টমার্টিন।
                </p>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>বাস্তবসম্মত ভাড়ার তালিকা</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>বাজেট ক্যালকুলেটর</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>গুগল ম্যাপ ও দর্শনীয় স্থান</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Spin Wheel (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <SpinWheel
                destinations={wheelDestinations}
                onSelect={handleDestinationSelect}
                selectedDestination={selectedDestination}
              />
            </div>
          </div>
        </section>

        {/* Selected Destination Detail View */}
        <section ref={detailRef} className="scroll-mt-24">
          {selectedDestination ? (
            <div className="space-y-3.5 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs sm:text-sm">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>নির্বাচিত গন্তব্যের বিস্তারিত ও ভ্রমণ নির্দেশিকা</span>
                </div>
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="text-xs text-slate-500 hover:text-slate-800 transition cursor-pointer px-2.5 py-1 rounded-lg bg-slate-200 border border-slate-300"
                >
                  বন্ধ করুন ✕
                </button>
              </div>
              <DestinationDetail destination={selectedDestination} />
            </div>
          ) : (
            <div className="p-6 text-center rounded-2xl light-panel border border-dashed border-slate-300">
              <Compass className="w-6 h-6 text-emerald-600 mx-auto mb-1.5 animate-spin-slow" />
              <p className="text-slate-600 text-xs font-medium">
                ☝️ উপরের ডানদিকের চাকাটি ঘোরান অথবা নিচের তালিকা থেকে যেকোনো গন্তব্য বেছে নিয়ে বিস্তারিত দেখুন।
              </p>
            </div>
          )}
        </section>

        {/* Travel Cost Estimator Tool */}
        <section>
          <TravelCostEstimator />
        </section>

        {/* Complete Explore & Search Directory */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                🗺️ সকল ভ্রমণ গন্তব্য ব্রাউজ করুন (Explore All)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                বিভাগ, জেলা ও ভ্রমণ ধরন অনুযায়ী ফিল্টার করে আপনার পছন্দের স্থানটি বেছে নিন
              </p>
            </div>
          </div>
          <ExploreGrid
            destinations={DESTINATIONS_DATA}
            onSelect={handleDestinationSelect}
          />
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto space-y-5">
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>সাধারণ প্রশ্নোত্তর</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)
            </h2>
          </div>

          <div className="space-y-2.5">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl light-panel overflow-hidden transition"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 font-semibold text-slate-800 hover:text-emerald-700 text-xs sm:text-sm cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      activeFaq === idx ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Clean Light Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900">কোথায় যাবো? (Kothay Jabo)</div>
              <div className="text-[11px] text-slate-400">Discover Bangladesh, One Spin at a Time.</div>
            </div>
          </div>

          <div className="text-[11px] text-center md:text-right space-y-0.5 text-slate-500">
            <p>মেড উইথ 💚 বাংলাদেশের ভ্রমণপিপাসুদের জন্য।</p>
            <p>© {new Date().getFullYear()} Kothay Jabo. সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
