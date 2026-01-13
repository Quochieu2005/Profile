import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Portfolio",
    "Phan Duy Khai",
    "phanduykhai05",
    "phanduykhai",
    "khaicybers",
    "Khai Duy",
    "Software Engineer",
    "Full-Stack Developer",
    "Cybersecurity",
    "DevOps",
    "React",
    "Next.js",
    "Portfolio",
    "PTIT",
    "Vietnam",
  ],
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/phanduykhai.jpg", // Your avatar
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Software Engineer Portfolio`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: ["/phanduykhai.jpg"],
  },
  verification: {
    google: "", // Add Google Search Console verification code
    yandex: "",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: DATA.name,
      jobTitle: "Software Engineer",
      description: DATA.description,
      url: DATA.url,
      image: `${DATA.url}/phanduykhai.jpg`,
      sameAs: [
        DATA.contact.social.GitHub.url,
        // Add other social links
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh",
        addressCountry: "Vietnam",
      },
      knowsAbout: DATA.skills,
    }),
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
        suppressHydrationWarning={true}
      >
        <ScrollToTop />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
