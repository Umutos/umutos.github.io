// Direction 2 — BRUTALIST EDITORIAL
// Noir/blanc, mono everywhere, grilles visibles, vibe développeur/zine
// Les projets sont une LISTE éditoriale large avec image au hover.

const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;
const { PROJECTS: PROJ_B, I18N: I18N_B } = window.PORTFOLIO_DATA;

const brutStyles = {
  root: {
    fontFamily: '"JetBrains Mono", "Space Mono", monospace',
    background: '#f3f1ec',
    color: '#0a0a0a',
    width: '1440px',
    minHeight: '3400px',
    position: 'relative',
  },
  grid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(90deg, rgba(10,10,10,0.04) 1px, transparent 1px)',
    backgroundSize: '120px 100%',
    pointerEvents: 'none',
  },
};

function BrutNav({ lang, setLang, t }) {
  return (
    <nav style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      borderBottom: '2px solid #0a0a0a',
      padding: '20px 40px',
      alignItems: 'center',
      gap: 16,
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: '#f3f1ec',
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <div style={{ gridColumn: 'span 3', fontWeight: 700, fontSize: 14 }}>
        ◼ UMUT OSMANOGLU
      </div>
      <div style={{ gridColumn: 'span 6', display: 'flex', gap: 24, justifyContent: 'center' }}>
        <a>[01] {t.nav.home}</a>
        <a>[02] {t.nav.projects}</a>
        <a>[03] {t.nav.about}</a>
        <a>[04] {t.nav.contact}</a>
      </div>
      <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
        <button onClick={() => setLang('fr')} style={{
          border: '1px solid #0a0a0a', background: lang === 'fr' ? '#0a0a0a' : 'transparent',
          color: lang === 'fr' ? '#f3f1ec' : '#0a0a0a',
          padding: '4px 10px', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11,
        }}>FR</button>
        <button onClick={() => setLang('en')} style={{
          border: '1px solid #0a0a0a', background: lang === 'en' ? '#0a0a0a' : 'transparent',
          color: lang === 'en' ? '#f3f1ec' : '#0a0a0a',
          padding: '4px 10px', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11,
        }}>EN</button>
      </div>
    </nav>
  );
}

