# Plano de Correção - Design System Gubi

## Problema Identificado

A formatação dos componentes foi perdida devido a incompatibilidade entre o Tailwind CSS v4 e as classes customizadas do Design System Gubi.

### Diagnóstico Detalhado

1. **Versão do Tailwind**: Projeto usa Tailwind CSS v4.1.11
2. **Classes Customizadas**: Componentes usam classes como `gubi-purple`, `gubi-space-6`, `rounded-gubi-lg`
3. **Configuração**: O `tailwind.config.mjs` está configurado para Tailwind v3
4. **CSS Tokens**: Arquivo `tokens.css` define variáveis CSS que não estão sendo aplicadas

### Problemas Específicos

1. **Classes de Cor**: `bg-gubi-purple`, `text-gubi-white` não são reconhecidas
2. **Classes de Espaçamento**: `p-gubi-6`, `m-gubi-4` não funcionam
3. **Classes de Border Radius**: `rounded-gubi-lg` não é aplicada
4. **Tipografia**: Classes `gubi-h1`, `gubi-body-1` não funcionam
5. **Shadows**: `shadow-gubi-1`, `shadow-gubi-2` não são aplicadas

## Solução Proposta

### Fase 1: Correção Imediata (Compatibilidade)

1. **Atualizar configuração do Tailwind** para v4
2. **Converter classes customizadas** para usar CSS variables
3. **Corrigir componentes** para usar classes válidas
4. **Testar build** e verificar funcionamento

### Fase 2: Otimização

1. **Refinar sistema de design**
2. **Melhorar performance**
3. **Documentar mudanças**

## Implementação

### 1. Correção do tailwind.config.mjs

**Problema**: Configuração para v3, precisa ser adaptada para v4

**Solução**: Atualizar sintaxe e estrutura da configuração

### 2. Correção dos Componentes

**Problema**: Classes como `bg-gubi-purple` não existem

**Solução**: Usar CSS variables ou criar utility classes válidas

### 3. Correção do CSS

**Problema**: Variables CSS não estão sendo aplicadas pelo Tailwind

**Solução**: Integrar corretamente com o sistema de tokens

## Cronograma

- [ ] **Etapa 1** (Imediato): Corrigir configuração do Tailwind
- [ ] **Etapa 2** (15 min): Atualizar componentes Button, Input, Card
- [ ] **Etapa 3** (15 min): Corrigir página de login
- [ ] **Etapa 4** (10 min): Testar e validar
- [ ] **Etapa 5** (10 min): Documentar mudanças

**Tempo estimado total**: 50 minutos

## Arquivos Afetados

### Principais
- `tailwind.config.mjs` - Configuração principal
- `src/styles/tokens.css` - Sistema de tokens
- `src/app/globals.css` - Estilos globais

### Componentes
- `src/components/ui/Button.tsx`
- `src/components/ui/Input.tsx` 
- `src/components/ui/Card.tsx`
- `src/components/ui/Alert.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/Progress.tsx`

### Páginas
- `src/app/login/page.tsx`
- `src/app/design-system/page.tsx`

## Próximos Passos

1. Executar correções na configuração
2. Atualizar componentes
3. Testar funcionamento
4. Validar design visual
5. Documentar processo

## Status

🔴 **CRÍTICO** - Sistema de design não funcional
⚡ **PRIORIDADE ALTA** - Correção imediata necessária
