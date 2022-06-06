import { GraphQLClient } from 'graphql-request';

import { getSdk } from '@/generated/graphql';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`;
const client = new GraphQLClient(endpoint, { headers: {} });

export const sdk = getSdk(client);
