// Direction 1 — CINEMATIC DARK
// Hero plein écran avec image de Subsilence en parallax léger,
// nav minimaliste sticky, projets en grille mosaïque avec hover cinématique.

const { useState, useEffect, useRef } = React;
const { PROJECTS, I18N } = window.PORTFOLIO_DATA;

const cinematicStyles = {
  root: {
    fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
    background: '#070708',
    color: '#e9e9ea',
    width: '1440px',
    minHeight: '3600px',
    position: 'relative',
    overflow: 'hidden',
  },
  nav: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    padding: '28px 56px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 50,
    mixBlendMode: 'difference',
  },
  logo: {
    fontFamily: '"Space Mono", monospace',
    fontSize: 14,
    letterSpacing: '0.3em',
    fontWeight: 700,
  },
  navLinks: {
    display: 'flex', gap: 36,
    fontFamily: '"Space Mono", monospace',
    fontSize: 12, letterSpacing: '0.25em',
  },
  navLink: { cursor: 'pointer', position: 'relative', paddingBottom: 4 },
};

function CinematicNav({ lang, setLang, t }) {
  return (
    <nav style={cinematicStyles.nav}>
      <div style={cinematicStyles.logo}>UO. — UMUT OSMANOGLU</div>
      <div style={cinematicStyles.navLinks}>
        <a style={cinematicStyles.navLink}>{t.nav.home}</a>
        <a style={cinematicStyles.navLink}>{t.nav.projects}</a>
        <a style={cinematicStyles.navLink}>{t.nav.about}</a>
        <a style={cinematicStyles.navLink}>{t.nav.contact}</a>
      </div>
      <div style={{ display: 'flex', gap: 4, fontFamily: '"Space Mono", monospace', fontSize: 12, letterSpacing: '0.2em' }}>
        <button onClick={() => setLang('fr')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: lang === 'fr' ? '#ff4747' : '#888', padding: '2px 6px', fontFamily: 'inherit', fontSize: 'inherit',
        }}>FR</button>
        <span style={{ color: '#444' }}>/</span>
        <button onClick={() => setLang('en')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: lang === 'en' ? '#ff4747' : '#888', padding: '2px 6px', fontFamily: 'inherit', fontSize: 'inherit',
        }}>EN</button>
      </div>
    </nav>
  );
}

