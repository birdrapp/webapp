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

export const signUp = async data => post('/users', data);
