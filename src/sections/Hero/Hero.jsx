import { useState } from "react";

const THOUGHTS = [
  "Some bugs teach more than tutorials.",
  "The camera and the compiler both ask: what story are you telling?",
  "Every error is just a plot twist.",
  "Still learning. Still building.",
  "Consistency is the most boring superpower.",
  "Code by day, story by night.",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);

  const regenerate = () => {
    setShow(false);
    setTimeout(() => {
      setIdx(i => (i + 1) % THOUGHTS.length);
      setShow(true);
    }, 100);
  };

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", textAlign: "center",
      padding: "100px 20px 40px", position: "relative", zIndex: 2
    }}>
      <div style={{ maxWidth: 760, width: "100%" }}>

        <div style={{
          display: "inline-block",
          background: "rgba(0,229,255,0.07)",
          border: "1px solid rgba(0,229,255,0.2)",
          borderRadius: 100, padding: "6px 20px",
          fontSize: 11, letterSpacing: "0.15em",
          color: "var(--cyan)", marginBottom: 28, textTransform: "uppercase"
        }}>✦ Developer & Creator</div>

        <h1 style={{
          fontFamily: "Crimson Pro,serif",
          fontSize: "clamp(40px,9vw,96px)",
          fontWeight: 300, fontStyle: "italic",
          lineHeight: 1.05, marginBottom: 28,
          background: "linear-gradient(135deg,#fff 0%,#00e5ff 55%,#7b2fff 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundSize: "200% auto", animation: "shimmer 5s linear infinite"
        }}>
          Somewhere between<br />code & camera.
        </h1>

        <p style={{
          color: "var(--muted)", fontFamily: "Crimson Pro,serif",
          fontStyle: "italic", fontSize: "clamp(15px,2vw,19px)",
          maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.85
        }}>
          Still figuring out where life takes me… but somewhere between coding,
          storytelling, and creating, I started rebuilding myself.
        </p>

        <div className="hero-buttons" style={{
          display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap"
        }}>
          <button onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "linear-gradient(135deg,var(--cyan),var(--purple))",
              border: "none", color: "#fff", padding: "13px 28px",
              borderRadius: 10, fontFamily: "Space Mono,monospace",
              fontSize: 12, cursor: "pointer"
            }}>✦ Enter My World</button>

          <button onClick={regenerate} style={{
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--cyan)", padding: "13px 28px",
            borderRadius: 10, fontFamily: "Space Mono,monospace",
            fontSize: 12, cursor: "pointer"
          }}>↻ Regenerate Idea</button>
        </div>

        {show && (
          <div key={idx} style={{
            marginTop: 28, padding: "16px 28px",
            background: "rgba(0,229,255,0.06)",
            border: "1px solid rgba(0,229,255,0.18)",
            borderRadius: 14, display: "inline-block",
            fontFamily: "Crimson Pro,serif", fontStyle: "italic",
            color: "var(--cyan)", fontSize: 17,
            animation: "fadeUp 0.5s ease", maxWidth: 480
          }}>"{THOUGHTS[idx]}"</div>
        )}

      </div>
    </section>
  );
}