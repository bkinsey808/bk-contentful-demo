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
  const query = await sdk.PageItem({ slug: DEFAULT_SLUG });
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
