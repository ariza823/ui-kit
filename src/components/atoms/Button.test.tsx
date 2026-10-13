import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('llama onClick al hacer clic', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Guardar</Button>)
    await userEvent.click(screen.getByRole('button', { name: 'Guardar' }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('en loading se deshabilita y muestra el spinner', () => {
    render(<Button loading>Guardar</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
    expect(screen.getByRole('status', { name: 'Cargando' })).toBeInTheDocument()
  })

  it('por defecto es type="button" para no enviar formularios por accidente', () => {
    render(<Button>Ok</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
})
