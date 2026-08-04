import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Home, Shield } from 'lucide-react';
import heroVideo from '../assets/hero_construction_light.mp4';
import heroVideoWebm from '../assets/hero_construction.webm';
import heroPoster from '../assets/hero_residential_luxury.webp';

const Hero = () => {
  const { scrollY } = useScroll();

  // Animação de fade-out sutil do conteúdo apenas no scroll
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-slate-950"
      aria-label="Seção principal"
    >
      {/* Background de Vídeo com Overlay Gradiente de Alto Contraste */}
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
          aria-hidden="true"
          className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] transform-gpu"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src={heroVideoWebm} type="video/webm" />
          <track kind="captions" src="" srclang="pt" label="Vídeo de fundo demonstrativo sem áudio" default />
          <img
            src={heroPoster}
            alt="Empreendimentos residenciais de alto padrão"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Gradientes de Proteção Visual para Legibilidade Impecável (WCAG AAA) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950/15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70 pointer-events-none" />
      </div>

      {/* Conteúdo Principal (ZERO Blocos, ZERO Quadrados - Tipografia Pura e Cristalina) */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container-main text-center max-w-[960px] mx-auto space-y-6"
      >
        {/* 1. Badge de Credibilidade (Pill Fina Minimalista) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-block"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide text-slate-200 shadow-sm">
            <Home className="w-4 h-4 text-sky-400" />
            <span>Engenharia & Gestão de Empreendimentos Residenciais</span>
          </div>
        </motion.div>

        {/* 2. Headline Magnética (SEM QUADRADOS / SEM CAIXAS DE FUNDO) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="text-hero font-display font-extrabold mb-4 leading-[1.15] max-w-[920px] mx-auto text-center tracking-tight"
        >
          <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Engenharia de precisão para{' '}
          </span>
          <span className="text-sky-400 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] block sm:inline mt-1 sm:mt-0">
            empreendimentos residenciais de alto padrão.
          </span>
        </motion.h1>

        {/* 3. Subheadline (Texto Limpo Sem Qualquer Caixa) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="max-w-2xl mx-auto pt-2"
        >
          <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Gestão executiva de obras prediais e residenciais de médio e grande porte. A união entre rigor técnico, cumprimento de prazos e sofisticação construtiva.
          </p>
        </motion.div>

        {/* 4. CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a href="#portfolio" className="btn-primary group w-full sm:w-auto shadow-xl">
            Ver Empreendimentos Residenciais
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-medium shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Shield className="w-4 h-4 text-sky-400" />
            Falar com o Engenheiro
          </a>
        </motion.div>

        {/* 5. Badges Rápidos (Pills Finas Individuais) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-6 text-xs sm:text-sm font-medium"
        >
          {['Edificações Residenciais', 'Gestão de Contratos', 'Compatibilização de Projetos', '+17 Anos de Mercado'].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 shadow-sm backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de Scroll */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-slate-300 text-[10px] font-bold tracking-widest uppercase drop-shadow">
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full bg-slate-900/90 backdrop-blur-md flex items-center justify-center border border-slate-700 shadow-sm text-slate-200"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

