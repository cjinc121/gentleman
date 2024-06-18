import axios from 'axios';

export const Api = axios.create({
  baseURL: '/',
});

Api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error && error.response && error.response?.status === 401) {
      localStorage.removeItem('user');
      window.location.assign(window.location.origin + window.location.search);
    }
    return Promise.reject(error);
  }
);
