import {
  forgetOtpType,
  forgetType,
  getMeType,
  LoginType,
  RegisterConfirmType,
  RegisterResModels,
} from '@/shared/types/authApi';
import { AxiosResponse } from 'axios';
import httpClient from './httpClient';
import {
  AUTH_FORGET_NEW_PASSWORD,
  AUTH_FORGET_PASSWORD,
  AUTH_FORGET_PASSWORD_CONFIRM,
  AUTH_LOGIN,
  AUTH_ME,
  AUTH_REGISTER,
  AUTH_REGISTER_CONFIRM,
} from './URLs';

interface RegisterBody {
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

interface RegisterConfirm {
  phone: string;
  otp: string;
}

interface LoginBody {
  phone: string;
  password: string;
}

interface forget {
  phone: string;
}

interface forgetNewPassword {
  token: string;
  new_password: string;
  new_password_confirm: string;
}

const register = async (
  body: RegisterBody,
): Promise<AxiosResponse<RegisterResModels>> => {
  const response = await httpClient.post(AUTH_REGISTER, body);
  return response;
};

const registerConfirm = async (
  body: RegisterConfirm,
): Promise<AxiosResponse<RegisterConfirmType>> => {
  const response = await httpClient.post(AUTH_REGISTER_CONFIRM, body);
  return response;
};

const auhLogin = async (body: LoginBody): Promise<AxiosResponse<LoginType>> => {
  const response = await httpClient.post(AUTH_LOGIN, body);
  return response;
};

const getMe = async (): Promise<AxiosResponse<getMeType>> => {
  const response = await httpClient.get(AUTH_ME);
  return response.data;
};

const authForgetPassword = async (
  body: forget,
): Promise<AxiosResponse<forgetType>> => {
  const res = await httpClient.post(AUTH_FORGET_PASSWORD, body);
  return res;
};

const authForgetConfirm = async (
  body: RegisterConfirm,
): Promise<AxiosResponse<forgetOtpType>> => {
  const res = await httpClient.post(AUTH_FORGET_PASSWORD_CONFIRM, body);
  return res;
};

const authForgetNewPassword = async (
  body: forgetNewPassword,
): Promise<AxiosResponse<LoginType>> => {
  const res = await httpClient.post(AUTH_FORGET_NEW_PASSWORD, body);
  return res;
};

export {
  auhLogin,
  authForgetConfirm,
  authForgetNewPassword,
  authForgetPassword,
  getMe,
  register,
  registerConfirm,
};
