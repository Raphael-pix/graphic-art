import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import IntroSequence from "@/components/Intro-sequence";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Graphiq art",
  description: "Personal Portfolio",
  icons: {
    icon: "/assets/icons/favicon.png",
    shortcut: "/assets/icons/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <IntroSequence/>
        {children}
      </body>
    </html>
  );
}
