import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

export default {
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A simple button component which has four variants',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'This param control style button and has four variants ',
    },
    disabled: {
      description: 'This param responsable for button style and ations',
      control: 'boolean',
      defaultValue: false,
    },
    button_name: {
      description: 'This name for any button',
      defaultValue: 'Send',
    },
    sx: {
      description: ' This param is waiting object {width: number, height:number}',
    },
  },
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    buttonName: 'Send',
    disabled: false,
    variant: 'primary',
    sx: { width: 200, height: 50 },
  },
}
export const White: Story = {
  args: {
    buttonName: 'Send',
    disabled: false,
    variant: 'white',
    sx: { width: 200, height: 50 },
  },
}
export const Transparent: Story = {
  args: {
    buttonName: 'Send',
    disabled: false,
    variant: 'transparent',
    sx: { width: 200, height: 50 },
  },
}
export const Outlined: Story = {
  args: {
    buttonName: 'Send',
    disabled: false,
    variant: 'outlined',
    sx: { width: 200, height: 50 },
  },
}
