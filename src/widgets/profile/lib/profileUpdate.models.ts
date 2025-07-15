export interface ProfileUpdateBodyModels {
  firstName: string;
  lastName: string;
  images: File | null;
}

export interface ProfileUpdateResModels {
  firstName: string;
  lastName: string;
  phone: string;
  images: string;
  isVerified: string;
  roles: string;
}

export interface UpdatePasswordBodyModels {
  old_password: string;
  new_password: string;
  password_confirm: string;
}

export interface StoreResModels {
  id: number;
  store_name: string;
  addres: string;
  banner: string;
  createdAt: string;
  updateAt: string;
  latitude: string;
  longitude: string;
}
