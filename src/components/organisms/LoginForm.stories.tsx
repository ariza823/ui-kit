import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { LoginForm } from './LoginForm'

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  args: { onSubmit: fn(() => new Promise<void>((r) => setTimeout(r, 1000))) },
} satisfies Meta<typeof LoginForm>

export default meta
export const Default: StoryObj<typeof meta> = {}
