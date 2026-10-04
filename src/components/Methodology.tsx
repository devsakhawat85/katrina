import React from 'react';
import { Sparkles, Layers, Activity, Brain, ShieldCheck } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2DBD0] aspect-[4/5] max-w-lg mx-auto lg:max-w-none">
              <img
                src="/assets/feature_photo_opt.webp"
                alt="Mind and Body Mastery — Yoga and Nervous System Integration"
                className="w-full h-full object-cover object-center filter brightness-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/75 via-transparent to-transparent" />

              {/* Inset Credential Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#FBF9F5]/90 backdrop-blur-md border border-white/60 shadow-lg">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-semibold mb-1">
                  The Synergistic Framework
                </p>
                <p className="font-serif text-lg text-[#181816] italic">
                  “Blending ancient wisdom with modern techniques to unlock physical, mental, and emotional well-being.”
                </p>
              </div>
            </div>

            {/* Subtle floating accent badge */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 p-4 sm:p-5 rounded-2xl bg-[#181816] text-[#FBF9F5] shadow-xl border border-white/10 hidden sm:flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
              <div className="text-left">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] block">Integration</span>
                <span className="font-serif text-sm font-light">Mind • Body • Nervous System</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Depth */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                The Holistic Edge
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#181816] font-normal leading-tight mb-6">
              Transcend the Traditional Boundaries of Yoga and Fitness.
            </h2>

            <p className="text-base sm:text-lg text-[#4A4A46] font-normal leading-relaxed mb-8">
              At <strong className="text-[#181816]">Mind and Body Mastery</strong>, yoga is not treated as a disconnected workout. It is an intelligent somatic technology designed to harmonize the autonomic nervous system, rewire stress patterns, and cultivate calm executive power.
            </p>

            {/* Three Pillars of the Methodology */}
            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-[#FBF9F5] border border-[#E2DBD0] hover:border-[#C5A059]/40 transition-colors">
                <div className="p-3 rounded-xl bg-[#F5EFEB] text-[#C5A059] shrink-0 self-start">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#181816] mb-1 font-medium">
                    1. Ancient Yogic Lineages &amp; Asana
                  </h3>
                  <p className="text-xs sm:text-sm text-[#565652] leading-relaxed">
                    Rooted in 500-hour accredited Yoga Alliance traditions, pranayama, and subtle body alignment that honors physical anatomy and internal energetic channels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[#FBF9F5] border border-[#E2DBD0] hover:border-[#C5A059]/40 transition-colors">
                <div className="p-3 rounded-xl bg-[#F5EFEB] text-[#7B8E78] shrink-0 self-start">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#181816] mb-1 font-medium">
                    2. Modern Nervous-System Management
                  </h3>
                  <p className="text-xs sm:text-sm text-[#565652] leading-relaxed">
                    Practical somatic tools and vagal down-regulation techniques that reduce cortisol, elevate heart-rate variability, and bring your biology into effortless equilibrium.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[#FBF9F5] border border-[#E2DBD0] hover:border-[#C5A059]/40 transition-colors">
                <div className="p-3 rounded-xl bg-[#F5EFEB] text-[#C5A059] shrink-0 self-start">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#181816] mb-1 font-medium">
                    3. Executive Business Acumen
                  </h3>
                  <p className="text-xs sm:text-sm text-[#565652] leading-relaxed">
                    Backed by an International Business Master’s Degree and 20+ years of high-level management, ensuring all methods translate directly to modern performance and life goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
