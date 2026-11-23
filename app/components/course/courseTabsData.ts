export interface CourseTabItem {
  id: string;
  label: string;
  href: string;
}

export const courseTabsData: CourseTabItem[] = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "schedule", label: "Daily Schedule", href: "#schedule" },
  {
    id: "interactive-syllabus",
    label: "24-Week Syllabus",
    href: "#interactive-syllabus",
  },
  {
    id: "fee-structure",
    label: "Fee & Installments",
    href: "#fee-structure",
  },
  {
    id: "who-can-join",
    label: "Who Can Join & Roles",
    href: "#who-can-join",
  },
  {
    id: "software-sandbox",
    label: "Software & AI Tools",
    href: "#software-sandbox",
  },
  {
    id: "placement-support",
    label: "Placement Support",
    href: "#placement-support",
  },
  { id: "faqs", label: "FAQs", href: "#faqs" },
];
