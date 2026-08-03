import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { currentThemeId, activePalette, isDarkMode, toggleMode, changeTheme, palettes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const lightPalettes = palettes.filter(p => p.mode === 'light');
  const darkPalettes = palettes.filter(p => p.mode === 'dark');

  return (
    <div className="relative inline-flex items-center gap-2" ref={menuRef}>
      {/* Botão Rápido de Toggle (☀️ / 🌙) */}
      <button
        onClick={toggleMode}
        className="p-2.5 rounded-full bg-surface border border-border text-text-primary 
                   hover:border-accent hover:text-accent hover:shadow-glow-sm
                   transition-all duration-300 active:scale-95"
        title={isDarkMode ? "Alternar para Modo Claro" : "Alternar para Modo Escuro"}
        aria-label="Alternar Modo Claro ou Escuro"
      >
        {isDarkMode ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* Botão de Menu de Paletas (🎨) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-2 rounded-full border text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
          isOpen 
            ? 'bg-accent text-white border-accent shadow-glow' 
            : 'bg-surface border-border text-text-primary hover:border-accent hover:text-accent'
        }`}
        title="Escolher Paleta de Cores"
        aria-expanded={isOpen}
      >
        <span className="text-base">🎨</span>
        <span className="hidden sm:inline">{activePalette.name}</span>
        <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown de Seleção de Paletas */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-80 sm:w-96 p-4 rounded-2xl glass-dark shadow-2xl border border-border z-50 animate-fadeIn max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
            <div>
              <h4 className="text-sm font-bold text-text-primary flex items-center gap-2">
                <span>🎨</span> Paletas de Cores Profissionais
              </h4>
              <p className="text-[11px] text-text-muted">10 temas otimizados com contraste WCAG AAA</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-text-muted hover:text-text-primary text-sm p-1"
            >
              ✕
            </button>
          </div>

          {/* Grupo de Paletas Claras */}
          <div className="mb-4">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-1.5">
              <span>☀️</span> Paletas Claras ({lightPalettes.length})
            </h5>
            <div className="space-y-1.5">
              {lightPalettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => {
                    changeTheme(palette.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    currentThemeId === palette.id
                      ? 'bg-accent/15 border border-accent/40 shadow-sm'
                      : 'hover:bg-surface-hover border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-1.5">
                      {palette.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-black/10 shadow-xs inline-block"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {palette.name}
                      </div>
                      <div className="text-[10px] text-text-muted line-clamp-1">
                        {palette.description}
                      </div>
                    </div>
                  </div>
                  {currentThemeId === palette.id && (
                    <span className="text-accent text-xs font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Grupo de Paletas Escuras */}
          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-1.5">
              <span>🌑</span> Paletas Escuras ({darkPalettes.length})
            </h5>
            <div className="space-y-1.5">
              {darkPalettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => {
                    changeTheme(palette.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    currentThemeId === palette.id
                      ? 'bg-accent/15 border border-accent/40 shadow-sm'
                      : 'hover:bg-surface-hover border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-1.5">
                      {palette.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-white/20 shadow-xs inline-block"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {palette.name}
                      </div>
                      <div className="text-[10px] text-text-muted line-clamp-1">
                        {palette.description}
                      </div>
                    </div>
                  </div>
                  {currentThemeId === palette.id && (
                    <span className="text-accent text-xs font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
