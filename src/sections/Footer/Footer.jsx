export default function Footer() {
  return (
    <footer style={{
      textAlign: "center", padding: 32,
      borderTop: "1px solid rgba(255,255,255,0.04)",
      position: "relative", zIndex: 2
    }}>
      <p style={{
        fontFamily: "Crimson Pro,serif", fontStyle: "italic",
        fontSize: 20, color: "var(--muted)"
      }}>"Somewhere between code & camera."</p>
      <p style={{
        color: "rgba(90,98,120,0.45)", fontSize: 10,
        marginTop: 10, letterSpacing: "0.12em"
      }}>
        PRIYANSHI VARSHNEY © 2026 — BUILT WITH ♥.
      </p>
    </footer>
  );
}