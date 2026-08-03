import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formata a mensagem para o WhatsApp do Engenheiro Roberto (+55 11 99653-1709)
    const text = `*Contato via Site Profissional*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone/WhatsApp:* ${formData.phone || 'Não informado'}\n` +
      `📌 *Assunto:* ${formData.subject || 'Consulta de Empreendimento'}\n\n` +
      `💬 *Mensagem:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/5511996531709?text=${encodeURIComponent(text)}`;

    // Abre o WhatsApp com a mensagem formatada
    window.open(whatsappUrl, '_blank');

    // Exibe a tela de confirmação no site
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-section bg-white relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Lado Esquerdo - Chamada Executiva */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="section-line" />
                <span className="text-accent text-xs font-bold tracking-widest uppercase">
                  Contato Direto
                </span>
              </div>

              <h2 className="text-4xl font-display font-bold text-text-primary mb-6">
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
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-emerald-500/20 hover:border-emerald-500/40 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-semibold block uppercase tracking-wider">WhatsApp Oficial</span>
                  <span className="text-text-primary font-bold text-base">+55 (11) 99653-1709</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/10 shadow-sm">
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
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/10 shadow-xl relative">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-display font-bold text-text-primary">
                      Falar no WhatsApp
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
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
                        className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-emerald-400 transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-emerald-400 transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-emerald-400 transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
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
