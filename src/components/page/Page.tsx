import { FC } from 'react';

import {
  ComponentReference,
  PageProps,
  PageTemplateProps,
} from '@/generated/types';
import { getThemeClass } from '@/helpers/getThemeClass';

import { Component } from '../component/Component';
import { getComponentProps } from '../component/getComponentProps';
import PageTemplate from '../pageTemplate/PageTemplate';

const getContentComponents = (content_content: ComponentReference[]) =>
  content_content.map(({ id, type }) => (
    <Component key={id} id={id} type={type} />
  ));

const Page: FC<PageProps> = ({
  content_title,
  content_pageTemplateComponent,
  content_content,
  theme,
}) => {
  const { id, type } = content_pageTemplateComponent;
  const props = getComponentProps<PageTemplateProps>({
    id,
    type,
  });

  if (!props) {
    return null;
  }

  return (
    <PageTemplate {...props}>
      <div className={`${getThemeClass(theme)} h-[100vh] w-[100vw]`}>
        <span className="font-bold">{content_title}</span>
        this is the page
        {getContentComponents(content_content)}
      </div>
    </PageTemplate>
  );
};

export default Page;
