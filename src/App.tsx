import { useState } from 'react'
import { Badge, Button, FormField, LoginForm, Modal } from '.'

// Playground rápido para `npm run dev`. La documentación completa está en Storybook.
export default function App() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="mx-auto min-h-screen max-w-3xl space-y-10 bg-white p-8 dark:bg-slate-950">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold dark:text-white">UI Kit · Playground</h1>
          <Button variant="secondary" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Modo claro' : 'Modo oscuro'}
          </Button>
        </header>
        <section className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button loading>Guardando</Button>
        </section>
        <section className="flex gap-2">
          <Badge>Neutral</Badge>
          <Badge tone="success">Activo</Badge>
          <Badge tone="warning">Pendiente</Badge>
          <Badge tone="danger">Error</Badge>
        </section>
        <section className="max-w-sm">
          <FormField label="Nombre" placeholder="Tu nombre" hint="Como aparece en tu documento" />
        </section>
        <LoginForm onSubmit={() => new Promise((r) => setTimeout(r, 1000))} />
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>
        <Modal
          open={open}
          title="¿Eliminar proyecto?"
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button variant="danger" onClick={() => setOpen(false)}>Eliminar</Button>
            </>
          }
        >
          Esta acción no se puede deshacer.
        </Modal>
      </main>
    </div>
  )
}
