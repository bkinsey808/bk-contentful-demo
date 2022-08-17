import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

import { getTokenStyles } from '@/helpers/getTokenStyles';

const Body: FC = () => {
  return (
    <body>
      <Main />
      <NextScript />
    </body>
  );
};

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        {/* shouldn't be necessary since we manage themes ourselves: 
          <meta name="color-scheme" content="light dark" /> */}

        {/* done inline instead of an external stylesheet as a perf optimization. no flash! */}
        <style>{getTokenStyles()}</style>
      </Head>
      <Body />
    </Html>
  );
};

export default Document;
