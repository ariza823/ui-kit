import type { Preview } from '@storybook/react'
import '../src/index.css'

const preview: Preview = {
  parameters: { layout: 'centered' },
  globalTypes: {
    theme: {
      description: 'Tema',
      toolbar: { icon: 'mirror', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, { globals }) => {
      document.documentElement.classList.toggle('dark', globals.theme === 'dark')
      document.body.style.background = globals.theme === 'dark' ? '#020617' : '#fff'
      return <Story />
    },
  ],
}
export default preview
