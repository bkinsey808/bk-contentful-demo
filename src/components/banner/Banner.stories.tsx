import { ComponentMeta, ComponentStory } from '@storybook/react';

import Banner from './Banner';

export default {
  component: Banner,
  title: 'Banners',
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

// sadly, i don't know how to generate this list of banner types dynamically

export const HomeBanner = Template.bind({});
HomeBanner.args = { componentName: 'Home Banner' };

export const AboutBanner = Template.bind({});
AboutBanner.args = { componentName: 'About Banner' };
