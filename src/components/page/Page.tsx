import { FC } from 'react';

import {
  ComponentReference,
  PageProps,
  PageTemplateProps,
} from '@/generated/types';

import { Component } from '../component/Component';
import { getComponentProps } from '../component/getComponentProps';
import PageTemplate from '../pageTemplate/PageTemplate';

const getContentComponents = (content_content: ComponentReference[]) => {
  return content_content.map((component) => {
    const { id, type } = component;
    console.log({ id, type });
    return <Component key={id} id={id} type={type} />;
  });
};

const Page: FC<PageProps> = ({
  content_title,
  content_pageTemplateComponent,
  content_content,
}) => {
  const { id, type } = content_pageTemplateComponent;
  const props = getComponentProps<PageTemplateProps>({
    id,
    type,
  });

  if (!props) {
    return null;
  }

  console.log(getContentComponents(content_content));

  return (
    <PageTemplate {...props}>
      <>
        <span className="font-bold">{content_title}</span>
        this is the page
        {getContentComponents(content_content)}
      </>
    </PageTemplate>
  );
};

export default Page;
