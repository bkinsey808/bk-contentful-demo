/* istanbul ignore file */
import { AppProps } from 'next/app';

import { AppContextProvider } from '@/helpers/app.context';
import { isClient } from '@/helpers/isClient';
import { setCssCustomProperties } from '@/theme/utils';

import '../styles/globals.css';

if (isClient()) {
  setCssCustomProperties();
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
