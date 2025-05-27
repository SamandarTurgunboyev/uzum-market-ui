import { create } from 'zustand';

type PhoneNumber = {
    phone: string,
    setPhone: (phone: string) => void
};

export const usePhoneNumber = create<PhoneNumber>()((set) => ({
    phone: "",
    setPhone: phone => set({ phone })
}))