import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/config";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} — Representação Comercial`,
  description: COMPANY_TAGLINE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-cream text-charcoal font-lato antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
