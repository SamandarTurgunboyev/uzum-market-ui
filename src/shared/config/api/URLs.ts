export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
export const IMAGE_URL = BASE_URL + '/uploads/';

export const AUTH_TOKEN_REFRESH = '/api/v1/auth/refresh/';
export const AUTH_REGISTER = '/api/v1/auth/register/';
export const AUTH_REGISTER_CONFIRM = '/api/v1/auth/register/confirm/';
export const AUTH_LOGIN = '/api/v1/auth/login/';
export const AUTH_ME = '/api/v1/auth/profile/';
export const COUNTRIES = '/api/v1/countries/';
export const AUTH_FORGET_PASSWORD = '/api/v1/auth/forget-password/';
export const AUTH_FORGET_PASSWORD_CONFIRM =
  '/api/v1/auth/forget-password/confirm';
export const AUTH_FORGET_NEW_PASSWORD =
  '/api/v1/auth/forget-password/newPasword';

export const PRODUCT_ALL = '/api/v1/product/getAll/';
export const PRODUCT_ID = '/api/v1/product/';
export const PRODUCT_BIG_DISCOUNT = '/api/v1/product/big-discount';
