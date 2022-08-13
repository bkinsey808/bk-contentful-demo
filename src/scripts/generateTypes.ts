import fs from 'fs/promises';
import path from 'path';

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
  const contentfulFileName = path.join(
    __dirname,
    '../../src/generated/contentfulState.json'
  );

  const data = await fs.readFile(contentfulFileName);
  const contentfulState = JSON.parse(data.toString());

  const componentTypes = Object.keys(contentfulState.componentTypes);
  console.log(componentTypes);

  const types = `export type ComponentType = ${componentTypes
    .map((type: string) => `\n  | '${type}'`)
    .join('')};

export interface Component {
  type: ComponentType;
}

export interface ComponentReference  {
  type: ComponentType;
  id: string;
}

${componentTypes
  .map((type: string) => {
    const fields = contentfulState.componentTypes[type].fields;
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
