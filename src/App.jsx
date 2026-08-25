import { useState } from "react";

const T = {
  light: {
    bg: "#F0EDE8", bgAlt: "#EAE6E0", card: "#FAFAF8", cardStrong: "#FFFFFF",
    border: "#D8D3CB", borderFaint: "#E8E3DB", text: "#1C1917", textSub: "#57534E",
    textMuted: "#A8A29E", accent: "#1B5F72", accentMid: "#2A7A90", accentFaint: "#EAF4F7",
    accentBorder: "#B0D8E4", accentText: "#0D3D4A", warn: "#92610A", warnBg: "#FEFCE8", warnBorder: "#FDE68A",
  },
  dark: {
    bg: "#0B1B22", bgAlt: "#0F2430", card: "#152B36", cardStrong: "#1C3444",
    border: "#1E4255", borderFaint: "#163040", text: "#F0EDE8", textSub: "#A8C4CE",
    textMuted: "#4A7A8A", accent: "#4AACCC", accentMid: "#5BBDD8", accentFaint: "#0A2530",
    accentBorder: "#1E5A72", accentText: "#A8D8E8", warn: "#D4950A", warnBg: "#1A1200", warnBorder: "#6A4A00",
  },
};

const LIFECYCLE = [
  "Strategy & competition","Acquisition","UX / UI","Multichannel comms",
  "Conversion","Retention","Billing","Service experience",
];

const STATS = [
  { num: "Business mind,\ndata fluent", highlight: true },
  { num: "10+", label: "Years\nleading teams" },
  { num: "9", label: "Years in\nTravel Tech" },
  { num: "5", label: "Years in\nEdTech" },
  { num: "4", label: "Countries\nworked in" },
];

const CARDS = [
  { num: "01", title: "Impact-driven analysis", body: "Every insight pushed until it changes a decision. Not dashboards for the sake of it." },
  { num: "02", title: "Team leadership", body: "10+ years building and leading analytical teams across two industries and multiple markets." },
  { num: "03", title: "Pricing & P&L", body: "Metasearch, pricing optimization and P&L ownership in competitive travel markets." },
  { num: "04", title: "AI applied to business", body: "Using AI to unlock real impact through data — building scalable systems that align metrics, ensure data quality and turn insight into action.", inProgress: true },
];

const LEADERSHIP = [
  { title: "Leading by example", body: "I stay close to the work — shaping frameworks, unblocking problems, and helping the team move faster and with more confidence. Always keen to join initiatives hands-on when needed to understand real delivery challenges and stay close to the team's day-to-day." },
  { title: "Transparency first", body: "Creating space where teams feel safe to test ideas, take controlled risks and speak up — while keeping a clear eye on impact. I believe honest, constructive feedback flows in every direction — people grow when they hear the truth delivered with care." },
  { title: "Flexibility with accountability", body: "Results matter more than rigid schedules or extreme presenteeism. I trust people to own their work and deliver — and I give them the conditions to do it." },
];

const FOOTPRINT = [
  { icon: "⌂", text: "Madrid, Spain", sub: "born & raised" },
  { icon: "◈", text: "Leeuwarden, NL", sub: "Erasmus" },
  { icon: "◆", text: "Milan, Italy", sub: "work" },
  { icon: "◆", text: "Chiasso, Switzerland", sub: "work" },
  { icon: "◆", text: "London, UK", sub: "work" },
];

const PILLS_ACCENT = ["Impact-driven analysis", "Team leadership", "Category Management", "Business Analysis"];
const PILLS_PLAIN = ["Pricing & P&L", "Metric governance", "Multichannel communications", "Travel Tech · EdTech", "User lifecycle", "Data storytelling"];

