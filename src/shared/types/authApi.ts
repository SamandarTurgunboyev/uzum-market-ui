export interface RegisterConfirmType {
  user: {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    isVerified: boolean;
  };
  access_token: string;
  refreshToken: string;
}

export interface LoginType {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    isVerified: boolean;
    roles: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface forgetType {
  message: string;
}

export interface forgetOtpType {
  accessToken: string;
  refreshToken: string;
}

export interface getMeType {
  firstName: string;
  lastName: string;
  phone: string;
  images: string;
  isVerified: string;
  roles: string;
  _id: string;
}

export interface RegisterResModels {
  message: string;
  phone: string;
}
