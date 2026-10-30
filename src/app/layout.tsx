import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pendo Kenya | Location-based Dating for Kenya",
  description: "Connect with people near you in Kenya. Location-based matchmaking with county filters, profiles, swipe, and chat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}