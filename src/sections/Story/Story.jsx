const TIMELINE = [
  { year: "April 2025", event: "Failed in JEE but decided to restart instead of giving up", icon: "🌱" },
  { year: "May 2025", event: "Started learning my first programming language", icon: "💻" },
  { year: "May 2025", event: "Created my first-ever YouTube channel", icon: "📹" },
  { year: "July 2025", event: "Started Data Structures & Algorithms journey", icon: "🧠" },
  { year: "December 2025", event: "Began Web Development and started building projects", icon: "🌐" },
  { year: "March 2026", event: "Completed development batches, hackathons, and major projects", icon: "⚡" },
  { year: "May 2026", event: "Started contributing to Open Source via GSSoC", icon: "🚀" },
];

export default function Story() {
  return (
    <section id="story" style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto",position: "relative", zIndex: 2 }}>
      <div className="section-reveal">
        <div style= {{ textAlign: "center", marginBottom: 52}}>
          <div style={{
            color: "var(--orange)", fontSize: 11,
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12
          }}>✦ the story so far</div>
          <h2 style={{
            fontFamily: "Syne,sans-serif", fontSize: "clamp(30px,5vw,54px)",
            fontWeight: 800,
            background: "linear-gradient(135deg,#fff,#00e5ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Not a bio. A journey.</h2>
        </div>

        <div style={{position: "relative", paddingLeft: 28}}>
          <div style={{
            position: "absolute", left: 4, top: 0, bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom,var(--cyan),var(--purple),transparent)"
          }}/>
          {TIMELINE.map((item,i)=> (
            <div key={i} style={{ display: "flex", gap: 20, marginBottom: 32, position: "relative" }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%",
                background: "var(--cyan)", boxShadow: "0 0 14px var(--cyan)",
                position: "absolute", left: -24, marginTop: 4
              }} />
              <div>
                <div style={{
                  fontSize: 11, color: "var(--cyan)",
                  letterSpacing: "0.15em", marginBottom: 5
                }}>{item.year} {item.icon}</div>
                <div style={{
                  fontSize: 15, fontFamily: "Syne,sans-serif", fontWeight: 600
                }}>{item.event}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          background: "rgba(255,255,255,0.035)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(24px)", borderRadius: 18,
          padding: 30, marginTop: 16
        }}>
          <p style={{
            fontFamily: "Crimson Pro,serif", fontStyle: "italic",
            fontSize: 18, lineHeight: 1.85, color: "rgba(232,234,240,0.82)"
          }}>
            I’m Priyanshi — a B.Tech student who codes by day and creates by night.
            I don’t have everything figured out, and honestly, I’ve stopped pretending that I do. Somewhere between debugging errors, building projects, creating content, and documenting my journey online, I started discovering who I really want to become.

            This website is more than just tech for me — it’s a small reflection of everything I’m learning, building, feeling, and growing through along the way.
          </p>
        </div>
      </div>
    </section>
  );
}