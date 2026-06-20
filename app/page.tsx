"use client";

import { useState, useEffect } from "react";
import { markets as initialMarkets } from "./markets";
import Hero from "./components/Hero";
import MarketCard from "./components/MarketCard";
import Footer from "./components/Footer";

export default function Home() {
const [question, setQuestion] = useState("");
const [endDate, setEndDate] = useState("");
const [marketList, setMarketList] = useState(initialMarkets);

useEffect(() => {
const savedMarkets =
localStorage.getItem("markets");

if (savedMarkets) {
  setMarketList(JSON.parse(savedMarkets));
}

}, []);

const totalMarkets = marketList.length;

const totalVolume = marketList.reduce(
(sum, market) =>
sum +
Number(
market.volume
?.replace("$", "")
?.replace(",", "") || 0
),
0
);

const resolvedMarkets = marketList.filter(
(m) => m.status === "Resolved"
).length;

const trendingMarkets = [...marketList]
.sort(
(a, b) =>
Number(
b.volume
?.replace("$", "")
?.replace(",", "") || 0
) -
Number(
a.volume
?.replace("$", "")
?.replace(",", "") || 0
)
)
.slice(0, 3);

return (
<main
style={{
minHeight: "100vh",
background: "#050505",
color: "white",
padding: "40px",
}}
> <Hero />

  <section
    style={{
      marginTop: "50px",
    }}
  >
    <h2>🔥 Trending Markets</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {trendingMarkets.map((market) => (
        <div
          key={market.id}
          style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3>{market.question}</h3>

          <p>Volume: {market.volume}</p>

          <p>YES: {market.yes}%</p>
        </div>
      ))}
    </div>
  </section>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(200px,1fr))",
      gap: "20px",
      marginTop: "40px",
    }}
  >
    <div
      style={{
        padding: "20px",
        background: "#111",
        border: "1px solid #333",
        borderRadius: "12px",
      }}
    >
      <h2>{totalMarkets}</h2>
      <p>Markets</p>
    </div>

    <div
      style={{
        padding: "20px",
        background: "#111",
        border: "1px solid #333",
        borderRadius: "12px",
      }}
    >
      <h2>${totalVolume.toLocaleString()}</h2>
      <p>Volume</p>
    </div>

    <div
      style={{
        padding: "20px",
        background: "#111",
        border: "1px solid #333",
        borderRadius: "12px",
      }}
    >
      <h2>1200</h2>
      <p>Users</p>
    </div>

    <div
      style={{
        padding: "20px",
        background: "#111",
        border: "1px solid #333",
        borderRadius: "12px",
      }}
    >
      <h2>{resolvedMarkets}</h2>
      <p>Resolved Markets</p>
    </div>
  </div>

  <section
    style={{
      marginTop: "100px",
    }}
  >
    <h2>Active Markets</h2>

    <div
      style={{
        display: "grid",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {marketList.map((market) => (
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
  </section>

  <Footer />
</main>

);
}
