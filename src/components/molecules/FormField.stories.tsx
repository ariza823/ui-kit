import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from './FormField'

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: { label: 'Correo', placeholder: 'tu@correo.com' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithHint: Story = { args: { hint: 'Nunca lo compartimos' } }
export const WithError: Story = { args: { error: 'Escribe un correo válido', defaultValue: 'correo@' } }
