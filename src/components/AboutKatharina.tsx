import React from 'react';
import { Award, GraduationCap, Sparkles, Building2, Heart, ArrowRight } from 'lucide-react';
import { CREDENTIALS, FOUNDER_NAME } from '../data/content.ts';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutKatharina: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Authentic Portrait Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative framing */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2DBD0] aspect-[3/4] bg-[#F5EFEB]">
                <img
                  src="/assets/katharina_authentic_opt.webp"
                  alt={`${FOUNDER_NAME} — Founder of Mind & Body Mastery and Yoga Villa Steyr`}
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/75 via-transparent to-transparent pointer-events-none" />

                {/* Name Overlay on Photo */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] block font-medium mb-1">
                    Founder &amp; Mentor
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                    {FOUNDER_NAME}
                  </h3>
                  <p className="text-xs text-white/80 font-light mt-0.5">
                    Master of International Business • E-RYT 500 • Advanced Reiki
                  </p>
                </div>
              </div>

              {/* Decorative Brand Emblem Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 sm:p-5 rounded-2xl bg-[#F5EFEB] border border-[#E2DBD0] shadow-xl flex items-center gap-3.5 max-w-xs">
                <img
                  src="/assets/logo_transparent.png"
                  alt="Mind & Body Mastery Seal"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/logo.png';
                  }}
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold block">
                    Accredited Lineage
                  </span>
                  <span className="text-xs text-[#181816] font-medium leading-tight block">
                    Yoga Alliance Certified &amp; Studio Founder
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Biography Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                Meet the Founder
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#181816] font-normal leading-tight mb-6">
              A Bridge Between Corporate Excellence &amp; Somatic Mastery.
            </h2>

            {/* Authentic Text Blocks from the Website */}
            <div className="space-y-4 text-base sm:text-lg text-[#4A4A46] font-normal leading-relaxed mb-8">
              <p>
                <strong className="text-[#181816] font-medium">{FOUNDER_NAME}</strong> is a highly accomplished professional in the field of business and marketing. With a <strong className="text-[#181816] font-medium">Master&apos;s Degree in International Business</strong> and over <strong className="text-[#181816] font-medium">20 years of experience</strong>, she has established herself as an expert in her field.
              </p>

              <p>
                However, Katharina&apos;s passion for well-being and stress management has driven her to venture deeply into the world of yoga. She has successfully established her own yoga business and obtained several certifications, including the prestigious <strong className="text-[#181816] font-medium">500h Yoga Alliance Certified Yoga Teacher Training</strong> and <strong className="text-[#181816] font-medium">Advanced Reiki Practitioner</strong> qualifications.
              </p>

              <p>
                As a certified yoga instructor and proud owner of a renowned yoga studio and school, Katharina now dedicates herself to promoting holistic health and well-being among students and business leaders alike.
              </p>
            </div>

            {/* Credential Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#E2DBD0] mb-8">
              {CREDENTIALS.map((cred) => (
                <div key={cred.label} className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0]/70">
                  <div className="font-serif text-2xl sm:text-3xl text-[#181816] font-medium leading-none mb-1">
                    {cred.value}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C5A059] leading-tight mb-1">
                    {cred.label}
                  </div>
                  <p className="text-[10px] text-[#797972] leading-tight font-light hidden sm:block">
                    {cred.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Book a Private Session with Katharina</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
