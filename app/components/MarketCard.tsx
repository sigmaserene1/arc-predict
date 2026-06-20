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

```
const updatedMarkets = savedMarkets.filter(
  (market: any) => market.id !== id
);

localStorage.setItem(
  "markets",
  JSON.stringify(updatedMarkets)
);

window.location.reload();
```

};

return (
<div
style={{
background: "#111111",
border: "1px solid #222",
borderRadius: "24px",
padding: "24px",
color: "white",
transition: "0.2s",
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
background: "#1a1a1a",
border: "1px solid #333",
padding: "6px 12px",
borderRadius: "999px",
fontSize: "12px",
}}
>
{category} </span>

    {status && (
      <span
        style={{
          color:
            status === "Resolved"
              ? "#C6FF00"
              : "#999",
          fontWeight: "bold",
        }}
      >
        {status}
      </span>
    )}
  </div>

  <h2
    style={{
      fontSize: "24px",
      marginBottom: "20px",
      lineHeight: "1.4",
    }}
  >
    {question}
  </h2>

  <div
    style={{
      marginBottom: "15px",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
      }}
    >
      <span style={{ color: "#C6FF00" }}>
        YES {yes}%
      </span>

      <span style={{ color: "#FF4D4D" }}>
        NO {no}%
      </span>
    </div>

    <div
      style={{
        height: "10px",
        background: "#222",
        borderRadius: "999px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${yes}%`,
          height: "100%",
          background: "#C6FF00",
        }}
      />
    </div>
  </div>

  <p style={{ color: "#999" }}>
    Volume: {volume}
  </p>

  {endDate && (
    <p style={{ color: "#999" }}>
      Ends: {endDate}
    </p>
  )}

  <div
    style={{
      display: "flex",
      gap: "12px",
      marginTop: "20px",
    }}
  >
    <button
      style={{
        flex: 1,
        background: "#C6FF00",
        color: "#000",
        border: "none",
        padding: "14px",
        borderRadius: "999px",
        fontWeight: "bold",
      }}
    >
      YES
    </button>

    <button
      style={{
        flex: 1,
        background: "#FF4D4D",
        color: "white",
        border: "none",
        padding: "14px",
        borderRadius: "999px",
        fontWeight: "bold",
      }}
    >
      NO
    </button>
  </div>

  <div
    style={{
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    }}
  >
    <Link href={`/market/${id}`}>
      <button
        style={{
          background: "white",
          color: "black",
          border: "none",
          padding: "10px 18px",
          borderRadius: "999px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        View Market
      </button>
    </Link>

    {category === "Custom" && (
      <button
        onClick={deleteMarket}
        style={{
          background: "#1a1a1a",
          color: "white",
          border: "1px solid #333",
          padding: "10px 18px",
          borderRadius: "999px",
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
