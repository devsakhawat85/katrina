import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Activity, ShieldCheck, HeartHandshake } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden">
      {/* Decorative background grid and watermark */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#C5A059]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <div className="w-8 h-[1px] bg-[#C5A059]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#797972] font-medium">
            Philosophy &amp; Methodology
          </span>
        </div>

        {/* Editorial Three-Sentence Power Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#181816] font-normal leading-[1.15] space-y-2">
              <span className="block text-[#181816]">Ancient wisdom.</span>
              <span className="block text-[#7B8E78] italic font-light">Modern nervous-system science.</span>
              <span className="block text-[#2A2A26]">One personalized path to a more resilient you.</span>
            </h2>

            <div className="mt-8 sm:mt-10 pt-8 border-t border-[#E2DBD0] grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-2 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  Somatic Balance
                </p>
                <p className="text-sm sm:text-base text-[#4A4A46] leading-relaxed">
                  We bridge time-tested pranayama and biomechanical asana with modern autonomic down-regulation.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Executive Resilience
                </p>
                <p className="text-sm sm:text-base text-[#4A4A46] leading-relaxed">
                  A high-caliber toolkit designed to safeguard mental clarity, stamina, and emotional steadiness under intense pressure.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Detailed Quote Presentation */}
          <div className="lg:col-span-5 bg-[#FBF9F5] p-8 sm:p-10 rounded-2xl border border-[#E2DBD0] shadow-sm relative">
            <div className="absolute top-6 right-6 text-4xl font-serif text-[#C5A059]/20 select-none">
              “
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#181816] italic leading-snug mb-6">
              “Katharina leverages her management expertise and stress-relief techniques, offering you a comprehensive toolkit that empowers you to harmonize your nervous system, enhance resilience, and successfully attain your objectives in both your professional and personal life.”
            </p>

            <div className="pt-6 border-t border-[#EBE3D5] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/katharina_authentic_opt.webp"
                  alt="Katharina Tschurtschenthaler"
                  className="w-12 h-12 rounded-full object-cover border border-[#C5A059]/40 shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-lg text-[#181816] font-medium leading-tight">
                    Katharina Tschurtschenthaler
                  </h4>
                  <p className="text-[11px] text-[#797972] tracking-[0.14em] uppercase font-light mt-0.5">
                    Founder • E-RYT 500 • MBA
                  </p>
                </div>
              </div>
              <img
                src="/assets/logo_transparent.png"
                alt="Brand seal"
                className="h-10 w-auto object-contain opacity-90 shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/logo.png';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
