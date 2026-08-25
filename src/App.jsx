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

const CONTENT = {
  en: {
    role1: "Lead Business Analyst",
    role2: "Category Manager · Applied AI for Business",
    tagline1: "Simplifying data.",
    tagline2: "Amplifying impact.",
    ctaLinkedin: "↗ Connect on LinkedIn",
    ctaCV: "↓ Download CV",
    venn: { top: "BUSINESS", left: "DATA", right: "AI", center: "IMPACT" },
    sectionAbout: "About",
    bio: [
      <>I've spent 10+ years in online business — Travel Tech and EdTech — leading analytical teams and managing categories across Spain, Portugal and Latam. I've worked across every stage of the user lifecycle: from first acquisition to retention, revenue management, service experience and multichannel communication.</>,
      <>Throughout my career I've seen how <strong>getting data right unlocks real business impact and uncovers opportunities that would otherwise stay hidden.</strong> The problem is rarely a lack of data — it's <strong>how data is managed internally</strong>: metrics defined differently by each team, logic that lives in someone's head, operational systems that don't talk to each other, gaps in how data gets captured, and vanity KPIs that everyone monitors but nobody acts on. <strong>When intuition and data don't point in the same direction</strong>, the right analytical foundation makes all the difference.</>,
      <>Now I'm building on that foundation — exploring how AI can make analytical knowledge scalable and consistent, so teams stop debating definitions and start making impact.</>,
    ],
    sectionGlance: "At a glance",
    stats: [
      { num: "Business mind,\ndata fluent", highlight: true },
      { num: "10+", label: "Years\nleading teams" },
      { num: "9", label: "Years in\nTravel Tech" },
      { num: "5", label: "Years in\nEdTech" },
      { num: "4", label: "Countries\nworked in" },
    ],
    sectionLifecycle: "User lifecycle coverage",
    lifecycle: ["Strategy & competition","Acquisition","UX / UI","Multichannel comms","Conversion","Retention","Revenue management","Service experience"],
    sectionBring: "What I bring",
    cards: [
      { num: "01", title: "Impact-driven analysis", body: "Every insight pushed until it changes a decision. Not dashboards for the sake of it." },
      { num: "02", title: "Team leadership", body: "10+ years building and leading analytical teams across two industries and multiple markets." },
      { num: "03", title: "Pricing & P&L", body: "Metasearch, pricing optimization and P&L ownership in competitive travel markets." },
      { num: "04", title: "AI applied to business", body: "Using AI to unlock real impact through data — building scalable systems that align metrics, ensure data quality and turn insight into action.", inProgress: true, badge: "in progress" },
      { num: "05", title: "Right tool, right job", body: "Not every data problem needs a cutting-edge solution. Sometimes a clean spreadsheet does the job. Sometimes it's a one-off extract, a full dashboard, or an AI-powered agent. The skill is knowing which one — and not over-engineering what doesn't need it." },
    ],
    sectionLead: "How I lead",
    leadership: [
      { title: "Leading by example", body: "I stay close to the work — shaping frameworks, unblocking problems, and helping the team move faster and with more confidence. Always keen to join initiatives hands-on when needed to understand real delivery challenges and stay close to the team's day-to-day." },
      { title: "Transparency first", body: "Creating space where teams feel safe to test ideas, take controlled risks and speak up — while keeping a clear eye on impact. I believe honest, constructive feedback flows in every direction — people grow when they hear the truth delivered with care." },
      { title: "Flexibility with accountability", body: "Results matter more than rigid schedules or extreme presenteeism. I trust people to own their work and deliver — and I give them the conditions to do it." },
    ],
    sectionFootprint: "International footprint",
    footprint: [
      { icon: "⌂", text: "Madrid, Spain", sub: "born & raised" },
      { icon: "◈", text: "Leeuwarden, NL", sub: "Erasmus" },
      { icon: "◆", text: "Milan, Italy", sub: "work" },
      { icon: "◆", text: "Chiasso, Switzerland", sub: "work" },
      { icon: "◆", text: "London, UK", sub: "work" },
    ],
    sectionAreas: "Areas",
    pillsAccent: ["Impact-driven analysis", "Team leadership", "Business Analysis", "Category Management"],
    pillsPlain: ["Revenue management", "Pricing & P&L", "Metric governance", "Data storytelling", "Multichannel communications", "UX/UI & CRO", "Competitive intelligence", "Travel Tech · EdTech", "User lifecycle"],
    beyond: "Outside the office — family, cooking, open spaces and the occasional idea that starts on a walk and ends up in a prototype.",
    footerLoc: "Madrid, Spain",
    toggleLang: "ES",
    toggleDarkOn: "☀  light",
    toggleDarkOff: "◑  dark",
  },
  es: {
    role1: "Lead Business Analyst",
    role2: "Category Manager · IA Aplicada al Negocio",
    tagline1: "Simplificando datos.",
    tagline2: "Amplificando impacto.",
    ctaLinkedin: "↗ Conectar en LinkedIn",
    ctaCV: "↓ Descargar CV",
    venn: { top: "NEGOCIO", left: "DATOS", right: "IA", center: "IMPACTO" },
    sectionAbout: "Sobre mí",
    bio: [
      <>Llevo más de 10 años en negocio digital — Travel Tech y EdTech — liderando equipos de analítica y gestionando categorías en España, Portugal y Latam. He trabajado en todas las fases del ciclo de vida del usuario: desde la captación hasta la retención, revenue management, experiencia de servicio y comunicación multicanal.</>,
      <>A lo largo de mi trayectoria he comprobado cómo <strong>un uso adecuado del dato permite desbloquear impacto real y descubrir oportunidades de negocio que de otro modo permanecerían ocultas.</strong> El problema rara vez es la falta de datos — es <strong>cómo se gestiona el dato internamente</strong>: métricas definidas de forma distinta según el equipo, lógica que vive en la cabeza de alguien, sistemas que no se hablan entre sí, lagunas en la captura, y KPIs superficiales que todo el mundo monitoriza pero nadie actúa sobre ellos. <strong>Cuando la intuición y el dato no apuntan en la misma dirección</strong>, una base analítica sólida marca la diferencia.</>,
      <>Ahora construyo sobre esa base — explorando cómo la IA puede hacer el conocimiento analítico escalable y consistente, para que los equipos dejen de debatir definiciones y empiecen a generar impacto real.</>,
    ],
    sectionGlance: "De un vistazo",
    stats: [
      { num: "Mentalidad\nde negocio,\nfluido en datos", highlight: true },
      { num: "10+", label: "Años\ndirigiendo equipos" },
      { num: "9", label: "Años en\nTravel Tech" },
      { num: "5", label: "Años en\nEdTech" },
      { num: "4", label: "Países\ntrabajados" },
    ],
    sectionLifecycle: "Cobertura del ciclo de vida",
    lifecycle: ["Estrategia y competencia","Captación","UX / UI","Comunicación multicanal","Conversión","Retención","Revenue management","Experiencia de servicio"],
    sectionBring: "Lo que aporto",
    cards: [
      { num: "01", title: "Análisis orientado al impacto", body: "El esfuerzo analítico cobra sentido cuando permite tomar mejores decisiones. Información sin accionabilidad no genera impacto." },
      { num: "02", title: "Liderazgo de equipos", body: "Más de 10 años construyendo y liderando equipos de analítica en dos industrias y múltiples mercados." },
      { num: "03", title: "Pricing y P&L", body: "Metasearch, optimización de pricing y ownership del P&L en mercados de viajes altamente competitivos." },
      { num: "04", title: "IA aplicada al negocio", body: "Usar la IA para desbloquear impacto real a través del dato — construyendo sistemas escalables que alinean métricas, aseguran la calidad del dato y convierten el insight en acción.", inProgress: true, badge: "en desarrollo" },
      { num: "05", title: "La herramienta adecuada para cada problema", body: "No todo problema de datos necesita una solución sofisticada. A veces un Excel bien hecho resuelve. Otras veces es una extracción puntual, un dashboard completo o un agente con IA. La clave está en saber cuál corresponde — y no sobreingenierar lo que no lo necesita." },
    ],
    sectionLead: "Cómo lidero",
    leadership: [
      { title: "Liderando con el ejemplo", body: "Me mantengo cerca del trabajo — definiendo el enfoque, desbloqueando problemas y ayudando al equipo a avanzar con más confianza. Siempre dispuesto a involucrarme de forma directa en iniciativas cuando hace falta para entender los retos reales del día a día del equipo." },
      { title: "Transparencia ante todo", body: "Crear un espacio donde el equipo se sienta seguro para probar ideas, asumir riesgos controlados y expresarse — sin perder el foco en el impacto. Creo en los equipos en los que el feedback honesto y constructivo fluye en todas las direcciones, creando un escenario de mejora continua." },
      { title: "Flexibilidad con responsabilidad", body: "Los resultados importan más que los horarios rígidos o el presentismo extremo. Confío en que las personas se apropien de su trabajo y lo entreguen — y les doy las condiciones para lograrlo." },
    ],
    sectionFootprint: "Huella internacional",
    footprint: [
      { icon: "⌂", text: "Madrid, España", sub: "origen" },
      { icon: "◈", text: "Leeuwarden, Países Bajos", sub: "Erasmus" },
      { icon: "◆", text: "Milán, Italia", sub: "trabajo" },
      { icon: "◆", text: "Chiasso, Suiza", sub: "trabajo" },
      { icon: "◆", text: "Londres, Reino Unido", sub: "trabajo" },
    ],
    sectionAreas: "Áreas",
    pillsAccent: ["Análisis orientado al impacto", "Liderazgo de equipos", "Análisis de negocio", "Gestión de categorías"],
    pillsPlain: ["Revenue management", "Pricing y P&L", "Gobernanza de métricas", "Data storytelling", "Comunicación multicanal", "UX/UI & CRO", "Inteligencia competitiva", "Travel Tech · EdTech", "Ciclo de vida del usuario"],
    beyond: "Fuera de la oficina — familia, cocina, espacios abiertos y alguna idea que empieza en un paseo y acaba en un prototipo.",
    footerLoc: "Madrid, España",
    toggleLang: "EN",
    toggleDarkOn: "☀  claro",
    toggleDarkOff: "◑  oscuro",
  },
};

