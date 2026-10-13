import { useState, type FormEvent } from 'react'
import { Button } from '../atoms/Button'
import { FormField } from '../molecules/FormField'

export interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => Promise<void> | void
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = String(form.get('email') ?? '')
    const password = String(form.get('password') ?? '')

    const next: typeof errors = {}
    if (!EMAIL_RE.test(email)) next.email = 'Escribe un correo válido'
    if (password.length < 8) next.password = 'Mínimo 8 caracteres'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setLoading(true)
    try {
      await onSubmit({ email, password })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <FormField label="Correo" name="email" type="email" autoComplete="email" error={errors.email} />
      <FormField
        label="Contraseña"
        name="password"
        type="password"
        autoComplete="current-password"
        hint="Mínimo 8 caracteres"
        error={errors.password}
      />
      <Button type="submit" loading={loading} className="w-full">
        Ingresar
      </Button>
    </form>
  )
}
