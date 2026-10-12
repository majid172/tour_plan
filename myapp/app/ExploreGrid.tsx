'use client';

import React, { useState, useMemo } from 'react';
import { Destination } from './data';
import { MapPin, Search, Clock, ArrowRight, Sparkles, Wallet } from 'lucide-react';

interface ExploreGridProps {
  destinations: Destination[];
  onSelect: (destination: Destination) => void;
}

export const ExploreGrid: React.FC<ExploreGridProps> = ({ destinations, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'inside_dhaka' | 'outside_dhaka'>('all');

  const divisions = useMemo(() => {
    const list = Array.from(new Set(destinations.map((d) => d.division)));
    return ['all', ...list];
  }, [destinations]);

  const filtered = useMemo(() => {
    return destinations.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchDiv = selectedDivision === 'all' || item.division === selectedDivision;
      const matchQuery =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameBn.includes(searchQuery) ||
        item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.taglineBn.includes(searchQuery);

      return matchCat && matchDiv && matchQuery;
    });
  }, [destinations, selectedCategory, selectedDivision, searchQuery]);

  return (
    <section className="space-y-4 text-xs sm:text-sm">
      {/* Search & Filter Bar */}
      <div className="light-panel p-3.5 sm:p-4 rounded-2xl flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input Field */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="গন্তব্য, জেলা বা খাবারের নাম দিয়ে খুঁজুন (সাজেক, সুন্দরবন, বিরিয়ানি)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-700 transition"
          />
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Segmented Category Buttons */}
          <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              সবগুলো
            </button>
            <button
              onClick={() => setSelectedCategory('inside_dhaka')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedCategory === 'inside_dhaka'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              ঢাকার ভেতরে
            </button>
            <button
              onClick={() => setSelectedCategory('outside_dhaka')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedCategory === 'outside_dhaka'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              ঢাকার বাইরে
            </button>
          </div>

          {/* Division Selector */}
          <select
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs focus:outline-none focus:border-emerald-500 transition cursor-pointer"
          >
            <option value="all">সকল বিভাগ ({divisions.length - 1})</option>
            {divisions.filter((d) => d !== 'all').map((div) => (
              <option key={div} value={div}>
                {div} বিভাগ
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            মোট পাওয়া গেছে: <strong className="text-emerald-700 dark:text-emerald-400 font-bold">{filtered.length}</strong> টি গন্তব্য
          </span>
        </div>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium cursor-pointer underline text-xs"
          >
            সার্চ ফিল্টার ক্লিয়ার
          </button>
        )}
      </div>

      {/* Cards Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-14 light-panel rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <Sparkles className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">কোনো গন্তব্য খুঁজে পাওয়া যায়নি!</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">অন্য কোনো নাম বা ফিল্টার নির্বাচন করুন।</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelect(dest)}
              className="light-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image Stage */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-xs">
                      {dest.category === 'inside_dhaka' ? '📍 ঢাকা' : '🌄 দূর ভ্রমণ'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                      {dest.division}
                    </span>
                  </div>

                  {/* District Pin & Photo Count Badge */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white font-medium drop-shadow">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-300" />
                      <span>{dest.district}</span>
                    </div>
                    {dest.images && dest.images.length > 1 && (
                      <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white border border-white/20">
                        📸 {dest.images.length}টি ছবি
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {dest.nameBn}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{dest.name}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                    {dest.taglineBn}
                  </p>

                  {/* Metric Pills */}
                  <div className="grid grid-cols-2 gap-2 mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs">
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-[11px]">
                      <Clock className="w-3 h-3 text-sky-600 shrink-0" />
                      <span className="truncate">{dest.travelTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 justify-end text-[11px]">
                      <Wallet className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 truncate">{dest.estimatedBudget.standard}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button Strip */}
              <div className="p-4 sm:p-5 pt-0">
                <div className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 group-hover:bg-emerald-600 group-hover:text-white text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 border border-slate-200/80 dark:border-slate-700 group-hover:border-transparent">
                  <span>ভ্রমণ পরিকল্পনা ও বিস্তারিত</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
