import { create } from "zustand";

interface HeaderContentStoreProps {
  headerContent: string;
  headerSubContent?: string;
  setHeaderContent: (headerContent: string, headerSubContent?: string) => void;
}

const HeaderContentStore = create<HeaderContentStoreProps>((set) => ({
  // STATE
  headerContent: "",
  headerSubContent: "",

  //  ACTION
  setHeaderContent: (headerContent: string, headerSubContent?: string) => {
    set((state) => ({ headerContent, headerSubContent }));
  },
}));

export default HeaderContentStore;
