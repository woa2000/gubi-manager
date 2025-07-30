# Design System Gubi 1.0

> **Games que preparam talentos. Dados que transformam futuros.**\
> Plataforma gamificada, inclusiva e orientada a dados para empregabilidade jovem.

---

## 0. Como usar este documento

Este design system é o **ponto único de verdade** para identidade visual, componentes de UI, tom de voz e padrões de experiência da plataforma Gubi (web, mobile e materiais digitais). Ele foi projetado para:

- **Designers**: criar telas e fluxos consistentes, rápidos de prototipar.
- **Devs**: consumir tokens, specs e estados de componentes sem ambiguidades.
- **Conteudistas/Marketing**: manter coerência de linguagem e narrativa.
- **Stakeholders**: garantir alinhamento entre branding, produto e negócio.

Cada seção traz **princípios → tokens → guidelines → exemplos**. Onde possível, há **snippets de código** (CSS/JS/JSON) para implementação direta.

---

## 1. Essência da Marca

### 1.1 Propósito & Manifesto

- **Propósito:** Conectar jovens ao autoconhecimento, capacitação e oportunidades reais de trabalho por meio de jogos e dados.
- **Manifesto resumido:** Transformamos o futuro do trabalho com jogos que revelam potenciais e dados que aceleram decisões. Somos ponte entre juventudes e mercado, com tecnologia inclusiva e impacto social.

### 1.2 Pilares de Valor (Mapeie-os em UX/Conteúdo)

1. **Autoconhecimento** – jogos baseados em psicologia e testes comportamentais.
2. **Capacitação** – desafios para soft e hard skills.
3. **Conexão** – integração com plataformas de emprego e stakeholders.
4. **Dados & Insights** – relatórios individuais e dashboards institucionais para decisões rápidas.
5. **Inclusão & Acessibilidade** – tecnologia acessível, web-first e mobile friendly.

### 1.3 Princípios de Design

- **Lúdico com propósito:** estética de games, mas guiada por clareza e funcionalidade.
- **Dados visíveis, decisões fáceis:** resumir complexidade em visualizações acionáveis.
- **Inclusivo por padrão:** acessibilidade AA+, linguagem neutra e representativa.
- **Modular & escalável:** componentes reutilizáveis, tokens centralizados.
- **Transparente & confiável:** feedbacks claros, estados explícitos e microcopy empática.

---

## 2. Identidade Visual

### 2.1 Logotipo

- **Versões:** horizontal (preferencial), vertical/empilhada, ícone.
- **Área de respiro:** mínimo = altura da letra "G" ao redor.
- **Tamanhos mínimos:**
  - Web: 48px de altura
  - Mobile: 32px de altura
- **Uso incorreto:** não distorcer, rotacionar, aplicar sombras exageradas, alterar cores fora da paleta, sobrepor em fundos sem contraste.

> *Sugestão*: Documentar no Figma as variantes e export presets (SVG/App icons).

### 2.2 Paleta de Cores

**Primárias**

- `Gubi Purple` **#5A439B** (Brand core)
- `Gubi Purple Dark` **#4A3784** (Hover/press, headings escuros)
- `Gubi Pink` **#E85A9B** (Acentos emocionais, CTAs secundários)

**Secundárias de apoio**

- `Gubi Light Blue` **#00A9E0** (Dados, gráficos, links)
- `Gubi Dark Blue` **#2C3E50** (Textos escuros, backgrounds profundos)

**Neutros** (exemplo – ajuste conforme necessidade de contraste)

- `Gubi Black` #111111
- `Gubi Gray 900` #1F2933
- `Gubi Gray 700` #3E4C59
- `Gubi Gray 500` #7B8794
- `Gubi Gray 300` #CBD2D9
- `Gubi Gray 100` #F5F7FA
- `Gubi White` #FFFFFF

**Feedback States**

- Success: #34C759
- Warning: #FFCC00
- Error: #FF3B30
- Info: #00A9E0

> **Contraste mínimo:** 4.5:1 para textos; 3:1 para ícones/gráficos essenciais (WCAG AA). Testar combinações críticas (texto roxo sobre fundo rosa etc.).

#### Tokens de cor (CSS variables)

