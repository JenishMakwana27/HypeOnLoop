import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HypeOnLoop | Viral Marketing & PR Agency",
  description: "From viral memes to trending PR campaigns, HypeOnLoop helps brands connect with audiences through modern, dynamic, and humor-driven marketing.",
  keywords: ["marketing agency", "viral marketing", "PR campaigns", "meme marketing", "social media growth"],
  authors: [{ name: "HypeOnLoop" }],
  icons: {
    icon: [
      { url: "/fevicon.ico"},
      { url: "/fevicon-16x16.png", sizes: "16x16", type: "image/png"},
      { url: "/fevicon-32x32", sizes: "32x32", type: "image/png"},
    ],
      apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "HypeOnLoop | Viral Digital Marketing Agency",
    description: "Launch your brand into the viral stratosphere with HypeOnLoop.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "font-sans min-h-screen antialiased")}>
        {children}
      </body>
    </html>
  );
}
