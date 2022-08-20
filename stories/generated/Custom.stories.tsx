import { Meta, Story } from '@storybook/react';
import React from 'react';

import Custom from '../../src/components/custom/Custom';
import { CustomProps } from '../../src/generated/types';

export default {
  component: Custom,
  title: 'Components/Custom',
  argTypes: {
    theme: {
      options: ['Global', 'Monochrome', 'BlueTint', 'DarkMonochrome'],
      control: { type: 'select' },
    },
    '--token--primary': { control: 'color' },
    '--token--primary-background': { control: 'color' },
    '--token--accent': { control: 'color' },
    '--token--accent-background': { control: 'color' },
  },
} as Meta<CustomProps>;

const CustomTemplate: Story<CustomProps> = (args) => {
  return <Custom {...args} />;
};

export const AccentColorDisplay = CustomTemplate.bind({});
AccentColorDisplay.args = {
  content_name: 'Accent Color Display',
};
