export interface OverviewHighlightItem {
  id: string;
  iconType: "dualDomain" | "practical" | "placement" | "ai";
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
    | "hris"
    | "hospital"
    | "ai";
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
  variant: "green" | "blue" | "amber";
}

export interface WeeklyTopicItem {
  weekNumber: number;
  weekLabel: string;
  title: string;
  topics: string;
  outcome: string;
  submission: string;
}

export interface SyllabusMonthItem {
  id: string;
  monthNumber: number;
  monthLabel: string;
  badgeVariant: "navy" | "gold" | "green";
  title: string;
  subtitle: string;
  defaultOpen?: boolean;
  weeks: WeeklyTopicItem[];
  footerBadges?: SyllabusModuleBadge[];
}

export interface ExtraTrainingItem {
  title: string;
  subtitle: string;
  note: string;
  sessions: { sessionNumber: number; title: string; desc: string }[];
}

export interface InstitutionalAccreditationItem {
  id: string;
  badge: string;
  label: string;
}

export interface CareerRoleItem {
  id: string;
  category: "hr" | "admin" | "hospital" | "management";
  trackLabel: string;
  shortTitle: string;
  shortSalary: string;
  fullTitle: string;
  description: string;
  responsibilities: string[];
  sectors: string[];
}

export interface SoftwareSandboxItem {
  id: string;
  badgeText?: string;
  badgeType: "zoho" | "keka" | "zohobooks" | "workspace" | "ai" | "his";
  title: string;
  subtitle: string;
  tag: string;
}

export interface DailyScheduleSlotItem {
  time: string;
  duration: string;
  slot: string;
  activity: string;
  type: "session1" | "session2" | "session3" | "break";
}

export interface WeeklyPatternItem {
  day: string;
  title: string;
  description: string;
}

export interface EvaluationCriterionItem {
  point: string;
  check: string;
  scale: string;
}

export interface FeeOptionItem {
  id: string;
  badge: string;
  name: string;
  headlineAmount: string;
  sublabel: string;
  isPopular?: boolean;
  breakdown: {
    item: string;
    due: string;
    amount: string;
    highlight?: boolean;
  }[];
  totalFee: string;
  savingsNote?: string;
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
    keyHighlights: {
      label: string;
      value: string;
    }[];
    highlights: OverviewHighlightItem[];
  };
  dailyScheduleCard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    schedulePill: string;
    totalClassTime: string;
    slots: DailyScheduleSlotItem[];
    weeklyPattern: WeeklyPatternItem[];
    evaluationCriteria: EvaluationCriterionItem[];
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
  feeStructureCard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    duration: string;
    options: FeeOptionItem[];
    terms: string[];
  };
  whoCanJoinCard: {
    eyebrow: string;
    title: string;
    eligibilityBadge: string;
    targetGroups: {
      title: string;
      description: string;
    }[];
    whyChooseAsh: {
      title: string;
      description: string;
    }[];
    rolesHeading: string;
    allRoles: CareerRoleItem[];
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
    subtitle: string;
    downloadLabel: string;
    months: SyllabusMonthItem[];
    extraTraining: ExtraTrainingItem;
  };
  accreditationsCard: {
    eyebrow: string;
    items: InstitutionalAccreditationItem[];
  };
  softwareSandboxCard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tools: SoftwareSandboxItem[];
  };
  placementSupportCard: {
    eyebrow: string;
    tagline: string;
    title: string;
    description: string;
    badge: string;
    stats: { value: string; label: string }[];
    pillars: {
      title: string;
      description: string;
    }[];
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
    address: string;
    phones: string[];
    phoneHref: string;
    email: string;
    emailHref: string;
    website: string;
  };
}

