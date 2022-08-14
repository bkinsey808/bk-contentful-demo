import fs from 'fs/promises';
import path from 'path';

import tokens from '../../figma/tokens.json';
import contentfulState from '../../src/generated/contentfulState.json';

const getFieldValueType = (fieldType: string) => {
  switch (fieldType) {
    case 'Link':
      return 'ComponentReference';
    case 'Array':
      return 'ComponentReference[]';
  }
  return 'string';
};

const main = async () => {
  const componentTypes = Object.keys(contentfulState.componentTypes);

  const types = `export type Theme = '${Object.keys(tokens).join("' | '")}';

  export type ComponentType = ${componentTypes
    .map((type: string) => `\n  | '${type}'`)
    .join('')};

export interface Component {
  type: ComponentType;
  theme?: Theme;
}

export interface ComponentReference  {
  type: ComponentType;
  id: string;
}

${componentTypes
  .map((type: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fields = (contentfulState as any).componentTypes[type].fields;
    const fieldNames = Object.keys(fields);

    if (!fieldNames) {
      return undefined;
    }

    return `export interface ${type}Props extends Component {
  type: '${type}';
  ${fieldNames
    .map((fieldName: string) => {
      const fieldValue = fields[fieldName];
      return `content_${fieldName}: ${getFieldValueType(fieldValue)};`;
    })
    .join('\n  ')}
}`;
  })
  .join('\n\n')};
`;

  await fs.writeFile(
    path.join(__dirname, '../../src/generated/types.ts'),
    types
  );
};

main();
