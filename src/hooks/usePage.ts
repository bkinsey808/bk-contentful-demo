import { useContext, useEffect, useState } from 'react';

import { AppContext, AppContextState, Page } from '@/helpers/app.context';
import { sdk } from '@/helpers/sdk';

export const usePage = (slug: string, state?: AppContextState) => {
  const [page, setPage] = useState<Page | undefined>(state?.pages?.[slug]);
  const appContext = useContext(AppContext);
  const cached = appContext.pages[slug];

  useEffect(() => {
    if (page) {
      return;
    }
    if (cached) {
      setPage(cached);
      return;
    }

    sdk.PageItem({ slug }).then((query) => {
      const newPage = query?.pageCollection?.items?.[0];
      setPage(newPage);
      if (newPage) {
        appContext.pages[slug] = newPage;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return page;
};
