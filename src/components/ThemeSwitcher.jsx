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
      {/* Botão Rápido de Toggle (☀️ / 🌙) com Preenchimento Escuro e Ícone Claro */}
      <button
        onClick={toggleMode}
        className="p-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-200 
                   hover:border-slate-700 hover:text-white hover:bg-slate-800 shadow-sm
                   transition-all duration-300 active:scale-95 flex items-center justify-center"
        title={isDarkMode ? "Alternar para Modo Claro" : "Alternar para Modo Escuro"}
        aria-label="Alternar Modo Claro ou Escuro"
      >
        {isDarkMode ? (
          <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* Botão de Menu de Paletas (🎨) com Preenchimento Escuro e Texto Claro */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3.5 py-2 rounded-full border text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
          isOpen 
            ? 'bg-slate-800 text-white border-sky-500 shadow-md' 
            : 'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-700 hover:text-white hover:bg-slate-800'
        }`}
        title="Escolher Paleta de Cores"
        aria-expanded={isOpen}
      >
        <span className="text-base">🎨</span>
        <span className="hidden sm:inline text-white font-medium">{activePalette.name}</span>
        <svg className={`w-3.5 h-3.5 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown de Seleção de Paletas - Fundo Escuro com Texto Claro */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-80 sm:w-96 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-slate-800 z-50 animate-fadeIn max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🎨</span> Paletas de Cores Profissionais
              </h4>
              <p className="text-[11px] text-slate-400">10 temas otimizados com contraste WCAG AAA</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white text-sm p-1"
            >
              ✕
            </button>
          </div>

          {/* Grupo de Paletas Claras */}
          <div className="mb-4">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
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
                      ? 'bg-slate-800 border border-sky-500/50 shadow-sm'
                      : 'hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-1.5">
                      {palette.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-black/20 shadow-xs inline-block"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {palette.name}
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">
                        {palette.description}
                      </div>
                    </div>
                  </div>
                  {currentThemeId === palette.id && (
                    <span className="text-sky-400 text-xs font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Grupo de Paletas Escuras */}
          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
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
                      ? 'bg-slate-800 border border-sky-500/50 shadow-sm'
                      : 'hover:bg-slate-800/60 border border-transparent'
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
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {palette.name}
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">
                        {palette.description}
                      </div>
                    </div>
                  </div>
                  {currentThemeId === palette.id && (
                    <span className="text-sky-400 text-xs font-bold">✓</span>
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

