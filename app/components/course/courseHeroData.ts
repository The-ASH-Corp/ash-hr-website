export interface CourseBreadcrumbItem {
  label: string;
  href?: string;
}

export interface CourseStatItem {
  id: string;
  numericValue: number;
  suffix: string;
  decimals?: number;
  formatWithCommas?: boolean;
  label: string;
}

export interface CourseHeroData {
  breadcrumbs: CourseBreadcrumbItem[];
  badges: {
    accredited: string;
    benchmarked: string;
  };
  headingLine1: string;
  headingHighlight: string;
  headingLine2Suffix: string;
  description: string;
  batchBox: {
    label: string;
    schedule: string;
    seatsLeft: string;
  };
  primaryCta: string;
  secondaryCta: string;
  phoneDisplay: string;
  phoneHref: string;
  heroImage: {
    src: string;
    alt: string;
    overlayEyebrow: string;
    overlayBadge: string;
    overlayTitle: string;
  };
  stats: CourseStatItem[];
}

export const courseHeroData: CourseHeroData = {
  breadcrumbs: [
    { label: "HOME", href: "/" },
    { label: "COURSES" },
  ],
  badges: {
    accredited: "ISO 9001:2015 ACCREDITED",
    benchmarked: "AACSB & SHRM BENCHMARKED",
  },
  headingLine1: "Advanced Human Resource",
  headingHighlight: "Management",
  headingLine2Suffix: "Executive Diploma",
  description:
    "Master talent acquisition, statutory labor codes (PF, ESI, POSH, Factories Act), workforce analytics, and automated payroll systems with an institutional 2-month guaranteed corporate enterprise internship.",
  batchBox: {
    label: "NEXT EXECUTIVE BATCH",
    schedule: "1st of Next Month • Weekend & Regular",
    seatsLeft: "Only 4 Seats Left",
  },
  primaryCta: "Apply for Upcoming Batch",
  secondaryCta: "Download Syllabus & Fee Details",
  phoneDisplay: "+91 9072 80 1300",
  phoneHref: "tel:+919072801300",
  heroImage: {
    src: "/images/img_4.png",
    alt: "Advanced Human Resource Management Executive Diploma corporate session",
    overlayEyebrow: "BOARDROOM IMMERSION",
    overlayBadge: "100% Placement Cell",
    overlayTitle:
      "Practical Statutory Portal Filings & HRIS ERP Tools Included",
  },
  stats: [
    {
      id: "duration",
      numericValue: 6,
      suffix: " Months",
      label: "4M CLASS + 2M INTERNSHIP",
    },
    {
      id: "placement",
      numericValue: 96.8,
      decimals: 1,
      suffix: "%",
      label: "VERIFIED PLACEMENT RATE",
    },
    {
      id: "acts",
      numericValue: 14,
      suffix: "+",
      label: "STATUTORY LABOUR ACTS",
    },
    {
      id: "alumni",
      numericValue: 2000,
      formatWithCommas: true,
      suffix: "+",
      label: "CERTIFIED ALUMNI PLACED",
    },
  ],
};
