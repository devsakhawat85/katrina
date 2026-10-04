/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BrandStatement } from './components/BrandStatement.tsx';
import { Transformation } from './components/Transformation.tsx';
import { SomaticPacer } from './components/SomaticPacer.tsx';
import { Services } from './components/Services.tsx';
import { Methodology } from './components/Methodology.tsx';
import { AboutKatharina } from './components/AboutKatharina.tsx';
import { PhilosophyQuote } from './components/PhilosophyQuote.tsx';
import { LocationsSection } from './components/LocationsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string, location?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedLocation(location);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleExploreTransformation = () => {
    const el = document.getElementById('transformation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#181816] selection:bg-[#C5A059]/20 selection:text-[#181816]">
      {/* Premium Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Flow */}
      <main>
        {/* Full-screen Editorial Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreTransformation={handleExploreTransformation}
        />

        {/* Brand Statement / Power Typography */}
        <BrandStatement />

        {/* Transformation Pillars */}
        <Transformation onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Somatic Nervous System Regulation Pacer */}
        <SomaticPacer />

        {/* Authentic Services & Offerings */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Holistic Methodology Storytelling */}
        <Methodology />

        {/* About Founder Katharina Tschurtschenthaler */}
        <AboutKatharina onOpenBooking={() => handleOpenBooking()} />

        {/* Meditative Philosophy Quote */}
        <PhilosophyQuote />

        {/* Physical Locations: Steyr, Landshut, Greenville */}
        <LocationsSection onOpenBooking={handleOpenBooking} />

        {/* Contact Form & Newsletter */}
        <ContactSection />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Interactive Reservation / Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
        initialLocation={selectedLocation}
      />
    </div>
  );
}
