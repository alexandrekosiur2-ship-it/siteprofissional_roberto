import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, HardHat, ClipboardList } from 'lucide-react';

import imgResidential from '../assets/portfolio_residential.png';
import imgBridge from '../assets/portfolio_bridge.png';
import imgRefinery from '../assets/portfolio_refinery.png';
import imgPort from '../assets/portfolio_port.png';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseMove = (e, projectId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const projects = [
    {
      id: "residential",
      title: "Empreendimentos Residenciais & Prediais",
      category: "Foco Principal · Habitação & Luxo",
      partner: "Parque do Sol, Link Ipiranga, Bem Viver",
      role: "Gerente de Obras & Produção",
      image: imgResidential,
      span: "md:col-span-2",
      iconType: "hardhat",
      details: "Gestão executiva completa na construção e entrega de grandes empreendimentos residenciais. Atuação no planejamento de campo, compatibilização de projetos de arquitetura e instalações, acompanhamento da produção, controle de materiais e relacionamento com incorporadores e fornecedores."
    },
    {
      id: "bridge",
      title: "Pontes e Viadutos (OAE)",
      category: "Infraestrutura Rodoviária",
      partner: "Grupo CCR",
      role: "Gerente de Contratos",
      image: imgBridge,
      span: "md:col-span-1",
      iconType: "clipboard",
      details: "Gestão de Obras de Arte Especiais (OAE) para o setor rodoviário com supervisão técnica, gestão de contratos e alto controle de qualidade."
    },
    {
      id: "refinery",
      title: "Refinarias Industriais",
      category: "Engenharia de Alta Criticidade",
      partner: "Petrobrás",
      role: "Gerente de Obra",
      image: imgRefinery,
      span: "md:col-span-1",
      iconType: "hardhat",
      details: "Gerenciamento de atividades de campo em refinarias sob rigorosos protocolos de segurança e qualidade industrial."
    },
    {
      id: "port",
      title: "TMULT — Porto do Açu",
      category: "Infraestrutura Portuária",
      partner: "Porto do Açu",
      role: "Gerente de Obra",
      image: imgPort,
      span: "md:col-span-2",
      iconType: "clipboard",
      details: "Coordenação de equipes multidisciplinares em obra de infraestrutura portuária de grande relevância nacional."
    }
  ];

  return (
    <section id="portfolio" className="py-section bg-bg relative overflow-hidden transition-colors duration-400">
      <div className="container-main">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-line" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase">
                Acervo Técnico de Campo
              </span>
            </div>
            <h2 className="text-4xl font-display font-bold text-text-primary">
              Empreendimentos <br/>
              <span className="text-gradient">Residenciais & Estruturais</span>
            </h2>
          </div>
          
          <a 
            href="#contato" 
            className="btn-ghost !py-3 !px-6 text-sm self-start md:self-auto"
          >
            Solicitar Apresentação Técnica <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              className={`group relative h-[420px] rounded-3xl overflow-hidden cursor-none bg-surface border border-border hover:border-accent/40 shadow-sm hover:shadow-card transition-all duration-500 ${project.span}`}
            >
              {/* Imagem de Fundo com zoom no hover */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
              />
              
              {/* Overlay de gradiente dinâmico para garantir legibilidade dos textos em qualquer tema */}
              <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-bg via-bg/70 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CURSOR CUSTOMIZADO DE OBRA */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    style={{
                      left: `${cursorPos.x}px`,
                      top: `${cursorPos.y}px`,
                    }}
                    className="absolute z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent text-white font-medium text-xs shadow-glow border border-white/20 backdrop-blur-md"
                  >
                    {project.iconType === 'hardhat' ? (
                      <HardHat className="w-4 h-4 text-white animate-bounce" />
                    ) : (
                      <ClipboardList className="w-4 h-4 text-white animate-pulse" />
                    )}
                    <span className="font-semibold tracking-wide">VER OBRA</span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Informações da Obra */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30 backdrop-blur-md">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full glass-dark border border-border flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-text-muted text-xs uppercase tracking-wider block mb-1">
                    {project.role} · {project.partner}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal de Detalhes do Projeto */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surface border border-border rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-bg-alt border border-border text-text-muted hover:text-accent shadow-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                {selectedProject.iconType === 'hardhat' ? (
                  <HardHat className="w-5 h-5 text-accent" />
                ) : (
                  <ClipboardList className="w-5 h-5 text-accent" />
                )}
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold text-text-primary mb-4">
                {selectedProject.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-bg-alt border border-border shadow-sm text-sm">
                <div>
                  <span className="text-text-muted block text-xs">Atuação</span>
                  <strong className="text-text-primary font-medium">{selectedProject.role}</strong>
                </div>
                <div>
                  <span className="text-text-muted block text-xs">Empreendimentos / Referência</span>
                  <strong className="text-text-primary font-medium">{selectedProject.partner}</strong>
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed text-sm mb-6">
                {selectedProject.details}
              </p>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-ghost !py-2.5 !px-5 text-sm"
                >
                  Fechar
                </button>
                <a
                  href="#contato"
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary !py-2.5 !px-5 text-sm"
                >
                  Falar com Roberto
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Portfolio;
