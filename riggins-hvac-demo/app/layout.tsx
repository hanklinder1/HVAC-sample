import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { siteData } from "@/app/lib/siteData";

export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-dvh bg-white">
          <SiteHeader />
          <main className="min-h-[60vh]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
