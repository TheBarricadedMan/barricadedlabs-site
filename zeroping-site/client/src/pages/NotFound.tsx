import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0E1411",
        color: "#F4F1EA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "480px", padding: "2rem" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.75rem",
            color: "#7EC99A",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            color: "#F4F1EA",
          }}
        >
          Page not found.
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(244,241,234,0.55)",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
          }}
        >
          The page you are looking for does not exist.
        </p>
        <button
          onClick={() => setLocation("/")}
          style={{
            backgroundColor: "#7EC99A",
            color: "#0E1411",
            border: "none",
            padding: "0.75rem 1.75rem",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "0.9375rem",
            cursor: "pointer",
            letterSpacing: "-0.01em",
          }}
        >
          Go home
        </button>
      </div>
    </div>
  );
}
