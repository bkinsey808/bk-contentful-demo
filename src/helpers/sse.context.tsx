import { NextComponentType, NextPageContext } from 'next';
import { AppContext } from 'next/app';
import ReactDOMServer from 'react-dom/server';
import { createServerContext } from 'use-sse';

import { isClient } from './isClient';

export const { ServerDataContext, resolveData } = createServerContext();

function getOrCreate() {
  if (isClient()) {
    window._initialDataContext = window?.__NEXT_DATA__?.props;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('use-sse').createBroswerContext();
  }
  return ServerDataContext;
}

export const Context = getOrCreate();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppPageProps = any;
// eslint-disable-next-line @typescript-eslint/ban-types
type WithCTX = NextComponentType<NextPageContext, {}, AppPageProps>;

export async function initialRender(
  appContext: AppContext,
  pageProps: AppPageProps
) {
  const WithAppContext: WithCTX = appContext.AppTree;

  ReactDOMServer.renderToString(
    <Context>
      <WithAppContext {...pageProps} />
    </Context>
  );

  return resolveData();
}
