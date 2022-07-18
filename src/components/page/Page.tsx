import { FC } from 'react';

import { usePage } from '@/hooks/usePage';

import { AppContextState } from '../../helpers/app.context';
import Components from '../component/Components';
import PageTemplate from '../pageTemplate/PageTemplate';

const Page: FC<{ slug: string; state?: AppContextState }> = ({
  slug,
  state,
}) => {
  const page = usePage(slug, state);

  return (
    <PageTemplate
      componentName={
        page?.pageTemplateComponent?.componentName ?? 'Default Page Template'
      }
      state={state}
    >
      <>
        <span className="font-bold">{page?.title}</span>
        this is the page
        <Components items={page?.contentCollection?.items} state={state} />
      </>
    </PageTemplate>
  );
};

export default Page;
