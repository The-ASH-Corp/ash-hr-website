export interface ContactBreadcrumbItem {
  label: string;
  href?: string;
}

export interface ContactHeroData {
  title: string;
  description: string;
  breadcrumbs: ContactBreadcrumbItem[];
}

export const contactHeroData: ContactHeroData = {
  title: "Get in Touch With Us",
  description:
    "Have questions? Our dedicated admissions counselors and career advisors are here to help guide you toward professional corporate certification.",
  breadcrumbs: [
    { label: "HOME", href: "/" },
    { label: "CONTACT US" },
  ],
};

