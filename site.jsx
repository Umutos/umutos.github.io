// Cinematic Dark — full multi-page site
// Hash routing: #/, #/projects, #/projects/:id, #/about, #/contact
// Designed to deploy on GitHub Pages (relative asset paths)

const { useState, useEffect, useRef } = React;
const { PROJECTS, I18N } = window.PORTFOLIO_DATA;

// ─── Router ──────────────────────────────────────────────────────
function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/');
  useEffect(() => {
    const h = () => {
      setHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);
  const path = hash.replace(/^#/, '') || '/';
  return path;
}

const go = (path) => { window.location.hash = path; };

// ─── Shared chrome ───────────────────────────────────────────────
const ACCENT = '#ff4747';
const BG = '#070708';

const fontStack = '"Space Grotesk", "Inter", system-ui, sans-serif';
const monoStack = '"Space Mono", monospace';

function Nav({ lang, setLang, t, currentPath }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { path: '/', label: t.nav.home },
    { path: '/projects', label: t.nav.projects },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];
  const isActive = (p) => p === '/' ? currentPath === '/' : currentPath.startsWith(p);
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      padding: scrolled ? '16px 56px' : '28px 56px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      zIndex: 100,
      background: scrolled ? 'rgba(7,7,8,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <a onClick={() => go('/')} style={{
        fontFamily: monoStack, fontSize: 13, letterSpacing: '0.3em',
        fontWeight: 700, cursor: 'pointer', color: '#fff',
      }}>
        UO. ─ UMUT OSMANOGLU
      </a>
      <div style={{
        display: 'flex', gap: 36,
        fontFamily: monoStack, fontSize: 11, letterSpacing: '0.25em',
      }}>
        {links.map(l => (
          <a key={l.path} onClick={() => go(l.path)} style={{
            cursor: 'pointer',
            color: isActive(l.path) ? '#fff' : '#888',
            position: 'relative', paddingBottom: 4,
            transition: 'color 0.2s',
          }}>
            {l.label}
            {isActive(l.path) && (
              <span style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 1, background: ACCENT,
              }}></span>
            )}
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 4, fontFamily: monoStack, fontSize: 11, letterSpacing: '0.2em' }}>
        <button onClick={() => setLang('fr')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: lang === 'fr' ? ACCENT : '#888', padding: '2px 6px', fontFamily: 'inherit', fontSize: 'inherit',
        }}>FR</button>
        <span style={{ color: '#444' }}>/</span>
        <button onClick={() => setLang('en')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: lang === 'en' ? ACCENT : '#888', padding: '2px 6px', fontFamily: 'inherit', fontSize: 'inherit',
        }}>EN</button>
      </div>
    </nav>
  );
}

function Footer({ t }) {
  return (
    <footer style={{
      padding: '60px 56px 32px',
      borderTop: '1px solid #1a1a1d',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: monoStack, fontSize: 11, letterSpacing: '0.25em', color: '#666',
    }}>
      <div>UMUT OSMANOGLU © 2026</div>
      <div style={{ display: 'flex', gap: 32 }}>
        <a href="https://github.com/Umutos" target="_blank" rel="noopener" style={{ color: '#888' }}>GITHUB ↗</a>
        <a href="https://www.linkedin.com/in/umut-osmanoglu" target="_blank" rel="noopener" style={{ color: '#888' }}>LINKEDIN ↗</a>
        <a href="mailto:umutosmanoglu0@gmail.com" style={{ color: '#888' }}>EMAIL ↗</a>
      </div>
    </footer>
  );
}

