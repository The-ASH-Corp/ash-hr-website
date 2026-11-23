export interface ContactSocialItem {
  id: "facebook" | "twitter" | "instagram" | "youtube" | "linkedin";
  label: string;
  href: string;
}

export interface ContactFormData {
  badgeText: string;
  headingPrefix: string;
  headingHighlight: string;
  headingMiddle: string;
  headingLine2: string;
  description: string;
  programsLabel: string;
  programs: string[];
  socialHeading: string;
  socials: ContactSocialItem[];
  formCard: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    courseLabel: string;
    coursePlaceholder: string;
    courseOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    confidentialityNote: string;
    successMessage: string;
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
  };
}

export const contactFormData: ContactFormData = {
  badgeText: "LET'S GET IN TOUCH",
  headingPrefix: "Feel Free To",
  headingHighlight: "Contact Us",
  headingMiddle: "&",
  headingLine2: "Reach Out For Info!",
  description:
    "Have questions? We're happy to help! Contact Us for any information about our courses and services. The ASH Academy team is just a message away.",
  programsLabel: "PROGRAMS OFFERED FOR INQUIRY",
  programs: [
    "HR & Administration Management Programme",
    "Office Administration Course",
    "Payroll & Compliance Executive",
    "Basic Hospital Administration",
    "English Communication Course",
  ],
  socialHeading: "Follow us on social media :",
  socials: [
    { id: "facebook", label: "Facebook", href: "#" },
    { id: "twitter", label: "Twitter", href: "#" },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/ash_._academy",
    },
    { id: "youtube", label: "YouTube", href: "#" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/the-ash-academy/",
    },
  ],
  formCard: {
    title: "Send Us a Direct Message",
    subtitle:
      "Fill in your information and our academic counselor will contact you within 24 hours.",
    nameLabel: "Your Name*",
    namePlaceholder: "e.g. Rahul Menon",
    emailLabel: "Your Email*",
    emailPlaceholder: "e.g. rahul@example.com",
    phoneLabel: "Your Phone / WhatsApp*",
    phonePlaceholder: "+91 98765 43210",
    courseLabel: "Select Interested Course*",
    coursePlaceholder: "Choose a Program...",
    courseOptions: [
      "HR & Administration Management Programme (6 Months)",
      "Advanced Diploma in Office Administration",
      "Payroll & Statutory Compliance",
      "Basic Hospital Administration",
      "English Communication & Personality Development",
    ],
    messageLabel: "Enter your message",
    messagePlaceholder:
      "Briefly describe your background, question, or preferred batch timing...",
    submitLabel: "SEND MESSAGE",
    confidentialityNote: "Your data is kept strictly confidential.",
    successMessage:
      "Thank you! Your message has been received. Our academic counselor will contact you within 24 hours.",
  },
  admissionsBanner: {
    eyebrow: "DIRECT ADMISSIONS",
    callLabel: "Call Us :",
    phoneDisplay: "+91 8921 365 750",
    phoneHref: "tel:+918921365750",
    hoursNote:
      "Immediate counseling assistance available Monday to Friday 9:30 AM – 3:30 PM.",
    ctaLabel: "REGISTRATION / COUNSELING",
    counselorImage: {
      src: "/images/contactimg.jpg",
      alt: "ASH Academy admissions counselor",
    },
    statusBadge: "Available Now",
    rightHeading: "CONTACT US TODAY FOR BATCH DATES & FEE DETAILS:",
    academyName: "ASH Academy",
    rightDescription:
      "Start your professional journey with industry-grade certifications.",
    phoneCompact: "+91 8921 365 750 / +91 9337 009 400",
    email: "connect@ashacademy.ai",
    emailHref: "mailto:connect@ashacademy.ai",
  },
};

