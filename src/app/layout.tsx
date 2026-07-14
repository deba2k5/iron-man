import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SceneBackground } from "@/components/three/SceneBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "http://localhost:3000";
const SITE_TITLE = "CODEVOYAGE — IEM / UEM";
const SITE_DESCRIPTION =
  "CODEVOYAGE is an 8-hour hackathon for builders ready to answer the call. Assemble your team, choose a challenge, and turn an idea into a live project.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s — CODEVOYAGE",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: "CODEVOYAGE",
  keywords: [
    "CODEVOYAGE",
    "hackathon",
    "IEM",
    "UEM",
    "student hackathon",
    "coding competition",
  ],
  authors: [{ name: "IEM / UEM" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "CODEVOYAGE",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground grain">
        <SmoothScrollProvider>
          <SceneBackground />
          <div className="relative z-10">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
