const SKILLS = [
  { name: "Java", color: "#f89820" },
  { name: "DSA", color: "#00e5ff" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#68d451" },
  { name: "Express", color: "#aaaaaa" },
  { name: "MongoDB", color: "#4db33d" },
  { name: "HTML/CSS", color: "#e34c26" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Git", color: "#f05032" },
  { name: "Storytelling", color: "#7b2fff" },
];

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "80px 40px", maxWidth: 1100,
      margin: "0 auto", position: "relative", zIndex: 2
    }}>
      <div className="section-reveal">

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{
            fontFamily: "Syne,sans-serif", fontSize: "clamp(30px,5vw,54px)", fontWeight: 800,
            background: "linear-gradient(135deg,#fff,#7b2fff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Tools of the trade.</h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center" }}>
          {SKILLS.map((s, i) => (
            <div key={i}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.boxShadow = `0 0 28px ${s.color}55`;
                e.currentTarget.style.transform = "scale(1.18) translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "scale(1)";
              }}
              style={{
                width: 84, height: 84, borderRadius: "50%",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 6,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)", cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)"
              }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: s.color, boxShadow: `0 0 8px ${s.color}`
              }} />
              <div style={{
                fontSize: 10, color: s.color,
                textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.3
              }}>{s.name}</div>
            </div>
          ))}
        </div>

        {/* Orbiting animation */}
        <div style={{
          position: "relative", width: 220, height: 220,
          margin: "44px auto 0", display: "flex",
          alignItems: "center", justifyContent: "center"
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: "linear-gradient(135deg,var(--cyan),var(--purple))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, boxShadow: "0 0 40px rgba(0,229,255,0.3)", zIndex: 1
          }}>⚡</div>
          <div style={{
            position: "absolute", width: 160, height: 160, borderRadius: "50%",
            border: "1px dashed rgba(0,229,255,0.18)",
            animation: "rotate-slow 18s linear infinite"
          }} />
          <div style={{
            position: "absolute", width: 210, height: 210, borderRadius: "50%",
            border: "1px dashed rgba(123,47,255,0.12)",
            animation: "rotate-rev 26s linear infinite"
          }} />
          {["Java", "React", "Node"].map((t, i) => (
            <div key={i} style={{
              position: "absolute",
              animation: `orbit ${5 + i * 2.5}s linear infinite`,
              animationDelay: `${i * 1.5}s`,
              width: 34, height: 34, borderRadius: "50%",
              background: "rgba(0,229,255,0.06)",
              border: "1px solid rgba(0,229,255,0.2)",
              display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 9, color: "var(--cyan)"
            }}>{t}</div>
          ))}
        </div>

      </div>
    </section>
  );
}
