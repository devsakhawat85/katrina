import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTransformation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTransformation }) => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16">
      {/* Background Photography with subtle luxury scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/yoga_pose_1_opt.webp"
          alt="Mind and Body Mastery — Authentic Yoga and Somatic Practice"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03] scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Editorial gradient overlays for readability and luxury warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5]/92 via-[#FBF9F5]/75 to-[#FBF9F5]/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-transparent to-[#FBF9F5]/50" />
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-60" />
      </div>

      {/* Decorative Brand Graphic element subtle watermark */}
      <div className="absolute right-4 bottom-12 w-64 md:w-96 lg:w-[480px] opacity-15 pointer-events-none select-none z-0 hidden md:block">
        <img
          src="/assets/brand_graphic_1_opt.webp"
          alt=""
          className="w-full h-auto object-contain filter invert mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-8 max-w-3xl">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal tracking-[-0.015em] text-[#181816] leading-[1.05] mb-6 sm:mb-8"
            >
              Unleash Your <br />
              <span className="italic font-light text-[#2A2A26] relative inline-block">
                Full Potential.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#C5A059]/40 fill-none stroke-current"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                >
                  <path d="M2,9 C80,3 220,11 298,4" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Copy from the authentic website */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-[#4A4A46] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 font-sans"
            >
              At <strong className="text-[#181816] font-medium">Mind and Body Mastery</strong>, we fuse ancient yoga wisdom with modern nervous-system management tools to deliver personalized sessions that enhance mind-body synergy and build enduring resilience.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <button
                onClick={onExploreTransformation}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium shadow-md hover:shadow-lg group cursor-pointer"
              >
                <span>Explore Your Transformation</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/80 hover:bg-white text-[#181816] border border-[#E5DDD0] transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium backdrop-blur-sm shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Work With Katharina</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

            {/* Quick Credential Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 sm:mt-16 pt-8 border-t border-[#181816]/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
            >
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#181816] font-normal">20+</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#797972] mt-0.5 font-medium">
                  Years Business Exp.
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#181816] font-normal">500h</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#797972] mt-0.5 font-medium">
                  Yoga Alliance E-RYT
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#181816] font-normal">Advanced</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#797972] mt-0.5 font-medium">
                  Reiki Practitioner
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#181816] font-normal">3 Hubs</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#797972] mt-0.5 font-medium">
                  Steyr • Landshut • US
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Editorial Founder Portrait Card featuring requested image */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[300px] rounded-3xl p-3 bg-white/75 backdrop-blur-md border border-[#E5DDD0]/80 shadow-[0_20px_50px_rgba(24,24,22,0.08)] group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5EFEB]">
                <img
                  src="/assets/katharina_authentic_opt.webp"
                  alt="Katharina Tschurtschenthaler"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] block font-semibold mb-0.5">
                    Katharina Tschurtschenthaler
                  </span>
                  <span className="text-xs text-white/90 font-light block">
                    Founder • E-RYT 500 • MBA
                  </span>
                </div>
              </div>
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-[#797972]">
                <span className="text-[10px] tracking-[0.18em] uppercase font-medium">
                  Founder &amp; Lead Mentor
                </span>
                <span className="text-xs text-[#C5A059] font-serif italic">
                  Mind &amp; Body
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none select-none">
        <span className="text-[10px] tracking-[0.25em] text-[#797972] uppercase font-light">
          Scroll to Discover
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C5A059] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
