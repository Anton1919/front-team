import { Meta, StoryObj } from '@storybook/react'

import { PasswordInput } from './index'

export default {
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component: 'A password input component',
      },
    },
  },
  argTypes: {},
} as Meta<typeof PasswordInput>

type Story = StoryObj<typeof PasswordInput>

export const inputPassword: Story = {
  render: () => (
    <PasswordInput name="pass" placeholder="Input base" xType="outline" label="password" />
  ),
}
