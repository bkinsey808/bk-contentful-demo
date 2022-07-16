import Banner from './Banner';

export default {
  component: Banner,
  title: 'Components/Banners',
};

export const HomeBanner = () => <Banner componentName="Home Banner" />;

export const AboutBanner = () => <Banner componentName="About Banner" />;
