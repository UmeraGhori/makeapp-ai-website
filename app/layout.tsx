import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MakeApp.ai — AI-Powered Personalized Makeup",
  description:
    "Discover makeup looks personalized to your face with AI. Scan your face, explore inspiring looks, preview makeup with AI, discover products, and learn how to recreate your look.",
  keywords: [
    "AI makeup",
    "personalized beauty",
    "face scan makeup",
    "virtual makeup try-on",
    "beauty tech",
    "makeapp ai",
    "makeup recommendations",
  ],
  authors: [{ name: "MakeApp.ai" }],
  creator: "MakeApp.ai",
  metadataBase: new URL("https://makeapp.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://makeapp.ai",
    title: "MakeApp.ai — AI-Powered Personalized Makeup",
    description:
      "Discover makeup looks personalized to your face with AI. Scan your face, explore inspiring looks, preview makeup with AI, discover products, and learn how to recreate your look.",
    siteName: "MakeApp.ai",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "MakeApp.ai - Beauty Personalized",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MakeApp.ai — AI-Powered Personalized Makeup",
    description:
      "Discover makeup looks personalized to your face with AI. Scan your face, explore inspiring looks, preview makeup with AI, discover products, and learn how to recreate your look.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="font-sans antialiased bg-ivory-100 text-plum-900 min-h-screen flex flex-col selection:bg-blush-100 selection:text-blush-600">
        {children}
      </body>
    </html>
  );
}
