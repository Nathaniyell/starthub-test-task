import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    template: "%s | User Directory",
    default: "User Directory | StartHub",
  },
  description: "Browse our complete list of users and team members with detailed profiles and information.",
  keywords: ["users", "team members", "directory", "profiles", "organization", "staff"],
  authors: [{ name: "StartHub" }],
  creator: "StartHub",
  publisher: "StartHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com/users",
    title: "User Directory | StartHub",
    description: "Browse our complete list of users and team members with detailed profiles and information.",
    siteName: "StartHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "User Directory | StartHub",
    description: "Browse our complete list of users and team members with detailed profiles and information.",
    creator: "@ourorganization",
  },
  robots: {
    index: true,
    follow: true,
  },
}

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
        {children}
      </body>
    </html>
  );
}
