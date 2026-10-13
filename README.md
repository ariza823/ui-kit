# UI Kit

Librería de componentes React organizada con **Atomic Design**, documentada en Storybook y con tests.

**Storybook:** https://ariza823.github.io/ui-kit/

## Componentes

| Nivel | Componentes |
| --- | --- |
| Átomos | `Button` (4 variantes, 3 tamaños, estado loading), `Input`, `Badge`, `Spinner` |
| Moléculas | `FormField` (label + input + mensaje con ids accesibles conectados) |
| Organismos | `Modal` (sobre `<dialog>` nativo), `LoginForm` (validación y estado de envío) |

## Stack

React 19 · TypeScript · Tailwind CSS v4 · Storybook 8 (+ addon a11y) · Vitest · Testing Library

## Decisiones

- Los colores de marca son tokens en `@theme` (`src/index.css`); cambiar la marca no obliga a tocar componentes.
- Modo oscuro con la clase `dark` en `<html>`, seleccionable desde la barra de Storybook.
- `Button` es `type="button"` por defecto para no enviar formularios sin querer.
- El `Modal` usa `<dialog>`: el navegador ya maneja foco, `Escape` y el fondo inerte.

## Scripts

```bash
npm install
npm run storybook        # documentación en http://localhost:6006
npm test
npm run dev              # playground rápido
```
