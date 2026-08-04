import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "5511996531709";
  const message = "Olá Engenheiro Roberto! Vim pelo seu site profissional e gostaria de conversar.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Falar com o Engenheiro no WhatsApp"
        className="group relative flex items-center gap-3 p-3.5 rounded-full bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 text-white shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:border-emerald-400 transition-all duration-300 cursor-pointer"
      >
        {/* Anel de Pulsação de Sinal de WhatsApp Verde */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />

        {/* Ícone de Capacete de Obra Verde com Distintivo WhatsApp */}
        <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-110 transition-transform duration-300">
          <HardHat className="w-6 h-6 text-slate-950" />
          
          {/* Badge sobreposta do símbolo do WhatsApp */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-950 border-2 border-slate-900 flex items-center justify-center text-emerald-400">
            <MessageCircle className="w-3 h-3 fill-emerald-400" />
          </div>
        </div>

        {/* Texto Expansível no Hover ou em Tela Cheia */}
        <div className="pr-2 hidden sm:block">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
            WhatsApp Direto
          </span>
          <span className="text-sm font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
            Falar com Engenheiro
          </span>
        </div>

        {/* Balão Tooltip no Mobile */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-slate-900/95 border border-emerald-500/30 text-xs font-semibold text-text-primary whitespace-nowrap shadow-xl sm:hidden"
            >
              Falar no WhatsApp
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
