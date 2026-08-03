import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Home, Shield } from 'lucide-react';
import heroVideo from '../assets/hero_construction_light.mp4';
import heroPoster from '../assets/hero_residential_luxury.png';

const Hero = () => {
  const { scrollY } = useScroll();

  // Animação de fade-out sutil do conteúdo apenas no scroll (sem transformar a matriz do vídeo no GPU)
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background de Vídeo Estático (Sem transformar a matriz no GPU durante o scroll para desempenho ultra-fluido) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroPoster}
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transform-gpu"
        >
          <source src={heroVideo} type="video/mp4" />
          <img
            src={heroPoster}
            alt="Empreendimentos residenciais de alto padrão"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Overlay claro com gradientes suaves para maior visibilidade do vídeo */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/20 to-bg/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/20" />
      </div>

      {/* Glow decorativo de fundo para garantir legibilidade (Halo Branco) */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] h-[500px] bg-white/60 rounded-full blur-[120px]" />
      </div>

      {/* Conteúdo principal */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container-main text-center pt-24"
      >
        {/* Badge de credibilidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="badge-glow mb-8"
        >
          <Home className="w-4 h-4 text-accent" />
          <span>Engenharia & Gestão de Empreendimentos Residenciais</span>
        </motion.div>

        {/* Headline magnética focada em Residenciais de Luxo */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="text-hero font-display font-extrabold text-text-primary mb-6 leading-[1.08] max-w-[920px] mx-auto"
        >
          Engenharia de precisão para{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient">empreendimentos residenciais de alto padrão.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="text-xl text-text-primary max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
        >
          Gestão executiva de obras prediais e residenciais de médio e grande porte. A união entre rigor técnico, cumprimento de prazos e sofisticação construtiva.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#portfolio" className="btn-primary group w-full sm:w-auto">
            Ver Empreendimentos Residenciais
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="#contato" className="btn-ghost w-full sm:w-auto">
            <Shield className="w-4 h-4" />
            Falar com o Engenheiro
          </a>
        </motion.div>

        {/* Badges de impacto rápido */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14 text-text-primary font-medium text-sm"
        >
          {['Edificações Residenciais', 'Gestão de Contratos', 'Compatibilização de Projetos', '+20 Anos de Mercado'].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-text-secondary text-xs font-bold tracking-widest uppercase">
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-9 h-9 rounded-full glass-dark flex items-center justify-center"
        >
          <ChevronDown className="text-text-primary w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
