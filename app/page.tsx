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
import WhyChooseUsSection from "@/ui/web/WhyChooseUs";
import BookingModal from "@/ui/web/free-quote/QuoteModal";


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








<WhyChooseUsSection  />
<PromoBanner onOpenBooking={openBooking} />
<TestimonialsSection  />



        <section id="faq">
          <Faq />
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
