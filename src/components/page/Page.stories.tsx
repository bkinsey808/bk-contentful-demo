import PageComponent from './Page';

export default {
  component: PageComponent,
  title: 'Pages/Home Page',
};

export const HomePage = () => <PageComponent slug="home" />;
