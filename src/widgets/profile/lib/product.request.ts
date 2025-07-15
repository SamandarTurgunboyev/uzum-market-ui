import httpClient from '@/shared/config/api/httpClient';
import { PRODUCT_CREATE } from '@/shared/config/api/URLs';
import { BigDiscountProductResModel } from '@/shared/types/productApi';
import { AxiosResponse } from 'axios';

export const product_request = {
  async createProduct(
    body: FormData,
  ): Promise<AxiosResponse<BigDiscountProductResModel>> {
    const res = await httpClient.post(PRODUCT_CREATE, body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  },
};
