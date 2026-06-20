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

if (savedYes) setYesShares(Number(savedYes));
if (savedNo) setNoShares(Number(savedNo));

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
      borderRadius: "16px",
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
      Status:
      {resolved
        ? " 🔴 Resolved"
        : " 🟢 Open"}
    </p>

    <input
      type="number"
      placeholder="Amount (USDC)"
      value={amount}
      onChange={(e) =>
        setAmount(e.target.value)
      }
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
          if (resolved) {
            alert("Market already resolved");
            return;
          }

          const value = Number(amount || 0);

          const currentBalance = Number(
            localStorage.getItem("balance") ||
              "1000"
          );

          if (value > currentBalance) {
            alert("Not enough balance");
            return;
          }

          localStorage.setItem(
            "balance",
            String(currentBalance - value)
          );

          const newYes =
            yesShares + value;

          setYesShares(newYes);

          localStorage.setItem(
            `yes-${id}`,
            String(newYes)
          );

          const trades = JSON.parse(
            localStorage.getItem(
              "tradeHistory"
            ) || "[]"
          );

          trades.push({
            market: market.question,
            side: "YES",
            amount: value,
            time: new Date().toLocaleString(),
          });

          localStorage.setItem(
            "tradeHistory",
            JSON.stringify(trades)
          );

          const portfolio = JSON.parse(
            localStorage.getItem(
              "portfolio"
            ) || "[]"
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

          setMessage(
            `Bought YES with ${value} USDC`
          );

          setAmount("");
        }}
        style={{
          padding: "12px 24px",
          background: "#C6FF00",
          color: "black",
          border: "none",
          borderRadius: "999px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Buy YES
      </button>

      <button
        onClick={() => {
          if (resolved) {
            alert("Market already resolved");
            return;
          }

          const value = Number(amount || 0);

          const currentBalance = Number(
            localStorage.getItem("balance") ||
              "1000"
          );

          if (value > currentBalance) {
            alert("Not enough balance");
            return;
          }

          localStorage.setItem(
            "balance",
            String(currentBalance - value)
          );

          const newNo =
            noShares + value;

          setNoShares(newNo);

          localStorage.setItem(
            `no-${id}`,
            String(newNo)
          );

          const trades = JSON.parse(
            localStorage.getItem(
              "tradeHistory"
            ) || "[]"
          );

          trades.push({
            market: market.question,
            side: "NO",
            amount: value,
            time: new Date().toLocaleString(),
          });

          localStorage.setItem(
            "tradeHistory",
            JSON.stringify(trades)
          );

          const portfolio = JSON.parse(
            localStorage.getItem(
              "portfolio"
            ) || "[]"
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

          setMessage(
            `Bought NO with ${value} USDC`
          );

          setAmount("");
        }}
        style={{
          padding: "12px 24px",
          background: "#FF4D4D",
          color: "white",
          border: "none",
          borderRadius: "999px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Buy NO
      </button>
    </div>

    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "20px",
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

          const reward =
            yesShares;

          const balance = Number(
            localStorage.getItem(
              "balance"
            ) || "1000"
          );

          localStorage.setItem(
            "balance",
            String(balance + reward)
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

          const reward =
            noShares;

          const balance = Number(
            localStorage.getItem(
              "balance"
            ) || "1000"
          );

          localStorage.setItem(
            "balance",
            String(balance + reward)
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
          color: "#C6FF00",
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
      {(yesShares *
        currentYesPrice) /
        100}
    </p>

    <div
      style={{
        marginTop: "30px",
      }}
    >
      <PriceChart />
    </div>
  </div>
</main>

);
}
