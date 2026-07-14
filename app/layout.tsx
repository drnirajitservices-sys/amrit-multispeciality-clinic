import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AMRIT Multispeciality Clinic | Doctors in Greater Noida",
    template: "%s | AMRIT Multispeciality Clinic",
  },

  description:
    "AMRIT Multispeciality Clinic in PI-1, Greater Noida offers general medical care, diabetes treatment, heart and BP management, orthopaedic consultation, general and laparoscopic surgery consultation, physiotherapy, ultrasound, X-ray, ECG, blood tests, pathology and microbiology services.",

  keywords: [
    "doctor in Greater Noida",
    "multispeciality clinic in Greater Noida",
    "general physician in Greater Noida",
    "general medicine doctor in Greater Noida",
    "diabetes treatment in Greater Noida",
    "orthopaedic doctor in Greater Noida",
    "orthopedic doctor in Greater Noida",
    "general surgeon consultation in Greater Noida",
    "laparoscopic surgeon consultation in Greater Noida",
    "physiotherapy in Greater Noida",
    "ultrasound in Greater Noida",
    "X-ray in Greater Noida",
    "ECG in Greater Noida",
    "blood test in Greater Noida",
    "pathology lab in Greater Noida",
    "microbiology lab in Greater Noida",
    "AMRIT Multispeciality Clinic",
  ],

  authors: [
    {
      name: "AMRIT Multispeciality Clinic",
    },
  ],

  creator: "AMRIT Multispeciality Clinic",
  publisher: "AMRIT Multispeciality Clinic",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}