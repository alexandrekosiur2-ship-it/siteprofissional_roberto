import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: "Petrobrás", role: "Refinarias Industriais" },
    { name: "Grupo CCR", role: "Pontes & Viadutos" },
    { name: "Porto do Açu", role: "TMULT Infraestrutura" },
    { name: "ABEMI", role: "Comitê Técnico" },
    { name: "UTC Engenharia", role: "Procedimentos Executivos" }
  ];

  return (
    <section className="py-16 bg-bg-alt relative border-b border-white/5">
      <div className="container-main">
        <p className="text-center text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-10">
          Experiência e Atuação em Projetos Ligados a Grandes Organizações
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-4 rounded-xl glass-dark border border-white/5 flex flex-col items-center justify-center text-center group hover:border-accent/30 transition-all duration-300"
            >
              <span className="font-display font-bold text-text-primary text-base group-hover:text-accent transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] text-text-muted tracking-wider uppercase mt-1">
                {partner.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
