/* istanbul ignore file */
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';

import { isClient } from '@/helpers/isClient';
import { setCssCustomProperties } from '@/theme/utils';

import { Context, initialRender } from '../helpers/sse.context';
import '../styles/globals.css';

if (isClient()) {
  setCssCustomProperties();
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const data: AppInitialProps = await App.getInitialProps(appContext);

  const sse = await initialRender(appContext, data);

  return {
    ...data.pageProps,
    ...sse,
  };
};
