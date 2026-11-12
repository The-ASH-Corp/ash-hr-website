import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600", "800"],
});

export const metadata: Metadata = {
  title: "ASH Academy - Upskill and Upgrade Your Career",
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
      style={{
        colorScheme: "light",
        backgroundColor: "#fbf8ff",
        color: "#0f172a",
        scrollbarWidth: "none",
      }}
      className={`${plusJakartaSans.variable} scroll-smooth antialiased bg-[#fbf8ff] text-[#0f172a]`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              *, html, body {
                scrollbar-width: none !important;
                -ms-overflow-style: none !important;
              }
              *::-webkit-scrollbar,
              html::-webkit-scrollbar,
              body::-webkit-scrollbar {
                display: none !important;
                width: 0px !important;
                height: 0px !important;
                background: transparent !important;
              }
              html, body {
                overflow-x: clip !important;
              }
            `,
          }}
        />
      </head>
      <body
        style={{
          colorScheme: "light",
          backgroundColor: "#fbf8ff",
          color: "#0f172a",
          scrollbarWidth: "none",
          ["--background" as string]: "#fbf8ff",
          ["--foreground" as string]: "#0f172a",
        }}
        className="min-h-screen overflow-x-clip bg-[#fbf8ff] text-[#0f172a] selection:bg-[#e0e7ff] selection:text-[#253b97]"
      >
        {children}
      </body>
    </html>
  );
}
