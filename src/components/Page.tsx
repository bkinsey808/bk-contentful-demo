import { FC } from 'react';
import { useSSE } from 'use-sse';

import { sdk } from '@/helpers/sdk';

console.log(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);

const HomeContent: FC<{ slug: string }> = ({ slug }) => {
  const [result] = useSSE<Awaited<ReturnType<typeof sdk.Page>>>(async () => {
    const r = await sdk.Page({ slug });
    console.log(r);
    return r;
  }, []);
  console.log({ result });
  return (
    <div>
      <span className="font-bold">
        {result?.pageCollection?.items?.[0]?.title}
      </span>
      <p>hello world</p>
    </div>
  );
};

export default HomeContent;
