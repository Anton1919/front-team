import { Meta, StoryObj } from '@storybook/react'

import { BaseInput } from './index'

export default {
  component: BaseInput,
  parameters: {
    docs: {
      description: {
        component: 'A simple input component',
      },
    },
  },
  argTypes: {},
} as Meta<typeof BaseInput>

type Story = StoryObj<typeof BaseInput>

export const InputBase: Story = {
  render: () => <BaseInput name="input" placeholder="Input base" xType="base" label="Login" />,
}

export const InputOutline: Story = {
  render: () => (
    <BaseInput name="input" placeholder="Input outlined" xType="outline" label="outlined" />
  ),
}

export const ErrorInput: Story = {
  render: () => (
    <BaseInput
      name="input"
      placeholder="Input outlined"
      xType="outline"
      label="outlined"
      error="Error"
    />
  ),
}
