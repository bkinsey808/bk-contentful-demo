import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import Page from '@/components/page/Page';
import { appContextDefaultState, AppContextState } from '@/helpers/app.context';
import { recursivelySetState } from '@/helpers/recursivelySetState';
import { sdk } from '@/helpers/sdk';
import { useStateContext } from '@/hooks/useStateContext';

const DEFAULT_SLUG = process.env.NEXT_PUBLIC_DEFAULT_SLUG || 'home';

const SlugPage: NextPage<{ slug: string; state: AppContextState }> = ({
  slug,
  state,
}) => {
  useStateContext(state);

  return (
    <>
      <Head>
        <title>Contentful Demo</title>
      </Head>
      <Page slug={slug} state={state} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug ?? DEFAULT_SLUG) as string;
  const pageQuery = await sdk.PageItem({ slug });
  const state = appContextDefaultState;
  const page = pageQuery?.pageCollection?.items[0];

  if (page) {
    state.pages[slug] = page;
    await recursivelySetState(page, state);
  }

  return {
    props: {
      slug,
      state,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesQuery = await sdk.Pages();

  const paths = (pagesQuery.pageCollection?.items ?? []).map((item) => {
    return { params: { slug: item?.slug ?? DEFAULT_SLUG } };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export default SlugPage;
