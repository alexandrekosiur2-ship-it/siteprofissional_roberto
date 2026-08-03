import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ShieldCheck, Building2, Factory, FileCheck, ArrowUpRight, Ruler } from 'lucide-react';

const Services = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const fadeTimeoutRef = useRef(null);

  // Estado do cursor do mouse em formato CAD para a seção de Serviços
  const [sectionCursorPos, setSectionCursorPos] = useState({ x: 0, y: 0 });
  const [isSectionHovered, setIsSectionHovered] = useState(false);

  // Estado para ciclo sequencial do raio/laser de card em card (100% contido na seção visual, sem mover tela)
  const [activeCycleIndex, setActiveCycleIndex] = useState(0);

  useEffect(() => {
    if (activeCard) return;

    const interval = setInterval(() => {
      setActiveCycleIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2800);

    return () => clearInterval(interval);
  }, [activeCard]);

  const handleSectionMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSectionCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSectionTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      setSectionCursorPos({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      });
    }
  };

  const triggerMeasurement = (x, y, width, cardId) => {
    setCursorPos({ x, y });
    setCardWidth(width);
    setActiveCard(cardId);
    setIsMeasuring(true);

    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }

    // A trena faz o rastro durante o movimento e depois de 1.2 segundos sem movimento, ela SOME suavemente!
    fadeTimeoutRef.current = setTimeout(() => {
      setIsMeasuring(false);
    }, 1200);
  };

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    triggerMeasurement(relativeX, relativeY, rect.width, cardId);
  };

  const handleTouchMove = (e, cardId) => {
    if (e.touches && e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      const relativeX = e.touches[0].clientX - rect.left;
      const relativeY = e.touches[0].clientY - rect.top;
      triggerMeasurement(relativeX, relativeY, rect.width, cardId);
    }
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
    setIsMeasuring(false);
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  const specialties = [
    {
      id: "residential",
      code: "CAD // 01",
      title: "Empreendimentos Residenciais",
      subtitle: "Gestão Predial de Médio & Grande Porte",
      description: "Gerenciamento completo de obras residenciais de alto padrão (ex: Parque do Sol, Link Ipiranga, Bem Viver). Controle de produção, compatibilização de projetos, gestão de suprimentos e entrega rigorosa no prazo.",
      icon: Home,
      colSpan: "md:col-span-2",
      badge: "Foco Principal",
      footerTag: "Do Alicerce ao Acabamento Final"
    },
    {
      id: "building-mgmt",
      code: "CAD // 02",
      title: "Gestão & Compatibilização",
      subtitle: "Controle Físico-Financeiro",
      description: "Planejamento executivo de obra, mediação com clientes e fornecedores, e acompanhamento detalhado de custos e cronograma.",
      icon: ShieldCheck,
      colSpan: "md:col-span-1",
      badge: "Gestão Executiva",
      footerTag: "Controle Físico-Financeiro"
    },
    {
      id: "oae",
      code: "CAD // 03",
      title: "Pontes e Viadutos (OAE)",
      subtitle: "Infraestrutura Rodoviária",
      description: "Experiência acumulada em obras de arte especiais com rigor estrutural e alta capacidade de carga (Ex: Grupo CCR).",
      icon: Building2,
      colSpan: "md:col-span-1",
      badge: "Infraestrutura",
      footerTag: "Rigor Estrutural OAE"
    },
    {
      id: "refineries",
      code: "CAD // 04",
      title: "Obras Industriais",
      subtitle: "Ambientes de Criticidade",
      description: "Experiência em gerenciamento sob padrões Petrobrás e elevadas exigências de segurança do trabalho (SMS).",
      icon: Factory,
      colSpan: "md:col-span-1",
      badge: "Engenharia Industrial",
      footerTag: "Padrões Petrobrás SMS"
    },
    {
      id: "abemi",
      code: "CAD // 05",
      title: "Procedimentos Executivos",
      subtitle: "Comitê ABEMI",
      description: "Desenvolvimento de metodologias padronizadas para otimização construtiva, eficiência e qualidade na engenharia.",
      icon: FileCheck,
      colSpan: "md:col-span-1",
      badge: "Padronização",
      footerTag: "Normas Técnico-Executivas"
    }
  ];

  return (
    <section
      id="servicos"
      onMouseMove={handleSectionMouseMove}
      onTouchStart={(e) => { setIsSectionHovered(true); handleSectionTouchMove(e); }}
      onTouchMove={handleSectionTouchMove}
      onTouchEnd={() => setIsSectionHovered(false)}
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
      className="py-section bg-bg-alt relative overflow-hidden transition-colors duration-400"
    >
      {/* Grade de Blueprint / Planta Baixa de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

      {/* Glow de luz ambiente */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* PONTEIRO DO MOUSE ESTILO AUTOCAD (CROSSHAIR X/Y + PICKBOX + COORDENADAS) */}
      <AnimatePresence>
        {isSectionHovered && !activeCard && (
          <>
            {/* Linha do Eixo X (Horizontal - Vermelho CAD) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ top: `${sectionCursorPos.y}px` }}
              className="absolute inset-x-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-red-500/80 to-transparent pointer-events-none"
            />

            {/* Linha do Eixo Y (Vertical - Verde CAD) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ left: `${sectionCursorPos.x}px` }}
              className="absolute inset-y-0 z-20 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/80 to-transparent pointer-events-none"
            />

            {/* Pickbox CAD (Quadrado no centro do cursor) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{ left: `${sectionCursorPos.x}px`, top: `${sectionCursorPos.y}px` }}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-white bg-slate-900/60 shadow-[0_0_8px_rgba(255,255,255,0.7)] pointer-events-none"
            />

            {/* Tag de Coordenadas CAD em tempo real ao lado do cursor */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ left: `${sectionCursorPos.x + 12}px`, top: `${sectionCursorPos.y + 12}px` }}
              className="absolute z-30 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/90 text-white font-mono text-[10px] shadow-lg border border-slate-700/80 pointer-events-none backdrop-blur-md"
            >
              <span className="text-red-400 font-bold">X: {Math.round(sectionCursorPos.x)}</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400 font-bold">Y: {Math.round(sectionCursorPos.y)}</span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Ícone Puro de Eixos X e Y do CAD (Alinhado à Interseção da Grade) */}
      <div className="absolute bottom-[32px] left-[32px] z-20 pointer-events-none hidden sm:block font-mono">
        <div className="relative w-12 h-12">
          {/* Ponto de Origem na Interseção da Grade */}
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.9)]" />

          {/* Eixo X (Linha Vermelha para Direita) */}
          <div className="absolute bottom-0 left-0 w-8 h-[1.5px] bg-red-500" />
          <span className="absolute bottom-[-4px] left-[36px] text-[11px] font-black text-red-500 leading-none">X</span>

          {/* Eixo Y (Linha Verde para Cima) */}
          <div className="absolute bottom-0 left-0 w-[1.5px] h-8 bg-emerald-400" />
          <span className="absolute top-[-12px] left-[-3px] text-[11px] font-black text-emerald-400 leading-none">Y</span>
        </div>
      </div>

      <div className="container-main relative z-10">

        {/* Cabeçalho de Seção com Estilo de Engenharia */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase font-display">
              Especialidades & Engenharia Aplicada
            </span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            Soluções Construtivas de <span className="text-gradient">Alta Precisão</span>
          </h2>
          <p className="text-text-secondary text-base">
            Gestão executiva completa integrada ao planejamento rigoroso, compatibilização de plantas e inteligência de engenharia.
          </p>
        </div>

        {/* Bento Grid - Estilo Blueprint Técnico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => {
            const IconComponent = item.icon;
            const currentMeters = ((cursorPos.x / (cardWidth || 1)) * 45 + 5).toFixed(1);
            const isCurrentActive = activeCard ? activeCard === item.id : activeCycleIndex === index;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                onTouchStart={(e) => handleTouchMove(e, item.id)}
                onTouchMove={(e) => handleTouchMove(e, item.id)}
                onTouchEnd={handleMouseLeave}
                onMouseLeave={handleMouseLeave}
                className={`group relative bg-surface rounded-2xl p-8 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm cursor-pointer border ${
                  isCurrentActive
                    ? 'border-accent shadow-[0_0_25px_var(--color-accent-glow)] ring-1 ring-accent/60 -translate-y-1'
                    : 'border-border hover:border-accent/40'
                } ${item.colSpan}`}
              >
                {/* Moldura de Raio / Feixe de Laser de Nivelamento Contido no Card */}
                {isCurrentActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 rounded-2xl border-2 border-accent pointer-events-none z-10 shadow-[inset_0_0_15px_var(--color-accent-glow)]"
                  >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
                  </motion.div>
                )}
                {/* Marcadores CAD */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-text-muted group-hover:text-accent transition-colors pointer-events-none">
                  + ───
                </div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-text-muted group-hover:text-accent transition-colors pointer-events-none">
                  ─── +
                </div>
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-text-muted group-hover:text-accent transition-colors pointer-events-none">
                  + ───
                </div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-text-muted group-hover:text-accent transition-colors pointer-events-none">
                  ─── +
                </div>

                {/* Efeito Rastro da Trena CAD (Com Auto-Fade Out) */}
                <AnimatePresence>
                  {activeCard === item.id && isMeasuring && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0.8 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        style={{
                          top: `${cursorPos.y}px`,
                          width: `${cursorPos.x}px`,
                          transformOrigin: 'left center'
                        }}
                        className="absolute left-0 z-20 h-4 bg-accent/15 border-y border-accent/60 text-accent font-mono text-[9px] font-bold flex items-center justify-between px-2 -translate-y-1/2 pointer-events-none overflow-hidden backdrop-blur-[1px] shadow-[0_0_10px_rgba(245,158,11,0.25)]"
                      >
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,var(--color-accent)_0px,var(--color-accent)_1px,transparent_1px,transparent_6px)] opacity-40" />
                        <span className="relative z-10 font-mono font-bold text-accent tracking-tighter bg-bg-alt/90 px-1 rounded text-[8px] shadow-sm">0.0m</span>
                        <span className="relative z-10 font-mono font-bold text-accent bg-bg-alt/90 px-1 rounded text-[8px] shadow-sm">{currentMeters}m</span>
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.3 } }}
                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                        style={{
                          left: `${cursorPos.x}px`,
                          top: `${cursorPos.y}px`,
                        }}
                        className="absolute z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-accent text-white font-mono font-bold text-xs shadow-lg shadow-accent/30 border border-white/30"
                      >
                        <Ruler className="w-3.5 h-3.5 text-white animate-pulse" />
                        <span>{currentMeters}m</span>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  {/* Topo do Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-text-muted group-hover:text-accent transition-colors tracking-widest">
                        {item.code}
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider text-accent uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20 transition-colors">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Rodapé do Card */}
                <div className="relative z-10 pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted group-hover:text-accent transition-colors">
                  <span className="font-mono text-[11px] tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item.footerTag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
