export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface AboutHeroData {
  badgeText: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export const aboutHeroData: AboutHeroData = {
  badgeText: "EXCELLENCE IN CAREER EDUCATION",
  title: "About Us",
  description:
    "Empowering students with industry-certified professional skills, real-world corporate training, and guaranteed career placement support across South India.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ],
};

