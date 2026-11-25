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
      id: "duration",
      numericValue: 6,
      suffix: " Months",
      formatWithCommas: false,
      label: "CAREER PROGRAMME",
      iconType: "branches",
      iconBg: "#e8edff",
      iconColor: "#253b97",
    },
    {
      id: "modules",
      numericValue: 24,
      suffix: " Modules",
      formatWithCommas: false,
      label: "PRACTICAL CURRICULUM",
      iconType: "students",
      iconBg: "#e8edff",
      iconColor: "#253b97",
    },
    {
      id: "roles",
      numericValue: 17,
      suffix: "+",
      formatWithCommas: false,
      label: "POTENTIAL JOB ROLES",
      iconType: "placement",
      iconBg: "#fef3c7",
      iconColor: "#d97706",
    },
    {
      id: "support",
      numericValue: 100,
      suffix: "%",
      formatWithCommas: false,
      label: "PLACEMENT SUPPORT",
      iconType: "certifications",
      iconBg: "#dcfce7",
      iconColor: "#15803d",
    },
  ],
  missionCard: {
    title: "Our Mission & Educational Approach",
    description:
      "Our mission is to provide practical, skill-based education that prepares you for real-world administrative and HR careers. Through hands-on workplace simulations, digital tools, and personalized mentorship, students master office operations, HR lifecycle management, payroll & compliance, hospital front-office workflows, and AI-assisted productivity.",
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
