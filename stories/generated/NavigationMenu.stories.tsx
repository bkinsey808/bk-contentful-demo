import { Meta, Story } from '@storybook/react';
import React from 'react';

import NavigationMenu from '../../src/components/navigationMenu/NavigationMenu';
import { NavigationMenuProps } from '../../src/generated/types';

export default {
  component: NavigationMenu,
  title: 'Components/NavigationMenu',
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
  ],
};
