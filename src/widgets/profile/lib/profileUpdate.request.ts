import httpClient from '@/shared/config/api/httpClient';
import {
  AUTH_PROFILE_UPDATE,
  AUTH_UPDATE_PASSWORD,
} from '@/shared/config/api/URLs';
import { AxiosResponse } from 'axios';
import {
  ProfileUpdateResModels,
  UpdatePasswordBodyModels,
} from './profileUpdate.models';

const profile_update_request = {
  async updateProfile(
    body: FormData,
  ): Promise<AxiosResponse<ProfileUpdateResModels>> {
    const res = await httpClient.put(AUTH_PROFILE_UPDATE, body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  },

  async updatePassword(
    body: UpdatePasswordBodyModels,
  ): Promise<AxiosResponse<{ message: string }>> {
    const res = await httpClient.put(AUTH_UPDATE_PASSWORD, { ...body });
    return res;
  },
};

export default profile_update_request;
