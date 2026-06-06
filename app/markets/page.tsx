"use client";

import { useState } from "react";
import { markets } from "../markets";
import MarketCard from "../components/MarketCard";

const categories = ["All", "Crypto", "ARC"];

export default function MarketsPage() {
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] =
useState("All");

return (
<main
style={{
minHeight: "100vh",
background: "#050505",
color: "white",
padding: "40px",
}}
> <h1>All Markets</h1>

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

  <div
    style={{
      display: "flex",
      gap: "10px",
      marginTop: "20px",
      marginBottom: "20px",
    }}
  >
    {categories.map((category) => (
      <button
        key={category}
        onClick={() =>
          setSelectedCategory(category)
        }
      >
        {category}
      </button>
    ))}
  </div>

  <div
    style={{
      display: "grid",
      gap: "20px",
    }}
  >
    {markets
      .filter(
        (market) =>
          selectedCategory === "All" ||
          market.category ===
            selectedCategory
      )
      .filter((market) =>
        market.question
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .map((market) => (
        <MarketCard
          key={market.id}
          id={market.id}
          question={market.question}
          yes={market.yes}
          no={market.no}
          volume={market.volume}
          category={market.category}
          endDate={market.endDate}
          status={market.status}
        />
      ))}
  </div>
</main>

);
}
