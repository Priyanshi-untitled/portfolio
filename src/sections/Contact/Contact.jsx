import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.msg.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xojbybqj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.msg
        })
      });
      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", msg: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
    borderRadius: 10, padding: "14px 18px", color: "var(--text)",
    fontFamily: "Space Mono,monospace", fontSize: 12, outline: "none",
    width: "100%", boxSizing: "border-box", transition: "border-color 0.3s"
  };

  return (
    <section id="contact" style={{
      padding: "80px 20px", maxWidth: 640,
      margin: "0 auto", position: "relative", zIndex: 2
    }}>
      <div className="section-reveal">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{
            fontFamily: "Syne,sans-serif", fontSize: "clamp(30px,5vw,54px)", fontWeight: 800,
            background: "linear-gradient(135deg,#fff,#00e5ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Leave a thought<br />in my universe.</h2>
        </div>

        {status === "sent" ? (
          <div style={{
            background: "rgba(255,255,255,0.035)", border: "1px solid var(--border)",
            borderRadius: 18, padding: 52, textAlign: "center"
          }}>
            <div style={{ fontSize: 44, marginBottom: 14, animation: "float 2s ease infinite" }}>✦</div>
            <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: 22, color: "var(--cyan)", marginBottom: 10 }}>Thought received.</h3>
            <p style={{ color: "var(--muted)", fontFamily: "Crimson Pro,serif", fontStyle: "italic", fontSize: 18 }}>
              It's floating somewhere in my universe now.
            </p>
            <button onClick={() => setStatus("idle")} style={{
              marginTop: 20, background: "transparent",
              border: "1px solid var(--border)", color: "var(--cyan)",
              padding: "10px 22px", borderRadius: 10,
              fontFamily: "Space Mono,monospace", fontSize: 11, cursor: "pointer"
            }}>✦ Send another</button>
          </div>
        ) : (
          <div style={{
            background: "rgba(255,255,255,0.035)", border: "1px solid var(--border)",
            borderRadius: 18, padding: "28px 24px"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(0,229,255,0.4)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(0,229,255,0.4)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
              <textarea
                rows={5}
                placeholder="Your thought…"
                value={form.msg}
                onChange={e => setForm({ ...form, msg: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={e => e.target.style.borderColor = "rgba(0,229,255,0.4)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />

              {status === "error" && (
                <p style={{ color: "#ff6b6b", fontSize: 11, fontFamily: "Space Mono,monospace" }}>
                  ✕ Something went wrong. Please try again.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  background: status === "sending"
                    ? "rgba(0,229,255,0.15)"
                    : "linear-gradient(135deg,var(--cyan),var(--purple))",
                  border: "none", color: "#fff", padding: "13px 28px",
                  borderRadius: 10, fontFamily: "Space Mono,monospace",
                  fontSize: 12, cursor: status === "sending" ? "not-allowed" : "pointer",
                  alignSelf: "flex-start", opacity: status === "sending" ? 0.7 : 1
                }}>
                {status === "sending" ? "↻ Sending…" : "✦ Send into the universe"}
              </button>
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
