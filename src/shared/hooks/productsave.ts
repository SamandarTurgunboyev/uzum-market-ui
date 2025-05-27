import { create } from 'zustand';

type Product = {
  product: { id: number; title: string; price: string; count: number }[];
  setCreate: (id: number, title: string, price: string, count?: number) => void;
  removeProduct: (id: number) => void;
  updateCount: (id: number, count: number) => void;
};

export const useProduct = create<Product>()((set) => ({
  product: [],
  setCreate: (id, title, price, count = 1) =>
    set((state) => {
      if (state.product.some((item) => item.id === id)) {
        return state; // Prevent duplicates
      }
      return {
        product: [...state.product, { id, title, price, count }],
      };
    }),
  removeProduct: (id) =>
    set((state) => ({
      product: state.product.filter((item) => item.id !== id),
    })),
  updateCount: (id, count) =>
    set((state) => ({
      product: state.product.map((item) =>
        item.id === id ? { ...item, count } : item,
      ),
    })),
}));
