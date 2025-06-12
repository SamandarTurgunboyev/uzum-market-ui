import { AxiosResponse } from 'axios';
import httpClient from './httpClient';
import { COUNTRIES } from './URLs';
import { CountriesType } from '@/shared/types/coutriesApi';

const getAllCountry = async (): Promise<AxiosResponse<CountriesType[]>> => {
  const response = await httpClient.get(COUNTRIES);
  return response;
};

export { getAllCountry };
