"use client";

import { useState } from "react";

import Nav from "@/ui/web/navbar/Nav";
import AboutSection from "@/ui/web/about/AboutSection";
import LocationSection from "@/ui/web/location/LocationSection";
import Footer from "@/ui/web/footer/Footer";
import BookingModal from "@/ui/web/free-quote/QuoteModal";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <>
      <Nav />

      <main>
        <AboutSection />

        {/* FIXED: now passing required prop */}
        <LocationSection onOpenBooking={openBooking} />
      </main>

      <Footer />

      {/* MODAL LIVES HERE */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
      />
    </>
  );
}
