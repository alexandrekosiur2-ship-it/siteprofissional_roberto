import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, Building, Home } from 'lucide-react';
import profileImg from '../assets/foto_roberto3.jpeg';

const About = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX(((y - centerY) / centerY) * -8);
    setRotateY(((x - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const highlights = [
    { label: "Gestão de Obras Residenciais", icon: Home },
    { label: "Rigor da Infraestrutura Pesada", icon: Building },
    { label: "Controle Físico-Financeiro", icon: Briefcase },
    { label: "Liderança de Equipes Multidisciplinares", icon: CheckCircle2 }
  ];

  return (
    <section id="sobre" className="py-section bg-bg-alt relative overflow-hidden transition-colors duration-400">
      {/* Glow decorativo de fundo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Lado Esquerdo - Foto de Perfil Alinhada com o Topo e Base do Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative perspective-1000 flex flex-col"
          >
            {/* CARD DA FOTO PRINCIPAL COM INTERAÇÃO TILT E ALTURA HARMÔNICA */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative mx-auto max-w-md lg:max-w-none cursor-pointer group h-full flex flex-col justify-between w-full"
            >
              {/* Esquadros e Linhas Guia CAD */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-text-muted group-hover:text-accent transition-colors pointer-events-none z-20">
                + ───
              </div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-text-muted group-hover:text-accent transition-colors pointer-events-none z-20">
                ─── +
              </div>
              <div className="absolute bottom-2 left-2 text-[9px] font-mono text-text-muted group-hover:text-accent transition-colors pointer-events-none z-20">
                + ───
              </div>
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-text-muted group-hover:text-accent transition-colors pointer-events-none z-20">
                ─── +
              </div>

              {/* Moldura com gradiente de acento */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-accent/30 via-accent/10 to-transparent blur-sm group-hover:blur-md transition-all pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden glass-card h-full min-h-[460px] lg:min-h-[580px] shadow-xl flex flex-col">
                <img
                  src={profileImg}
                  alt="Roberto Kosiur - Engenheiro Civil Especialista em Empreendimentos Residenciais"
                  className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                
                {/* Legenda sobre a foto */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface/90 border border-border backdrop-blur-md shadow-sm z-10">
                  <div className="flex items-center justify-between text-text-primary">
                    <div>
                      <p className="font-display font-bold text-lg">Roberto Kosiur</p>
                      <p className="text-xs text-text-secondary">Engenheiro Civil · CREA/SP</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/15 text-accent border border-accent/30">
                      +17 Anos
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Lado Direito - Conteúdo e Trajetória */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="section-line" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase">
                Trajetória & Especialização
              </span>
            </div>

            <h2 className="text-4xl font-display font-bold text-text-primary mb-6 leading-tight">
              Excelência na gestão de <span className="text-gradient">empreendimentos residenciais.</span>
            </h2>

            <div className="space-y-4 text-text-secondary text-base leading-relaxed mb-8">
              <p>
                Engenheiro Civil com mais de 17 anos de experiência, especializado na gestão e execução de <strong className="text-text-primary">obras prediais e conjuntos residenciais de médio e grande porte</strong> (como Parque do Sol, Link Ipiranga, Parque das Cerejeiras e Bem Viver).
              </p>
              <p>
                O grande diferencial da sua atuação vem da bagagem acumulada no gerenciamento de <strong className="text-text-primary">megaobras de infraestrutura de escala nacional</strong> — como refinarias da Petrobrás, pontes do Grupo CCR e o Porto do Açu. Essa experiência traz um nível incomparável de precisão técnica, planejamento físico-financeiro, controle de qualidade e rigor no cumprimento de prazos para os projetos residenciais.
              </p>
            </div>

            {/* Grid de Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-surface border border-border shadow-sm hover:border-accent/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent flex-shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-text-primary font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Destaque Institucional ABEMI */}
            <div className="p-5 rounded-2xl bg-surface border border-accent/25 shadow-sm">
              <h3 className="text-sm font-bold text-text-primary mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Contribuição Técnica & Qualidade
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Atuação no <strong className="text-text-primary">Comitê ABEMI</strong> na padronização de procedimentos executivos, garantindo metodologias de alta produtividade e segurança aplicadas à construção de edifícios residenciais.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
