'use client';

import React from 'react';
import { Destination } from './data';
import {
  MapPin,
  Clock,
  Compass,
  Bus,
  Train,
  Ship,
  Car,
  Utensils,
  Lightbulb,
  Wallet,
  Calendar,
  Share2,
  X,
  CheckCircle2,
  Navigation,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface DestinationDetailProps {
  destination: Destination;
  onClose?: () => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  onClose,
}) => {
  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'Train':
        return <Train className="w-4 h-4 text-emerald-600" />;
      case 'Launch':
        return <Ship className="w-4 h-4 text-sky-600" />;
      case 'Car / Microbus':
        return <Car className="w-4 h-4 text-amber-600" />;
      default:
        return <Bus className="w-4 h-4 text-blue-600" />;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${destination.nameBn} - কোথায় যাবো?`,
        text: `চলুন ঘুরে আসি ${destination.nameBn}! ভাড়া ও দর্শনীয় স্থান দেখুন Kothay Jabo তে!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('লিঙ্ক কপি করা হয়েছে! বন্ধুদের সাথে শেয়ার করুন।');
    }
  };

  return (
    <div className="light-panel rounded-3xl overflow-hidden transition-all text-xs sm:text-sm">
      {/* Top Banner Stage */}
      <div className="relative h-60 sm:h-80 w-full overflow-hidden bg-slate-100">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-sm transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {destination.category === 'inside_dhaka' ? 'ঢাকার ভেতরে ভ্রমণ' : 'ঢাকার বাইরে ভ্রমণ'}
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-slate-800 shadow-sm border border-slate-200">
            {destination.division} বিভাগ
          </span>
        </div>

        {/* Hero Title & District */}
        <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-emerald-300 text-[11px] font-semibold mb-1.5 border border-white/20">
            <MapPin className="w-3 h-3" />
            <span>{destination.district}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight drop-shadow-md">
            {destination.nameBn}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 font-normal mt-1 max-w-2xl drop-shadow">
            {destination.name} • {destination.taglineBn}
          </p>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 sm:p-5 bg-slate-50 border-b border-slate-200">
        <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 shadow-xs">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
            <Navigation className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">ঢাকা থেকে দূরত্ব</div>
            <div className="text-xs font-bold text-slate-800">{destination.distanceFromDhaka}</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 shadow-xs">
          <div className="p-2 rounded-lg bg-sky-50 text-sky-600 shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">যাতায়াত সময়</div>
            <div className="text-xs font-bold text-slate-800">{destination.travelTime}</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 shadow-xs">
          <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">উপযুক্ত সময়</div>
            <div className="text-xs font-bold text-slate-800 truncate" title={destination.bestTimeToVisit}>
              {destination.bestTimeToVisit}
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 shadow-xs">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
            <Wallet className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">বাজেট রেঞ্জ</div>
            <div className="text-xs font-bold text-emerald-600">{destination.estimatedBudget.standard}</div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="p-5 sm:p-7 space-y-7 bg-white">
        {/* Estimated Budget Cards */}
        <section>
          <div className="flex items-center gap-2 mb-3.5">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <Wallet className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">আনুমানিক ভ্রমণ খরচ (Budget Tier)</h3>
              <p className="text-[11px] text-slate-500">আপনার পছন্দ অনুযায়ী খরচের স্তর নির্ধারণ করুন</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">বাজেট ভ্রমণকারী</span>
                <div className="text-lg font-bold text-slate-800 mt-1">{destination.estimatedBudget.budget}</div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-200">
                সাধারণ লোকাল বাস, ঘরোয়া খাবার ও সাশ্রয়ী জার্নি
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border-2 border-emerald-500 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-600 text-white uppercase">
                সবচেয়ে জনপ্রিয়
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">স্ট্যান্ডার্ড / পরিবার</span>
                <div className="text-lg font-bold text-emerald-700 mt-1">{destination.estimatedBudget.standard}</div>
              </div>
              <p className="text-[11px] text-emerald-900/80 mt-2 pt-2 border-t border-emerald-200">
                এসি বাস বা এক্সপ্রেস ট্রেন, মানসম্মত হোটেল ও রেস্টুরেন্ট
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">লাক্সারি / প্রিমিয়াম</span>
                <div className="text-lg font-bold text-amber-700 mt-1">{destination.estimatedBudget.luxury}</div>
              </div>
              <p className="text-[11px] text-amber-800/80 mt-2 pt-2 border-t border-amber-200">
                প্রাইভেট গাড়ি/ফ্লাইট, প্রিমিয়াম রিসোর্ট ও বিলাসী খাবার
              </p>
            </div>
          </div>
        </section>

        {/* Tourist Spots Highlights */}
        <section>
          <div className="flex items-center gap-2 mb-3.5">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">আকর্ষণীয় দর্শনীয় স্থান (Highlight Spots)</h3>
              <p className="text-[11px] text-slate-500">প্রধান দর্শনীয় আকর্ষণ ও টিকিট মূল্য</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {destination.highlightSpots.map((spot, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-emerald-500/50 transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                      {spot.nameBn}{' '}
                      <span className="text-[11px] font-normal text-slate-500">({spot.name})</span>
                    </h4>
                    {spot.ticketPrice && (
                      <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                        {spot.ticketPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {spot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transport Options & Live Fares */}
        <section>
          <div className="flex items-center gap-2 mb-3.5">
            <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
              <Bus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">যাতায়াত ব্যবস্থা ও সঠিক ভাড়া (Transport & Fares)</h3>
              <p className="text-[11px] text-slate-500">বর্তমান ভাড়ার আনুমানিক তালিকা</p>
            </div>
          </div>
          <div className="space-y-2.5">
            {destination.transportOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-xs">
                    {getTransportIcon(opt.type)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-bold text-slate-800 text-xs sm:text-sm">{opt.type}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        {opt.from} ➔ {opt.to}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      💡 {opt.tips}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200">
                  <div className="text-left md:text-right">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">ভাড়া</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-600">{opt.fare}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">সময়</div>
                    <div className="text-xs font-semibold text-slate-700">{opt.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Foods */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">বিখ্যাত লোকাল খাবার (Signature Local Food)</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {destination.famousFoods.map((food, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>{food}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tips & Travel Advice */}
        <section className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-amber-900">ভ্রমণ টিপস ও সতর্কতা (Important Travel Tips)</h3>
          </div>
          <ul className="space-y-1.5">
            {destination.tipsAndAdvice.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-amber-950">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 text-xs">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            🌱 দায়িত্বশীল ও পরিবেশবান্ধব ভ্রমণ করুন। প্লাস্টিক বর্জ্য যথাস্থানে ফেলুন।
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleShare}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs border border-slate-300 flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-600" />
              <span>শেয়ার করুন</span>
            </button>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name + ' Bangladesh')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>ম্যাপে দেখুন</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
