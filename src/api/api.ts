import axios, { AxiosError, AxiosResponse } from 'axios';
import { config } from '~/config/config';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 8000,
});

/* ------------- Request ------------- */

api.interceptors.request.use(
  requestConfig => {
    if (config.logNetworkMessages) {
      console.log('[Request interceptor]', requestConfig);
    }

    return requestConfig;
  },
  error => Promise.reject(error),
);

/* ------------- Response ------------- */
api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (config.logNetworkMessages) {
      console.log('[Response interceptor]', response);
    }
    console.log('Responsesssssss', response);

    return response;
  },
  (error: AxiosError) => {

    if (config.logNetworkMessages) {
      console.log('[Error interceptor]', error);
    }

    return Promise.reject(error);
  },
);

export default api;
