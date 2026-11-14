"use client";

import { useState } from "react";
import Header from "../components/Header";
import CourseHeroSection from "../components/course/CourseHeroSection";
import CourseTabsBar from "../components/course/CourseTabsBar";
import CourseOverviewCard from "../components/course/CourseOverviewCard";
import CourseCompetenciesCard from "../components/course/CourseCompetenciesCard";
import CourseSyllabusCard from "../components/course/CourseSyllabusCard";
import CourseCareerExplorerCard from "../components/course/CourseCareerExplorerCard";
import CourseSoftwareSandboxCard from "../components/course/CourseSoftwareSandboxCard";
import CourseInternshipRoadmapCard from "../components/course/CourseInternshipRoadmapCard";
import CourseMentorshipCard from "../components/course/CourseMentorshipCard";
import CourseFaqCard from "../components/course/CourseFaqCard";
import CourseBottomBanner from "../components/course/CourseBottomBanner";
import CourseSnapshotCard from "../components/course/CourseSnapshotCard";
import CourseAdmissionsCard from "../components/course/CourseAdmissionsCard";
import CourseAccreditationsCard from "../components/course/CourseAccreditationsCard";
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
        <CourseTabsBar />

        <section
          style={{ backgroundColor: "#f8fafc" }}
          className="py-10 sm:py-14 lg:py-16 bg-[#f8fafc]"
        >
          <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">
              {/* Left 8 Columns: Overview + Core Competencies + Interactive Syllabus + Career Explorer + Software Sandbox + Internship Roadmap + Mentorship + FAQs */}
              <div className="lg:col-span-8 space-y-7 lg:space-y-8">
                <CourseOverviewCard />
                <CourseCompetenciesCard />
                <CourseSyllabusCard onOpenEnquiry={openEnquiry} />
                <CourseCareerExplorerCard />
                <CourseSoftwareSandboxCard />
                <CourseInternshipRoadmapCard />
                <CourseMentorshipCard />
                <CourseFaqCard />
              </div>

              {/* Right 4 Columns: Program Snapshot + Admissions Desk + Institutional Accreditations */}
              <div className="lg:col-span-4 space-y-6 lg:space-y-7">
                <CourseSnapshotCard />
                <CourseAdmissionsCard />
                <CourseAccreditationsCard />
              </div>
            </div>
          </div>
        </section>

        <CourseBottomBanner onOpenEnquiry={openEnquiry} />
      </main>

      <Footer />

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiry} />
    </div>
  );
}
