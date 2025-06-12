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
