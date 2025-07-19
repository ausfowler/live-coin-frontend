"use client";

import React from "react";

export default function RoadmapPage() {
  return (
    <main style={{ backgroundColor: "#0f0f0f", color: "#e0e0e0", padding: "40px 20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#1de9b6", marginBottom: "1rem", textAlign: "center" }}>🚀 Live Coin Roadmap</h1>
      <section style={{ maxWidth: "800px", margin: "0 auto" }}>
        <ul style={{ lineHeight: "1.8" }}>
          <li><strong>✅ Concept Finalization:</strong> Live Coin is built on Solana (LCOT) + Kaspa (LCOT-K).</li>
          <li><strong>✅ Tokenomics:</strong> Stake LCOT (Solana) to mine LCOT-K (Kaspa). Proof-of-Streaming earns users based on stream time.</li>
          <li><strong>✅ Branding & Docs:</strong> One-pagers, splash site, token gating, and roadmap complete.</li>
          <li><strong>🔄 In Progress:</strong> Wallet generation, Twitch integration, staking logic.</li>
          <li><strong>🔜 Upcoming:</strong> Live dashboard, real-time tracking, security audits, and mainnet LCOT-K launch on Kaspa.</li>
          <li><strong>🔥 Future:</strong> Utility marketplace, tips, upgrades, NFT gating, streaming analytics, and expansion to YouTube & Kick.</li>
        </ul>
        <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#aaa", textAlign: "center" }}>
          We&apos;re not just launching a token. We&apos;re pioneering a streaming economy.
        </p>
      </section>
    </main>
  );
}
