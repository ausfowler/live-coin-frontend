"use client";

import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ backgroundColor: "#0f0f0f", color: "#e0e0e0", minHeight: "100vh", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <section style={{ textAlign: "center", maxWidth: "800px" }}>
        <h1 style={{ fontSize: "3rem", color: "#1de9b6", marginBottom: "10px" }}>Live Coin (LCOT)</h1>
        <h2 style={{ color: "#00bcd4", fontWeight: "normal" }}>Proof-of-Streaming for Twitch</h2>
        <p style={{ marginTop: "20px", fontSize: "1.2rem", color: "#ccc" }}>
          Stake LCOT on Solana. Earn LCOT-K on Kaspa. Join the dual-chain revolution that rewards streamers based on live activity.
        </p>
        <p style={{ marginTop: "10px", fontSize: "1rem", color: "#888" }}>
          We're building something epic. Be part of it early.
        </p>

        <Link href="/roadmap">
          <button style={{
            marginTop: "30px",
            padding: "12px 24px",
            backgroundColor: "#1de9b6",
            color: "#0f0f0f",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.3s ease"
          }}>
            View Roadmap
          </button>
        </Link>
      </section>

      <footer style={{ marginTop: "60px", fontSize: "0.85rem", color: "#555" }}>
        &copy; 2025 Live Coin. Powered by Kaspa + Solana.
      </footer>
    </main>
  );
}
