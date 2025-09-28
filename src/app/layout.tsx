import { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boxcar Assistant",
  description: "Compute Payouts and eventually optimal routes",
  manifest: "/manifest.webmanifest",
  keywords: ["boxcars", "rail baron", "payoffs", "destinations"],
  authors: [{ name: "Alex Matthews" }],
  icons: [
    { rel: "apple-touch-icon", url: "icon_192x192.png" },
    { rel: "icon", url: "icon_192x192.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body>{children}</body>
    </html>
  );
}
