
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'shared/button/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A simple button component which has four variants',
      },
    },
  },
  argTypes: {
    color: {
      description: 'Color of the text and the background with border',
      control: 'Color of the text and the background with border',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  button_name: 'Send',
  variant: 'primary',
  sx: { width: 300 }
};

export const White = Template.bind({});
White.args = {
  button_name: 'Send',
  variant: 'white',
};

export const Transparent = Template.bind({});
Transparent.args = {
  button_name: 'Send',
  variant: 'transparent'
};

export const Outlined = Template.bind({});
Outlined.args = {
  button_name: 'Send',
  variant: 'outlined'
};