```css
:root {
  /* Brand */
  --color-purple: #5A439B;
  --color-purple-dark: #4A3784;
  --color-pink: #E85A9B;
  --color-light-blue: #00A9E0;
  --color-dark-blue: #2C3E50;

  /* Neutrals */
  --color-black: #111111;
  --color-gray-900: #1F2933;
  --color-gray-700: #3E4C59;
  --color-gray-500: #7B8794;
  --color-gray-300: #CBD2D9;
  --color-gray-100: #F5F7FA;
  --color-white: #FFFFFF;

  /* Feedback */
  --color-success: #34C759;
  --color-warning: #FFCC00;
  --color-error: #FF3B30;
  --color-info: #00A9E0;
}
```

### 2.3 Tipografia

- **Primária (UI):** `Inter` (ou similar system sans: SF Pro / Roboto) – legível, neutra, moderna.
- **Secundária (Brand/Headers opcionais):** `Golos Text`, `Poppins` ou `Space Grotesk` (forte, geométrica).

**Escala tipográfica (exemplo)**

| Token       | Uso                | Desktop   | Mobile    |
| ----------- | ------------------ | --------- | --------- |
| `display-1` | Hero / Claims      | 56px / 64 | 40px / 48 |
| `h1`        | Títulos de página  | 40px / 48 | 32px / 40 |
| `h2`        | Seções             | 32px / 40 | 28px / 36 |
| `h3`        | Subtítulos         | 24px / 32 | 22px / 30 |
| `body-1`    | Texto padrão       | 16px / 24 | 16px / 24 |
| `body-2`    | Texto secundário   | 14px / 20 | 14px / 20 |
| `caption`   | Rótulos / legendas | 12px / 16 | 12px / 16 |

```css
:root {
  --font-family-base: 'Inter', system-ui, sans-serif;
  --font-family-accent: 'Space Grotesk', sans-serif;

  --font-size-display-1: 56px;
  --line-height-display-1: 64px;
  --font-size-h1: 40px;
  --line-height-h1: 48px;
  --font-size-h2: 32px;
  --line-height-h2: 40px;
  --font-size-h3: 24px;
  --line-height-h3: 32px;
  --font-size-body-1: 16px;
  --line-height-body-1: 24px;
  --font-size-body-2: 14px;
  --line-height-body-2: 20px;
  --font-size-caption: 12px;
  --line-height-caption: 16px;
}
```

### 2.4 Iconografia & Ilustrações

- **Estilo:** flat-2.5D, contornos suaves, cantos arredondados, sombras discretas.
- **Peso:** 2px / 24px grid base.
- **Metáforas visuais:** jogos, progresso, dados (gráficos), inclusão/diversidade.
- **Banco recomendado:** Eva Icons / Remix + ícones custom para mecânicas de game.

### 2.5 Fotografia & Mockups

- Mostrar **jovens diversos** (gênero, raça, condição social, neurodiversidade), em contextos de estudo, trabalho e tecnologia.
- Usar overprints com o roxo/pink para coesão.

---

## 3. Fundamentos de Layout

### 3.1 Grid & Breakpoints

- **Grid base:** 8px (spacing unit).
- **Colunas (web):** 12 cols / gutter 24px / margin 32px.
- **Mobile:** 4 cols / gutter 16px / margin 16px.

**Breakpoints sugeridos**

```
xs: 0–479px
sm: 480–767px
md: 768–1023px
lg: 1024–1439px
xl: 1440–1919px
xxl: 1920+
```

### 3.2 Spacing Scale

```
0 / 2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96
```

### 3.3 Corner Radius

- XS: 2px
- SM: 4px
- MD: 8px (default)
- LG: 16px
- XL: 24px (cards grandes, modais)

### 3.4 Elevation / Shadows

- Level 0: none
- Level 1: 0 1px 2px rgba(0,0,0,0.08)
- Level 2: 0 2px 8px rgba(0,0,0,0.10)
- Level 3: 0 4px 16px rgba(0,0,0,0.12)

### 3.5 Motion & Microinterações

- **Duração padrão:** 150–250ms (transições de hover/press).
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out suave).
- **Preferência do usuário:** respeitar `prefers-reduced-motion`.

---

## 4. Tokens (JSON para Devs)

