import httpClient from '@/shared/config/api/httpClient';
import { STORE } from '@/shared/config/api/URLs';
import { AxiosResponse } from 'axios';
import { StoreResModels } from './profileUpdate.models';

const store_request = {
  async createStore(body: FormData): Promise<AxiosResponse<StoreResModels>> {
    const res = await httpClient.post(STORE, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  },
};

export default store_request;
