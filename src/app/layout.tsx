import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajasthan Engineering University - Excellence in Engineering Education",
  description: "Premier engineering institution in Rajasthan offering undergraduate, postgraduate, and doctoral programs. Committed to excellence in education, research, and innovation.",
  keywords: ["Rajasthan Engineering University", "REU", "Engineering College", "Technical Education", "Rajasthan", "B.Tech", "M.Tech", "PhD", "Research"],
  authors: [{ name: "Rajasthan Engineering University" }],
  openGraph: {
    title: "Rajasthan Engineering University",
    description: "Excellence in Engineering Education, Research, and Innovation",
    url: "#",
    siteName: "REU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajasthan Engineering University",
    description: "Excellence in Engineering Education, Research, and Innovation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
