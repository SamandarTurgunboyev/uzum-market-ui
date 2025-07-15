import {
  BigDiscountProductResModel,
  GetOneProductResModels,
  SavedProduct,
} from '@/shared/types/productApi';
import { AxiosResponse } from 'axios';
import httpClient from './httpClient';
import { ResWithPagination } from './types';
import {
  MY_PRODUCT,
  PRODUCT_ALL,
  PRODUCT_BIG_DISCOUNT,
  PRODUCT_DISCOUNT_PRODUCT,
  PRODUCT_ID,
  SAVE_PRODUCT,
} from './URLs';

const allProduct = async (params: {
  page_size?: number | string;
  page?: number | string;
  category?: string | number;
  min_price?: string;
  max_price?: string;
  brand?: string;
}): Promise<
  AxiosResponse<{ data: ResWithPagination<BigDiscountProductResModel> }>
> => {
  const response = await httpClient.get(PRODUCT_ALL, { params });
  return response;
};

const oneProduct = async (
  id: string | number,
): Promise<AxiosResponse<GetOneProductResModels>> => {
  const res = await httpClient.get(`${PRODUCT_ID}${id}`);
  return res;
};

const bigDiscount = async (params: {
  page_size?: number | string;
  page?: number | string;
  category?: string | number;
  min_price?: string;
  max_price?: string;
  brand?: string;
}): Promise<
  AxiosResponse<{ data: ResWithPagination<BigDiscountProductResModel> }>
> => {
  const res = await httpClient.get(PRODUCT_BIG_DISCOUNT, { params });
  return res;
};

const disCountProducts = async (params: {
  page_size?: number | string;
  page?: number | string;
  category?: string | number;
  min_price?: string;
  max_price?: string;
  brand?: string;
}): Promise<
  AxiosResponse<{ data: ResWithPagination<BigDiscountProductResModel> }>
> => {
  const res = await httpClient.get(PRODUCT_DISCOUNT_PRODUCT, { params });
  return res;
};

const monthlyProduct = async (params: {
  page_size?: number | string;
  page?: number | string;
  category?: string | number;
  min_price?: string;
  max_price?: string;
  brand?: string;
}): Promise<
  AxiosResponse<{ data: ResWithPagination<BigDiscountProductResModel> }>
> => {
  const res = await httpClient.get(PRODUCT_ALL, { params });
  return res;
};

const saveProduct = async (params: {
  page_size?: number | string;
  page?: number | string;
}): Promise<
  AxiosResponse<{ data: ResWithPagination<BigDiscountProductResModel> }>
> => {
  const res = await httpClient.get(SAVE_PRODUCT, { params });
  return res;
};

const savedProduct = async (params: {
  id: string | number | null;
}): Promise<AxiosResponse<SavedProduct>> => {
  const res = await httpClient.post(`${SAVE_PRODUCT}/${params.id}`);
  return res;
};

const myProduct = async (params: {
  page_size?: number | string;
  page?: number | string;
}): Promise<
  AxiosResponse<{ data: ResWithPagination<BigDiscountProductResModel> }>
> => {
  const res = await httpClient.get(MY_PRODUCT, { params });
  return res;
};

export {
  allProduct,
  bigDiscount,
  disCountProducts,
  monthlyProduct,
  myProduct,
  oneProduct,
  savedProduct,
  saveProduct,
};
