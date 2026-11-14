"use client";

import { useState } from "react";
import Header from "../components/Header";
import BlogsHeroSection from "../components/blogs/BlogsHeroSection";
import BlogsFeaturedSection from "../components/blogs/BlogsFeaturedSection";
import BlogsGridSection from "../components/blogs/BlogsGridSection";
import BlogsBottomBanner from "../components/blogs/BlogsBottomBanner";
import { BlogPostItem } from "../components/blogs/blogsData";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

export default function BlogsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPostItem | null>(
    null,
  );

  const openEnquiry = () => setIsEnquiryModalOpen(true);
  const closeEnquiry = () => setIsEnquiryModalOpen(false);

  return (
    <div
      style={{ backgroundColor: "#fbf8ff", color: "#0f172a" }}
      className="min-h-screen flex flex-col overflow-x-clip bg-[#fbf8ff] text-[#0f172a] selection:bg-[#e0e7ff] selection:text-[#253b97]"
    >
      <Header onOpenEnquiry={openEnquiry} />

      <main className="flex-1">
        <BlogsHeroSection />
        <BlogsFeaturedSection onSelectArticle={setSelectedArticle} />
        <BlogsGridSection
          selectedArticle={selectedArticle}
          onSelectArticle={setSelectedArticle}
          onOpenEnquiry={openEnquiry}
        />
        <BlogsBottomBanner onOpenEnquiry={openEnquiry} />
      </main>

      <Footer />

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiry} />
    </div>
  );
}

