import { FC } from 'react';

import { usePage } from '@/hooks/usePage';

import { AppContextState } from '../../helpers/app.context';
import Components from '../component/Components';

const Page: FC<{ slug: string; state?: AppContextState }> = ({
  slug,
  state,
}) => {
  const page = usePage(slug, state);

  return (
    <div>
      <span className="font-bold">{page?.title}</span>
      this is the page
      <Components items={page?.contentCollection?.items} state={state} />
    </div>
  );
};

export default Page;
