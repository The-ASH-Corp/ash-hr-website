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
  badgeText: "SERVICES & FEATURES",
  headingPrefix: "Creative Top-notch",
  headingHighlight: "Services",
  headingSuffix: "We Providing",
  description:
    "Our mission is to provide quality education that gets you ready for real jobs. We want to create a friendly space where you can grow both personally and professionally.",
  cards: [
    {
      id: "office-admin",
      title: "Advanced Diploma in Office Administration",
      description:
        "Our course helps students get ready for a successful career in office management, executive assistance, and corporate desk coordination.",
      footerLabel: "Industry Accredited",
      iconType: "office",
      iconBg: "#eef2ff",
      iconColor: "#253b97",
    },
    {
      id: "pg-finance",
      title: "Post Graduate in Financial Accounting",
      description:
        "If you're interested in finance, this course covers key accounting practices, computerized auditing, and global tax compliance methods.",
      footerLabel: "Advanced Level",
      iconType: "pgFinance",
      iconBg: "#eef2ff",
      iconColor: "#3b54be",
    },
    {
      id: "diploma-finance",
      title: "Advanced Diploma in Financial Accounting",
      description:
        "This diploma is for those wanting to work in finance. Covers Tally Prime, SAP FICO fundamentals, GST filling, and analytical accounting.",
      footerLabel: "Learn More",
      badgeLabel: "Most Popular",
      iconType: "diplomaFinance",
      iconBg: "#fef3c7",
      iconColor: "#d97706",
    },
    {
      id: "hr-management",
      title: "Advanced Human Resource Management",
      description:
        "Our HR course focuses on managing people at work, strategic payroll systems, onboarding processes, labor law, and organizational leadership.",
      footerLabel: "Corporate Ready",
      iconType: "hr",
      iconBg: "#fef3c7",
      iconColor: "#d97706",
    },
  ],
  trustBar: {
    avatars: [
      { src: "/images/aboutimg2.jpg", alt: "ASH Academy learner 1" },
      { src: "/images/aboutimg3.jpg", alt: "ASH Academy learner 2" },
      { src: "/images/aboutimg4.jpg", alt: "ASH Academy learner 3" },
    ],
    textPrefix: "More than",
    textHighlight: "25,000+ happy learners",
    textSuffix: "and professionals rely on ASH Academy",
    ctaLabel: "MORE SERVICES",
  },
  admissionsBanner: {
    eyebrow: "DIRECT ADMISSIONS",
    callLabel: "Call Us :",
    phoneDisplay: "9072 80 1300",
    phoneHref: "tel:9072801300",
    hoursNote:
      "Immediate counseling assistance available Monday to Saturday 9:00 AM – 6:30 PM.",
    ctaLabel: "REGISTRATION",
    counselorImage: {
      src: "/images/aboutimg5.jpg",
      alt: "ASH Academy admissions counselor assisting a student",
    },
    statusBadge: "Admissions Open",
    rightHeading: "Contact us today for batch dates & fee details:",
    academyName: "ASH Academy",
    rightDescription:
      "Start your professional career journey with industry-grade certifications.",
    phoneCompact: "9072801300",
    email: "info@cbaacademy.in",
    emailHref: "mailto:info@cbaacademy.in",
    brochureLabel: "Request Prospectus Brochure",
  },
};
