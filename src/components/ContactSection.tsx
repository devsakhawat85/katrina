import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, LEGAL_NAME, SERVICES_DATA } from '../data/content.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'private-training',
    location: 'Steyr, AT',
    message: '',
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    setErrorMsg('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Entity Information */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                Get In Touch
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#181816] font-normal leading-tight mb-6">
              Begin Your Journey to Mastery.
            </h2>

            <p className="text-base text-[#4A4A46] font-normal leading-relaxed mb-8">
              Whether you are ready to book a private session, schedule an executive team workshop, or explore yoga teacher mentoring, Katharina is here to guide your path.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-10">
              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E2DBD0] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F5EFEB] text-[#C5A059] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#797972] block font-medium">
                    Direct Email
                  </span>
                  <a
                    href="mailto:katharina@mindandbodymastery.at"
                    className="font-medium text-[#181816] hover:text-[#C5A059] transition-colors block text-sm sm:text-base mt-0.5"
                  >
                    katharina@mindandbodymastery.at
                  </a>
                  <a
                    href="mailto:katharina@yogavillasteyr.at"
                    className="text-xs text-[#797972] hover:text-[#181816] transition-colors block mt-0.5"
                  >
                    Studio: katharina@yogavillasteyr.at
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E2DBD0] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F5EFEB] text-[#7B8E78] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#797972] block font-medium">
                    Phone Numbers
                  </span>
                  <div className="space-y-1 mt-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#797972]">US:</span>
                      <a
                        href="tel:+18643657606"
                        className="font-medium text-[#181816] hover:text-[#C5A059] transition-colors text-sm"
                      >
                        +1 864 365 7606
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#797972]">Europe:</span>
                      <a
                        href="tel:+43725224701"
                        className="font-medium text-[#181816] hover:text-[#C5A059] transition-colors text-sm"
                      >
                        +43 7252 24701
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E2DBD0] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F5EFEB] text-[#C5A059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#797972] block font-medium">
                    Registered Entity &amp; Locations
                  </span>
                  <p className="font-medium text-[#181816] text-sm mt-0.5">
                    {LEGAL_NAME}
                  </p>
                  <p className="text-xs text-[#797972] mt-0.5">
                    Steyr, Austria • Landshut, Germany • Greenville, SC, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Box (Preserving original Wix site feature) */}
            <div className="p-6 rounded-2xl bg-[#181816] text-[#FBF9F5]">
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C5A059] font-semibold block mb-1">
                Stay Connected
              </span>
              <h4 className="font-serif text-lg text-white mb-2 font-normal">
                Subscribe to Get My Newsletter
              </h4>
              <p className="text-xs text-white/70 mb-4 leading-relaxed">
                Receive mindful musings, nervous-system tools, and upcoming retreat announcements directly from Katharina.
              </p>

              {newsletterSubmitted ? (
                <div className="p-3 rounded-xl bg-[#2A2A26] border border-[#C5A059]/40 flex items-center gap-2 text-xs text-[#C5A059]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thanks for submitting! Welcome to our community.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-full bg-[#2A2A26] border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#C5A059] text-[#181816] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Beautiful Contact Form */}
          <div className="lg:col-span-7 bg-[#FBF9F5] p-8 sm:p-12 rounded-3xl border border-[#E2DBD0] shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#7B8E78]/15 text-[#7B8E78] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#181816]">
                  Message Received.
                </h3>
                <p className="text-[#565652] max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Thank you for taking this step. Katharina will personally review your inquiry and reach out within 24 to 48 hours to coordinate your session.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'private-training',
                        location: 'Steyr, AT',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full border border-[#181816] text-[#181816] hover:bg-[#181816] hover:text-white text-xs uppercase tracking-[0.16em] transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#181816] mb-1 font-normal">
                    Start the Conversation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#797972]">
                    Please share your goals and preferred format below.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (864) ... or +43 ..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                      What are you looking for? *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.price})
                        </option>
                      ))}
                      <option value="general">General Inquiry / Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                    Preferred Location / Format
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                  >
                    <option value="Steyr, AT">Steyr, Austria (Yoga Villa Steyr Studio)</option>
                    <option value="Landshut, DE">Landshut, Germany (Bavaria Hub)</option>
                    <option value="Greenville, SC">Greenville, SC, USA</option>
                    <option value="Online">Worldwide Virtual (High-Definition Video)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] font-medium text-[#4A4A46] mb-2">
                    Your Message / Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Katharina about your current goals, physical practice, stress points, or what you wish to cultivate..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2DBD0] text-sm text-[#181816] focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#797972]">
                    <ShieldCheck className="w-4 h-4 text-[#7B8E78]" />
                    <span>Your privacy is strictly honored.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitting ? 'Submitting...' : 'Start the Conversation'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
