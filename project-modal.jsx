// Shared project modal — adapts visually to active theme
const { useState: useStateM, useEffect: useEffectM } = React;

window.ProjectModal = function ProjectModal({ project, lang, theme, onClose }) {
  useEffectM(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  if (!project) return null;
  const t = window.PORTFOLIO_DATA.I18N[lang];

  // Theme palettes
  const themes = {
    cinematic: {
      bg: '#070708', card: '#0d0d10', border: '#2a2a2d',
      text: '#e9e9ea', muted: '#888', accent: '#ff4747',
      titleFont: '"Space Grotesk", sans-serif',
      bodyFont: '"Space Grotesk", sans-serif',
      monoFont: '"Space Mono", monospace',
      titleStyle: { fontWeight: 700, letterSpacing: '-0.03em', textTransform: 'uppercase' },
    },
    brutalist: {
      bg: '#f3f1ec', card: '#fff', border: '#0a0a0a',
      text: '#0a0a0a', muted: '#555', accent: '#0a0a0a',
      titleFont: '"Instrument Serif", serif',
      bodyFont: '"JetBrains Mono", monospace',
      monoFont: '"JetBrains Mono", monospace',
      titleStyle: { fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.02em' },
    },
    arcade: {
      bg: '#05050a', card: '#0a0a14', border: '#ff2bd6',
      text: '#e6f0ff', muted: '#9ab', accent: '#ffe600',
      titleFont: '"Press Start 2P", monospace',
      bodyFont: '"VT323", monospace',
      monoFont: '"Press Start 2P", monospace',
      titleStyle: { fontWeight: 400, textTransform: 'uppercase' },
    },
  };
  const th = themes[theme] || themes.cinematic;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '40px 20px', overflow: 'auto',
        animation: 'modalFade 0.3s ease',
      }}
    >
      <style>{`
        @keyframes modalFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlide { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 980,
          background: th.bg,
          color: th.text,
          fontFamily: th.bodyFont,
          border: `2px solid ${th.border}`,
          animation: 'modalSlide 0.35s cubic-bezier(.2,.8,.2,1)',
          boxShadow: theme === 'arcade' ? `12px 12px 0 ${th.accent}` : '0 30px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Hero image */}
        <div style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderBottom: `2px solid ${th.border}`,
        }}>
          <img src={project.image} alt={project.title} style={{
            width: '100%', height: '100%', objectFit: 'cover',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg, transparent 40%, ${th.bg} 100%)`,
          }} />
          {theme === 'arcade' && (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 3px)',
              pointerEvents: 'none',
            }} />
          )}
          <button onClick={onClose} style={{
            position: 'absolute', top: 16, right: 16,
            background: th.bg, color: th.text,
            border: `2px solid ${th.border}`,
            padding: '8px 14px', cursor: 'pointer',
            fontFamily: th.monoFont, fontSize: 11, letterSpacing: '0.15em',
          }}>
            ✕ {t.sections.close}
          </button>
          <div style={{
            position: 'absolute', top: 16, left: 16,
            fontFamily: th.monoFont, fontSize: 11, letterSpacing: '0.2em',
            color: th.accent,
            background: th.bg, padding: '6px 12px',
            border: `1px solid ${th.border}`,
          }}>
            {project.category} · {project.year}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '40px 48px 48px' }}>
          <h2 style={{
            fontFamily: th.titleFont, fontSize: 64, lineHeight: 1, margin: 0,
            ...th.titleStyle,
            textShadow: theme === 'arcade' ? `3px 3px 0 ${th.accent}` : 'none',
          }}>
            {project.title}
          </h2>
          <p style={{
            fontSize: theme === 'arcade' ? 24 : 22,
            color: th.muted, marginTop: 12, marginBottom: 32,
            fontFamily: theme === 'brutalist' ? '"Instrument Serif", serif' : th.bodyFont,
            fontStyle: theme === 'brutalist' ? 'italic' : 'normal',
            textWrap: 'pretty',
          }}>
            {project.tagline[lang]}
          </p>

          {/* Meta grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
            paddingTop: 24, paddingBottom: 24,
            borderTop: `1px solid ${th.border}`,
            borderBottom: `1px solid ${th.border}`,
            marginBottom: 32,
          }}>
            {[
              { label: t.sections.role, value: project.role[lang] },
              { label: t.sections.team, value: project.team },
              { label: t.sections.duration, value: project.duration[lang] },
              { label: 'ENGINE', value: project.engine },
            ].map(item => (
              <div key={item.label}>
                <div style={{
                  fontFamily: th.monoFont, fontSize: 10, letterSpacing: '0.2em',
                  color: th.accent, marginBottom: 8,
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: theme === 'arcade' ? 20 : 15, lineHeight: 1.3 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p style={{
            fontSize: theme === 'arcade' ? 22 : 17, lineHeight: 1.6,
            margin: 0, marginBottom: 32, textWrap: 'pretty',
          }}>
            {project.description[lang]}
          </p>

          {/* Two columns: Challenges + Pillars */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
            marginBottom: 32,
          }}>
            <div>
              <div style={{
                fontFamily: th.monoFont, fontSize: 11, letterSpacing: '0.2em',
                color: th.accent, marginBottom: 12,
              }}>
                ▸ {t.sections.challenges}
              </div>
              <p style={{ fontSize: theme === 'arcade' ? 20 : 15, lineHeight: 1.5, margin: 0 }}>
                {project.challenges[lang]}
              </p>
            </div>
            <div>
              <div style={{
                fontFamily: th.monoFont, fontSize: 11, letterSpacing: '0.2em',
                color: th.accent, marginBottom: 12,
              }}>
                ▸ {t.sections.pillars}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {project.pillars.map((p, i) => (
                  <li key={i} style={{
                    fontSize: theme === 'arcade' ? 20 : 15,
                    padding: '6px 0', borderBottom: `1px dashed ${th.border}`,
                  }}>
                    <span style={{ color: th.accent, marginRight: 8 }}>·</span>{p[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <div style={{
              fontFamily: th.monoFont, fontSize: 11, letterSpacing: '0.2em',
              color: th.accent, marginBottom: 12,
            }}>
              ▸ {t.sections.tech}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.tech.map(tech => (
                <span key={tech} style={{
                  border: `1px solid ${th.border}`,
                  padding: '6px 12px',
                  fontSize: theme === 'arcade' ? 18 : 12,
                  fontFamily: theme === 'arcade' ? '"VT323", monospace' : th.monoFont,
                  letterSpacing: '0.05em',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
