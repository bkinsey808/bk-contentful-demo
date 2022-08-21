import { Meta, Story } from '@storybook/react';
import React from 'react';

import Custom from '../../src/components/custom/Custom';
import { CustomProps } from '../../src/generated/types';

export default {
  component: Custom,
  title: 'Components/Custom',
  argTypes: {
    content_name: {
      table: {
        category: 'Contentful',
      },
    },
    theme: {
      options: ['Global', 'Monochrome', 'BlueTint', 'DarkMonochrome'],
      control: { type: 'select' },
    },
    '--token--primary': {
      table: {
        category: 'Colors',
      },
      control: 'color',
    },
    '--token--primary-background': {
      table: {
        category: 'Colors',
      },
      control: 'color',
    },
    '--token--accent': {
      table: {
        category: 'Colors',
      },
      control: 'color',
    },
    '--token--accent-background': {
      table: {
        category: 'Colors',
      },
      control: 'color',
    },
    '--token--radius-default': {
      control: { type: 'range', min: 0, max: 4, step: 0.125 },
    },
  },
} as Meta<CustomProps>;

const CustomTemplate: Story<CustomProps> = (args) => {
  if (args['--token--radius-default']) {
    args['--token--radius-default'] += 'rem';
  }
  return <Custom {...args} />;
};

export const AccentColorDisplay = CustomTemplate.bind({});
AccentColorDisplay.args = {
  content_name: 'Accent Color Display',
};
