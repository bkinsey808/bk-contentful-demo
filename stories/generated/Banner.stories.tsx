import { Meta, Story } from '@storybook/react';
import React from 'react';

import Banner from '../../src/components/banner/Banner';
import { BannerProps } from '../../src/generated/types';

export default {
  component: Banner,
  title: 'Components/Banner',
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
