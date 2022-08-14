import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { Component } from '@/components/component/Component';
import contentfulState from '@/generated/contentfulState.json';
import { PageProps } from '@/generated/types';

const DEFAULT_SLUG = process.env.NEXT_PUBLIC_DEFAULT_SLUG || 'home';

const SlugPage: NextPage<{ slug: string }> = ({ slug }) => {
  return (
    <>
      <Head>
        <title>Contentful Demo</title>
      </Head>
      <Component id={slug} type={'Page'} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug ?? DEFAULT_SLUG) as string;
  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(
    contentfulState?.content?.['Page']?.items ?? []
  ).map((key) => {
    const item = (
      contentfulState?.content?.['Page']?.items as unknown as {
        [key: string]: PageProps;
      }
    )[key];
    return { params: { slug: item?.content_slug ?? DEFAULT_SLUG } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export default SlugPage;
