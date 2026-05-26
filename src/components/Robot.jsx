import { useState, useEffect } from "react";

const QUIPS = [
  "psst… check out my projects 👀",
  "still learning. always building. 🚀",
  "maybe she is building rn",
  "404: sleep not found.",
  "umm..what you are looking for",
  "she codes AND films? iconic.",
];

export default function Robot() {
  const [quip, setQuip] = useState(null);
  const [blink, setBlink] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 110);
    }, 3000);
    const q = setInterval(() =>{
      setQuip(QUIPS[Math.floor(Math.random()*QUIPS.length)]);
      setTimeout(() => setQuip(null),4000);
    }, 12000);
    return () => {clearInterval(t); clearInterval(q);};
  }, []);

  const handleClick = () => {
    setQuip(QUIPS[count % QUIPS.length]);
    setCount(c => c + 1);
    setTimeout(() => setQuip(null), 4000);
  };

  return (
    <div onClick={handleClick} style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 1500, cursor: "pointer",animation: "float 4s ease-in-out infinite",
      filter: "drop-shadow(0 0 16px rgba(0,229,255,0.3))"
    }}>
      {quip && (
        <div style={{
          position: "absolute", bottom: 110, right: 0,
          background: "rgba(8,13,26,0.96)", border: "1px solid rgba(0,229,255,0.3)",
          borderRadius: "14px 14px 4px 14px", padding: "10px 14px",
          fontSize: 11, fontStyle: "italic", color: "var(--cyan)",
          maxWidth: 180, lineHeight: 1.5,
          animation: "speech-pop 0.35s ease"
        }}>{quip}</div>
      )}
      <svg width="88" height="100" viewBox="0 0 88 100" fill="none">
        <defs>
          <radialGradient id="rb" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1a2245"/>
            <stop offset="100%" stopColor="#080d1a"/>
          </radialGradient>
        </defs>
        <line x1="44" y1="5" x2="44" y2="17" stroke="#00e5ff" strokeWidth="1.5"/>
        <circle cx="44" cy="3" r="4" fill="#00e5ff"/>
        <circle cx="44" cy="3" r="2" fill="white" opacity="0.6" />
        <rect x="14" y="17" width="60" height="44" rx="14" fill="url(#rb)" stroke="#00e5ff" strokeWidth="1.2" strokeOpacity="0.6"/>
        <ellipse cx="31" cy="35" rx="9" ry={blink ? 0.8 : 8} fill="#001a20" stroke="#00e5ff" strokeWidth="1.2"/>
        <ellipse cx="57" cy="35" rx="9" ry={blink ? 0.8 : 8} fill="#001a20" stroke="#00e5ff" strokeWidth="1.2"/>
        {!blink && (<>
          <circle cx="31" cy="35" r="4" fill="#00e5ff"/>
          <circle cx="57" cy="35" r="4" fill="#00e5ff"/>
          <circle cx="33" cy="33" r="1.5" fill="white" opacity="0.7" />
          <circle cx="59" cy="33" r="1.5" fill="white" opacity="0.7" />
        </>)}
        <path d="M 31 51 Q 44 60 57 51" stroke="#00e5ff" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <rect x="10" y="63" width="68" height="34" rx="10" fill="url(#rb)" stroke="#00e5ff" strokeWidth="1.2" strokeOpacity="0.5"/>
        <circle cx="32" cy="80" r="9" fill="rgba(0,229,255,0.1)" stroke="#00e5ff" strokeWidth="0.8" />
        <circle cx="32" cy="80" r="5" fill="rgba(0,229,255,0.2)" stroke="#00e5ff" strokeWidth="0.6" />
        <circle cx="32" cy="80" r="2" fill="#00e5ff" opacity="0.6" />
        <text x="46" y="87" fill="#00e5ff" fontSize="7" fontFamily="monospace" opacity="0.7">{"</>"}</text>
        <rect x="0" y="65" width="9" height="24" rx="4.5" fill="url(#rb)" stroke="#00e5ff" strokeWidth="0.8"/>
        <rect x="79" y="65" width="9" height="24" rx="4.5" fill="url(#rb)" stroke="#00e5ff" strokeWidth="0.8"/>
      </svg>
      <div style={{
        position: "absolute", inset: -12, borderRadius: "50%",
        border: "1px solid rgba(0,229,255,0.2)",
        animation: "pulse-ring 2.5s ease-out infinite"
      }} />
    </div>
  );
}