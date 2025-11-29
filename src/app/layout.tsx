import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from "@/components/ScrollProgress";
import CommandMenu from "@/components/CommandMenu";
import CommandHint from "@/components/CommandHint";

const inconsolata = Inconsolata({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nisha | Portfolio",
  description:
    "Hi, I'm Nisha—a Full Stack Developer with a passion for building seamless, intuitive applications that make technology accessible and enjoyable.",
  metadataBase: new URL("https://nissha.space"),
  openGraph: {
    title: "Nisha | Portfolio",
    description:
      "Hi, I'm Nisha—a Full Stack Developer with a passion for building seamless, intuitive applications that make technology accessible and enjoyable.",
    url: "https://nissha.space",
    siteName: "Nisha's Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nisha | Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisha | Portfolio",
    description:
      "Hi, I'm Nisha—a Full Stack Developer with a passion for building seamless, intuitive applications that make technology accessible and enjoyable.",
    creator: "@nissha29",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nisha",
    url: "https://nissha.space",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/nissha29",
      "https://linkedin.com/in/nisha-yadav-698329230",
      "https://twitter.com/nissha29",
    ],
  };

  return (
    <html lang="en">
      <body className={` ${inconsolata.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <CommandMenu />
        <CommandHint />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
