import { Meta, Story } from '@storybook/react';
import React from 'react';

import Banner from '../../src/components/banner/Banner';
import { BannerProps } from '../../src/generated/types';

export default {
  component: Banner,
  title: 'Components/Banner',
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
} as Meta<BannerProps>;

const BannerTemplate: Story<BannerProps> = (args) => {
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
