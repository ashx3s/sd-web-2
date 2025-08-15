import type { Metadata } from "next";
import "nextra-theme-docs/style.css";
// import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Web Dev 2",
  description: "Sait's software development diploma Web Dev 2 course",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
