export default function Hero() {
  return (
    <section
      style={{
        marginTop: "60px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "80px",
          fontWeight: "bold",
          lineHeight: 1,
        }}
      >
        ARC
        <br />
        PREDICT
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "22px",
          color: "#bbb",
        }}
      >
        Trade prediction markets on Arc Testnet
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <button
          style={{
            background: "#C6FF00",
            color: "#000",
            border: "none",
            padding: "15px 35px",
            borderRadius: "18px",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Start Trading
        </button>

        <button
          style={{
            background: "#3454FF",
            color: "white",
            border: "none",
            padding: "15px 35px",
            borderRadius: "18px",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Explore Markets
        </button>
      </div>
    </section>
  );
}