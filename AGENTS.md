# Painel do Projeto: Site Profissional Engenheiro Roberto Kosiur

> **Instrução de Sistema (Core Prompt)**: 
> Sempre que iniciar uma nova conversa ou contextualizar a IA, leia este arquivo primeiro. Este documento mapeia a estrutura, as diretrizes e os agentes deste projeto.
> 
> **📖 LEITURA OBRIGATÓRIA ANTES DE QUALQUER AÇÃO:**
> Após ler este arquivo, a IA **DEVE** ler obrigatoriamente os seguintes documentos antes de escrever código ou tomar decisões de design:
> 1. `CHANGELOG.md` (Histórico cronológico de evolução do código e alterações recentes).
> 2. `docs/agentes/SKILL_PREMIUM_DESIGNER.md` (Regras de design e qualidade visual).
> 3. `docs/agentes/SKILL_AUDITOR_QUALIDADE.md` (Ciclo obrigatório de auditoria 360° e qualidade).
> 4. `docs/conteudo/ESTRUTURA_SITE.md` (Briefing, conteúdo e escopo do projeto).
> 5. `docs/conteudo/Foto perfil pessoal.md` (Bio oficial e dados factuais do profissional).
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
- **Log de Mudanças**: `CHANGELOG.md` (Histórico de alterações em 3+ arquivos e evolução do código).
- **Base de Conteúdo**: `docs/conteudo/Foto perfil pessoal.md` (Biografia oficial, histórico profissional, destaques de carreira e fotos).
- **Briefing de Engenharia**: `docs/conteudo/ESTRUTURA_SITE.md` (Foco das obras, tom de voz e mapa de seções do Roberto).
- **Manual da Skill de Design**: `docs/agentes/SKILL_PREMIUM_DESIGNER.md` (Diretrizes premium, fluxos de geração de imagens e onboarding).
- **Skill de Auditoria 360°**: `docs/agentes/SKILL_AUDITOR_QUALIDADE.md` (Laudo Raio-X, auditoria de Design, Copy, SEO e ciclo fechado).
- **Skill de Extração de Design**: `docs/agentes/SKILL_DESIGN_EXTRACTOR.md` (Engenharia reversa de Design System a partir de URLs).
- **Biblioteca de Templates**: `docs/templates/` (Templates de design extraídos de sites de referência).
- **Painel Central**: `AGENTS.md` (Este arquivo na raiz).

---

## 2. Agentes Disponíveis e Gatilhos (Triggers)

### 🎨 Skill: Premium Web Designer Sênior
- **Onde mora**: `docs/agentes/SKILL_PREMIUM_DESIGNER.md`
- **O que faz**: Habilidade especial para assumir o papel de Arquiteto de UI/UX. Conduz o usuário em um onboarding interativo, dita regras absolutas de qualidade (tipografia, contraste, glassmorphism), realiza curadoria/aprovação de imagens e gera um Raio-X final de qualidade.

### 🔬 Skill: Auditor de Qualidade 360° (Garantia de Ciclo Fechado)
- **Onde mora**: `docs/agentes/SKILL_AUDITOR_QUALIDADE.md`
- **O que faz**: Executa a auditoria completa de Design, Copy, SEO, Acessibilidade (WCAG AAA) e Responsividade ao final de cada implementação, garantindo a execução do **Ciclo Fechado em 4 Etapas** com nota mínima 8.0/10.

### 🔍 Skill: Web Design Extractor (Engenharia Reversa)
- **Onde mora**: `docs/agentes/SKILL_DESIGN_EXTRACTOR.md`
- **O que faz**: Acessa qualquer URL de site premium, extrai o Design System completo e salva como template reutilizável em `docs/templates/`.

---

## 3. O Ciclo Fechado Obrigatório do Projeto (Regra Inviolável)

Toda e qualquer alteração de código ou funcionalidade DEVE seguir este ciclo de 4 etapas:

```
┌─────────────────────────────────────────────────────────┐
│ 1. PLANO (implementation_plan.md)                       │
│    Diagnóstico, definição de escopo e aprovação         │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 2. EXECUÇÃO (task.md & Código Clean)                    │
│    Implementação modular, responsiva e semântica        │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 3. AVALIAÇÃO (Laudo Raio-X 360°)                        │
│    Auditoria de Design, Contraste, Copy, SEO e UX       │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 4. CORREÇÃO & LOG (CHANGELOG.md)                        │
│    Se nota < 8.0 → Refatorar. Se 3+ arquivos → Log     │
└──────────────────────────┬──────────────────────────────┘
```

---

## 4. Diretrizes de Segurança e Boas Práticas

1. **Escopo Estrito**: Todas as leituras, criações, edições e comandos devem ser feitos **exclusivamente** na pasta `SITEPROFISSSIONA_ROBERTO`.
2. **Design Premium**: O site do Engenheiro Roberto deve transparecer autoridade, segurança, robustez e excelência técnica.
3. **Preservação de Conteúdo**: Todo o conteúdo factual presente em `docs/conteudo/Foto perfil pessoal.md` deve ser respeitado.
4. **Qualidade Mínima (Ciclo Fechado)**: Nenhuma entrega deve ser considerada concluída sem a emissão do **Laudo Raio-X 360°**, exigindo nota mínima de 8.0/10 em todos os 10 quesitos.
5. **Registro de Log de Mudanças (Regra dos 3+ Arquivos)**: Sempre que uma alteração envolver **3 ou mais arquivos**, a IA **DEVE** obrigatoriamente registrar o resumo, a data e a lista de arquivos alterados no `CHANGELOG.md`.
6. **Consulta de Skills Externas On-Demand & Auditoria Prévia**: A IA prioriza 100% as Skills Locais em `docs/agentes/`. Quando o usuário solicitar uma pesquisa ou uso de skill externa do repositório `agentic-awesome-skills`, a IA executará a consulta em tempo real sem instalar nada no computador, utilizando o comando:
   `npx agentic-awesome-skills --antigravity --skills <NOME_DA_SKILL> --dry-run`
   *⚠️ REGRA DE APROVAÇÃO:* Antes de aplicar qualquer regra da skill externa, a IA deve emitir o **Laudo de Avaliação de Skill Externa** (score 0-10 na `SKILL_AUDITOR_QUALIDADE.md`), autorizando a aplicação somente se a média for **≥ 8.0/10**.

---
*Status do Projeto: Ativo e Isolado em SITEPROFISSSIONA_ROBERTO | 3 Skills Online | v3.2 — Atualizado em 03/08/2026*