function VennDiagram({ t, size = 220 }) {
  return (
    <svg viewBox="0 0 260 220" width={size} height={size} style={{ display: "block" }}>
      <defs>
        <clipPath id="c1"><circle cx="130" cy="72" r="70"/></clipPath>
        <clipPath id="c2"><circle cx="90" cy="148" r="70"/></clipPath>
        <clipPath id="c3"><circle cx="170" cy="148" r="70"/></clipPath>
      </defs>
      <circle cx="130" cy="72" r="70" fill="none" stroke={t.accentBorder} strokeWidth="0.8"/>
      <circle cx="90" cy="148" r="70" fill="none" stroke={t.accentBorder} strokeWidth="0.8"/>
      <circle cx="170" cy="148" r="70" fill="none" stroke={t.accentBorder} strokeWidth="0.8"/>
      <circle cx="130" cy="72" r="70" fill={t.accent} fillOpacity="0.12" clipPath="url(#c2)"/>
      <circle cx="130" cy="72" r="70" fill={t.accent} fillOpacity="0.12" clipPath="url(#c3)"/>
      <circle cx="90" cy="148" r="70" fill={t.accent} fillOpacity="0.12" clipPath="url(#c3)"/>
      <circle cx="130" cy="72" r="70" fill={t.accent} fillOpacity="0.85" clipPath="url(#c2)"/>
      <path d="M130,72 Q150,100 170,148 Q130,165 90,148 Q110,100 130,72Z" fill={t.accent} fillOpacity="0.9"/>
      <text x="130" y="42" textAnchor="middle" fontSize="11" fontFamily="'Helvetica Neue',sans-serif" letterSpacing="0.1em" fill={t.textSub} fontWeight="400">BUSINESS</text>
      <text x="55" y="175" textAnchor="middle" fontSize="11" fontFamily="'Helvetica Neue',sans-serif" letterSpacing="0.1em" fill={t.textSub} fontWeight="400">DATA</text>
      <text x="205" y="175" textAnchor="middle" fontSize="11" fontFamily="'Helvetica Neue',sans-serif" letterSpacing="0.1em" fill={t.textSub} fontWeight="400">AI</text>
      <text x="130" y="120" textAnchor="middle" fontSize="13" fontFamily="'Georgia',serif" fill={t.cardStrong} fontWeight="700" letterSpacing="0.06em">IMPACT</text>
    </svg>
  );
}

