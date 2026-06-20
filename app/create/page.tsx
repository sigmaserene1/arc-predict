"use client";

import { markets as defaultMarkets } from "../markets";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePage() {
  const [question, setQuestion] = useState("");
  const [endDate, setEndDate] = useState("");

  const router = useRouter();

  const createMarket = () => {
    if (!question.trim()) return;

    const existing = JSON.parse(
      localStorage.getItem("markets") ||
        JSON.stringify(defaultMarkets)
    );

    const newMarket = {
      id: Date.now(),
      category: "Custom",
      question,
      yes: 50,
      no: 50,
      volume: "$0",
      status: "Open",
      endDate: endDate || "TBD",
    };

    const updated = [...existing, newMarket];

    localStorage.setItem(
      "markets",
      JSON.stringify(updated)
    );

    setQuestion("");
    setEndDate("");

    router.push("/markets");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Create Market</h1>

      <input
        placeholder="Market Question"
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        style={{
          display: "block",
          width: "400px",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      />

      <input
        type="date"
        value={endDate}
        onChange={(e) =>
          setEndDate(e.target.value)
        }
        style={{
          display: "block",
          width: "400px",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={createMarket}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Create Market
      </button>
    </main>
  );
}