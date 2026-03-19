

## Reverter headlines e colorir eyebrows de vermelho

### Mudanças

**1. `src/index.css`** — Remover `text-primary` das classes `.text-display`, `.text-h1` e `.text-h2`, voltando à cor padrão (foreground/navy). Adicionar `text-primary` na classe `.text-label` para que eyebrows fiquem vermelhas por padrão.

**2. 8 componentes com eyebrows** — Trocar `text-muted-foreground` por `text-primary` nas eyebrows (ou simplesmente remover `text-muted-foreground` já que `.text-label` terá `text-primary` por padrão):
- `Coverages.tsx`
- `BusinessCoverages.tsx`
- `FamilyCoverages.tsx`
- `CoverageCards.tsx`
- `Consulting.tsx`
- `Testimonials.tsx`
- `Blog.tsx`
- `Foundation.tsx`

### Resultado
- Headlines voltam a navy escuro (cor do foreground)
- Eyebrows ficam vermelhas (text-primary)
- Padrão estabelecido no design system via CSS

