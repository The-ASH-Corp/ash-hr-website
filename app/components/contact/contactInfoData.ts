export interface LocationBranchItem {
  name: string;
  address: string;
}

export interface PhoneCampusItem {
  campus: string;
  number: string;
  href: string;
}

export interface ContactInfoData {
  map: {
    title: string;
    embedUrl: string;
  };
  locationCard: {
    title: string;
    iconBg: string;
    iconColor: string;
    branches: LocationBranchItem[];
  };
  phoneCard: {
    title: string;
    subtitle: string;
    iconBg: string;
    iconColor: string;
    numbers: PhoneCampusItem[];
  };
  emailCard: {
    title: string;
    subtitle: string;
    iconBg: string;
    iconColor: string;
    boxLabel: string;
    email: string;
    href: string;
    footerNote: string;
  };
  websiteCard: {
    title: string;
    subtitle: string;
    iconBg: string;
    iconColor: string;
    boxLabel: string;
    urlDisplay: string;
    href: string;
    footerNote: string;
  };
}

export const contactInfoData: ContactInfoData = {
  map: {
    title: "ASH Academy Campus Location Map",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2!2d75.9443535!3d10.951497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xadd6ce77a5d83b91%3A0x32bc3bd306b1d9a4!2sAsh%20academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  locationCard: {
    title: "Campus Locations",
    iconBg: "#eef2ff",
    iconColor: "#253b97",
    branches: [
      {
        name: "Ash Academy Tirur (Main Campus)",
        address:
          "2nd Floor, OPS Mall, Vailathur, Ponmundam, Tirur Road, Malappuram, Kerala, India (676106)",
      },
      {
        name: "Ash Academy Calicut",
        address:
          "HiLite Business Park, State Highway 28, Palazhi, Kozhikode, Pantheeramkavu, Kerala 673014",
      },
    ],
  },
  phoneCard: {
    title: "Phone Numbers",
    subtitle: "Direct admissions assistance & support lines",
    iconBg: "#ecfdf5",
    iconColor: "#10b981",
    numbers: [
      {
        campus: "Tirur Main Campus & WhatsApp",
        number: "+91 8921 365 750",
        href: "tel:+918921365750",
      },
      {
        campus: "Admissions Helpline",
        number: "+91 9337 009 400",
        href: "tel:+919337009400",
      },
    ],
  },
  emailCard: {
    title: "Email Info",
    subtitle: "Reach our admissions and student desks anytime",
    iconBg: "#eef2ff",
    iconColor: "#4f46e5",
    boxLabel: "Official Admissions Mailbox",
    email: "connect@ashacademy.ai",
    href: "mailto:connect@ashacademy.ai",
    footerNote: "Avg response time: 2 Business Hours",
  },
  websiteCard: {
    title: "Official Website",
    subtitle: "Explore 6-month programme, 24-week timetable & fees",
    iconBg: "#f0f9ff",
    iconColor: "#0284c7",
    boxLabel: "Main Portal",
    urlDisplay: "www.ashacademy.ai",
    href: "https://www.ashacademy.ai",
    footerNote: "Campuses: Tirur (OPS Mall) | Calicut",
  },
};
