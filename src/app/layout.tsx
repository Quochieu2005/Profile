import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Particles from './components/particles/Particles';
import { Globe } from "@/components/magicui/globe";
import { Inter } from 'next/font/google';



const fontSans = Inter({
  subsets: ['latin', 'vietnamese'], // Include 'vietnamese' for lang="vi"
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
      

        {/* Nền Particles phía dưới toàn màn hình */}
        <div className="fixed inset-0 -z-10">
          {/* <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          /> */}
          <Globe className="w-1/2 h-full flex items-center justify-center ml-auto" />
        </div>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {/* Bọc nội dung vào khối trung tâm */}
            <div className="relative z-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
              {children}
              <Navbar />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

