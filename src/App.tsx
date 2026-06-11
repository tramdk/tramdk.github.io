import React, { useRef, useState, useEffect, useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  motion, useScroll, useSpring, useMotionValue,
  AnimatePresence
} from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Terminal, Database, Server, Code2, Cpu,
  Layers, Mail, Phone, Github, MapPin, ExternalLink, Activity,
  Sun, Moon, Zap, Globe, Search, Layout, FileCode,
  ArrowUpRight, ChevronDown
} from 'lucide-react';

// ─── Register GSAP Plugins ───
gsap.registerPlugin(ScrollTrigger);

// ─── Spring Presets (kept for Framer Motion layout animations) ───
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };
const SPRING_SNAPPY = { type: "spring" as const, stiffness: 200, damping: 25 };

// ─── Hooks ───
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

// ─── Typewriter Code Editor (Isolated Perpetual Animation) ───
const CodeEditorTypewriter = memo(() => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentLines, setCurrentLines] = useState<string[]>([]);

  const codeSnippets = [
    [
      'public class OrderService',
      '{',
      '    private readonly IRepository _repo;',
      '    private readonly ICacheService _cache;',
      '',
      '    public async Task<Order> ProcessAsync(',
      '        CreateOrderCommand cmd)',
      '    {',
      '        var order = Order.Create(cmd);',
      '        await _repo.AddAsync(order);',
      '        await _cache.InvalidateAsync("orders");',
      '        return order;',
      '    }',
      '}',
    ],
    [
      'const useOptimistic = <T,>(initial: T) => {',
      '  const [state, setState] = useState(initial);',
      '  const [pending, setPending] = useState(false);',
      '',
      '  const execute = async (action: () => Promise<T>) => {',
      '    setPending(true);',
      '    try {',
      '      const result = await action();',
      '      setState(result);',
      '    } finally {',
      '      setPending(false);',
      '    }',
      '  };',
      '  return { state, pending, execute };',
      '};',
    ],
  ];

  useEffect(() => {
    const snippet = codeSnippets[lineIndex % codeSnippets.length];
    if (charIndex < snippet.length) {
      const line = snippet[charIndex];
      const timer = setTimeout(() => {
        setCurrentLines(prev => [...prev, line]);
        setCharIndex(c => c + 1);
      }, 80 + Math.random() * 60);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLines([]);
        setCharIndex(0);
        setLineIndex(l => l + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="w-full h-full rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden shadow-[var(--shadow-elevated)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]">
        <div className="w-3 h-3 rounded-full bg-red-400/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <div className="w-3 h-3 rounded-full bg-green-400/60" />
        <span className="ml-3 text-[11px] font-mono text-[var(--color-text-subtle)]">
          {lineIndex % 2 === 0 ? 'OrderService.cs' : 'useOptimistic.ts'}
        </span>
      </div>
      {/* Code area */}
      <div className="p-4 font-mono text-[13px] leading-[1.7] text-[var(--color-text-muted)] h-[calc(100%-44px)] overflow-hidden">
        {currentLines.map((line, i) => (
          <div key={`${lineIndex}-${i}`} className="whitespace-pre">
            <span className="inline-block w-7 text-right mr-4 text-[var(--color-text-subtle)] select-none text-[11px]">
              {i + 1}
            </span>
            <span className={line.includes('class ') || line.includes('const ') ? 'text-[var(--color-accent)]' : ''}>
              {line}
            </span>
            {i === currentLines.length - 1 && (
              <span className="typing-cursor" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

// ─── Mesh Gradient Background (Isolated, performance-safe) ───
const MeshGradientBg = memo(() => (
  <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
    <div
      className="mesh-blob-1 absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-[0.07]"
      style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
    />
    <div
      className="mesh-blob-2 absolute -bottom-[20%] -left-[15%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
    />
  </div>
));

// ─── Parallax Scrolling Background ───
const ParallaxBackground = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current?.querySelectorAll('.parallax-el');
    if (!elements) return;

    elements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed') || '1');
      gsap.to(el, {
        y: () => -window.innerHeight * (speed * 0.18),
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="parallax-container absolute inset-0 z-[-1]">
      {/* Summary section area background */}
      <div className="parallax-el top-[12%] left-[8%] font-mono text-[9vw] font-black text-[var(--color-accent)] opacity-[0.03]" data-speed="1.2">
        {"{ }"}
      </div>
      <div className="parallax-el top-[22%] right-[10%] w-72 h-72 parallax-shape border-[var(--color-accent)]/15" data-speed="-0.7" />

      {/* Skills section area background */}
      <div className="parallax-el top-[38%] left-[12%] parallax-text" data-speed="1.5">
        &lt;STACK/&gt;
      </div>
      <div className="parallax-el top-[48%] right-[8%] font-mono text-[8vw] font-black text-purple-500/10" data-speed="-1.2">
        {"[]"}
      </div>

      {/* Projects section area background */}
      <div className="parallax-el top-[65%] left-[6%] w-96 h-96 parallax-shape border-purple-500/10" data-speed="0.8" />
      <div className="parallax-el top-[75%] right-[15%] parallax-text" data-speed="2.0">
        WEB.API
      </div>

      {/* Contact section area background */}
      <div className="parallax-el top-[88%] left-[10%] font-mono text-[10vw] font-black text-[var(--color-accent)] opacity-[0.03]" data-speed="1.0">
        {"#DEV"}
      </div>
      <div className="parallax-el top-[92%] right-[8%] w-64 h-64 parallax-shape border-[var(--color-accent)]/15" data-speed="-0.9" />
    </div>
  );
});

// ─── Floating Pill Navigation ───
const navItems = [
  { id: 'summary', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
];

const FloatingNav = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);

      // Determine active section
      const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsLight(prev => {
      const next = !prev;
      document.body.className = next ? 'theme-light' : '';
      return next;
    });
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={SPRING}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-full glass-panel-strong"
          style={{ backgroundColor: 'var(--color-card)' }}
        >
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={e => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300"
              style={{
                color: activeSection === item.id ? 'var(--color-bg)' : 'var(--color-text-muted)',
              }}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                  transition={SPRING_SNAPPY}
                />
              )}
              <span className="relative z-10">
                {t(`nav.${item.label}`)}
              </span>
            </a>
          ))}

          <div className="w-px h-5 bg-[var(--color-border)] mx-1" />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            aria-label="Toggle theme"
          >
            <motion.div
              animate={{ rotate: isLight ? 180 : 0 }}
              transition={SPRING}
            >
              {isLight ? <Moon size={16} strokeWidth={1.5} /> : <Sun size={16} strokeWidth={1.5} />}
            </motion.div>
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

// ─── Language Switcher ───
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 px-1 py-1 rounded-full glass-panel"
         style={{ backgroundColor: 'var(--color-card)' }}>
      {['en', 'vi'].map(lang => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
            i18n.language.startsWith(lang)
              ? 'bg-[var(--color-accent)] text-[var(--color-bg)]'
              : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

// ─── Hero Section — GSAP Cinematic Entrance ───
const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  // GSAP cinematic entrance timeline
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 }
    });

    // 1. Badge slides in with bounce
    tl.from(".hero-badge", {
      y: 40,
      autoAlpha: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

    // 2. Name — slide up & fade entrance
    if (nameRef.current) {
      tl.from(nameRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3");
    }

    // 3. Description — slide up & fade entrance
    if (descRef.current) {
      tl.from(descRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");
    }

    // 4. Buttons — scale + bounce entrance
    tl.from(".hero-buttons > *", {
      y: 30,
      scale: 0.8,
      autoAlpha: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.12
    }, "-=0.2");

    // 5. Code editor — 3D slide in from right
    tl.from(".hero-editor", {
      xPercent: 20,
      rotationY: -15,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

    // 6. Scroll indicator fade in
    tl.from(".hero-scroll-indicator", {
      autoAlpha: 0,
      y: 10,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");

    // Parallax on scroll — content moves up and fades
    gsap.to(contentRef.current, {
      yPercent: 20,
      autoAlpha: 0,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      }
    });

  }, { scope: heroRef, dependencies: [t] });

  return (
    <div ref={heroRef} className="min-h-[100dvh] flex items-center relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-30 transition-opacity duration-500"
        style={{ backgroundImage: 'var(--bg-grid)', backgroundSize: '4rem 4rem' }}
      />
      {/* Gradient fade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      <div
        ref={contentRef}
        className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div
              className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-accent)] text-xs font-semibold tracking-wider uppercase"
              style={{ backgroundColor: 'var(--color-accent-dim)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
              </span>
              {t('about.workStatus')}
            </div>

            <h1
              ref={nameRef}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.15] text-[var(--color-text)]"
              style={{ fontFamily: 'var(--font-heading)', perspective: '600px' }}
            >
              {t('hero.name')}
            </h1>

            <p
              ref={descRef}
              className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-[55ch] leading-relaxed"
            >
              {t('hero.desc')}
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row items-start gap-4 pt-2">
              <a
                href="#contact"
                className="magnetic-btn group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('hero.contactMe')}
                <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#projects"
                className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-text)] font-semibold text-sm transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {t('hero.viewProjects')}
              </a>
            </div>
          </div>

          {/* Right: Code Editor (5 cols) */}
          <div className="hero-editor lg:col-span-5 hidden lg:block h-[420px]" style={{ perspective: '800px' }}>
            <CodeEditorTypewriter />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hero-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] transition-colors">
            {t('hero.scroll')}
          </span>
          <div className="scroll-bounce-arrow">
            <ChevronDown size={16} strokeWidth={1.5} className="text-[var(--color-text-subtle)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Summary Section — Liquid Glass + GSAP Reveal ───
const Summary = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Card reveal — scale up from bottom
    gsap.from(".summary-card", {
      scaleY: 0,
      autoAlpha: 0,
      transformOrigin: "top center",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".summary-card",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Section label
    gsap.from(".summary-label", {
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".summary-card",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    // Bio text — fade-in reveal
    if (textRef.current) {
      gsap.from(textRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }
  }, { scope: ref, dependencies: [t] });

  return (
    <section id="summary" ref={ref} className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div
        className="summary-card p-8 md:p-12 rounded-3xl glass-panel-strong relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-card)' }}
      >
        <div>
          <h2 className="summary-label text-xs font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
            <Terminal size={14} strokeWidth={1.5} />
            {t('about.title')}
          </h2>
          <p
            ref={textRef}
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-[var(--color-text)] max-w-[55ch]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('about.bio').split('**').map((part: string, i: number) =>
              i % 2 === 1
                ? <span key={i} className="text-[var(--color-accent)] font-bold">{part}</span>
                : part
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── Spotlight Card Wrapper ───
const SpotlightCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
};

// ─── Skills Section — GSAP Batch Stagger Reveal ───
const SkillCard = ({ title, icon: Icon, items, index }: any) => {
  return (
    <div className="gsap-skill-card h-full flex flex-col" data-index={index}>
      <SpotlightCard className="h-full rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-8 hover:border-[var(--color-border-hover)] transition-colors duration-400 group">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-2.5 rounded-xl bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-all duration-400">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <h3
            className="text-lg font-bold text-[var(--color-text)] tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h3>
        </div>
        <div className="divide-y divide-[var(--color-border)]">
          {items.map((item: any, i: number) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 py-3 group/item"
              >
                <ItemIcon size={14} strokeWidth={1.5} className="text-[var(--color-text-subtle)] group-hover/item:text-[var(--color-accent)] transition-colors flex-shrink-0" />
                <span className="text-sm text-[var(--color-text-muted)] group-hover/item:text-[var(--color-text)] transition-colors">
                  {item.text}
                </span>
                <ArrowUpRight size={12} strokeWidth={1.5} className="ml-auto text-transparent group-hover/item:text-[var(--color-accent)] transition-all transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
              </div>
            );
          })}
        </div>
      </SpotlightCard>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const skills = [
    {
      title: t('skills.fe.title'), icon: Layout, items: [
        { text: "Angular (v17-), RxJS", icon: Globe },
        { text: "Component Architecture", icon: Layers },
        { text: "HttpInterceptors & State", icon: Zap },
        { text: "AngularJS Migration", icon: Activity }
      ]
    },
    {
      title: t('skills.be.title'), icon: Server, items: [
        { text: ".NET 9 / .NET 8 / Core", icon: Server },
        { text: "ASP.NET Web API", icon: Globe },
        { text: "Entity Framework Core", icon: Database },
        { text: "SignalR (Real-time)", icon: Zap }
      ]
    },
    {
      title: t('skills.db.title'), icon: Database, items: [
        { text: "SQL Server & PostgreSQL", icon: Database },
        { text: "MongoDB", icon: Database },
        { text: "ElasticSearch", icon: Search },
        { text: "Redis Cache", icon: Zap }
      ]
    },
    {
      title: t('skills.perf.title'), icon: Activity, items: [
        { text: "EF Core + Dapper (Hybrid)", icon: Layers },
        { text: "Native .NET 9 HybridCache", icon: Zap },
        { text: "AsNoTracking & LINQ Proj.", icon: FileCode },
        { text: "Large Dataset Tuning", icon: Activity }
      ]
    },
    {
      title: t('skills.arch.title'), icon: Layers, items: [
        { text: "Clean Arch. & DDD", icon: Layers },
        { text: "Microservices & SOLID", icon: Server },
        { text: "CQRS & MediatR (Slices)", icon: Activity },
        { text: "N-Layer Architecture", icon: FileCode }
      ]
    },
    {
      title: t('skills.ai.title'), icon: Cpu, items: [
        { text: "System Performance Tuning", icon: Activity },
        { text: "Enterprise AI Integration", icon: Cpu },
        { text: "Distributed System Design", icon: Globe },
      ]
    },
  ];

  useGSAP(() => {
    // Section title — reveal
    const titleEl = ref.current?.querySelector('.skills-title');
    if (titleEl) {
      gsap.fromTo(titleEl,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleEl,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.to(titleEl, {
        x: 30,
        ease: "none",
        scrollTrigger: {
          trigger: titleEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });
    }

    // Skill cards — batch stagger reveal
    ScrollTrigger.batch(".gsap-skill-card", {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 60,
          autoAlpha: 0,
          scale: 0.92,
          duration: 0.8,
          ease: "back.out(1.4)",
          stagger: { amount: 0.4, from: "random" },
          overwrite: true
        });
      },
      start: "top 88%",
      once: true
    });
  }, { scope: ref, dependencies: [t] });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2
          className="skills-title text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('skills.title').split(' ')[0]}{' '}
          <span className="text-[var(--color-accent)]">
            {t('skills.title').split(' ').slice(1).join(' ')}
          </span>
        </h2>
      </div>

      {/* Bento Grid: asymmetric 2fr 1fr / 1fr 2fr pattern */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Row 1: Large + Small */}
        <div className="lg:col-span-2 flex flex-col h-full">
          <SkillCard {...skills[0]} index={0} />
        </div>
        <div className="flex flex-col h-full">
          <SkillCard {...skills[1]} index={1} />
        </div>
        {/* Row 2: Small + Large */}
        <div className="flex flex-col h-full">
          <SkillCard {...skills[2]} index={2} />
        </div>
        <div className="lg:col-span-2 flex flex-col h-full">
          <SkillCard {...skills[3]} index={3} />
        </div>
        {/* Row 3: Large + Small */}
        <div className="lg:col-span-2 flex flex-col h-full">
          <SkillCard {...skills[4]} index={4} />
        </div>
        <div className="flex flex-col h-full">
          <SkillCard {...skills[5]} index={5} />
        </div>
      </div>
    </section>
  );
};

// ─── Experience — Sticky Scroll Stack + GSAP Reveal ───
const StickyExperienceCard = ({ year, title, role, teamSize, tasks, tech, index }: any) => {
  const topOffset = 80 + index * 40;

  return (
    <div
      className="sticky-card gsap-exp-card mb-8 last:mb-0"
      style={{ top: `${topOffset}px`, zIndex: 10 + index }}
    >
      <SpotlightCard className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 md:p-10 transition-all duration-500 hover:border-[var(--color-border-hover)] shadow-[var(--shadow-card)]">
        <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-6 gap-3">
          <div className="space-y-2">
            <h3
              className="text-xl md:text-2xl font-bold text-[var(--color-text)] tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
              <span className="text-[var(--color-text)]">{role}</span>
              {teamSize && (
                <>
                  <span className="text-[var(--color-border-hover)]">/</span>
                  <span>Team: {teamSize}</span>
                </>
              )}
            </div>
          </div>
          <span className="text-xs font-mono text-[var(--color-accent)] bg-[var(--color-accent-dim)] px-4 py-2 rounded-full border border-[var(--color-border)] inline-flex w-fit whitespace-nowrap flex-shrink-0 tracking-wider">
            {year}
          </span>
        </div>

        <ul className="space-y-3 mb-8">
          {tasks.map((task: string, i: number) => (
            <li key={i} className="text-sm text-[var(--color-text-muted)] flex items-start gap-3 leading-relaxed">
              <span className="text-[var(--color-accent)] mt-1 flex-shrink-0 text-[10px]">&#9656;</span>
              <span>{task}</span>
            </li>
          ))}
        </ul>

        <div className="exp-tech-tags flex flex-wrap gap-2 pt-6 border-t border-[var(--color-border)]">
          {tech.map((t: any, i: number) => {
            const TechIcon = t.icon;
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-muted)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 cursor-default"
              >
                <TechIcon size={12} strokeWidth={1.5} />
                {t.name}
              </span>
            );
          })}
        </div>
      </SpotlightCard>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const expData = t('projects.list', { returnObjects: true }) as any[];

  const experiences = expData.map(p => ({
    year: p.period,
    title: p.name,
    role: p.role,
    teamSize: p.team ? p.team.split(' ')[0] : undefined,
    tasks: p.desc,
    tech: p.tags.map((tag: string) => {
      let icon = Code2;
      if (tag.includes('.NET') || tag.includes('Server')) icon = Server;
      if (tag.includes('SQL') || tag.includes('Redis') || tag.includes('PostgreSQL')) icon = Database;
      if (tag.includes('SignalR')) icon = Zap;
      if (tag.includes('Angular') || tag.includes('React')) icon = Globe;
      if (tag.includes('Microservices') || tag.includes('IdentityServer')) icon = Layers;
      if (tag.includes('ElasticSearch')) icon = Search;
      if (tag.includes('JavaScript') || tag.includes('TypeScript') || tag.includes('C#')) icon = FileCode;
      return { name: tag, icon };
    })
  }));

  useGSAP(() => {
    // Section title reveal
    const titleEl = ref.current?.querySelector('.exp-title');
    if (titleEl) {
      gsap.fromTo(titleEl,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleEl,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.to(titleEl, {
        x: 30,
        ease: "none",
        scrollTrigger: {
          trigger: titleEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });
    }

    // Experience cards — scroll-triggered entrance
    const cards = gsap.utils.toArray<HTMLElement>(".gsap-exp-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        xPercent: -5,
        autoAlpha: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
          refreshPriority: i
        }
      });

      // Tech tags stagger
      const tags = card.querySelectorAll(".exp-tech-tags > span");
      if (tags.length) {
        gsap.from(tags, {
          scale: 0.7,
          autoAlpha: 0,
          duration: 0.4,
          ease: "back.out(1.5)",
          stagger: 0.04,
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        });
      }
    });
  }, { scope: ref, dependencies: [t] });

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-5xl mx-auto" ref={ref}>
      <div className="mb-16">
        <h2
          className="exp-title text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('projects.title').split(' ')[0]}{' '}
          <span className="text-[var(--color-accent)]">
            {t('projects.title').split(' ').slice(1).join(' ')}
          </span>
        </h2>
      </div>

      <div className="relative">
        {experiences.map((exp, i) => (
          <StickyExperienceCard key={i} {...exp} index={i} />
        ))}
      </div>
    </section>
  );
};

// ─── Personal Projects — 3D Card Flip Entrance ───
const TiltCard = memo(({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -8);
    rotateY.set(x * 8);
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 800 }}
      className={`transform-style-3d ${className}`}
    >
      {children}
    </motion.div>
  );
});

const ProjectCard = ({ name, desc, repo, tags, index, featured }: any) => {
  return (
    <div className={`gsap-project-card ${featured ? 'md:col-span-2' : ''}`}>
      <TiltCard className="h-full">
        <a
          href={`https://github.com/tramdk/${repo}`}
          target="_blank"
          rel="noreferrer"
          className="block h-full"
        >
          <SpotlightCard className="h-full rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-8 hover:border-[var(--color-border-hover)] transition-all duration-400 group">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-all duration-400">
                  <Github size={18} strokeWidth={1.5} />
                </div>
                <ExternalLink
                  size={16}
                  strokeWidth={1.5}
                  className="text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <h3
                className="text-lg font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {name}
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 flex-grow line-clamp-3 group-hover:text-[var(--color-text-muted)]">
                {desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-[var(--color-border)]">
                {tags && tags.slice(0, featured ? 6 : 4).map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium text-[var(--color-accent)] bg-[var(--color-accent-dim)] px-2.5 py-1 rounded-md border border-[var(--color-border)] transition-colors group-hover:border-[var(--color-accent)]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </a>
      </TiltCard>
    </div>
  );
};

const PersonalProjects = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const sideProjects = t('sideProjects.list', { returnObjects: true }) as any[];

  useGSAP(() => {
    // Title — reveal
    const titleEl = ref.current?.querySelector('.projects-title');
    if (titleEl) {
      gsap.fromTo(titleEl,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleEl,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.to(titleEl, {
        x: 30,
        ease: "none",
        scrollTrigger: {
          trigger: titleEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });
    }

    // Project cards — 3D flip entrance with batch
    ScrollTrigger.batch(".gsap-project-card", {
      onEnter: (elements) => {
        gsap.from(elements, {
          rotationY: 12,
          z: -80,
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.9,
          ease: "power3.out",
          stagger: { amount: 0.35, from: "edges" },
          overwrite: true
        });
      },
      start: "top 88%",
      once: true
    });

    // "View more" link
    gsap.from(".projects-more-link", {
      autoAlpha: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".projects-more-link",
        start: "top 92%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: ref, dependencies: [t] });

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" ref={ref}>
      <div className="mb-16">
        <h2
          className="projects-title text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('sideProjects.title').split(' ')[0]}{' '}
          <span className="text-[var(--color-accent)]">
            {t('sideProjects.title').split(' ').slice(1).join(' ')}
          </span>
        </h2>
      </div>

      {/* Bento Grid: featured projects span 2 cols */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" style={{ perspective: '1200px' }}>
        {sideProjects.map((p, i) => (
          <ProjectCard
            key={i}
            {...p}
            index={i}
            featured={i === 0 || i === 1}
          />
        ))}
      </div>

      <div className="projects-more-link mt-12 text-center">
        <a
          href="https://github.com/tramdk"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-medium link-underline pb-0.5"
        >
          View more on GitHub
          <ExternalLink size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};

// ─── Kinetic Marquee (Isolated perpetual animation) ───
const KineticMarquee = memo(({ text }: { text: string }) => {
  const content = `${text}\u00A0\u00A0\u00A0\u2022\u00A0\u00A0\u00A0`;
  const repeated = content.repeat(8);

  return (
    <div className="overflow-hidden py-6 border-y border-[var(--color-border)] opacity-40">
      <div className="marquee-track">
        <span
          className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-text-muted)] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {repeated}
        </span>
        <span
          className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-text-muted)] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
});

// ─── Contact Section — Dramatic GSAP Text Reveal ───
const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Title — reveal
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.to(titleRef.current, {
        x: 30,
        ease: "none",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });
    }

    // Description
    const descEl = ref.current?.querySelector(".contact-desc");
    if (descEl) {
      gsap.fromTo(descEl,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descEl,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Contact cards — elastic entrance
    const cards = ref.current?.querySelectorAll(".contact-card");
    const container = ref.current?.querySelector(".contact-cards-container");
    if (cards && cards.length > 0 && container) {
      gsap.fromTo(cards,
        { scale: 0.85, y: 40, autoAlpha: 0 },
        {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "elastic.out(1, 0.6)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Location
    const locEl = ref.current?.querySelector(".contact-location");
    if (locEl) {
      gsap.fromTo(locEl,
        { x: -20, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: locEl,
            start: "top 92%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Footer
    const footerEl = ref.current?.querySelector(".contact-footer");
    if (footerEl) {
      gsap.fromTo(footerEl,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: footerEl,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, { scope: ref, dependencies: [t] });

  return (
    <footer id="contact" className="relative mt-16 overflow-hidden" ref={ref}>
      <KineticMarquee text="Let's build something together" />

      <div className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2
                ref={titleRef}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[var(--color-text)]"
                style={{ fontFamily: 'var(--font-heading)', perspective: '600px' }}
              >
                {t('contact.title')}
              </h2>
              <p className="contact-desc text-lg text-[var(--color-text-muted)] max-w-[50ch] leading-relaxed">
                {t('contact.desc')}
              </p>
            </div>

            <div className="contact-cards-container flex flex-col md:flex-row gap-6">
              <a
                href="mailto:tramdk1997@gmail.com"
                className="contact-card group flex items-center gap-4 px-6 py-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-400 glass-panel"
                style={{ backgroundColor: 'var(--color-card)' }}
              >
                <div className="p-3 rounded-xl bg-[var(--color-accent-dim)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-all duration-400">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs text-[var(--color-text-subtle)] uppercase tracking-wider block mb-1">Email</span>
                  <span className="text-[var(--color-text)] font-medium">tramdk1997@gmail.com</span>
                </div>
                <ArrowUpRight size={16} strokeWidth={1.5} className="ml-auto text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="tel:+84968598259"
                className="contact-card group flex items-center gap-4 px-6 py-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-400 glass-panel"
                style={{ backgroundColor: 'var(--color-card)' }}
              >
                <div className="p-3 rounded-xl bg-[var(--color-accent-dim)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-all duration-400">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs text-[var(--color-text-subtle)] uppercase tracking-wider block mb-1">Phone</span>
                  <span className="text-[var(--color-text)] font-medium">+84 968 598 259</span>
                </div>
                <ArrowUpRight size={16} strokeWidth={1.5} className="ml-auto text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="contact-location flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
              <MapPin size={14} strokeWidth={1.5} className="text-[var(--color-accent)]" />
              <span>{t('about.contact.addressVal') || 'Ho Chi Minh City'}</span>
            </div>
          </div>

          <div className="contact-footer mt-24 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--color-text-subtle)]">
              {t('footer.copy')}
            </p>
            <p className="text-xs text-[var(--color-text-subtle)]">
              Crafted with React, GSAP & Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── Magnetic Cursor Effect (Desktop only) ───
const MagneticCursor = () => {
  const isMobile = useIsMobile();

  useGSAP(() => {
    if (isMobile) return;

    const buttons = document.querySelectorAll('.magnetic-btn');
    buttons.forEach(btn => {
      const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

      const handleMove = (e: Event) => {
        const me = e as MouseEvent;
        const rect = (btn as HTMLElement).getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (me.clientX - cx) * 0.25;
        const dy = (me.clientY - cy) * 0.25;
        xTo(dx);
        yTo(dy);
      };
      const handleLeave = () => {
        xTo(0);
        yTo(0);
      };

      btn.addEventListener('mousemove', handleMove);
      btn.addEventListener('mouseleave', handleLeave);
    });
  }, [isMobile]);

  return null;
};

// ─── App Root ───
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden">
      {/* Grain overlay — fixed, pointer-events-none */}
      <div className="grain-overlay" />

      {/* Background */}
      <MeshGradientBg />

      {/* Parallax background */}
      <ParallaxBackground />

      {/* Navigation */}
      <FloatingNav />
      <LanguageSwitcher />

      {/* Magnetic cursor effect */}
      <MagneticCursor />

      {/* Scroll progress — thin, elegant */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] origin-left z-50"
        style={{ scaleX, opacity: 0.7 }}
      />

      {/* Content */}
      <main className="overflow-x-hidden">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <PersonalProjects />
        <Contact />
      </main>
    </div>
  );
}
