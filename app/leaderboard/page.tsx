export default function LeaderboardPage() {
  const users = [
  {
  rank: 1,
  name: "TraderX",
  profit: 4500,
  },
  {
  rank: 2,
  name: "ArcWhale",
  profit: 3200,
  },
  {
  rank: 3,
  name: "CryptoKing",
  profit: 1800,
  },
  {
  rank: 4,
  name: "MoonBoy",
  profit: 900,
  },
  {
  rank: 5,
  name: "DiamondHands",
  profit: 500,
  },
  ];
  
  return (
  <main
  style={{
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  padding: "40px",
  }}
  > <h1>Leaderboard</h1>
  
  
    {users.map((user) => (
      <div
        key={user.rank}
        style={{
          padding: "20px",
          marginTop: "20px",
          border: "1px solid #333",
          borderRadius: "12px",
          background: "#111",
        }}
      >
        <h2>#{user.rank}</h2>
  
        <p>Name: {user.name}</p>
  
        <p
          style={{
            color: "lightgreen",
            fontWeight: "bold",
          }}
        >
          Profit: ${user.profit}
        </p>
      </div>
    ))}
  </main>
  
  );
  }
  