```json
{
  "color": {
    "purple": "#5A439B",
    "purpleDark": "#4A3784",
    "pink": "#E85A9B",
    "lightBlue": "#00A9E0",
    "darkBlue": "#2C3E50",
    "gray": {
      "100": "#F5F7FA",
      "300": "#CBD2D9",
      "500": "#7B8794",
      "700": "#3E4C59",
      "900": "#1F2933"
    },
    "black": "#111111",
    "white": "#FFFFFF",
    "success": "#34C759",
    "warning": "#FFCC00",
    "error": "#FF3B30",
    "info": "#00A9E0"
  },
  "radius": {"xs": 2, "sm": 4, "md": 8, "lg": 16, "xl": 24},
  "space": [0,2,4,8,12,16,24,32,40,48,64,80,96],
  "font": {
    "base": "Inter, system-ui, sans-serif",
    "accent": "Space Grotesk, sans-serif",
    "sizes": {
      "display1": 56,
      "h1": 40,
      "h2": 32,
      "h3": 24,
      "body1": 16,
      "body2": 14,
      "caption": 12
    },
    "lineHeights": {
      "display1": 64,
      "h1": 48,
      "h2": 40,
      "h3": 32,
      "body1": 24,
      "body2": 20,
      "caption": 16
    }
  },
  "elevation": {
    "0": "none",
    "1": "0 1px 2px rgba(0,0,0,0.08)",
    "2": "0 2px 8px rgba(0,0,0,0.10)",
    "3": "0 4px 16px rgba(0,0,0,0.12)"
  },
  "motion": {
    "duration": {"fast": 150, "base": 200, "slow": 300},
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
  }
}
```

---

## 5. Componentes de UI

> Cada componente deve ter: **anatomia, estados, tamanhos, tokens usados, guidelines de acessibilidade, exemplos de uso.**

### 5.1 Botões (Button)

**Tipos:** Primary, Secondary, Tertiary (texto), Destructive, Ghost/Icon only.\
**Tamanhos:** LG (48px), MD (40px), SM (32px).\
**Estados:** default, hover, active/pressed, focus-visible, disabled, loading.

```css
.btn-primary {
  background: var(--color-purple);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: 0 var(--space-24);
  height: 48px;
  box-shadow: var(--elevation-1);
}
.btn-primary:hover { background: var(--color-purple-dark); }
.btn-primary:disabled { opacity: .5; cursor: not-allowed; }
```

**Acessibilidade**:

- Área de clique mínima 44x44px.
- Foco visível (outline 2px `--color-light-blue`).

### 5.2 Inputs & Forms

- **Tipos:** text, password, select, textarea, checkbox, radio, switch, file upload.
- **Estados:** default, hover, focus, error, disabled, filled.
- **Label sempre visível**, placeholder auxiliar.
- **Mensagens de erro** claras e específicas.

### 5.3 Cards

- Usados para blocos de informação (jogos, relatórios, oportunidades).
- Variantes: básico, com imagem, com gráfico, interativo (hover elevates).
- Padding: MD (24px) / LG (32px).
- Radius: LG/XL, sombra Level 1.

### 5.4 Tabelas & Data Grids

- **Ordenação, filtros e paginação** acessíveis.
- Linhas zebradas (Gray 100/White).
- Cabeçalhos sticky em listas longas.
- Responsivo: colapsar para cards em mobile.

### 5.5 Listas, Chips & Tags

- Usar `Chips` para soft skills, interesses.
- `Tags` de status (success, warning, error, info) com cor de fundo clara e texto contrastante.

### 5.6 Progress / Gamification Elements

- Barras de progresso, badges de conquistas, níveis.
- Usar animações suaves na conclusão (200–300ms).
- Texto alternativo descrevendo progresso (ex: "75% do módulo concluído").

### 5.7 Modais & Overlays

- Dimensão máxima: 720px, scroll interno se exceder.
- Fechar com `Esc`, botão "X", clique fora (confirmar se não há perda de dados).
- Foco preso dentro do modal (trap focus).

### 5.8 Alerts & Toasts

- Durar 4–6s (a menos que exijam ação).
- Variantes: success, error, warning, info.
- Devem ser lidos por leitores de tela (`role="alert"`).

### 5.9 Navegação

- **Header fixo** com logo, menu usuário, notificações.
- **Side Nav** colapsável para dashboards/admin.
- **Breadcrumbs** quando profundidade > 2.
- **Tabs** para seções relacionadas.

