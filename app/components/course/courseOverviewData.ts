export interface OverviewHighlightItem {
  id: string;
  iconType: "industry" | "guaranteed" | "portals";
  title: string;
  subtitle: string;
}

export interface CompetencyCardItem {
  id: string;
  iconType:
    | "architecture"
    | "sourcing"
    | "compliance"
    | "payroll"
    | "analytics"
    | "hris";
  title: string;
  description: string;
}

export interface SnapshotRowItem {
  label: string;
  value: string;
  valueColor?: "default" | "green" | "blue";
}

export interface SyllabusModuleBadge {
  label: string;
  variant: "green" | "blue";
}

export interface SyllabusModuleItem {
  id: string;
  monthLabel: string;
  badgeVariant: "navy" | "gold";
  title: string;
  defaultOpen?: boolean;
  bullets: {
    text: string;
    highlighted?: boolean;
  }[];
  footerBadges?: SyllabusModuleBadge[];
}

export interface InstitutionalAccreditationItem {
  id: string;
  badge: string;
  label: string;
}

export interface CareerRoleItem {
  id: string;
  trackLabel: string;
  shortTitle: string;
  shortSalary: string;
  fullTitle: string;
  description: string;
  ctcRangeTop: string;
  ctcRangeBottom: string;
  responsibilities: string[];
  sectors: string[];
}

export interface SoftwareSandboxItem {
  id: string;
  badgeText?: string;
  badgeType: "epfo" | "esic" | "tds" | "darwinbox" | "zoho" | "xls";
  title: string;
  subtitle: string;
}

export interface InternshipPhaseItem {
  id: string;
  daysLabel: string;
  title: string;
  description: string;
  milestone: string;
  milestoneColor?: "blue" | "green";
}

export interface CourseMentorItem {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CourseFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CourseOverviewData {
  overviewCard: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: OverviewHighlightItem[];
  };
  competenciesCard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: CompetencyCardItem[];
  };
  snapshotCard: {
    title: string;
    badge: string;
    rows: SnapshotRowItem[];
  };
  admissionsCard: {
    ribbonText: string;
    eyebrow: string;
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    qualificationLabel: string;
    qualifications: string[];
    batchLabel: string;
    batches: string[];
    submitLabel: string;
    whatsappLabel: string;
    whatsappHref: string;
    successMessage: string;
  };
  syllabusCard: {
    eyebrow: string;
    title: string;
    downloadLabel: string;
    modules: SyllabusModuleItem[];
  };
  accreditationsCard: {
    eyebrow: string;
    items: InstitutionalAccreditationItem[];
  };
  careerExplorerCard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctcLabel: string;
    responsibilitiesHeading: string;
    sectorsHeading: string;
    roles: CareerRoleItem[];
  };
  softwareSandboxCard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tools: SoftwareSandboxItem[];
  };
  internshipRoadmapCard: {
    eyebrow: string;
    title: string;
    badgeText: string;
    phases: InternshipPhaseItem[];
  };
  mentorshipCard: {
    eyebrow: string;
    title: string;
    mentors: CourseMentorItem[];
  };
  faqCard: {
    eyebrow: string;
    title: string;
    items: CourseFaqItem[];
  };
  bottomBanner: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    ctaLabel: string;
    counselorImage: {
      src: string;
      alt: string;
    };
    statusBadge: string;
    rightHeading: string;
    academyName: string;
    rightDescription: string;
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    emailHref: string;
  };
}

