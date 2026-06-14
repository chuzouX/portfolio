import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ImageBackground } from "@/components/ui/ImageBackground";

export const metadata: Metadata = {
  title: "chuzouX | Security & DevOps Explorer",
  description: "Web Security Researcher, CTF Player, and DevOps Engineer. Specializing in server deployment, vulnerability research, network technology, and AI development. Explore my technical blog, projects, and security writeups.",
  keywords: ["chuzouX", "Web Security", "CTF", "DevOps", "Server Deployment", "Vulnerability Research", "Penetration Testing", "Network Security", "AI Development", "Linux Administration", "Cybersecurity"],
  authors: [{ name: "chuzouX", url: "https://chuzoux.top" }],
  creator: "chuzouX",
  publisher: "chuzouX",
  icons: {
    icon: [
      { url: "https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0" },
    ],
    apple: [
      { url: "https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0" },
    ],
    shortcut: "https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://space.chuzoux.top/",
    title: "chuzouX | Security & DevOps Explorer",
    description: "Web Security Researcher, CTF Player, and DevOps Engineer. Specializing in server deployment, vulnerability research, and AI development.",
    siteName: "chuzouX's Digital Space",
    images: [
      {
        url: "https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0",
        width: 640,
        height: 640,
        alt: "chuzouX Avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "chuzouX | Security & DevOps Explorer",
    description: "Web Security Researcher, CTF Player, and DevOps Engineer",
    creator: "@chuzouX",
    images: ["https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0"],
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
  alternates: {
    canonical: "https://space.chuzoux.top/",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030305" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "chuzouX",
    url: "https://space.chuzoux.top",
    image: "https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0",
    sameAs: [
      "https://github.com/chuzouX",
      "https://chuzoux.top/",
    ],
    jobTitle: "Security Researcher & DevOps Engineer",
    description: "Web Security Researcher, CTF Player, and DevOps Engineer specializing in server deployment, vulnerability research, and AI development.",
    knowsAbout: [
      "Web Security",
      "CTF",
      "DevOps",
      "Server Deployment",
      "Vulnerability Research",
      "Penetration Testing",
      "Linux Administration",
      "AI Development"
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark"
    >
      <head>
        {/* DNS Prefetch and Preconnect for performance */}
        <link rel="dns-prefetch" href="https://umami.chuzoux.top" />
        <link rel="preconnect" href="https://umami.chuzoux.top" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://q2.qlogo.cn" />
        <link rel="preconnect" href="https://q2.qlogo.cn" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh antialiased">
        <ImageBackground />
        {children}
        <Script
          defer
          src="https://umami.chuzoux.top/script.js"
          data-website-id="96c9547b-b859-4957-be7e-7ebc106cc312"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
