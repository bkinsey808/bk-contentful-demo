import Banner from './Banner';

export default {
  component: Banner,
  title: 'Banners/Home Banner',
};

export const HomeBanner = () => <Banner componentName="Home Banner" />;

export const AboutBanner = () => <Banner componentName="About Banner" />;