function CinematicHero({ t, onProjectClick }) {
  const subsilence = PROJECTS.find(p => p.id === 'subsilence');
  return (
    <section style={{
      position: 'relative',
      height: 900,
      width: '100%',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${subsilence.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.55) contrast(1.1) saturate(0.85)',
        transform: 'scale(1.05)',
      }} />
      {/* Vignette + grain */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(7,7,8,0.85) 100%), linear-gradient(180deg, rgba(7,7,8,0.4) 0%, transparent 30%, transparent 60%, rgba(7,7,8,0.95) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>")',
        opacity: 0.18,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />
      {/* Side numbers */}
      <div style={{
        position: 'absolute', left: 56, top: '50%', transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'left center',
        fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.3em', color: '#888',
      }}>
        FEATURED — 01 / {String(PROJECTS.length).padStart(2, '0')}
      </div>
      {/* Content */}
      <div style={{
        position: 'absolute', left: 120, bottom: 120, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40,
      }}>
        <div style={{ maxWidth: 820 }}>
          <div style={{
            fontFamily: '"Space Mono", monospace', fontSize: 12, letterSpacing: '0.3em',
            color: '#ff4747', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: '#ff4747' }}></span>
            {t.hero.featured}
          </div>
          <h1 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 132, lineHeight: 0.92, fontWeight: 700,
            margin: 0, letterSpacing: '-0.04em',
            textWrap: 'balance',
          }}>
            SUB<br/>SILENCE.
          </h1>
          <p style={{
            fontSize: 22, lineHeight: 1.4, marginTop: 28, maxWidth: 560,
            color: '#c8c8ca',
            textWrap: 'pretty',
          }}>
            {subsilence.tagline.fr === subsilence.tagline.en ? subsilence.tagline.fr : (window.__cinLang === 'fr' ? subsilence.tagline.fr : subsilence.tagline.en)}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
          <button onClick={() => onProjectClick(subsilence)} style={{
            background: '#ff4747', color: '#fff', border: 'none',
            padding: '20px 36px', fontFamily: '"Space Mono", monospace',
            fontSize: 12, letterSpacing: '0.25em', cursor: 'pointer',
            fontWeight: 700,
          }}>
            {t.sections.viewProject} →
          </button>
          <div style={{ fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.25em', color: '#888' }}>
            UNREAL ENGINE 5  ·  2024
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', right: 56, bottom: 32,
        fontFamily: '"Space Mono", monospace', fontSize: 10, letterSpacing: '0.3em', color: '#888',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        {t.hero.scroll}
        <span style={{ display: 'inline-block', width: 1, height: 40, background: 'linear-gradient(180deg, #888, transparent)' }}></span>
      </div>
    </section>
  );
}

function CinematicProjectCard({ project, lang, onClick, size = 'normal' }) {
  const [hover, setHover] = useState(false);
  const isLarge = size === 'large';
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick(project)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        background: '#111',
        height: isLarge ? 480 : 320,
        gridColumn: isLarge ? 'span 2' : 'span 1',
      }}
    >
      <img src={project.image} alt={project.title} style={{
        width: '100%', height: '100%', objectFit: 'cover',
        transform: hover ? 'scale(1.04)' : 'scale(1)',
        filter: hover ? 'brightness(0.5)' : 'brightness(0.75)',
        transition: 'transform 0.7s cubic-bezier(.2,.8,.2,1), filter 0.4s ease',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 50%, rgba(7,7,8,0.95) 100%)',
      }} />
      <div style={{
        position: 'absolute', top: 20, left: 24,
        fontFamily: '"Space Mono", monospace', fontSize: 10, letterSpacing: '0.3em',
        color: '#ff4747', fontWeight: 700,
      }}>
        {project.category} — {project.year}
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: 24,
      }}>
        <h3 style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: isLarge ? 48 : 32,
          fontWeight: 700, margin: 0, letterSpacing: '-0.02em',
          textTransform: 'uppercase',
        }}>
          {project.title}
        </h3>
        <div style={{
          maxHeight: hover ? 80 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}>
          <p style={{
            fontSize: 14, color: '#c8c8ca', marginTop: 10, marginBottom: 0,
            lineHeight: 1.4, textWrap: 'pretty',
          }}>
            {project.tagline[lang]}
          </p>
        </div>
      </div>
      {/* corner mark */}
      <div style={{
        position: 'absolute', top: 16, right: 20,
        fontFamily: '"Space Mono", monospace', fontSize: 10, color: '#888',
      }}>
        ↗
      </div>
    </div>
  );
}

function CinematicProjects({ lang, t, onProjectClick }) {
  const games = PROJECTS.filter(p => p.category === 'GAME');
  const others = PROJECTS.filter(p => p.category !== 'GAME');

  return (
    <section style={{ padding: '160px 56px 120px', position: 'relative' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 60,
      }}>
        <div style={{
          fontFamily: '"Space Mono", monospace', fontSize: 12, letterSpacing: '0.3em', color: '#ff4747',
        }}>
          002 /
        </div>
        <h2 style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 80, fontWeight: 700, margin: 0, letterSpacing: '-0.04em',
        }}>
          {t.sections.selected}
        </h2>
      </div>

      <div style={{
        fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.3em',
        color: '#888', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <span style={{ display: 'inline-block', width: 24, height: 1, background: '#888' }}></span>
        {t.sections.games}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 80,
      }}>
        {games.slice(1).map((p, i) => (
          <CinematicProjectCard
            key={p.id}
            project={p}
            lang={lang}
            onClick={onProjectClick}
            size={i === 0 ? 'large' : 'normal'}
          />
        ))}
      </div>

      <div style={{
        fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.3em',
        color: '#888', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <span style={{ display: 'inline-block', width: 24, height: 1, background: '#888' }}></span>
        {t.sections.engine} & {t.sections.tools}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16,
      }}>
        {others.map(p => (
          <CinematicProjectCard key={p.id} project={p} lang={lang} onClick={onProjectClick} />
        ))}
      </div>
    </section>
  );
}

