import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KALIN CHITA PART 2 — HALLOWEEN EDITION",
  description:
    "Vrijdag 30 oktober 2026 in Den Aalmoezenier, Antwerpen. Met DJ Achille, vanaf 17 jaar. Tickets: €5 inclusief één gratis drankje.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl-BE" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
