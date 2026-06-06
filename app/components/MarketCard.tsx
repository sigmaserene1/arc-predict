import Link from "next/link";

type MarketCardProps = {
id: number;
question: string;
yes: number;
no: number;
volume: string;
category: string;
endDate: string;
status: string;
};

export default function MarketCard({
id,
question,
yes,
no,
volume,
category,
endDate,
status,
}: MarketCardProps) {
return (
<Link
href={`/market/${id}`}
style={{
textDecoration: "none",
color: "white",
}}
>
<div
onMouseEnter={(e) => {
e.currentTarget.style.transform = "translateY(-4px)";
}}
onMouseLeave={(e) => {
e.currentTarget.style.transform = "translateY(0px)";
}}
style={{
padding: "24px",
width: "100%",
maxWidth: "900px",
border: "1px solid #333",
borderRadius: "16px",
background: "#111",
cursor: "pointer",
boxShadow: "0 0 12px rgba(255,255,255,0.05)",
transition: "0.2s",
}}
> <h3>{question}</h3>

    <p>Category: {category}</p>

    <p>
      {status === "Open"
        ? "🟢 Open"
        : "🔴 Resolved"}
    </p>

    <p>YES: {yes}%</p>
    <p>NO: {no}%</p>

    <p>Volume: {volume}</p>

    <p>Ends: {endDate}</p>

    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <button
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Buy YES
      </button>

      <button
        style={{
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Buy NO
      </button>
    </div>
  </div>
</Link>
);
}
