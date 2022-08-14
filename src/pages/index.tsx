import type { NextPage } from 'next';
import Head from 'next/head';

import { Component } from '@/components/component/Component';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contentful Demo</title>
      </Head>
      <Component id={'home'} type={'Page'} />
    </>
  );
};

export default Home;
