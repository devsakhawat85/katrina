import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { SERVICES_DATA, LOCATIONS_DATA, CONTACT_INFO } from '../data/content.ts';
import { ServiceId } from '../types/index.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialLocation?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialLocation,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('private-training');
  const [location, setLocation] = useState<string>('Steyr, AT');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId as ServiceId);
    }
    if (initialLocation) {
      setLocation(initialLocation);
    }
  }, [initialServiceId, initialLocation]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    const title = `Mind & Body Mastery: ${currentService.name} with Katharina`;
    const description = `Consultation with Katharina Tschurtschenthaler.\nService: ${currentService.name}\nLocation/Format: ${location}\nNotes: ${notes}`;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mind and Body Mastery//Katharina Tschurtschenthaler//EN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'mind-body-mastery-session.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#181816]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-[#FBF9F5] w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#E2DBD0] my-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EBE3D5] text-[#181816] transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#7B8E78]/15 text-[#7B8E78] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
                Booking Request Submitted
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#181816] font-normal">
                We Await You, {name}.
              </h3>
            </div>

            <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#F5EFEB] border border-[#E2DBD0] text-left text-sm space-y-2">
              <p className="flex justify-between">
                <span className="text-[#797972]">Service:</span>
                <strong className="text-[#181816] font-medium">{currentService.name}</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#797972]">Investment:</span>
                <strong className="text-[#181816] font-medium">{currentService.price} ({currentService.duration})</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#797972]">Location / Format:</span>
                <strong className="text-[#181816] font-medium">{location}</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#797972]">Confirmation Email:</span>
                <strong className="text-[#181816] font-medium">{email}</strong>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#565652] max-w-md mx-auto leading-relaxed">
              Katharina will personally reach out to finalize your exact date and send session preparation materials. You can also reach her anytime at{' '}
              <a href="mailto:katharina@mindandbodymastery.at" className="underline font-medium text-[#181816]">
                katharina@mindandbodymastery.at
              </a>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#181816] text-[#FBF9F5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#C5A059] transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Save to Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#E2DBD0] text-xs uppercase tracking-[0.16em] text-[#181816] hover:bg-[#EBE3D5] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-semibold block mb-1">
                Mind &amp; Body Mastery Reservation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181816] font-normal">
                Reserve Your Session
              </h3>
              <p className="text-xs sm:text-sm text-[#797972] mt-1">
                Personalized sessions with Katharina Tschurtschenthaler.
              </p>
            </div>

            {/* Service Chooser */}
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                Select Your Service *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES_DATA.map((service) => (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedServiceId === service.id
                        ? 'bg-[#F5EFEB] border-[#C5A059] shadow-sm'
                        : 'bg-white border-[#E2DBD0] hover:bg-[#F5EFEB]/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-serif text-sm font-medium text-[#181816]">
                        {service.name}
                      </span>
                      <span className="text-xs font-semibold text-[#C5A059]">
                        {service.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#797972] block">
                      {service.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location / Format and Timing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                  Format / Location *
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] cursor-pointer"
                >
                  <option value="Steyr, AT">Steyr, Austria (Studio Yoga Villa Steyr)</option>
                  <option value="Landshut, DE">Landshut, Germany (Bavaria)</option>
                  <option value="Greenville, SC">Greenville, SC, USA</option>
                  <option value="Online">Worldwide Virtual (Online 1-on-1)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                  Preferred Time of Day
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] cursor-pointer"
                >
                  <option value="Morning">Morning (08:00 - 12:00)</option>
                  <option value="Afternoon">Afternoon (12:00 - 17:00)</option>
                  <option value="Evening">Evening (17:00 - 20:00)</option>
                  <option value="Flexible">Flexible / Discuss via Email</option>
                </select>
              </div>
            </div>

            {/* Name, Email, Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 864 ... or +43 7252 ..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                Notes / Special Focus
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any injury, specific stress alleviation goal, or executive requirement..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-[#797972]">
                <ShieldCheck className="w-4 h-4 text-[#7B8E78]" />
                <span>Zero obligations. Confidential inquiry.</span>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md cursor-pointer"
              >
                <span>Confirm Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
