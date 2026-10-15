'use client';

import React, { useState, useEffect } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Image as ImageIcon,
  LayoutGrid,
  Film,
  Scan,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  Download,
  Eye,
} from 'lucide-react';

interface DestinationDetailProps {
  destination: Destination;
  onClose?: () => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  onClose,
}) => {
  // Fallback travel photos if a destination has fewer than 5 images (curated landscape & nature)
  const contextualFallbacks = [
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  ];

  const galleryImages =
    destination.images && destination.images.length > 0
      ? destination.images
      : [
          destination.image,
          contextualFallbacks[1],
          contextualFallbacks[2],
          contextualFallbacks[3],
          contextualFallbacks[4],
        ];

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'bento' | 'cinematic' | 'natural'>('bento');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Reset when destination changes
  useEffect(() => {
    setActiveImageIndex(0);
    setIsLightboxOpen(false);
    setIsZoomed(false);
    setIsPlaying(false);
  }, [destination.id]);

  // Autoplay slideshow in cinematic mode
  useEffect(() => {
    if (viewMode !== 'cinematic' || !isPlaying) return;
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [viewMode, isPlaying, galleryImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, galleryImages.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const toggleBrowserFullscreen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleImageLoad = (url: string) => {
    setLoadedImages((prev) => ({ ...prev, [url]: true }));
  };

  // 4 side images for the balanced mosaic section
  const sideImages = [
    { url: galleryImages[1] || galleryImages[0], index: 1 < galleryImages.length ? 1 : 0 },
    { url: galleryImages[2] || galleryImages[0], index: 2 < galleryImages.length ? 2 : 0 },
    { url: galleryImages[3] || galleryImages[1] || galleryImages[0], index: 3 < galleryImages.length ? 3 : 0 },
    { url: galleryImages[4] || galleryImages[2] || galleryImages[0], index: 4 < galleryImages.length ? 4 : 0 },
  ];

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
      navigator
        .share({
          title: `${destination.nameBn} - কোথায় যাবো?`,
          text: `চলুন ঘুরে আসি ${destination.nameBn}! ভাড়া ও দর্শনীয় স্থান দেখুন Kothay Jabo তে!`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('লিঙ্ক কপি করা হয়েছে! বন্ধুদের সাথে শেয়ার করুন।');
    }
  };

  return (
    <div className="light-panel rounded-3xl overflow-hidden transition-all text-xs sm:text-sm shadow-xl">
      {/* Luxury Gallery Banner Stage with Adaptive Light/Dark Theming */}
      <div className="relative p-2.5 sm:p-3 bg-slate-100/90 dark:bg-slate-950 select-none border-b border-slate-200/90 dark:border-slate-800 transition-colors">
        {/* Top Control Bar: View Mode Switcher, Badges & Close Button */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-2.5 px-1">
          {/* Left Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {destination.category === 'inside_dhaka' ? 'ঢাকার ভেতরে ডে-ট্যুর' : 'ঢাকার বাইরে ভ্রমণ'}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-xs">
              {destination.division} বিভাগ
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              4K আল্ট্রা এইচডি
            </span>
          </div>

          {/* Right Controls: View Mode Switcher & Lightbox / Close */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* View Mode Switcher */}
            <div className="flex items-center p-0.5 rounded-xl bg-white dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-xs">
              <button
                onClick={() => setViewMode('bento')}
                title="বেন্টো গ্রিড মোড (Balanced Bento)"
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  viewMode === 'bento'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden md:inline">বেন্টো গ্রিড</span>
              </button>
              <button
                onClick={() => setViewMode('cinematic')}
                title="সিনেমাটিক ওয়াইডস্ক্রিন মোড (Full 16:9 Cinema)"
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  viewMode === 'cinematic'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span className="hidden md:inline">সিনেমাটিক</span>
              </button>
              <button
                onClick={() => setViewMode('natural')}
                title="নো-ক্রপ অরিজিনাল ভিউ (True Native Ratio)"
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  viewMode === 'natural'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Scan className="w-3.5 h-3.5" />
                <span className="hidden md:inline">নো-ক্রপ</span>
              </button>
            </div>

            {/* Lightbox Expand Button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              title="ফুলস্ক্রিন লাইটবক্স ও আসল রেজোলিউশন জুম"
              className="p-1.5 sm:p-2 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/20 text-slate-700 dark:text-white backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-xs transition active:scale-95 cursor-pointer flex items-center gap-1"
            >
              <Maximize2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden lg:inline text-[11px] font-bold pr-1">ফুলস্ক্রিন</span>
            </button>

            {/* Optional Close Button */}
            {onClose && (
              <button
                onClick={onClose}
                title="বন্ধ করুন"
                className="p-1.5 sm:p-2 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/25 text-slate-700 dark:text-white backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-xs transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* --- VIEW MODE 1: BALANCED 5-PHOTO BENTO GRID --- */}
        {viewMode === 'bento' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3 h-[380px] sm:h-[440px] md:h-[480px] lg:h-[510px]">
            {/* Left Main Showcase (6 of 12 on MD, 7 of 12 on LG = Balanced 50%-58% Width) */}
            <div
              className="md:col-span-6 lg:col-span-7 relative h-full min-h-0 rounded-2xl overflow-hidden group cursor-pointer bg-slate-200 dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-md"
              onClick={() => setIsLightboxOpen(true)}
            >
              {/* Main Showcase Image with High-Definition Rendering */}
              <img
                key={`bento-main-${activeImageIndex}`}
                src={galleryImages[activeImageIndex]}
                alt={`${destination.name} - Showcase`}
                onLoad={() => handleImageLoad(galleryImages[activeImageIndex])}
                style={{ imageRendering: 'high-quality' }}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104 block"
              />

              {/* Refined Scrim Gradient (Only bottom 28% for text, keeps landscape bright and vibrant) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 via-28% to-transparent pointer-events-none" />

              {/* Image Counter & Fullscreen Hint */}
              <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                <div className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-sm">
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {activeImageIndex + 1} / {galleryImages.length}
                  </span>
                </div>
                <div className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-emerald-300 backdrop-blur-md border border-white/20 flex items-center gap-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3 h-3" />
                  <span>ক্লিক করে জুম করুন</span>
                </div>
              </div>

              {/* Prev / Next Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition active:scale-95 border border-white/20 shadow-lg cursor-pointer hover:border-emerald-400"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition active:scale-95 border border-white/20 shadow-lg cursor-pointer hover:border-emerald-400"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Hero Title & District at Bottom of Main Showcase */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-20 text-white pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-emerald-300 text-[11px] font-semibold mb-1.5 border border-white/20 shadow-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{destination.district}</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-snug drop-shadow-md">
                  {destination.nameBn}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1 max-w-xl drop-shadow line-clamp-1">
                  {destination.name} • {destination.taglineBn}
                </p>
              </div>
            </div>

            {/* Right Side Mosaic: 4 Images in 2x2 Grid with True 4:3 Landscape Proportions */}
            <div className="hidden md:grid md:col-span-6 lg:col-span-5 grid-cols-2 grid-rows-2 gap-2.5 sm:gap-3 h-full min-h-0">
              {sideImages.map((item, idx) => (
                <div
                  key={`bento-side-${idx}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (idx === 3 || activeImageIndex === item.index) {
                      setActiveImageIndex(item.index);
                      setIsLightboxOpen(true);
                    } else {
                      setActiveImageIndex(item.index);
                    }
                  }}
                  className={`relative h-full w-full min-h-0 rounded-2xl overflow-hidden group cursor-pointer border transition-all duration-300 bg-slate-200 dark:bg-slate-900 ${
                    activeImageIndex === item.index
                      ? 'border-emerald-500 ring-2 ring-emerald-500/40 shadow-lg scale-[0.99]'
                      : 'border-slate-200/90 dark:border-white/10 hover:border-emerald-500 hover:shadow-md'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={`${destination.nameBn} - ${idx + 2}`}
                    onLoad={() => handleImageLoad(item.url)}
                    style={{ imageRendering: 'high-quality' }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 block"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />

                  {/* Hover Quick Indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-1 rounded-lg bg-black/60 text-white backdrop-blur-md border border-white/20 inline-flex items-center">
                      <Eye className="w-3 h-3 text-emerald-400" />
                    </span>
                  </div>

                  {/* 4th Image: Glassmorphic Badge to View All Photos */}
                  {idx === 3 && (
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center p-2 text-center">
                      <div className="px-3.5 py-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/25 text-white flex items-center gap-2 shadow-xl group-hover:scale-105 transition-transform">
                        <ImageIcon className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold">
                          {galleryImages.length > 5 ? `+${galleryImages.length - 4} ছবি দেখুন` : 'সব ছবি দেখুন'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW MODE 2: CINEMATIC FULL 16:9 PANORAMIC STAGE --- */}
        {viewMode === 'cinematic' && (
          <div className="relative rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-lg h-[380px] sm:h-[440px] md:h-[490px] lg:h-[520px] group">
            {/* Cinematic Hero Image */}
            <img
              key={`cinema-${activeImageIndex}`}
              src={galleryImages[activeImageIndex]}
              alt={`${destination.name} - Cinematic`}
              onLoad={() => handleImageLoad(galleryImages[activeImageIndex])}
              style={{ imageRendering: 'high-quality' }}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 via-35% to-transparent pointer-events-none" />

            {/* Left / Right Cinema Navigation Arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center transition active:scale-95 border border-white/20 shadow-lg cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center transition active:scale-95 border border-white/20 shadow-lg cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Floating Top Bar with Autoplay Toggle */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-black/60 text-emerald-800 dark:text-emerald-300 backdrop-blur-md border border-slate-200 dark:border-white/20 flex items-center gap-1.5 shadow-md">
                <Film className="w-3.5 h-3.5" />
                <span>সিনেমাটিক এইচডি মোড • {activeImageIndex + 1}/{galleryImages.length}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                className="pointer-events-auto px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-black/60 hover:bg-white dark:hover:bg-black/85 text-slate-800 dark:text-white backdrop-blur-md border border-slate-200 dark:border-white/20 flex items-center gap-1.5 shadow-md transition cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                <span>{isPlaying ? 'স্লাইডশো থামান' : 'অটো স্লাইডশো'}</span>
              </button>
            </div>

            {/* Bottom Cinematic Filmstrip Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-white text-left">
                <h3 className="text-lg sm:text-2xl font-black drop-shadow-md leading-tight">
                  {destination.nameBn}
                </h3>
                <p className="text-xs text-slate-300 drop-shadow line-clamp-1">{destination.taglineBn}</p>
              </div>

              {/* Horizontal Filmstrip Ribbon */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 overflow-x-auto max-w-full shadow-lg">
                {galleryImages.map((img, idx) => (
                  <button
                    key={`cinema-thumb-${idx}`}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-12 h-9 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'ring-2 ring-emerald-400 scale-105 shadow-md'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW MODE 3: NATURAL RATIO (NO-CROP) GALLERY --- */}
        {viewMode === 'natural' && (
          <div className="space-y-3">
            <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold">
                  প্রাকৃতিক নো-ক্রপ ভিউ: প্রতিটি ছবির আসল রেজোলিউশন ও ১০০% সঠিক সাইজ দেখুন
                </span>
              </div>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">মোট {galleryImages.length}টি ছবি</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {galleryImages.map((img, idx) => (
                <div
                  key={`natural-${idx}`}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setIsLightboxOpen(true);
                  }}
                  className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 group cursor-pointer hover:border-emerald-500 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 dark:bg-black/40 flex items-center justify-center overflow-hidden">
                    <img
                      src={img}
                      alt={`${destination.nameBn} - Photo ${idx + 1}`}
                      style={{ imageRendering: 'high-quality' }}
                      className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-bold backdrop-blur-md border border-white/20">
                      #{idx + 1}
                    </div>
                  </div>
                  <div className="p-2.5 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-transparent">
                    <span className="font-medium truncate">{destination.nameBn} • ছবি {idx + 1}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold inline-flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> জুম
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Horizontal Thumbnail Bar (Visible in Bento mode on small screens) */}
        {viewMode === 'bento' && galleryImages.length > 1 && (
          <div className="flex md:hidden items-center gap-2 pt-2 px-1 overflow-x-auto no-scrollbar">
            {galleryImages.map((img, idx) => (
              <button
                key={`mobile-thumb-${idx}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={`relative w-14 h-11 rounded-xl overflow-hidden shrink-0 border transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-emerald-500 ring-2 ring-emerald-500/40 scale-105'
                    : 'border-slate-300 dark:border-white/20 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`mobile-thumb-${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="px-3 py-2 rounded-xl bg-white dark:bg-black/60 backdrop-blur-md text-slate-700 dark:text-white text-[11px] font-bold shrink-0 flex items-center gap-1.5 border border-slate-200 dark:border-white/20 cursor-pointer active:scale-95 transition shadow-xs"
            >
              <Maximize2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>সব ছবি</span>
            </button>
          </div>
        )}
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <div className="p-3 rounded-xl bg-white dark:bg-[#161b26] border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5 shadow-xs">
          <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 shrink-0">
            <Navigation className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
              ঢাকা থেকে দূরত্ব
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {destination.distanceFromDhaka}
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-[#161b26] border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5 shadow-xs">
          <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-900/30 text-sky-600 shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
              যাতায়াত সময়
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {destination.travelTime}
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-[#161b26] border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5 shadow-xs">
          <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
              উপযুক্ত সময়
            </div>
            <div
              className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate"
              title={destination.bestTimeToVisit}
            >
              {destination.bestTimeToVisit}
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-[#161b26] border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5 shadow-xs">
          <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 shrink-0">
            <Wallet className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
              বাজেট রেঞ্জ
            </div>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {destination.estimatedBudget.standard}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="p-5 sm:p-7 space-y-7 bg-white dark:bg-[#161b26]">
        {/* Estimated Budget Cards */}
        <section>
          <div className="flex items-center gap-2 mb-3.5">
            <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600">
              <Wallet className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                আনুমানিক ভ্রমণ খরচ (Budget Tier)
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                আপনার পছন্দ অনুযায়ী খরচের স্তর নির্ধারণ করুন
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                  বাজেট ভ্রমণকারী
                </span>
                <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-1">
                  {destination.estimatedBudget.budget}
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                সাধারণ লোকাল বাস, ঘরোয়া খাবার ও সাশ্রয়ী জার্নি
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-900/20 border-2 border-emerald-500 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-600 text-white uppercase">
                সবচেয়ে জনপ্রিয়
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-800 dark:text-emerald-400 tracking-wider">
                  স্ট্যান্ডার্ড / পরিবার
                </span>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mt-1">
                  {destination.estimatedBudget.standard}
                </div>
              </div>
              <p className="text-[11px] text-emerald-900/80 dark:text-emerald-400/80 mt-2 pt-2 border-t border-emerald-200 dark:border-emerald-700/50">
                এসি বাস বা এক্সপ্রেস ট্রেন, মানসম্মত হোটেল ও রেস্টুরেন্ট
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-800 dark:text-amber-400 tracking-wider">
                  লাক্সারি / প্রিমিয়াম
                </span>
                <div className="text-lg font-bold text-amber-700 dark:text-amber-400 mt-1">
                  {destination.estimatedBudget.luxury}
                </div>
              </div>
              <p className="text-[11px] text-amber-800/80 dark:text-amber-400/80 mt-2 pt-2 border-t border-amber-200 dark:border-amber-700/50">
                প্রাইভেট গাড়ি/ফ্লাইট, প্রিমিয়াম রিসোর্ট ও বিলাসী খাবার
              </p>
            </div>
          </div>
        </section>

        {/* Tourist Spots Highlights */}
        <section>
          <div className="flex items-center gap-2 mb-3.5">
            <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                আকর্ষণীয় দর্শনীয় স্থান (Highlight Spots)
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                প্রধান দর্শনীয় আকর্ষণ ও টিকিট মূল্য
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {destination.highlightSpots.map((spot, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700 flex flex-col justify-between hover:border-emerald-500/50 transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                      {spot.nameBn}{' '}
                      <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                        ({spot.name})
                      </span>
                    </h4>
                    {spot.ticketPrice && (
                      <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50">
                        {spot.ticketPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
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
            <div className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-900/30 text-sky-600">
              <Bus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                যাতায়াত ব্যবস্থা ও সঠিক ভাড়া (Transport & Fares)
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                বর্তমান ভাড়ার আনুমানিক তালিকা
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            {destination.transportOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shrink-0 shadow-xs">
                    {getTransportIcon(opt.type)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">
                        {opt.type}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {opt.from} ➔ {opt.to}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">💡 {opt.tips}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                  <div className="text-left md:text-right">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">
                      ভাড়া
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {opt.fare}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">
                      সময়
                    </div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {opt.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Foods */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-900/30 text-rose-600">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                বিখ্যাত লোকাল খাবার (Signature Local Food)
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {destination.famousFoods.map((food, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>{food}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tips & Travel Advice */}
        <section className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-700/40">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-400">
              ভ্রমণ টিপস ও সতর্কতা (Important Travel Tips)
            </h3>
          </div>
          <ul className="space-y-1.5">
            {destination.tipsAndAdvice.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-amber-950 dark:text-amber-300/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-700 text-xs">
          <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
            🌱 দায়িত্বশীল ও পরিবেশবান্ধব ভ্রমণ করুন। প্লাস্টিক বর্জ্য যথাস্থানে ফেলুন।
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleShare}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-xs border border-slate-300 dark:border-slate-600 flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>শেয়ার করুন</span>
            </button>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                destination.name + ' Bangladesh'
              )}`}
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

      {/* Fullscreen Ultra-HD Interactive Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-5 select-none animate-fadeIn"
          onClick={() => {
            setIsLightboxOpen(false);
            setIsZoomed(false);
          }}
        >
          {/* Modal Top Bar */}
          <div
            className="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-white z-10 p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {destination.nameBn}
                </h3>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  ({destination.name})
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                  4K HD
                </span>
              </div>
              <p className="text-[11px] text-emerald-400 flex items-center gap-2 mt-0.5">
                <span>ছবি {activeImageIndex + 1} এর {galleryImages.length}</span>
                <span>•</span>
                <span className="text-slate-400">{destination.district}</span>
              </p>
            </div>

            {/* Lightbox Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* 100% Crisp Resolution Zoom Toggle */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition active:scale-95 cursor-pointer backdrop-blur-md flex items-center gap-1.5 border shadow-sm ${
                  isZoomed
                    ? 'bg-amber-500/20 border-amber-400/40 text-amber-300 ring-2 ring-amber-400/30'
                    : 'bg-white/10 hover:bg-white/20 border-white/15 text-white'
                }`}
                title={isZoomed ? 'স্ক্রিন ফিট মোড' : '১০০% আসল রেজোলিউশন জুম (1:1 Native HD)'}
              >
                {isZoomed ? (
                  <ZoomOut className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                )}
                <span>{isZoomed ? 'স্ক্রিন ফিট' : '১০০% আসল রেজোলিউশন'}</span>
              </button>

              {/* Browser Fullscreen Toggle */}
              <button
                onClick={toggleBrowserFullscreen}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95 cursor-pointer backdrop-blur-md border border-white/15 shadow-sm"
                title="ব্রাউজার ফুলস্ক্রিন"
              >
                <Maximize2 className="w-4 h-4 text-emerald-400" />
              </button>

              {/* Open Original Full-Res Image in New Tab */}
              <a
                href={galleryImages[activeImageIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95 cursor-pointer backdrop-blur-md border border-white/15 shadow-sm"
                title="নতুন ট্যাবে ফুল রেজোলিউশন ছবি দেখুন"
              >
                <Download className="w-4 h-4 text-sky-400" />
              </a>

              {/* Close Button */}
              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  setIsZoomed(false);
                }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition active:scale-95 cursor-pointer backdrop-blur-md border border-white/15 shadow-sm"
                title="বন্ধ করুন (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Center Image Stage with Left/Right Navigation */}
          <div
            className="relative w-full max-w-6xl mx-auto flex-1 flex items-center justify-center my-2 sm:my-3 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Arrow */}
            {galleryImages.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition active:scale-95 cursor-pointer backdrop-blur-md border border-white/20 shadow-xl"
                title="পূর্ববর্তী ছবি (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Viewport: Fit Screen vs 100% Uncompressed Zoom */}
            <div
              className={`w-full h-full flex items-center justify-center ${
                isZoomed ? 'overflow-auto max-h-[78vh] p-4 cursor-grab active:cursor-grabbing' : ''
              }`}
            >
              <img
                key={`lightbox-img-${activeImageIndex}-${isZoomed}`}
                src={galleryImages[activeImageIndex]}
                alt={`${destination.name} - Fullscreen Preview`}
                style={{ imageRendering: 'high-quality' }}
                className={`${
                  isZoomed
                    ? 'max-h-none max-w-none w-auto h-auto rounded-xl shadow-2xl select-none border border-white/20 animate-fadeIn'
                    : 'max-h-[72vh] sm:max-h-[76vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl select-none border border-white/10 animate-fadeIn'
                }`}
              />
            </div>

            {/* Next Arrow */}
            {galleryImages.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition active:scale-95 cursor-pointer backdrop-blur-md border border-white/20 shadow-xl"
                title="পরবর্তী ছবি (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </div>

          {/* Modal Bottom Thumbnail Strip */}
          {galleryImages.length > 1 && (
            <div
              className="w-full max-w-4xl mx-auto flex items-center justify-center gap-2 overflow-x-auto py-2 z-10 px-2"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={`thumb-modal-${idx}`}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-xl overflow-hidden shrink-0 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'ring-2 ring-emerald-400 scale-105 opacity-100 shadow-lg shadow-emerald-500/20'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`thumb-modal-${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
