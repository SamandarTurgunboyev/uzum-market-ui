import {
  BrandResModel,
  CategoryResModels,
  OneSubCategoryResModels,
  SubCategoryResModels,
} from '@/shared/types/categoryApi';
import { AxiosResponse } from 'axios';
import httpClient from './httpClient';
import { BRAND, CATEGORY, CHILD_CATEGORY, SUB_CATEGORY } from './URLs';

export const getCategory = async (): Promise<
  AxiosResponse<CategoryResModels>
> => {
  const response = await httpClient.get(CATEGORY);
  return response;
};

export const createCategory = async (body: {
  name_ru: string;
  name_uz: string;
  name_en: string;
}): Promise<AxiosResponse<CategoryResModels>> => {
  const response = await httpClient.post(CATEGORY, body);
  return response;
};

export const getSubCategory = async (params: {
  categoryId?: number | string;
}): Promise<AxiosResponse<SubCategoryResModels>> => {
  const response = await httpClient.get(SUB_CATEGORY, { params });
  return response;
};

export const createSubCategory = async (body: {
  id?: number | string;
  name_ru: string;
  name_uz: string;
  name_en: string;
}): Promise<AxiosResponse<SubCategoryResModels>> => {
  const response = await httpClient.post(SUB_CATEGORY, body);
  return response;
};

export const getChildCategory = async (params: {
  categoryId?: number | string;
}): Promise<AxiosResponse<CategoryResModels>> => {
  const response = await httpClient.get(CHILD_CATEGORY, { params });
  return response;
};

export const createChildCategory = async (body: {
  id?: number | string;
  name_ru: string;
  name_uz: string;
  name_en: string;
}): Promise<AxiosResponse<CategoryResModels>> => {
  const response = await httpClient.post(CHILD_CATEGORY, body);
  return response;
};

export const getOneChildCategory = async (params: {
  slug?: string;
}): Promise<AxiosResponse<OneSubCategoryResModels[]>> => {
  const response = await httpClient.get(`${CHILD_CATEGORY}/${params.slug}`);
  return response;
};

export const getBrand = async (): Promise<AxiosResponse<BrandResModel>> => {
  const response = await httpClient.get(BRAND);
  return response;
};

export const createBrand = async (body: {
  name: string;
}): Promise<AxiosResponse<BrandResModel>> => {
  const response = await httpClient.post(BRAND, body);
  return response;
};
