import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

export default {
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: 'A simple textarea for is using in app',
      },
    },
  },
  argTypes: {
    disabled: {
      description: 'If disabled true so class name desabled',
      options: [true, false],
      defaultValue: true,
      control: 'boolean'
    },
    error: {
      description: 'If error that text and border become red color ',
      control: 'text'
    },
    name: {
      description: 'This param is requared for formik for example',
      control: 'text'
    },
    sx: {
      description: ' This param is waiting object {width: number, height:number}'
    },
    placeholder: {
      description: 'Placeholder for textarea',
      control: 'text'
    },
    cols: {
      description: 'Count columns for textarea',
      control: 'number'
    },
    rows: {
      description: 'Count rows for textarea',
      control: 'number'
    }
  },
} as Meta<typeof Textarea>;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: '1',
    disabled: false,
    label: 'Default',
    style: { width: 300, height: 100 },
    name: 'Default',
    placeholder: 'Default placeholder'
  }
}
export const Error: Story = {
  args: {
    id: '2',
    disabled: false,
    label: 'Error',
    style: { width: 300, height: 100 },
    name: 'Default',
    placeholder: 'Error placeholder',
    error: 'New error message'
  }
};
export const Disable: Story = {
  args: {
    id: '3',
    disabled: true,
    label: 'Disable',
    style: { width: 300, height: 100 },
    name: 'Disable',
    placeholder: 'Disable placeholder'
  }
};
