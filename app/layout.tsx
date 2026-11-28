import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { whatsappHref } from "./components/landingData";
import WhatsAppIcon from "./components/WhatsAppIcon";
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
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp (opens in a new tab)"
          className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#12823e] text-white shadow-lg transition motion-safe:hover:scale-105 hover:bg-[#0d6932] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12823e] sm:right-6 sm:bottom-6 animate-bounce hover:scale-120" 
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </body>
    </html>
  );
}
