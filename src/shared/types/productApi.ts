export interface GetAllProductResModels {
  data: GetAllProductDataResModels[];
}

export interface GetAllProductDataResModels {
  id: number;
  name: string;
  description: string;
  price: string;
  disCount: boolean;
  disPrice: string;
  banner: string[];
  media: string[];
}

export interface GetOneProductResModels {
  id: number;
  name: string;
  description: string;
  price: string;
  disCount: boolean;
  disPrice: string;
  banner: string[];
  media: string[];
  store: {
    id: number;
    store_name: string;
    addres: string;
    banner: string;
  };
}

export interface GetDisCountProduct {
  banner: string[];
  createdAt: string;
  description: string;
  disCount: boolean;
  disPrice: string;
  slug: string;
  id: number;
  media: string[];
  name: string;
  price: string;
  updateAt: string;
  discountPercent: string;
}

export interface GetMonthlyProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  slug: string;
  disCount: boolean;
  disPrice: string;
  banner: string[];
  media: string[];
}

export interface BigDiscountProductResModel {
  createdAt: string;
  description: string;
  disCount: boolean;
  disPrice: string;
  id: number;
  isFavorite: false;
  slug: string;
  name: string;
  price: string;
  rating: number;
  updateAt: string;
  media: string[];
  banner: string[];
}

export interface BigDiscountProductDataModel {
  data: BigDiscountProductResModel[];
}

export interface SavedProduct {
  message: string;
}
