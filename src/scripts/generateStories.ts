import fs from 'fs/promises';
import path from 'path';

import { getTypeId } from '@/helpers/getTypeId';

import contentfulState from '../../src/generated/contentfulState.json';
import componentPaths from './componentPaths.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFormattedValue = (value: any) => {
  console.log(value);
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `[${value
    .map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { type, id } = getTypeId(item);
        return `\n    { type: '${type}', id: '${id}' },`;
      }
    )
    .join('')}\n  ]`;
};

const main = async () => {
  const types = Object.keys(componentPaths);

  for (const type of types) {
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
} as Meta<${type}Props>;

const ${type}Template: Story<${type}Props> = (args) => {
  return <${type} {...args} />;
};

${itemIds
  .map((itemId) => {
    const itemComponentName = itemId.replace(/ /g, '');
    const itemEntries = Object.entries(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (contentfulState as any).content[type].items[itemId]
    );
    return `export const ${itemComponentName} = ${type}Template.bind({});
${itemComponentName}.args = {
${itemEntries
  .map(([field, value]) => `  content_${field}: ${getFormattedValue(value)},`)
  .join('\n')}
};`;
  })
  .join('\n\n')}
`
    );
  }
};

main();
