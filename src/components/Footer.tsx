import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { BRAND_NAME, FOUNDER_NAME, LEGAL_NAME, CONTACT_INFO } from '../data/content.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181816] text-[#FBF9F5] pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img
                src="/assets/logo_clean.png"
                alt="Mind & Body Mastery Logo"
                className="h-16 sm:h-18 w-auto object-contain filter brightness-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/logo.png';
                }}
              />
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-light">
              Fusing ancient yoga wisdom with modern nervous-system management tools to deliver personalized sessions that enhance mind-body synergy and build unshakeable resilience.
            </p>

            <p className="text-xs text-white/40">
              {LEGAL_NAME}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-[0.14em] text-white/70">
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-white transition-colors">
                  Transformation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Katharina
                </a>
              </li>
              <li>
                <a href="#somatic-pacer" className="hover:text-white transition-colors">
                  Rhythm Pacer
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Hubs */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-5">
              Locations
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div>
                <strong className="text-white font-medium block">Steyr, Austria</strong>
                <span className="text-white/50">Studio &amp; School (Yoga Villa Steyr)</span>
              </div>
              <div>
                <strong className="text-white font-medium block">Landshut, Germany</strong>
                <span className="text-white/50">Bavaria Practice &amp; Corporate Immersions</span>
              </div>
              <div>
                <strong className="text-white font-medium block">Greenville, SC, USA</strong>
                <span className="text-white/50">Katharina Tschurtschenthaler LLC</span>
              </div>
              <div>
                <strong className="text-white font-medium block">Worldwide Virtual</strong>
                <span className="text-white/50">Private Online Somatic Sessions</span>
              </div>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-5">
              Inquiries
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <a
                  href={`mailto:${CONTACT_INFO.emails[0].address}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.emails[0].address}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <a
                  href={`mailto:${CONTACT_INFO.emails[1].address}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.emails[1].address}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <a href={`tel:${CONTACT_INFO.phones[1].number}`} className="hover:text-white transition-colors">
                  Europe: {CONTACT_INFO.phones[1].display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <a href={`tel:${CONTACT_INFO.phones[0].number}`} className="hover:text-white transition-colors">
                  USA: {CONTACT_INFO.phones[0].display}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved. Steyr • Landshut • Greenville.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/60 hover:text-[#C5A059] transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
