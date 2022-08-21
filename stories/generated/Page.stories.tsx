import { Meta, Story } from '@storybook/react';
import React from 'react';

import Page from '../../src/components/page/Page';
import { PageProps } from '../../src/generated/types';

export default {
  component: Page,
  title: 'Components/Page',
  argTypes: {
    content_title: {
      table: {
        category: 'Contentful',
      },
    },
    content_slug: {
      table: {
        category: 'Contentful',
      },
    },
    content_pageTemplateComponent: {
      table: {
        category: 'Contentful',
      },
    },
    content_content: {
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
} as Meta<PageProps>;

const PageTemplate: Story<PageProps> = (args) => {
  if (args['--token--radius-default']) {
    args['--token--radius-default'] += 'rem';
  }
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
