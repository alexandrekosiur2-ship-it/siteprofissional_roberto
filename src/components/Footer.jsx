import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative transition-colors duration-500">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand - Tonalidade Alinhada com a Navbar */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-display font-extrabold tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              ROBERTO KOSIUR
            </span>
            <span className="text-[10px] font-bold text-sky-400 tracking-[0.25em] mt-1 uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              Engenharia Civil · CREA/SP
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300" aria-label="Navegação do rodapé">
            <a href="#sobre" className="hover:text-white transition-colors duration-300">Sobre</a>
            <a href="#servicos" className="hover:text-white transition-colors duration-300">Especialidades</a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-300">Obras</a>
            <a href="#contato" className="hover:text-white transition-colors duration-300">Contato</a>
          </nav>

          {/* Voltar ao Topo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors duration-300 p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 shadow-sm"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-sky-400" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Roberto Kosiur. Todos os direitos reservados.</p>
          <p className="tracking-wide text-slate-400">Gestão & Engenharia de Empreendimentos Residenciais</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

