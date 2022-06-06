import { FC } from 'react';
import { useSSE } from 'use-sse';

import { sdk } from '@/helpers/sdk';

const Page: FC<{ slug: string }> = ({ slug }) => {
  const [result] = useSSE<Awaited<ReturnType<typeof sdk.Page>>>(
    () => sdk.Page({ slug }),
    []
  );

  return (
    <div>
      <span className="font-bold">
        {result?.pageCollection?.items?.[0]?.title}
      </span>
      <p>hello world</p>
    </div>
  );
};

export default Page;
