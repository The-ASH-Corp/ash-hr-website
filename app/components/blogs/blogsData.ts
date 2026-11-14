export interface BlogBreadcrumbItem {
  label: string;
  href?: string;
}

export interface BlogStatItem {
  id: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  imageSrc: string;
  imageAlt: string;
  author: BlogAuthor;
  date: string;
  readTime: string;
  featured?: boolean;
  badge?: string;
}

export interface BlogsPageData {
  hero: {
    breadcrumbs: BlogBreadcrumbItem[];
    eyebrow: string;
    title: string;
    highlightWord: string;
    description: string;
    stats: BlogStatItem[];
  };
  categories: string[];
  featuredPost: BlogPostItem;
  posts: BlogPostItem[];
  sidebar: {
    searchPlaceholder: string;
    trendingTitle: string;
    trendingTopics: {
      id: string;
      title: string;
      category: string;
      readTime: string;
    }[];
    tagsTitle: string;
    popularTags: string[];
    newsletterCard: {
      eyebrow: string;
      title: string;
      description: string;
      placeholder: string;
      buttonLabel: string;
      successMessage: string;
    };
    programsCard: {
      eyebrow: string;
      title: string;
      programs: {
        name: string;
        duration: string;
        href: string;
      }[];
      ctaLabel: string;
    };
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

export const blogsData: BlogsPageData = {
  hero: {
    breadcrumbs: [{ label: "HOME", href: "/" }, { label: "OUR BLOG" }],
    eyebrow: "ASH ACADEMY EDITORIAL & CAREER INSIGHTS",
    title: "Insights, Career Guides &",
    highlightWord: "Industry Trends",
    description:
      "Explore practical articles on Human Resource Management, Statutory Labour Laws, Financial Accounting, ERP Automation, and Corporate Interview Mastery written by practicing CHROs, legal advocates, and senior mentors.",
    stats: [
      {
        id: "articles",
        numericValue: 85,
        suffix: "+",
        label: "IN-DEPTH CAREER GUIDES",
      },
      {
        id: "readers",
        numericValue: 15,
        suffix: "k+",
        label: "MONTHLY ACTIVE READERS",
      },
      {
        id: "compliance-guides",
        numericValue: 14,
        suffix: "+",
        label: "STATUTORY & ERP PLAYBOOKS",
      },
      {
        id: "practitioner-vetted",
        numericValue: 100,
        suffix: "%",
        label: "PRACTITIONER VETTED CONTENT",
      },
    ],
  },
  categories: [
    "All Articles",
    "Human Resource (HR)",
    "Labour Law & Compliance",
    "Financial Accounting",
    "Office Administration",
    "Career & Interview Tips",
  ],
  featuredPost: {
    id: "featured-hrbp-2026",
    featured: true,
    badge: "EDITOR'S PICK • FEATURED INSIGHT",
    category: "Human Resource (HR)",
    title:
      "How AI & HRIS Automation Are Redefining the Modern HR Business Partner (HRBP) Role",
    excerpt:
      "From administrative payroll processing to boardroom people analytics—discover how enterprise tools like Darwinbox, Zoho People, and live EPFO/ESIC portals are transforming HR graduates into strategic HRBPs commanding ₹6.5 – ₹12 LPA packages.",
    content: [
      "Over the past five years, the corporate Human Resource function across Tier-1 IT firms, Global Capability Centers (GCCs), and BFSI conglomerates has undergone a structural transformation. Organizations no longer hire HR professionals solely for attendance tracking or manual leave registers.",
      "Today's CHROs expect entry-level and mid-level HR executives to operate as strategic HR Business Partners (HRBPs) who combine statutory compliance accuracy with data-driven workforce analytics. Platforms such as Darwinbox, Zoho People, and SAP SuccessFactors automate routine workflows, freeing HR leaders to focus on talent retention, 9-box succession planning, and OKR alignment.",
      "At ASH Academy, our 6-Month Advanced Human Resource Management Diploma is engineered around this exact boardroom shift—combining live government portal simulations (EPFO, ESIC, TDS) with a guaranteed 60-day corporate internship so graduates step into interviews with verifiable enterprise experience.",
    ],
    keyTakeaways: [
      "Why MNCs & Global Capability Centers (GCCs) prioritize hands-on EPFO, ESIC, and TDS portal fluency over theoretical degrees.",
      "Step-by-step roadmap to transition from B.Com, BBA, BA, or MBA graduate into a high-impact HRBP role within 6 months.",
      "Top 5 HR metrics every CHRO tracks: Attrition Rate, Time-to-Hire, eNPS Pulse Score, CTC-to-Revenue Ratio, and Zero-Error Statutory Audit.",
    ],
    imageSrc: "/images/img_8.jpg",
    imageAlt: "ASH Academy HR executives discussing workforce analytics",
    author: {
      name: "Fazalul Rahiman",
      role: "CEO & Head Director",
      avatar: "/images/img_7.jpg",
    },
    date: "November 10, 2026",
    readTime: "7 Min Read",
  },
  posts: [
    {
      id: "epfo-esic-posh-checklist",
      category: "Labour Law & Compliance",
      title:
        "Mastering EPFO, ESIC & POSH Compliance: A Practical Checklist for Corporate HR Executives",
      excerpt:
        "Learn how to execute monthly ECR challan filings, UAN KYC activations, ESIC Pehchan card registrations, and constitution of Internal Complaints Committees (ICC) without audit penalties.",
      content: [
        "Statutory compliance is the backbone of enterprise risk management. A single delay in EPFO Electronic Challan-cum-Return (ECR) generation or ESIC monthly contribution filing can trigger hefty statutory interest and inspection notices.",
        "Every practicing HR professional must master the Unified EPFO Employer Portal, ESIC Insurance Desk, Professional Tax slabs, and the Prevention of Sexual Harassment (POSH) Act mandates—including drafting annual ICC reports and conducting domestic inquiries with procedural fairness.",
        "Through ASH Academy's live compliance sandbox, students practice generating real challans, calculating employer/employee PF splits, and preparing inspection-ready statutory registers.",
      ],
      keyTakeaways: [
        "Monthly due dates and calculation rules for EPFO (12% split) and ESIC (0.75% employee / 3.25% employer).",
        "Mandatory requirements for constituting a legally compliant POSH Internal Complaints Committee.",
        "How to handleFull & Final (F&F) settlements, gratuity eligibility, and bonus computations accurately.",
      ],
      imageSrc: "/images/aboutImage1.jpg",
      imageAlt: "Statutory compliance and labour law training session",
      author: {
        name: "Adv. Meera Nambiar",
        role: "Labour Law Advocate & POSH Chair",
        avatar: "/images/img_9.jpg",
      },
      date: "November 6, 2026",
      readTime: "6 Min Read",
    },
    {
      id: "ctc-structuring-automated-payroll",
      category: "Human Resource (HR)",
      title:
        "CTC Structuring & Automated Payroll Engineering: Designing Tax-Efficient Salary Packages",
      excerpt:
        "Break down Cost-to-Company (CTC) architecture, Basic-to-Allowance ratios, HRA exemptions, overtime rules, and Form 16 Part A/B generation using Advanced Excel and HRIS tools.",
      content: [
        "Designing a compliant yet tax-efficient Cost-to-Company (CTC) structure requires a deep understanding of both the New Wage Code guidelines and Income Tax TDS provisions.",
        "HR Compensation specialists must balance Basic Pay, House Rent Allowance (HRA), Special Allowances, Statutory Bonus, Employer PF/ESI contributions, and Gratuity provisioning while ensuring take-home pay remains competitive.",
        "In this guide, we walk through automated payroll sheet design using XLOOKUP, Pivot Tables, and Darwinbox payroll modules to eliminate manual calculation errors across 500+ employee rosters.",
      ],
      keyTakeaways: [
        "Structuring Basic Pay at 50% of gross remuneration in alignment with modern wage code norms.",
        "Automating LOP (Loss of Pay), overtime arrears, and TDS Form 24Q quarterly reconciliations.",
        "Step-by-step Payslip & FnF settlement sheet automation in Advanced MS Excel.",
      ],
      imageSrc: "/images/img_5.jpg",
      imageAlt: "HR payroll professionals working on compensation spreadsheets",
      author: {
        name: "Fazalul Rahiman",
        role: "CEO & Head Director",
        avatar: "/images/img_7.jpg",
      },
      date: "October 28, 2026",
      readTime: "8 Min Read",
    },
    {
      id: "tally-prime-sap-fico-gst",
      category: "Financial Accounting",
      title:
        "Tally Prime, SAP FICO & GST E-Invoicing: Essential Skills for High-Growth Finance Careers",
      excerpt:
        "Discover why corporate finance departments across Kerala and the GCC demand hands-on mastery of computerized auditing, GSTR-1/2B/3B reconciliation, and SAP ERP workflows.",
      content: [
        "Modern corporate accounting has moved far beyond manual ledger bookkeeping. Employers across manufacturing, retail, and multinational service centers require accountants who can navigate SAP FICO, Tally Prime, and real-time GST portal reconciliations.",
        "Mastering e-Way bill generation, input tax credit (ITC) matching under GSTR-2B, corporate TDS returns, and automated balance sheet finalization immediately sets candidates apart in finance interviews.",
        "ASH Academy's Post Graduate and Advanced Diploma programs in Financial Accounting immerse learners in real company audit datasets so they can manage independent corporate accounts from day one.",
      ],
      keyTakeaways: [
        "End-to-end GST portal workflow: GSTR-1, GSTR-2B ITC reconciliation, and GSTR-3B filing.",
        "Core SAP FICO transaction codes for General Ledger, Accounts Payable (AP), and Accounts Receivable (AR).",
        "Preparing MIS cash-flow forecasts and audit-ready financial statements.",
      ],
      imageSrc: "/images/img_6.jpg",
      imageAlt: "Financial accounting specialist analyzing SAP and GST reports",
      author: {
        name: "Arun Krishnan",
        role: "Senior Finance & ERP Faculty",
        avatar: "/images/aboutimg2.jpg",
      },
      date: "October 19, 2026",
      readTime: "5 Min Read",
    },
    {
      id: "talent-acquisition-boolean-sourcing",
      category: "Career & Interview Tips",
      title:
        "Top 25 Talent Acquisition & HRBP Interview Questions Asked by Tier-1 IT Firms & GCCs",
      excerpt:
        "Prepare for your next corporate HR interview with model answers covering Boolean search algorithms, ATS pipeline conversion rates, STAR behavioral interviewing, and attrition control.",
      content: [
        "Landing a role in Talent Acquisition or HR Operations at leading IT companies and Global Capability Centers requires demonstrating practical problem-solving rather than textbook definitions.",
        "Hiring managers frequently test candidates on writing live Boolean search strings for niche tech roles, reducing offer-dropouts during notice periods, and handling sensitive employee grievance scenarios.",
        "We have compiled the 25 most frequently asked competency questions from our network of 200+ corporate hiring partners, complete with structured STAR-method response frameworks.",
      ],
      keyTakeaways: [
        "Writing high-precision Boolean strings (`AND`, `OR`, `NOT`, site-specific X-Ray searches) on LinkedIn Recruiter.",
        "How to explain your 60-day internship portfolio and live statutory portal projects during final round interviews.",
        "Negotiating starting CTC packages and handling counter-offers professionally.",
      ],
      imageSrc: "/images/aboutimg3.jpg",
      imageAlt: "Corporate interview preparation and placement coaching",
      author: {
        name: "Nadia Menon",
        role: "Head of Corporate Placements",
        avatar: "/images/aboutimg4.jpg",
      },
      date: "October 11, 2026",
      readTime: "6 Min Read",
    },
    {
      id: "office-admin-excel-mis-automation",
      category: "Office Administration",
      title:
        "Executive Office Administration & MIS Reporting: Advanced MS Excel Formulas Every Manager Uses",
      excerpt:
        "From XLOOKUP and dynamic Pivot Dashboards to automated vendor billing and executive correspondence—build the digital fluency needed to run modern corporate offices.",
      content: [
        "Behind every high-performing enterprise is an agile Office Administration and MIS operations team that keeps cross-functional departments synchronized.",
        "Mastering Advanced MS Excel (XLOOKUP, INDEX-MATCH, conditional formatting, Pivot Charts), cloud workspace tools, and executive business communication enables administrators to transition into Operations Manager and Executive Assistant roles.",
        "Learn how ASH Academy trains learners on real corporate templates used by multinational offices in Kochi, Calicut, Bangalore, and Dubai.",
      ],
      keyTakeaways: [
        "10 essential Excel formulas for daily MIS reporting, attendance tracking, and inventory control.",
        "Drafting boardroom-ready executive emails, MoMs (Minutes of Meeting), and vendor SLA contracts.",
        "Career progression pathways from Front-Office Executive to Corporate Operations Lead.",
      ],
      imageSrc: "/images/aboutimg5.jpg",
      imageAlt: "Executive office administration and MIS dashboard training",
      author: {
        name: "Rahul Varma",
        role: "MIS & Operations Lead Trainer",
        avatar: "/images/img_1.jpg",
      },
      date: "October 3, 2026",
      readTime: "5 Min Read",
    },
    {
      id: "guaranteed-corporate-internship-advantage",
      category: "Career & Interview Tips",
      title:
        "Why a 60-Day Guaranteed Corporate Internship Bridges the Gap Between Graduation and First Job",
      excerpt:
        "Explore how working inside a real corporate HR or Finance department for two full months eliminates the 'fresher experience gap' and leads directly to Pre-Placement Offers (PPOs).",
      content: [
        "The biggest hurdle fresh graduates face in the corporate job market is the classic paradox: every good role asks for prior practical experience, yet few companies offer structured entry-level training.",
        "By embedding a mandatory, supervised 60-day corporate internship into our 6-month executive diploma, ASH Academy ensures every graduate builds a verified work portfolio before attending placement drives.",
        "During Days 1 to 60, interns shadow HR Directors, execute live monthly payroll cycles, coordinate recruitment panels, and defend their boardroom capstone project.",
      ],
      keyTakeaways: [
        "How our 4-stage internship roadmap (Onboarding → Payroll Audit → Live Recruitment → Capstone Defense) works.",
        "Converting your 60-day host company deployment into a full-time Pre-Placement Offer (PPO).",
        "Building a verifiable credential folder with ISO 9001:2015, CPD, and Corporate Internship certificates.",
      ],
      imageSrc: "/images/contactimg.jpg",
      imageAlt: "ASH Academy interns collaborating in a corporate boardroom",
      author: {
        name: "Fazalul Rahiman",
        role: "CEO & Head Director",
        avatar: "/images/img_7.jpg",
      },
      date: "September 24, 2026",
      readTime: "4 Min Read",
    },
  ],
  sidebar: {
    searchPlaceholder: "Search articles, portals, topics...",
    trendingTitle: "Trending Career Reads",
    trendingTopics: [
      {
        id: "epfo-esic-posh-checklist",
        title: "EPFO & ESIC Monthly Filing Checklist for HR Executives",
        category: "Labour Law & Compliance",
        readTime: "6 Min Read",
      },
      {
        id: "ctc-structuring-automated-payroll",
        title: "How to Structure Tax-Efficient CTC & Automate Payroll in Excel",
        category: "Human Resource (HR)",
        readTime: "8 Min Read",
      },
      {
        id: "talent-acquisition-boolean-sourcing",
        title: "25 HRBP & Talent Acquisition Questions Asked by Top MNCs",
        category: "Career & Interview Tips",
        readTime: "6 Min Read",
      },
    ],
    tagsTitle: "Popular Topics & Portals",
    popularTags: [
      "HRBP Career",
      "EPFO & ESIC",
      "POSH Act",
      "Darwinbox HRIS",
      "CTC & Payroll",
      "Tally Prime & GST",
      "LinkedIn Boolean",
      "Advanced Excel",
      "GCC Placements",
    ],
    newsletterCard: {
      eyebrow: "FREE CAREER RESOURCE",
      title: "Get Weekly HR & Compliance Playbooks",
      description:
        "Join 15,000+ learners receiving statutory law updates, salary benchmarks, and interview guides directly in their inbox.",
      placeholder: "Enter your email address",
      buttonLabel: "Subscribe Free",
      successMessage:
        "You're subscribed! Check your inbox for our latest HR & Career Playbook.",
    },
    programsCard: {
      eyebrow: "INDUSTRY DIPLOMA PROGRAMS",
      title: "Turn Insights into a Corporate Career",
      programs: [
        {
          name: "Advanced Diploma in Human Resource Management",
          duration: "6 Months (4M Class + 2M Internship)",
          href: "/course",
        },
        {
          name: "PG & Advanced Diploma in Financial Accounting",
          duration: "6 Months • Tally, SAP & GST",
          href: "/course",
        },
        {
          name: "Advanced Diploma in Office Administration",
          duration: "6 Months • MIS & ERP Operations",
          href: "/course",
        },
      ],
      ctaLabel: "Explore Flagship HR Course",
    },
  },
  bottomBanner: {
    eyebrow: "DIRECT ADMISSIONS & CAREER COUNSELING",
    headingLine1: "Ready to Launch Your",
    headingLine2: "Corporate Career?",
    description:
      "Speak directly with our academic counselors for upcoming batch dates, syllabus dockets, and 100% placement support.",
    ctaLabel: "BOOK FREE DEMO CLASS",
    counselorImage: {
      src: "/images/img_9.jpg",
      alt: "ASH Academy Senior Admissions Counselor",
    },
    statusBadge: "Available Now",
    rightHeading: "CONTACT US TODAY FOR BATCH DATES & FEE DETAILS:",
    academyName: "ASH Academy",
    rightDescription:
      "Start your professional journey with industry-grade certifications and guaranteed corporate internships.",
    phoneDisplay: "+91 9072 80 1300",
    phoneHref: "tel:+919072801300",
    email: "info@ashacademy.in",
    emailHref: "mailto:info@ashacademy.in",
  },
};