// ─── Home page ───────────────────────────────────────────────────
function Hero({ t, lang }) {
  const sub = PROJECTS.find(p => p.id === 'subsilence');
  return (
    <section style={{
      position: 'relative',
      height: '100vh', minHeight: 720,
      width: '100%',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${sub.image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.55) contrast(1.1) saturate(0.85)',
        transform: 'scale(1.05)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(7,7,8,0.85) 100%), linear-gradient(180deg, rgba(7,7,8,0.4) 0%, transparent 30%, transparent 60%, rgba(7,7,8,0.95) 100%)',
      }} />
      <div style={{
        position: 'absolute', left: 56, top: '50%', transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'left center',
        fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em', color: '#888',
      }}>
        FEATURED — 01 / {String(PROJECTS.length).padStart(2, '0')}
      </div>
      <div style={{
        position: 'absolute', left: 'min(120px, 8vw)', bottom: 'min(120px, 12vh)', right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40,
        flexWrap: 'wrap',
      }}>
        <div style={{ maxWidth: 820 }}>
          <div style={{
            fontFamily: monoStack, fontSize: 12, letterSpacing: '0.3em',
            color: ACCENT, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: ACCENT }}></span>
            {t.hero.featured}
          </div>
          <h1 style={{
            fontFamily: fontStack,
            fontSize: 'clamp(72px, 10vw, 140px)', lineHeight: 0.92, fontWeight: 700,
            margin: 0, letterSpacing: '-0.04em',
          }}>
            SUB<br/>SILENCE.
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.4, marginTop: 28, maxWidth: 560,
            color: '#c8c8ca', textWrap: 'pretty',
          }}>
            {sub.tagline[lang]}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
          <button onClick={() => go(`/projects/${sub.id}`)} style={{
            background: ACCENT, color: '#fff', border: 'none',
            padding: '20px 36px', fontFamily: monoStack,
            fontSize: 12, letterSpacing: '0.25em', cursor: 'pointer',
            fontWeight: 700, transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          >
            {t.sections.viewProject} →
          </button>
          <div style={{ fontFamily: monoStack, fontSize: 11, letterSpacing: '0.25em', color: '#888' }}>
            UNREAL ENGINE 5  ·  2024
          </div>
        </div>
      </div>
      <div style={{
        position: 'absolute', right: 56, bottom: 32,
        fontFamily: monoStack, fontSize: 10, letterSpacing: '0.3em', color: '#888',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        {t.hero.scroll}
        <span style={{ display: 'inline-block', width: 1, height: 40, background: 'linear-gradient(180deg, #888, transparent)' }}></span>
      </div>
    </section>
  );
}

function ProjectCard({ project, lang, size = 'normal' }) {
  const [hover, setHover] = useState(false);
  const isLarge = size === 'large';
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => go(`/projects/${project.id}`)}
      style={{
        position: 'relative', cursor: 'pointer', overflow: 'hidden',
        background: '#111', height: isLarge ? 480 : 320,
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
        fontFamily: monoStack, fontSize: 10, letterSpacing: '0.3em',
        color: ACCENT, fontWeight: 700,
      }}>
        {project.category} — {project.year}
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: 24,
      }}>
        <h3 style={{
          fontFamily: fontStack,
          fontSize: isLarge ? 48 : 32,
          fontWeight: 700, margin: 0, letterSpacing: '-0.02em',
          textTransform: 'uppercase', color: '#fff',
        }}>
          {project.title}
        </h3>
        <div style={{
          maxHeight: hover ? 80 : 0,
          overflow: 'hidden', transition: 'max-height 0.4s ease',
        }}>
          <p style={{
            fontSize: 14, color: '#c8c8ca', marginTop: 10, marginBottom: 0,
            lineHeight: 1.4, textWrap: 'pretty',
          }}>
            {project.tagline[lang]}
          </p>
        </div>
      </div>
      <div style={{
        position: 'absolute', top: 16, right: 20,
        fontFamily: monoStack, fontSize: 10, color: '#888',
      }}>↗</div>
    </div>
  );
}

