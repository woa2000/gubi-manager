# Design System Gubi - Implementação

## 🎯 Visão Geral

O Design System Gubi foi implementado no projeto seguindo os princípios documentados em `docs/design_system_gubi.md`. Esta implementação inclui tokens de design, componentes reutilizáveis e padrões de experiência consistentes.

## 📁 Estrutura dos Arquivos

```
src/
├── styles/
│   ├── tokens.css         # CSS Variables e utilidades
│   └── tokens.json        # Tokens em JSON para desenvolvedores
├── components/ui/
│   ├── Button.tsx         # Componente de botão atualizado
│   ├── Card.tsx          # Componente de card com sub-componentes
│   ├── Input.tsx         # Componente de input atualizado
│   ├── Alert.tsx         # Componente de alertas
│   ├── Badge.tsx         # Componente de badges/tags
│   ├── Progress.tsx      # Componente de progresso (gamificação)
│   └── index.ts          # Exportações centralizadas
└── app/
    └── design-system/
        └── page.tsx      # Showcase dos componentes
```

## 🎨 Tokens de Design

### Cores Principais
- **Purple**: `#5A439B` (Cor primária da marca)
- **Purple Dark**: `#4A3784` (Hover/pressed states)
- **Pink**: `#E85A9B` (Acentos emocionais)
- **Light Blue**: `#00A9E0` (Dados e links)
- **Dark Blue**: `#2C3E50` (Textos escuros)

### Escala de Cinzas
- **Gray 100**: `#F5F7FA` (Backgrounds claros)
- **Gray 300**: `#CBD2D9` (Bordas)
- **Gray 500**: `#7B8794` (Textos secundários)
- **Gray 700**: `#3E4C59` (Textos)
- **Gray 900**: `#1F2933` (Títulos)

### Estados de Feedback
- **Success**: `#34C759`
- **Warning**: `#FFCC00`
- **Error**: `#FF3B30`
- **Info**: `#00A9E0`

## ⚡ Como Usar

### 1. Importando Componentes

```tsx
import { Button, Card, Input, Alert, Badge, Progress } from '@/components/ui';
```

### 2. Usando Classes Utilitárias

```tsx
// Tipografia
<h1 className="gubi-h1">Título Principal</h1>
<p className="gubi-body-1">Texto padrão</p>

// Cores
<div className="bg-gubi-purple text-gubi-white">
  Conteúdo com cores da marca
</div>

// Espaçamento
<div className="p-gubi-6 mb-gubi-4">
  Padding e margin usando a escala Gubi
</div>

// Border radius
<div className="rounded-gubi-lg">
  Border radius grande (16px)
</div>
```

### 3. Usando CSS Variables

```css
.custom-component {
  background-color: var(--gubi-purple);
  padding: var(--gubi-space-6);
  border-radius: var(--gubi-radius-lg);
  box-shadow: var(--gubi-elevation-2);
  transition: all var(--gubi-duration-base) var(--gubi-easing);
}
```

## 🧩 Componentes Disponíveis

### Button
```tsx
<Button variant="primary" size="lg" icon={Plus}>
  Criar Novo
</Button>

<Button variant="secondary" loading>
  Salvando...
</Button>
```

### Card
```tsx
<Card variant="interactive" padding="lg">
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do conteúdo</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo principal do card
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

### Input
```tsx
<Input
  label="Email"
  type="email"
  leftIcon={Mail}
  placeholder="seu@email.com"
  hint="Usaremos este email para contato"
  required
/>
```

### Alert
```tsx
<Alert variant="success" title="Sucesso!" dismissible onDismiss={handleDismiss}>
  Sua ação foi executada com sucesso.
</Alert>
```

### Badge
```tsx
<Badge variant="purple" size="md">JavaScript</Badge>
<Badge variant="success" size="sm">Completo</Badge>
```

### Progress (Gamificação)
```tsx
<Progress 
  value={75} 
  variant="purple" 
  size="lg" 
  showLabel 
  label="Progresso do Curso"
/>
```

## 🎮 Elementos de Gamificação

O design system inclui componentes específicos para gamificação:

- **Progress**: Barras de progresso com diferentes temas
- **Badge**: Tags para conquistas e habilidades
- **Card interativo**: Cards com hover effects para jogos
- **Cores vibrantes**: Purple e Pink para elementos lúdicos

## 📱 Responsividade

Todos os componentes são responsivos por padrão:

```css
/* Breakpoints Gubi */
--gubi-breakpoint-xs: 0px
--gubi-breakpoint-sm: 480px
--gubi-breakpoint-md: 768px
--gubi-breakpoint-lg: 1024px
--gubi-breakpoint-xl: 1440px
--gubi-breakpoint-xxl: 1920px
```

Use classes do Tailwind com prefixos: `gubi-sm:`, `gubi-md:`, etc.

## ♿ Acessibilidade

Todos os componentes seguem padrões de acessibilidade:

- Contraste mínimo AA (4.5:1)
- Área mínima de toque 44x44px
- Navegação por teclado
- Screen reader support
- Focus visível
- Suporte a `prefers-reduced-motion`

## 🔄 Migração de Componentes Existentes

### Antes (Legacy)
```tsx
<button className="bg-woof-orange text-white px-4 py-2 rounded">
  Clique aqui
</button>
```

### Depois (Design System)
```tsx
<Button variant="primary">
  Clique aqui
</Button>
```

## 🚀 Visualizando o Design System

Para ver todos os componentes em ação, acesse:
```
http://localhost:3000/design-system
```

Esta página showcase demonstra:
- Tipografia completa
- Paleta de cores
- Todos os componentes
- Estados e variações
- Exemplos de uso

## 🔧 Configuração do Tailwind

O Tailwind foi configurado para incluir os tokens Gubi:

```javascript
// tailwind.config.mjs
extend: {
  colors: {
    'gubi-purple': '#5A439B',
    'gubi-pink': '#E85A9B',
    // ... outros tokens
  },
  fontFamily: {
    'gubi-base': ['Inter', 'system-ui', 'sans-serif'],
    'gubi-accent': ['Space Grotesk', 'Poppins', 'sans-serif'],
  },
  // ... spacing, radius, shadows, etc.
}
```

## 📖 Próximos Passos

1. **Migrar componentes existentes** para usar o Design System
2. **Adicionar mais componentes** conforme necessário (Modal, Dropdown, etc.)
3. **Implementar temas** (dark mode)
4. **Criar Storybook** para documentação interativa
5. **Adicionar testes visuais** (Chromatic)

## 🤝 Contribuindo

Ao adicionar novos componentes:

1. Siga os tokens do Design System
2. Implemente acessibilidade
3. Adicione documentação
4. Teste responsividade
5. Atualize o showcase

---

**Design System Gubi v1.0** - Transformando o futuro do trabalho com jogos e dados ✨
