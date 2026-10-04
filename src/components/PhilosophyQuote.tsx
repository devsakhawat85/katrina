import React from 'react';

export const PhilosophyQuote: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#F5EFEB] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      {/* Subtle background circular glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C5A059]/6 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Subtle Brand Logo Watermark */}
        <div className="h-14 w-auto mx-auto mb-8 opacity-45 flex items-center justify-center">
          <img
            src="/assets/logo_transparent.png"
            alt="Mind & Body Mastery Seal"
            className="h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/logo.png';
            }}
          />
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-6">
          The Guiding Vision
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#181816] font-normal leading-[1.25] tracking-tight mb-8">
          “Inspiring individuals to achieve optimal physical, mental, and emotional well-being.”
        </h2>

        <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-8" />

        <p className="font-serif text-lg sm:text-xl text-[#565652] italic font-light max-w-2xl mx-auto leading-relaxed">
          Embrace a new way of life that promises serenity and strength, clarity and resilience, fluidity and focus. Tune into your rhythm, and watch yourself evolve.
        </p>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[#797972] block mt-6 font-medium">
          — Mind &amp; Body Mastery
        </span>
      </div>
    </section>
  );
};
