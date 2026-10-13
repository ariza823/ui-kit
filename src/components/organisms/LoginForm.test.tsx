import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('muestra errores y no envía si los datos son inválidos', async () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)
    await userEvent.type(screen.getByLabelText('Correo'), 'malo')
    await userEvent.click(screen.getByRole('button', { name: 'Ingresar' }))
    expect(screen.getByText('Escribe un correo válido')).toBeInTheDocument()
    expect(screen.getByLabelText('Correo')).toHaveAttribute('aria-invalid', 'true')
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('envía los datos cuando son válidos', async () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)
    await userEvent.type(screen.getByLabelText('Correo'), 'nico@correo.com')
    await userEvent.type(screen.getByLabelText('Contraseña'), '12345678')
    await userEvent.click(screen.getByRole('button', { name: 'Ingresar' }))
    expect(onSubmit).toHaveBeenCalledWith({ email: 'nico@correo.com', password: '12345678' })
  })
})
