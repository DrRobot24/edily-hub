import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight, CheckCircle2, Navigation, Activity, CalendarDays, MousePointer2 } from 'lucide-react';
import logoGhost from './assets/logo_ghost.png';

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTI UI CORE ---

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'bg-surface/80 backdrop-blur-xl border-white/10 text-white', targets: navRef.current },
        onEnter: () => gsap.to(navRef.current, { backgroundColor: 'rgba(17, 17, 17, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }),
        onLeaveBack: () => gsap.to(navRef.current, { backgroundColor: 'transparent', border: '1px solid transparent' })
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav className="fixed top-8 right-8 md:top-10 md:right-12 z-50 rounded-[2rem] border border-transparent transition-colors duration-500" ref={navRef}>
        <div className="px-6 py-3 flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 font-mono text-sm uppercase tracking-widest text-textMuted">
            <a href="#features" className="hover:text-accent transition-colors link-lift">Soluzioni</a>
            <a href="#protocol" className="hover:text-accent transition-colors link-lift">Metodo</a>
            <a href="#contact" className="hover:text-accent transition-colors link-lift">Contatti</a>
          </div>
          <a href="#contact" className="btn-magnetic px-6 py-3 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest hidden md:block">
            Inizia Progetto
          </a>
        </div>
      </nav>
    </>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden">
      {/* Immagine Background Scuro Architettonico / Luxury / Forest */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2574&auto=format&fit=crop"
          alt="Dark Forest"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-primary/20"></div> {/* Oscura ulteriormente */}
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-start gap-6 hero-content">
        <div className="hero-element mb-12 lg:mb-16 -mt-12 lg:-mt-24 drop-shadow-2xl">
          <img src={logoGhost} alt="Edily Logo" className="w-48 md:w-[22rem] h-auto object-contain" />
        </div>

        <div className="hero-element inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="font-mono text-xs text-textMuted tracking-wider uppercase">Architettura Pura</span>
        </div>

        <h1 className="flex flex-col gap-2 relative">
          <span className="hero-element font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none">
            La precisione incontra
          </span>
          <span className="hero-element font-drama italic text-6xl md:text-8xl lg:text-9xl text-accent leading-none pr-4 drop-shadow-[0_0_15px_rgba(255,200,0,0.3)]">
            l'eccellenza.
          </span>
        </h1>

        <p className="hero-element font-sans text-lg md:text-xl text-textMuted max-w-xl mt-4 font-light leading-relaxed">
          Edily — costruzioni d'alta gamma. Non costruiamo cose soltanto, ma troviamo <strong className="text-white font-medium">soluzioni</strong> per le tue sfide immobiliari.
        </p>

        <div className="hero-element mt-4 mb-2">
          <span className="font-mono text-xs text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            Your Building Solutions!
          </span>
        </div>

        <div className="hero-element mt-4 flex gap-4">
          <a href="#contact" className="btn-magnetic px-8 py-4 rounded-full bg-accent text-primary font-bold text-base flex items-center gap-3">
            Richiedi Preventivo <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- MICRO UI FEATURES ---

const DiagnosticShuffler = () => {
  const [items, setItems] = useState([
    "Cemento Armato High-Tech",
    "Finiture di Lusso Italiane",
    "Isolamento Termico Avanzato",
    "Domotica Integrata"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 mt-6 relative flex flex-col items-center justify-center perspective-1000">
      {items.map((item, i) => (
        <div
          key={item}
          className="absolute w-full p-4 rounded-xl border border-white/10 bg-surface/80 backdrop-blur-md flex items-center gap-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-2xl"
          style={{
            transform: `translateY(${i * 20 - 40}px) scale(${1 - i * 0.05})`,
            opacity: 1 - i * 0.25,
            zIndex: 10 - i,
          }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-white/5">
            <Activity size={18} className="text-accent" />
          </div>
          <span className="font-mono text-sm font-medium">{item}</span>
        </div>
      ))}
    </div>
  );
};

const TelemetryTypewriter = () => {
  const fullText = "Inizializzazione cantiere...\nCalcolo strutturale approvato.\nLogistica materiali: OK.\nConsegna stimata: 100% nei tempi.";
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 50);

    const blink = setInterval(() => setCursor(c => !c), 500);
    return () => { clearInterval(typing); clearInterval(blink); };
  }, []);

  return (
    <div className="h-64 mt-6 bg-primary border border-white/10 rounded-xl p-6 relative overflow-hidden flex flex-col font-mono">
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs text-textMuted uppercase tracking-widest">Live Feed Manager</span>
      </div>
      <div className="text-sm text-green-400 whitespace-pre-line leading-relaxed flex-1">
        {text}
        <span className={`inline-block w-2.5 h-4 bg-accent ml-1 translate-y-1 ${cursor ? 'opacity-100' : 'opacity-0'}`}></span>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      // Reset
      tl.set('.cursor-svg', { x: 0, y: 0, scale: 1 });
      tl.set('.day-cell', { backgroundColor: 'transparent' });
      tl.set('.btn-save', { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)' });

      // Move to Thursday (index 3)
      tl.to('.cursor-svg', { x: 140, y: 50, duration: 1, ease: 'power2.inOut' })
        // Click
        .to('.cursor-svg', { scale: 0.8, duration: 0.1 })
        .to('.day-cell-3', { backgroundColor: '#FFC800', color: '#000', duration: 0.1 }, '<')
        .to('.cursor-svg', { scale: 1, duration: 0.1 })
        // Move to save
        .to('.cursor-svg', { x: 60, y: 150, duration: 0.8, ease: 'power2.inOut', delay: 0.2 })
        // Click save
        .to('.cursor-svg', { scale: 0.8, duration: 0.1 })
        .to('.btn-save', { scale: 0.95, backgroundColor: '#FFC800', color: '#000', duration: 0.1 }, '<')
        .to('.cursor-svg', { scale: 1, duration: 0.1, delay: 0.1 })
        .to('.btn-save', { scale: 1, duration: 0.1 }, '<')
        // Disappear
        .to('.cursor-svg', { opacity: 0, duration: 0.3, delay: 0.5 })
        .to('.cursor-svg', { opacity: 1, x: 0, y: 0, duration: 0 }, '+=0.1');

    }, svgRef);
    return () => ctx.revert();
  }, []);

  const days = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];

  return (
    <div className="h-64 mt-6 bg-surface border border-white/5 rounded-xl p-6 relative overflow-hidden" ref={svgRef}>
      <div className="grid grid-cols-7 gap-2 mb-12 relative z-10">
        {days.map((d, i) => (
          <div key={i} className={`day-cell day-cell-${i} aspect-square flex items-center justify-center rounded-lg border border-white/10 font-mono text-xs text-textMuted font-bold`}>
            {d}
          </div>
        ))}
      </div>

      <div className="flex justify-center relative z-10 mt-8">
        <button className="btn-save px-6 py-2 rounded-lg bg-white/5 text-textMuted font-mono text-xs uppercase tracking-widest border border-white/10 flex items-center gap-2">
          <CheckCircle2 size={14} /> Approva Progetto
        </button>
      </div>

      <div className="absolute top-12 left-6 z-20 cursor-svg opacity-100 pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4L11.92 20.91L14.62 14.62L20.91 11.92L4 4Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-4">Ingegneria Funzionale.</h2>
        <p className="font-mono text-textMuted max-w-2xl text-sm leading-relaxed">I nostri vantaggi competitivi trasformati in protocolli rigorosi.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-surfaceHover/30 rounded-[2rem] p-8 border border-white/5 shadow-xl hover:border-white/10 transition-colors">
          <h3 className="font-sans font-bold text-xl mb-2 text-white">Materiali d'avanguardia</h3>
          <p className="text-textMuted text-sm">Selezioniamo solo materie prime certificate e tecnologicamente avanzate per garantire durabilità estrema.</p>
          <DiagnosticShuffler />
        </div>

        {/* Card 2 */}
        <div className="bg-surfaceHover/30 rounded-[2rem] p-8 border border-white/5 shadow-xl hover:border-white/10 transition-colors">
          <h3 className="font-sans font-bold text-xl mb-2 text-white">Consegna Chiavi In Mano</h3>
          <p className="text-textMuted text-sm">Logistica calcolata al millimetro. Non sforiamo i tempi. Avrai aggiornamenti live sulle tempistiche.</p>
          <TelemetryTypewriter />
        </div>

        {/* Card 3 */}
        <div className="bg-surfaceHover/30 rounded-[2rem] p-8 border border-white/5 shadow-xl hover:border-white/10 transition-colors">
          <h3 className="font-sans font-bold text-xl mb-2 text-white">Team Interno</h3>
          <p className="text-textMuted text-sm">Architetti, ingegneri e posatori diretti. Un'unica squadra coordinata per abbattere i colli di bottiglia.</p>
          <SchedulerCard />
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const philRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Semplice fade in up staggered
      gsap.fromTo('.phil-word',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: philRef.current,
            start: 'top 70%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out'
        }
      );
    }, philRef);
    return () => ctx.revert();
  }, []);

  const firstSentence = "La maggior parte dell'edilizia si concentra su: tirare su muri al minor costo possibile.".split(" ");
  const secondSentence = "Noi ci concentriamo su:".split(" ");

  return (
    <section ref={philRef} className="relative py-40 overflow-hidden bg-primary border-y border-white/5">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2000&auto=format&fit=crop"
          alt="Texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 text-center flex flex-col items-center">
        <p className="font-mono text-textMuted text-sm uppercase tracking-widest mb-12 flex items-center gap-3">
          <span className="w-12 h-px bg-white/20"></span>
          Manifesto Strategico
          <span className="w-12 h-px bg-white/20"></span>
        </p>

        <h3 className="font-sans text-xl md:text-3xl text-textMuted font-medium leading-relaxed max-w-3xl mb-8 flex flex-wrap justify-center gap-x-2">
          {firstSentence.map((word, i) => <span key={'w1' + i} className="phil-word block">{word}</span>)}
        </h3>

        <div className="font-sans text-4xl md:text-6xl text-white font-bold leading-tight flex flex-wrap justify-center gap-x-3 items-end">
          {secondSentence.map((word, i) => <span key={'w2' + i} className="phil-word block pb-2">{word}</span>)}
          <span className="phil-word font-drama text-6xl md:text-8xl italic font-normal text-accent pt-4 block">trovare soluzioni.</span>
        </div>
      </div>
    </section>
  );
};

const ProtocolSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.prot-card');

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // L'ultima non si scala sotto un'altra

        ScrollTrigger.create({
          trigger: card,
          start: "top 120px",
          endTrigger: ".protocol-wrap",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        gsap.fromTo(card,
          { scale: 1, opacity: 1, filter: "blur(0px)" },
          {
            scale: 0.9,
            opacity: 0.2,
            filter: "blur(12px)",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" className="py-24 protocol-wrap" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6 relative h-[300vh] md:h-[350vh]">
        <div className="sticky top-10 text-center mb-24 z-50 mix-blend-difference pointer-events-none">
          <h2 className="font-mono text-sm uppercase tracking-widest text-textMuted bg-primary/50 backdrop-blur-md inline-block px-4 py-2 rounded-full border border-white/10">Archive: Il Metodo Edily</h2>
        </div>

        {/* Card 1 */}
        <div className="prot-card absolute top-32 left-0 w-full md:h-[70vh] rounded-[3rem] bg-surface border border-white/10 p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl">
          <div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono text-accent text-lg">01.</div>
          <svg className="w-24 h-24 md:w-32 md:h-32 mb-8 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="40" strokeWidth="1" stroke="rgba(255,255,255,0.1)" />
            <circle cx="50" cy="50" r="20" strokeWidth="1" stroke="#FFC800" strokeDasharray="4 4" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </svg>
          <h3 className="font-sans text-4xl font-bold mb-4">Analisi & Architettura</h3>
          <p className="text-textMuted max-w-lg font-mono text-sm leading-relaxed">
            Non partiamo dalle fondamenta, ma dai dati. Analizziamo terreno, norme e vincoli per progettare un'architettura insuperabile.
          </p>
        </div>

        {/* Card 2 */}
        <div className="prot-card absolute top-32 left-0 w-full md:h-[70vh] rounded-[3rem] bg-surfaceHover border border-white/10 p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl mt-[80vh] md:mt-[100vh]">
          <div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono text-accent text-lg">02.</div>
          <div className="w-48 h-24 mb-8 border border-white/10 rounded-lg overflow-hidden relative bg-primary">
            <div className="absolute inset-0 bg-accent/20 border-b-2 border-accent animate-[translateY_2s_linear_infinite]" style={{ height: '2px', top: '0', animation: 'scan 3s ease-in-out infinite alternate' }}>
              <style>{`@keyframes scan { 0% { transform: translateY(0); } 100% { transform: translateY(96px); } }`}</style>
            </div>
            <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
          </div>
          <h3 className="font-sans text-4xl font-bold mb-4">Esecuzione Ingegneristica</h3>
          <p className="text-textMuted max-w-lg font-mono text-sm leading-relaxed">
            Fase di build. Cantieri puliti, logistica rigorosa e materiali ad alta tolleranza per creare involucri perfetti.
          </p>
        </div>

        {/* Card 3 */}
        <div className="prot-card absolute top-32 left-0 w-full md:h-[70vh] rounded-[3rem] bg-[#111] border border-accent/20 p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl mt-[160vh] md:mt-[200vh]">
          <div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono text-accent text-lg">03.</div>
          <svg className="w-48 h-24 mb-8" viewBox="0 0 200 100" fill="none">
            <path d="M0,50 L40,50 L50,20 L60,80 L70,50 L200,50" stroke="#FFC800" strokeWidth="2" strokeLinejoin="round" fill="none">
              <animate attributeName="stroke-dasharray" values="0, 300; 300, 0" duration="2s" repeatCount="indefinite" />
            </path>
          </svg>
          <h3 className="font-sans text-4xl font-bold mb-4 text-accent">Consegna Chiavi in Mano</h3>
          <p className="text-white/70 max-w-lg font-mono text-sm leading-relaxed">
            Sistema operativo. Superati i test di collaudo, ti consegniamo lo spazio, pronto da vivere e certificato.
          </p>
        </div>

      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto w-full relative z-10">
      <div className="bg-surface rounded-[3rem] p-10 md:p-16 border border-white/5 flex flex-col md:flex-row gap-16 items-center shadow-2xl relative overflow-hidden">
        {/* Decorazione */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex-1">
          <h2 className="font-drama italic text-5xl text-white mb-6">Avviamo il Protocollo.</h2>
          <p className="font-mono text-sm text-textMuted mb-8 max-w-md leading-relaxed">
            Nessun funnel infinito. Scrivici cosa devi costruire e ti risponderemo con soluzioni fattibili, tempistiche chiare e un preventivo accurato.
          </p>
          <div className="flex items-center gap-4 font-sans text-sm text-white">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-primary">
              <Activity size={16} className="text-accent" />
            </div>
            <div>
              <p className="font-bold">Tempo di risposta garantito</p>
              <p className="text-textMuted">Entro 24 ore lavorative</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full bg-primary p-8 rounded-[2rem] border border-white/5 relative z-10">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase text-textMuted">Nome e Cognome</label>
              <input type="text" className="bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-accent transition-colors font-sans" placeholder="Mario Rossi" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase text-textMuted">Email</label>
              <input type="email" className="bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-accent transition-colors font-sans" placeholder="mario@azienda.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase text-textMuted">Il tuo progetto</label>
              <textarea rows={3} className="bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-accent transition-colors font-sans resize-none" placeholder="Quali soluzioni cerchi?"></textarea>
            </div>
            <button className="btn-magnetic mt-4 w-full py-4 rounded-xl bg-accent text-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
              Invia Messaggio Centrale <Navigation size={16} className="rotate-45" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-8 px-6 md:px-16 border-t border-white/5 rounded-t-[4rem] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-sm">
          <div className="font-sans font-bold text-3xl tracking-tight flex items-center gap-3 mb-6">
            <img src={logoGhost} alt="Edily Logo" className="w-12 h-12 object-contain rounded-md" />
            EDILY
          </div>
          <p className="text-textMuted text-sm font-sans mb-8">Non costruiamo cose soltanto, ma troviamo soluzioni. Architettura d'avanguardia per chi pretende l'eccellenza.</p>

          <div className="inline-flex items-center gap-3 bg-surface border border-white/10 py-2 px-4 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <span className="font-mono text-xs text-textMuted uppercase tracking-widest">System Operational</span>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-4 font-sans text-sm">
            <h4 className="font-mono text-xs text-textMuted uppercase tracking-widest mb-2">Navigazione</h4>
            <a href="#features" className="text-textMain hover:text-accent transition-colors">Soluzioni</a>
            <a href="#protocol" className="text-textMain hover:text-accent transition-colors">Metodo</a>
            <a href="#contact" className="text-textMain hover:text-accent transition-colors">Contatti</a>
          </div>
          <div className="flex flex-col gap-4 font-sans text-sm">
            <h4 className="font-mono text-xs text-textMuted uppercase tracking-widest mb-2">Legale</h4>
            <a href="#" className="text-textMuted hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-textMuted hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-textMuted hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex justify-between items-center text-xs text-textMuted font-mono">
        <p>&copy; {new Date().getFullYear()} Edily S.r.l. Tutti i diritti riservati.</p>
        <p>Crafted with Precision.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <ProtocolSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