export const courseOverviewData: CourseOverviewData = {
  overviewCard: {
    eyebrow: "6-MONTH CAREER DEVELOPMENT PROGRAMME",
    title: "HR & Administration Management Programme",
    description:
      "A career-defining dual-domain curriculum combining strategic Human Resource Management with comprehensive Office and Healthcare Administration. Delivered across 24 weeks (120 days) through hands-on simulations, real corporate workflows, AI productivity tools, and 100% placement support.",
    keyHighlights: [
      { label: "Duration", value: "6 Months • 24 Weeks • 120 Days" },
      { label: "Daily Schedule", value: "Mon – Fri • 9:30 AM – 3:30 PM" },
      { label: "Training Approach", value: "Theory, Practical & Workplace-Based" },
      { label: "Placement Record", value: "100+ Placements • 100% Placement Support" },
    ],
    highlights: [
      {
        id: "dualDomain",
        iconType: "dualDomain",
        title: "Integrated Dual Domain",
        subtitle: "Core HR & Executive Administration",
      },
      {
        id: "practical",
        iconType: "practical",
        title: "Workplace Simulations",
        subtitle: "120 Days Hands-On Practice",
      },
      {
        id: "placement",
        iconType: "placement",
        title: "100% Placement Support",
        subtitle: "Interviews & Employer Connects",
      },
      {
        id: "ai",
        iconType: "ai",
        title: "AI-Assisted Workplace",
        subtitle: "Modern Prompting & SOP Workflows",
      },
    ],
  },

  dailyScheduleCard: {
    eyebrow: "STRUCTURED DAILY & WEEKLY LEARNING",
    title: "Daily Time Structure & 5-Day Weekly Pattern",
    subtitle:
      "A rigorous corporate-style routine designed to build real workplace muscle memory and operational independence.",
    schedulePill: "24 Weeks | 120 Days | Monday to Friday | 9:30 AM – 3:30 PM",
    totalClassTime: "Total Class Time: 4 Hours 45 Minutes per day (with dedicated tea & lunch breaks)",
    slots: [
      {
        time: "9:30 AM – 11:15 AM",
        duration: "1 hr 45 min",
        slot: "Session 1",
        activity: "Topic teaching & core concept briefing (frameworks, compliance, SOPs, workflows)",
        type: "session1",
      },
      {
        time: "11:15 AM – 11:30 AM",
        duration: "15 min",
        slot: "Tea Break",
        activity: "Morning refreshment & networking break",
        type: "break",
      },
      {
        time: "11:30 AM – 1:00 PM",
        duration: "1 hr 30 min",
        slot: "Session 2",
        activity: "Trainer demonstration / interactive class activity, common mistakes & guided practice",
        type: "session2",
      },
      {
        time: "1:00 PM – 2:00 PM",
        duration: "1 hr",
        slot: "Lunch Break",
        activity: "Mid-day lunch break & informal peer discussion",
        type: "break",
      },
      {
        time: "2:00 PM – 3:30 PM",
        duration: "1 hr 30 min",
        slot: "Session 3",
        activity: "Independent student task execution, live review, trainer feedback and exit check",
        type: "session3",
      },
    ],
    weeklyPattern: [
      {
        day: "Day 1 (Mon)",
        title: "Introduction & Scope",
        description: "Introduction to the week's topic, objectives, and standardized operational work steps.",
      },
      {
        day: "Day 2 (Tue)",
        title: "Demo & Common Pitfalls",
        description: "Trainer demonstration, analyzing error scenarios, and mastering how to avoid common mistakes.",
      },
      {
        day: "Day 3 (Wed)",
        title: "Guided Trainer Practice",
        description: "Collaborative practice alongside trainer with immediate guidance on document drafting.",
      },
      {
        day: "Day 4 (Thu)",
        title: "Independent Execution",
        description: "Hands-on execution on own with trainer monitoring, milestone reviews, and checkpoint checks.",
      },
      {
        day: "Day 5 (Fri)",
        title: "Review & Submission",
        description: "Consolidated audit, short scenario quiz, and formal submission of the weekly portfolio deliverable.",
      },
    ],
    evaluationCriteria: [
      {
        point: "Accuracy",
        check: "Correct facts, entries, calculations, dates, and spreadsheet formula ranges.",
        scale: "Rated 1 (Needs Support) to 4 (Independent & Reliable)",
      },
      {
        point: "Completeness",
        check: "All required fields, step sequences, approvals, and supporting files attached.",
        scale: "Rated 1 (Needs Support) to 4 (Independent & Reliable)",
      },
      {
        point: "Work Steps & Hand-offs",
        check: "Correct chronological order, RACI ownership, and proper escalation.",
        scale: "Rated 1 (Needs Support) to 4 (Independent & Reliable)",
      },
      {
        point: "Communication",
        check: "Clear, respectful, concise business phrasing and professional formatting.",
        scale: "Rated 1 (Needs Support) to 4 (Independent & Reliable)",
      },
      {
        point: "Data Confidentiality",
        check: "Fictional data rule followed; strict access permissions and privacy maintained.",
        scale: "Rated 1 (Needs Support) to 4 (Independent & Reliable)",
      },
      {
        point: "Checking & Independence",
        check: "Audits own work, maintains error log, and finishes task with minimal supervision.",
        scale: "Rated 1 (Needs Support) to 4 (Independent & Reliable)",
      },
    ],
  },

  feeStructureCard: {
    eyebrow: "OFFICIAL TUITION DOCKET",
    title: "Transparent Fee Structure & Payment Plans",
    subtitle:
      "Choose between a discounted upfront one-time payment or a convenient 6-month installment plan designed for flexibility.",
    duration: "Course Duration: 6 Months (24 Weeks | 120 Days)",
    options: [
      {
        id: "one-time",
        badge: "OPTION 1: DISCOUNTED",
        name: "One-Time Payment",
        headlineAmount: "₹50,000",
        sublabel: "Total course investment with upfront discount savings of ₹5,000",
        isPopular: true,
        breakdown: [
          {
            item: "Admission Fee",
            due: "At joining",
            amount: "₹1,000",
          },
          {
            item: "Balance Amount",
            due: "Before 1st class",
            amount: "₹49,000",
          },
        ],
        totalFee: "₹50,000",
        savingsNote: "Saves ₹5,000 compared to the monthly installment plan",
      },
      {
        id: "installment",
        badge: "OPTION 2: FLEXIBLE",
        name: "Monthly Installment Plan",
        headlineAmount: "₹55,000",
        sublabel: "Split across manageable monthly payments aligned with your 6-month study",
        isPopular: false,
        breakdown: [
          {
            item: "Admission Fee",
            due: "At joining",
            amount: "₹1,000",
          },
          {
            item: "1st Payment",
            due: "Before 1st class",
            amount: "₹4,000",
          },
          {
            item: "2nd Month Installment",
            due: "On or before due date",
            amount: "₹10,000",
          },
          {
            item: "3rd Month Installment",
            due: "On or before due date",
            amount: "₹10,000",
          },
          {
            item: "4th Month Installment",
            due: "On or before due date",
            amount: "₹10,000",
          },
          {
            item: "5th Month Installment",
            due: "On or before due date",
            amount: "₹10,000",
          },
          {
            item: "6th Month Installment",
            due: "On or before due date",
            amount: "₹10,000",
          },
        ],
        totalFee: "₹55,000",
        savingsNote: "Zero interest financing across the 6-month course tenure",
      },
    ],
    terms: [
      "All fees must be paid on or before the due date.",
      "A one-time late fee of ₹250 will be charged if a payment is delayed by more than 10 days after the due date.",
      "A receipt must be collected for every payment made to the academy.",
      "Once paid, fees (including the admission fee) are non-refundable under all circumstances.",
    ],
  },

  whoCanJoinCard: {
    eyebrow: "ELIGIBILITY & CAREER PROSPECTS",
    title: "Who Can Join This Programme?",
    eligibilityBadge: "Eligibility: Plus Two or Degree, subject to academy approval",
    targetGroups: [
      {
        title: "Plus Two Graduates",
        description: "School graduates seeking an accelerated, highly practical entry into executive corporate office roles.",
      },
      {
        title: "Degree Holders & Fresh Graduates",
        description: "B.Com, BBA, BA, B.Sc, B.Tech graduates wanting high-value industry certifications and job placement.",
      },
      {
        title: "Job Seekers Building Administrative Careers",
        description: "Candidates seeking versatile office management, front-desk operations, and organizational coordination roles.",
      },
      {
        title: "Individuals Interested in HR Management",
        description: "Aspirants looking to master talent acquisition, onboarding, payroll processing, and statutory compliance.",
      },
      {
        title: "Aspiring Office Administration Professionals",
        description: "Professionals aiming to run day-to-day corporate operations, executive calendar scheduling, and procurement.",
      },
      {
        title: "Candidates Interested in Hospital Administration",
        description: "Learners seeking careers in healthcare reception, OPD/IPD desk coordination, and Hospital Information Systems.",
      },
    ],
    whyChooseAsh: [
      {
        title: "Proven Training Experience",
        description: "Decades of delivering career-focused professional training and corporate skill development.",
      },
      {
        title: "Practical, Skill-Based Learning",
        description: "Hands-on sessions designed to help students apply what they learn directly to real-world corporate situations.",
      },
      {
        title: "Industry-Relevant Curriculum",
        description: "A balanced learning approach combining essential regulatory concepts with rigorous practical execution.",
      },
      {
        title: "Integrated HR & Administration Skills",
        description: "Comprehensive dual-domain exposure unlocking careers in both People Operations and Business Administration.",
      },
      {
        title: "AI-Enabled Workplace Learning",
        description: "Leveraging modern AI productivity tools for drafting memos, SOPs, job descriptions, and structured workflows.",
      },
      {
        title: "Practical Assignments & Workplace Simulations",
        description: "Real-world context, simulated office desks, mock interviews, and live records designed to build execution confidence.",
      },
    ],
    rolesHeading: "17 Potential Job Roles for Programme Graduates",
    allRoles: [
      {
        id: "hr-exec",
        category: "hr",
        trackLabel: "Human Resources Track",
        shortTitle: "HR Executive",
        shortSalary: "₹3.5 - 6.5 LPA",
        fullTitle: "HR Executive",
        description: "Manages day-to-day employee lifecycle operations, records, attendance tracking, and HR service requests.",
        responsibilities: [
          "Maintain employee registers and verify master data integrity",
          "Process leave applications, attendance reconciliations, and HR tickets",
          "Assist in induction planning, employee queries, and policy communication",
        ],
        sectors: ["IT & Technology Companies", "Corporate Hubs & GCCs", "Retail & Hospitality Chains"],
      },
      {
        id: "corp-hr-exec",
        category: "hr",
        trackLabel: "Human Resources Track",
        shortTitle: "Corporate HR Executive",
        shortSalary: "₹4.5 - 7.5 LPA",
        fullTitle: "Corporate HR Executive",
        description: "Coordinates corporate HR initiatives, performance appraisals, internal communications, and employee engagement.",
        responsibilities: [
          "Coordinate annual and mid-year appraisal cycles and KRA/KPI tracking",
          "Draft official company notices, policy updates, and pulse survey templates",
          "Organize employee engagement activities and internal development workshops",
        ],
        sectors: ["Multinational Enterprises", "Banking & Financial Services", "Consulting & Professional Services"],
      },
      {
        id: "talent-acquisition",
        category: "hr",
        trackLabel: "Human Resources Track",
        shortTitle: "Talent Acquisition Specialist",
        shortSalary: "₹4.0 - 8.0 LPA",
        fullTitle: "Talent Acquisition Specialist",
        description: "Drives sourcing channels, job descriptions, applicant tracking (ATS), candidate screening, and structured interviews.",
        responsibilities: [
          "Conduct job analysis and draft crisp, competency-based job descriptions",
          "Screen candidate CVs against objective criteria and manage recruitment trackers",
          "Coordinate interview panels, prepare scoring rubrics, and handle candidate communications",
        ],
        sectors: ["Tech & Product Firms", "Staffing & RPO Consultancies", "Enterprise Sourcing Hubs"],
      },
      {
        id: "payroll-compliance",
        category: "hr",
        trackLabel: "Human Resources Track",
        shortTitle: "Payroll & Compliance Executive",
        shortSalary: "₹4.0 - 7.0 LPA",
        fullTitle: "Payroll & Compliance Executive",
        description: "Calculates CTC components, gross/net salary, statutory PF/ESI/TDS deductions, and generates payslips.",
        responsibilities: [
          "Execute step-by-step monthly payroll calculations and attendance reconciliation",
          "Maintain statutory compliance checklists (PF, ESI, TDS, Gratuity, POSH awareness)",
          "Generate error-free payslips and maintain transparent audit trails",
        ],
        sectors: ["Manufacturing & Engineering Firms", "Healthcare & Hospital Chains", "Audit & Payroll Consultancies"],
      },
      {
        id: "office-admin",
        category: "admin",
        trackLabel: "Administration Track",
        shortTitle: "Office Administrator",
        shortSalary: "₹3.2 - 5.5 LPA",
        fullTitle: "Office Administrator",
        description: "Supervises general office operations, workflow mapping, SOP implementation, and workplace ethics.",
        responsibilities: [
          "Develop and maintain standard operating procedures (SOPs) and organization charts",
          "Supervise office facilities, shared document storage, and access permissions",
          "Coordinate cross-departmental administrative workflows and resolve bottlenecks",
        ],
        sectors: ["Corporate Headquarters", "Logistics & Supply Chain", "Educational Institutions"],
      },
      {
        id: "admin-assistant",
        category: "admin",
        trackLabel: "Administration Track",
        shortTitle: "Administrative Assistant",
        shortSalary: "₹2.8 - 4.5 LPA",
        fullTitle: "Administrative Assistant",
        description: "Supports executive calendars, meeting agendas and minutes, formal memos, and digital filing.",
        responsibilities: [
          "Draft business letters, notices, memos, and team meeting agendas",
          "Record accurate meeting minutes and track action owners through closure",
          "Maintain digital folder structures, naming conventions, and file archives",
        ],
        sectors: ["Corporate Offices", "Law & Accounting Firms", "Government & NGO Projects"],
      },
      {
        id: "hospital-front-office",
        category: "hospital",
        trackLabel: "Healthcare Administration Track",
        shortTitle: "Hospital Front Office Executive",
        shortSalary: "₹3.0 - 5.2 LPA",
        fullTitle: "Hospital Front Office Executive",
        description: "Welcomes patients, handles front-desk hospital coordination, OPD/IPD scheduling, and patient privacy.",
        responsibilities: [
          "Manage OPD patient registration, appointment slots, and visiting enquiries",
          "Route patients to appropriate hospital departments with high courtesy and empathy",
          "Maintain strict medical record confidentiality under healthcare guidelines",
        ],
        sectors: ["Multi-Speciality Hospitals", "Super-Speciality Healthcare Centers", "Diagnostic & Polyclinic Hubs"],
      },
      {
        id: "hospital-admin-assistant",
        category: "hospital",
        trackLabel: "Healthcare Administration Track",
        shortTitle: "Hospital Administration Assistant",
        shortSalary: "₹3.2 - 5.8 LPA",
        fullTitle: "Hospital Administration Assistant",
        description: "Assists non-clinical operations, hospital directory routing, HIS entry, and administrative checklists.",
        responsibilities: [
          "Navigate Hospital Information Systems (HIS) for administrative records and bed allocation",
          "Coordinate patient enquiry registers and non-clinical escalation workflows",
          "Ensure statutory compliance awareness for healthcare facilities and administrative documentation",
        ],
        sectors: ["Private & Charitable Hospitals", "Medical Research Colleges", "Health Insurance TPA Desks"],
      },
      {
        id: "doc-mis-assistant",
        category: "admin",
        trackLabel: "Administration Track",
        shortTitle: "Documentation & MIS Assistant",
        shortSalary: "₹3.0 - 5.0 LPA",
        fullTitle: "Documentation & MIS Assistant",
        description: "Maintains operational Excel spreadsheets, pivot tables, headcount metrics, and executive reports.",
        responsibilities: [
          "Clean raw business data, remove duplicates, and build summary tables",
          "Construct 1-page HR and operational MIS dashboards with visual charts",
          "Manage document control registers, versioning, and retention schedules",
        ],
        sectors: ["Data Operations Centers", "Corporate Management Hubs", "Financial & Advisory Institutions"],
      },
      {
        id: "hr-assistant",
        category: "hr",
        trackLabel: "Human Resources Track",
        shortTitle: "HR Assistant",
        shortSalary: "₹2.8 - 4.8 LPA",
        fullTitle: "HR Assistant",
        description: "Coordinates pre-joining document checklists, onboarding logistics, BGV tracking, and grievance logs.",
        responsibilities: [
          "Collect and verify joining documents from new hires against checklists",
          "Prepare induction kits, system access requests, and welcome emails",
          "Assist in logging and acknowledging employee grievances with neutral notes",
        ],
        sectors: ["Growing Startups", "IT Services & BPOs", "Retail Corporations"],
      },
      {
        id: "admission-manager",
        category: "management",
        trackLabel: "Operations Track",
        shortTitle: "Admission Manager",
        shortSalary: "₹3.8 - 6.5 LPA",
        fullTitle: "Admission Manager",
        description: "Manages student and candidate intake pipelines, enquiry registers, counselling calls, and fee records.",
        responsibilities: [
          "Manage prospective applicant registers, follow-up schedules, and response limits",
          "Conduct professional counselling calls and clarify course syllabi & fee schedules",
          "Ensure fee receipts, registration documentation, and enrollment verification",
        ],
        sectors: ["Professional Training Academies", "Private Universities & Colleges", "EdTech Companies"],
      },
      {
        id: "relationship-manager",
        category: "management",
        trackLabel: "Operations Track",
        shortTitle: "Relationship Manager",
        shortSalary: "₹4.0 - 7.0 LPA",
        fullTitle: "Relationship Manager",
        description: "Nurtures corporate partnerships, client communication channels, and grievance resolution pathways.",
        responsibilities: [
          "Serve as primary touchpoint for institutional and enterprise client communications",
          "Ensure prompt resolution of client enquiries and track satisfaction metrics",
          "Build multi-channel communication scripts across phone, email, and meetings",
        ],
        sectors: ["Corporate Services Providers", "Financial & Insurance Desks", "Business Consulting Agencies"],
      },
      {
        id: "requirements-coordinator",
        category: "management",
        trackLabel: "Operations Track",
        shortTitle: "Requirements Coordinator",
        shortSalary: "₹3.5 - 6.0 LPA",
        fullTitle: "Requirements Coordinator",
        description: "Bridges departmental resource requisitions, vendor proposals, procurement quotes, and purchase orders.",
        responsibilities: [
          "Intake staffing and operational supply requisitions from department heads",
          "Obtain and compare competitive vendor quotes using price, quality, and lead time",
          "Maintain purchase order logs, delivery checklists, and invoice matching",
        ],
        sectors: ["Supply Chain & Procurement", "Large Corporate Offices", "Contracting & Facilities Firms"],
      },
      {
        id: "office-manager",
        category: "management",
        trackLabel: "Operations Track",
        shortTitle: "Office Manager",
        shortSalary: "₹4.5 - 8.0 LPA",
        fullTitle: "Office Manager",
        description: "Directs office budgets, petty cash registers, inventory stock ledgers, and staff conduct policies.",
        responsibilities: [
          "Oversee office inventory stock ledgers, consumable tracking, and asset registers",
          "Manage petty cash disbursements, expense vouchers, and monthly reconciliations",
          "Enforce office conduct guidelines, safety measures, and escalation protocols",
        ],
        sectors: ["Mid to Large Enterprise Branches", "Professional Firms", "Regional Corporate Offices"],
      },
      {
        id: "office-coordinator",
        category: "admin",
        trackLabel: "Administration Track",
        shortTitle: "Office Coordinator",
        shortSalary: "₹3.2 - 5.5 LPA",
        fullTitle: "Office Coordinator",
        description: "Coordinates shared calendars, meeting-room bookings, visitor registers, and equipment service logs.",
        responsibilities: [
          "Manage shared calendars, resolve scheduling conflicts, and arrange conference rooms",
          "Log reception visitor registers and telephone message slips accurately",
          "Track equipment maintenance logs and vendor service tickets to closure",
        ],
        sectors: ["Co-working & Business Centers", "Tech Incubators", "Corporate Branch Networks"],
      },
      {
        id: "office-supervisor",
        category: "admin",
        trackLabel: "Administration Track",
        shortTitle: "Office Supervisor",
        shortSalary: "₹3.6 - 6.2 LPA",
        fullTitle: "Office Supervisor",
        description: "Supervises front-desk operations, support staff, document audits, and service delivery standards.",
        responsibilities: [
          "Conduct weekly document audits and enforce filing naming standards",
          "Supervise reception, pantry, and housekeeping service delivery standards",
          "Monitor attendance registers, shift timings, and incident logs",
        ],
        sectors: ["Facilities Management Companies", "Corporate Campuses", "Hospitality & Convention Centers"],
      },
      {
        id: "business-admin",
        category: "management",
        trackLabel: "Operations Track",
        shortTitle: "Business Administration",
        shortSalary: "₹4.2 - 7.5 LPA",
        fullTitle: "Business Administration Executive",
        description: "Integrates Google Workspace, Form-to-Sheet CRM flows, invoice workflows (Zoho Books), and AI productivity.",
        responsibilities: [
          "Design automated Form-to-Sheet enquiry intake and lead management trackers",
          "Generate sales invoices, customer receipts, and expense logs using modern accounting tools",
          "Leverage Generative AI for rapid policy drafting, memo creation, and prompt workflows",
        ],
        sectors: ["Tech & SME Businesses", "E-Commerce & Digital Agencies", "Trading & Export Enterprises"],
      },
    ],
  },

  competenciesCard: {
    eyebrow: "BALANCED INDUSTRY CURRICULUM",
    title: "Core Competencies & Functional Domains",
    subtitle:
      "Vetted by senior industry professionals to combine foundational office systems, core HR functions, and modern tech integration.",
    items: [
      {
        id: "office-admin-foundations",
        iconType: "architecture",
        title: "Office Administration & SOPs",
        description:
          "Mastering organizational hierarchy, RACI workflows, standard operating procedure (SOP) drafting, and administrative controls.",
      },
      {
        id: "front-office-comm",
        iconType: "sourcing",
        title: "Front Office & Corporate Communication",
        description:
          "Visitor logs, telephone etiquette, message taking, appointment calendars, and professional purpose-first email writing.",
      },
      {
        id: "digital-docs-filing",
        iconType: "compliance",
        title: "Digital Documentation & Document Control",
        description:
          "Google Docs, Word memos, notices, meeting agendas/minutes, action tracking, shared drive permissions, and version naming.",
      },
      {
        id: "spreadsheets-inventory",
        iconType: "payroll",
        title: "Spreadsheets, Operations & Inventory",
        description:
          "Excel/Sheets data validation, formulas (SUM/AVG/COUNT/IF), stock ledgers, closing balances, and expense trackers.",
      },
      {
        id: "core-hr-talent",
        iconType: "hris",
        title: "Talent Acquisition & Lifecycle Management",
        description:
          "Job analysis, job descriptions, ATS tracking, CV screening rubrics, structured interviews, offer rollout, and onboarding kits.",
      },
      {
        id: "payroll-statutory",
        iconType: "compliance",
        title: "Payroll Calculations & Statutory Compliance",
        description:
          "CTC breakups, allowances, gross-to-net calculations, payslip generation, and awareness of PF, ESI, TDS, Gratuity, and POSH.",
      },
      {
        id: "applied-hospital-admin",
        iconType: "hospital",
        title: "Applied Hospital Administration",
        description:
          "Hospital department directory, OPD/IPD patient journey, non-clinical appointment registration, HIS awareness, and patient privacy.",
      },
      {
        id: "ai-digital-productivity",
        iconType: "ai",
        title: "AI-Assisted Administration & Digital Tools",
        description:
          "Task-specific AI prompting for drafting SOPs/emails, fact & privacy verification, Form-to-Sheet CRM flows, and Zoho Books awareness.",
      },
    ],
  },

  snapshotCard: {
    title: "Program Snapshot",
    badge: "ASH ACADEMY CERTIFIED",
    rows: [
      {
        label: "Duration",
        value: "6 Months (24 Weeks | 120 Days)",
        valueColor: "blue",
      },
      {
        label: "Timings",
        value: "Mon – Fri • 9:30 AM – 3:30 PM",
        valueColor: "default",
      },
      {
        label: "Daily Hours",
        value: "4 Hr 45 Min Class Time / Day",
        valueColor: "default",
      },
      {
        label: "One-Time Fee",
        value: "₹50,000 (Save ₹5,000)",
        valueColor: "green",
      },
      {
        label: "Installment Fee",
        value: "₹55,000 (₹10k / Month)",
        valueColor: "default",
      },
      {
        label: "Eligibility",
        value: "Plus Two or Degree",
        valueColor: "default",
      },
      {
        label: "Placement Support",
        value: "100% Dedicated Support",
        valueColor: "green",
      },
      {
        label: "Campus",
        value: "OPS Mall, Vailathur, Tirur",
        valueColor: "blue",
      },
    ],
  },

  admissionsCard: {
    ribbonText: "ADMISSIONS OPEN",
    eyebrow: "ADMISSIONS DESK",
    title: "Enquire for Upcoming Batch",
    description:
      "Get the full 24-week timetable, fee installment plan, and speak directly with an admissions advisor.",
    nameLabel: "Full Name *",
    namePlaceholder: "e.g. Fathima / Rahul",
    phoneLabel: "Mobile / WhatsApp Number *",
    phonePlaceholder: "+91 8921 365 750",
    qualificationLabel: "Current Qualification *",
    qualifications: [
      "Plus Two Graduate (Higher Secondary)",
      "Degree Graduate (B.Com / BBA / BA / B.Sc / B.Tech)",
      "Post Graduate (MBA / M.Com / MSW / MA)",
      "Final Year Degree Student",
      "Working Professional (Transitioning to HR/Admin)",
      "Diploma / Other Qualification",
    ],
    batchLabel: "Class Schedule & Mode",
    batches: [
      "Regular Weekday (Mon–Fri • 9:30 AM – 3:30 PM)",
      "Tirur Campus (OPS Mall, Vailathur)",
      "Calicut Campus (HiLite Business Park)",
    ],
    submitLabel: "Enquire Now & Get Syllabus",
    whatsappLabel: "Chat on WhatsApp (+91 8921 365 750)",
    whatsappHref: "https://wa.me/918921365750",
    successMessage:
      "Thank you! Your enquiry has been received. Our counselor will contact you shortly.",
  },

  syllabusCard: {
    eyebrow: "DETAILED 24-WEEK COURSE ROADMAP",
    title: "Comprehensive Month-by-Month & Week-by-Week Syllabus",
    subtitle:
      "120 Days of intensive theory, practical exercises, and workplace-based training with mandatory weekly portfolio submissions.",
    downloadLabel: "Download Complete 24-Week Timetable PDF",
    months: [
      {
        id: "month-1",
        monthNumber: 1,
        monthLabel: "Month 1",
        badgeVariant: "navy",
        title: "Office Administration Foundations",
        subtitle: "Office Roles, Workflows, Front Office, Documentation & Spreadsheets",
        defaultOpen: true,
        weeks: [
          {
            weekNumber: 1,
            weekLabel: "Week 1",
            title: "Administration Fundamentals",
            topics: "Office roles, organization structures, office hierarchy, reporting lines, RACI ownership, work ethics, workflows, and SOP writing.",
            outcome: "Learners can explain common office roles, map a simple workflow, identify responsibility, and prepare an org chart and SOP.",
            submission: "Organisation chart, workflow map and SOP",
          },
          {
            weekNumber: 2,
            weekLabel: "Week 2",
            title: "Front Office & Communication",
            topics: "Reception desk duties, visitor logs, telephone etiquette, message slips, appointment calendars, rescheduling, and business emails.",
            outcome: "Learners can receive visitors, handle calls professionally, record messages, schedule appointments, and draft clear business emails.",
            submission: "Front office communication pack",
          },
          {
            weekNumber: 3,
            weekLabel: "Week 3",
            title: "Documentation & Digital Office",
            topics: "Word/Google Docs, memos, notices, Drive filing structure, naming conventions, permissions, meeting agendas/minutes, and presentations.",
            outcome: "Learners can produce formatted office documents, organize digital files safely, and record meeting decisions accurately.",
            submission: "Office documentation portfolio",
          },
          {
            weekNumber: 4,
            weekLabel: "Week 4",
            title: "Spreadsheets & Office Operations",
            topics: "Excel/Google Sheets data entry, basic formulas (SUM, AVERAGE, COUNT, MIN/MAX), attendance registers, expense logs, stock registers, and data validation.",
            outcome: "Learners can maintain clean spreadsheets, use essential formulas, and build simple operational trackers.",
            submission: "Office operations workbook",
          },
        ],
        footerBadges: [
          { label: "4 Weekly Portfolios", variant: "blue" },
          { label: "Office Systems Tested", variant: "green" },
        ],
      },
      {
        id: "month-2",
        monthNumber: 2,
        monthLabel: "Month 2",
        badgeVariant: "navy",
        title: "Core HR Administration",
        subtitle: "Employee Lifecycle, Recruitment, Offer Letters, Onboarding & HR Policies",
        defaultOpen: false,
        weeks: [
          {
            weekNumber: 5,
            weekLabel: "Week 5",
            title: "HR Fundamentals & Workforce Planning",
            topics: "HR functions vs broader HR management, employee lifecycle (pre-joining to exit), master data fields, org design, headcount, and HR request workflows.",
            outcome: "Learners can describe core HR functions, map the employee lifecycle, and maintain a basic employee register.",
            submission: "HR foundation file",
          },
          {
            weekNumber: 6,
            weekLabel: "Week 6",
            title: "Recruitment & Selection",
            topics: "Job analysis, drafting job descriptions, sourcing channels, candidate trackers (ATS), CV screening criteria, interview invitations, and scoring rubrics.",
            outcome: "Learners can prepare recruitment documents, track applicants, and coordinate a structured interview process.",
            submission: "Recruitment portfolio",
          },
          {
            weekNumber: 7,
            weekLabel: "Week 7",
            title: "Offer Letters & Onboarding",
            topics: "Offer vs appointment letters, joining forms, document collection & tracking, half-day induction agenda, BGV awareness, and system access setup.",
            outcome: "Learners can assemble a fictional joining file and coordinate a structured onboarding process.",
            submission: "Onboarding documentation kit",
          },
          {
            weekNumber: 8,
            weekLabel: "Week 8",
            title: "Attendance, Leave & HR Policies",
            topics: "Attendance systems, exception handling, leave types & leave registers, employee handbook structure, and employee grievance intake & routing.",
            outcome: "Learners can maintain attendance/leave records, communicate policy info, and route grievances appropriately.",
            submission: "HR policy and leave file",
          },
        ],
        footerBadges: [
          { label: "Full Onboarding Kit", variant: "blue" },
          { label: "Mock Interviews Conducted", variant: "green" },
        ],
      },
      {
        id: "month-3",
        monthNumber: 3,
        monthLabel: "Month 3",
        badgeVariant: "navy",
        title: "Payroll, Compliance & HR Systems",
        subtitle: "CTC Breakup, Payroll Calculations, Statutory PF/ESI/TDS, Appraisal & HRMS",
        defaultOpen: false,
        weeks: [
          {
            weekNumber: 9,
            weekLabel: "Week 9",
            title: "Payroll Fundamentals",
            topics: "Salary terminology, CTC vs take-home, fixed/variable earnings, allowances, statutory deductions, net pay calculation sequence, payslip structure & reconciliation.",
            outcome: "Learners can distinguish salary components and calculate basic payroll examples with manual cross-checks.",
            submission: "Payroll calculation workbook",
          },
          {
            weekNumber: 10,
            weekLabel: "Week 10",
            title: "Statutory HR Compliance Basics",
            topics: "Compliance mindset, compliance calendar, PF and ESI awareness, TDS deduction concepts, gratuity awareness, POSH awareness & safe escalation pathway.",
            outcome: "Learners can identify common compliance areas and maintain a basic reminder/checklist file without giving legal advice.",
            submission: "Compliance checklist pack",
          },
          {
            weekNumber: 11,
            weekLabel: "Week 11",
            title: "Performance & Employee Development",
            topics: "KRA and KPI tables, performance review cycles, self & manager appraisal forms, feedback conversations, performance improvement plans (PIP), and training needs analysis.",
            outcome: "Learners can support appraisal administration and prepare basic performance and development templates.",
            submission: "Performance management toolkit",
          },
          {
            weekNumber: 12,
            weekLabel: "Week 12",
            title: "HRMS & Employee Data",
            topics: "HRMS purpose and modules, awareness of Zoho People/Keka/greytHR, employee master data fields, role-based access, leave approval flows, and data quality audits.",
            outcome: "Learners can explain HRMS purpose and simulate employee entry, leave approval, and record updates in a safe training environment.",
            submission: "HRMS workflow file",
          },
        ],
        footerBadges: [
          { label: "Zero-Error Payroll Logic", variant: "blue" },
          { label: "Zoho People & Keka Awareness", variant: "amber" },
        ],
      },
      {
        id: "month-4",
        monthNumber: 4,
        monthLabel: "Month 4",
        badgeVariant: "navy",
        title: "Advanced Administration & Reporting",
        subtitle: "Procurement, Vendor Coordination, HR MIS Dashboards, Engagement & Exit",
        defaultOpen: false,
        weeks: [
          {
            weekNumber: 13,
            weekLabel: "Week 13",
            title: "Advanced Office Administration",
            topics: "Calendar & resource coordination, meeting logistics & action follow-up emails, procurement & vendor quotes comparison, purchase requests, and office asset registers.",
            outcome: "Learners can coordinate office activities, maintain procurement records, and improve basic operational processes.",
            submission: "Office coordination portfolio",
          },
          {
            weekNumber: 14,
            weekLabel: "Week 14",
            title: "HR Reporting & MIS",
            topics: "HR MIS metric definitions (headcount, vacancies, time-to-fill, attendance rate), data cleaning (COUNTIF/SUMIF), Pivot tables, and 1-page HR dashboard design.",
            outcome: "Learners can summarize HR data and create a simple dashboard with clearly labelled metrics.",
            submission: "HR MIS dashboard",
          },
          {
            weekNumber: 15,
            weekLabel: "Week 15",
            title: "HR Communication & Employee Engagement",
            topics: "HR communication principles, notices & holiday announcements, pulse survey design, grievance coordination logs, and monthly employee engagement calendars.",
            outcome: "Learners can draft clear HR communications and plan simple engagement activities with feedback tracking.",
            submission: "HR communication pack",
          },
          {
            weekNumber: 16,
            weekLabel: "Week 16",
            title: "Employee Exit & Records Management",
            topics: "Resignation intake workflow, notice periods, handover & knowledge transfer checklists, departmental exit clearance, asset return, and records retention/confidentiality.",
            outcome: "Learners can coordinate an employee exit and maintain a complete, controlled records index.",
            submission: "Exit and records file",
          },
        ],
        footerBadges: [
          { label: "MIS Dashboards Built", variant: "blue" },
          { label: "Complete Offboarding Workflow", variant: "green" },
        ],
      },
      {
        id: "month-5",
        monthNumber: 5,
        monthLabel: "Month 5",
        badgeVariant: "gold",
        title: "Applied Administration Settings",
        subtitle: "Basic Hospital Administration, Enquiry Handling, Office Accounts & AI Tools",
        defaultOpen: true,
        weeks: [
          {
            weekNumber: 17,
            weekLabel: "Week 17",
            title: "Basic Hospital Administration",
            topics: "Hospital structure & department directory, administrative service points, OPD/IPD patient journey overview, non-clinical appointment registration, HIS awareness, and medical record confidentiality.",
            outcome: "Learners can describe basic hospital departments and practise a non-clinical reception/registration workflow using fictional data.",
            submission: "Basic hospital administration file",
          },
          {
            weekNumber: 18,
            weekLabel: "Week 18",
            title: "Enquiry Handling & Follow-Up",
            topics: "Enquiry intake channels, response boundaries (answer, research, refer, escalate), telephone/email/in-person scripts, enquiry registers, and overdue follow-up schedules.",
            outcome: "Learners can record and respond to routine enquiries accurately and escalate questions they cannot safely answer.",
            submission: "Enquiry handling register",
          },
          {
            weekNumber: 19,
            weekLabel: "Week 19",
            title: "Office Accounts & Inventory Basics",
            topics: "Invoice and receipt fields, petty cash registers & expense vouchers, purchase requests & approval trails, stock ledgers, and consumable vs tracked asset management.",
            outcome: "Learners can prepare sample office transaction records and maintain a basic stock ledger without acting as an accountant.",
            submission: "Office accounts and inventory file",
          },
          {
            weekNumber: 20,
            weekLabel: "Week 20",
            title: "AI-Assisted Administration",
            topics: "Generative AI literacy & limits, structured prompting (role, task, context, format, constraints), AI-assisted memo/SOP/email creation, fact verification, privacy, and bias checks.",
            outcome: "Learners can use AI as a drafting aid, verify output manually, and protect confidential information.",
            submission: "AI-assisted administration portfolio",
          },
        ],
        footerBadges: [
          { label: "Healthcare Admin Exposure", variant: "amber" },
          { label: "AI Prompt Engineering", variant: "green" },
        ],
      },
      {
        id: "month-6",
        monthNumber: 6,
        monthLabel: "Month 6",
        badgeVariant: "gold",
        title: "Reporting, Digital Systems, Career Readiness & Capstone",
        subtitle: "Data Analysis, Google Workspace, CRM Workflows, CV/Interviews & Final Viva",
        defaultOpen: true,
        weeks: [
          {
            weekNumber: 21,
            weekLabel: "Week 21",
            title: "Data Analysis & Management Reporting",
            topics: "Operational data to management questions, data cleaning, pivot tables, chart selection, 3-point management summaries (finding, evidence, implication), and Power BI awareness.",
            outcome: "Learners can prepare a concise, accurate management report from HR and office data.",
            submission: "Management reporting portfolio",
          },
          {
            weekNumber: 22,
            weekLabel: "Week 22",
            title: "Digital Systems & Productivity",
            topics: "Google Workspace collaboration (Docs, Sheets, Drive, Forms, Calendar), Form-to-Sheet CRM enquiry workflows, and invoice workflows with Zoho Books awareness.",
            outcome: "Learners can connect a form to a spreadsheet, coordinate calendars, and understand digital-office workflows.",
            submission: "Digital office workflow",
          },
          {
            weekNumber: 23,
            weekLabel: "Week 23",
            title: "Career Readiness & Professional Skills",
            topics: "Workplace English, professional phrasing, 60-second self-introduction, evidence-based CV writing, LinkedIn profile optimization, STAR-method interview practice, and task portfolio presentation.",
            outcome: "Learners can present their skills honestly, communicate professionally, and prepare an industry-ready job-application portfolio.",
            submission: "Career readiness portfolio",
          },
          {
            weekNumber: 24,
            weekLabel: "Week 24",
            title: "Integrated HR Administration Capstone & Viva",
            topics: "Comprehensive end-to-end simulated company case: recruitment, onboarding, office calendar, attendance & payroll processing, HR MIS dashboard, enquiry response, audit, and final presentation.",
            outcome: "Learners demonstrate an end-to-end administrative workflow and defend accuracy, confidentiality, and escalation decisions in a final viva.",
            submission: "Final HR Administration portfolio and viva",
          },
        ],
        footerBadges: [
          { label: "Final Capstone Portfolio", variant: "green" },
          { label: "Viva Defense & Career Ready", variant: "blue" },
        ],
      },
    ],
    extraTraining: {
      title: "Bonus Training Module — Basic Social Media Page Handling",
      subtitle: "Optional sessions outside the 24 core weeks to equip administrators with corporate digital presence skills",
      note: "Focuses on organic brand communication and respectful comment handling. No paid ads, ad spending, or campaign optimization.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Business Page Setup & Governance",
          desc: "Business page creation, account ownership, roles, and administrative permissions.",
        },
        {
          sessionNumber: 2,
          title: "Approved Post Uploads & Captions",
          desc: "Publishing approved assets, drafting professional captions, and adhering to brand tone.",
        },
        {
          sessionNumber: 3,
          title: "Weekly Content Calendar",
          desc: "Scheduling posts, planning weekly content calendars, and organizing publication slots.",
        },
        {
          sessionNumber: 4,
          title: "Comment & Enquiry Responses",
          desc: "Replying politely to public comments/direct messages and escalating sensitive customer enquiries.",
        },
        {
          sessionNumber: 5,
          title: "Activity Reports & Content Logs",
          desc: "Maintaining simple weekly engagement activity reports and digital content audit logs.",
        },
      ],
    },
  },

  accreditationsCard: {
    eyebrow: "INSTITUTIONAL ACCREDITATIONS",
    items: [
      { id: "iso", badge: "ISO", label: "ISO 9001:2015 Certified" },
      { id: "cpd", badge: "CPD", label: "CPD UK Accredited" },
      { id: "elaci", badge: "E", label: "ELACI Approved" },
      { id: "industry", badge: "★", label: "200+ Recruiters" },
    ],
  },

  softwareSandboxCard: {
    eyebrow: "HANDS-ON TOOL EXPERIENCE",
    title: "Live Corporate Software, HRMS & AI Sandbox",
    subtitle:
      "Learners master approved cloud platforms and practical digital tools used in contemporary HR departments and modern offices.",
    tools: [
      {
        id: "zoho-people",
        badgeText: "Zoho",
        badgeType: "zoho",
        title: "Zoho People & Recruit",
        subtitle: "Employee master data, leave approvals, shifts & cloud HR workflows",
        tag: "HRMS Platform",
      },
      {
        id: "keka-greyt",
        badgeText: "Keka",
        badgeType: "keka",
        title: "Keka & greytHR Awareness",
        subtitle: "Modern automated attendance systems, salary structures & self-service desks",
        tag: "HR & Attendance",
      },
      {
        id: "zoho-books",
        badgeText: "Books",
        badgeType: "zohobooks",
        title: "Zoho Books & Invoicing",
        subtitle: "Request-to-invoice workflows, supplier/customer records & payment status",
        tag: "Office Accounts",
      },
      {
        id: "google-workspace",
        badgeText: "Drive",
        badgeType: "workspace",
        title: "Google Workspace & Docs",
        subtitle: "Shared team drives, version controls, Form-to-Sheet CRM & meeting calendars",
        tag: "Digital Office",
      },
      {
        id: "excel-advanced",
        badgeText: "XLS",
        badgeType: "workspace",
        title: "Advanced Excel & Spreadsheets",
        subtitle: "SUM/AVERAGE/COUNTIF, data validation, stock ledgers & 1-page MIS dashboards",
        tag: "Operations & MIS",
      },
      {
        id: "gen-ai",
        badgeText: "AI",
        badgeType: "ai",
        title: "Generative AI Drafting",
        subtitle: "Structured prompting for memos, JDs, SOPs, fact-checking & privacy guardrails",
        tag: "Workplace AI",
      },
    ],
  },

  placementSupportCard: {
    eyebrow: "PLACEMENT & CAREER SUPPORT",
    tagline: "LEARN — GROW — GET PLACED",
    title: "100% Placement Support from Day One",
    description:
      "We support learners throughout their career preparation journey, helping them build confidence, strengthen professional skills, and prepare for relevant employment opportunities in HR, Administration, and Healthcare sectors.",
    badge: "100% PLACEMENT SUPPORT",
    stats: [
      { value: "200+", label: "Students Trained" },
      { value: "100+", label: "Student Placements" },
      { value: "100%", label: "Placement Assistance" },
      { value: "17+", label: "Potential Job Roles" },
    ],
    pillars: [
      {
        title: "Career Guidance & Job Search Assistance",
        description:
          "Personalized direction aligning your strengths with corporate HR, Office Admin, and Hospital operations tracks.",
      },
      {
        title: "Resume Preparation & Profile Development",
        description:
          "Evidence-based accomplishment writing, professional formatting, and ATS-optimized CV drafting tailored to entry-level roles.",
      },
      {
        title: "Mock Interviews & Interview Preparation",
        description:
          "Extensive STAR-method behavioral question drills, body language coaching, and confident two-minute portfolio presentations.",
      },
      {
        title: "Professional Communication & Workplace Readiness",
        description:
          "Workplace English training, polite escalation phrasing, meeting etiquette, and corporate code of conduct.",
      },
      {
        title: "Guidance on Suitable Job Opportunities",
        description:
          "Targeted recommendations matching your qualifications (Plus Two or Degree) with verified openings in Kerala and GCC.",
      },
      {
        title: "Placement Assistance Through Relevant Employer Connections",
        description:
          "Direct employer introductions and interview coordination across our network of verified hiring partner firms.",
      },
    ],
  },

  mentorshipCard: {
    eyebrow: "EXPERT INSTRUCTION & GUIDANCE",
    title: "Professional Mentorship from Industry Practitioners",
    mentors: [
      {
        id: "fazalul-rahiman",
        name: "Fazalul Rahiman",
        role: "CEO & Head Director",
        bio: "15+ Years experience in corporate governance, workforce skill development, and strategic leadership.",
        imageSrc: "/images/img_7.jpg",
        imageAlt: "Fazalul Rahiman - CEO & Head Director",
      },
      {
        id: "senior-trainer",
        name: "Adv. Meera Nambiar",
        role: "HR & Labour Compliance Advisor",
        bio: "Specialist in Indian labor codes, POSH frameworks, statutory compliance, and corporate employee relations.",
        imageSrc: "/images/img_9.jpg",
        imageAlt: "Adv. Meera Nambiar - HR & Labour Compliance Advisor",
      },
    ],
  },

  faqCard: {
    eyebrow: "INSTITUTIONAL CLARITY",
    title: "Frequently Asked Questions",
    items: [
      {
        id: "faq-eligibility",
        question: "What is the eligibility criteria to join this programme?",
        answer:
          "Eligibility is Plus Two (Higher Secondary) or Degree in any stream (B.Com, BBA, BA, B.Sc, B.Tech), subject to academy approval. The course is crafted for fresh graduates, job seekers, aspiring office administrators, and those targeting HR or hospital front-office careers.",
      },
      {
        id: "faq-fee",
        question: "What is the fee structure and are installment options available?",
        answer:
          "Yes! Option 1 is a discounted One-Time Payment of ₹50,000 (₹1,000 admission fee at joining + ₹49,000 balance before the 1st class). Option 2 is a Monthly Installment Plan totaling ₹55,000 (₹1,000 admission fee + ₹4,000 1st payment before 1st class + ₹10,000/month for Months 2 through 6).",
      },
      {
        id: "faq-timing",
        question: "What are the daily class timings and weekly structure?",
        answer:
          "The course runs Monday to Friday, 9:30 AM – 3:30 PM (total 24 weeks / 120 days). Each day features 3 distinct sessions (Topic Teaching, Trainer Activity & Guided Practice, and Independent Task Execution) with tea and lunch breaks totaling 4 hr 45 min of class time per day.",
      },
      {
        id: "faq-hospital-admin",
        question: "Does the course cover Hospital Administration?",
        answer:
          "Yes! Month 5 includes dedicated Basic Hospital Administration training covering hospital department directories, OPD/IPD patient journey mapping, non-clinical appointment registration, Hospital Information System (HIS) awareness, and strict medical record confidentiality.",
      },
      {
        id: "faq-ai-tools",
        question: "How is Artificial Intelligence integrated into the training?",
        answer:
          "Students learn AI-Assisted Administration in Month 5: prompt engineering (role, task, context, constraints) for drafting memos, SOPs, and emails, combined with mandatory human verification for facts, calculations, and data privacy guardrails.",
      },
      {
        id: "faq-placement",
        question: "What placement support does ASH Academy provide?",
        answer:
          "We offer 100% Placement Support with a proven track record of 200+ students trained and 100+ placements. Our placement cell provides career guidance, resume crafting, mock interview drills, workplace readiness, and direct employer connections for 17+ potential job roles.",
      },
    ],
  },

  bottomBanner: {
    eyebrow: "ADMISSIONS HELPLINE & CAMPUS DESK",
    headingLine1: "Start Your Journey in HR &",
    headingLine2: "Administration Management",
    description:
      "Speak directly with our senior admissions team at OPS Mall, Vailathur, Tirur. Reserve your seat for the upcoming batch today.",
    ctaLabel: "ENQUIRE NOW",
    counselorImage: {
      src: "/images/img_9.jpg",
      alt: "ASH Academy Admissions Advisor",
    },
    statusBadge: "Admissions Open",
    rightHeading: "CONTACT US FOR BATCH DATES & FEE DETAILS:",
    academyName: "ASH Academy",
    rightDescription:
      "Transforming learners into confident, job-ready HR & Administrative professionals.",
    address: "2nd Floor, OPS Mall, Vailathur, Ponmundam, Tirur Road, Malappuram, Kerala, India (676106)",
    phones: ["+91 8921 365 750", "+91 9337 009 400"],
    phoneHref: "tel:+918921365750",
    email: "connect@ashacademy.ai",
    emailHref: "mailto:connect@ashacademy.ai",
    website: "www.ashacademy.ai",
  },
};
