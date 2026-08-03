import React from 'react';
import { motion } from 'framer-motion';
import { Home, ShieldCheck, Building2, Factory, FileCheck, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const specialties = [
    {
      id: "residential",
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
      className="py-section bg-bg-alt relative overflow-hidden transition-colors duration-400"
    >
      {/* Grade suave de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-30" />

      {/* Glow de luz ambiente */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-main relative z-10">

        {/* Cabeçalho de Seção com Estilo Executivo */}
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

        {/* Bento Grid Limpo e Moderno */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-surface rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl border border-border hover:border-accent/40 hover:-translate-y-1 ${item.colSpan}`}
              >
                <div className="relative z-10">
                  {/* Topo do Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-semibold tracking-wider text-accent uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20 transition-colors">
                      {item.badge}
                    </span>
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

