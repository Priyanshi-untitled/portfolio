const EDUCATION = [
  {
    icon: "🎓", period: "2025- 2029",
    degree: "B.Tech",
    institution: "Zakir Hussain College Of Engineering And Technology , Aligarh", 
    tag: "Currently Pursuing", color: "#00e5ff"
  },
  {
    icon: "📚", period: "2024",
    degree: "Class XII — Science (PCM)",
    institution: "Heritage International School, Aligarh", // ← FILL
    tag: "Completed", color: "#7b2fff"
  },
];

const CLUBS = [
  { name: "Autonomous Underwater Vehicle Club",
  role: "Tech Trainee",
  desc: "Contributing to real-world underwater robotics projects while learning development, teamwork, and technical problem-solving.",
  icon: "🌊",
  color: "#00b4d8" },
];

const HACKATHONS = [
  { name: "DXRAY Hackathon",
  year: "2026",
  result: "Top 25 Finalist",
  desc: "Collaborated on an innovative tech solution under high-pressure hackathon conditions, focusing on problem-solving, rapid development, and teamwork.",
  color: "#8b5cf6", },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: "80px 40px", maxWidth: 1000,
      margin: "0 auto", position: "relative", zIndex: 2
    }}>

      {/* Education */}
      <div className="section-reveal" style={{ marginBottom: 80 }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ color: "var(--cyan)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>✦ academic journey</div>
          <h2 style={{
            fontFamily: "Syne,sans-serif", fontSize: "clamp(30px,5vw,54px)", fontWeight: 800,
            background: "linear-gradient(135deg,#fff,#7b2fff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Where I studied.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
          {EDUCATION.map((ed, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: 28, transition: "all 0.4s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${ed.color}40`; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: `${ed.color}18`, border: `1px solid ${ed.color}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, flexShrink: 0
                }}>{ed.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: ed.color, letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" }}>{ed.period}</div>
                  <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{ed.degree}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 12, marginBottom: 10 }}>{ed.institution}</p>
                  <span style={{
                    borderRadius: 100, padding: "3px 12px", fontSize: 11,
                    background: `${ed.color}0d`, border: `1px solid ${ed.color}33`, color: ed.color
                  }}>{ed.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clubs */}
      <div className="section-reveal" style={{ marginBottom: 80 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: "var(--purple)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>✦ campus life</div>
          <h2 style={{
            fontFamily: "Syne,sans-serif", fontSize: "clamp(30px,5vw,54px)", fontWeight: 800,
            background: "linear-gradient(135deg,#fff,#7b2fff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Clubs & communities.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {CLUBS.map((c, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14, padding: 24, transition: "all 0.4s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}55`; e.currentTarget.style.background = `${c.color}07`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontSize: 10, color: c.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{c.role}</div>
              <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 9 }}>{c.name}</h3>
              <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hackathons */}
      <div className="section-reveal">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: "var(--green)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>✦ proof of work</div>
          <h2 style={{
            fontFamily: "Syne,sans-serif", fontSize: "clamp(30px,5vw,54px)", fontWeight: 800,
            background: "linear-gradient(135deg,#fff,#00ff88)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Hackathons.</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {HACKATHONS.map((h, i) => (
            <div key={i}
              onClick={() => h.proof && window.open(h.proof, "_blank")}
              style={{
                background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 14, padding: 20, transition: "all 0.4s",
                cursor: h.proof ? "pointer" : "default"
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${h.color}40`; e.currentTarget.style.background = `${h.color}05`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 7 }}>
                <div>
                  <h4 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{h.name}</h4>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>{h.year}</div>
                </div>
                <span style={{
                  borderRadius: 100, padding: "3px 12px", fontSize: 11,
                  background: `${h.color}14`, border: `1px solid ${h.color}35`, color: h.color
                }}>{h.result}</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.6 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}