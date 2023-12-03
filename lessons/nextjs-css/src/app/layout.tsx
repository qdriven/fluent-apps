import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn NextJS App Router",
  description: "Learn NextJS APP Router ",
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