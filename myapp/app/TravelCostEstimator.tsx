'use client';

import React, { useState } from 'react';
import { Calculator, Users, Calendar, DollarSign, Sparkles, ShieldCheck } from 'lucide-react';
import { DESTINATIONS_DATA } from './data';

export const TravelCostEstimator: React.FC = () => {
  const [selectedDestId, setSelectedDestId] = useState<string>(DESTINATIONS_DATA[0].id);
  const [travelers, setTravelers] = useState<number>(2);
  const [days, setDays] = useState<number>(2);
  const [comfortLevel, setComfortLevel] = useState<'budget' | 'standard' | 'luxury'>('standard');

  const destination = DESTINATIONS_DATA.find((d) => d.id === selectedDestId) || DESTINATIONS_DATA[0];

  const isInsideDhaka = destination.category === 'inside_dhaka';

  const baseTransportFare = isInsideDhaka
    ? comfortLevel === 'budget'
      ? 150
      : comfortLevel === 'standard'
      ? 450
      : 1200
    : comfortLevel === 'budget'
    ? 1200
    : comfortLevel === 'standard'
    ? 2800
    : 6500;

  const perDayHotel = isInsideDhaka
    ? 0
    : comfortLevel === 'budget'
    ? 800
    : comfortLevel === 'standard'
    ? 2200
    : 5500;

  const perPersonPerDayFood = comfortLevel === 'budget' ? 400 : comfortLevel === 'standard' ? 900 : 2000;
  const sightseeingFees = (isInsideDhaka ? 150 : 400) * travelers;

  const totalTransport = baseTransportFare * (isInsideDhaka ? Math.ceil(travelers / 3) : travelers);
  const totalHotel = perDayHotel * (days > 1 ? days - 1 : 0) * Math.ceil(travelers / 2);
  const totalFood = perPersonPerDayFood * travelers * days;
  const emergencyReserve = Math.round((totalTransport + totalHotel + totalFood) * 0.1);

  const grandTotal = totalTransport + totalHotel + totalFood + sightseeingFees + emergencyReserve;
  const perPersonTotal = Math.round(grandTotal / (travelers || 1));

  const formatTk = (num: number) => {
    return '৳' + num.toLocaleString('en-US');
  };

  return (
    <div className="light-panel p-5 sm:p-7 rounded-3xl relative overflow-hidden text-xs sm:text-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold">
            <Calculator className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
              স্মার্ট ভ্রমণ বাজেট ক্যালকুলেটর
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              যাত্রী সংখ্যা, সময় ও ধরন অনুযায়ী তাৎক্ষণিক নিখুঁত খরচের ধারণা
            </p>
          </div>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] text-slate-600">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>রিয়েল-টাইম হিসাব</span>
        </div>
      </div>

      {/* Form Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        {/* Destination Picker */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">গন্তব্য নির্বাচন</label>
          <select
            value={selectedDestId}
            onChange={(e) => setSelectedDestId(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition cursor-pointer"
          >
            {DESTINATIONS_DATA.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nameBn} ({d.category === 'inside_dhaka' ? 'ঢাকা' : 'ঢাকার বাইরে'})
              </option>
            ))}
          </select>
        </div>

        {/* Travelers */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3 text-sky-600" /> যাত্রী সংখ্যা
            </span>
            <span className="text-emerald-700 font-bold">{travelers} জন</span>
          </label>
          <div className="flex items-center rounded-xl bg-white border border-slate-300 p-1">
            <button
              onClick={() => setTravelers((p) => Math.max(1, p - 1))}
              className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 active:scale-95 transition cursor-pointer text-xs"
            >
              -
            </button>
            <span className="flex-1 text-center font-bold text-slate-800 text-xs">
              {travelers} জন
            </span>
            <button
              onClick={() => setTravelers((p) => p + 1)}
              className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 active:scale-95 transition cursor-pointer text-xs"
            >
              +
            </button>
          </div>
        </div>

        {/* Duration / Days */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-amber-600" /> ভ্রমণের দিন
            </span>
            <span className="text-amber-700 font-bold">{days} দিন</span>
          </label>
          <div className="flex items-center rounded-xl bg-white border border-slate-300 p-1">
            <button
              onClick={() => setDays((p) => Math.max(1, p - 1))}
              className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 active:scale-95 transition cursor-pointer text-xs"
            >
              -
            </button>
            <span className="flex-1 text-center font-bold text-slate-800 text-xs">
              {days} দিন
            </span>
            <button
              onClick={() => setDays((p) => p + 1)}
              className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 active:scale-95 transition cursor-pointer text-xs"
            >
              +
            </button>
          </div>
        </div>

        {/* Comfort Tier */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-emerald-600" /> ভ্রমণ ক্যাটাগরি
          </label>
          <select
            value={comfortLevel}
            onChange={(e) => setComfortLevel(e.target.value as any)}
            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-emerald-500 transition cursor-pointer"
          >
            <option value="budget">বাজেট (সাশ্রয়ী)</option>
            <option value="standard">স্ট্যান্ডার্ড (পরিবার/আরামদায়ক)</option>
            <option value="luxury">লাক্সারি (প্রিমিয়াম)</option>
          </select>
        </div>
      </div>

      {/* Output Budget Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">যাতায়াত ও ভাড়া</div>
          <div className="text-base font-bold text-sky-700 mt-1">{formatTk(totalTransport)}</div>
          <p className="text-[10px] text-slate-400 mt-1">বাস / ট্রেন / বাহন</p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">হোটেল বা রিসোর্ট</div>
          <div className="text-base font-bold text-amber-700 mt-1">{formatTk(totalHotel)}</div>
          <p className="text-[10px] text-slate-400 mt-1">
            {isInsideDhaka ? 'ডে ট্যুর (হোটেল নেই)' : `${days > 1 ? days - 1 : 0} রাত`}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">খাবার খরচ</div>
          <div className="text-base font-bold text-rose-700 mt-1">{formatTk(totalFood)}</div>
          <p className="text-[10px] text-slate-400 mt-1">{travelers} জনের {days} দিনের মিল</p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">টিকিট ও ইমার্জেন্সি</div>
          <div className="text-base font-bold text-purple-700 mt-1">
            {formatTk(sightseeingFees + emergencyReserve)}
          </div>
          <p className="text-[10px] text-slate-400 mt-1">১০% সেফটি রিজার্ভ সহ</p>
        </div>

        {/* Grand Total Hero Tile */}
        <div className="sm:col-span-2 lg:col-span-1 p-3.5 rounded-xl bg-emerald-600 text-white flex flex-col justify-between shadow-md">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-100 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> সর্বমোট বাজেট
            </div>
            <div className="text-xl font-bold mt-1 text-white">
              {formatTk(grandTotal)}
            </div>
          </div>
          <div className="text-[11px] font-medium text-emerald-100 pt-2 mt-2 border-t border-emerald-500/40">
            জনপ্রতি: <span className="text-white font-bold">{formatTk(perPersonTotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
