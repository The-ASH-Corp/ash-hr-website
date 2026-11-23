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
  tagline: string;
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
    { label: "COURSES", href: "/#courses" },
    { label: "HR & ADMINISTRATION" },
  ],
  badges: {
    accredited: "CAREER DEVELOPMENT PROGRAMME",
    benchmarked: "6 MONTHS • 120 DAYS • 24 WEEKS",
  },
  headingLine1: "HR & Administration",
  headingHighlight: "Management",
  headingLine2Suffix: "Programme",
  tagline: "Build Skills. Gain Confidence. Advance Your Career.",
  description:
    "Comprehensive 6-month dual-domain professional course combining core HR functions, payroll calculations, office administration, basic hospital administration, AI productivity tools, and 100% placement support.",
  batchBox: {
    label: "UPCOMING BATCH SCHEDULE",
    schedule: "Mon to Fri • 9:30 AM – 3:30 PM (Theory, Practical & Workplace Training)",
    seatsLeft: "Limited Seats Available",
  },
  primaryCta: "Apply for Upcoming Batch",
  secondaryCta: "View 24-Week Timetable & Fees",
  phoneDisplay: "+91 8921 365 750",
  phoneHref: "tel:+918921365750",
  heroImage: {
    src: "/images/img_4.png",
    alt: "ASH Academy HR & Administration Management Programme student",
    overlayEyebrow: "PRACTICAL WORKPLACE LEARNING",
    overlayBadge: "100% Placement Support",
    overlayTitle: "Theory, Practical Exercises & Workplace-Based Training",
  },
  stats: [
    {
      id: "duration",
      numericValue: 6,
      suffix: " Months",
      label: "24 WEEKS • 120 DAYS",
    },
    {
      id: "students",
      numericValue: 200,
      suffix: "+",
      label: "STUDENTS TRAINED",
    },
    {
      id: "placements",
      numericValue: 100,
      suffix: "+",
      label: "STUDENT PLACEMENTS",
    },
    {
      id: "roles",
      numericValue: 17,
      suffix: "+",
      label: "POTENTIAL JOB ROLES",
    },
  ],
};
