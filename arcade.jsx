// Direction 3 — ARCADE / CRT
// Vibe rétro arcade : scanlines, néon, pixel font, écran de jeu en fond.

const { useState: useState3 } = React;
const { PROJECTS: PROJ_A, I18N: I18N_A } = window.PORTFOLIO_DATA;

const arcadeStyles = {
  root: {
    fontFamily: '"VT323", "Press Start 2P", monospace',
    background: '#05050a',
    color: '#e6f0ff',
    width: '1440px',
    minHeight: '3500px',
    position: 'relative',
    overflow: 'hidden',
  },
  scan: {
    position: 'absolute', inset: 0,
    background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)',
    pointerEvents: 'none',
    zIndex: 100,
  },
  glow: {
    position: 'absolute',
    width: 800, height: 800,
    borderRadius: '50%',
    filter: 'blur(120px)',
    pointerEvents: 'none',
  },
};

function ArcadeNav({ lang, setLang, t }) {
  return (
    <nav style={{
      position: 'sticky', top: 0,
      zIndex: 60,
      borderBottom: '2px solid #ff2bd6',
      padding: '16px 40px',
      background: 'rgba(5,5,10,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{
        fontFamily: '"Press Start 2P", monospace', fontSize: 14,
        color: '#ff2bd6', textShadow: '0 0 10px #ff2bd6, 0 0 20px #ff2bd6',
      }}>
        ▶ U.OSMANOGLU
      </div>
      <div style={{ display: 'flex', gap: 32, fontSize: 22, fontFamily: '"VT323", monospace' }}>
        <a style={{ color: '#00f0ff' }}>● {t.nav.home}</a>
        <a style={{ color: '#e6f0ff' }}>○ {t.nav.projects}</a>
        <a style={{ color: '#e6f0ff' }}>○ {t.nav.about}</a>
        <a style={{ color: '#e6f0ff' }}>○ {t.nav.contact}</a>
      </div>
      <div style={{ display: 'flex', gap: 4, fontFamily: '"Press Start 2P", monospace', fontSize: 10 }}>
        <button onClick={() => setLang('fr')} style={{
          border: '2px solid ' + (lang === 'fr' ? '#ffe600' : '#333'),
          background: lang === 'fr' ? '#ffe600' : 'transparent',
          color: lang === 'fr' ? '#05050a' : '#888',
          padding: '6px 8px', cursor: 'pointer', fontFamily: 'inherit', fontSize: 10,
        }}>FR</button>
        <button onClick={() => setLang('en')} style={{
          border: '2px solid ' + (lang === 'en' ? '#ffe600' : '#333'),
          background: lang === 'en' ? '#ffe600' : 'transparent',
          color: lang === 'en' ? '#05050a' : '#888',
          padding: '6px 8px', cursor: 'pointer', fontFamily: 'inherit', fontSize: 10,
        }}>EN</button>
      </div>
    </nav>
  );
}

