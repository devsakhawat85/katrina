import React, { useState, useEffect } from 'react';
import { MapPin, Globe, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { LOCATIONS_DATA, CONTACT_INFO } from '../data/content.ts';

interface LocationsProps {
  onOpenBooking: (serviceId?: string, location?: string) => void;
}

export const LocationsSection: React.FC<LocationsProps> = ({ onOpenBooking }) => {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const updated: { [key: string]: string } = {};

      LOCATIONS_DATA.forEach((loc) => {
        try {
          if (loc.timezone === 'UTC') {
            updated[loc.city] = '24/7 Global Access';
          } else {
            const timeStr = now.toLocaleTimeString('en-US', {
              timeZone: loc.timezone,
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            });
            updated[loc.city] = timeStr;
          }
        } catch {
          updated[loc.city] = 'Active';
        }
      });

      setTimes(updated);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="locations" className="py-24 sm:py-32 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Global Presence &amp; Studios
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#181816] font-normal leading-tight mb-4">
            Practice Across Continents.
          </h2>

          <p className="text-sm sm:text-base text-[#565652] leading-relaxed">
            From our dedicated Austrian studio and school in historic Steyr to executive sessions in Bavaria and the American Southeast, Mind &amp; Body Mastery connects personal seekers and leaders everywhere.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.city}
              className="group p-8 rounded-3xl bg-[#F5EFEB] border border-[#E2DBD0] hover:border-[#C5A059]/60 transition-all duration-500 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-full bg-[#FBF9F5] border border-[#E2DBD0] group-hover:scale-110 transition-transform">
                    {loc.city === 'Worldwide' ? (
                      <Globe className="w-5 h-5 text-[#7B8E78]" />
                    ) : (
                      <MapPin className="w-5 h-5 text-[#C5A059]" />
                    )}
                  </div>
                  <span className="text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full bg-[#E8E1D7] text-[#4A4A46] font-medium">
                    {loc.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#181816] mb-1 font-normal">
                  {loc.city}
                </h3>
                <p className="text-xs uppercase tracking-[0.14em] text-[#C5A059] font-medium mb-4">
                  {loc.country}
                </p>

                <p className="text-xs sm:text-sm text-[#4A4A46] leading-relaxed mb-6">
                  {loc.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E2DBD0] space-y-3">
                {/* Local time badge */}
                <div className="flex items-center justify-between text-xs text-[#797972]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    Local Time:
                  </span>
                  <span className="font-medium text-[#181816]">
                    {times[loc.city] || 'Active'}
                  </span>
                </div>

                {/* Direct Phone if present */}
                {loc.phone && (
                  <div className="flex items-center justify-between text-xs text-[#797972]">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#7B8E78]" />
                      Direct Line:
                    </span>
                    <a
                      href={`tel:${loc.phone}`}
                      className="font-medium text-[#181816] hover:text-[#C5A059] transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                )}

                <button
                  onClick={() => onOpenBooking(undefined, loc.city)}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] text-[11px] uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer"
                >
                  <span>Select Hub</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
