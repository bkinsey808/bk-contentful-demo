import fs from 'fs/promises';
import path from 'path';

import tokens from '../../figma/tokens.json';
import contentfulState from '../../src/generated/contentfulState.json';
import { getTokenNames } from '../../src/helpers/getTokenNames';

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
  const themeNames = Object.keys(tokens);
  const tokenNames = getTokenNames();

  const types = `export type Theme = '${themeNames.join("' | '")}';

  export type Token = '${tokenNames.join("' | '")}';

  export type ComponentType = ${componentTypes
    .map((type: string) => `\n  | '${type}'`)
    .join('')};

export type Component = {
  type: ComponentType;
  theme?: Theme;
} & {
  [key in Token]?: string;
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
    .join('\n  ')}\n}`;
  })
  .join('\n\n')};
`;

  await fs.writeFile(
    path.join(__dirname, '../../src/generated/types.ts'),
    types
  );
};

main();
