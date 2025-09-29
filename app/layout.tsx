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
  metadataBase: new URL("https://todaywegrind"),
  title: {
    default: "Kiet Nguyen - Software Engineer",
    template: "%s | Kiet Nguyen",
  },
  description:
    "Todaywegrind is the digital home of Kiet Nguyen—sharing insights on coding, coffee, software engineering, web development, and the modern developer lifestyle. Discover tips, stories, and resources for passionate programmers.",
  keywords: [
    "todaywegrind",
    "kiet nguyen",
    "coding",
    "coffee",
    "software engineering",
    "developer blog",
    "web development",
    "programming",
    "productivity",
    "tech blog",
    "javascript",
    "node.js",
    "react",
    "career",
    "learning",
    "remote work",
    "code tips",
    "developer lifestyle",
  ],
  authors: [{ name: "Kiet Nguyen", url: "https://todaywegrind" }],
  creator: "Kiet Nguyen",
  publisher: "Kiet Nguyen",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://todaywegrind",
    siteName: "Todaywegrind | Kiet Nguyen | Coding | Coffee",
    title: "Todaywegrind | Kiet Nguyen | Coding | Coffee", // You can use title.default here if you want to avoid hardcoding
    description:
      "Todaywegrind is the digital home of Kiet Nguyen—sharing insights on coding, coffee, software engineering, web development, and the modern developer lifestyle. Discover tips, stories, and resources for passionate programmers.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Todaywegrind | Kiet Nguyen | Coding | Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Todaywegrind | Kiet Nguyen | Coding | Coffee",
    description:
      "Todaywegrind is the digital home of Kiet Nguyen—sharing insights on coding, coffee, software engineering, web development, and the modern developer lifestyle. Discover tips, stories, and resources for passionate programmers.",
    images: ["/profile.jpg"],
    creator: "@kiet_nguyen",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://todaywegrind",
  },
  icons: {
    icon: "/terminal-solid-full.svg", // Flaticon terminal icon
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
              name: "Kiet Nguyen",
              url: "https://todaywegrind",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Thoughtworks",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ho Chi Minh City",
                addressCountry: "Vietnam",
              },
              sameAs: [
                "https://linkedin.com/in/kiet-nguyen",
                "https://github.com/kiet-nguyen",
              ],
              knowsAbout: [
                "Software Engineering",
                "Microservices",
                "Kotlin",
                "React",
                "Next.js",
                "Web Development",
                "Cloud Architecture",
              ],
            }),
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
