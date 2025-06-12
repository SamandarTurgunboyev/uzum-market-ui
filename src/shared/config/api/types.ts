export interface ResWithPagination<T> {
  success: boolean;
  message: string;
  links: Links;
  total_items: number;
  total_pages: number;
  page_size: number;
  current_page: number;
  data: T[];
}

interface Links {
  next: number | null;
  previous: number | null;
}

export interface ReqWithPagination {
  _start?: number;
  _limit?: number;
}

export interface BigDiscountProductResModel {
  banner: string[];
  createdAt: string;
  description: string;
  disCount: boolean;
  disPrice: string;
  id: number;
  media: string[];
  name: string;
  price: string;
  updateAt: string;
  discountPercent: string;
}
