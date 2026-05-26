import { useState } from "react";

const PROJECTS = [
  {
    title: "DocDrift AI",
    tag: "Developer Tool + AI",
    emoji: "🔍",
    desc: "Analyzes project documentation and detects stale docs, TODOs, missing sections, and trust issues before users do.",
    tech: ["Node.js", "Express.js", "Vanilla JavaScript", "HTML", "CSS"],
    github: "https://github.com/Priyanshi-untitled/docdrift-ai.git",
    color: "#7c4dff",
    future: "GitHub integration, team collaboration, CI/CD support, and smarter semantic drift detection."
  },
  {
     title: "NeuroSync",
      tag: "AI + Education",
      emoji: "🎓",
      desc: "An AI-powered smart learning curator that finds, summarizes, and organizes the best learning resources from multiple platforms into one personalized roadmap.",
      tech: ["Node.js", "Gemini AI", "JavaScript", "Web Scraping", "HTML", "CSS"],
      github: "https://github.com/Priyanshi-untitled/NeuroSync.git",
      color: "#7b2fff",
      future: "Adaptive learning paths, voice-based AI tutor, community learning spaces, and personalized progress analytics."
  },
  {
    title: "Advanced Code Processor",
    tag: "Developer Tool + CLI",
    emoji: "⚙️",
    desc: "A Java-based CLI tool that cleans, analyzes, refactors, and documents multi-language codebases for faster development and better maintainability.",
    tech: ["Java", "CLI", "Regex", "File Handling", "Code Analysis"],
    github: "https://github.com/Priyanshi-untitled/ADVANCED-CODE-PROCESSOR.git",
    color: "#ff6b35",
    future: "AI-assisted refactoring, Git integration, real-time syntax visualization, and support for larger enterprise-scale codebases."
  },
];

function Modal({ project, onClose }) {
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(4,6,15,0.92)",
      backdropFilter: "blur(16px)", zIndex: 2000,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "rgba(255,255,255,0.035)",
        border: `1px solid ${project.color}30`,
        backdropFilter: "blur(24px)", borderRadius: 18,
        maxWidth: 640, width: "100%", maxHeight: "90vh",
        overflowY: "auto", animation: "modal-in 0.4s ease"
      }}>
        <div style={{ height: 5, background: `linear-gradient(90deg,${project.color},${project.color}22)` }} />
        <div style={{ padding: 36 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
            <div>
              <div style={{ fontSize: 11, color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>{project.tag}</div>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 28 }}>{project.emoji} {project.title}</h2>
            </div>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--muted)", width: 36, height: 36, borderRadius: "50%",
              cursor: "pointer", fontSize: 14
            }}>✕</button>
          </div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>The Idea</div>
            <p style={{ color: "rgba(232,234,240,0.85)", lineHeight: 1.8, fontSize: 14 }}>{project.desc}</p>
          </div>
          <div style={{ marginBottom: 20, background: "rgba(255,255,255,0.02)", borderRadius: 10, padding: 18, borderLeft: `2px solid ${project.color}` }}>
            <div style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>The Story Behind It</div>
            <p style={{ fontFamily: "Crimson Pro,serif", fontStyle: "italic", color: "rgba(232,234,240,0.75)", lineHeight: 1.8, fontSize: 16 }}>"{project.story}"</p>
          </div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Tech Stack</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  borderRadius: 100, padding: "3px 12px", fontSize: 11,
                  background: `${project.color}14`, border: `1px solid ${project.color}35`, color: project.color
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 24, background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Future Scope</div>
            <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.7 }}>{project.future}</p>
          </div>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button style={{
                width: "100%", padding: "13px 0",
                background: "linear-gradient(135deg,var(--cyan),var(--purple))",
                border: "none", color: "#fff", borderRadius: 10,
                fontFamily: "Space Mono,monospace", fontSize: 13, cursor: "pointer"
              }}>⌥ View on GitHub</button>
            </a>
          ) : (
            <div style={{ textAlign: "center", fontSize: 11, color: "var(--muted)", fontStyle: "italic" }}>
              GitHub link coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  const handleClick = (p) => {
    if (p.github) window.open(p.github, "_blank", "noreferrer");
    else setActive(p);
  };

  return (
    <section id="projects" style={{
      padding: "80px 40px", maxWidth: 1200,
      margin: "0 auto", position: "relative", zIndex: 2
    }}>
      {active && <Modal project={active} onClose={() => setActive(null)} />}

      <div className="section-reveal">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ color: "var(--purple)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>✦ built things</div>
          <h2 style={{
            fontFamily: "Syne,sans-serif", fontSize: "clamp(30px,5vw,54px)", fontWeight: 800,
            background: "linear-gradient(135deg,#fff,#7b2fff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Projects with stories.</h2>
          <p style={{ color: "var(--muted)", fontSize: 12, marginTop: 10 }}>
            Click any card to explore on GitHub ↗
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <div key={i} onClick={() => handleClick(p)}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${p.color}55`;
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4),0 0 30px ${p.color}18`;
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                borderRadius: 20, overflow: "hidden", cursor: "pointer",
                transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)"
              }}>
              <div style={{ height: 4, background: `linear-gradient(90deg,${p.color},${p.color}22)` }} />
              <div style={{ padding: 26 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{p.emoji}</div>
                <div style={{ fontSize: 10, color: p.color, letterSpacing: "0.15em", marginBottom: 7, textTransform: "uppercase" }}>{p.tag}</div>
                <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 9 }}>{p.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} style={{
                      borderRadius: 100, padding: "3px 12px", fontSize: 11,
                      background: `${p.color}11`, border: `1px solid ${p.color}30`, color: p.color
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ marginTop: 16, fontSize: 11, color: p.color }}>
                  {p.github ? "⌥ View on GitHub" : "↗ Read the story"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}