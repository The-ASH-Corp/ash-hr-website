export interface CourseTabItem {
  id: string;
  label: string;
  href: string;
}

export const courseTabsData: CourseTabItem[] = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "competencies", label: "Competencies", href: "#competencies" },
  {
    id: "interactive-syllabus",
    label: "Interactive Syllabus",
    href: "#interactive-syllabus",
  },
  {
    id: "career-roi",
    label: "Career & ROI Explorer",
    href: "#career-roi",
  },
  {
    id: "software-sandbox",
    label: "Live Software Sandbox",
    href: "#software-sandbox",
  },
  {
    id: "internship-roadmap",
    label: "Internship Roadmap",
    href: "#internship-roadmap",
  },
  { id: "faqs", label: "FAQs", href: "#faqs" },
];

