import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border py-12 relative transition-colors duration-400">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-display font-bold tracking-wider text-text-primary">
              ROBERTO KOSIUR
            </span>
            <span className="text-[10px] text-text-muted tracking-[0.25em] mt-1 uppercase">
              Engenharia Civil · CREA/SP
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6 text-sm text-text-secondary" aria-label="Navegação do rodapé">
            <a href="#sobre" className="hover:text-text-primary transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-text-primary transition-colors">Especialidades</a>
            <a href="#portfolio" className="hover:text-text-primary transition-colors">Obras</a>
            <a href="#contato" className="hover:text-text-primary transition-colors">Contato</a>
          </nav>

          {/* Voltar ao Topo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors p-2.5 rounded-lg bg-bg-alt hover:bg-bg border border-border"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-accent" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Roberto Kosiur. Todos os direitos reservados.</p>
          <p className="tracking-wide">Gestão & Engenharia de Empreendimentos Residenciais</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
