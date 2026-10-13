import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'Estado' },
  argTypes: { tone: { control: 'select', options: ['neutral', 'success', 'warning', 'danger', 'brand'] } },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}
export const Success: Story = { args: { tone: 'success', children: 'Activo' } }
export const Warning: Story = { args: { tone: 'warning', children: 'Pendiente' } }
export const Danger: Story = { args: { tone: 'danger', children: 'Rechazado' } }