function VennDiagram({ t, size = 220, labels }) {
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
      <circle cx="130" cy="72" r="70" fill={t.accent} fillOpacity="0.82" clipPath="url(#c2)"/>
      <circle cx="90" cy="148" r="70" fill={t.accent} fillOpacity="0.82" clipPath="url(#c3)"/>
      <circle cx="170" cy="148" r="70" fill={t.accent} fillOpacity="0.82" clipPath="url(#c1)"/>
      <text x="130" y="44" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontFamily="'Helvetica Neue',sans-serif" letterSpacing="0.1em" fill={t.textSub} fontWeight="400">{labels.top}</text>
      <text x="68" y="172" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontFamily="'Helvetica Neue',sans-serif" letterSpacing="0.1em" fill={t.textSub} fontWeight="400">{labels.left}</text>
      <text x="192" y="172" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontFamily="'Helvetica Neue',sans-serif" letterSpacing="0.1em" fill={t.textSub} fontWeight="400">{labels.right}</text>
      <text x="130" y="122" textAnchor="middle" fontSize="13" fontFamily="'Georgia',serif" fill="#FFFFFF" fontWeight="700" letterSpacing="0.06em">{labels.center}</text>
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
  const [lang, setLang] = useState("en");
  const t = dark ? T.dark : T.light;
  const c = CONTENT[lang];
  const sans = "'Helvetica Neue', Arial, sans-serif";
  const serif = "'Georgia', 'Times New Roman', serif";

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
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              style={{ background: "transparent", border: `0.5px solid ${t.border}`, borderRadius: 24, padding: "6px 14px", fontSize: 11, fontFamily: sans, color: t.textSub, cursor: "pointer", letterSpacing: "0.06em", transition: "all 0.2s" }}
            >
              {c.toggleLang}
            </button>
            <button
              onClick={() => setDark(!dark)}
              style={{ background: dark ? t.accentFaint : "transparent", border: `0.5px solid ${t.border}`, borderRadius: 24, padding: "6px 16px", fontSize: 11, fontFamily: sans, color: t.textSub, cursor: "pointer", letterSpacing: "0.06em", transition: "all 0.2s" }}
            >
              {dark ? c.toggleDarkOn : c.toggleDarkOff}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start", marginBottom: 72 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <div style={{ width: 68, height: 68, borderRadius: "50%", background: t.accentFaint, border: `1px solid ${t.accentBorder}`, flexShrink: 0, overflow: "hidden" }}>
                <img src="/david.jpg" alt="David Vaquero" width={68} height={68} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "50%" }}/>
              </div>
              <div>
                <p style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: t.textMuted, marginBottom: 4 }}>{c.role1}</p>
                <p style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: t.textMuted }}>{c.role2}</p>
              </div>
            </div>

            <h1 className="hero-h1" style={{ fontFamily: serif, fontSize: 42, fontWeight: 400, color: t.text, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
              David Vaquero<br />
              <span style={{ color: t.accent }}>García</span>
            </h1>

            <p style={{ fontFamily: serif, fontSize: 17, fontStyle: "italic", color: t.textSub, lineHeight: 1.6, borderLeft: `2px solid ${t.accent}`, paddingLeft: 16, marginBottom: 28 }}>
              {c.tagline1}<br />
              <span style={{ color: t.accent }}>{c.tagline2}</span>
            </p>

            <div className="cta-row" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://www.linkedin.com/in/dvaquerog/" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.accent, color: "#F0EDE8", fontFamily: sans, fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", padding: "11px 22px", borderRadius: 999 }}>
                {c.ctaLinkedin}
              </a>
              <a href="/cv-david.pdf" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: t.accent, fontFamily: sans, fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", padding: "11px 22px", borderRadius: 999, border: `0.5px solid ${t.accentBorder}` }}>
                {c.ctaCV}
              </a>
            </div>
          </div>

          <div className="venn-wrap" style={{ flexShrink: 0, margin: "-10px -10px -10px 0" }}>
            <VennDiagram t={t} size={240} labels={c.venn} />
          </div>
        </div>

        {/* ABOUT */}
        <SectionDivider label={c.sectionAbout} t={t} sans={sans} />
        <div style={{ height: 36 }} />
        <p style={{ fontFamily: sans, fontSize: 15, color: t.textSub, lineHeight: 1.85, marginBottom: 64 }}>
          {c.bio[0]}<br /><br />{c.bio[1]}<br /><br />{c.bio[2]}
        </p>

        {/* AT A GLANCE */}
        <SectionDivider label={c.sectionGlance} t={t} sans={sans} />
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginBottom: 64 }}>
          {c.stats.map((st, i) => (
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

        {/* AREAS */}
        <SectionDivider label={c.sectionAreas} t={t} sans={sans} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 64 }}>
          {c.pillsAccent.map((p, i) => (
            <span key={i} style={{ fontFamily: sans, fontSize: 12, padding: "6px 14px", borderRadius: 999, border: `0.5px solid ${t.accentBorder}`, color: t.accentText, background: t.accentFaint }}>{p}</span>
          ))}
          {c.pillsPlain.map((p, i) => (
            <span key={i} style={{ fontFamily: sans, fontSize: 12, padding: "6px 14px", borderRadius: 999, border: `0.5px solid ${t.border}`, color: t.textSub, background: t.card }}>{p}</span>
          ))}
        </div>

        {/* WHAT I BRING */}
        <SectionDivider label={c.sectionBring} t={t} sans={sans} />
        <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))", gap: 12, marginBottom: 64 }}>
          {c.cards.map((card, i) => (
            <div key={i} style={{ background: card.inProgress ? t.warnBg : t.card, border: `0.5px solid ${card.inProgress ? t.warnBorder : t.border}`, borderRadius: 12, padding: "20px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", color: card.inProgress ? t.warn : t.accent, opacity: card.inProgress ? 1 : 0.7 }}>{card.num}</div>
              <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 500, color: card.inProgress ? t.warn : t.text, lineHeight: 1.3 }}>{card.title}</div>
              <div style={{ fontFamily: sans, fontSize: 12, color: card.inProgress ? t.warn : t.textSub, lineHeight: 1.6, opacity: card.inProgress ? 0.85 : 1, flex: 1 }}>{card.body}</div>
              {card.inProgress && (
                <span style={{ alignSelf: "flex-start", fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 999, background: t.warnBg, border: `0.5px solid ${t.warnBorder}`, color: t.warn }}>
                  {card.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* HOW I LEAD */}
        <SectionDivider label={c.sectionLead} t={t} sans={sans} />
        <div style={{ marginBottom: 64 }}>
          {c.leadership.map((item, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 24px", padding: "20px 0", borderBottom: i < c.leadership.length - 1 ? `0.5px solid ${t.borderFaint}` : "none", alignItems: "start" }}>
              <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: t.accent, opacity: 0.6, paddingTop: 3 }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 400, color: t.text, marginBottom: 6, fontStyle: "italic" }}>{item.title}</div>
                <div style={{ fontFamily: sans, fontSize: 13, color: t.textSub, lineHeight: 1.7 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTPRINT */}
        <SectionDivider label={c.sectionFootprint} t={t} sans={sans} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 64 }}>
          {c.footprint.map((fp, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: t.card, border: `0.5px solid ${t.border}`, borderRadius: 8, padding: "8px 14px" }}>
              <span style={{ fontSize: 11, color: t.accent }}>{fp.icon}</span>
              <div>
                <div style={{ fontFamily: sans, fontSize: 12, color: t.text, fontWeight: 500 }}>{fp.text}</div>
                <div style={{ fontFamily: sans, fontSize: 10, color: t.textMuted, letterSpacing: "0.04em" }}>{fp.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* BEYOND */}
        <div style={{ borderTop: `0.5px solid ${t.border}`, borderBottom: `0.5px solid ${t.border}`, padding: "24px 0", marginBottom: 56 }}>
          <p style={{ fontFamily: serif, fontSize: 14, fontStyle: "italic", color: t.textMuted, lineHeight: 1.8, margin: 0 }}>{c.beyond}</p>
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
          <span style={{ marginLeft: "auto", fontFamily: sans, fontSize: 11, color: t.textMuted, letterSpacing: "0.06em" }}>{c.footerLoc}</span>
        </div>

      </div>
    </div>
  );
}
