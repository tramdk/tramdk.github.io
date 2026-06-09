import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from 'motion/react';
import {
  Terminal, Database, Server, Code2, Cpu,
  Layers, Mail, Phone, Github, MapPin, ExternalLink, Activity,
  Monitor, Sun, Moon, Palette,
  Zap, Globe, Container, Search, Layout, FileCode
} from 'lucide-react';

const themes = [
  { id: 'tech', label: 'Tech Space', icon: Monitor },
  { id: 'minimal', label: 'Minimalist', icon: Sun },
  { id: 'brutalist', label: 'Brutalist', icon: Palette },
  { id: 'glass', label: 'Glassmorphism', icon: Moon },
];

const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState('tech');

  useEffect(() => {
    document.body.className = activeTheme === 'tech' ? '' : `theme-${activeTheme}`;
  }, [activeTheme]);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-[var(--color-card)] glass-effect border border-[var(--color-border)] p-1.5 rounded-full shadow-[var(--shadow-custom)] brutal-border transition-colors duration-500">
      {themes.map((t) => {
        const Icon = t.icon;
        return (
          <button
            key={t.id}
            onClick={() => setActiveTheme(t.id)}
            title={t.label}
            className={`p-2 rounded-full transition-all duration-300 ${activeTheme === t.id
                ? 'bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[var(--shadow-accent)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:scale-110 focus:scale-95'
              }`}
          >
            <Icon size={16} />
          </button>
        )
      })}
    </div>
  )
}

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('en') ? 'vi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-[var(--color-card)] glass-effect border border-[var(--color-border)] p-1 rounded-full shadow-[var(--shadow-custom)] brutal-border transition-colors duration-500">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${i18n.language.startsWith('en')
            ? 'bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[var(--shadow-accent)]'
            : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
          }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('vi')}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${i18n.language.startsWith('vi')
            ? 'bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[var(--shadow-accent)]'
            : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
          }`}
      >
        VI
      </button>
    </div>
  );
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}


// --- Dynamic Background Effect ---
const DynamicBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const targetX = clientX - window.innerWidth / 2;
      const targetY = clientY - window.innerHeight / 2;
      mouseX.set(targetX);
      mouseY.set(targetY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          x: useSpring(mouseX, { stiffness: 50, damping: 20 }),
          y: useSpring(mouseY, { stiffness: 50, damping: 20 }),
        }}
      />
    </div>
  )
}

// --- Hero Section ---
const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]);
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 20]);

  return (
    <div ref={ref} className="min-h-[100dvh] py-12 flex items-center justify-center perspective-1000 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-dim)] via-[var(--color-bg)] to-[var(--color-bg)] -z-10 transition-colors duration-500" />
      <div
        className="absolute inset-0 -z-20 opacity-20 transition-opacity duration-500"
        style={{ backgroundImage: 'var(--bg-grid)', backgroundSize: '3rem 3rem' }}
      />

      <motion.div
        style={{ y, opacity, scale, rotateX }}
        className="text-center transform-style-3d relative z-10 px-4"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-dim)] border border-[var(--color-border)] text-[var(--color-accent)] text-sm font-medium transition-colors duration-500 brutal-border hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] cursor-default"
        >
          <Activity size={14} className="animate-pulse" /> {t('about.workStatus')}
        </motion.div>

        <motion.h1
          initial={{ z: -100, opacity: 0 }}
          animate={{ z: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-[10px] pb-[15px] text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(var(--color-accent-gradient))',
            fontFamily: 'var(--font-heading)'
          }}
        >
          {t('hero.name')}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-light text-[var(--color-text-muted)] max-w-2xl mx-auto transition-colors duration-500 mt-4 leading-relaxed"
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <a href="#contact" className="px-8 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold transition-all duration-300 hover:scale-105 shadow-[var(--shadow-accent)] relative z-20 brutal-border">{t('hero.contactMe')}</a>
          <a href="#projects" className="px-8 py-3 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-border)] text-[var(--color-text)] font-semibold transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] relative z-20 brutal-border">{t('hero.viewProjects')}</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute left-1/2 -bottom-32 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] group cursor-pointer"
          onClick={() => {
            const summary = document.getElementById('summary');
            summary?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs uppercase tracking-widest font-bold group-hover:text-[var(--color-accent)] transition-colors">{t('hero.scroll')}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent group-hover:from-[var(--color-accent)] transition-colors" />
        </motion.div>
      </motion.div>
    </div>
  );
};

// --- Summary Section ---
const Summary = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const rotateX = useTransform(smoothProgress, [0, 1], [40, 0]);
  const z = useTransform(smoothProgress, [0, 1], [-200, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section id="summary" ref={ref} className="py-32 px-6 md:px-12 max-w-5xl mx-auto perspective-1000 relative z-20">
      <motion.div
        style={{ rotateX, z, opacity }}
        whileHover={{ scale: 1.02 }}
        className="transform-style-3d p-8 md:p-12 rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] glass-effect hover:shadow-[var(--shadow-accent)] hover:border-[var(--color-accent)] brutal-border transition-all duration-500"
      >
        <h2 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-6 flex items-center gap-2 transition-colors duration-500">
          <Terminal size={16} /> {t('about.title')}
        </h2>
        <p className="text-xl md:text-3xl leading-relaxed text-[var(--color-text)] transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
          {t('about.bio').split('**').map((part, i) => i % 2 === 1 ? <span key={i} className="text-[var(--color-accent)] font-semibold">{part}</span> : part)}
        </p>
      </motion.div>
    </section>
  );
};

// --- Skills Section 3D ---
const SkillCard = ({ title, icon: Icon, items, index, progress }: any) => {
  const isMobile = useIsMobile();
  const isEven = index % 2 === 0;
  const rotateY = useTransform(progress, [0, 0.5, 1], isMobile ? [0, 0, 0] : [isEven ? -30 : 30, 0, 0]);
  const x = useTransform(progress, [0, 0.5, 1], isMobile ? [0, 0, 0] : [isEven ? -100 : 100, 0, 0]);
  const opacity = useTransform(progress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{ rotateY, x, opacity }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 transform-style-3d hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-accent)] transition-all duration-500 glass-effect group"
    >
      <div className="flex items-center gap-4 mb-6 relative">
        <div className="p-3 rounded-lg bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-all duration-500 z-10">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-text)] tracking-tight transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item: any, i: number) => {
          const ItemIcon = item.icon;
          return (
            <li key={i} className="group/item list-none">
              <div className="flex items-center gap-3 w-full bg-[var(--color-bg)] rounded-xl px-4 py-3 hover:bg-[var(--color-accent)] border border-[var(--color-border)] transition-all duration-300 shadow-[var(--shadow-custom)] hover:shadow-[var(--shadow-accent)] relative overflow-hidden">
                <ItemIcon size={18} className="text-[var(--color-accent)] group-hover/item:text-[var(--color-bg)] transition-colors duration-300 relative z-10" />
                <span className="text-[15px] text-[var(--color-text)] group-hover/item:text-[var(--color-bg)] font-medium tracking-wide relative z-10 transition-colors duration-300">{item.text}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20, restDelta: 0.001 });

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
        { text: "Scalable Architecture", icon: Layers }
      ]
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 max-w-7xl mx-auto perspective-1000 text-center relative z-10">
      <motion.h2
        style={{
          scale: useTransform(smoothProgress, [0, 0.5], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0, 0.5], [0, 1]),
          fontFamily: 'var(--font-heading)'
        }}
        className="text-4xl md:text-5xl font-bold mb-16 text-[var(--color-text)] transition-colors duration-500"
      >
        {t('skills.title').split(' ')[0]} <span className="text-[var(--color-accent)]">{t('skills.title').split(' ').slice(1).join(' ')}</span>
      </motion.h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left perspective-1000 transform-style-3d">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} index={i} progress={smoothProgress} />
        ))}
      </div>
    </section>
  );
};

// --- Experience & Projects ---
const ExperienceItem = ({ year, title, role, teamSize, tasks, tech, progress, index }: any) => {
  const isMobile = useIsMobile();
  const y = useTransform(progress, [0, 0.6, 1], isMobile ? [20, 0, 0] : [100, 0, 0]);
  const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.9, 1, 1]);

  return (
    <motion.div style={{ y, opacity, scale }} className="relative pl-8 md:pl-0 transform-style-3d group/timeline">
      <div className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-px bg-[var(--color-border)] group-hover/timeline:bg-[var(--color-accent)] group-hover/timeline:shadow-[0_0_10px_var(--color-accent)] transition-all duration-500" />

      <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="hidden md:block w-5/12" />

        <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-bg)] box-content -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[var(--shadow-accent)] z-10 transition-all duration-500 group-hover/timeline:scale-150 group-hover/timeline:bg-[var(--color-text)]" />

        <div className="md:w-5/12 mb-12">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-[var(--color-card)] p-6 md:p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-accent)] transition-all duration-500 glass-effect brutal-border group/card relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-dim)] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-2 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] transition-colors duration-500 group-hover/card:text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h3>
              <span className="text-sm font-mono text-[var(--color-accent)] bg-[var(--color-accent-dim)] px-3 py-1 rounded-full border border-[var(--color-border)] inline-flex w-fit whitespace-nowrap flex-shrink-0 transition-colors duration-500 shadow-sm">{year}</span>
            </div>
            <div className="text-[var(--color-text-muted)] font-medium mb-5 flex divide-x divide-[var(--color-border)] transition-colors duration-500 relative z-10">
              <span className="pr-3 text-[var(--color-text)] transition-colors duration-500">{role}</span>
              {teamSize && <span className="pl-3">Team: {teamSize}</span>}
            </div>
            <ul className="space-y-3 mb-6 relative z-10">
              {tasks.map((task: string, i: number) => (
                <li key={i} className="text-[var(--color-text-muted)] text-sm flex items-start gap-3 transition-colors duration-500">
                  <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0 leading-none group-hover/card:scale-125 transition-transform duration-300">▹</span>
                  <span className="leading-relaxed group-hover/card:text-[var(--color-text)] transition-colors duration-300">{task}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 relative z-10">
              {tech.map((t: any, i: number) => {
                const TechIcon = t.icon;
                return (
                  <span key={i} className="flex items-center gap-1.5 text-xs font-medium bg-[var(--color-bg)]/80 backdrop-blur-sm text-[var(--color-text)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1 hover:shadow-[0_4px_10px_var(--color-accent-dim)] transition-all duration-300 cursor-default">
                    <TechIcon size={14} />
                    {t.name}
                  </span>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20, restDelta: 0.001 });

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

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)] transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
          {t('projects.title').split(' ')[0]} <span className="text-[var(--color-accent)]">{t('projects.title').split(' ').slice(1).join(' ')}</span>
        </h2>
        <div className="w-24 h-1.5 bg-[var(--color-accent)] mx-auto rounded-full shadow-[var(--shadow-accent)]" />
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 md:hidden top-0 bottom-0 w-px bg-[var(--color-border)] ml-[7px] transition-colors duration-500" />
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} index={i} progress={smoothProgress} />
        ))}
      </div>
    </section>
  );
};

// --- Personal Projects ---
const ProjectCard = ({ name, desc, repo, tags, index }: any) => {
  return (
    <motion.a
      href={`https://github.com/tramdk/${repo}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-[var(--color-card)] border border-[var(--color-border)] p-6 rounded-2xl hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 glass-effect flex flex-col justify-between group block brutal-border h-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-colors duration-300">
            <Github size={20} />
          </div>
          <ExternalLink size={20} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{name}</h3>
        <p className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors leading-relaxed mb-6 flex-grow">{desc}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--color-border)]">
          {tags && tags.slice(0, 4).map((tag: string, i: number) => (
            <span key={i} className="text-[11px] font-medium bg-[var(--color-accent-dim)] text-[var(--color-accent)] px-2.5 py-1 rounded-md border border-[var(--color-border)] transition-colors group-hover:border-[var(--color-accent)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

const PersonalProjects = () => {
  const { t } = useTranslation();
  const sideProjects = t('sideProjects.list', { returnObjects: true }) as any[];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)] transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
          {t('sideProjects.title').split(' ')[0]} <span className="text-[var(--color-accent)]">{t('sideProjects.title').split(' ').slice(1).join(' ')}</span>
        </h2>
        <div className="w-24 h-1.5 bg-[var(--color-accent)] mx-auto rounded-full shadow-[var(--shadow-accent)]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sideProjects.map((p, i) => (
          <ProjectCard key={i} {...p} index={i} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="https://github.com/tramdk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-medium">
          View more on GitHub <ExternalLink size={16} />
        </a>
      </div>
    </section>
  )
}

