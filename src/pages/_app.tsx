/* istanbul ignore file */
import { AppProps } from 'next/app';
import { useEffect } from 'react';

import { isClient } from '@/helpers/isClient';
import { maybeSetDarkModeClass } from '@/helpers/maybeSetDarkModeClass';
import { setCssCustomProperties } from '@/theme/utils';

import '../styles/globals.css';

if (isClient()) {
  setCssCustomProperties();
  maybeSetDarkModeClass();
}

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', maybeSetDarkModeClass);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', maybeSetDarkModeClass);
    };
  }, []);

  return <Component {...pageProps} />;
}
