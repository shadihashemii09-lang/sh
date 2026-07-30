import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/providers/auth-provider";
import { QueryProvider } from "@/providers/query-provider";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "بوکلی - پلتفرم رزرو آنلاین نوبت",
    template: "%s | بوکلی",
  },
  description:
    "پلتفرم حرفه‌ای رزرو آنلاین نوبت برای امکانات تجاری، سلامت، زیبایی و خدمات مختلف",
  keywords: [
    "رزرو آنلاین",
    "نوبت دهی",
    "پلتفرم رزرو",
    "زیبایی",
    "پزشک",
    "سالن",
    "نوبت",
  ],
  authors: [{ name: "Bookly" }],
  creator: "Bookly",
  publisher: "Bookly",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://bookly.ir",
    title: "بوکلی - پلتفرم رزرو آنلاین نوبت",
    description:
      "پلتفرم حرفه‌ای رزرو آنلاین نوبت برای امکانات تجاری، سلامت، زیبایی و خدمات مختلف",
    siteName: "بوکلی",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "بوکلی - پلتفرم رزرو آنلاین نوبت",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بوکلی - پلتفرم رزرو آنلاین نوبت",
    description:
      "پلتفرم حرفه‌ای رزرو آنلاین نوبت برای امکانات تجاری، سلامت، زیبایی و خدمات مختلف",
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <QueryProvider>
              {children}
              <Toaster />
            </QueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}