export const courseOverviewData: CourseOverviewData = {
  overviewCard: {
    eyebrow: "EXECUTIVE PROGRAM ABSTRACT",
    title: "Architecting Modern Enterprise Human Capital",
    description:
      "The corporate talent ecosystem has evolved from administrative record-keeping into a mission-critical boardroom driver. ASH Academy's Advanced Human Resource Management Diploma bridges the gap between textbook management theories and rigorous enterprise realities.",
    highlights: [
      {
        id: "industry",
        iconType: "industry",
        title: "Industry Aligned",
        subtitle: "MNC & GCC Frameworks",
      },
      {
        id: "guaranteed",
        iconType: "guaranteed",
        title: "100% Guaranteed",
        subtitle: "60-Day Corporate Internship",
      },
      {
        id: "portals",
        iconType: "portals",
        title: "Hands-On Portals",
        subtitle: "EPFO, ESIC & Darwinbox",
      },
    ],
  },
  competenciesCard: {
    eyebrow: "CURRICULUM FRAMEWORK",
    title: "Core Competencies & Key Focus Areas",
    subtitle:
      "Curated and vetted by senior CHROs and Legal Compliance Advocates across IT, BFSI, and Manufacturing giants.",
    items: [
      {
        id: "org-architecture",
        iconType: "architecture",
        title: "Strategic Org Architecture",
        description:
          "Designing reporting hierarchies, span of control matrices, and corporate agility frameworks.",
      },
      {
        id: "talent-sourcing",
        iconType: "sourcing",
        title: "Talent Sourcing & Tech Recruiting",
        description:
          "Boolean algorithms, LinkedIn Recruiter mastery, ATS workflows, and campus talent funnels.",
      },
      {
        id: "labour-law",
        iconType: "compliance",
        title: "Labour Law & Statutory Compliance",
        description:
          "Factories Act, POSH Internal Complaints Committee, Contract Labour, and domestic inquiries.",
      },
      {
        id: "automated-payroll",
        iconType: "payroll",
        title: "Automated Payroll & Compensation",
        description:
          "CTC breakup engineering, PF/ESI/TDS tax deductions, overtime rules, and full & final settlements.",
      },
      {
        id: "people-analytics",
        iconType: "analytics",
        title: "People Analytics & Metrics",
        description:
          "Attrition forecasting, time-to-hire formulas, eNPS pulse scoring, and PowerBI visualization.",
      },
      {
        id: "modern-hris",
        iconType: "hris",
        title: "Modern HRIS & ERP Automation",
        description:
          "Comprehensive system navigation across Darwinbox, Zoho People, and MS Excel power formulas.",
      },
    ],
  },
  snapshotCard: {
    title: "Program Snapshot",
    badge: "ISO 9001:2015",
    rows: [
      {
        label: "Duration",
        value: "6 Months (4M + 2M Intern)",
        valueColor: "default",
      },
      {
        label: "Batch Format",
        value: "Hybrid (Campus + Live)",
        valueColor: "default",
      },
      {
        label: "Internship",
        value: "100% Guaranteed",
        valueColor: "green",
      },
      {
        label: "Placement Assistance",
        value: "Lifetime Support",
        valueColor: "blue",
      },
      {
        label: "Campuses",
        value: "Kochi • Calicut • Online",
        valueColor: "default",
      },
    ],
  },
  admissionsCard: {
    ribbonText: "FAST TRACK",
    eyebrow: "ADMISSIONS DESK",
    title: "Get Syllabus & Fee Docket",
    description:
      "Apply to speak directly with an executive advisor and claim early-enrollment benefits.",
    nameLabel: "Full Name *",
    namePlaceholder: "e.g. Arun Nair",
    phoneLabel: "Mobile / WhatsApp Number *",
    phonePlaceholder: "+91 98765 43210",
    qualificationLabel: "Current Qualification *",
    qualifications: [
      "Graduate (B.Com / BBA / BA / B.Tech)",
      "Post Graduate (MBA / M.Com / MSW / MA)",
      "Working Professional (HR / Admin / Operations)",
      "Final Year Undergraduate Student",
      "Diploma / Other Qualification",
    ],
    batchLabel: "Preferred Batch",
    batches: [
      "Kochi Campus + Live (Hybrid)",
      "Calicut / Manjeri Campus (Offline)",
      "Kottakkal Campus (Offline)",
      "Weekend Executive Batch (Live Online)",
    ],
    submitLabel: "Reserve Seat & Get Details",
    whatsappLabel: "Chat with Counselor on WhatsApp",
    whatsappHref: "https://wa.me/919072801300",
    successMessage:
      "Your seat reservation & syllabus docket request has been submitted!",
  },
  syllabusCard: {
    eyebrow: "STRUCTURED ACADEMIC ROADMAP",
    title: "6-Month Comprehensive Journey",
    downloadLabel: "Download Full Syllabus PDF",
    modules: [
      {
        id: "month-1",
        monthLabel: "Month 1",
        badgeVariant: "navy",
        title: "Foundations of HR Architecture & Strategic Org Design",
        bullets: [
          {
            text: "Enterprise organizational charting, department hierarchies, and span-of-control modeling.",
            highlighted: true,
          },
          {
            text: "Job analysis, competency mapping frameworks, and drafting role-specific KRAs & KPIs.",
          },
          {
            text: "Corporate HR policy drafting, employee handbook design, and change management simulations.",
          },
        ],
      },
      {
        id: "month-2",
        monthLabel: "Month 2",
        badgeVariant: "navy",
        title: "Talent Acquisition, ATS Systems & Social Sourcing",
        bullets: [
          {
            text: "End-to-end technical and corporate recruitment lifecycle from requisition to offer rollout.",
            highlighted: true,
          },
          {
            text: "Boolean search strings, LinkedIn Recruiter workflows, Naukri/Indeed portal mastery, and ATS pipelines.",
          },
          {
            text: "Behavioral interviewing (STAR method), psychometric assessment evaluation, and background verification.",
          },
        ],
      },
      {
        id: "month-3",
        monthLabel: "Month 3",
        badgeVariant: "navy",
        title: "Statutory Labour Laws, Industrial Relations & Live Portals",
        bullets: [
          {
            text: "Practical statutory filings on EPFO, ESIC, Professional Tax, and Labour Welfare Fund portals.",
            highlighted: true,
          },
          {
            text: "Factories Act, Shops & Establishments Act, Payment of Gratuity, Bonus Act, and Maternity Benefit compliance.",
          },
          {
            text: "POSH Committee constitution, show-cause notices, domestic inquiry procedures, and disciplinary drafting.",
          },
        ],
      },
      {
        id: "month-4",
        monthLabel: "Month 4",
        badgeVariant: "navy",
        title: "Compensation & Benefits, Automated Payroll & People Analytics",
        bullets: [
          {
            text: "CTC structuring, tax-efficient allowance engineering, and automated monthly payroll processing.",
            highlighted: true,
          },
          {
            text: "Leave encashment, overtime computation, TDS on salaries, Form 16 generation, and Full & Final settlements.",
          },
          {
            text: "HR dashboards in Advanced Excel & PowerBI, attrition analytics, and Darwinbox / Zoho People ERP workflows.",
          },
        ],
      },
      {
        id: "months-5-6",
        monthLabel: "Months 5 & 6",
        badgeVariant: "gold",
        title: "Guaranteed 60-Day Corporate Internship & Boardroom Capstone",
        defaultOpen: true,
        bullets: [
          {
            text: "Formal Corporate Deployment inside verified partner firms across Kochi, Calicut, or Bangalore.",
            highlighted: true,
          },
          {
            text: "Direct execution of real enterprise monthly payroll cycles, onboarding batches, and statutory challan filings.",
          },
          {
            text: "Mentorship with assigned enterprise HR Directors and mock boardroom Capstone defense before placement.",
          },
        ],
        footerBadges: [
          {
            label: "100% Guaranteed Internship Certificate",
            variant: "green",
          },
          {
            label: "Direct Corporate Interviews",
            variant: "blue",
          },
        ],
      },
    ],
  },
  accreditationsCard: {
    eyebrow: "INSTITUTIONAL ACCREDITATIONS",
    items: [
      { id: "cpd", badge: "C", label: "CPD Accredited" },
      { id: "elaci", badge: "E", label: "ELACI Approved" },
      { id: "iso", badge: "I", label: "ISO 9001:2015" },
      { id: "recruiters", badge: "★", label: "200+ Recruiters" },
    ],
  },
  careerExplorerCard: {
    eyebrow: "EXECUTIVE CAREER ACCELERATION",
    title: "Interactive HR Career & Salary Explorer",
    subtitle:
      "Click on a target role below to dynamically inspect average starting packages, core duties, and top hiring corporate sectors:",
    ctcLabel: "MARKET CTC RANGE",
    responsibilitiesHeading: "Primary Daily Responsibilities",
    sectorsHeading: "Primary Recruiting Sectors",
    roles: [
      {
        id: "hrbp",
        trackLabel: "Executive Track",
        shortTitle: "HRBP",
        shortSalary: "₹6.5 - 12 LPA",
        fullTitle: "HR Business Partner (HRBP)",
        description:
          "Serves as strategic advisor to C-Suite and business unit heads on manpower budgeting and retention.",
        ctcRangeTop: "₹6,50,000 –",
        ctcRangeBottom: "₹12,00,000 / year",
        responsibilities: [
          "Partner with departmental leaders to formulate retention initiatives",
          "Manage performance cycles, 9-box talent grids, and OKR alignment",
          "Facilitate resolution for critical grievance & POSH concerns",
        ],
        sectors: [
          "Tier-1 IT Firms (TCS, Infosys, Cognizant)",
          "Global Capability Centers (GCCs)",
          "BFSI Conglomerates",
        ],
      },
      {
        id: "talent-acquisition",
        trackLabel: "Talent Track",
        shortTitle: "Talent Acquisition",
        shortSalary: "₹5.0 - 10 LPA",
        fullTitle: "Talent Acquisition Specialist",
        description:
          "Leads end-to-end technical and leadership hiring pipelines, employer branding, and campus recruitment drives.",
        ctcRangeTop: "₹5,00,000 –",
        ctcRangeBottom: "₹10,00,000 / year",
        responsibilities: [
          "Execute Boolean sourcing, LinkedIn Recruiter campaigns, and ATS pipeline management",
          "Conduct competency-based behavioral interviews and salary negotiations",
          "Drive campus hiring funnels, offer rollouts, and pre-onboarding engagement",
        ],
        sectors: [
          "Product & SaaS Tech Startups",
          "IT Services & RPO Consulting Firms",
          "E-Commerce & Retail Enterprises",
        ],
      },
      {
        id: "payroll-compliance",
        trackLabel: "Compliance Track",
        shortTitle: "Payroll & Compliance",
        shortSalary: "₹6.0 - 11 LPA",
        fullTitle: "Payroll & Statutory Compliance Manager",
        description:
          "Governs enterprise payroll processing, statutory labour law filings, audits, and regulatory adherence.",
        ctcRangeTop: "₹6,00,000 –",
        ctcRangeBottom: "₹11,00,000 / year",
        responsibilities: [
          "Execute monthly EPFO, ESIC, PT, LWF, and TDS challan filings on government portals",
          "Manage CTC structuring, payroll tax deductions, and Full & Final settlements",
          "Represent organization during labour inspections, factory audits, and POSH inquiries",
        ],
        sectors: [
          "Manufacturing & Industrial Conglomerates",
          "Healthcare, Hospitality & Aviation",
          "Big-4 & Payroll Advisory Firms",
        ],
      },
      {
        id: "people-analytics",
        trackLabel: "Tech & Data Track",
        shortTitle: "People Analytics",
        shortSalary: "₹7.5 - 14 LPA",
        fullTitle: "HRIS & People Analytics Lead",
        description:
          "Transforms workforce metrics into boardroom insights using HRIS automation, PowerBI, and predictive modeling.",
        ctcRangeTop: "₹7,50,000 –",
        ctcRangeBottom: "₹14,00,000 / year",
        responsibilities: [
          "Build automated attrition, time-to-hire, and diversity dashboards in PowerBI & Excel",
          "Administer cloud HRIS platforms including Darwinbox, Zoho People, and SAP SuccessFactors",
          "Model compensation benchmarks, workforce productivity, and headcount ROI",
        ],
        sectors: [
          "Multinational GCCs & FinTechs",
          "Management Consulting Firms",
          "Enterprise Cloud & SaaS Corporations",
        ],
      },
    ],
  },
  softwareSandboxCard: {
    eyebrow: "NO THEORETICAL FLUFF",
    title: "Live Regulatory & HRIS Software Sandbox",
    subtitle:
      "Unlike generic university degrees, ASH Academy equips you with hands-on console experience across mandatory state compliance portals and leading enterprise tools.",
    tools: [
      {
        id: "epfo",
        badgeText: "EPFO",
        badgeType: "epfo",
        title: "Unified EPFO Portal",
        subtitle: "Challan generation, ECR filings & UAN KYC",
      },
      {
        id: "esic",
        badgeText: "ESIC",
        badgeType: "esic",
        title: "ESIC Insurance Desk",
        subtitle: "Pehchan cards, contribution logs & monthly filings",
      },
      {
        id: "tds",
        badgeText: "TDS",
        badgeType: "tds",
        title: "Income Tax & TDS Portals",
        subtitle: "Form 16/16A, 24Q returns & tax slabs",
      },
      {
        id: "darwinbox",
        badgeType: "darwinbox",
        title: "Darwinbox HRIS",
        subtitle: "Employee lifecycle, leave, shifts & app-based HR",
      },
      {
        id: "zoho",
        badgeText: "Zoho",
        badgeType: "zoho",
        title: "Zoho People & Recruit",
        subtitle: "ATS talent pipeline & automated appraisals",
      },
      {
        id: "excel",
        badgeText: "XLS",
        badgeType: "xls",
        title: "Advanced MS Excel",
        subtitle: "VLOOKUP, XLOOKUP, Pivot, CTC calculation logic",
      },
    ],
  },
  internshipRoadmapCard: {
    eyebrow: "REAL CORPORATE EXECUTION",
    title: "60-Day Guaranteed Internship Roadmap",
    badgeText: "100% Industry Implemented",
    phases: [
      {
        id: "days-1-15",
        daysLabel: "Days 1 - 15",
        title: "Onboarding & Shadowing",
        description:
          "Induction into host corporate HR department, NDA protocols, and HRMS access delegation.",
        milestone: "Milestone: Portal Check",
        milestoneColor: "blue",
      },
      {
        id: "days-16-30",
        daysLabel: "Days 16 - 30",
        title: "Payroll & Audit Execution",
        description:
          "Hands-on computation of actual employee payrolls, overtime rosters, and live PF/ESI filings.",
        milestone: "Milestone: Zero-Error Audit",
        milestoneColor: "blue",
      },
      {
        id: "days-31-45",
        daysLabel: "Days 31 - 45",
        title: "Live Recruitment Drives",
        description:
          "Managing talent sourcing pipelines, initial telephonic screens, and interview panel coordination.",
        milestone: "Milestone: Offer Rollouts",
        milestoneColor: "blue",
      },
      {
        id: "days-46-60",
        daysLabel: "Days 46 - 60",
        title: "Capstone Defense & PPO",
        description:
          "Strategic presentation of people ops enhancements to company directors; evaluation for Pre-Placement Offers.",
        milestone: "Milestone: Job Placement",
        milestoneColor: "green",
      },
    ],
  },
  mentorshipCard: {
    eyebrow: "DIRECT INDUSTRY GUIDANCE",
    title: "Mentorship from Practicing CHROs & Legal Advocates",
    mentors: [
      {
        id: "fazalul-rahiman",
        name: "Fazalul Rahiman",
        role: "CEO & Head Director",
        bio: "15+ Years corporate executive governance & enterprise strategy.",
        imageSrc: "/images/img_7.jpg",
        imageAlt: "Fazalul Rahiman - CEO & Head Director",
      },
      {
        id: "meera-nambiar",
        name: "Adv. Meera Nambiar",
        role: "Labour Law Advocate & POSH Chair",
        bio: "High Court counsel specializing in Industrial Disputes & Factories Act.",
        imageSrc: "/images/img_9.jpg",
        imageAlt: "Adv. Meera Nambiar - Labour Law Advocate & POSH Chair",
      },
    ],
  },
  faqCard: {
    eyebrow: "INSTITUTIONAL CLARITY",
    title: "Frequently Asked Questions",
    items: [
      {
        id: "faq-eligibility",
        question:
          "What is the exact eligibility criteria for this Advanced HR Diploma?",
        answer:
          "Graduates from any stream (B.Com, BBA, BA, B.Sc, B.Tech), postgraduates (MBA, MSW, M.Com), final-year degree students, and working professionals looking to transition into corporate HR or upgrade to HRBP and statutory compliance roles are eligible to enroll.",
      },
      {
        id: "faq-internship",
        question: "How is the 2-Month Corporate Internship arranged?",
        answer:
          "Upon completing the 4-month intensive training, ASH Academy's corporate placement cell directly deploys you into verified partner companies across Kochi, Calicut, or Bangalore for a guaranteed 60-day supervised HR internship with an official experience certificate.",
      },
      {
        id: "faq-portals",
        question: "Are government compliance portals taught live?",
        answer:
          "Yes. Every learner practices hands-on statutory filings, ECR challan generation, UAN activation, ESIC monthly returns, TDS computation, and HRIS workflows on live simulation sandboxes for EPFO, ESIC, Darwinbox, Zoho People, and Advanced MS Excel.",
      },
      {
        id: "faq-recognition",
        question: "Is this certification globally recognized?",
        answer:
          "Yes. The diploma is ISO 9001:2015 certified, CPD Accredited, and ELACI Approved, making your credentials verifiable and recognized by MNCs, Global Capability Centers (GCCs), and corporate employers across India and the Middle East (GCC).",
      },
    ],
  },
  bottomBanner: {
    eyebrow: "EXECUTIVE ADMISSIONS HELPLINE",
    headingLine1: "Ready to Accelerate Your",
    headingLine2: "Corporate HR Career?",
    description:
      "Speak directly with our senior admissions counselor. Secure early-bird scholarship for the upcoming cohort.",
    ctaLabel: "BOOK FREE DEMO CLASS",
    counselorImage: {
      src: "/images/img_9.jpg",
      alt: "ASH Academy Senior Admissions Counselor",
    },
    statusBadge: "Available Now",
    rightHeading: "CONTACT US TODAY FOR BATCH DATES & FEE DETAILS:",
    academyName: "ASH Academy",
    rightDescription:
      "Start your professional HR journey with industry-grade certifications.",
    phoneDisplay: "+91 9072 80 1300",
    phoneHref: "tel:+919072801300",
    email: "info@ashacademy.in",
    emailHref: "mailto:info@ashacademy.in",
  },
};