function HomePage({ lang, t }) {
  const games = PROJECTS.filter(p => p.category === 'GAME');
  const others = PROJECTS.filter(p => p.category !== 'GAME');
  return (
    <>
      <Hero t={t} lang={lang} />
      <section style={{ padding: '160px 56px 120px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 60 }}>
          <div style={{ fontFamily: monoStack, fontSize: 12, letterSpacing: '0.3em', color: ACCENT }}>
            002 /
          </div>
          <h2 style={{
            fontFamily: fontStack, fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700, margin: 0, letterSpacing: '-0.04em',
          }}>
            {t.sections.selected}
          </h2>
        </div>

        <div style={{
          fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
          color: '#888', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: '#888' }}></span>
          {t.sections.games}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 80,
        }}>
          {games.slice(1, 7).map((p, i) => (
            <ProjectCard key={p.id} project={p} lang={lang} size={i === 0 ? 'large' : 'normal'} />
          ))}
        </div>

        <div style={{
          fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
          color: '#888', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: '#888' }}></span>
          {t.sections.engine} & {t.sections.tools}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 60,
        }}>
          {others.map(p => (
            <ProjectCard key={p.id} project={p} lang={lang} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <button onClick={() => go('/projects')} style={{
            background: 'transparent', color: '#fff',
            border: `1px solid ${ACCENT}`,
            padding: '18px 36px', fontFamily: monoStack,
            fontSize: 12, letterSpacing: '0.25em', cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = ACCENT; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            {t.sections.viewAll} →
          </button>
        </div>
      </section>
    </>
  );
}

// ─── Projects index page ─────────────────────────────────────────
function ProjectsPage({ lang, t }) {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'GAME', 'ENGINE', 'TOOL'];
  const filtered = filter === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section style={{ padding: '160px 56px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 32 }}>
        <div style={{ fontFamily: monoStack, fontSize: 12, letterSpacing: '0.3em', color: ACCENT }}>
          INDEX /
        </div>
        <h1 style={{
          fontFamily: fontStack, fontSize: 'clamp(64px, 9vw, 132px)',
          fontWeight: 700, margin: 0, letterSpacing: '-0.04em', lineHeight: 1,
        }}>
          {t.nav.projects}
        </h1>
      </div>
      <p style={{
        fontSize: 18, color: '#888', maxWidth: 600, marginBottom: 60,
      }}>
        {lang === 'fr'
          ? `${PROJECTS.length} projets — jeux, moteur maison et outils.`
          : `${PROJECTS.length} projects — games, custom engine and tools.`}
      </p>

      <div style={{
        display: 'flex', gap: 4, marginBottom: 48,
        borderBottom: '1px solid #1a1a1d', paddingBottom: 16,
      }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            background: filter === f ? ACCENT : 'transparent',
            color: filter === f ? '#fff' : '#888',
            border: 'none',
            padding: '10px 20px', fontFamily: monoStack,
            fontSize: 11, letterSpacing: '0.25em', cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            {f === 'ALL' ? (lang === 'fr' ? 'TOUS' : 'ALL') : f}
            <span style={{ marginLeft: 8, opacity: 0.6 }}>
              {f === 'ALL' ? PROJECTS.length : PROJECTS.filter(p => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      }}>
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} lang={lang} />
        ))}
      </div>
    </section>
  );
}

