import { useEffect, useId, useRef, type ReactNode } from 'react'
import { Button } from '../atoms/Button'

export interface ModalProps {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
}

/**
 * Organismo construido sobre <dialog> nativo: el navegador ya maneja el foco,
 * la tecla Escape y el bloqueo del contenido de fondo.
 */
export function Modal({ open, title, onClose, children, footer }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal?.()
    if (!open && dialog.open) dialog.close?.()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => {
        // Clic en el backdrop (fuera de la caja) cierra.
        if (e.target === ref.current) onClose()
      }}
      className="m-auto w-full max-w-md rounded-ui bg-white p-0 text-slate-900 shadow-xl backdrop:bg-slate-950/50 dark:bg-slate-900 dark:text-slate-100"
    >
      {open && (
        <div className="space-y-4 p-6">
          <header className="flex items-start justify-between gap-4">
            <h2 id={titleId} className="text-lg font-semibold">
              {title}
            </h2>
            <Button variant="ghost" size="sm" aria-label="Cerrar" onClick={onClose}>
              ✕
            </Button>
          </header>
          <div className="text-sm text-slate-600 dark:text-slate-300">{children}</div>
          {footer && <footer className="flex justify-end gap-2">{footer}</footer>}
        </div>
      )}
    </dialog>
  )
}