function ArcadeHero({ t, lang, onProjectClick }) {
  const sub = PROJ_A.find(p => p.id === 'subsilence');
  return (
    <section style={{
      position: 'relative', padding: '80px 40px 60px',
    }}>
      <div style={{ ...arcadeStyles.glow, background: '#ff2bd6', top: -200, left: -200, opacity: 0.4 }}></div>
      <div style={{ ...arcadeStyles.glow, background: '#00f0ff', top: 100, right: -200, opacity: 0.3 }}></div>

      <div style={{ position: 'relative', textAlign: 'center', marginBottom: 40 }}>
        <div style={{
          fontFamily: '"Press Start 2P", monospace', fontSize: 11,
          color: '#ffe600', letterSpacing: '0.2em', marginBottom: 24,
        }}>
          ★ INSERT COIN ★
        </div>
        <h1 style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: 88, lineHeight: 1.1, fontWeight: 400,
          margin: 0,
          color: '#fff',
          textShadow: `
            -3px -3px 0 #ff2bd6,
            3px 3px 0 #00f0ff,
            0 0 30px rgba(255,43,214,0.5)
          `,
        }}>
          PRESS<br/>START.
        </h1>
        <p style={{
          fontFamily: '"VT323", monospace', fontSize: 32, color: '#9ab',
          marginTop: 32, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto',
          textWrap: 'pretty',
        }}>
          {t.hero.tag}
        </p>
      </div>

      {/* CRT screen with featured project */}
      <div style={{
        position: 'relative',
        margin: '40px auto 0',
        maxWidth: 1100,
        border: '4px solid #2a2a3a',
        borderRadius: 18,
        background: '#000',
        padding: 12,
        boxShadow: '0 0 60px rgba(255,43,214,0.4), inset 0 0 80px rgba(0,240,255,0.1)',
      }}>
        <div style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderRadius: 8,
          cursor: 'pointer',
        }} onClick={() => onProjectClick(sub)}>
          <img src={sub.image} alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'saturate(1.2) contrast(1.1)',
          }} />
          {/* CRT scanlines on this screen */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 4px)',
            pointerEvents: 'none',
          }}></div>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none',
          }}></div>
          {/* HUD overlay */}
          <div style={{
            position: 'absolute', top: 16, left: 20,
            fontFamily: '"Press Start 2P", monospace', fontSize: 12,
            color: '#ffe600',
          }}>
            P1 ◆ NOW PLAYING
          </div>
          <div style={{
            position: 'absolute', top: 16, right: 20,
            fontFamily: '"Press Start 2P", monospace', fontSize: 12,
            color: '#00f0ff',
          }}>
            01/{String(PROJ_A.length).padStart(2, '0')}
          </div>
          <div style={{
            position: 'absolute', bottom: 24, left: 24, right: 24,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          }}>
            <div>
              <div style={{
                fontFamily: '"Press Start 2P", monospace', fontSize: 36,
                color: '#fff', textShadow: '3px 3px 0 #ff2bd6',
              }}>
                SUBSILENCE
              </div>
              <div style={{
                fontFamily: '"VT323", monospace', fontSize: 24,
                color: '#9ab', marginTop: 8,
              }}>
                ▸ {sub.tagline[lang]}
              </div>
            </div>
            <div style={{
              fontFamily: '"Press Start 2P", monospace', fontSize: 11,
              color: '#ffe600', textAlign: 'right', lineHeight: 1.8,
            }}>
              UE5 · 2024<br/>
              5 PLAYERS
            </div>
          </div>
        </div>
      </div>
      <div style={{
        textAlign: 'center', marginTop: 24,
        fontFamily: '"Press Start 2P", monospace', fontSize: 11,
        color: '#888', letterSpacing: '0.15em',
      }}>
        ▼ ▼ ▼  PRESS DOWN TO CONTINUE  ▼ ▼ ▼
      </div>
    </section>
  );
}

