import { Meta, Story } from '@storybook/react';
import React from 'react';

import Banner from '../../src/components/banner/Banner';
import { BannerProps } from '../../src/generated/types';

export default {
  component: Banner,
  title: 'Components/Banner',
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
    content_height: {
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
} as Meta<BannerProps>;

const BannerTemplate: Story<BannerProps> = (args) => {
  if (args['--token--radius-default']) {
    args['--token--radius-default'] += 'rem';
  }
  return <Banner {...args} />;
};

export const HomeBanner = BannerTemplate.bind({});
HomeBanner.args = {
  content_componentName: 'Home Banner',
  content_componentType: 'Banner',
  content_height: '250px',
};

export const AboutBanner = BannerTemplate.bind({});
AboutBanner.args = {
  content_componentName: 'About Banner',
  content_componentType: 'Banner',
  content_height: '2000px',
};
