import "./globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Coin | Roadmap",
  description: "Follow the development roadmap of Live Coin (LCOT + LCOT-K), a dual-chain Proof-of-Streaming ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        backgroundColor: "#0f0f0f",
        color: "#e0e0e0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        {children}
      </body>
    </html>
  );
}
