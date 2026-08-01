import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Especialidades', href: '#servicos' },
    { name: 'Obras', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-bg/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex flex-col group" aria-label="Voltar ao topo">
            <span className="text-xl font-display font-bold tracking-wider text-text-primary leading-none group-hover:text-accent transition-colors duration-300">
              ROBERTO KOSIUR
            </span>
            <span className="text-[10px] text-text-muted tracking-[0.25em] mt-1 uppercase">
              Engenharia Civil
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-300
                           after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent 
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="btn-primary !px-6 !py-2.5 text-sm"
            >
              Falar com o Engenheiro
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary p-2 hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl pt-28 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-8 items-center" aria-label="Menu mobile">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-3xl font-display font-semibold text-text-primary hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="btn-primary mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Falar com o Engenheiro
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
