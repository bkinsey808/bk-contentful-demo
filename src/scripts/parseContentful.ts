import fs from 'fs/promises';
import path from 'path';

import { upperCaseFirstLetter } from '../helpers/upperCaseFirstLetter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getState = (contentfulObj: any) => {
  const state = {
    componentTypes: {},
    content: {},
    componentReferences: {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentfulObj.contentTypes.forEach((contentType: any) => {
    const contentTypeId = upperCaseFirstLetter(contentType.sys.id) ?? '';
    state.content[contentTypeId] = {
      idField: contentType.displayField,
      items: {},
    };
    const componentType = upperCaseFirstLetter(contentTypeId);
    if (componentType) {
      state.componentTypes[componentType] = { fields: {} };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      contentType.fields.forEach((field: any) => {
        state.componentTypes[componentType].fields[field.id] =
          field.type === 'Symbol' ? 'string' : field.type;
      });
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentfulObj.entries.forEach((entry: any) => {
    const type = upperCaseFirstLetter(entry.sys.contentType.sys.id) ?? '';
    const idField = state.content[type].idField;
    const id = entry.fields[idField]['en-US'];
    const contentfulId = entry.sys.id;
    state.componentReferences[contentfulId] = {
      type,
      id,
    };
    state.content[type].items[id] = {};

    Object.keys(entry.fields).forEach(
      (key) => (state.content[type].items[id][key] = entry.fields[key]['en-US'])
    );
  });

  return state;
};

const getFilename = async () => {
  try {
    const contentfulPath = path.join(__dirname, '../../contentful');

    const filenames = await fs.readdir(contentfulPath);

    if (!filenames || filenames.length === 0) {
      throw new Error('No files found');
    }

    return path.join(contentfulPath, filenames[0]);
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  const filename = await getFilename();

  try {
    if (!filename) {
      throw new Error('No file found');
    }

    const data = await fs.readFile(filename);
    const parsed = JSON.parse(data.toString());
    const contentfulState = getState(parsed);

    const contentfulFileName = path.join(
      __dirname,
      '../generated/contentfulState.json'
    );
    await fs.writeFile(
      contentfulFileName,
      JSON.stringify(contentfulState, null, 2)
    );
  } catch (err) {
    console.log(err);
  }
};

main();
