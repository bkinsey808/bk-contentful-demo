import { Meta, Story } from '@storybook/react';
import React from 'react';

import NavigationMenu from '../../src/components/navigationMenu/NavigationMenu';
import { NavigationMenuProps } from '../../src/generated/types';

export default {
  component: NavigationMenu,
  title: 'Components/NavigationMenu',
  argTypes: {
    content_componentName: {
      table: {
        category: 'Contentful',
      },
    },
    content_componentType: {
      table: {
        category: 'Contentful',
      },
    },
    content_navigationMenuItems: {
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
} as Meta<NavigationMenuProps>;

const NavigationMenuTemplate: Story<NavigationMenuProps> = (args) => {
  if (args['--token--radius-default']) {
    args['--token--radius-default'] += 'rem';
  }
  return <NavigationMenu {...args} />;
};

export const HeaderMenu = NavigationMenuTemplate.bind({});
HeaderMenu.args = {
  content_componentName: 'Header Menu',
  content_componentType: 'NavigationMenu',
  content_navigationMenuItems: [
    { type: 'NavigationMenuItem', id: 'Home Navigation Menu Item' },
    { type: 'NavigationMenuItem', id: 'About Navigation Menu Item' },
    { type: 'NavigationMenuItem', id: 'Theme' },
  ],
};
