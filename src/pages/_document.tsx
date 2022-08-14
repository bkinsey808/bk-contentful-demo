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
        {/* done inline instead of an external stylesheet as a perf optimization. no flash! */}
        <style>{getTokenStyles()}</style>
      </Head>
      <Body />
    </Html>
  );
};

export default Document;
