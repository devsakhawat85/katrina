import React, { useState } from 'react';
import { ArrowRight, Clock, DollarSign, CheckCircle2, Sparkles, ChevronRight, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/content.ts';
import { ServiceItem } from '../types/index.ts';

interface ServicesProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectServiceModal?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking, onSelectServiceModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                Offerings &amp; Sessions
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#181816] font-normal leading-tight">
              Personalized Sessions Tailored to Your Evolution.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#565652] leading-relaxed">
            Every session blends ancient lineage wisdom with contemporary stress-management science. Available in-person at our studios in Steyr, Landshut, Greenville, or globally online.
          </p>
        </div>

        {/* Editorial Service Grid - 2x2 asymmetric luxury layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#F5EFEB] rounded-3xl overflow-hidden border border-[#E2DBD0] hover:border-[#C5A059]/50 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Frame with Zoom */}
              <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-[#E6DFD5]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/70 via-[#181816]/20 to-transparent" />

                {/* Duration & Price Badge */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181816]/75 backdrop-blur-md text-white text-xs font-medium tracking-wide">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{service.duration}</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] block font-medium">
                      {service.priceNote}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl text-white font-normal">
                      {service.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenDetail(service)}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#181816] transition-all backdrop-blur-md cursor-pointer"
                    aria-label={`View full details for ${service.name}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#181816] font-normal mb-3 group-hover:text-[#C5A059] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4A4A46] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#565652]">
                        <CheckCircle2 className="w-4 h-4 text-[#7B8E78] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-6 border-t border-[#E2DBD0] flex items-center justify-between gap-4">
                  <button
                    onClick={() => handleOpenDetail(service)}
                    className="text-xs uppercase tracking-[0.18em] font-semibold text-[#565652] hover:text-[#181816] transition-colors cursor-pointer"
                  >
                    Service Info
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium shadow-sm hover:shadow-md cursor-pointer group/btn"
                  >
                    <span>Book Session</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate / Bespoke Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-2xl bg-[#F5EFEB] border border-[#E2DBD0]">
          <h4 className="font-serif text-xl text-[#181816] mb-2 font-normal">
            Looking for Custom Executive Retainers or Team Immersions?
          </h4>
          <p className="text-xs sm:text-sm text-[#797972] mb-5 leading-relaxed">
            Katharina creates bespoke corporate retreats and ongoing leadership wellness retainers for executive boards across Europe and the US.
          </p>
          <button
            onClick={() => onOpenBooking('business-workshop')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#181816] hover:text-[#C5A059] transition-colors cursor-pointer border-b border-[#181816] hover:border-[#C5A059] pb-0.5"
          >
            <span>Request Executive Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-[#181816]/50 backdrop-blur-sm"
            onClick={handleCloseDetail}
          />
          <div className="relative bg-[#FBF9F5] max-w-2xl w-full rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#E2DBD0] max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-6 border-b border-[#E2DBD0] mb-6">
              <div>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C5A059] font-medium block">
                  {selectedService.priceNote} • {selectedService.duration}
                </span>
                <h3 className="font-serif text-3xl text-[#181816] mt-1 font-normal">
                  {selectedService.name}
                </h3>
              </div>
              <button
                onClick={handleCloseDetail}
                className="p-2 rounded-full hover:bg-[#EBE3D5] text-[#181816] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-[#4A4A46] text-sm sm:text-base leading-relaxed">
              <p>{selectedService.fullDesc}</p>

              <div className="bg-[#F5EFEB] p-5 rounded-2xl border border-[#E2DBD0]">
                <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#181816] mb-3">
                  What is included in this session:
                </h4>
                <ul className="space-y-2">
                  {selectedService.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#565652]">
                      <CheckCircle2 className="w-4 h-4 text-[#7B8E78] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-2 border-[#C5A059] pl-4 italic text-xs sm:text-sm text-[#797972]">
                <strong>Ideal for:</strong> {selectedService.idealFor}
              </div>

              <div className="pt-6 border-t border-[#E2DBD0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#797972] block">Investment</span>
                  <span className="font-serif text-3xl text-[#181816] font-normal">
                    {selectedService.price}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const id = selectedService.id;
                      handleCloseDetail();
                      onOpenBooking(id);
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium shadow-md cursor-pointer"
                  >
                    <span>Proceed to Book</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
