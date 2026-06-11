"use client";

import Nav from "@/ui/web/navbar/Nav";
import ServicesSection from "@/ui/web/services/ServicesSection";
import Footer from "@/ui/web/footer/Footer";

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main>
        <ServicesSection />
      </main>

      <Footer />
    </>
  );
}
