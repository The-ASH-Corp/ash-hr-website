import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CBA Academy - Upskill and Upgrade Your Career",
  description:
    "Kick start your Career Journey with recognised international standard learning. Get Globally Approved Skills and Shape your Inspiring Career.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-surface text-executive-navy selection:bg-primary-100 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
