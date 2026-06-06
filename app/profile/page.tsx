"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [balance, setBalance] = useState(0);
  const [positions, setPositions] = useState(0);
  const [trades, setTrades] = useState(0);

  useEffect(() => {
    const savedBalance = Number(
      localStorage.getItem("balance") || "1000"
    );

    const portfolio = JSON.parse(
      localStorage.getItem("portfolio") || "[]"
    );

    const history = JSON.parse(
      localStorage.getItem("tradeHistory") || "[]"
    );

    setBalance(savedBalance);
    setPositions(portfolio.length);
    setTrades(history.length);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Profile</h1>

      <div
        style={{
          marginTop: "30px",
          padding: "25px",
          background: "#111",
          border: "1px solid #333",
          borderRadius: "12px",
          maxWidth: "600px",
        }}
      >
        <h2>Trader Stats</h2>

        <p>Balance: {balance} USDC</p>

        <p>Open Positions: {positions}</p>

        <p>Total Trades: {trades}</p>
      </div>
    </main>
  );
}