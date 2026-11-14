"use client";

import { useState } from "react";
import Header from "../components/Header";
import CourseHeroSection from "../components/course/CourseHeroSection";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

export default function CoursePage() {
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
        <CourseHeroSection onOpenEnquiry={openEnquiry} />
      </main>

      <Footer />

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiry} />
    </div>
  );
}

