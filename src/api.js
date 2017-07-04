import { getToken } from './token';

const baseUrl =
  process.env.REACT_APP_API_BASE_URL ||
  'https://birdrapi-staging.herokuapp.com';

const request = async (path, opts) => {
  const res = await fetch(baseUrl + path, opts);
  const body = await res.json();

  if (!res.ok) {
    const err = new Error(`HTTP Error ${res.status}`);
    err.status = res.status;
    err.body = body;
    throw err;
  }

  return body;
};

const post = async (path, body) => {
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  return request(path, opts);
};

const get = async path => {
  const token = getToken();
  const opts = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return request(path, opts);
};

export const signUp = async data => post('/users', data);

export const signIn = async data => post('/tokens', data);

export const getUser = async () => get('/user');

export const getBirdList = async () => get('/user/bird_list');
