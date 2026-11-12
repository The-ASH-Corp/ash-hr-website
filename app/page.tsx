"use client";

import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AccreditationSection from "./components/AccreditationSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import HowWeTeachSection from "./components/HowWeTeachSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";

export default function Home() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryModalOpen(true);
  const closeEnquiry = () => setIsEnquiryModalOpen(false);

  return (
    <div
      style={{ backgroundColor: "#fbf8ff", color: "#0f172a" }}
      className="min-h-screen flex flex-col overflow-x-clip bg-[#fbf8ff] text-[#0f172a] selection:bg-[#e0e7ff] selection:text-[#253b97]"
    >
      <Header onOpenEnquiry={openEnquiry} />

      <main className="flex-1">
        <HeroSection />
        <AccreditationSection onOpenEnquiry={openEnquiry} />
        <WhyChooseUsSection onOpenEnquiry={openEnquiry} />
        <HowWeTeachSection />
        <TestimonialsSection />
        <CtaBanner onOpenEnquiry={openEnquiry} />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiry}
      />
    </div>
  );
}