// ─── Project detail page ─────────────────────────────────────────
function ProjectDetailPage({ id, lang, t }) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) {
    return (
      <section style={{ padding: '200px 56px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: fontStack, fontSize: 80 }}>404</h1>
        <p style={{ color: '#888' }}>{lang === 'fr' ? 'Projet introuvable.' : 'Project not found.'}</p>
        <button onClick={() => go('/projects')} style={{
          marginTop: 32, background: ACCENT, color: '#fff', border: 'none',
          padding: '16px 28px', fontFamily: monoStack, fontSize: 11, letterSpacing: '0.25em', cursor: 'pointer',
        }}>← {t.nav.projects}</button>
      </section>
    );
  }

  const idx = PROJECTS.findIndex(p => p.id === id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <article>
      {/* Hero image */}
      <section style={{
        position: 'relative', height: '70vh', minHeight: 520,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.55) contrast(1.05)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(7,7,8,0.5) 0%, transparent 30%, transparent 50%, rgba(7,7,8,0.95) 100%)',
        }} />
        <div style={{
          position: 'absolute', left: 56, bottom: 56, right: 56,
        }}>
          <button onClick={() => go('/projects')} style={{
            background: 'transparent', color: '#888', border: 'none',
            fontFamily: monoStack, fontSize: 11, letterSpacing: '0.25em', cursor: 'pointer',
            padding: 0, marginBottom: 20,
          }}>← {t.nav.projects}</button>
          <div style={{
            fontFamily: monoStack, fontSize: 12, letterSpacing: '0.3em',
            color: ACCENT, marginBottom: 16,
          }}>
            {project.category} ─ {project.year}
          </div>
          <h1 style={{
            fontFamily: fontStack,
            fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.95, fontWeight: 700,
            margin: 0, letterSpacing: '-0.04em', textTransform: 'uppercase',
          }}>
            {project.title}
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 1.5vw, 24px)', color: '#c8c8ca', marginTop: 16, maxWidth: 720,
            textWrap: 'pretty',
          }}>
            {project.tagline[lang]}
          </p>
        </div>
      </section>

      {/* Meta + body */}
      <section style={{ padding: '80px 56px 60px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
          padding: '32px 0',
          borderTop: '1px solid #2a2a2d', borderBottom: '1px solid #2a2a2d',
          marginBottom: 80,
        }}>
          {[
            { label: t.sections.role, value: project.role[lang] },
            { label: t.sections.team, value: project.team },
            { label: t.sections.duration, value: project.duration[lang] },
            { label: 'ENGINE', value: project.engine },
          ].map(m => (
            <div key={m.label}>
              <div style={{
                fontFamily: monoStack, fontSize: 10, letterSpacing: '0.3em',
                color: ACCENT, marginBottom: 12,
              }}>
                {m.label}
              </div>
              <div style={{ fontSize: 17, lineHeight: 1.4 }}>{m.value}</div>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80,
          marginBottom: 80,
        }}>
          <div>
            <div style={{
              fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
              color: ACCENT, marginBottom: 16,
            }}>
              ▸ {lang === 'fr' ? 'À PROPOS' : 'OVERVIEW'}
            </div>
          </div>
          <div>
            <p style={{
              fontFamily: fontStack,
              fontSize: 22, lineHeight: 1.5, margin: 0, color: '#e9e9ea',
              textWrap: 'pretty',
            }}>
              {project.description[lang]}
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
          marginBottom: 80,
        }}>
          <div>
            <div style={{
              fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
              color: ACCENT, marginBottom: 16,
            }}>
              ▸ {t.sections.challenges}
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#c8c8ca', margin: 0, textWrap: 'pretty' }}>
              {project.challenges[lang]}
            </p>
          </div>
          <div>
            <div style={{
              fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
              color: ACCENT, marginBottom: 16,
            }}>
              ▸ {t.sections.pillars}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.pillars.map((p, i) => (
                <li key={i} style={{
                  padding: '12px 0', borderBottom: '1px solid #1a1a1d',
                  fontSize: 17, display: 'flex', justifyContent: 'space-between',
                }}>
                  <span>{p[lang]}</span>
                  <span style={{ color: '#444', fontFamily: monoStack, fontSize: 12 }}>{String(i + 1).padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
            color: ACCENT, marginBottom: 16,
          }}>
            ▸ {t.sections.tech}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tech.map(tech => (
              <span key={tech} style={{
                border: '1px solid #2a2a2d', padding: '10px 16px',
                fontSize: 13, fontFamily: monoStack, letterSpacing: '0.05em',
              }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Big screenshot */}
      <section style={{ padding: '0 56px 120px' }}>
        <img src={project.image} alt={project.title} style={{
          width: '100%', height: 'auto', display: 'block',
          border: '1px solid #1a1a1d',
        }} />
      </section>

      {/* Prev / Next */}
      <section style={{
        borderTop: '1px solid #1a1a1d',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
      }}>
        {[
          { p: prev, label: lang === 'fr' ? 'PROJET PRÉCÉDENT' : 'PREVIOUS', arrow: '←' },
          { p: next, label: lang === 'fr' ? 'PROJET SUIVANT' : 'NEXT', arrow: '→' },
        ].map((nav, i) => (
          <a key={i} onClick={() => go(`/projects/${nav.p.id}`)} style={{
            display: 'block', padding: '60px 56px',
            cursor: 'pointer',
            borderRight: i === 0 ? '1px solid #1a1a1d' : 'none',
            position: 'relative', overflow: 'hidden',
            background: '#0a0a0c',
            textAlign: i === 0 ? 'left' : 'right',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#0f0f12'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#0a0a0c'}
          >
            <div style={{
              fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
              color: '#888', marginBottom: 16,
            }}>
              {nav.label}
            </div>
            <div style={{
              fontFamily: fontStack, fontSize: 48, fontWeight: 700,
              letterSpacing: '-0.02em', textTransform: 'uppercase',
            }}>
              {i === 0 && <span style={{ color: ACCENT, marginRight: 16 }}>{nav.arrow}</span>}
              {nav.p.title}
              {i === 1 && <span style={{ color: ACCENT, marginLeft: 16 }}>{nav.arrow}</span>}
            </div>
          </a>
        ))}
      </section>
    </article>
  );
}

// ─── About page ──────────────────────────────────────────────────
function AboutPage({ lang, t }) {
  const interests = lang === 'fr' ? window.PORTFOLIO_DATA.INTERESTS_FR : window.PORTFOLIO_DATA.INTERESTS_EN;
  return (
    <section style={{ padding: '160px 56px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 60 }}>
        <div style={{ fontFamily: monoStack, fontSize: 12, letterSpacing: '0.3em', color: ACCENT }}>
          BIO /
        </div>
        <h1 style={{
          fontFamily: fontStack, fontSize: 'clamp(64px, 9vw, 132px)',
          fontWeight: 700, margin: 0, letterSpacing: '-0.04em', lineHeight: 1,
        }}>
          {t.about.title}
        </h1>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 100,
        alignItems: 'start', marginBottom: 100,
      }}>
        <div>
          <p style={{
            fontFamily: fontStack,
            fontSize: 32, lineHeight: 1.35, fontWeight: 400, margin: 0,
            color: '#e9e9ea', textWrap: 'pretty', marginBottom: 24,
          }}>
            {t.about.bio}
          </p>
          <p style={{
            fontSize: 18, lineHeight: 1.6, color: '#888', margin: 0, textWrap: 'pretty',
          }}>
            {lang === 'fr'
              ? "Je travaille principalement avec Unreal Engine 5 et Unity, mais j'ai aussi développé un moteur maison en C++ (Pandor Engine) avec des coéquipiers. Mon intérêt va aussi bien au gameplay et au game design qu'aux outils que j'écris pour fluidifier la création."
              : "I work mostly with Unreal Engine 5 and Unity, but I also built a home-grown C++ engine (Pandor Engine) with teammates. My interest spans gameplay and game design as much as the tools I write to make creation easier."
            }
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div>
            <div style={{
              fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
              color: ACCENT, marginBottom: 16,
            }}>
              {t.about.stack}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {window.PORTFOLIO_DATA.STACK.map(s => (
                <span key={s} style={{
                  border: '1px solid #2a2a2d', padding: '8px 14px',
                  fontSize: 13, fontFamily: monoStack, letterSpacing: '0.05em',
                }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em',
              color: ACCENT, marginBottom: 16,
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

// ─── Contact page ────────────────────────────────────────────────
function ContactPage({ t, lang }) {
  const [copied, setCopied] = useState(false);
  const email = 'umutosmanoglu0@gmail.com';
  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section style={{ padding: '160px 56px 120px' }}>
      <div style={{ fontFamily: monoStack, fontSize: 12, letterSpacing: '0.3em', color: ACCENT, marginBottom: 24 }}>
        CONTACT /
      </div>
      <h1 style={{
        fontFamily: fontStack,
        fontSize: 'clamp(64px, 10vw, 140px)', fontWeight: 700, margin: 0, lineHeight: 0.95,
        letterSpacing: '-0.04em', textWrap: 'balance',
      }}>
        {t.contact.title}
      </h1>
      <p style={{ fontSize: 20, color: '#888', marginTop: 24, maxWidth: 640 }}>
        {t.contact.sub}
      </p>
      <div style={{
        marginTop: 60,
        display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
        padding: '32px 0',
        borderTop: '1px solid #2a2a2d', borderBottom: '1px solid #2a2a2d',
      }}>
        <div style={{ fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em', color: '#888' }}>EMAIL</div>
        <div style={{ fontFamily: fontStack, fontSize: 'clamp(22px, 3vw, 36px)', flex: 1, fontWeight: 500, minWidth: 320 }}>
          {email}
        </div>
        <button onClick={copy} style={{
          background: copied ? ACCENT : 'transparent',
          color: copied ? '#fff' : ACCENT,
          border: `1px solid ${ACCENT}`,
          padding: '14px 24px', fontFamily: monoStack,
          fontSize: 11, letterSpacing: '0.25em', cursor: 'pointer',
          minWidth: 130,
        }}>
          {copied ? t.contact.copied : t.contact.copy}
        </button>
      </div>

      <div style={{
        marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      }}>
        {[
          { label: 'GITHUB', url: 'https://github.com/Umutos', value: '@Umutos' },
          { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/umut-osmanoglu', value: 'umut-osmanoglu' },
          { label: 'EMAIL', url: 'mailto:' + email, value: lang === 'fr' ? 'Écrire un message' : 'Send a message' },
        ].map(s => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener" style={{
            display: 'block', padding: 32,
            border: '1px solid #2a2a2d', cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.background = 'rgba(255,71,71,0.04)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#2a2a2d'; e.currentTarget.style.background = 'transparent'; }}
          >
            <div style={{ fontFamily: monoStack, fontSize: 11, letterSpacing: '0.3em', color: ACCENT, marginBottom: 16 }}>
              {s.label} ↗
            </div>
            <div style={{ fontSize: 22, fontFamily: fontStack, fontWeight: 500 }}>
              {s.value}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Root ────────────────────────────────────────────────────────
window.PortfolioApp = function PortfolioApp() {
  const path = useHashRoute();
  const [lang, setLangState] = useState(() => localStorage.getItem('uo_lang') || 'fr');
  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem('uo_lang', l);
  };
  const t = I18N[lang];

  let page;
  if (path === '/' || path === '') {
    page = <HomePage lang={lang} t={t} />;
  } else if (path === '/projects') {
    page = <ProjectsPage lang={lang} t={t} />;
  } else if (path.startsWith('/projects/')) {
    const id = path.replace('/projects/', '');
    page = <ProjectDetailPage id={id} lang={lang} t={t} />;
  } else if (path === '/about') {
    page = <AboutPage lang={lang} t={t} />;
  } else if (path === '/contact') {
    page = <ContactPage lang={lang} t={t} />;
  } else {
    page = <HomePage lang={lang} t={t} />;
  }

  return (
    <div style={{
      background: BG, color: '#e9e9ea', fontFamily: fontStack, minHeight: '100vh',
    }}>
      <Nav lang={lang} setLang={setLang} t={t} currentPath={path} />
      <main>{page}</main>
      <Footer t={t} />
    </div>
  );
};
