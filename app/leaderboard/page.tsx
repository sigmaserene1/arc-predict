"use client";

import { useEffect, useState } from "react";

export default function LeaderboardPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const portfolio = JSON.parse(
      localStorage.getItem("portfolio") || "[]"
    );

    const totalValue = portfolio.reduce(
      (sum: number, position: any) =>
        sum + position.shares,
      0
    );

    setUsers([
      {
        name: "You",
        value: totalValue,
      },
      {
        name: "Trader Alpha",
        value: 500,
      },
      {
        name: "Trader Beta",
        value: 250,
      },
    ]);
  }, []);

  const sorted = [...users].sort(
    (a, b) => b.value - a.value
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Leaderboard</h1>

      {sorted.map((user, index) => (
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
          <h2>
            #{index + 1} {user.name}
          </h2>

          <p>Portfolio Value: ${user.value}</p>
        </div>
      ))}
    </main>
  );
}