function BrutHero({ t, lang, onProjectClick }) {
  const sub = PROJ_B.find(p => p.id === 'subsilence');
  return (
    <section style={{
      padding: '80px 40px 60px',
      borderBottom: '2px solid #0a0a0a',
      position: 'relative',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 16,
        marginBottom: 60,
      }}>
        <div style={{ gridColumn: 'span 8' }}>
          <div style={{
            fontSize: 11, letterSpacing: '0.2em', marginBottom: 16,
            display: 'flex', gap: 16,
          }}>
            <span>FILE_001</span><span>|</span>
            <span>UMUT_OSMANOGLU.PORTFOLIO</span><span>|</span>
            <span>v.2026</span>
          </div>
          <h1 style={{
            fontFamily: '"Instrument Serif", "Times New Roman", serif',
            fontSize: 156, lineHeight: 0.9, fontWeight: 400,
            margin: 0, letterSpacing: '-0.04em',
            fontStyle: 'italic',
          }}>
            Game<br/>
            <span style={{ fontStyle: 'normal', fontFamily: '"JetBrains Mono", monospace', fontSize: 156, fontWeight: 700 }}>
              Developer.
            </span>
          </h1>
        </div>
        <div style={{
          gridColumn: 'span 4',
          borderLeft: '1px solid #0a0a0a', paddingLeft: 24,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', marginBottom: 16 }}>
            ── ABSTRACT
          </div>
          <p style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: 22, lineHeight: 1.35, margin: 0,
            textWrap: 'pretty',
          }}>
            {t.hero.tag}
          </p>
        </div>
      </div>

      {/* Featured strip */}
      <div style={{
        border: '2px solid #0a0a0a',
        background: '#0a0a0a',
        color: '#f3f1ec',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: 0,
        cursor: 'pointer',
      }} onClick={() => onProjectClick(sub)}>
        <div style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 380 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#888', marginBottom: 12 }}>
              ▸ {t.hero.featured} — 01
            </div>
            <h2 style={{
              fontFamily: '"Instrument Serif", serif',
              fontStyle: 'italic',
              fontSize: 84, fontWeight: 400,
              margin: 0, lineHeight: 0.95,
              textWrap: 'balance',
            }}>
              Subsilence
            </h2>
            <div style={{ fontSize: 13, marginTop: 16, color: '#aaa', maxWidth: 380, lineHeight: 1.5 }}>
              {sub.tagline[lang]}
            </div>
          </div>
          <div style={{
            display: 'flex', gap: 24, fontSize: 11, color: '#888', flexWrap: 'wrap',
          }}>
            <div><span style={{ color: '#666' }}>YEAR /</span> 2024</div>
            <div><span style={{ color: '#666' }}>ENGINE /</span> UE5</div>
            <div><span style={{ color: '#666' }}>ROLE /</span> GAMEPLAY</div>
            <div><span style={{ color: '#666' }}>TEAM /</span> 5</div>
          </div>
        </div>
        <div style={{
          backgroundImage: `url(${sub.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 380,
          filter: 'grayscale(0.4) contrast(1.05)',
        }} />
      </div>
    </section>
  );
}

function BrutProjectRow({ project, lang, onClick, idx }) {
  const [hover, setHover] = useState2(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick(project)}
      style={{
        position: 'relative',
        borderBottom: '1px solid #0a0a0a',
        cursor: 'pointer',
        background: hover ? '#0a0a0a' : 'transparent',
        color: hover ? '#f3f1ec' : '#0a0a0a',
        transition: 'background 0.2s, color 0.2s',
        display: 'grid',
        gridTemplateColumns: '60px 1.2fr 0.6fr 0.6fr 0.6fr 60px',
        alignItems: 'center',
        padding: '24px 40px',
        gap: 20,
        fontSize: 14,
      }}
    >
      <div style={{ fontSize: 12, color: hover ? '#888' : '#666' }}>
        [{String(idx + 1).padStart(2, '0')}]
      </div>
      <div style={{
        fontFamily: '"Instrument Serif", serif',
        fontSize: 38, fontWeight: 400,
        fontStyle: hover ? 'italic' : 'normal',
        transition: 'font-style 0.2s',
        textWrap: 'balance',
      }}>
        {project.title}
      </div>
      <div style={{ fontSize: 12, letterSpacing: '0.1em' }}>{project.category}</div>
      <div style={{ fontSize: 12 }}>{project.engine}</div>
      <div style={{ fontSize: 12 }}>{project.year}</div>
      <div style={{ textAlign: 'right', fontSize: 18 }}>
        {hover ? '→' : '·'}
      </div>
      {/* Floating preview */}
      {hover && (
        <div style={{
          position: 'absolute',
          right: 100, top: '50%', transform: 'translateY(-50%)',
          width: 280, height: 158,
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          border: '2px solid #f3f1ec',
          pointerEvents: 'none',
          zIndex: 10,
          boxShadow: '8px 8px 0 #f3f1ec',
        }} />
      )}
    </div>
  );
}

function BrutProjects({ lang, t, onProjectClick }) {
  return (
    <section style={{ padding: 0 }}>
      <div style={{
        padding: '60px 40px 24px',
        display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16,
      }}>
        <div style={{ gridColumn: 'span 4', fontSize: 12, letterSpacing: '0.2em' }}>
          ── INDEX / 002
        </div>
        <div style={{ gridColumn: 'span 8' }}>
          <h2 style={{
            fontFamily: '"Instrument Serif", serif',
            fontStyle: 'italic',
            fontSize: 96, fontWeight: 400,
            margin: 0, letterSpacing: '-0.02em', lineHeight: 1,
          }}>
            {t.sections.selected.toLowerCase()}.
          </h2>
        </div>
      </div>
      {/* Header row */}
      <div style={{
        borderTop: '2px solid #0a0a0a',
        borderBottom: '1px solid #0a0a0a',
        background: '#0a0a0a', color: '#f3f1ec',
        display: 'grid',
        gridTemplateColumns: '60px 1.2fr 0.6fr 0.6fr 0.6fr 60px',
        padding: '12px 40px',
        gap: 20,
        fontSize: 11, letterSpacing: '0.2em',
      }}>
        <div>№</div>
        <div>TITLE</div>
        <div>TYPE</div>
        <div>ENGINE</div>
        <div>YEAR</div>
        <div></div>
      </div>
      {PROJ_B.map((p, i) => (
        <BrutProjectRow key={p.id} project={p} lang={lang} onClick={onProjectClick} idx={i} />
      ))}
    </section>
  );
}

function BrutAbout({ lang, t }) {
  const interests = lang === 'fr' ? window.PORTFOLIO_DATA.INTERESTS_FR : window.PORTFOLIO_DATA.INTERESTS_EN;
  return (
    <section style={{
      borderTop: '2px solid #0a0a0a',
      padding: '80px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 16,
    }}>
      <div style={{ gridColumn: 'span 4', fontSize: 12, letterSpacing: '0.2em' }}>
        ── ABOUT / 003
      </div>
      <div style={{ gridColumn: 'span 8' }}>
        <p style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 38, lineHeight: 1.3, fontWeight: 400, margin: 0,
          textWrap: 'pretty', maxWidth: 760,
        }}>
          {t.about.bio}
        </p>
        <div style={{
          marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40,
        }}>
          <div>
            <div style={{
              fontSize: 11, letterSpacing: '0.2em', borderBottom: '1px solid #0a0a0a',
              paddingBottom: 8, marginBottom: 16,
            }}>
              {t.about.stack}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {window.PORTFOLIO_DATA.STACK.map(s => (
                <span key={s} style={{
                  border: '1px solid #0a0a0a', padding: '6px 12px',
                  fontSize: 12, letterSpacing: '0.05em',
                }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 11, letterSpacing: '0.2em', borderBottom: '1px solid #0a0a0a',
              paddingBottom: 8, marginBottom: 16,
            }}>
              {t.about.interests}
            </div>
            {interests.map((i, idx) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '10px 0', fontSize: 14, borderBottom: '1px dashed #0a0a0a',
              }}>
                <span>{String(idx + 1).padStart(2, '0')}. {i}</span>
                <span>◼</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrutContact({ t }) {
  const [copied, setCopied] = useState2(false);
  const email = 'umutosmanoglu0@gmail.com';
  return (
    <section style={{
      borderTop: '2px solid #0a0a0a',
      background: '#0a0a0a',
      color: '#f3f1ec',
      padding: '100px 40px 40px',
    }}>
      <div style={{ fontSize: 12, letterSpacing: '0.2em', color: '#888', marginBottom: 24 }}>
        ── CONTACT / 004
      </div>
      <h2 style={{
        fontFamily: '"Instrument Serif", serif',
        fontStyle: 'italic', fontSize: 140, fontWeight: 400,
        margin: 0, lineHeight: 0.95, letterSpacing: '-0.04em',
        textWrap: 'balance', maxWidth: 1100,
      }}>
        {t.contact.title.toLowerCase()}
      </h2>
      <div style={{
        marginTop: 60, padding: '24px 0',
        borderTop: '1px solid #333', borderBottom: '1px solid #333',
        display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: 11, letterSpacing: '0.25em', color: '#888' }}>EMAIL ▸</span>
        <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 32 }}>{email}</span>
        <button onClick={() => { navigator.clipboard?.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1500); }} style={{
          marginLeft: 'auto',
          background: copied ? '#f3f1ec' : 'transparent',
          color: copied ? '#0a0a0a' : '#f3f1ec',
          border: '1px solid #f3f1ec',
          padding: '10px 18px', fontFamily: 'inherit',
          fontSize: 11, letterSpacing: '0.2em', cursor: 'pointer',
        }}>{copied ? t.contact.copied : t.contact.copy}</button>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginTop: 60, fontSize: 11, letterSpacing: '0.2em', color: '#888',
      }}>
        <div>UMUT OSMANOGLU © 2026 ─ ALL RIGHTS RESERVED</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a style={{ color: '#888' }}>↗ GITHUB</a>
          <a style={{ color: '#888' }}>↗ LINKEDIN</a>
        </div>
      </div>
    </section>
  );
}

window.BrutalistSite = function BrutalistSite({ lang, setLang, onProjectClick }) {
  const t = I18N_B[lang];
  return (
    <div style={brutStyles.root}>
      <div style={brutStyles.grid}></div>
      <BrutNav lang={lang} setLang={setLang} t={t} />
      <BrutHero t={t} lang={lang} onProjectClick={onProjectClick} />
      <BrutProjects lang={lang} t={t} onProjectClick={onProjectClick} />
      <BrutAbout lang={lang} t={t} />
      <BrutContact t={t} />
    </div>
  );
};
