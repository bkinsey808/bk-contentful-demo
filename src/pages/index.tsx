import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

import Page from '@/components/page/Page';
import {
  AppContext,
  appContextDefaultState,
  AppContextState,
} from '@/helpers/app.context';
import { recursivelySetState } from '@/helpers/recursivelySetState';
import { sdk } from '@/helpers/sdk';

const DEFAULT_SLUG = 'home';

const Home: NextPage<{ state: AppContextState }> = ({ state }) => {
  const appContext = useContext(AppContext);
  for (const key in state) {
    appContext[key as keyof typeof state] = state[
      key as keyof typeof state
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ] as any;
  }
  console.log({ appContext });

  return (
    <>
      <Head>
        <title>Contentful Demo</title>
      </Head>
      <Page slug={DEFAULT_SLUG} state={state} />;
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = await sdk.Page({ slug: DEFAULT_SLUG });
  const state = appContextDefaultState;
  const page = query?.pageCollection?.items[0];

  if (page) {
    state.pages[DEFAULT_SLUG] = page;
    await recursivelySetState(page, state);
  }

  return {
    props: {
      state,
    },
  };
};

export default Home;
