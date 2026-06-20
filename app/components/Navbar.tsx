"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
const [connected, setConnected] = useState(false);
const [balance, setBalance] = useState(1000);

useEffect(() => {
const saved = localStorage.getItem(
"walletConnected"
);

const savedBalance = localStorage.getItem(
  "balance"
);

if (saved === "true") {
  setConnected(true);
}

if (savedBalance) {
  setBalance(Number(savedBalance));
}
}, []);

const connectWallet = () => {
setConnected(true);

localStorage.setItem(
  "walletConnected",
  "true"
);

localStorage.setItem(
  "balance",
  String(balance)
);

};

return (
<nav
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    background: "#111",
    borderRadius: "20px",
    border: "2px solid #222",
    marginBottom: "30px",
  }}
>
 <h2>Arc Predict 🚀</h2>
  <div
    style={{
      display: "flex",
      gap: "20px",
      alignItems: "center",
    }}
  >
    <Link
      href="/"
      style={{
        color: "white",
        textDecoration: "none",
      }}
    >
      Home
    </Link>

    <Link
      href="/markets"
      style={{
        color: "white",
        textDecoration: "none",
      }}
    >
      Markets
    </Link>

    <Link
      href="/portfolio"
      style={{
        color: "white",
        textDecoration: "none",
      }}
    >
      Portfolio
    </Link>
    <Link href="/create">
  Create
</Link>
    <Link
      href="/leaderboard"
      style={{
        color: "white",
        textDecoration: "none",
      }}
    >
      Leaderboard
    </Link>

    <Link
      href="/history"
      style={{
        color: "white",
        textDecoration: "none",
      }}
    >
      History
    </Link>

    <Link
      href="/profile"
      style={{
        color: "white",
        textDecoration: "none",
      }}
    >
      Profile
    </Link>

    {connected && (
      <span
        style={{
          color: "lightgreen",
          fontWeight: "bold",
        }}
      >
        {balance} USDC
      </span>
    )}

    <button
      onClick={connectWallet}
      style={{
        background: "#C6FF00",
        color: "#000",
        border: "none",
        padding: "12px 22px",
        borderRadius: "15px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {connected
        ? "Connected ✅"
        : "Connect Wallet"}
    </button>
  </div>
</nav>
);
}
