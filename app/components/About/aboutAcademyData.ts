export interface AboutStatItem {
  id: string;
  numericValue: number;
  suffix: string;
  formatWithCommas?: boolean;
  label: string;
  iconType: "students" | "placement" | "certifications" | "branches";
  iconBg: string;
  iconColor: string;
}

export interface AboutAcademyData {
  badgeText: string;
  headingLine1: string;
  headingHighlight: string;
  description: string;
  stats: AboutStatItem[];
  missionCard: {
    title: string;
    description: string;
    programsLabel: string;
    programs: string[];
  };
  mentorCard: {
    imageSrc: string;
    imageAlt: string;
    badgeText: string;
    title: string;
    description: string;
  };
}

export const aboutAcademyData: AboutAcademyData = {
  badgeText: "ABOUT ASH ACADEMY",
  headingLine1: "Best Institute for Creating a",
  headingHighlight: "Successful Career!",
  description:
    "At ASH Academy, we help you gain the skills you need to succeed in today's competitive corporate landscape. We offer a comprehensive 6-month dual-domain HR & Administration Management Programme combining theory, practical exercises, and workplace-based training with 100% placement support.",
  stats: [
    {
      id: "students",
      numericValue: 200,
      suffix: "+",
      formatWithCommas: false,
      label: "STUDENTS TRAINED",
      iconType: "students",
      iconBg: "#e8edff",
      iconColor: "#253b97",
    },
    {
      id: "placement",
      numericValue: 100,
      suffix: "+",
      formatWithCommas: false,
      label: "STUDENT PLACEMENTS",
      iconType: "placement",
      iconBg: "#fef3c7",
      iconColor: "#d97706",
    },
    {
      id: "support",
      numericValue: 100,
      suffix: "%",
      formatWithCommas: false,
      label: "PLACEMENT ASSISTANCE",
      iconType: "certifications",
      iconBg: "#dcfce7",
      iconColor: "#15803d",
    },
    {
      id: "duration",
      numericValue: 6,
      suffix: " Months",
      formatWithCommas: false,
      label: "24 WEEKS • 120 DAYS",
      iconType: "branches",
      iconBg: "#e8edff",
      iconColor: "#253b97",
    },
  ],
  missionCard: {
    title: "Our Mission & Educational Approach",
    description:
      "Our mission is to provide high-quality education that prepares you for real jobs. Through our 24-week, 120-day day-wise curriculum (Mon–Fri • 9:30 AM – 3:30 PM), students master office administration, HR lifecycle management, payroll calculation, hospital front-office workflows, and generative AI productivity.",
    programsLabel: "CORE DOMAINS COVERED :",
    programs: [
      "HR & Administration Management Programme",
      "Office Administration & Workflow SOPs",
      "Payroll Calculations & Statutory Compliance",
      "Basic Hospital Administration (OPD/IPD/HIS)",
      "AI-Assisted Workplace Productivity",
    ],
  },
  mentorCard: {
    imageSrc: "/images/aboutImage1.jpg",
    imageAlt: "ASH Academy graduates and corporate mentors",
    badgeText: "Industry Mentors",
    title: "Experienced Corporate Mentors & Alumni",
    description:
      "Industry professionals and legal advocates guiding students step-by-step toward rewarding administrative and HR careers across corporate enterprises, healthcare facilities, and multinational firms.",
  },
};
