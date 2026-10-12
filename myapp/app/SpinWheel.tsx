'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Destination } from './data';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Compass,
  Volume2,
  VolumeX,
  Dices,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface SpinWheelProps {
  destinations: Destination[];
  onSelect: (destination: Destination) => void;
  selectedDestination: Destination | null;
}

export const SpinWheel: React.FC<SpinWheelProps> = ({
  destinations,
  onSelect,
  selectedDestination,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [needleAngle, setNeedleAngle] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const rotationRef = useRef<number>(0);
  const needleAngleRef = useRef<number>(0);
  const needleVelRef = useRef<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const total = destinations.length;
  const sliceAngle = (2 * Math.PI) / (total || 1);

  // Curated, beautiful, high-contrast discovery palette (12 vibrant harmonious colors)
  const sliceColors = [
    '#059669', // Emerald Green
    '#0284c7', // Sky Blue
    '#d97706', // Honey Amber
    '#e11d48', // Crimson Rose
    '#7c3aed', // Royal Violet
    '#0d9488', // Deep Teal
    '#ea580c', // Coral Orange
    '#4f46e5', // Indigo Sapphire
    '#16a34a', // Fresh Green
    '#0891b2', // Vibrant Cyan
    '#db2777', // Magenta Pink
    '#ca8a04', // Golden Ochre
  ];

  // Initialize Web Audio Context for realistic peg clicks
  const initAudio = () => {
    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass && !audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass();
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    } catch {}
  };

  const playTickSound = () => {
    if (isMuted) return;
    try {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(640, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.024);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.024);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.024);
    } catch {}
  };

  // Draw vibrant multi-colored wheel on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || total === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 16;

    ctx.clearRect(0, 0, width, height);

    const isDark =
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark');

    // Draw Slices with Beautiful Multi-Color Palette
    for (let i = 0; i < total; i++) {
      const startAngle = i * sliceAngle;
      const endAngle = (i + 1) * sliceAngle;
      const color = sliceColors[i % sliceColors.length];

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.fill();

      // Clean white borders between slices
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Slice typography: Crisp white text with soft shadow for maximum legibility
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px system-ui, -apple-system, sans-serif';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 3;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;

      const label = destinations[i].nameBn || destinations[i].name;
      const displayLabel = label.length > 14 ? label.slice(0, 13) + '…' : label;
      ctx.fillText(displayLabel, radius - 24, 5);

      ctx.restore();
    }

    // Outer Silver/Chrome Pegs with glowing centers
    for (let i = 0; i < total; i++) {
      const pegAngle = i * sliceAngle;
      const pegDist = radius - 5;
      const px = centerX + pegDist * Math.cos(pegAngle);
      const py = centerY + pegDist * Math.sin(pegAngle);

      // Outer chrome bevel
      ctx.beginPath();
      ctx.arc(px, py, 4.5, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
      ctx.shadowBlur = 3;
      ctx.shadowOffsetY = 1;
      ctx.fill();

      // Inner jewel dot
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, 2 * Math.PI);
      ctx.fillStyle = '#0284c7'; // Sky jewel
      ctx.shadowBlur = 0;
      ctx.fill();
    }

    // Modern Double Outer Rim
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = isDark ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 4, 0, 2 * Math.PI);
    ctx.strokeStyle = isDark ? '#1e293b' : '#f1f5f9';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    // Center circular badge on canvas
    ctx.beginPath();
    ctx.arc(centerX, centerY, 38, 0, 2 * Math.PI);
    ctx.fillStyle = isDark ? '#111827' : '#ffffff';
    ctx.fill();
    ctx.strokeStyle = isDark ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 3.5;
    ctx.stroke();
  }, [destinations, total, sliceAngle]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Spin with physics-based requestAnimationFrame and dynamic needle deflection
  const spinWheel = () => {
    if (isSpinning || total === 0) return;

    setIsSpinning(true);
    initAudio();

    const chosenIndex = Math.floor(Math.random() * total);
    const sliceDeg = 360 / total;
    const centerDeg = (chosenIndex + 0.5) * sliceDeg;

    // Calculate rotation so that center of chosenIndex slice lands precisely at 12 o'clock (270°)
    const targetModulo = (270 - centerDeg + 360) % 360;
    const currentModulo = ((rotationRef.current % 360) + 360) % 360;
    let diff = (targetModulo - currentModulo + 360) % 360;
    if (diff < 90) diff += 360;

    const extraSpins = 360 * (5 + Math.floor(Math.random() * 2));
    const startRot = rotationRef.current;
    const endRot = startRot + extraSpins + diff;
    const totalDelta = endRot - startRot;

    const duration = 4600; // 4.6s realistic roll
    const startTime = performance.now();

    let lastPegCount = Math.floor(startRot / sliceDeg);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Quartic ease out: fast initial spin with dramatic gradual slowdown
      const ease = 1 - Math.pow(1 - progress, 4);
      const currentRot = startRot + totalDelta * ease;

      rotationRef.current = currentRot;
      setRotation(currentRot);

      // Peg detection for needle deflection
      const currentPegCount = Math.floor(currentRot / sliceDeg);
      const pegsPassed = currentPegCount - lastPegCount;
      if (pegsPassed > 0) {
        lastPegCount = currentPegCount;
        needleVelRef.current = Math.min(22, 14 + (pegsPassed - 1) * 2);
        playTickSound();
      }

      // Spring physics: pull needle back to 0 with elastic damping
      const spring = -0.38;
      const damping = 0.74;
      needleVelRef.current = (needleVelRef.current + needleAngleRef.current * spring) * damping;
      needleAngleRef.current += needleVelRef.current;

      // Subtle flutter jitter during peak velocity
      const speed = totalDelta * (1 - ease) * 0.001;
      const displayNeedle = needleAngleRef.current + (speed > 1.2 ? (Math.random() - 0.5) * 3 : 0);
      setNeedleAngle(displayNeedle);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Spin complete
        rotationRef.current = endRot;
        setRotation(endRot);
        needleAngleRef.current = 0;
        needleVelRef.current = 0;
        setNeedleAngle(0);
        setIsSpinning(false);

        const chosen = destinations[chosenIndex];
        onSelect(chosen);

        try {
          confetti({
            particleCount: 95,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#059669', '#0284c7', '#d97706', '#e11d48', '#7c3aed', '#0d9488'],
          });
        } catch (err) {
          console.error(err);
        }
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  };

  const handleQuickPick = () => {
    if (isSpinning || total === 0) return;
    const randomIndex = Math.floor(Math.random() * total);
    onSelect(destinations[randomIndex]);
    try {
      confetti({ particleCount: 65, spread: 65, origin: { y: 0.6 } });
    } catch {}
  };

  return (
    <div className="relative w-full group select-none">
      {/* Ambient Neon Glow Backdrop */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/20 via-sky-500/15 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

      {/* Main Glassmorphism Console Card */}
      <div className="relative flex flex-col items-center justify-center p-5 sm:p-7 rounded-[2.25rem] bg-white/90 dark:bg-[#131924]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-emerald-950/5 transition-all">
        {/* Cockpit HUD Header */}
        <div className="w-full flex items-center justify-between gap-2 mb-4 pb-3.5 border-b border-slate-100 dark:border-slate-800/80">
          {/* Status Beacon Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isSpinning
                    ? 'animate-ping bg-amber-400'
                    : 'animate-ping bg-emerald-400'
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isSpinning ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
              />
            </span>
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
              {isSpinning ? 'স্পিন ঘুরছে...' : 'স্মার্ট ট্রাভেল হুইল'}
            </span>
          </div>

          {/* Quick HUD Controls: Mute toggle & Item counter */}
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
              {total} টি স্পট
            </span>
            <button
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'সাউন্ড চালু করুন (Unmute)' : 'সাউন্ড বন্ধ করুন (Mute)'}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              )}
            </button>
          </div>
        </div>

        {/* Title & Micro-Copy */}
        <div className="text-center mb-3">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            চাকা ঘুরিয়ে গন্তব্য আবিষ্কার
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            ভাগ্যের হাতে ছেড়ে দিন পরবর্তী রোমাঞ্চকর ভ্রমণ স্পট!
          </p>
        </div>

        {/* Wheel Stage with Mechanical Pointer */}
        <div className="relative w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] flex items-center justify-center my-2">
          {/* Mechanical Precision Ticker Needle */}
          <div
            className="absolute -top-4 z-30 flex flex-col items-center pointer-events-none drop-shadow-2xl"
            style={{
              transformOrigin: '50% 14px', // Pivot at center of rivet
              transform: `rotate(${needleAngle.toFixed(1)}deg)`,
              willChange: 'transform',
            }}
          >
            {/* Top Silver Suspension Pin */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 shadow-md border-2 border-white dark:border-slate-700 flex items-center justify-center relative">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 shadow-inner flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Aerodynamic Flapper Pointer Blade */}
            <div className="relative -mt-1 flex flex-col items-center">
              <div className="w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[28px] border-t-rose-600 dark:border-t-rose-500 drop-shadow-md" />
              <div className="absolute top-1.5 w-1 h-3.5 bg-white/60 rounded-full" />
            </div>
          </div>

          {/* Rotating Wheel Canvas */}
          <div
            className="w-full h-full rounded-full shadow-2xl transition-all"
            style={{
              transform: `rotate(${rotation}deg)`,
              willChange: 'transform',
            }}
          >
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              className="w-full h-full rounded-full"
            />
          </div>

          {/* Modern Tactical Center Hub ("SPIN / GO!") */}
          <button
            onClick={spinWheel}
            disabled={isSpinning || total === 0}
            className={`absolute z-20 w-19 h-19 sm:w-21 sm:h-21 rounded-full flex flex-col items-center justify-center font-black shadow-2xl transition-all duration-300 border-4 border-white dark:border-slate-800 ring-4 ring-emerald-500/25 select-none cursor-pointer ${
              isSpinning
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 scale-95 cursor-wait'
                : 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 text-white hover:scale-105 active:scale-95 shadow-emerald-700/40 hover:ring-emerald-500/50'
            }`}
            title="চাকা ঘোরান"
          >
            {isSpinning ? (
              <RefreshCw className="w-6 h-6 animate-spin text-white" />
            ) : (
              <>
                <Compass className="w-4 h-4 text-emerald-200 animate-spin-slow mb-0.5" />
                <span className="text-base sm:text-lg font-black tracking-wider leading-none drop-shadow">
                  GO!
                </span>
                <span className="text-[9px] uppercase tracking-wider text-emerald-100 font-bold mt-0.5">
                  SPIN
                </span>
              </>
            )}
          </button>
        </div>

        {/* Action Controls Strip */}
        <div className="mt-5 w-full flex items-center gap-2.5">
          {/* Main Spin CTA Button */}
          <button
            onClick={spinWheel}
            disabled={isSpinning || total === 0}
            className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isSpinning ? 'চাকা ঘুরছে...' : 'চাকা ঘোরান (Spin)'}</span>
          </button>

          {/* Quick Random Pick Button */}
          <button
            onClick={handleQuickPick}
            disabled={isSpinning || total === 0}
            title="তাৎক্ষণিক র‍্যান্ডম গন্তব্য নির্বাচন করুন"
            className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-300 font-bold transition cursor-pointer border border-slate-200 dark:border-slate-700 shrink-0"
          >
            <Dices className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </button>
        </div>

        {/* Selected Spotlight Winner Boarding Pass */}
        {selectedDestination && !isSpinning && (
          <div className="mt-4 w-full p-3.5 rounded-2xl bg-white/95 dark:bg-[#161f2e]/95 border border-emerald-500/40 dark:border-emerald-500/30 shadow-xl shadow-emerald-950/10 backdrop-blur-md animate-fadeIn flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700 shadow-xs"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                    {selectedDestination.division}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {selectedDestination.distanceFromDhaka}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                  {selectedDestination.nameBn}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold truncate">
                  বাজেট: {selectedDestination.estimatedBudget.standard}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                const el =
                  document.getElementById('destination-detail-section') ||
                  document.querySelector('section.scroll-mt-24');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0 flex items-center gap-1 shadow-xs transition active:scale-95 cursor-pointer"
            >
              <span>গাইড</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
