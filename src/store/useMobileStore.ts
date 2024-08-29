import { create } from "zustand";

interface MobileStoreState {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

export const useMobileStore = create<MobileStoreState>((set) => ({
  isMobile: false,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
}));
