"use client";

import Link from "next/link";

type MarketCardProps = {
id: number;
question: string;
yes: number;
no: number;
volume: string;
category: string;
status?: string;
endDate?: string;
};

export default function MarketCard({
id,
question,
yes,
no,
volume,
category,
status,
endDate,
}: MarketCardProps) {
const deleteMarket = () => {
const savedMarkets = JSON.parse(
localStorage.getItem("markets") || "[]"
);
const updatedMarkets = savedMarkets.filter(
  (market: any) => market.id !== id
);

localStorage.setItem(
  "markets",
  JSON.stringify(updatedMarkets)
);

window.location.reload();

};

return (
<div
style={{
background:
"linear-gradient(135deg,#3454FF,#2538C7)",
borderRadius: "32px",
padding: "30px",
color: "white",
boxShadow:
"0 10px 30px rgba(0,0,0,0.4)",
}}
>
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "15px",
}}
>
<span
style={{
background: "rgba(255,255,255,0.15)",
padding: "6px 12px",
borderRadius: "999px",
fontSize: "13px",
}}
>
{category} </span>
    {status && (
      <span
        style={{
          color: "#C6FF00",
          fontWeight: "bold",
        }}
      >
        {status}
      </span>
    )}
  </div>

  <h2
    style={{
      fontSize: "28px",
      marginBottom: "15px",
    }}
  >
    {question}
  </h2>

  <p
    style={{
      opacity: 0.9,
    }}
  >
    Volume: {volume}
  </p>

  {endDate && (
    <p
      style={{
        opacity: 0.9,
      }}
    >
      End Date: {endDate}
    </p>
  )}

  <div
    style={{
      display: "flex",
      gap: "15px",
      marginTop: "25px",
    }}
  >
    <button
      style={{
        flex: 1,
        background: "#C6FF00",
        color: "#000",
        border: "none",
        padding: "18px",
        borderRadius: "20px",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      YES {yes}%
    </button>

    <button
      style={{
        flex: 1,
        background: "#FF2D2D",
        color: "white",
        border: "none",
        padding: "18px",
        borderRadius: "20px",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      NO {no}%
    </button>
  </div>

  <div
    style={{
      display: "flex",
      gap: "12px",
      marginTop: "25px",
    }}
  >
    <Link href={`/market/${id}`}>
      <button
        style={{
          background: "white",
          color: "#111",
          border: "none",
          padding: "12px 20px",
          borderRadius: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        View Market
      </button>
    </Link>

    {category === "Custom" && (
      <button
        onClick={deleteMarket}
        style={{
          background: "#111",
          color: "white",
          border: "1px solid #444",
          padding: "12px 20px",
          borderRadius: "16px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    )}
  </div>
</div>

);
}
