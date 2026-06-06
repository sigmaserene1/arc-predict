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
flexWrap: "wrap",
gap: "20px",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "30px",
}}
> <h2>Arc Predict</h2>
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
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
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