### 5.10 Gráficos & Visualizações de Dados

- Paleta adaptada (cores brand + tons neutros).
- Sempre incluir **legendas, valores, tooltips**.
- Escolher o gráfico adequado (barras para comparações, linhas para tempo, pizza só para até 5 categorias).

---

## 6. Padrões de Experiência (UX Patterns)

### 6.1 Fluxo do Jovem

1. Cadastro Digital → 2. Jogos/Assessments → 3. Relatório Individual → 4. Oportunidades.\
   **Padrões:** onboarding gamificado, feedback instantâneo, salvamento automático.

### 6.2 Fluxo da Empresa/Instituição

1. Login → 2. Dashboard macro (KPIs) → 3. Filtros/Segmentações → 4. Export/Compartilhar relatórios.\
   **Padrões:** busca avançada, export CSV/PDF, permissões de acesso (RBAC).

### 6.3 Acessibilidade & Inclusão

- Contraste AA; size fontes > 16px; navegação por teclado completa.
- Textos alternativos em imagens e ícones significativos.
- Linguagem simples e amigável, evitar jargões técnicos sem explicação.
- Considerar dislexia (fontes com formas claras), daltonismo (não depender só da cor).

### 6.4 Feedback & Estado do Sistema

- Loader skeleton / shimmer em dados.
- Empty states didáticos ("Você ainda não jogou nenhum game. Que tal começar por aqui?").
- Confirm dialogs em ações destrutivas.
- Salvar rascunho automatico para formulários longos.

---

## 7. Tom de Voz & Microcopy

- **Tom:** caloroso, consultivo e confiante.
- **Vocabulário:** acessível, direto, motivador.
- **Evitar:** tecnicismos sem contexto, paternalismo, clichês motivacionais vazios.

**Exemplos**

- CTA para jovens: "Começar meu jogo" (não "Iniciar processo").
- Empty state empresa: "Sem dados por aqui (ainda). Assim que seus jovens concluírem os jogos, você verá os resultados aqui."

---

## 8. Entrega & Governança

### 8.1 Repositório & Versionamento

- Tokens em `/tokens/` (JSON + CSS).
- Documentação em Storybook / Zeroheight / Figma Dev Mode.
- Semântica de versionamento (MAJOR.MINOR.PATCH).

### 8.2 Workflow de Atualização

1. Proposta de mudança (issue)
2. Discussão Design/Dev
3. Protótipo & Testes A11y
4. Merge & Publish tokens
5. Comunicação aos times.

### 8.3 Qualidade & Testes

- Linters para CSS/TS.
- Visual Regression (Chromatic, Percy).
- Testes de acessibilidade automatizados (axe-core), manuais (NVDA/VoiceOver).

---

## 9. Roadmap de Evolução do DS

| Fase | Objetivo             | Entregas                              | Prazo |
| ---- | -------------------- | ------------------------------------- | ----- |
| 1    | Fundamentos & Tokens | Paleta, tipografia, grid, tokens JSON | Mês 1 |
| 2    | Biblioteca Core      | Botões, Inputs, Cards, Modais, Alerts | Mês 2 |
| 3    | Padrões de Dados     | Charts kit, tabelas avançadas         | Mês 3 |
| 4    | Gamification Kit     | Badges, pontos, rankings, progressões | Mês 4 |
| 5    | Documentação A11y    | Checklist, exemplos de code ARIA      | Mês 5 |

---

## 10. Anexos & Referências

- Figma file (Components, Tokens, Doc Pages).
- Storybook URL.
- Guia de Conteúdo (Tom de voz detalhado).
- Testes de contraste e a11y (planilhas).

---

### Próximos passos

1. Validar paleta e tipografia com stakeholders.
2. Criar lib de tokens (Style Dictionary) e publicar em NPM interno.
3. Montar Storybook com 10 componentes principais.
4. Rodar auditoria de acessibilidade inicial em fluxos críticos.
5. Definir owners (Design Ops / Front-end Guild) e cadência de review.

---

**Dúvidas ou ajustes?**\
Liste abaixo o que precisa ser detalhado (ex.: tabelas complexas, componentes de gráfico, guidelines de ilustração). Vamos iterar.

