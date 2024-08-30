import { create } from "zustand";

export interface ABOUT {
  id: number;
  title: string;
  "sub-title": string;
  content: string;
  keyword: string[];
  images: string[];
}

interface AboutState {
  about: ABOUT[];
  setAbout: (data: ABOUT[]) => void;
}

export const useDataStore = create<AboutState>((set) => ({
  about: [],
  setAbout: (data) => set({ about: data }),
}));
