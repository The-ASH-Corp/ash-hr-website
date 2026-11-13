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
  badgeText: "ABOUT OUR ACADEMY",
  headingLine1: "Best Institute for Creating a",
  headingHighlight: "Successful Career!",
  description:
    "At ASH Academy, we help you gain the skills you need to succeed in today's competitive job market. We offer specialized corporate-designed programs that prepare you for dynamic, high-growth careers in business administration, accounting, and human resources.",
  stats: [
    {
      id: "students",
      numericValue: 20000,
      suffix: "+",
      formatWithCommas: true,
      label: "HAPPY STUDENTS",
      iconType: "students",
      iconBg: "#e8edff",
      iconColor: "#253b97",
    },
    {
      id: "placement",
      numericValue: 98,
      suffix: "%",
      formatWithCommas: false,
      label: "PLACEMENT ASSISTANCE",
      iconType: "placement",
      iconBg: "#fef3c7",
      iconColor: "#d97706",
    },
    {
      id: "certifications",
      numericValue: 15,
      suffix: "+",
      formatWithCommas: false,
      label: "INTERNATIONAL CERTIFICATIONS",
      iconType: "certifications",
      iconBg: "#dcfce7",
      iconColor: "#15803d",
    },
    {
      id: "branches",
      numericValue: 12,
      suffix: "+",
      formatWithCommas: false,
      label: "BRANCHES IN KERALA & GCC",
      iconType: "branches",
      iconBg: "#e8edff",
      iconColor: "#253b97",
    },
  ],
  missionCard: {
    title: "Our Mission & Approach",
    description:
      "Our mission is to provide high-quality education that prepares you for real-world jobs. We aim to create a friendly, collaborative learning environment that helps you grow personally and professionally with practical corporate simulations.",
    programsLabel: "OUR CORE PROGRAMS :",
    programs: [
      "Office Administration",
      "Financial Accounting",
      "PG Financial Accounting",
      "Human Resource (HRM)",
    ],
  },
  mentorCard: {
    imageSrc: "/images/aboutImage1.jpg",
    imageAlt: "ASH Academy graduates and corporate mentors",
    badgeText: "Certified Mentors",
    title: "Experienced Corporate Mentors & Alumni",
    description:
      "Experienced corporate mentors guiding students every step toward high-paying jobs in banking, multinational corporations, and enterprises.",
  },
};

