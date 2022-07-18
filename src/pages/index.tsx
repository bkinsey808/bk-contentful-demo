import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import Page from '@/components/page/Page';
import { appContextDefaultState, AppContextState } from '@/helpers/app.context';
import { recursivelySetState } from '@/helpers/recursivelySetState';
import { sdk } from '@/helpers/sdk';
import { useStateContext } from '@/hooks/useStateContext';

const DEFAULT_SLUG = process.env.NEXT_PUBLIC_DEFAULT_SLUG || 'home';

const Home: NextPage<{ state: AppContextState }> = ({ state }) => {
  useStateContext(state);

  return (
    <>
      <Head>
        <title>Contentful Demo</title>
      </Head>
      <Page slug={DEFAULT_SLUG} state={state} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  console.log('get static props');
  const query = await sdk.PageItem({ slug: DEFAULT_SLUG });
  const state = appContextDefaultState;
  const page = query?.pageCollection?.items[0];

  if (page) {
    console.log('setting default slug', DEFAULT_SLUG);
    state.pages[DEFAULT_SLUG] = page;
    await recursivelySetState(page, state);
    console.log({ state });
  }

  return {
    props: {
      state,
    },
  };
};

export default Home;