function SectionDivider({ label, t, sans }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
      <div style={{ width: 32, height: 1, background: t.accent, opacity: 0.5 }}/>
      <span style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: t.textMuted, whiteSpace: "nowrap" }}>{label}</span>
      <div style={{ flex: 1, height: "0.5px", background: t.border }}/>
    </div>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const t = dark ? T.dark : T.light;
  const sans = "'Helvetica Neue', Arial, sans-serif";
  const serif = "'Georgia', 'Times New Roman', serif";

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div style={{ background: t.bg, minHeight: "100vh", transition: "all 0.35s ease", color: t.text }}>
      <style>{`
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .venn-wrap { display: flex !important; justify-content: center !important; margin-top: 32px !important; }
          .hero-h1 { font-size: 32px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .cta-row { flex-direction: column !important; gap: 10px !important; }
          .cta-row a { text-align: center !important; justify-content: center !important; width: 100% !important; box-sizing: border-box !important; }
          .inner-pad { padding: 0 16px 60px !important; }
          .nav-pad { padding: 20px 0 24px !important; margin-bottom: 40px !important; }
        }
        @media (max-width: 400px) {
          .hero-h1 { font-size: 26px !important; }
        }
      `}</style>

      <div className="inner-pad" style={{ maxWidth: 760, margin: "0 auto", padding: "0 28px 80px" }}>

        {/* NAV */}
        <nav className="nav-pad" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 0 32px", borderBottom: `0.5px solid ${t.border}`, marginBottom: 64 }}>
          <span style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: t.accent, fontWeight: 500 }}>
            David Vaquero
          </span>
          <button
            onClick={() => setDark(!dark)}
            style={{ background: dark ? t.accentFaint : "transparent", border: `0.5px solid ${t.border}`, borderRadius: 24, padding: "6px 16px", fontSize: 11, fontFamily: sans, color: t.textSub, cursor: "pointer", letterSpacing: "0.06em", transition: "all 0.2s" }}
          >
            {dark ? "☀  light" : "◑  dark"}
          </button>
        </nav>

        {/* HERO */}
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start", marginBottom: 72 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <div style={{ width: 68, height: 68, borderRadius: "50%", background: t.accentFaint, border: `1px solid ${t.accentBorder}`, flexShrink: 0, overflow: "hidden" }}>
                <img
                  src="/david.jpg"
                  alt="David Vaquero"
                  width={68}
                  height={68}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "50%" }}
                />
              </div>
              <div>
                <p style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: t.textMuted, marginBottom: 4 }}>Lead Business Analyst</p>
                <p style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: t.textMuted }}>Category Manager · MSc AI (in progress)</p>
              </div>
            </div>

            <h1 className="hero-h1" style={{ fontFamily: serif, fontSize: 42, fontWeight: 400, color: t.text, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
              David Vaquero<br />
              <span style={{ color: t.accent }}>García</span>
            </h1>

            <p style={{ fontFamily: serif, fontSize: 17, fontStyle: "italic", color: t.textSub, lineHeight: 1.6, borderLeft: `2px solid ${t.accent}`, paddingLeft: 16, maxWidth: 400, marginBottom: 28 }}>
              Simplifying data.<br />
              <span style={{ color: t.accent }}>Amplifying impact.</span>
            </p>

            {/* PRIMARY CTAs */}
            <div className="cta-row" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://www.linkedin.com/in/dvaquerog/"
                target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.accent, color: "#F0EDE8", fontFamily: sans, fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", padding: "11px 22px", borderRadius: 999 }}
              >
                ↗ Connect on LinkedIn
              </a>
              <a
                href="/cv-david.pdf"
                target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: t.accent, fontFamily: sans, fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", padding: "11px 22px", borderRadius: 999, border: `0.5px solid ${t.accentBorder}` }}
              >
                ↓ Download CV
              </a>
            </div>
          </div>

          <div className="venn-wrap" style={{ flexShrink: 0 }}>
            <VennDiagram t={t} size={180} />
          </div>
        </div>

        {/* ABOUT DIVIDER */}
        <SectionDivider label="About" t={t} sans={sans} />
        <div style={{ height: 36 }} />

        {/* BIO */}
        <p style={{ fontFamily: sans, fontSize: 15, color: t.textSub, lineHeight: 1.85, marginBottom: 64, maxWidth: 640 }}>
          I've spent 10+ years in online business — Travel Tech and EdTech — leading analytical teams and managing categories across Spain, Portugal and Latam. I've worked across every stage of the user lifecycle: from first acquisition to retention, billing, revenue management, service experience and multichannel communication.
          <br /><br />
          That end-to-end view taught me something:{" "}
          <span style={{ color: t.text, fontWeight: 500 }}>the bottleneck is rarely the data itself.</span>{" "}
          It's everything around it — metrics defined differently by each team, logic that lives in someone's head, operational systems that don't talk to each other, gaps and errors in how data gets captured in the first place, and vanity KPIs that everyone monitors but nobody acts on. Decisions end up made on gut when the data says otherwise.
          <br /><br />
          Now I'm building on that foundation — exploring how AI can make analytical knowledge scalable and consistent, so teams stop debating definitions and start making impact.
        </p>

        {/* AT A GLANCE */}
        <SectionDivider label="At a glance" t={t} sans={sans} />
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginBottom: 64 }}>
          {STATS.map((st, i) => (
            <div key={i} style={{ background: st.highlight ? t.accentFaint : t.card, border: `0.5px solid ${st.highlight ? t.accentBorder : t.border}`, borderRadius: 10, padding: "18px 12px", textAlign: "center" }}>
              {st.highlight ? (
                <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, color: t.accentText, lineHeight: 1.5, letterSpacing: "0.02em" }}>
                  {st.num.split("\n").map((l, j) => <div key={j}>{l}</div>)}
                </div>
              ) : (
                <>
                  <div style={{ fontFamily: serif, fontSize: 26, fontWeight: 400, color: t.text, lineHeight: 1 }}>{st.num}</div>
                  <div style={{ fontFamily: sans, fontSize: 10, color: t.textMuted, marginTop: 6, lineHeight: 1.4 }}>
                    {st.label.split("\n").map((l, j) => <div key={j}>{l}</div>)}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* LIFECYCLE */}
        <SectionDivider label="User lifecycle coverage" t={t} sans={sans} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 64 }}>
          {LIFECYCLE.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, background: t.card, border: `0.5px solid ${t.border}`, borderRadius: 999, padding: "5px 13px" }}>
                <span style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.06em", color: t.accent, fontWeight: 600, opacity: 0.6 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: sans, fontSize: 11, color: t.textSub }}>{item}</span>
              </div>
              {i < LIFECYCLE.length - 1 && <span style={{ fontSize: 10, color: t.textMuted }}>›</span>}
            </div>
          ))}
        </div>

        {/* WHAT I BRING */}
        <SectionDivider label="What I bring" t={t} sans={sans} />
        <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))", gap: 12, marginBottom: 64 }}>
          {CARDS.map((card, i) => (
            <div key={i} style={{ background: card.inProgress ? t.warnBg : t.card, border: `0.5px solid ${card.inProgress ? t.warnBorder : t.border}`, borderRadius: 12, padding: "20px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", color: card.inProgress ? t.warn : t.accent, opacity: card.inProgress ? 1 : 0.7 }}>{card.num}</div>
              <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 500, color: card.inProgress ? t.warn : t.text, lineHeight: 1.3 }}>{card.title}</div>
              <div style={{ fontFamily: sans, fontSize: 12, color: card.inProgress ? t.warn : t.textSub, lineHeight: 1.6, opacity: card.inProgress ? 0.85 : 1, flex: 1 }}>{card.body}</div>
              {card.inProgress && (
                <span style={{ alignSelf: "flex-start", fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 999, background: t.warnBg, border: `0.5px solid ${t.warnBorder}`, color: t.warn }}>
                  in progress
                </span>
              )}
            </div>
          ))}
        </div>

        {/* HOW I LEAD */}
        <SectionDivider label="How I lead" t={t} sans={sans} />
        <div style={{ marginBottom: 64 }}>
          {LEADERSHIP.map((item, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 24px", padding: "20px 0", borderBottom: i < LEADERSHIP.length - 1 ? `0.5px solid ${t.borderFaint}` : "none", alignItems: "start" }}>
              <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: t.accent, opacity: 0.6, paddingTop: 3 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 400, color: t.text, marginBottom: 6, fontStyle: "italic" }}>{item.title}</div>
                <div style={{ fontFamily: sans, fontSize: 13, color: t.textSub, lineHeight: 1.7 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTPRINT */}
        <SectionDivider label="International footprint" t={t} sans={sans} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 64 }}>
          {FOOTPRINT.map((fp, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: t.card, border: `0.5px solid ${t.border}`, borderRadius: 8, padding: "8px 14px" }}>
              <span style={{ fontSize: 11, color: t.accent }}>{fp.icon}</span>
              <div>
                <div style={{ fontFamily: sans, fontSize: 12, color: t.text, fontWeight: 500 }}>{fp.text}</div>
                <div style={{ fontFamily: sans, fontSize: 10, color: t.textMuted, letterSpacing: "0.04em" }}>{fp.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* AREAS */}
        <SectionDivider label="Areas" t={t} sans={sans} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 64 }}>
          {PILLS_ACCENT.map((p, i) => (
            <span key={i} style={{ fontFamily: sans, fontSize: 12, padding: "6px 14px", borderRadius: 999, border: `0.5px solid ${t.accentBorder}`, color: t.accentText, background: t.accentFaint }}>{p}</span>
          ))}
          {PILLS_PLAIN.map((p, i) => (
            <span key={i} style={{ fontFamily: sans, fontSize: 12, padding: "6px 14px", borderRadius: 999, border: `0.5px solid ${t.border}`, color: t.textSub, background: t.card }}>{p}</span>
          ))}
        </div>

        {/* BEYOND */}
        <div style={{ borderTop: `0.5px solid ${t.border}`, borderBottom: `0.5px solid ${t.border}`, padding: "24px 0", marginBottom: 56 }}>
          <p style={{ fontFamily: serif, fontSize: 14, fontStyle: "italic", color: t.textMuted, lineHeight: 1.8, margin: 0 }}>
            Outside the office — family, cooking, open spaces and the occasional idea that starts on a walk and ends up in a prototype.
          </p>
        </div>

        {/* FOOTER */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <a href="https://www.linkedin.com/in/dvaquerog/" target="_blank" rel="noreferrer"
            style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.08em", color: t.textMuted, textDecoration: "none", textTransform: "uppercase" }}>
            ↗ LinkedIn
          </a>
          <a href="/cv-david.pdf" target="_blank" rel="noreferrer"
            style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.08em", color: t.textMuted, textDecoration: "none", textTransform: "uppercase" }}>
            ↓ CV
          </a>
          <span style={{ marginLeft: "auto", fontFamily: sans, fontSize: 11, color: t.textMuted, letterSpacing: "0.06em" }}>
            Madrid, Spain
          </span>
        </div>

      </div>
    </div>
  );
}