function CinematicAbout({ lang, t }) {
  const interests = lang === 'fr' ? window.PORTFOLIO_DATA.INTERESTS_FR : window.PORTFOLIO_DATA.INTERESTS_EN;
  return (
    <section style={{
      padding: '120px 56px',
      background: 'linear-gradient(180deg, #070708 0%, #0d0d10 100%)',
      borderTop: '1px solid #1a1a1d',
      borderBottom: '1px solid #1a1a1d',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 60 }}>
        <div style={{
          fontFamily: '"Space Mono", monospace', fontSize: 12, letterSpacing: '0.3em', color: '#ff4747',
        }}>
          003 /
        </div>
        <h2 style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 80, fontWeight: 700, margin: 0, letterSpacing: '-0.04em',
        }}>
          {t.about.title}
        </h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 100,
        alignItems: 'start',
      }}>
        <p style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 32, lineHeight: 1.35, fontWeight: 400, margin: 0,
          color: '#e9e9ea', textWrap: 'pretty',
        }}>
          {t.about.bio}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div>
            <div style={{
              fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.3em',
              color: '#ff4747', marginBottom: 16,
            }}>
              {t.about.stack}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {window.PORTFOLIO_DATA.STACK.map(s => (
                <span key={s} style={{
                  border: '1px solid #2a2a2d',
                  padding: '8px 14px',
                  fontSize: 13,
                  fontFamily: '"Space Mono", monospace',
                  letterSpacing: '0.05em',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.3em',
              color: '#ff4747', marginBottom: 16,
            }}>
              {t.about.interests}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {interests.map(i => (
                <li key={i} style={{
                  fontSize: 16, padding: '10px 0', borderBottom: '1px solid #1a1a1d',
                  display: 'flex', justifyContent: 'space-between',
                }}>
                  <span>{i}</span>
                  <span style={{ color: '#444' }}>—</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CinematicContact({ t }) {
  const [copied, setCopied] = useState(false);
  const email = 'umutosmanoglu0@gmail.com';
  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section style={{ padding: '160px 56px 80px', position: 'relative' }}>
      <div style={{
        fontFamily: '"Space Mono", monospace', fontSize: 12, letterSpacing: '0.3em', color: '#ff4747',
        marginBottom: 24,
      }}>
        004 /
      </div>
      <h2 style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 140, fontWeight: 700, margin: 0, lineHeight: 0.95, letterSpacing: '-0.04em',
        textWrap: 'balance',
      }}>
        {t.contact.title}
      </h2>
      <p style={{ fontSize: 20, color: '#888', marginTop: 24, maxWidth: 640 }}>
        {t.contact.sub}
      </p>
      <div style={{
        marginTop: 60,
        display: 'flex', alignItems: 'center', gap: 24,
        padding: '32px 0',
        borderTop: '1px solid #2a2a2d', borderBottom: '1px solid #2a2a2d',
      }}>
        <div style={{
          fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.3em', color: '#888',
        }}>
          EMAIL
        </div>
        <div style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 36, flex: 1, fontWeight: 500,
        }}>
          {email}
        </div>
        <button onClick={copy} style={{
          background: copied ? '#ff4747' : 'transparent',
          color: copied ? '#fff' : '#ff4747',
          border: '1px solid #ff4747',
          padding: '14px 24px', fontFamily: '"Space Mono", monospace',
          fontSize: 11, letterSpacing: '0.25em', cursor: 'pointer',
          minWidth: 130,
        }}>
          {copied ? t.contact.copied : t.contact.copy}
        </button>
      </div>
      <div style={{
        marginTop: 80,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.25em', color: '#888',
      }}>
        <div>UMUT OSMANOGLU © 2026</div>
        <div style={{ display: 'flex', gap: 32 }}>
          <a style={{ color: '#888' }}>GITHUB ↗</a>
          <a style={{ color: '#888' }}>LINKEDIN ↗</a>
        </div>
      </div>
    </section>
  );
}

window.CinematicSite = function CinematicSite({ lang, setLang, onProjectClick }) {
  const t = I18N[lang];
  window.__cinLang = lang;
  return (
    <div style={cinematicStyles.root}>
      <CinematicNav lang={lang} setLang={setLang} t={t} />
      <CinematicHero t={t} onProjectClick={onProjectClick} />
      <CinematicProjects lang={lang} t={t} onProjectClick={onProjectClick} />
      <CinematicAbout lang={lang} t={t} />
      <CinematicContact t={t} />
    </div>
  );
};
