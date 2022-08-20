import { Meta, Story } from '@storybook/react';
import React from 'react';

import Page from '../../src/components/page/Page';
import { PageProps } from '../../src/generated/types';

export default {
  component: Page,
  title: 'Components/Page',
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
} as Meta<PageProps>;

const PageTemplate: Story<PageProps> = (args) => {
  return <Page {...args} />;
};

export const home = PageTemplate.bind({});
home.args = {
  content_title: 'Home Page',
  content_slug: 'home',
  content_pageTemplateComponent: { type: 'PageTemplate', id: 'Default Page Template' },
  content_content: [
    { type: 'Banner', id: 'Home Banner' },
    { type: 'NavigationMenu', id: 'Header Menu' },
  ],
};

export const about = PageTemplate.bind({});
about.args = {
  content_title: 'About Page',
  content_slug: 'about',
  content_pageTemplateComponent: { type: 'PageTemplate', id: 'Default Page Template' },
  content_content: [
    { type: 'Banner', id: 'About Banner' },
    { type: 'Custom', id: 'Accent Color Display' },
  ],
};
