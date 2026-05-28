import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["hero", "story", "skills", "projects", "contact"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "16px 24px", display: "flex", alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(4,6,15,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: "linear-gradient(135deg,var(--cyan),var(--purple))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 14, flexShrink: 0
          }}>P</div>
          <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 15 }}>
            Priyanshi
          </span>
        </div>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 28 }}>
          {navLinks.map(s => (
            <span key={s} onClick={() => scrollTo(s)} style={{
              color: "var(--muted)", fontSize: 11, letterSpacing: "0.12em",
              textTransform: "uppercase", cursor: "pointer", transition: "color 0.3s"
            }}
              onMouseEnter={e => e.target.style.color = "var(--cyan)"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >{s}</span>
          ))}
        </div>

        {/* Hamburger - mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid rgba(0,229,255,0.25)",
            borderRadius: 8, color: "var(--cyan)",
            padding: "6px 10px", cursor: "pointer",
            fontSize: 18, lineHeight: 1
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 67, left: 0, right: 0, zIndex: 999,
          background: "rgba(4,6,15,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,229,255,0.12)",
          display: "flex", flexDirection: "column",
          animation: "fadeUp 0.2s ease"
        }}>
          {navLinks.map(s => (
            <span key={s} onClick={() => scrollTo(s)} style={{
              color: "var(--muted)", fontSize: 12, letterSpacing: "0.15em",
              textTransform: "uppercase", cursor: "pointer",
              padding: "16px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.target.style.color = "var(--cyan)"; e.target.style.background = "rgba(0,229,255,0.04)"; }}
              onMouseLeave={e => { e.target.style.color = "var(--muted)"; e.target.style.background = "transparent"; }}
            >{s}</span>
          ))}
        </div>
      )}
    </>
  );
}