"use client";

import { useEffect, useState } from "react";

type Position = {
market: string;
side: string;
shares: number;
};

export default function PortfolioPage() {
const [positions, setPositions] = useState<Position[]>([]);

useEffect(() => {
const saved = localStorage.getItem("portfolio");


if (saved) {
  setPositions(JSON.parse(saved));
}

}, []);

const totalPositions = positions.length;

const totalValue = positions.reduce(
(sum, position) => sum + position.shares,
0
);

return (
<main
style={{
minHeight: "100vh",
background: "#050505",
color: "white",
padding: "40px",
}}
> <h1>My Portfolio</h1>
<div
  style={{
    padding: "20px",
    border: "1px solid #333",
    borderRadius: "12px",
    marginBottom: "20px",
    marginTop: "20px",
    background: "#111",
  }}
>
  <h2>Portfolio Statistics</h2>

  <p>Total Positions: {positions.length}</p>

  <p>Total Portfolio Value: ${totalValue}</p>

  <p>Win Rate: 75%</p>
</div>

  <div
    style={{
      padding: "20px",
      border: "1px solid #333",
      borderRadius: "12px",
      background: "#111",
      marginBottom: "20px",
    }}
  >
    <h2>Portfolio Statistics</h2>

    <p>Total Positions: {totalPositions}</p>
    <p>Total Portfolio Value: ${totalValue}</p>
    <p>Open Positions: {totalPositions}</p>
<p>Win Rate: 75%</p>
  </div>

  {positions.length === 0 ? (
    <p>No positions yet.</p>
  ) : (
    positions.map((position, index) => (
      <div
        key={index}
        style={{
          padding: "20px",
          marginTop: "20px",
          border: "1px solid #333",
          borderRadius: "12px",
          background: "#111",
        }}
      >
        <h3>{position.market}</h3>

        <p>Side: {position.side}</p>

        <p>Shares: {position.shares}</p>
        <p>
  Estimated Value: ${position.shares}
</p>
      </div>
    ))
  )}
</main>

);
}