// --- Footer & Contact ---
const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="relative mt-24 overflow-hidden py-32 px-6 border-t border-[var(--color-border)] bg-[var(--color-bg)] transition-colors duration-500">
      <div
        className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: 'var(--bg-grid)',
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(2.5)',
          transformOrigin: 'bottom center',
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent shadow-[var(--shadow-accent)] transition-all duration-500" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-[var(--color-text)] transition-colors duration-500"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('contact.title')}
        </motion.h2>

        <p className="text-[var(--color-text-muted)] text-lg mb-12">{t('contact.desc')}</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <a href="mailto:tramdk1997@gmail.com" className="flex items-center gap-3 bg-[var(--color-card)] px-8 py-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-dim)] hover:-translate-y-2 transition-all duration-500 font-medium glass-effect w-full md:w-auto justify-center group brutal-border shadow-[var(--shadow-custom)] hover:shadow-[var(--shadow-accent)] text-[var(--color-text)]">
            <Mail className="text-[var(--color-accent)] group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" size={22} />
            tramdk1997@gmail.com
          </a>
          <a href="tel:+84968598259" className="flex items-center gap-3 bg-[var(--color-card)] px-8 py-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-dim)] hover:-translate-y-2 transition-all duration-500 font-medium glass-effect w-full md:w-auto justify-center group brutal-border shadow-[var(--shadow-custom)] hover:shadow-[var(--shadow-accent)] text-[var(--color-text)]">
            <Phone className="text-[var(--color-accent)] group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300" size={22} />
            +84 968 598 259
          </a>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-[var(--color-text-muted)] font-medium transition-colors duration-500 mb-8">
          <div className="flex items-center gap-2 hover:text-[var(--color-text)] transition-colors">
            <MapPin size={18} className="text-[var(--color-accent)]" /> {t('about.contact.addressVal') || 'Ho Chi Minh City'}
          </div>

        </div>
        <p className="border-t border-[var(--color-border)] pt-8 mt-8 text-sm text-[var(--color-text-muted)]">{t('footer.copy')} Built with React & Vite.</p>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-[var(--color-accent-dim)] selection:text-[var(--color-accent)] font-sans relative overflow-x-hidden">
      <DynamicBackground />
      <ThemeSwitcher />
      <LanguageSwitcher />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[var(--color-accent)] origin-left z-50 shadow-[var(--shadow-accent)] transition-colors duration-500"
        style={{ scaleX }}
      />
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

