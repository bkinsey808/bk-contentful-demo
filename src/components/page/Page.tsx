import { FC } from 'react';

import {
  ComponentReference,
  PageProps,
  PageTemplateProps,
} from '@/generated/types';
import { getThemeClass } from '@/helpers/getThemeClass';
import { getTokenStyle } from '@/helpers/getTokenStyle';

import { Component } from '../component/Component';
import { getComponentProps } from '../component/getComponentProps';
import PageTemplate from './PageTemplate';

const getContentComponents = (content_content: ComponentReference[]) =>
  content_content.map(({ id, type }) => (
    <Component key={id} id={id} type={type} />
  ));

const Page: FC<PageProps> = ({
  content_title,
  content_pageTemplateComponent,
  content_content,
  theme,
  type: _type,
  children: _children,
  content_slug: _content_slug,
  ...tokens
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
      <div
        className={`${getThemeClass(theme)} h-[100vh] w-[100vw]`}
        style={getTokenStyle(tokens)}
      >
        <span className="font-bold">{content_title}</span>
        this is the page
        {getContentComponents(content_content)}
      </div>
    </PageTemplate>
  );
};

export default Page;
