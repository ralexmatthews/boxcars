import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boxcar Assistant",
  description: "Compute Payouts and eventually optimal routes",
  manifest: "/manifest.json",
  keywords: ["boxcars", "rail baron", "payoffs", "destinations"],
  authors: [{ name: "Alex Matthews" }],
  icons: [
    { rel: "apple-touch-icon", url: "train_with_background_128x128.png" },
    { rel: "icon", url: "train_with_background_128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
