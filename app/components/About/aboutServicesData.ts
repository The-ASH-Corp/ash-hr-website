export interface AboutServiceCardItem {
  id: string;
  title: string;
  description: string;
  footerLabel: string;
  badgeLabel?: string;
  iconType: "office" | "pgFinance" | "diplomaFinance" | "hr";
  iconBg: string;
  iconColor: string;
}

export interface AboutServicesData {
  badgeText: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  description: string;
  cards: AboutServiceCardItem[];
  trustBar: {
    avatars: { src: string; alt: string }[];
    textPrefix: string;
    textHighlight: string;
    textSuffix: string;
    ctaLabel: string;
  };
  admissionsBanner: {
    eyebrow: string;
    callLabel: string;
    phoneDisplay: string;
    phoneHref: string;
    hoursNote: string;
    ctaLabel: string;
    counselorImage: {
      src: string;
      alt: string;
    };
    statusBadge: string;
    rightHeading: string;
    academyName: string;
    rightDescription: string;
    phoneCompact: string;
    email: string;
    emailHref: string;
    brochureLabel: string;
  };
}

export const aboutServicesData: AboutServicesData = {
  badgeText: "PROGRAMMES & SPECIALISATIONS",
  headingPrefix: "Career-Focused",
  headingHighlight: "Programmes",
  headingSuffix: "We Provide",
  description:
    "Our mission is to provide high-calibre practical training that gets you job-ready. We bridge academic learning and real-world corporate expectations through structured daily simulations and 100% placement support.",
  cards: [
    {
      id: "hr-admin",
      title: "HR & Administration Management Programme",
      description:
        "Flagship 6-month (24 weeks, 120 days) dual-domain career programme covering talent sourcing, payroll calculations, statutory compliance, and executive office coordination.",
      footerLabel: "6 Months • 100% Placement",
      badgeLabel: "Flagship Programme",
      iconType: "hr",
      iconBg: "#eef2ff",
      iconColor: "#253b97",
    },
    {
      id: "office-admin",
      title: "Office Administration & SOP Management",
      description:
        "Master front-office coordination, executive calendar scheduling, RACI workflows, vendor quotation comparisons, and inventory stock ledgers.",
      footerLabel: "Industry Standard",
      iconType: "office",
      iconBg: "#eef2ff",
      iconColor: "#253b97",
    },
    {
      id: "hospital-admin",
      title: "Applied Hospital Administration",
      description:
        "Healthcare department routing, non-clinical patient journeys (OPD/IPD), Hospital Information System (HIS) awareness, and medical record confidentiality.",
      footerLabel: "Healthcare Domain",
      badgeLabel: "Specialized",
      iconType: "diplomaFinance",
      iconBg: "#fef3c7",
      iconColor: "#d97706",
    },
    {
      id: "ai-workplace",
      title: "AI-Assisted Administration & Digital Tools",
      description:
        "Leverage Generative AI prompting for drafting SOPs, memos, and job descriptions, integrated with Google Workspace and Excel MIS dashboards.",
      footerLabel: "Next-Gen Skills",
      iconType: "pgFinance",
      iconBg: "#eef2ff",
      iconColor: "#3b54be",
    },
  ],
  trustBar: {
    avatars: [
      { src: "/images/aboutimg2.jpg", alt: "ASH Academy learner 1" },
      { src: "/images/aboutimg3.jpg", alt: "ASH Academy learner 2" },
      { src: "/images/aboutimg4.jpg", alt: "ASH Academy learner 3" },
    ],
    textPrefix: "Over",
    textHighlight: "200+ trained students & 100+ placed graduates",
    textSuffix: "rely on ASH Academy for their career advancement",
    ctaLabel: "EXPLORE SYLLABUS",
  },
  admissionsBanner: {
    eyebrow: "DIRECT ADMISSIONS",
    callLabel: "Call Us :",
    phoneDisplay: "+91 8921 365 750",
    phoneHref: "tel:+918921365750",
    hoursNote:
      "Immediate counselling assistance available Monday to Friday 9:30 AM – 3:30 PM.",
    ctaLabel: "ENQUIRE NOW",
    counselorImage: {
      src: "/images/aboutimg5.jpg",
      alt: "ASH Academy admissions counselor assisting a student",
    },
    statusBadge: "Admissions Open",
    rightHeading: "Contact us today for batch dates & fee details:",
    academyName: "ASH Academy",
    rightDescription:
      "Build skills. Gain confidence. Advance your career with our 6-month dual-domain programme.",
    phoneCompact: "+91 8921 365 750 / +91 9337 009 400",
    email: "connect@ashacademy.ai",
    emailHref: "mailto:connect@ashacademy.ai",
    brochureLabel: "View 24-Week Timetable",
  },
};
