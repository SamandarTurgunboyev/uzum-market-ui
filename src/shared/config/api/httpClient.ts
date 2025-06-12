import { useLanguageStore } from '@/shared/hooks/languageStore';
import { getAccToken, getRefToken, saveAccToken } from '@/shared/lib/token';
import axios from 'axios';
import { AUTH_TOKEN_REFRESH, BASE_URL } from './URLs';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      config.headers['Accept-Language'] = useLanguageStore.getState().language;
    }
    const accessToken = getAccToken('uzum-acc');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefToken('uzum-ref');

    if (!refreshToken) {
      throw new Error('Refresh token mavjud emas');
    }

    const response = await axios.post(`${BASE_URL}${AUTH_TOKEN_REFRESH}`, {
      refreshToken: refreshToken,
    });
    const { accessToken: newAccessToken } = response.data;

    saveAccToken('uzum-acc', newAccessToken);

    return newAccessToken;
  } catch (error) {
    throw error;
  }
};

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.data.statusCode === 401) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return httpClient(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token bilan xatolik:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default httpClient;
