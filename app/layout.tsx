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
  metadataBase: new URL('https://kietnguyen.me'),
  title: {
    default: "Kiet Nguyen - Software Engineer",
    template: "%s | Kiet Nguyen"
  },
  description: "Software engineer specializing in scalable systems, microservices, and modern web development. Sharing insights about technology, coding, and engineering best practices.",
  keywords: ["Kiet Nguyen", "Software Engineer", "Web Development", "Microservices", "Kotlin", "React", "Next.js", "Blog"],
  authors: [{ name: "Kiet Nguyen", url: "https://kietnguyen.me" }],
  creator: "Kiet Nguyen",
  publisher: "Kiet Nguyen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kietnguyen.me",
    siteName: "Kiet Nguyen - Software Engineer",
    title: "Kiet Nguyen - Software Engineer",
    description: "Software engineer specializing in scalable systems, microservices, and modern web development.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Kiet Nguyen - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiet Nguyen - Software Engineer",
    description: "Software engineer specializing in scalable systems, microservices, and modern web development.",
    images: ["/profile.jpg"],
    creator: "@kiet_nguyen",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://kietnguyen.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kiet Nguyen",
              "url": "https://kietnguyen.me",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Thoughtworks"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ho Chi Minh City",
                "addressCountry": "Vietnam"
              },
              "sameAs": [
                "https://linkedin.com/in/kiet-nguyen",
                "https://github.com/kiet-nguyen"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Microservices",
                "Kotlin",
                "React",
                "Next.js",
                "Web Development",
                "Cloud Architecture"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
