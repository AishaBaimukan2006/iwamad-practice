# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype):  / (Home) → /posts (Posts) → /posts/:id (Post Detail) → * (404)
Components → React files:     PostCard → src/components/ui/Card.tsx   Button → src/components/ui/Button.tsx   Tag → src/components/ui/Tag.tsx
Button variants → prop:       variant = 'primary' | 'secondary'
PostCard layout:              direction column  gap 16px  padding 24px  radius 16px
Breakpoint change:            phone 1 column, desktop 2 columns; header stacked to row
Tokens (all ten):             
color/primary = #2563eb
color/text-main = #111827
color/text-secondary = #94a3b8 (Fixed to #64748b for a11y)
color/bg-main = #f9fafb
color/bg-card = #ffffff
color/border = #e2e8f0
space/small = 8px
space/medium = 16px
space/large = 24px
radius/main = 8px