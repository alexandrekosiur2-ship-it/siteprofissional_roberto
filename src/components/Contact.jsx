import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, MapPin, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      setCursorPos({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*Contato via Site Profissional*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone/WhatsApp:* ${formData.phone || 'Não informado'}\n` +
      `📌 *Assunto:* ${formData.subject || 'Consulta de Empreendimento'}\n\n` +
      `💬 *Mensagem:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/5511996531709?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => { setIsHovered(true); handleTouchMove(e); }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-section bg-bg-alt relative overflow-hidden transition-colors duration-400"
    >
      {/* Grade de Blueprint / Linhas Quadriculadas Estilo CAD de Fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60" />
      
      {/* Glow de fundo de luz ambiente */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* PONTEIRO DO MOUSE ESTILO AUTOCAD (CROSSHAIR X/Y + PICKBOX + COORDENADAS) */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Linha do Eixo X (Horizontal - Vermelho CAD) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ top: `${cursorPos.y}px` }}
              className="absolute inset-x-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-red-500/80 to-transparent pointer-events-none"
            />

            {/* Linha do Eixo Y (Vertical - Verde CAD) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ left: `${cursorPos.x}px` }}
              className="absolute inset-y-0 z-20 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/80 to-transparent pointer-events-none"
            />

            {/* Pickbox CAD (Quadrado no centro do cursor) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-white bg-slate-900/60 shadow-[0_0_8px_rgba(255,255,255,0.7)] pointer-events-none"
            />

            {/* Tag de Coordenadas CAD em tempo real ao lado do cursor */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ left: `${cursorPos.x + 12}px`, top: `${cursorPos.y + 12}px` }}
              className="absolute z-30 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/90 text-white font-mono text-[10px] shadow-lg border border-slate-700/80 pointer-events-none backdrop-blur-md"
            >
              <span className="text-red-400 font-bold">X: {Math.round(cursorPos.x)}</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400 font-bold">Y: {Math.round(cursorPos.y)}</span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Ícone Puro de Eixos X e Y do CAD (Alinhado à Interseção da Grade) */}
      <div className="absolute bottom-[32px] left-[32px] z-20 pointer-events-none hidden sm:block font-mono">
        <div className="relative w-12 h-12">
          {/* Ponto de Origem na Interseção da Grade */}
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.9)]" />

          {/* Eixo X (Linha Vermelha para Direita) */}
          <div className="absolute bottom-0 left-0 w-8 h-[1.5px] bg-red-500" />
          <span className="absolute bottom-[-4px] left-[36px] text-[11px] font-black text-red-500 leading-none">X</span>

          {/* Eixo Y (Linha Verde para Cima) */}
          <div className="absolute bottom-0 left-0 w-[1.5px] h-8 bg-emerald-400" />
          <span className="absolute top-[-12px] left-[-3px] text-[11px] font-black text-emerald-400 leading-none">Y</span>
        </div>
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Lado Esquerdo - Chamada Executiva + Viewport Tridimensional 3D do CAD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase font-display">
                  CAD // Contato Direto & Gerenciamento
                </span>
              </div>

              <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
                Vamos estruturar o seu <span className="text-gradient">próximo empreendimento?</span>
              </h2>

              <p className="text-text-secondary text-base leading-relaxed mb-8">
                Entre em contato direto pelo WhatsApp para discutir novos projetos residenciais, consultoria de gerenciamento de obras ou compatibilização de projetos.
              </p>
            </div>

            {/* Informações de Contato Direto */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/5511996531709" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-emerald-500/30 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-emerald-500 font-semibold block uppercase tracking-wider">WhatsApp Oficial</span>
                  <span className="text-text-primary font-bold text-base">+55 (11) 99653-1709</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-text-muted block">Base de Atuação</span>
                  <span className="text-text-primary font-medium text-sm">São Paulo / Atuação Nacional</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Lado Direito - Formulário Conectado Exclusivamente ao WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-surface rounded-3xl p-8 md:p-10 border border-border shadow-xl relative overflow-hidden">
              {/* Marcadores CAD nos Cantos do Formulário */}
              <div className="absolute top-3 left-3 text-[9px] font-mono text-text-muted pointer-events-none">
                + ───
              </div>
              <div className="absolute top-3 right-3 text-[9px] font-mono text-text-muted pointer-events-none">
                ─── +
              </div>
              <div className="absolute bottom-3 left-3 text-[9px] font-mono text-text-muted pointer-events-none">
                + ───
              </div>
              <div className="absolute bottom-3 right-3 text-[9px] font-mono text-text-muted pointer-events-none">
                ─── +
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-2">
                    Redirecionado para o WhatsApp!
                  </h3>
                  <p className="text-text-secondary text-sm max-w-md mb-6">
                    Sua mensagem foi formatada e aberta na conversa direta com o Engenheiro Roberto.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost !py-2.5 !px-5 text-sm"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-display font-bold text-text-primary">
                      Falar no WhatsApp
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-semibold">
                      <MessageSquare className="w-3.5 h-3.5" /> Direto & Sem Intermediários
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-text-secondary mb-2">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-text-secondary mb-2">
                        Seu WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-text-secondary mb-2">
                      Assunto / Empreendimento
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Gestão de Obra Residencial / Consultoria"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-text-secondary mb-2">
                      Sua Mensagem *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva a necessidade do seu empreendimento residencial..."
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full !py-4 text-base bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] text-white"
                  >
                    Iniciar Conversa no WhatsApp <Send className="w-4 h-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
