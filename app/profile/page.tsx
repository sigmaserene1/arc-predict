"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
const [balance, setBalance] = useState(0);

useEffect(() => {
const savedBalance =
localStorage.getItem("balance");

if (savedBalance) {
  setBalance(Number(savedBalance));
}

}, []);

return (
<main
style={{
minHeight: "100vh",
background: "#050505",
color: "white",
padding: "40px",
}}
> <h1>My Profile</h1>

  <div
    style={{
      background: "#111",
      padding: "25px",
      borderRadius: "12px",
      border: "1px solid #333",
      maxWidth: "600px",
    }}
  >
    <h2>Demo Trader</h2>

    <p>Wallet: Connected ✅</p>

    <p>Balance: {balance} USDC</p>

    <p>Total Markets Traded: 12</p>

    <p>Win Rate: 75%</p>

    <p>Rank: #4</p>
  </div>
</main>

);
}
