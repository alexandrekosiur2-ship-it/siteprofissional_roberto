import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 relative">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-display font-bold tracking-wider text-white">
              ROBERTO KOSIUR
            </span>
            <span className="text-[10px] text-slate-400 tracking-[0.25em] mt-1 uppercase">
              Engenharia Civil · CREA/SP
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-white transition-colors">Especialidades</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Obras</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>

          {/* Voltar ao Topo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Roberto Kosiur. Todos os direitos reservados.</p>
          <p className="tracking-wide">Engenharia de Infraestrutura Pesada & Megaempreendimentos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