function ArcadeProjectCard({ project, lang, onClick, idx }) {
  const [hover, setHover] = useState3(false);
  const colors = ['#ff2bd6', '#00f0ff', '#ffe600', '#7cff5e'];
  const c = colors[idx % colors.length];
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick(project)}
      style={{
        cursor: 'pointer',
        background: '#0a0a14',
        border: `2px solid ${hover ? c : '#1a1a2a'}`,
        boxShadow: hover ? `0 0 30px ${c}66, 8px 8px 0 ${c}` : `4px 4px 0 #1a1a2a`,
        transition: 'all 0.15s steps(3)',
        transform: hover ? 'translate(-4px, -4px)' : 'none',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderBottom: `2px solid ${hover ? c : '#1a1a2a'}`,
      }}>
        <img src={project.image} alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: hover ? 'saturate(1.3) contrast(1.1)' : 'saturate(0.9) brightness(0.85)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 3px)',
          pointerEvents: 'none',
        }}></div>
        <div style={{
          position: 'absolute', top: 8, left: 10,
          fontFamily: '"Press Start 2P", monospace', fontSize: 9,
          color: c,
          textShadow: '1px 1px 0 #000',
        }}>
          STAGE {String(idx + 1).padStart(2, '0')}
        </div>
        <div style={{
          position: 'absolute', top: 8, right: 10,
          fontFamily: '"Press Start 2P", monospace', fontSize: 9,
          color: '#fff',
          textShadow: '1px 1px 0 #000',
        }}>
          [{project.category}]
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: 16, color: c,
          lineHeight: 1.3,
          textShadow: hover ? `0 0 8px ${c}` : 'none',
          textTransform: 'uppercase',
          minHeight: 40,
        }}>
          {project.title}
        </div>
        <div style={{
          fontFamily: '"VT323", monospace', fontSize: 18, color: '#9ab',
          marginTop: 10, lineHeight: 1.3, minHeight: 48,
        }}>
          ▸ {project.tagline[lang]}
        </div>
        <div style={{
          marginTop: 16, paddingTop: 12, borderTop: `1px dashed ${c}55`,
          display: 'flex', justifyContent: 'space-between',
          fontFamily: '"Press Start 2P", monospace', fontSize: 9, color: '#888',
        }}>
          <span>{project.engine}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  );
}

function ArcadeProjects({ lang, t, onProjectClick }) {
  return (
    <section style={{ padding: '80px 40px', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div style={{
          fontFamily: '"Press Start 2P", monospace', fontSize: 11,
          color: '#ffe600', letterSpacing: '0.2em', marginBottom: 16,
        }}>
          ─── STAGE SELECT ───
        </div>
        <h2 style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: 56, color: '#fff', margin: 0,
          textShadow: '4px 4px 0 #00f0ff, 8px 8px 0 #ff2bd6',
        }}>
          {t.sections.projects}
        </h2>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
      }}>
        {PROJ_A.map((p, i) => (
          <ArcadeProjectCard key={p.id} project={p} lang={lang} onClick={onProjectClick} idx={i} />
        ))}
      </div>
    </section>
  );
}

