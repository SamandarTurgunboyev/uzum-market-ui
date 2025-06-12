import {
  GetAllProductResModels,
  GetOneProductResModels,
} from '@/shared/types/productApi';
import { AxiosResponse } from 'axios';
import httpClient from './httpClient';
import { BigDiscountProductResModel } from './types';
import { PRODUCT_ALL, PRODUCT_BIG_DISCOUNT, PRODUCT_ID } from './URLs';

const allProduct = async (): Promise<AxiosResponse<GetAllProductResModels>> => {
  const response = await httpClient.get(PRODUCT_ALL);
  return response.data;
};

const oneProduct = async (
  id: string | number,
): Promise<AxiosResponse<GetOneProductResModels>> => {
  const res = await httpClient.get(`${PRODUCT_ID}${id}`);
  return res;
};

const bigDiscount = async (): Promise<
  AxiosResponse<BigDiscountProductResModel[]>
> => {
  const res = await httpClient.get(PRODUCT_BIG_DISCOUNT);
  return res;
};

export { allProduct, bigDiscount, oneProduct };
