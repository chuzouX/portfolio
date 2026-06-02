import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ImageBackground } from "@/components/ui/ImageBackground";

export const metadata: Metadata = {
  title: "chuzouX — 技术分享与实践",
  description: "chuzouX's Personal Homepage. Focusing on Web Security, CTF, and Software Development.",
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark"
    >
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
