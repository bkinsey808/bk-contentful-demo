import type { NextPage } from 'next';
import Head from 'next/head';

import Page from '@/components/Page';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contentful Demo</title>
      </Head>
      <Page slug="home" />;
    </>
  );
};

export default Home;
