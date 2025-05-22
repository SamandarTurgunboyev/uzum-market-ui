export interface CategoryFilter {
  label: string;
  value: string;
  items: CategoryItems[];
}

export interface CategoryItems {
  label: string;
  value: string;
  items: { label: string; value: string }[];
}
