import React, { createContext, useContext, useState, useEffect } from 'react';

// Definição das 10 Paletas Profissionais
export const PALETTES = [
  // ☀️ PALETAS CLARAS
  {
    id: 'light-clean',
    name: 'Clean Corporate',
    mode: 'light',
    description: 'Branco Off-White & Azul Executivo (Leitura Limpa)',
    colors: ['#FFFFFF', '#0F172A', '#1E40AF'],
  },
  {
    id: 'light-steel',
    name: 'Steel & Concrete',
    mode: 'light',
    description: 'Cinza Concreto & Laranja Engenharia Pesada',
    colors: ['#F1F5F9', '#0F172A', '#EA580C'],
  },
  {
    id: 'light-navy',
    name: 'Petrobrás Navy',
    mode: 'light',
    description: 'Prata Titânio & Azul Marinho Industrial',
    colors: ['#F8FAFC', '#0C2340', '#0284C7'],
  },
  {
    id: 'light-bronze',
    name: 'Warm Bronze',
    mode: 'light',
    description: 'Areia Mineral & Âmbar Orgânico',
    colors: ['#FAF8F5', '#2C1810', '#B45309'],
  },
  {
    id: 'light-emerald',
    name: 'Eco Emerald',
    mode: 'light',
    description: 'Branco Mineral & Verde Sustentabilidade',
    colors: ['#F4F7F5', '#064E3B', '#059669'],
  },

  // 🌑 PALETAS ESCURAS
  {
    id: 'dark-premium',
    name: 'Dark Premium',
    mode: 'dark',
    description: 'Grafite Ultra-Escuro & Azul Safira Glow (Luxo)',
    colors: ['#0B0F19', '#F1F5F9', '#3B82F6'],
  },
  {
    id: 'dark-steel',
    name: 'Dark Steel Safety',
    mode: 'dark',
    description: 'Preto Aço & Laranja Neon Sinalização',
    colors: ['#0D1117', '#F8FAFC', '#F97316'],
  },
  {
    id: 'dark-navy',
    name: 'Petrobrás Night',
    mode: 'dark',
    description: 'Azul Marinho Escuro & Ciano Offshore',
    colors: ['#0A192F', '#F8FAFC', '#38BDF8'],
  },
  {
    id: 'dark-obsidian',
    name: 'Warm Obsidian',
    mode: 'dark',
    description: 'Preto Obsidiana & Bronze Dourado Glow',
    colors: ['#121212', '#FDFBF7', '#F59E0B'],
  },
  {
    id: 'dark-cyber',
    name: 'Cyber Infra Tech',
    mode: 'dark',
    description: 'Preto Neom & Verde Esmeralda Neon',
    colors: ['#0A0A0F', '#F1F5F9', '#10B981'],
  },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Ler preferência salva ou usar 'dark-steel' (Dark Steel Safety) por padrão
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    const saved = localStorage.getItem('roberto_site_theme');
    if (saved === 'dark-steel' || saved === 'light-steel') {
      return saved;
    }
    return 'dark-steel';
  });

  const activePalette = PALETTES.find(p => p.id === currentThemeId) || PALETTES.find(p => p.id === 'dark-steel') || PALETTES[1];
  const isDarkMode = activePalette.mode === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentThemeId);
    localStorage.setItem('roberto_site_theme', currentThemeId);
  }, [currentThemeId]);

  // Alternador Sol/Lua (☀️/🌙): Alterna entre Dark Steel Safety (Escuro) e Steel & Concrete (Claro)
  const toggleMode = () => {
    if (isDarkMode) {
      // Mudar para o modo claro: Steel & Concrete
      setCurrentThemeId('light-steel');
    } else {
      // Mudar para o modo escuro principal: Dark Steel Safety
      setCurrentThemeId('dark-steel');
    }
  };

  const changeTheme = (themeId) => {
    if (PALETTES.some(p => p.id === themeId)) {
      setCurrentThemeId(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{
      currentThemeId,
      activePalette,
      isDarkMode,
      toggleMode,
      changeTheme,
      palettes: PALETTES
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};
