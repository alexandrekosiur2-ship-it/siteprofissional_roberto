# Painel do Projeto: Site Profissional Engenheiro Roberto Kosiur

> **Instrução de Sistema (Core Prompt)**: 
> Sempre que iniciar uma nova conversa ou contextualizar a IA, leia este arquivo primeiro. Este documento mapeia a estrutura, as diretrizes e os agentes deste projeto.
> 
> **📖 LEITURA OBRIGATÓRIA ANTES DE QUALQUER AÇÃO:**
> Após ler este arquivo, a IA **DEVE** ler obrigatoriamente os seguintes documentos antes de escrever código ou tomar decisões de design:
> 1. `docs/agentes/SKILL_PREMIUM_DESIGNER.md` (Regras de design e qualidade visual).
> 2. `docs/conteudo/ESTRUTURA_SITE.md` (Briefing, conteúdo e escopo do projeto).
> 3. `docs/conteudo/Foto perfil pessoal.md` (Bio oficial e dados factuais do profissional).
> 
> **🛡️ REGRA DE OURO E ISOLAMENTO DE WORKSPACE (ABSOLUTA)**: 
> A Inteligência Artificial (Você) é **estritamente proibida de modificar, criar, ler ou alterar arquivos em qualquer outro projeto ou pasta fora de `SITEPROFISSSIONA_ROBERTO`**. Foco 100% exclusivo neste workspace. NUNCA altere arquivos de outros projetos (como CREATOR_OS ou outros repositórios na máquina do usuário).
> 
> **🤖 GATILHO AUTOMÁTICO DE IDENTIDADE**:
> Toda e qualquer solicitação do usuário envolvendo criação, estilização, ou alteração de código visual para este projeto deve ativar **automaticamente** a Skill Genérica descrita em `docs/agentes/SKILL_PREMIUM_DESIGNER.md`. A IA deve assumir o papel de **Premium Web Designer Sênior** imediatamente e realizar o Onboarding Obrigatório.

---

## 1. Visão Geral do Projeto

Este projeto tem como objetivo a criação de uma **Landing Page Portfólio Profissional de Alta Performance** para o **Engenheiro Civil Roberto Kosiur de Carvalho Alves**, destacando seus mais de 20 anos de experiência em grandes obras de infraestrutura (Pontes, Viadutos/OAE, Refinarias Petrobrás, Porto do Açu).

### 📁 Arquivos Vitais do Projeto:
- **Base de Conteúdo**: `docs/conteudo/Foto perfil pessoal.md` (Biografia oficial, histórico profissional, destaques de carreira e fotos).
- **Briefing de Engenharia**: `docs/conteudo/ESTRUTURA_SITE.md` (Foco das obras, tom de voz e mapa de seções do Roberto).
- **Manual da Skill de Design**: `docs/agentes/SKILL_PREMIUM_DESIGNER.md` (Diretrizes premium, fluxos de geração de imagens e onboarding).
- **Skill de Extração de Design**: `docs/agentes/SKILL_DESIGN_EXTRACTOR.md` (Engenharia reversa de Design System a partir de URLs).
- **Biblioteca de Templates**: `docs/templates/` (Templates de design extraídos de sites de referência).
- **Painel Central**: `AGENTS.md` (Este arquivo na raiz).

---

## 2. Agentes Disponíveis e Gatilhos (Triggers)

### 🎨 Skill: Premium Web Designer Sênior
- **Onde mora**: `docs/agentes/SKILL_PREMIUM_DESIGNER.md`
- **O que faz**: Habilidade especial para assumir o papel de Arquiteto de UI/UX. Conduz o usuário em um onboarding interativo, dita regras absolutas de qualidade (tipografia, contraste, glassmorphism), realiza curadoria/aprovação de imagens e gera um Raio-X final de qualidade.
- **Como Invocar (Gatilho)**:
  - *"Aja como Premium Web Designer..."*
  - *"Quero criar uma landing page com o arquiteto de design..."*
  - *"Crie o site usando sua skill premium..."*
  - (Ou será ativado automaticamente ao falar sobre o design visual do projeto).

### 🔍 Skill: Web Design Extractor (Engenharia Reversa)
- **Onde mora**: `docs/agentes/SKILL_DESIGN_EXTRACTOR.md`
- **O que faz**: Acessa qualquer URL de site premium, extrai o Design System completo (paleta de cores, tipografia, espaçamento, layout, efeitos visuais, componentes e arquitetura de seções) e salva como template reutilizável em `docs/templates/`.
- **Como Invocar (Gatilho)**:
  - *"Extraia o design desse site: [URL]"*
  - *"Analise o design system dessa página"*
  - *"Modele esse site como template"*
  - *"Faça engenharia reversa desse site"*

---

## 3. Diretrizes de Segurança e Boas Práticas

1. **Escopo Estrito**: Todas as leituras, criações, edições e comandos devem ser feitos **exclusivamente** na pasta `SITEPROFISSSIONA_ROBERTO`.
2. **Design Premium**: O site do Engenheiro Roberto deve transparecer autoridade, segurança, robustez e excelência técnica, alinhado com o porte de obras industriais e de infraestrutura.
3. **Preservação de Conteúdo**: Todo o conteúdo factual presente em `docs/conteudo/Foto perfil pessoal.md` deve ser respeitado. A IA deve ADAPTAR o texto para copywriting web (frases curtas, impacto, bullet points), mantendo todos os fatos verídicos.
4. **Qualidade Mínima**: Nenhuma entrega visual deve ser considerada finalizada sem o **Laudo Raio-X** da Skill Premium Designer, com nota mínima de 8/10 em todos os critérios.

---
*Status do Projeto: Ativo e Isolado em SITEPROFISSSIONA_ROBERTO | 2 Skills Online | v2.0 — Atualizado em 01/08/2026*
