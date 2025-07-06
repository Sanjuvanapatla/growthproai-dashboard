import { create } from 'zustand';

export const useBusinessStore = create((set) => ({
  data: null,
  setBusinessData: (newData) => set({ data: newData })
}));
