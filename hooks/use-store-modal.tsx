import { create } from "zustand";

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => {};
  onCLose: () => {};
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClo: () => set({ isOpen: false }),
}))