import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ShieldCheck, Building2, Factory, FileCheck, ArrowUpRight, Ruler } from 'lucide-react';

const Services = () => {
  // Estados para o Cursor de Trena com Rastro de Fita Métrica
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [cardWidth, setCardWidth] = useState(0);

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    
    setCursorPos({ x: relativeX, y: relativeY });
    setCardWidth(rect.width);
  };

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
    <section id="servicos" className="py-section bg-slate-200 relative overflow-hidden">
      {/* Grade de Blueprint / Planta Baixa de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Glow de luz ambiente */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

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

        {/* Bento Grid - Estilo Blueprint Técnico com Cursor de Trena & Rastro de Fita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => {
            const IconComponent = item.icon;
            // Cálculo da medição em metros baseada na posição do mouse dentro do card
            const currentMeters = ((cursorPos.x / (cardWidth || 1)) * 45 + 5).toFixed(1);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white border border-black/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-card cursor-none ${item.colSpan}`}
              >
                {/* Marcadores de Esquadro Técnico (Canto Blueprint + CAD Crosshair) */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-black/20 group-hover:text-accent/40 transition-colors pointer-events-none">
                  + ───
                </div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-black/20 group-hover:text-accent/40 transition-colors pointer-events-none">
                  ─── +
                </div>
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-black/20 group-hover:text-accent/40 transition-colors pointer-events-none">
                  + ───
                </div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-black/20 group-hover:text-accent/40 transition-colors pointer-events-none">
                  ─── +
                </div>

                {/* Efeito de Fundo de Grade sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(#f59e0b12_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* RASTRO DA FITA MÉTRICA (Linha de Trena com Marcação de Milímetros) */}
                <AnimatePresence>
                  {activeCard === item.id && (
                    <>
                      {/* Fita Métrica Amarela Estendida da Esquerda até a Posição X do Cursor */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          top: `${cursorPos.y}px`,
                          width: `${cursorPos.x}px`,
                        }}
                        className="absolute left-0 z-20 h-5 bg-amber-400 text-slate-900 font-mono text-[9px] font-bold flex items-center justify-between px-2 shadow-[0_0_15px_rgba(245,158,11,0.5)] border-y border-amber-300 -translate-y-1/2 pointer-events-none overflow-hidden"
                      >
                        {/* Marcação de traços de régua na fita */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#000_0px,#000_1px,transparent_1px,transparent_6px)] opacity-40" />
                        <span className="relative z-10 font-extrabold tracking-tighter">0.0m</span>
                        <span className="relative z-10 font-extrabold">{currentMeters}m</span>
                      </motion.div>

                      {/* Cabeçote da Trena (Seguidor do Cursor) */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                        style={{
                          left: `${cursorPos.x}px`,
                          top: `${cursorPos.y}px`,
                        }}
                        className="absolute z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-mono font-black text-xs shadow-[0_0_20px_rgba(245,158,11,0.7)] border-2 border-slate-900"
                      >
                        <Ruler className="w-4 h-4 text-slate-900 animate-pulse" />
                        <span>{currentMeters}m</span>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  {/* Topo do Card: Ícone + Código CAD + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-text-muted group-hover:text-amber-400 transition-colors tracking-widest">
                        {item.code}
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider text-accent group-hover:text-amber-400 uppercase px-3 py-1 rounded-full bg-accent/10 group-hover:bg-amber-400/10 border border-accent/20 group-hover:border-amber-400/30 transition-colors">
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
                <div className="relative z-10 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-text-muted group-hover:text-accent transition-colors">
                  <span className="font-mono text-[11px] tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-amber-400" />
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
