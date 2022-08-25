import fs from 'fs/promises';
import path from 'path';

import tokens from '../../figma/tokens.json';
import contentfulState from '../../src/generated/contentfulState.json';
import { getTokenNames } from '../../src/helpers/getTokenNames';
import { getThemeTokenStyles } from '../helpers/getThemeTokenStyles';
import { getTypeId } from '../helpers/getTypeId';
import componentPaths from './componentPaths.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFormattedValue = (value: any) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }

  if (Array.isArray(value)) {
    return `[${value
      .map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => {
          const { type, id } = getTypeId(item);
          return `\n    { type: '${type}', id: '${id}' },`;
        }
      )
      .join('')}\n  ]`;
  }

  console.log(value, getTypeId(value));
  const typeId = getTypeId(value);
  if (!typeId) {
    return undefined;
  }
  const { type, id } = typeId;
  return `{ type: '${type}', id: '${id}' }`;
};

const main = async () => {
  const types = Object.keys(componentPaths);

  for (const type of types) {
    const fields = Object.keys(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (contentfulState.componentTypes as any)[type]?.fields
    );
    const componentPath = (componentPaths as { [type: string]: string })[
      type
    ] as string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const itemIds = Object.keys((contentfulState.content as any)[type]?.items);

    await fs.writeFile(
      path.join(__dirname, `../../stories/generated/${type}.stories.tsx`),
      `import { Meta, Story } from '@storybook/react';
import React from 'react';

import ${type} from '../../${componentPath}';
import { ${type}Props } from '../../src/generated/types';

export default {
  component: ${type},
  title: 'Components/${type}',
  argTypes: {
${fields
  .map(
    (field) => `    content_${field}: {
      table: {
        category: 'Contentful',
      },
    },`
  )
  .join('\n')}
    theme: {
      options: [${Object.keys(tokens)
        .map((token) => `'${token}'`)
        .join(', ')}],
      control: { type: 'select' },
    },
${getTokenNames('color')
  .map(
    (tokenName) => `    '${tokenName}': {
      table: {
        category: 'Colors',
      },
      control: 'color',
    },\n`
  )
  .join('')}${getTokenNames('borderRadius')
        .map(
          (tokenName) => `    '${tokenName}': {
      control: { type: 'range', min: 0, max: 4, step: 0.125 },
    },\n`
        )
        .join('')}  },
} as Meta<${type}Props>;

const ${type}Template: Story<${type}Props> = (args) => {
  if (args['--token--radius-default']) {
    args['--token--radius-default'] += 'rem';
  }
  return <${type} {...args} />;
};

${itemIds
  .map((itemId) => {
    const itemComponentName = itemId.replace(/ /g, '');
    const itemEntries = Object.entries(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (contentfulState as any).content[type].items[itemId]
    );
    return `export const ${itemComponentName} = ${type}Template.bind({});\n${itemComponentName}.args = {${itemEntries
      .map(
        ([field, value]) => `\n  content_${field}: ${getFormattedValue(value)},`
      )
      .join('')}\n};`;
  })
  .join('\n\n')}\n`
    );
  }

  const styles = getThemeTokenStyles();
  await fs.writeFile(
    path.join(__dirname, '../../src/generated/storybookStyles.css'),
    styles
  );
};

main();
