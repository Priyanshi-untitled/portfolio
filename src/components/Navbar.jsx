export default function Navbar() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "16px 48px", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(4,6,15,0.8)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.04)"
    }}>
      <div style= {{display:"flex", alignItems: "center", gap:10}}>
        <div style ={{
          width: 34, height: 34, borderRadius: "50%",
          background: "linear-gradient(135deg,var(--cyan),var(--purple))",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 14
        }}>P</div>
      <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 15 }}>
        Priyanshi Varshney
      </span>
      </div>
      <div style={{ display: "flex", gap: 28 }}>
        {["hero","story","skills","projects","contact"].map(s => (
          <span key={s} onClick={() => scrollTo(s)} style={{
            color: "var(--muted)", fontSize: 11, letterSpacing: "0.12em",
            textTransform: "uppercase", cursor: "pointer"
          }}
          onMouseEnter={e => e.target.style.color = "var(--cyan"}
          onMouseLeave={e => e.target.style.color = "var(--muted)"}
          >{s}</span>
        ))}
      </div>
    </nav>
  );
}