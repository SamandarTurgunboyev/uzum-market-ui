// shared/hooks/languageStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'uz', // O'zbek tili standart sifatida
      setLanguage: (lang: string) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
