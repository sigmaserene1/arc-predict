"use client";

import { useState } from "react";
import { markets as initialMarkets } from "./markets";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarketCard from "./components/MarketCard";
import Footer from "./components/Footer";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [endDate, setEndDate] = useState("");
  const [marketList, setMarketList] = useState(initialMarkets);



  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px",
      }}
    >

      <Hero />
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "20px",
    marginTop: "30px",
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
    <h2>3</h2>
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
    <h2>$250K</h2>
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
    <h2>15</h2>
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

      <section
        style={{
          marginTop: "100px",
        }}
      >
        <h2>Create Market</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
            maxWidth: "600px",
          }}
        >
          <input
            placeholder="Market Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
            }}
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
            }}
          />

          <button
            onClick={() => {
              if (!question) return;

              setMarketList([
                ...marketList,
                {
                  id: Math.max(...marketList.map((m) => m.id), 0) + 1,
                  category: "Custom",
                  question,
                  yes: 50,
                  no: 50,
                  volume: "$0",
                  status: "Open",
                  endDate: endDate || "TBD",
                }
              ]);

              setQuestion("");
              setEndDate("");
            }}
            style={{
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Create Market
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}