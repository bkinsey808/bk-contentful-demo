import { Meta, Story } from '@storybook/react';
import React from 'react';

import NavigationMenu from '../../src/components/navigationMenu/NavigationMenu';
import { NavigationMenuProps } from '../../src/generated/types';

export default {
  component: NavigationMenu,
  title: 'Components/NavigationMenu',
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
} as Meta<NavigationMenuProps>;

const NavigationMenuTemplate: Story<NavigationMenuProps> = (args) => {
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
