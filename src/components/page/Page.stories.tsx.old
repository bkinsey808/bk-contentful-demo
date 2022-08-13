import { ComponentMeta, ComponentStory } from '@storybook/react';

import Page from './Page';

export default {
  component: Page,
  title: 'Pages',
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const HomePage = Template.bind({});
HomePage.args = { slug: 'home' };

export const AboutPage = Template.bind({});
AboutPage.args = { slug: 'about' };
