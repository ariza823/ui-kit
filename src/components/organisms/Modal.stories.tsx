import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../atoms/Button'
import { Modal } from './Modal'

const meta = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta

function ModalDemo() {
  const [open, setOpen] = useState(false)
  return (
      <>
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
      </>
  )
}

export const Confirmacion: StoryObj = { render: () => <ModalDemo /> }
