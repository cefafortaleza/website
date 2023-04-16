import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: 'pr8kaaqe',
  dataset: 'production',
  apiVersion: '2023-02-21',
  useCdn: true,
});
