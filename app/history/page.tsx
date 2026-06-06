"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [trades, setTrades] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("tradeHistory") || "[]"
    );

    setTrades(saved.reverse());
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
      <h1>Trade History</h1>

      {trades.length === 0 ? (
        <p>No trades yet.</p>
      ) : (
        trades.map((trade, index) => (
          <div
            key={index}
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "1px solid #333",
              borderRadius: "12px",
              background: "#111",
            }}
          >
            <h3>{trade.market}</h3>

            <p>Side: {trade.side}</p>

            <p>Amount: {trade.amount} USDC</p>

            <p>Time: {trade.time}</p>
          </div>
        ))
      )}
    </main>
  );
}