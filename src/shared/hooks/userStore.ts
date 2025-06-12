import { create } from 'zustand';
import { getMeType } from '../types/authApi';

export interface UserStoreModel {
  user: getMeType | undefined;
  onChangeUser: (data: getMeType | undefined) => void;
}

const userStore = create<UserStoreModel>((set) => ({
  user: undefined,
  onChangeUser: (user) => {
    set({ user });
  },
}));

export { userStore };
