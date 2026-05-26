import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{
      padding: "80px 40px", maxWidth: 640,
      margin: "0 auto", position: "relative", zIndex: 2
    }}>
      <div className="section-reveal">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: "var(--cyan)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>✦ say hello</div>
          <h2 style={{
            fontFamily: "Syne,sans-serif", fontSize: "clamp(30px,5vw,54px)", fontWeight: 800,
            background: "linear-gradient(135deg,#fff,#00e5ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Leave a thought<br />in my universe.</h2>
        </div>

        {sent ? (
          <div style={{
            background: "rgba(255,255,255,0.035)", border: "1px solid var(--border)",
            borderRadius: 18, padding: 52, textAlign: "center"
          }}>
            <div style={{ fontSize: 44, marginBottom: 14, animation: "float 2s ease infinite" }}>✦</div>
            <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: 22, color: "var(--cyan)", marginBottom: 10 }}>Thought received.</h3>
            <p style={{ color: "var(--muted)", fontFamily: "Crimson Pro,serif", fontStyle: "italic", fontSize: 18 }}>
              It's floating somewhere in my universe now.
            </p>
          </div>
        ) : (
          <div style={{
            background: "rgba(255,255,255,0.035)", border: "1px solid var(--border)",
            borderRadius: 18, padding: 30
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { key: "name", placeholder: "Your name", type: "input" },
                { key: "email", placeholder: "Your email", type: "input" },
                { key: "msg", placeholder: "Your thought…", type: "textarea" }
              ].map(f => f.type === "input" ? (
                <input key={f.key} placeholder={f.placeholder} value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                    borderRadius: 10, padding: "14px 18px", color: "var(--text)",
                    fontFamily: "Space Mono,monospace", fontSize: 12, outline: "none", width: "100%"
                  }} />
              ) : (
                <textarea key={f.key} rows={5} placeholder={f.placeholder} value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                    borderRadius: 10, padding: "14px 18px", color: "var(--text)",
                    fontFamily: "Space Mono,monospace", fontSize: 12,
                    outline: "none", resize: "vertical", width: "100%"
                  }} />
              ))}
              <button onClick={() => setSent(true)} style={{
                background: "linear-gradient(135deg,var(--cyan),var(--purple))",
                border: "none", color: "#fff", padding: "13px 28px",
                borderRadius: 10, fontFamily: "Space Mono,monospace",
                fontSize: 12, cursor: "pointer", alignSelf: "flex-start"
              }}>✦ Send into the universe</button>
            </div>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 40, flexWrap: "wrap" }}>
          {[
            { l: "Email", i: "✉", h: "mailto:priyanshivarshney2006@gmail.com" },
            { l: "LinkedIn", i: "in", h: "https://www.linkedin.com/in/priyanshi-varshney-179936316" },
            { l: "GitHub", i: "⌥", h: "https://github.com/Priyanshi-untitled" },
            { l: "YouTube", i: "▶", h: "#" },
          ].map(x => (
            <a key={x.l} href={x.h} style={{
              display: "flex", alignItems: "center", gap: 7,
              color: "var(--muted)", textDecoration: "none",
              fontSize: 12, transition: "color 0.3s"
            }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            ><span>{x.i}</span>{x.l}</a>
          ))}
        </div>
      </div>
    </section>
  );
}