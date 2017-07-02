export const getToken = () => {
  return localStorage.getItem('token');
};

export const saveToken = token => {
  return localStorage.setItem('token', token);
};

export const clearToken = () => {
  return localStorage.removeItem('token');
};
