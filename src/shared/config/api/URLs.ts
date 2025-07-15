export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
export const IMAGE_URL = BASE_URL;

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
export const AUTH_PROFILE_UPDATE = '/api/v1/auth/update';
export const AUTH_UPDATE_PASSWORD = '/api/v1/auth/new-password';

export const CATEGORY = '/api/v1/category';
export const SUB_CATEGORY = '/api/v1/sub-category';
export const CHILD_CATEGORY = '/api/v1/child-category';
export const STORE = '/api/v1/store/create';

export const BRAND = '/api/v1/brand';

export const PRODUCT_ALL = '/api/v1/product/get-all/';
export const PRODUCT_CREATE = '/api/v1/product/create';
export const SAVE_PRODUCT = '/api/v1/save-product';
export const MY_PRODUCT = '/api/v1/product/my-product';
export const PRODUCT_ID = '/api/v1/product/';
export const PRODUCT_BIG_DISCOUNT = '/api/v1/product/big-discount';
export const PRODUCT_DISCOUNT_PRODUCT = '/api/v1/product/discounted-product';
export const PRODUCT_MONTHLY = '/api/v1/product/monthly-products';
