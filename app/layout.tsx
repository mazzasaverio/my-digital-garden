import { ThemeProviders } from "@/components/providers/theme-provider";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";

import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-pt-[3.5rem]">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable
          )}
        >
          <ThemeProviders>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <ModalProvider />
          </ThemeProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
