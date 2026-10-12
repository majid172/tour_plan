'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Destination } from './data';
import confetti from 'canvas-confetti';
import { Sparkles, Compass, RefreshCw, Trophy, Flame } from 'lucide-react';

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const total = destinations.length;
  const sliceAngle = (2 * Math.PI) / (total || 1);

  // Fresh, friendly Airbnb/Nomad color palette
  const sliceColors = [
    '#059669', // Emerald
    '#0284c7', // Sky Blue
    '#d97706', // Amber
    '#e11d48', // Rose
    '#7c3aed', // Purple
    '#0d9488', // Teal
    '#ea580c', // Orange
    '#4f46e5', // Indigo
    '#16a34a', // Green
    '#0891b2', // Cyan
    '#db2777', // Pink
    '#ca8a04', // Yellow Gold
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || total === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 14;

    ctx.clearRect(0, 0, width, height);

    // Draw slices
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

      // Slice typography
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px system-ui, -apple-system, sans-serif';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 3;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;

      const label = destinations[i].nameBn || destinations[i].name;
      const displayLabel = label.length > 14 ? label.slice(0, 13) + '…' : label;
      ctx.fillText(displayLabel, radius - 20, 5);

      // Outer jewel dot
      ctx.beginPath();
      ctx.arc(radius - 8, 0, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.restore();
    }

    // Outer ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 6;
    ctx.stroke();

    // Center circular badge
    ctx.beginPath();
    ctx.arc(centerX, centerY, 38, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 3;
    ctx.stroke();
  }, [destinations, total, sliceAngle]);

  const spinWheel = () => {
    if (isSpinning || total === 0) return;

    setIsSpinning(true);

    const randomIndex = Math.floor(Math.random() * total);
    const sliceDeg = 360 / total;
    const targetSliceCenterDeg = randomIndex * sliceDeg + sliceDeg / 2;

    const extraSpins = 360 * (5 + Math.floor(Math.random() * 3));
    const targetOffset = 270 - targetSliceCenterDeg;
    const currentBase = Math.floor(rotation / 360) * 360;
    const newRotation = currentBase + extraSpins + (targetOffset >= 0 ? targetOffset : 360 + targetOffset);

    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const chosen = destinations[randomIndex];
      onSelect(chosen);

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#059669', '#0284c7', '#d97706', '#e11d48'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 4000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 light-panel rounded-3xl transition-all">
      {/* Header Badge */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>ইন্টারেক্টিভ ডেস্টিনেশন হুইল</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
          চাকা ঘুরিয়ে গন্তব্য খুঁজুন!
        </h3>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          কোথায় ঘুরতে যাবেন বুঝতে পারছেন না? চাকা ঘুরিয়ে তাৎক্ষণিক ভ্রমণ স্পট পেয়ে যান!
        </p>
      </div>

      {/* Wheel Stage */}
      <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center my-2">
        {/* Needle Pointer */}
        <div className="absolute -top-3 z-30 flex flex-col items-center drop-shadow-md">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow border-2 border-white">
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-emerald-600 -mt-1.5" />
        </div>

        {/* Rotating Wheel Canvas */}
        <div
          className="w-full h-full rounded-full transition-transform ease-[cubic-bezier(0.15,0.9,0.2,1.0)] shadow-lg"
          style={{
            transform: `rotate(${rotation}deg)`,
            transitionDuration: isSpinning ? '4000ms' : '0ms',
          }}
        >
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="w-full h-full rounded-full"
          />
        </div>

        {/* Center Spin Hub Button */}
        <button
          onClick={spinWheel}
          disabled={isSpinning || total === 0}
          className={`absolute z-20 w-18 h-18 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center font-bold shadow-xl transition-all duration-300 border-4 border-slate-100 select-none cursor-pointer ${isSpinning
              ? 'bg-slate-200 text-slate-500 scale-95 cursor-wait'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-105 active:scale-95 shadow-emerald-600/30'
            }`}
          title="চাকা ঘোরান"
        >
          {isSpinning ? (
            <RefreshCw className="w-5 h-5 animate-spin text-emerald-700" />
          ) : (
            <>
              <Compass className="w-4 h-4 text-emerald-200 mb-0.5" />
              <span className="leading-tight text-xs font-bold tracking-wide">ঘোরান</span>
              <span className="text-[9px] uppercase tracking-wider text-emerald-100 font-medium">SPIN</span>
            </>
          )}
        </button>
      </div>

      {/* Main Action Button */}
      <div className="mt-6 w-full max-w-xs">
        <button
          onClick={spinWheel}
          disabled={isSpinning || total === 0}
          className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isSpinning ? 'চাকা ঘুরছে... অপেক্ষা করুন' : 'চাকা ঘোরান (Spin Wheel)'}</span>
        </button>
      </div>

      {/* Selected Result Box */}
      {selectedDestination && !isSpinning && (
        <div className="mt-4 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-slate-700 shadow-sm animate-fadeIn">
          <Trophy className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            নির্বাচিত স্থান:{' '}
            <strong className="text-emerald-800 font-bold">
              {selectedDestination.nameBn} ({selectedDestination.name})
            </strong>
          </span>
        </div>
      )}
    </div>
  );
};
