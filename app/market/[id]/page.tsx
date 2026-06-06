"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { markets } from "../../markets";
import PriceChart from "../../components/PriceChart";

export default function MarketPage() {
const params = useParams();
const id = params.id as string;

const market = markets.find(
(m) => m.id === Number(id)
);

const [amount, setAmount] = useState("");
const [yesShares, setYesShares] = useState(0);
const [noShares, setNoShares] = useState(0);
const [message, setMessage] = useState("");

const [resolved, setResolved] = useState(false);
const [winner, setWinner] = useState("");

useEffect(() => {
  const savedYes = localStorage.getItem(`yes-${id}`);
  const savedNo = localStorage.getItem(`no-${id}`);

  const savedResolved =
    localStorage.getItem(`resolved-${id}`);

  const savedWinner =
    localStorage.getItem(`winner-${id}`);

  if (savedYes) {
    setYesShares(Number(savedYes));
  }

  if (savedNo) {
    setNoShares(Number(savedNo));
  }

  if (savedResolved === "true") {
    setResolved(true);
  }

  if (savedWinner) {
    setWinner(savedWinner);
  }
}, [id]);
if (!market) {
return <h1>Market Not Found</h1>;
}

const currentYesPrice = market.yes;

return (
<main
style={{
minHeight: "100vh",
background: "#050505",
color: "white",
padding: "40px",
}}
> <h1>{market.question}</h1>

  <div
    style={{
      marginTop: "30px",
      padding: "25px",
      border: "1px solid #333",
      borderRadius: "12px",
      maxWidth: "700px",
      background: "#111",
    }}
  >
    <p>Category: {market.category}</p>
    <p>YES Probability: {market.yes}%</p>
    <p>NO Probability: {market.no}%</p>
    <p>Volume: {market.volume}</p>
    <p>End Date: {market.endDate}</p>

    <p>
      Status: {resolved ? "🔴 Resolved" : "🟢 Open"}
    </p>

    <input
      type="number"
      placeholder="Amount (USDC)"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      style={{
        marginTop: "20px",
        padding: "12px",
        borderRadius: "8px",
        width: "200px",
      }}
    />

    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "20px",
      }}
    >
      <button
        onClick={() => {
          const value = Number(amount || 0);

          const storedBalance =
          localStorage.getItem("balance");
        
        const currentBalance = storedBalance
          ? Number(storedBalance)
          : 1000;

          if (value > currentBalance) {
            alert("Not enough balance");
            return;
          }

          localStorage.setItem(
            "balance",
            String(currentBalance - value)
          );

          const newYes = yesShares + value;

          const oldTrades = JSON.parse(
            localStorage.getItem("tradeHistory") ||
              "[]"
          );

          oldTrades.push({
            market: market.question,
            side: "YES",
            amount: value,
            time: new Date().toLocaleString(),
          });
          const portfolio = JSON.parse(
            localStorage.getItem("portfolio") || "[]"
          );
          
          portfolio.push({
            market: market.question,
            side: "YES",
            shares: value,
          });
          
          localStorage.setItem(
            "portfolio",
            JSON.stringify(portfolio)
          );
          localStorage.setItem(
            "tradeHistory",
            JSON.stringify(oldTrades)
          );

          setYesShares(newYes);

          localStorage.setItem(
            `yes-${id}`,
            String(newYes)
          );

          setMessage(
            `Bought YES with ${value} USDC`
          );

          setAmount("");
        }}
        style={{
          padding: "12px 24px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          opacity: resolved ? 0.5 : 1,
        }}
      >
        Buy YES
      </button>

      <button
        onClick={() => {
          const value = Number(amount || 0);

          const storedBalance =
  localStorage.getItem("balance");

const currentBalance = storedBalance
  ? Number(storedBalance)
  : 1000;

          if (value > currentBalance) {
            alert("Not enough balance");
            return;
          }

          localStorage.setItem(
            "balance",
            String(currentBalance - value)
          );

          const newNo = noShares + value;

          const oldTrades = JSON.parse(
            localStorage.getItem("tradeHistory") ||
              "[]"
          );

          oldTrades.push({
            market: market.question,
            side: "NO",
            amount: value,
            time: new Date().toLocaleString(),
          });
          const portfolio = JSON.parse(
            localStorage.getItem("portfolio") || "[]"
          );
          
          portfolio.push({
            market: market.question,
            side: "NO",
            shares: value,
          });
          
          localStorage.setItem(
            "portfolio",
            JSON.stringify(portfolio)
          );
          localStorage.setItem(
            "tradeHistory",
            JSON.stringify(oldTrades)
          );

          setNoShares(newNo);

          localStorage.setItem(
            `no-${id}`,
            String(newNo)
          );

          setMessage(
            `Bought NO with ${value} USDC`
          );

          setAmount("");
        }}
        style={{
          padding: "12px 24px",
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

    <div
      style={{
        marginTop: "25px",
        display: "flex",
        gap: "10px",
      }}
    >
      <button
      disabled={resolved}
  onClick={() => {
    setResolved(true);
    setWinner("YES");

    localStorage.setItem(
      `resolved-${id}`,
      "true"
    );

    localStorage.setItem(
      `winner-${id}`,
      "YES"
    );
  }}
>
  Resolve YES
</button>

<button
 disabled={resolved}
  onClick={() => {
    setResolved(true);
    setWinner("NO");

    localStorage.setItem(
      `resolved-${id}`,
      "true"
    );

    localStorage.setItem(
      `winner-${id}`,
      "NO"
    );
  }}
>
  Resolve NO
</button>
    </div>

    <p style={{ marginTop: "20px" }}>
      {message}
    </p>

    {winner && (
      <h3
        style={{
          marginTop: "20px",
          color: "lightgreen",
        }}
      >
        Winner: {winner}
      </h3>
    )}

    <h3>Your Position</h3>

    <p>YES Shares: {yesShares}</p>
    <p>NO Shares: {noShares}</p>

    <p>
      Estimated Value: $
      {(yesShares * currentYesPrice) / 100}
    </p>

    <div style={{ marginTop: "30px" }}>
      <PriceChart />
    </div>
  </div>
</main>
);
}
