import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, Sparkles } from 'lucide-react';
import { CONTACT_INFO, BRAND_NAME } from '../data/content.ts';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Transformation', href: '#transformation' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Somatics', href: '#somatic-pacer' },
    { label: 'Locations', href: '#locations' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E5DDD0]/80 py-2 sm:py-2.5 shadow-[0_4px_20px_rgba(24,24,22,0.05)]'
            : 'bg-[#FBF9F5]/80 backdrop-blur-sm border-b border-[#E5DDD0]/40 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Logo (Elegantly Sized, No Overlap) */}
          <a
            href="#"
            className="group flex items-center shrink-0 focus:outline-none"
            aria-label="Mind & Body Mastery Home"
          >
            <img
              src="/assets/logo_clean.png"
              alt="Mind & Body Mastery"
              className={`w-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
                scrolled
                  ? 'h-11 sm:h-12'
                  : 'h-13 sm:h-14 lg:h-15'
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/logo.png';
              }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[12px] xl:text-[13px] tracking-[0.14em] uppercase text-[#4A4A46] hover:text-[#181816] transition-colors font-medium whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Contact Quick Link */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group whitespace-nowrap"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#181816] hover:bg-[#EBE3D5]/50 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#181816]/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-md bg-[#FBF9F5] shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-out border-l border-[#E5DDD0] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-12">
            <div className="flex items-center justify-between pb-6 border-b border-[#E5DDD0]">
              <img
                src="/assets/logo_clean.png"
                alt="Mind & Body Mastery"
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/logo.png';
                }}
              />
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-2xl text-[#242422] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#C5A059]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E5DDD0] space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#181816] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] transition-colors cursor-pointer"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[12px] text-[#797972] space-y-1.5 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <a href={`mailto:${CONTACT_INFO.emails[0].address}`} className="hover:underline">
                  {CONTACT_INFO.emails[0].address}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>AT: {CONTACT_INFO.phones[1].display}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>US: {CONTACT_INFO.phones[0].display}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
