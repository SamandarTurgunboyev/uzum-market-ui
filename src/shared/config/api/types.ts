export interface ResWithPagination<T> {
  next_page: boolean;
  page: number;
  page_size: number;
  prev_page: boolean;
  total_pages: number;
  data: T[];
}

export interface ReqWithPagination {
  _start?: number;
  _limit?: number;
}
