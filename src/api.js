import {
  createFetch,
  base,
  accept,
  parse,
  createStack,
  method,
  json
} from 'http-client';

const baseUrl =
  process.env.REACT_APP_API_BASE_URL ||
  'https://birdrapi-staging.herokuapp.com';

const common = createStack(
  base(baseUrl),
  accept('application/json'),
  parse('json')
);

export const signUp = async data => {
  const fetch = createFetch(common, method('POST'), json(data));

  return fetch('/users');
};
