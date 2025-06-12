import { create } from 'zustand';
import {
  getAccToken,
  getRefToken,
  removeAccToken,
  removeRefToken,
  saveAccToken,
  saveRefToken,
} from '@/shared/lib/token';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (tokens: { access: string; refresh?: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: getAccToken('uzum-acc'),
  refreshToken: getRefToken('uzum-ref'),
  setTokens: ({ access, refresh }) => {
    saveAccToken('uzum-acc', access);
    if (refresh) saveRefToken('uzum-ref', refresh);
    set((state) => ({
      accessToken: access,
      refreshToken: refresh || state.refreshToken,
    }));
  },
  logout: () => {
    removeAccToken('uzum-acc');
    removeRefToken('uzum-ref');
    set({ accessToken: null, refreshToken: null });
  },
}));
