"use client";

import { useState } from "react";
import { markets } from "../markets";
import MarketCard from "../components/MarketCard";

export default function MarketsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMarkets = markets
    .filter((market) => {
      if (category === "All") return true;
      return market.category === category;
    })
    .filter((market) =>
      market.question
        .toLowerCase()
        .includes(search.toLowerCase())
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
      <h1>Markets</h1>

      <input
        placeholder="Search markets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "8px",
          width: "300px",
          marginTop: "20px",
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          marginLeft: "20px",
          padding: "12px",
          borderRadius: "8px",
        }}
      >
        <option>All</option>
        <option>Crypto</option>
        <option>ARC</option>
        <option>Custom</option>
      </select>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {filteredMarkets.map((market) => (
          <MarketCard
            key={market.id}
            id={market.id}
            question={market.question}
            yes={market.yes}
            no={market.no}
            volume={market.volume}
            category={market.category}
            status={market.status}
            endDate={market.endDate || "TBD"}
          />
        ))}
      </div>
    </main>
  );
}