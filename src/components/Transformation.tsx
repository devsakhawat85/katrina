import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Shield, Wind, RefreshCw } from 'lucide-react';
import { TRANSFORMATION_PILLARS } from '../data/content.ts';

interface TransformationProps {
  onOpenBooking: () => void;
}

export const Transformation: React.FC<TransformationProps> = ({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const icons = [
    <Shield className="w-5 h-5 text-[#C5A059]" key="shield" />,
    <Compass className="w-5 h-5 text-[#7B8E78]" key="compass" />,
    <Wind className="w-5 h-5 text-[#C5A059]" key="wind" />,
    <RefreshCw className="w-5 h-5 text-[#7B8E78]" key="refresh" />,
  ];

  return (
    <section id="transformation" className="py-24 sm:py-32 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              The Metamorphosis
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#181816] font-normal leading-tight mb-6">
            Experience a holistic transformation that transcends traditional yoga and fitness boundaries.
          </h2>

          <p className="text-base sm:text-lg text-[#4A4A46] font-normal leading-relaxed">
            The yoga and coaching sessions at <strong className="text-[#181816]">Mind and Body Mastery</strong> are meticulously designed to cater to individual needs and goals, blending ancient wisdom with modern nervous-system techniques. Embrace a new way of life that promises serenity and strength, clarity and resilience, fluidity and focus.
          </p>
        </div>

        {/* 4 Interactive Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRANSFORMATION_PILLARS.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <div
                key={pillar.title}
                onMouseEnter={() => setActivePillar(idx)}
                onClick={() => setActivePillar(idx)}
                className={`group cursor-pointer relative p-8 sm:p-9 rounded-2xl border transition-all duration-500 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F5EFEB] border-[#C5A059]/60 shadow-[0_12px_32px_rgba(24,24,22,0.06)] -translate-y-1'
                    : 'bg-white/70 hover:bg-[#F5EFEB]/50 border-[#E2DBD0] hover:border-[#C5A059]/30'
                }`}
              >
                {/* Top Row: Roman Numeral & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-serif tracking-[0.2em] text-[#797972]">
                      PILLAR {pillar.symbol}
                    </span>
                    <div className="p-2.5 rounded-full bg-[#FBF9F5] border border-[#E2DBD0] group-hover:scale-110 transition-transform duration-300">
                      {icons[idx]}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#181816] mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C5A059] mb-4">
                    {pillar.tagline}
                  </p>

                  <p className="text-sm text-[#4A4A46] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom interactive link */}
                <div className="mt-8 pt-6 border-t border-[#E2DBD0]/60 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-[#181816] group-hover:text-[#C5A059] transition-colors">
                  <span>Explore Path</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Holistic Quote Callout Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#181816] text-[#FBF9F5] relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/brand_graphic_2.png"
              alt=""
              className="w-full h-full object-cover filter invert"
            />
          </div>

          <div className="max-w-2xl relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
              The Evolution Promise
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-relaxed">
              “Unwind and recharge, tune into your own rhythm, and watch yourself evolve. At Mind and Body Mastery, we believe in nurturing your full potential — in yoga and beyond.”
            </h3>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C5A059] text-[#181816] hover:bg-white transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold cursor-pointer shadow-lg"
            >
              <span>Begin Your Practice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
