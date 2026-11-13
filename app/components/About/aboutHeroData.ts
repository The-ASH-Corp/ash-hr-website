export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface AboutHeroData {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export const aboutHeroData: AboutHeroData = {
  title: "About Us",
  description:
    "Empowering students with industry-certified professional skills, real-world corporate training, and guaranteed career placement support across South India.",
  breadcrumbs: [
    { label: "HOME", href: "/" },
    { label: "ABOUT US" },
  ],
};