function ArcadeAbout({ lang, t }) {
  const interests = lang === 'fr' ? window.PORTFOLIO_DATA.INTERESTS_FR : window.PORTFOLIO_DATA.INTERESTS_EN;
  return (
    <section style={{
      padding: '80px 40px', position: 'relative',
      borderTop: '2px solid #ff2bd6', borderBottom: '2px solid #00f0ff',
      background: 'linear-gradient(180deg, #05050a 0%, #0a0a18 50%, #05050a 100%)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: 48, color: '#fff', margin: 0,
          textShadow: '4px 4px 0 #ffe600',
        }}>
          PLAYER 1
        </h2>
        <div style={{
          fontFamily: '"Press Start 2P", monospace', fontSize: 11,
          color: '#888', marginTop: 12,
        }}>
          ◆ STATS & ABILITIES ◆
        </div>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60,
        maxWidth: 1200, margin: '0 auto',
      }}>
        <div style={{
          border: '2px solid #00f0ff',
          padding: 32,
          background: 'rgba(0,240,255,0.04)',
          boxShadow: '8px 8px 0 #00f0ff44',
        }}>
          <div style={{
            fontFamily: '"Press Start 2P", monospace', fontSize: 11,
            color: '#00f0ff', marginBottom: 16,
          }}>
            ▸ BIO.TXT
          </div>
          <p style={{
            fontFamily: '"VT323", monospace',
            fontSize: 26, lineHeight: 1.5, margin: 0, color: '#e6f0ff',
            textWrap: 'pretty',
          }}>
            {t.about.bio}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{
            border: '2px solid #ff2bd6',
            padding: 24,
            background: 'rgba(255,43,214,0.04)',
            boxShadow: '8px 8px 0 #ff2bd644',
          }}>
            <div style={{
              fontFamily: '"Press Start 2P", monospace', fontSize: 11,
              color: '#ff2bd6', marginBottom: 16,
            }}>
              ▸ {t.about.stack}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {window.PORTFOLIO_DATA.STACK.map(s => (
                <span key={s} style={{
                  fontFamily: '"VT323", monospace',
                  border: '1px solid #ff2bd6', padding: '4px 10px',
                  fontSize: 18, color: '#ff2bd6',
                }}>{s}</span>
              ))}
            </div>
          </div>
          <div style={{
            border: '2px solid #ffe600',
            padding: 24,
            background: 'rgba(255,230,0,0.04)',
            boxShadow: '8px 8px 0 #ffe60044',
          }}>
            <div style={{
              fontFamily: '"Press Start 2P", monospace', fontSize: 11,
              color: '#ffe600', marginBottom: 16,
            }}>
              ▸ {t.about.interests}
            </div>
            {interests.map((i, idx) => (
              <div key={i} style={{
                fontFamily: '"VT323", monospace', fontSize: 22,
                color: '#e6f0ff', padding: '4px 0',
              }}>
                <span style={{ color: '#ffe600' }}>{String(idx + 1).padStart(2, '0')} ▸</span> {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArcadeContact({ t }) {
  const [copied, setCopied] = useState3(false);
  const email = 'umutosmanoglu0@gmail.com';
  return (
    <section style={{
      padding: '100px 40px 40px', textAlign: 'center', position: 'relative',
    }}>
      <div style={{
        fontFamily: '"Press Start 2P", monospace', fontSize: 11,
        color: '#7cff5e', marginBottom: 24, letterSpacing: '0.2em',
      }}>
        ─── GAME OVER? CONTINUE? ───
      </div>
      <h2 style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 56, color: '#fff', margin: 0, lineHeight: 1.2,
        textShadow: '4px 4px 0 #ff2bd6, 8px 8px 0 #00f0ff',
      }}>
        {t.contact.title}
      </h2>
      <p style={{
        fontFamily: '"VT323", monospace', fontSize: 28, color: '#9ab',
        marginTop: 24,
      }}>
        {t.contact.sub}
      </p>
      <div style={{
        marginTop: 48, display: 'inline-flex',
        flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <div style={{
          fontFamily: '"VT323", monospace', fontSize: 36,
          color: '#ffe600', textShadow: '0 0 12px #ffe600aa',
          border: '2px dashed #ffe600',
          padding: '14px 32px',
        }}>
          ▸ {email}
        </div>
        <button onClick={() => { navigator.clipboard?.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1500); }} style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: 12, padding: '14px 28px',
          background: copied ? '#7cff5e' : '#ff2bd6',
          color: copied ? '#05050a' : '#fff',
          border: 'none', cursor: 'pointer',
          boxShadow: copied ? '4px 4px 0 #fff' : '4px 4px 0 #00f0ff',
          letterSpacing: '0.1em',
        }}>
          {copied ? '✓ ' + t.contact.copied : '▶ ' + t.contact.copy}
        </button>
      </div>
      <div style={{
        marginTop: 80, display: 'flex', justifyContent: 'space-between',
        fontFamily: '"Press Start 2P", monospace', fontSize: 10, color: '#666',
      }}>
        <div>© UMUT.OSMANOGLU 2026</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a style={{ color: '#666' }}>★ GITHUB</a>
          <a style={{ color: '#666' }}>★ LINKEDIN</a>
        </div>
      </div>
    </section>
  );
}

window.ArcadeSite = function ArcadeSite({ lang, setLang, onProjectClick }) {
  const t = I18N_A[lang];
  return (
    <div style={arcadeStyles.root}>
      <ArcadeNav lang={lang} setLang={setLang} t={t} />
      <ArcadeHero t={t} lang={lang} onProjectClick={onProjectClick} />
      <ArcadeProjects lang={lang} t={t} onProjectClick={onProjectClick} />
      <ArcadeAbout lang={lang} t={t} />
      <ArcadeContact t={t} />
      <div style={arcadeStyles.scan}></div>
    </div>
  );
};
