"use client";

import React, { useState } from "react";

import Nav from "@/ui/web/navbar/Nav";
import Hero from "@/ui/web/hero/HeroSection";
import Services from "@/ui/web/services/ServicesSection";
import Faq from "@/ui/web/faq/FAQSection";
import About from "@/ui/web/about/AboutSection";
import Contact from "@/ui/web/contact/ContactSection";
import Footer from "@/ui/web/footer/Footer";
import PromoBanner from "@/ui/web/PromoBanner";
import TestimonialsSection from "@/ui/web/TestimonialsSection";
import BookingModal from "@/ui/web/booking/BookingModal";

export default function UsersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      {/* Navbar */}
      <Nav onOpenBooking={openBooking} />

      <main className="scroll-smooth">
        {/* Hero */}
<section id="home" className="relative z-10">
  <Hero onOpenBooking={openBooking} />
</section>





<section id="services" className="relative z-0">
  <Services />
</section>

<TestimonialsSection  />



        <section id="faq">
          <Faq />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </main>

      {/* GLOBAL MODAL */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={closeBooking}
      />
    </>
  );
}
