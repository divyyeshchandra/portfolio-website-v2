import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { fontVariables } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyyesh Chandra — SDE-1 | Web2 + Web3 Engineer",
  description:
    "Backend engineer with 4+ years building exchange infrastructure, DeFi systems, and full-stack products at Kryptos. Shipping HyperBlitz, FreeMRR, and PolyBucket.",
  openGraph: {
    title: "Divyyesh Chandra — SDE-1 | Web2 + Web3 Engineer",
    description:
      "Backend engineer with 4+ years building exchange infrastructure, DeFi systems, and full-stack products at Kryptos. Shipping HyperBlitz, FreeMRR, and PolyBucket.",
    type: "website",
    siteName: "Divyyesh Chandra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyyesh Chandra — SDE-1 | Web2 + Web3 Engineer",
    description:
      "Backend engineer with 4+ years building exchange infrastructure, DeFi systems, and full-stack products. Shipping HyperBlitz, FreeMRR, and PolyBucket.",
    creator: "@realcryptoblitz",
  },
  metadataBase: new URL("https://divyyeshchandra.dev"),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/favicon-512.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={fontVariables}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* Skip to content — visually hidden, shown on keyboard focus */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
