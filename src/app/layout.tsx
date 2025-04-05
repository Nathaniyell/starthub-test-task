import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    template: "%s | User Directory",
    default: "User Directory | StartHub",
  },
  description: "Browse our complete list of users and team members with detailed profiles and contact information.",
  keywords: ["users", "team", "directory", "profiles", "organization", "contact", "employee"],
  authors: [{ name: "StartHub", url: "https://example.com" }],
  metadataBase: new URL("https://example.com"), 
  alternates: {
    canonical: "/", 
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/users",
    siteName: "StartHub",
    images: [ 
      {
        url: "/users-ss.png",
        width: 1200,
        height: 630,
        alt: "StartHub User Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ourorganization",
    images: "/users-ss.png", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: { 
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}