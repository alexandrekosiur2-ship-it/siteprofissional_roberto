import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowUpRight, MessageSquare, Globe } from 'lucide-react';

const Contact = () => {
  const whatsappUrl = `https://wa.me/5511996531709?text=${encodeURIComponent("Olá Roberto, vim pelo seu site profissional e gostaria de entrar em contato.")}`;

  return (
    <section
      id="contato"
      className="py-section bg-bg-alt relative overflow-hidden transition-colors duration-400"
    >
      {/* Grade suave de fundo CAD */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
      
      {/* Glow de fundo de luz ambiente */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Cabeçalho Institucional Executivo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-[0.2em] uppercase font-display mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Contato Profissional</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Contato <span className="text-gradient">Direto</span>
          </h2>

          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Trajetória consolidada na gestão executiva, coordenação e gerenciamento de obras prediais e empreendimentos residenciais de médio e grande porte.
          </p>
        </motion.div>

        {/* Grid de 2 Cards Executivos Minimalistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: WhatsApp Oficial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-surface border border-emerald-500/30 hover:border-emerald-500/70 shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5" /> Canal Direto
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-text-primary mb-2">
                WhatsApp Oficial
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-6">
                Comunicação direta com o Engenheiro Roberto.
              </p>
              <span className="text-2xl font-extrabold font-display text-text-primary block mb-8">
                +55 (11) 99653-1709
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md hover:shadow-emerald-500/25 transition-all duration-300 group-hover:translate-y-[-2px]"
            >
              <span>Iniciar Conversa no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 2: Base de Atuação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-surface border border-border hover:border-accent/40 shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" /> Mobilidade
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-text-primary mb-2">
                Base de Atuação
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-6">
                São Paulo / Atuação Nacional
              </p>
              <span className="text-xl font-bold font-display text-text-primary block mb-8">
                São Paulo & Regiões Estratégicas
              </span>
            </div>

            <div className="pt-5 border-t border-border/60 text-xs text-text-muted leading-relaxed">
              Experiência consolidada e mobilidade para atuação em projetos de âmbito nacional.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;



